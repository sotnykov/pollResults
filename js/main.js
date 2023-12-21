var results = document.getElementById("results");
var emojis = ["❤️", "😁", "😐", "☹️", "🤮"];
var counts = [0, 0, 0, 0, 0];

function handleClick(emoji) {
  counts[emojis.indexOf(emoji)]++;
  updateResults();
}

function updateResults() {
  results.innerHTML = "";
  for (var i = 0; i < emojis.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = emojis[i] + " <span class='count'>" + counts[i] + "</span>";
    results.appendChild(li);
  }
}

for (var i = 0; i < emojis.length; i++) {
  var li = document.createElement("li");
  li.innerHTML = emojis[i];
  li.addEventListener("click", handleClick.bind(null, emojis[i]));
  results.appendChild(li);
}