// Encodes a text using the encodeURIComponent function

const originalText = "¡Hello, world!";
const encodedText1 = encodeURIComponent(originalText);

console.log("Original text:", originalText);
console.log("Encoded text:", encodedText1);

// Decode the text using the decodeURIComponent function

const encodedText2 = "%C2%A1Hello%2C%20world%21";
const decodedText = decodeURIComponent(encodedText2);

console.log("Encoded text:", encodedText2);
console.log("Decoded text:", decodedText);
