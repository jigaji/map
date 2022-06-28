import ErrorRepository from '../app';

test('Тестируем ошибки', () => {
  const error = new ErrorRepository();
  error.errors.set('testErr', 'test err message');

  expect(error.translate('testErr')).toBe('test err message');
  expect(error.translate('test')).toBe('Unknown error');
});
