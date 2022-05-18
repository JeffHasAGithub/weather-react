const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const jdate = {
  getWeekday: function (s: string): string {
    const dt = this.toTimezone(new Date(s));

    return weekdays[dt.getDay()];
  },

  toTimezone: function (dt: Date): Date {
    const tzOff = dt.getTimezoneOffset();
    dt.setMinutes(dt.getMinutes() + tzOff);

    return dt;
  },
};

export default jdate;
