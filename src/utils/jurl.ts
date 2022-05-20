type Query = { key: string; val: string };

export const jurl = {
  escapeSpaces: function (str: string): string {
    const fmt = str.trim();
    return fmt.replaceAll(" ", "+");
  },

  buildQuery: function (query: Query): string {
    const kfmt = this.escapeSpaces(query.key);
    const vfmt = this.escapeSpaces(query.val);
    if (kfmt == "" || vfmt == "") return "";

    return `${kfmt}=${vfmt}`;
  },

  buildParams: function (...queries: Query[]): string {
    if (queries.length == 0) return "";

    let ret = "?";
    let qstr = "";
    const last = queries.splice(-1, 1);
    queries.forEach((query) => {
      qstr = this.buildQuery(query);
      if (qstr.length == 0) return;

      ret += `${qstr}&`;
    });

    ret += this.buildQuery(last[0]);
    return ret == "?" ? "" : ret;
  },

  buildURL: function (
    scheme: string,
    host: string,
    port: string,
    ...path: string[]
  ) {
    let url = `${scheme}://${host}:${port}`;
    path.forEach((p) => {
      if (p.length == 0) return;

      url = url.concat("/", this.escapeSpaces(p));
    });

    return url;
  },
};

export default jurl;
