import util from 'util';
import { assert } from 'chai';
import entry from '../entry';

suite('Date functionality');
const seed = {};
const SHIFT = 1000;

before(function () {
    entry.reset();
    seed.originalNow = Date.now();
    seed.Eloi = entry.shift(SHIFT);
});

test('new Date()', function () {
    assert.instanceOf(new Date(), Date);
});

test('Date.now()', function () {
    const now = Date.now();

    assert.isNumber(now);
    assert.isAtLeast(now, seed.originalNow + SHIFT);
});

test('Date.prototype.getFullYear()', function () {
    const date = new Date();

    assert.exists(date.getFullYear());
});

test('Date.parse()', function () {
    const timestamp = Date.parse('2025-01-01T00:00:00Z');

    assert.isNumber(timestamp);
    assert.isAbove(timestamp, 0);
});

test('Date.UTC()', function () {
    const timestamp = Date.UTC(2025, 0, 1);

    assert.isNumber(timestamp);
    assert.isAbove(timestamp, 0);
});

test('Date.prototype.getTime()', function () {
    const date = new Date();
    const time = date.getTime();

    assert.isNumber(time);
    assert.isAtLeast(time, seed.originalNow + SHIFT);
});

test('Date.prototype.toISOString()', function () {
    const date = new Date();
    const isoString = date.toISOString();

    assert.isString(isoString);
    assert.match(isoString, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
});

test('Date.prototype.toString()', function () {
    const date = new Date();
    const dateString = date.toString();

    assert.isString(dateString);
    assert.match(dateString, /^(?:[A-Z][a-z]{2} ){2}\d{2} \d{4} (?:\d{2}:){2}\d{2} GMT[+-]\d{4} \([ A-Za-z]+\)$/);
});

test('EloiDate logs like original Date', function () {
    const date = new Date();
    const inspected = util.inspect(date);

    assert.match(inspected, /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
});

test('Date.prototype.getUTCFullYear()', function () {
    const date = new Date();
    const year = date.getUTCFullYear();

    assert.isNumber(year);
    assert.isAtLeast(year, new Date(seed.originalNow + SHIFT).getUTCFullYear());
});

test('Date.prototype.getMonth()', function () {
    const date = new Date();
    const month = date.getMonth();

    assert.isNumber(month);
    assert.isAtLeast(month, 0);
    assert.isBelow(month, 12);
});

test('Date.prototype.getDate()', function () {
    const date = new Date();
    const day = date.getDate();

    assert.isNumber(day);
    assert.isAtLeast(day, 1);
    assert.isBelow(day, 32);
});

test('Date.prototype.getHours()', function () {
    const date = new Date();
    const hours = date.getHours();

    assert.isNumber(hours);
    assert.isAtLeast(hours, 0);
    assert.isBelow(hours, 24);
});

test('Date.prototype.getMinutes()', function () {
    const date = new Date();
    const minutes = date.getMinutes();

    assert.isNumber(minutes);
    assert.isAtLeast(minutes, 0);
    assert.isBelow(minutes, 60);
});

test('Date.prototype.getSeconds()', function () {
    const date = new Date();
    const seconds = date.getSeconds();

    assert.isNumber(seconds);
    assert.isAtLeast(seconds, 0);
    assert.isBelow(seconds, 60);
});

test('Date.prototype.getMilliseconds()', function () {
    const date = new Date();
    const milliseconds = date.getMilliseconds();

    assert.isNumber(milliseconds);
    assert.isAtLeast(milliseconds, 0);
    assert.isBelow(milliseconds, 1000);
});

test('Date.prototype.setFullYear()', function () {
    const date = new Date();
    const newYear = 2030;

    date.setFullYear(newYear);
    assert.equal(date.getFullYear(), newYear);
});

test('Date.prototype.setMonth()', function () {
    const date = new Date();
    const newMonth = 11; // December

    date.setMonth(newMonth);
    assert.equal(date.getMonth(), newMonth);
});

test('Date.prototype.setDate()', function () {
    const date = new Date();
    const newDay = 15;

    date.setDate(newDay);
    assert.equal(date.getDate(), newDay);
});

test('Date.prototype.setHours()', function () {
    const date = new Date();
    const newHours = 10;

    date.setHours(newHours);
    assert.equal(date.getHours(), newHours);
});

test('Date.prototype.setMinutes()', function () {
    const date = new Date();
    const newMinutes = 45;

    date.setMinutes(newMinutes);
    assert.equal(date.getMinutes(), newMinutes);
});

test('Date.prototype.setSeconds()', function () {
    const date = new Date();
    const newSeconds = 30;

    date.setSeconds(newSeconds);
    assert.equal(date.getSeconds(), newSeconds);
});

test('Date.prototype.setMilliseconds()', function () {
    const date = new Date();
    const newMilliseconds = 500;

    date.setMilliseconds(newMilliseconds);
    assert.equal(date.getMilliseconds(), newMilliseconds);
});

test('Date.prototype.toLocaleString()', function () {
    const date = new Date();
    const localeString = date.toLocaleString();

    assert.isString(localeString);
});

test('Date.prototype.toLocaleDateString()', function () {
    const date = new Date();
    const localeDateString = date.toLocaleDateString();

    assert.isString(localeDateString);
});

test('Date.prototype.toLocaleTimeString()', function () {
    const date = new Date();
    const localeTimeString = date.toLocaleTimeString();

    assert.isString(localeTimeString);
});

after(function () {
    entry.reset();
});
