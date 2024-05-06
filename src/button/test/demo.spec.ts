import path from 'node:path';
import simulate from 'miniprogram-simulate';

test('should render demo and match snapshot', async () => {
  const id = simulate.load(path.resolve(__dirname, '../demo/button'), {
    rootPath: path.resolve(__dirname, '../../'),
  });
  const container = simulate.render(id);

  container.attach(document.createElement('parent-wrapper'));
  expect(container.toJSON()).toMatchSnapshot();
});
