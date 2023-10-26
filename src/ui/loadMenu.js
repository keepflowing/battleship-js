// module
const loadMenu = () => {
  const div = document.createElement('div');
  const button = document.createElement('button');
  button.id = 'startButton';
  button.innerText = 'Start';
  div.appendChild(button);

  return div;
};

export default loadMenu;
