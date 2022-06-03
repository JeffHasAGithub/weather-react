type Query = { key: string; val: string };

export function escapeSpaces(str: string): string {
	const fmt = str.trim();
	return fmt.replaceAll(" ", "+");
}

export function buildQuery(query: Query): string {
	const kfmt = escapeSpaces(query.key);
	const vfmt = escapeSpaces(query.val);
	if (kfmt == "" || vfmt == "") return "";

	return `${kfmt}=${vfmt}`;
}

export function buildParams(...queries: Query[]): string {
	if (queries.length == 0) return "";

	let ret = "?";
	let qstr = "";
	const last = queries.splice(-1, 1);
	queries.forEach((query) => {
		qstr = buildQuery(query);
		if (qstr.length == 0) return;

		ret += `${qstr}&`;
	});

	ret += buildQuery(last[0]);
	return ret == "?" ? "" : ret;
}

export function buildURL(scheme: string, host: string, port: string, ...path: string[]) {
	let url = `${scheme}://${host}:${port}`;
	path.forEach((p) => {
		if (p.length == 0) return;

		url = url.concat("/", escapeSpaces(p));
	});

	return url;
}
