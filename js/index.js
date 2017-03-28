var a = new Array(9);

function PC() {
  var id = Math.floor(Math.random() * 9);
  a[id] ? PC() : move(id, 'PC');
}

function checkEnd() {
  if (a[0]=='PC' && a[1]=='PC' && a[2]=='PC' || a[0]=='player' && a[1]=='player' && a[2]=='player')  return true;
  if (a[3]=='PC' && a[4]=='PC' && a[5]=='PC' || a[3]=='player' && a[4]=='player' && a[5]=='player')  return true;
  if (a[6]=='PC' && a[7]=='PC' && a[8]=='PC' || a[6]=='player' && a[7]=='player' && a[8]=='player')  return true;
  if (a[0]=='PC' && a[3]=='PC' && a[6]=='PC' || a[0]=='player' && a[3]=='player' && a[6]=='player')  return true;
  if (a[1]=='PC' && a[4]=='PC' && a[7]=='PC' || a[1]=='player' && a[4]=='player' && a[7]=='player')  return true;
  if (a[2]=='PC' && a[5]=='PC' && a[8]=='PC' || a[2]=='player' && a[5]=='player' && a[8]=='player')  return true;
  if (a[0]=='PC' && a[4]=='PC' && a[8]=='PC' || a[0]=='player' && a[4]=='player' && a[8]=='player')  return true;
  if (a[2]=='PC' && a[4]=='PC' && a[6]=='PC' || a[2]=='player' && a[4]=='player' && a[6]=='player')  return true;
  if(a[0] && a[1] && a[2] && a[3] && a[4] && a[5] && a[6] && a[7] && a[8]) return true;
}

function move(id, role) {
  if(a[id]) return false;
  a[id] = role;
  document.getElementById(id).className = 'cell ' + role;
  !checkEnd() ? (role == 'player') ? PC() : null : reset()
}

function reset() {
	setTimeout(" alert('The End, lol, kek, 4ebyrek!')", 500);

setTimeout(  "location.reload()",1000);
}
