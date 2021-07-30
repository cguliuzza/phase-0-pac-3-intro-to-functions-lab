function shout(string) {
    return string.toUpperCase();
  } 

function whisper(string) {
    return string.toLowerCase();
  } 

function logShout(string) {
    console.log(string.toUpperCase());
  } 

function logWhisper(string) {
    console.log(string.toLowerCase());
  } 

// FIX THIS FUNCTION and run npm test in the Terminal
// Note: Although there are 3 tests for sayHiToGrandma(), you only need to write one function.

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
}

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
}

  if (string === "I love you, Grandma.") {
    return "I love you, too."
} 

return "Are you eating enough?"
}