const e = require("express");
var Typo = require("typo-js");
var dictionary = new Typo("en_US");

const spellCheck = (req, res) => {
  try {
    const { text } = req.body;
    let ar = text.split(" ");
    let mismatched = [];
    let suggestion = [];
    ar.forEach((element) => {
      let is_correct = dictionary.check(element);
      if (is_correct === false) {
        let resp = dictionary.suggest(element);
        suggestion.push(resp);
        mismatched.push(element);
        console.log(resp);
      }
    });
    res.status(200).json({
      Mismatched: mismatched,
      Suggestion: suggestion,
    });
  } catch (error) {
    res.status(400).json({
      Error: error,
      Message: "Error",
    });
  }
};

module.exports = {
  spellCheck,
};
