import Magician from '../Magician';

const received = new Magician('Maxim');
test('Тест класса Magician attack', () => {
  received.attacks = 2;
  expect(received.attacks).toBe(90);
});

test('Тест класса Magician stoned', () => {
  received.stoned = 2;
  expect(received.stoned).toBe(85);
});