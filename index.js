function theBeatlesPlay(musicians, instruments) {
  var members = [];
  for (var i = 0; i < musicians.length; i++) {
    members.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return members;
}
