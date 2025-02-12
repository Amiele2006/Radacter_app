document.getElementById('replace-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var text = document.getElementById('text').value;
  var keywords = document.getElementById('keywords').value.split(' ');
  var replacementChar = document.getElementById('replacement-char').value;
  var output = replaceKeywords(text, keywords, replacementChar);
  document.getElementById('output-text').innerText = output;
});

function replaceKeywords(text, keywords, replacementChar) {
  var words = text.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (keywords.includes(words[i])) {
      words[i] = replacementChar.repeat(words[i].length);
    }
  }
  return words.join(' ');
}

//making a function to reset the form if clicked on 
function resetForm() {
  document.getElementById('replace-form').reset();
  document.getElementById('output-text').innerText = ""; // Clear the output text
}

//adding a click event listener to the reset button
document.getElementById('reset-button').addEventListener('click', function() {
  resetForm();
});