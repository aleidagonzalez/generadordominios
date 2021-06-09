

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var dom = [".com", ".es"];
for (var i = 0; i < pronoun.length; i++) {
  for (var a = 0; a < adj.length; a++) {
    for (var n = 0; n < noun.length; n++) {
      for (var d = 0; d < dom.length; d++) {
        console.log(pronoun[i].concat(adj[a], noun[n], dom[d]));
      }
    }
  }
}


//$ node app.js para verlo en console
