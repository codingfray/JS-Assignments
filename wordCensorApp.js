function censor() {
  let rawWord = document.getElementById("censor").value;
  console.log(rawWord);
  let wordToCensor = /shit|fuck|stupid|foolish/gi;
  let censoredText = rawWord.replace(wordToCensor, "****");
  //   document.getElementById();
  document.getElementById("result").innerText = censoredText;
}
