let total;
const calculateEngravingPrice = function (message, pricePerWord) {
  const arrew = message.split(" ");
  console.log(arrew);
  for (let i = 0; i <= arrew.length; i++) {
    total = pricePerWord * arrew.length;
    return total;
  }
};
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    Number(10)
  )
);

//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120
