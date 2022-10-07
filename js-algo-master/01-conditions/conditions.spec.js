'use strict';

describe("maximum2Nombres(nombre1, nombre2)", function () {
  it("0 et 0", function () {
    expect(maximum2Nombres(0, 0)).toBe(0);
  });

  it("-1 et 1", function () {
    expect(maximum2Nombres(-1, 1)).toBe(1);
  });

  it("1 et 3", function () {
    expect(maximum2Nombres(1, 3)).toBe(3);
  });
});

describe("maximum3Nombres(nombre1, nombre2, nombre3)", function () {
  it("0 et 0 et 0", function () {
    expect(maximum3Nombres(0, 0, 0)).toBe(0);
  });

  it("-1 et 0 et 1", function () {
    expect(maximum3Nombres(-1, 0, 1)).toBe(1);
  });

  it("1 et 3 et 2", function () {
    expect(maximum3Nombres(1, 3, 2)).toBe(3);
  });

  it("7 et 6 et 5", function () {
    expect(maximum3Nombres(7, 6, 5)).toBe(7);
  });
});

describe("signe(nombre)", function () {
  it("-1", function () {
    expect(signe(-1)).toEqual("négatif");
  });

  it("0", function () {
    expect(signe(0)).toEqual("nul");
  });

  it("1", function () {
    expect(signe(1)).toEqual("positif");
  });
});

describe("typeTriangle(cote1, cote2, cote3)", function () {
  it("3 et 3 et 3", function () {
    expect(typeTriangle(3, 3, 3)).toEqual("équilatéral");
  });

  it("1 et 1 et 2", function () {
    expect(typeTriangle(1, 1, 2)).toEqual("isocèle");
  });

  it("1 et 2 et 1", function () {
    expect(typeTriangle(1, 2, 1)).toEqual("isocèle");
  });

  it("2 et 1 et 1", function () {
    expect(typeTriangle(2, 1, 1)).toEqual("isocèle");
  });

  it("1 et 2 et 3", function () {
    expect(typeTriangle(1, 2, 3)).toEqual("quelconque");
  });
});

describe("valeursIdentiques(nombre1, nombre2, nombre3)", function () {
  it("1 et 2 et 3", function () {
    expect(valeursIdentiques(1, 2, 3)).toBe(0);
  });

  it("1 et 1 et 2", function () {
    expect(valeursIdentiques(1, 1, 2)).toBe(2);
  });

  it("1 et 1 et 1", function () {
    expect(valeursIdentiques(1, 1, 1)).toBe(3);
  });
});

describe("jourDeLaSemaine(numeroJour)", function () {
  it("1", function () {
    expect(jourDeLaSemaine(1)).toEqual("lundi");
  });

  it("2", function () {
    expect(jourDeLaSemaine(2)).toEqual("mardi");
  });

  it("3", function () {
    expect(jourDeLaSemaine(3)).toEqual("mercredi");
  });

  it("4", function () {
    expect(jourDeLaSemaine(4)).toEqual("jeudi");
  });

  it("5", function () {
    expect(jourDeLaSemaine(5)).toEqual("vendredi");
  });

  it("6", function () {
    expect(jourDeLaSemaine(6)).toEqual("samedi");
  });

  it("7", function () {
    expect(jourDeLaSemaine(7)).toEqual("dimanche");
  });

  it("0", function () {
    expect(jourDeLaSemaine(0)).toEqual("erreur");
  });

  it("13", function () {
    expect(jourDeLaSemaine(13)).toEqual("erreur");
  });
});

describe("nombreJours(mois)", function () {
  it("1", function () {
    expect(nombreJours(1)).toBe(31);
  });

  it("2", function () {
    expect(nombreJours(2)).toBe(28);
  });

  it("3", function () {
    expect(nombreJours(3)).toBe(31);
  });

  it("4", function () {
    expect(nombreJours(4)).toBe(30);
  });

  it("5", function () {
    expect(nombreJours(5)).toBe(31);
  });

  it("6", function () {
    expect(nombreJours(6)).toBe(30);
  });

  it("7", function () {
    expect(nombreJours(7)).toBe(31);
  });

  it("8", function () {
    expect(nombreJours(8)).toBe(31);
  });

  it("9", function () {
    expect(nombreJours(9)).toBe(30);
  });

  it("10", function () {
    expect(nombreJours(10)).toBe(31);
  });

  it("11", function () {
    expect(nombreJours(11)).toBe(30);
  });

  it("12", function () {
    expect(nombreJours(12)).toBe(31);
  });
});

describe("intervalle(nombre1, nombre2, nombre3)", function () {
  it("1 est entre 0 et 2", function () {
    expect(intervalle(1, 0, 2)).toBe(true);
  });

  it("1 est entre 2 et 3", function () {
    expect(intervalle(1, 2, 3)).toBe(false);
  });

  it("1 est entre 2 et 0", function () {
    expect(intervalle(1, 2, 0)).toBe(true);
  });
});

describe("prixPhotocopies(nombre)", function () {
  it("3", function () {
    expect(prixPhotocopies(3)).toBeCloseTo(0.30, 2);
  });

  it("10", function () {
    expect(prixPhotocopies(10)).toBeCloseTo(1, 0);
  });

  it("11", function () {
    expect(prixPhotocopies(11)).toBeCloseTo(1.09, 2);
  });

  it("19", function () {
    expect(prixPhotocopies(19)).toBeCloseTo(1.81, 2);
  });

  it("20", function () {
    expect(prixPhotocopies(20)).toBeCloseTo(1.9, 1);
  });

  it("29", function () {
    expect(prixPhotocopies(29)).toBeCloseTo(2.71, 2);
  });

  it("30", function () {
    expect(prixPhotocopies(30)).toBeCloseTo(2.8, 1);
  });

  it("31", function () {
    expect(prixPhotocopies(31)).toBeCloseTo(2.88, 2);
  });

  it("56", function () {
    expect(prixPhotocopies(56)).toBeCloseTo(4.88, 2);
  });
});

describe("stationnementAlternatif(jour, numeroMaison)", function () {
  it("Le 1er devant le numéro 31", function () {
    expect(stationnementAlternatif(1, 31)).toBe(true);
  });

  it("Le 15 devant le numéro 2", function () {
    expect(stationnementAlternatif(15, 2)).toBe(false);
  });

  it("Le 16 devant le numéro 126", function () {
    expect(stationnementAlternatif(16, 126)).toBe(true);
  });

  it("Le 31 devant le numéro 37", function () {
    expect(stationnementAlternatif(31, 37)).toBe(false);
  });
});
