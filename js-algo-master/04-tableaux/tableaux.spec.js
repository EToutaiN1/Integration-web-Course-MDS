'use strict';

describe("inverserSigne(tableau)", function () {
  it("[0, 1, 2, 3, 4]", function () {
    expect(inverserSigne([0, 1, 2, 3, 4])).toEqual([0, 1, 2, 3, 4]);
  });

  it("[-4, -3, -2, -1]", function () {
    expect(inverserSigne([-4, -3, -2, -1])).toEqual([4, 3, 2, 1]);
  });

  it("[0, -1, 2, -3, 4]", function () {
    expect(inverserSigne([0, -1, 2, -3, 4])).toEqual([0, 1, 2, 3, 4]);
  });
});

describe("somme(tableau)", function () {
  it("[1, 2, 3]", function () {
    expect(somme([1, 2, 3])).toBe(6);
  });

  it("[7]", function () {
    expect(somme([7])).toBe(7);
  });
});

describe("compterNegatifs(tableau)", function () {
  it("[1, 2, 3]", function () {
    expect(compterNegatifs([1, 2, 3])).toBe(0);
  });

  it("[-1, -2, -3]", function () {
    expect(compterNegatifs([-1, -2, -3])).toBe(3);
  });

  it("[0, -1, 2]", function () {
    expect(compterNegatifs([0, -1, 2])).toBe(1);
  });
});

describe("nNombres(n)", function () {
  it("n = 5", function () {
    expect(nNombres(5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("n = 1", function () {
    expect(nNombres(1)).toEqual([1]);
  });
});

describe("nNombresDecroissant(n)", function () {
  it("n = 5", function () {
    expect(nNombresDecroissant(5)).toEqual([5, 4, 3, 2, 1]);
  });
});

describe("nNombresImpairs(n)", function () {
  it("n = 10", function () {
    expect(nNombresImpairs(10)).toEqual([1, 3, 5, 7, 9]);
  });
});

describe("nNombresMultiplesDe5(n)", function () {
  it("n = 2", function () {
    expect(nNombresMultiplesDe5(2)).toEqual([]);
  });

  it("n = 23", function () {
    expect(nNombresMultiplesDe5(23)).toEqual([5, 10, 15, 20]);
  });
});

describe("nombresMultiplesDeN(n)", function () {
  it("n = 11", function () {
    expect(nombresMultiplesDeN(11)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99]);
  });
});

describe("unique(tableau)", function () {
  it("[0, 1, 2, 3, 4]", function () {
    expect(unique([0, 1, 2, 3, 4])).toBe(true);
  });

  it("[1, 1, 2, 3, 5, 8]", function () {
    expect(unique([1, 1, 2, 3, 5, 8])).toBe(false);
  });
  it("[1, 4, 2, 3, 8, 8]", function () {
    expect(unique([1, 4, 2, 3, 8, 8])).toBe(false);
  });
  it("[1, 4, 2, 3, 8, 1]", function () {
    expect(unique([1, 4, 2, 3, 8, 1])).toBe(false);
  });
});

describe("inverser(tableau)", function () {
  it("[1, 2, 3, 4, 5]", function () {
    expect(inverser([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it("[-1, 2, -3, 4, -5]", function () {
    expect(inverser([-1, 2, -3, 4, -5])).toEqual([-5, 4, -3, 2, -1]);
  });

  it("[1]", function () {
    expect(inverser([1])).toEqual([1]);
  });
});

describe("max(tableau)", function () {
  it("[1, 2, 3, 4]", function () {
    expect(max([1, 2, 3, 4])).toBe(4);
  });

  it("[4, 1, 2, 3]", function () {
    expect(max([4, 1, 2, 3])).toBe(4);
  });

  it("[1, 2, 4, 3]", function () {
    expect(max([1, 2, 4, 3])).toBe(4);
  });

  it("[5]", function () {
    expect(max([5])).toBe(5);
  });
});

describe("min(tableau)", function () {
  it("[1, 2, 3, 4]", function () {
    expect(min([1, 2, 3, 4])).toBe(1);
  });

  it("[4, 1, 2, 3]", function () {
    expect(min([4, 1, 2, 3])).toBe(1);
  });

  it("[2, 4, 3, 1]", function () {
    expect(min([2, 4, 3, 1])).toBe(1);
  });

  it("[5]", function () {
    expect(min([5])).toBe(5);
  });
});

describe("positionMax(tableau)", function () {
  it("[1, 2, 3, 4]", function () {
    expect(positionMax([1, 2, 3, 4])).toBe(3);
  });

  it("[4, 1, 2, 3]", function () {
    expect(positionMax([4, 1, 2, 3])).toBe(0);
  });

  it("[1, 2, 4, 3]", function () {
    expect(positionMax([1, 2, 4, 3])).toBe(2);
  });

  it("[5]", function () {
    expect(positionMax([5])).toBe(0);
  });
});

describe("positionMin(tableau)", function () {
  it("[1, 2, 3, 4]", function () {
    expect(positionMin([1, 2, 3, 4])).toBe(0);
  });

  it("[4, 1, 2, 3]", function () {
    expect(positionMin([4, 1, 2, 3])).toBe(1);
  });

  it("[2, 4, 3, 1]", function () {
    expect(positionMin([2, 4, 3, 1])).toBe(3);
  });

  it("[5]", function () {
    expect(positionMin([5])).toBe(0);
  });
});

describe("ordreCroissant(tableau)", function () {
  it("[1, 2, 3, 4]", function () {
    expect(ordreCroissant([1, 2, 3, 4])).toBe(true);
  });

  it("[1, 5, 9, 42]", function () {
    expect(ordreCroissant([1, 5, 9, 42])).toBe(true);
  });

  it("[3, 8, 4, 5]", function () {
    expect(ordreCroissant([3, 8, 4, 5])).toBe(false);
  });
  it("[1, 1, 9, 42]", function () {
    expect(ordreCroissant([1, 1, 9, 42])).toBe(true);
  });
});
