export class Eloi {
    constructor(OriginalDate = Date, { global = true } = {}) {
        this._OriginalDate = OriginalDate;
        this._setGlobal = global;
    }

    shift(offsetMs) {
        const OriginalDate = this._OriginalDate;
        const EloiDate = class extends OriginalDate {
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
            global.Date = EloiDate;
        }

        return EloiDate;
    }

    reset() {
        if (this._setGlobal) {
            global.Date = this._OriginalDate;
        }
    }
}

export default new Eloi();
