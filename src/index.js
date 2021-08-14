module.exports = function toReadable(number) {
  const decimal = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const twoDecimal = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const dozens = [
    'null',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hundreds = 'hundred';

  let result = '';

  let threeElem = '';
  let secondElem = '';
  let firstElem = '';

  let strNum = '';
  strNum = strNum + number;

  if (strNum.length === 3) {
    threeElem = Number(strNum[0]);
    secondElem = Number(strNum[1]);
    firstElem = Number(strNum[2]);
  } else if (strNum.length === 2) {
    secondElem = Number(strNum[0]);
    firstElem = Number(strNum[1]);
  } else {
    firstElem = Number(strNum[0]);
  }
  if (number === 0) {
    result = `${result}${decimal[0]}`;
  }
  let difference = number;

  if (number > 99) {
    difference = difference - threeElem * 100;
    switch (threeElem) {
      case 9:
        result = `${decimal[9]} ${hundreds}`;
        break;
      case 8:
        result = `${decimal[8]} ${hundreds}`;
        break;
      case 7:
        result = `${decimal[7]} ${hundreds}`;
        break;
      case 6:
        result = `${decimal[6]} ${hundreds}`;
        break;
      case 5:
        result = `${decimal[5]} ${hundreds}`;
        break;
      case 4:
        result = `${decimal[4]} ${hundreds}`;
        break;
      case 3:
        result = `${decimal[3]} ${hundreds}`;
        break;
      case 2:
        result = `${decimal[2]} ${hundreds}`;
        break;
      case 1:
        result = `${decimal[1]} ${hundreds}`;
        break;
    }
  }

  if (difference > 19) {
    if (number > 99) {
      result = `${result} `;
      number = number - threeElem * 100;
    }

    difference = difference - secondElem * 10;
    switch (secondElem) {
      case 9:
        result = `${result}${dozens[9]}`;
        break;
      case 8:
        result = `${result}${dozens[8]}`;
        break;
      case 7:
        result = `${result}${dozens[7]}`;
        break;
      case 6:
        result = `${result}${dozens[6]}`;
        break;
      case 5:
        result = `${result}${dozens[5]}`;
        break;
      case 4:
        result = `${result}${dozens[4]}`;
        break;
      case 3:
        result = `${result}${dozens[3]}`;
        break;
      case 2:
        result = `${result}${dozens[2]}`;
        break;
    }
  }

  if (difference > 9) {
    if (number > 19) {
      result = `${result} `;
      number = number - secondElem * 10;
    }

    switch (firstElem) {
      case 9:
        result = `${result}${twoDecimal[9]}`;
        break;
      case 8:
        result = `${result}${twoDecimal[8]}`;
        break;
      case 7:
        result = `${result}${twoDecimal[7]}`;
        break;
      case 6:
        result = `${result}${twoDecimal[6]}`;
        break;
      case 5:
        result = `${result}${twoDecimal[5]}`;
        break;
      case 4:
        result = `${result}${twoDecimal[4]}`;
        break;
      case 3:
        result = `${result}${twoDecimal[3]}`;
        break;
      case 2:
        result = `${result}${twoDecimal[2]}`;
        break;
      case 1:
        result = `${result}${twoDecimal[1]}`;
        break;
      case 0:
        result = `${result}${twoDecimal[0]}`;
        break;
    }
  } else {
    if (number > 9 && difference !== 0) {
      result = `${result} `;
    }

    switch (firstElem) {
      case 9:
        result = `${result}${decimal[9]}`;
        break;
      case 8:
        result = `${result}${decimal[8]}`;
        break;
      case 7:
        result = `${result}${decimal[7]}`;
        break;
      case 6:
        result = `${result}${decimal[6]}`;
        break;
      case 5:
        result = `${result}${decimal[5]}`;
        break;
      case 4:
        result = `${result}${decimal[4]}`;
        break;
      case 3:
        result = `${result}${decimal[3]}`;
        break;
      case 2:
        result = `${result}${decimal[2]}`;
        break;
      case 1:
        result = `${result}${decimal[1]}`;
        break;
    }
  }

  return result;
};
