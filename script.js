// função para criar um botão
function newButton(text, callback) {
  const $body = document.querySelector('body');
  const $button = document.createElement('button');
  $button.textContent = text;

  // adiciona funções ao botão através de uma callback
  callback($button);

  // insere o botão no body
  $body.insertAdjacentElement('beforeend', $button);

  return $button;
};

newButton('Login', (button) => {
  button.style.cssText = `
    font-size: 20px;
  `;

  button.addEventListener('click', () => {
    console.log('Oi!');
  });
});

newButton('Sigup', (button) => {
  button.style.cssText = `
    color: blue;
  `;
});