"use strict"

describe("factorielle(n)", function () {
  it("0", function () {
    expect(factorielle(0)).toBe(1);
  });

  it("1", function () {
    expect(factorielle(1)).toBe(1);
  });

  it("2", function () {
    expect(factorielle(2)).toBe(2);
  });

  it("4", function () {
    expect(factorielle(4)).toBe(24);
  });
});

describe("nombrePremier(nombre)", function () {
  it("1", function () {
    expect(nombrePremier(1)).toBe(true);
  });
  it("2", function () {
    expect(nombrePremier(2)).toBe(true);
  });
  it("4", function () {
    expect(nombrePremier(4)).toBe(false);
  });
  it("15", function () {
    expect(nombrePremier(15)).toBe(false);
  });
  it("13", function () {
    expect(nombrePremier(13)).toBe(true);
  });
  it("621", function () {
    expect(nombrePremier(621)).toBe(false);
  });
});

describe("multiplier(nombre1, nombre2)", function () {
  it("3 * 4", function () {
    expect(multiplier(3, 4)).toBe(12);
  });

  it("0 * 2", function () {
    expect(multiplier(0, 2)).toBe(0);
  });

  it("5 * 0", function () {
    expect(multiplier(5, 0)).toBe(0);
  });

  it("-1 * 2", function () {
    expect(multiplier(-1, 2)).toBe(-2);
  });

  it("3 * -3", function () {
    expect(multiplier(3, -3)).toBe(-9);
  });

  it("-4 * -5", function () {
    expect(multiplier(-4, -5)).toBe(20);
  });
});

describe("miroir(nombre)", function () {
  it("4209", function () {
    expect(miroir(4209)).toBe(9024);
  });

  it("333", function () {
    expect(miroir(333)).toBe(333);
  });

  it("1234567", function () {
    expect(miroir(1234567)).toBe(7654321);
  });

  it("0", function () {
    expect(miroir(0)).toBe(0);
  });
});
