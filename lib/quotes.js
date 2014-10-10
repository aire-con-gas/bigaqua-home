var bigaqua = bigaqua || {};
bigaqua.quotes = [
  "Marriage is give and take. You'd better give it to her or she'll take it anyway.",
  "I've got a new invention. It's a revolving bowl for tired goldfish.",
  "Wherever there is a human being, there is an opportunity for a kindness."
];

exports.getQuote = function() {
  var idx = Math.floor(Math.random() * bigaqua.quotes.length);
  return bigaqua.quotes[idx];
};
