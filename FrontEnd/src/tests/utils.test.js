import { formateDate } from "../utils/util";

describe("Utils tests", () => {
  test("format date", () => {
    const date = formateDate("2021-11-20T10:48:58Z");
    expect(date).toBe("Sat Nov 20 2021");
  });
});
