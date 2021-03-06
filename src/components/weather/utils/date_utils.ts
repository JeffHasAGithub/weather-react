const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

export function getWeekday(s: string): string {
	const dt = toTimezone(new Date(s));

	return weekdays[dt.getDay()];
}

export function toTimezone(dt: Date): Date {
	const tzOff = dt.getTimezoneOffset();
	dt.setMinutes(dt.getMinutes() - tzOff);

	return dt;
}

export function toLocale(s: string): string {
	const dt = new Date(s);

	return dt.toLocaleDateString();
}

export function getCurrentTime(s: string): string {
	const dt = new Date(s);
	const tstr = dt.toLocaleTimeString("en-US");
	const tspl = tstr.split(":00");

	return tspl.join(" ");
}
