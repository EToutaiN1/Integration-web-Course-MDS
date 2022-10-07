'use strict';

describe("somme2Nombres(nombre1, nombre2)", function () {
  it("1 + 2", function () {
    expect(somme2Nombres(1, 2)).toBe(3);
  });

  it("(-1) + 2", function () {
    expect(somme2Nombres(-1, 2)).toBe(1);
  });

  it("1 + (-2)", function () {
    expect(somme2Nombres(1, -2)).toBe(-1);
  });

  it("(-1) + (-2)", function () {
    expect(somme2Nombres(-1, -2)).toBe(-3);
  });

  it("0 + 0", function () {
    expect(somme2Nombres(0, 0)).toBe(0);
  });
});

describe("moyenne2Nombres(nombre1, nombre2)", function () {
  it("1 et 1", function () {
    expect(moyenne2Nombres(1, 1)).toBe(1);
  });

  it("1 et 2", function () {
    expect(moyenne2Nombres(1, 2)).toBe(1.5);
  });

  it("(-1) et 1", function () {
    expect(moyenne2Nombres(-1, 1)).toBe(0);
  });
});


describe("aireTriangle(base, hauteur)", function () {
  it("Base = 1 | Hauteur = 2", function () {
    expect(aireTriangle(1, 2)).toBe(1);
  });

  it("Base = 3 | Hauteur = 5", function () {
    expect(aireTriangle(3, 5)).toBe(7.5);
  });
});

describe("circonferenceCercle(rayon)", function () {
  it("Rayon = 1", function () {
    expect(circonferenceCercle(1)).toBeCloseTo(6.283185307179586, 4);
  });

  it("Rayon = 3", function () {
    expect(circonferenceCercle(3)).toBeCloseTo(18.84955592153876, 4);
  });
});


describe("aireCercle(rayon)", function () {
  it("Rayon = 2", function () {
    expect(aireCercle(2)).toBeCloseTo(12.566370614359172, 4);
  });

  it("Rayon = 3", function () {
    expect(aireCercle(3)).toBeCloseTo(28.274333882308138, 4);
  });
});

describe("tva(prixHT)", function () {
  it("Prix HT = 100 euros", function () {
    expect(tva(100)).toBe(20);
  });

  it("Prix HT = 199 euros", function () {
    expect(tva(199)).toBeCloseTo(39.8, 1);
  });

  it("Prix HT = 1.99 euros", function () {
    expect(tva(1.99)).toBeCloseTo(0.398, 3);
  });
});

describe("interets(capital)", function () {
  it("Pour 100 euros", function () {
    expect(interets(100)).toBe(2);
  });

  it("Pour 199 euros", function () {
    expect(interets(199)).toBeCloseTo(3.98, 2);
  });

  it("Pour 1.99 euros", function () {
    expect(interets(1.99)).toBeCloseTo(0.0398, 4);
  });
});

describe("placement(capital, tauxInteret)", function () {
  it("Je place 100 euros à 3%", function () {
    expect(placement(100, 3)).toBe(103);
  });

  it("Je place 199 euros à 5%", function () {
    expect(placement(199, 5)).toBeCloseTo(208.95, 2);
  });

  it("Je place 1.99 euros à 1.5%", function () {
    expect(placement(1.99, 1.5)).toBeCloseTo(2.01985, 5);
  });
});

describe("prixTTC(prixUnitaireHT, quantite, tauxTVA)", function () {
  it("100 euros HT * 2 unités * TVA 20%", function () {
    expect(prixTTC(100, 2, 20)).toBe(240);
  });

  it("199 euros HT * 9 unités * TVA 20%", function () {
    expect(prixTTC(199, 9, 20)).toBeCloseTo(2149.2, 1);
  });

  it("1.99 euros HT * 42 unités * TVA 20%", function () {
    expect(prixTTC(1.99, 42, 20)).toBeCloseTo(100.29599999999999, 2);
  });
});

describe("dureeTrajet(vitesseMoyenne, distance)", function () {
  it("Vitesse moyenne = 4 m/s | Distance = 1 km", function () {
    expect(dureeTrajet(4, 1)).toBe(250);
  });

  it("Vitesse moyenne = 16 m/s | Distance = 4.2 km", function () {
    expect(dureeTrajet(16, 4.2)).toBeCloseTo(262.5, 1);
  });

  it("Vitesse moyenne = 123 m/s | Distance = 42 km", function () {
    expect(dureeTrajet(123, 42)).toBeCloseTo(341.4634146341463, 5);
  });
});

describe("secondes(heure, minute, seconde)", function () {
  it("1 heure, 1 minute et 1 seconde", function () {
    expect(secondes(1, 1, 1)).toBe(3661);
  });

  it("13 heures, 42 minutes et 42 secondes", function () {
    expect(secondes(13, 42, 42)).toBe(49362);
  });

  it("1 heure, 1 minute et 0 seconde", function () {
    expect(secondes(1, 1, 0)).toBe(3660);
  });

  it("1 heure, 0 minute et 1 seconde", function () {
    expect(secondes(1, 0, 1)).toBe(3601);
  });

  it("0 heure, 1 minute et 1 seconde", function () {
    expect(secondes(0, 1, 1)).toBe(61);
  });
});
