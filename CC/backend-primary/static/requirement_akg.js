const requirementData = [
  {
    umur: 3,
    kelamin: 'LK',
    Berat: 13,
    Tinggi: 92,
    Kalori: 1350,
    Protein: 20,
    Lemak: 45,
    Karbohidrat: 215,
    isPregnant: 0,
  },
  {
    umur: 6,
    kelamin: 'LK',
    Berat: 19,
    Tinggi: 113,
    Kalori: 1400,
    Protein: 25,
    Lemak: 50,
    Karbohidrat: 220,
    isPregnant: 0,
  },
  {
    umur: 9,
    kelamin: 'LK',
    Berat: 27,
    Tinggi: 130,
    Kalori: 1650,
    Protein: 40,
    Lemak: 55,
    Karbohidrat: 250,
    isPregnant: 0,
  },
  {
    umur: 3,
    kelamin: 'PR',
    Berat: 13,
    Tinggi: 92,
    Kalori: 1350,
    Protein: 20,
    Lemak: 45,
    Karbohidrat: 215,
    isPregnant: 0,
  },
  {
    umur: 6,
    kelamin: 'PR',
    Berat: 19,
    Tinggi: 113,
    Kalori: 1400,
    Protein: 25,
    Lemak: 50,
    Karbohidrat: 220,
    isPregnant: 0,
  },
  {
    umur: 9,
    kelamin: 'PR',
    Berat: 27,
    Tinggi: 130,
    Kalori: 1650,
    Protein: 40,
    Lemak: 55,
    Karbohidrat: 250,
    isPregnant: 0,
  },
  {
    umur: 12,
    kelamin: 'LK',
    Berat: 36,
    Tinggi: 145,
    Kalori: 2000,
    Protein: 50,
    Lemak: 65,
    Karbohidrat: 300,
    isPregnant: 0,
  },
  {
    umur: 15,
    kelamin: 'LK',
    Berat: 50,
    Tinggi: 163,
    Kalori: 2400,
    Protein: 70,
    Lemak: 80,
    Karbohidrat: 350,
    isPregnant: 0,
  },
  {
    umur: 18,
    kelamin: 'LK',
    Berat: 60,
    Tinggi: 168,
    Kalori: 2650,
    Protein: 75,
    Lemak: 85,
    Karbohidrat: 400,
    isPregnant: 0,
  },
  {
    umur: 29,
    kelamin: 'LK',
    Berat: 60,
    Tinggi: 168,
    Kalori: 2650,
    Protein: 65,
    Lemak: 75,
    Karbohidrat: 430,
    isPregnant: 0,
  },
  {
    umur: 49,
    kelamin: 'LK',
    Berat: 60,
    Tinggi: 166,
    Kalori: 2550,
    Protein: 65,
    Lemak: 70,
    Karbohidrat: 415,
    isPregnant: 0,
  },
  {
    umur: 64,
    kelamin: 'LK',
    Berat: 60,
    Tinggi: 166,
    Kalori: 2150,
    Protein: 65,
    Lemak: 60,
    Karbohidrat: 340,
    isPregnant: 0,
  },
  {
    umur: 80,
    kelamin: 'LK',
    Berat: 58,
    Tinggi: 164,
    Kalori: 1800,
    Protein: 64,
    Lemak: 50,
    Karbohidrat: 275,
    isPregnant: 0,
  },
  {
    umur: 90,
    kelamin: 'LK',
    Berat: 58,
    Tinggi: 164,
    Kalori: 1600,
    Protein: 64,
    Lemak: 45,
    Karbohidrat: 235,
    isPregnant: 0,
  },
  {
    umur: 12,
    kelamin: 'PR',
    Berat: 38,
    Tinggi: 147,
    Kalori: 1900,
    Protein: 55,
    Lemak: 65,
    Karbohidrat: 280,
    isPregnant: 0,
  },
  {
    umur: 15,
    kelamin: 'PR',
    Berat: 48,
    Tinggi: 156,
    Kalori: 2050,
    Protein: 65,
    Lemak: 70,
    Karbohidrat: 300,
    isPregnant: 0,
  },
  {
    umur: 18,
    kelamin: 'PR',
    Berat: 52,
    Tinggi: 159,
    Kalori: 2100,
    Protein: 65,
    Lemak: 70,
    Karbohidrat: 300,
    isPregnant: 0,
  },
  {
    umur: 29,
    kelamin: 'PR',
    Berat: 55,
    Tinggi: 159,
    Kalori: 2250,
    Protein: 60,
    Lemak: 65,
    Karbohidrat: 360,
    isPregnant: 0,
  },
  {
    umur: 49,
    kelamin: 'PR',
    Berat: 56,
    Tinggi: 158,
    Kalori: 2150,
    Protein: 60,
    Lemak: 60,
    Karbohidrat: 340,
    isPregnant: 0,
  },
  {
    umur: 64,
    kelamin: 'PR',
    Berat: 56,
    Tinggi: 158,
    Kalori: 1800,
    Protein: 60,
    Lemak: 50,
    Karbohidrat: 280,
    isPregnant: 0,
  },
  {
    umur: 80,
    kelamin: 'PR',
    Berat: 53,
    Tinggi: 157,
    Kalori: 1550,
    Protein: 58,
    Lemak: 45,
    Karbohidrat: 230,
    isPregnant: 0,
  },
  {
    umur: 90,
    kelamin: 'PR',
    Berat: 53,
    Tinggi: 157,
    Kalori: 1400,
    Protein: 58,
    Lemak: 40,
    Karbohidrat: 200,
    isPregnant: 0,
  },
  {
    umur: 12,
    kelamin: 'PR',
    Berat: 38,
    Tinggi: 147,
    Kalori: 2200,
    Protein: 75,
    Lemak: 67.3,
    Karbohidrat: 315,
    isPregnant: 1,
  },
  {
    umur: 15,
    kelamin: 'PR',
    Berat: 48,
    Tinggi: 156,
    Kalori: 2350,
    Protein: 85,
    Lemak: 72.3,
    Karbohidrat: 335,
    isPregnant: 1,
  },
  {
    umur: 18,
    kelamin: 'PR',
    Berat: 52,
    Tinggi: 159,
    Kalori: 2400,
    Protein: 85,
    Lemak: 72.3,
    Karbohidrat: 335,
    isPregnant: 1,
  },
  {
    umur: 29,
    kelamin: 'PR',
    Berat: 55,
    Tinggi: 159,
    Kalori: 2550,
    Protein: 80,
    Lemak: 67.3,
    Karbohidrat: 395,
    isPregnant: 1,
  },
  {
    umur: 49,
    kelamin: 'PR',
    Berat: 56,
    Tinggi: 158,
    Kalori: 2450,
    Protein: 80,
    Lemak: 62.3,
    Karbohidrat: 375,
    isPregnant: 1,
  },
];

module.exports = requirementData;
