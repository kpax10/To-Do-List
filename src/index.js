
function component() {
  const element = document.createElement('div')
  element.textContent = 'Testing';
  console.log('fsd');

  return element
}

document.body.appendChild(component())