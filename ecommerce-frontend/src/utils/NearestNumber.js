export const NearestNumber=(inputNumber) =>{
    const x = Math.floor(inputNumber); // Get the integer part of the input number
    const decimalPart = inputNumber - x; // Get the decimal part of the input number
    let result;
  
    if (decimalPart <= 0.25) {
      result = x;
    } else if (decimalPart <= 0.75) {
      result = x + 0.5;
    } else {
      result = x + 1;
    }
  
    return result;
  }
  