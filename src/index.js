export class Eloi {
    constructor(OriginalDate = Date, { global = true } = {}) {
        this._OriginalDate = OriginalDate;
        this._setGlobal = global;
    }

    shift(offsetMs) {
        const OriginalDate = this._OriginalDate;

        this._EloiDate = class extends OriginalDate {
            constructor(...args) {
                if (args.length === 0) {
                    super(OriginalDate.now() + offsetMs);
                } else {
                    super(...args);
                }
            }

            static now() {
                return OriginalDate.now() + offsetMs;
            }
        };

        if (this._setGlobal) {
            global.Date = this._EloiDate;
        }

        return this.EloiDate;
    }

    reset() {
        if (this._setGlobal) {
            global.Date = this._OriginalDate;
        }
    }
}

export default new Eloi();
