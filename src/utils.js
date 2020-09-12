const c = util => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
  const applyUtilToChar = code => textToChars(util).reduce((a,b) => a ^ b, code);
  return text => text.split('')
    .map(textToChars)
    .map(applyUtilToChar)
    .map(byteHex)
    .join('');
}

const dc = util => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const applyUtilToChar = code => textToChars(util).reduce((a,b) => a ^ b, code);
  return encoded => encoded.match(/.{1,2}/g)
    .map(hex => parseInt(hex, 16))
    .map(applyUtilToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
}

const entry = c('justatest')
const str = entry('AIzaSyDpOO2hBDkiRgJmGbz7thOY2e3qxyVFiOQ');