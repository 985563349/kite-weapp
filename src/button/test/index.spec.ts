import { resolve } from 'node:path';
import simulate from 'miniprogram-simulate';

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
