import path from 'node:path';
import simulate from 'miniprogram-simulate';

test('button snapshot', async () => {
  const id = simulate.load(path.resolve(__dirname, '../demo/button'), 'basic');
  const container = simulate.render(id);

  container.attach(document.createElement('parent-wrapper'));
  expect(container.toJSON()).toMatchSnapshot();
});
