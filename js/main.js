const applyIntlFormatPatch = function ee(e) {
    function t(u, r) {
        return typeof r == "bigint" ? `${r}n` : r instanceof Date ? r.getTime() : r;
    }
    function n(...u) {
        let r = JSON.stringify(u, t),
            a = 0;
        for (let l = 0; l < r.length; l++) (a += r.charCodeAt(l)), (a += a << 10), (a ^= a >> 6);
        return (a += a << 3), (a ^= a >> 11), (a += a << 15), a >>> 0;
    }
    function o(u, r, a) {
        let l = u[r];
        if (typeof l < "u") return l;
        let T = a();
        return (u[r] = T), T;
    }
    function c(u) {
        return { ...u };
    }
    let i = Date.prototype.toLocaleString,
        m = Date.prototype.toLocaleDateString;
    i &&
        (Date.prototype.toLocaleString = function (r, a) {
            let l = n(this, r, a);
            return o(e.Date.toLocaleString, l, () => i.call(this, r, a));
        }),
        m &&
            (Date.prototype.toLocaleDateString = function (r, a) {
                let l = n(this, r, a);
                return o(e.Date.toLocaleDateString, l, () => m.call(this, r, a));
            });
    let s = Object.getOwnPropertyDescriptors(Intl.DateTimeFormat.prototype).format.get,
        d = Intl.DateTimeFormat.prototype.formatRange,
        f = Intl.DateTimeFormat.prototype.formatToParts,
        g = Intl.DateTimeFormat.prototype.formatRangeToParts;
    function x(u) {
        let r = u.resolvedOptions(),
            a = {
                locale: r.locale,
                calendar: r.calendar,
                numberingSystem: r.numberingSystem,
                timeZone: r.timeZone,
                hour12: r.hour12,
                weekday: r.weekday,
                era: r.era,
                year: r.year,
                month: r.month,
                day: r.day,
                hour: r.hour,
                minute: r.minute,
                second: r.second,
                timeZoneName: r.timeZoneName,
            };
        for (let l in r) l in a || (a[l] = r[l]);
        return a;
    }
    s &&
        Object.defineProperty(Intl.DateTimeFormat.prototype, "format", {
            get() {
                function u(r) {
                    let a = x(this),
                        l = n(r, a);
                    return o(e.DateTimeFormat.format, l, () => s.call(this)(r));
                }
                return u.bind(this);
            },
        }),
        d &&
            (Intl.DateTimeFormat.prototype.formatRange = function (r, a) {
                let l = x(this),
                    T = n(r, a, l);
                return o(e.DateTimeFormat.formatRange, T, () => d.call(this, r, a));
            }),
        f &&
            (Intl.DateTimeFormat.prototype.formatToParts = function (r) {
                let a = x(this),
                    l = n(r, a);
                return o(e.DateTimeFormat.formatToParts, l, () => f.call(this, r)).map(c);
            }),
        g &&
            (Intl.DateTimeFormat.prototype.formatRangeToParts = function (r, a) {
                let l = x(this),
                    T = n(r, a, l);
                return o(e.DateTimeFormat.formatRangeToParts, T, () => g.call(this, r, a)).map(c);
            });
    let L = Number.prototype.toLocaleString;
    L &&
        (Number.prototype.toLocaleString = function (r, a) {
            let l = n(this, r, a);
            return o(e.Number.toLocaleString, l, () => L.call(this, r, a));
        });
    let p = Object.getOwnPropertyDescriptors(Intl.NumberFormat.prototype).format.get,
        h = Intl.NumberFormat.prototype.formatRange,
        b = Intl.NumberFormat.prototype.formatToParts,
        y = Intl.NumberFormat.prototype.formatRangeToParts;
    function I(u) {
        let r = u.resolvedOptions(),
            a = {
                locale: r.locale,
                numberingSystem: r.numberingSystem,
                style: r.style,
                currency: r.currency,
                currencyDisplay: r.currencyDisplay,
                currencySign: r.currencySign,
                unit: r.unit,
                unitDisplay: r.unitDisplay,
                minimumIntegerDigits: r.minimumIntegerDigits,
                minimumFractionDigits: r.minimumFractionDigits,
                maximumFractionDigits: r.maximumFractionDigits,
                minimumSignificantDigits: r.minimumSignificantDigits,
                maximumSignificantDigits: r.maximumSignificantDigits,
                useGrouping: r.useGrouping === !0 ? "auto" : r.useGrouping,
                notation: r.notation,
                compactDisplay: r.compactDisplay,
                signDisplay: r.signDisplay,
                roundingIncrement: r.roundingIncrement ?? 1,
                roundingMode: r.roundingMode ?? "halfExpand",
                roundingPriority: r.roundingPriority ?? "auto",
                trailingZeroDisplay: r.trailingZeroDisplay ?? "auto",
            };
        for (let l in r) l in a || (a[l] = r[l]);
        return a;
    }
    p &&
        Object.defineProperty(Intl.NumberFormat.prototype, "format", {
            get() {
                function u(r) {
                    let a = I(this),
                        l = n(r, a);
                    return o(e.NumberFormat.format, l, () => p.call(this)(r));
                }
                return u.bind(this);
            },
        }),
        h &&
            (Intl.NumberFormat.prototype.formatRange = function (r, a) {
                let l = I(this),
                    T = n(r, a, l);
                return o(e.NumberFormat.formatRange, T, () => h.call(this, r, a));
            }),
        b &&
            (Intl.NumberFormat.prototype.formatToParts = function (r) {
                let a = I(this),
                    l = n(r, a);
                return o(e.NumberFormat.formatToParts, l, () => b.call(this, r)).map(c);
            }),
        y &&
            (Intl.NumberFormat.prototype.formatRangeToParts = function (r, a) {
                let l = I(this),
                    T = n(r, a, l);
                return o(e.NumberFormat.formatRangeToParts, T, () => y.call(this, r, a)).map(c);
            });
};
const formatCache = {
    Date: { toLocaleString: {}, toLocaleDateString: { "2865195722": "Feb 22, 2024", "2923153122": "Apr 6, 2020" } },
    DateTimeFormat: { format: {}, formatRange: {}, formatToParts: {}, formatRangeToParts: {} },
    Number: { toLocaleString: { "1501173012": "0", "1884381089": "5" } },
    NumberFormat: { format: {}, formatRange: {}, formatToParts: {}, formatRangeToParts: {} },
};
applyIntlFormatPatch(formatCache);