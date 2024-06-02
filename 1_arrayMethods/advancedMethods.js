const products = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 800 },
  { name: "watch", price: 200 },
];

const productsNames = products.map((product) => product.name);

const expensiiveProducts = products.filter((product) => product.price > 500);

const totalCost = products.reduce((acc, product) => {
  acc += product.price;
  return acc;
}, 0);
