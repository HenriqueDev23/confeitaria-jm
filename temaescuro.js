
if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('escuro');
}

function mudartema() {
  document.body.classList.toggle('escuro');

  if (document.body.classList.contains('escuro')) {
    localStorage.setItem('tema', 'escuro');
  } else {
    localStorage.setItem('tema', 'claro');
  }
}
