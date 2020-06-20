const googleSearch = require("./script");

const dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

describe("testing 123...", () => {
  it("this is an example test", () => {
    expect("hello").toBe("hello");
  });
});

describe("googleSearch", () => {
  it("this is a googleSearch test", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
