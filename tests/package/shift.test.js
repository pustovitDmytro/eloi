import { assert } from 'chai';
import entry, { Eloi } from '../entry';

suite('Shift');
const year = 365 * 24 * 60 * 60 * 1000;
const accepted = 5000;
const seed = {};

before(function () {
    entry.reset();
    seed.now = Date.now();
});

test('Shift forward global', function () {
    assert.instanceOf(entry, Eloi);
    entry.shift(year);
    const oneYearForward = new Date();
    const diff = +oneYearForward - seed.now;

    assert.isAtLeast(diff, year - accepted / 2, oneYearForward);
    assert.isAtMost(diff, year + accepted, oneYearForward);
    entry.reset();
});

test('Shift backward', function () {
    assert.instanceOf(entry, Eloi);
    entry.shift(-year);
    const oneYearBackward = new Date();

    const diff = seed.now - oneYearBackward;

    assert.isAtLeast(diff, year - accepted / 2, oneYearBackward);
    assert.isAtMost(diff, year + accepted, oneYearBackward);
    entry.reset();
});

after(function () {
    entry.reset();
});
