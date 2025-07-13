function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  const subtractiveMap = [
    ['CM', 900],
    ['CD', 400],
    ['XC', 90],
    ['XL', 40],
    ['IX', 9],
    ['IV', 4]
  ];

  let result = "";

  for (let [symbol, value] of subtractiveMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  for (let i = 0; i <= 6; i++) {
    const [symbol, value] = obj[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// ✅ Make sure this is at the bottom:
module.exports = convertToRoman;
