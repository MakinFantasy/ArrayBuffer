import Daemon from "../Daemon";

const received = new Daemon('DaemonTest');
test('Testing Deamon class attack', () => {
    received.attacks = 2;
    expect(received.attacks).toBe(72);
})


test('Testing Daemon class stoned', () => {
    received.stoned = 2;
    expect(received.stoned).toBe(67);
})