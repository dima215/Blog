let telStr = '+380-(67)-22-00-77-1';
let telNumber = telStr.match(/\d/g).join('');
console.log(telNumber);