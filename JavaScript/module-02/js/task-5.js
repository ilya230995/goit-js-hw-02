const checkForSpam = function (message) {
  const checkForSpamSplit = message.split(" ");
  for (const spamWords of checkForSpamSplit) {
    if (
      checkForSpamSplit.includes("spam") ||
      checkForSpamSplit.includes("sale")
    ) {
      return true;
    } else {
      return false;
    }
  }
};

// console.log(checkForSpam("Latest technology news"));

//   console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!'));
