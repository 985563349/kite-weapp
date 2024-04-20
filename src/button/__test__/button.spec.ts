import simulate from 'miniprogram-simulate';
import { resolve } from 'node:path';

test('button', () => {
  const id = simulate.load(resolve(__dirname, '../button'));
  const button = simulate.render(id);
  const parent = document.createElement('parent-wrapper');

  button.attach(parent);

  expect(button.dom?.innerHTML).toBe(
    '<wx-button class="main--i-button">button</wx-button>'
  );

  button.detach();
});
