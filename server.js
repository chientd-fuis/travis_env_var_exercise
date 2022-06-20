const favoriteFood = process.env.TEST_VALUE;
console.log(`My favorite food is ${favoriteFood}`);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
