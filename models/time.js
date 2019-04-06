const date = new Date();
const opt = { year: "numeric", month: "long", day: "numeric" };
const japaneseDate = date.toLocaleDateString("ja-JP-u-ca-japanese", opt);

module.exports = japaneseDate;
