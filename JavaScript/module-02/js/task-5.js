const checkForSpam = function (message) {
  const checkForSpamSplit = message.split(" ");
  for (const spamWords of checkForSpamSplit) {
    if (
      checkForSpamSplit.includes("spam") ||
      checkForSpamSplit.includes("sale")
    ) {
      console.log("TRUE");
    } else {
      console.log("FALSE");
    }
  }
};

checkForSpam("Latest technology news");

//   console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!'));
