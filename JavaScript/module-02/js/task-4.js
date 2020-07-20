const formatString = function (string) {
  const checkStringLength = 40;
  if (string.length < checkStringLength) {
    return string;
  } else {
    const newString = string.substring(0, checkStringLength) + "...";
    return newString;
  }
};

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

//  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

// console.log(formatString('Curabitur ligula sapien.'));

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
