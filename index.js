function theBeatlesPlay(musicians, instruments) {
  var members = [];
  for (var i = 0; i < musicians.length; i++) {
    members.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return members;
}

function johnLennonFacts(facts) {
  var loudFacts = [];
  var i = 0;
  while (i < facts.length) {
    loudFacts.push(`${facts} + !!!`);
  }
  return loudFacts;
}
