export default function createGameItem(game) {
  const el = document.createElement('DIV');
  el.classList.add('game-item');

  el.innerHTML = `
    <h3 class="game-item__name"></h3>
    <h4 class="game-item__popularity"</h4>
    <img class="game-item__pic">`;

  el.querySelector('.game-item__name').innerText = `${game.name}`;
  el.querySelector('.game-item__popularity').innerText = `${game.popularity} Viewers`;
  // el.querySelector('.game-item__pic').innerText = `${box.large}`;

  return el;
}
