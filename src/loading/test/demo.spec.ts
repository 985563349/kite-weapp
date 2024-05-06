import path from 'node:path';
import simulate from 'miniprogram-simulate';

test('loading snapshot', async () => {
  const id = simulate.load(path.resolve(__dirname, '../demo/loading'), 'basic');
  const container = simulate.render(id);

  container.attach(document.createElement('parent-wrapper'));
  expect(container.toJSON()).toMatchSnapshot();
});
