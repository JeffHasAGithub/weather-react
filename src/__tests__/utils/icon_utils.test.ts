import * as IconUtils from "../../components/weather/utils/icon_utils"

describe("IconUtils", () => {
	describe("getIcon", () => {
		test("throws when ICONS[code] === undefined", () => {
			expect(() => IconUtils.getIcon(0, true))
				.toThrow(`0 not a valid code`);
		});

		test("When isDay, returns value of ICONS[code].day", () => {
			expect(IconUtils.getIcon(1000, true))
				.toEqual("images/clear_day.svg");
		});

		test("When !isDay, returns value of ICONS[code].night", () => {
			expect(IconUtils.getIcon(1003, false))
			.toEqual("images/cloudy_night.svg");
		});
	});	
});
