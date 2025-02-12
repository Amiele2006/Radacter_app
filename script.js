function replaceKeywords(text, keywords, replacementChar) {
  var words = text.split(' ');
  var keywordSet = new Set(keywords);
  for (var i = 0; i < words.length; i++) {
    if (keywordSet.has(words[i])) {
      words[i] = replacementChar.repeat(words[i].length);
    }
  }
  return words.join(' ');
}

document.getElementById('replace-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var text = document.getElementById('text').value;
  var keywords = document.getElementById('keywords').value.split(' ');
  var replacementChar = document.getElementById('replacement-char').value;
  var output = replaceKeywords(text, keywords, replacementChar);
  document.getElementById('output-text').innerText = output;
});

//making a function to reset the form if clicked on 
function resetForm() {
  document.getElementById('replace-form').reset();
  document.getElementById('output-text').innerText = ""; // Clear the output text
}

document.getElementById('reset-button').addEventListener('click', function(event) {
  event.preventDefault();
  resetForm();
})