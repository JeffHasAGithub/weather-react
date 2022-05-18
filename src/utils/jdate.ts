const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

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

  toLocale: function (s: string): string {
    const dt = this.toTimezone(new Date(s));

    return dt.toLocaleDateString();
  },
};

export default jdate;
