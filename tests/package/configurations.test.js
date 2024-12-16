import { assert } from 'chai';
import entry, { Eloi } from '../entry';

suite('Configurations');

before(function () {
    entry.reset();
});

test('Default configuration', function () {
    assert.exists(entry);

    assert.instanceOf(entry, Eloi);
    const EloiDate = entry.shift(50);

    assert.instanceOf(new EloiDate(), Date);
});

test('use constructor instance', function () {
    const EloiDate = new Eloi(Date, { global: false });

    assert.instanceOf(EloiDate, Eloi);
    assert.instanceOf(new (EloiDate.shift(100))(), Date);
    EloiDate.reset();
});

after(function () {
    entry.reset();
});
