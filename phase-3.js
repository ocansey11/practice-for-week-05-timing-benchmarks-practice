const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here'
  let result = []
  for(let i = increment; i <= increment * 10; i+= increment){
    let startTime = Date.now()
      let sum =  addNums(i)
    let endTime = Date.now()
    console.log((endTime - startTime))
    result.push(sum)
  }
  return result
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
  let result = []
    for(let i = increment; i <= increment * 10; i+= increment){
      let startTime = Date.now()
        let sum =  addManyNums(i)
      let endTime = Date.now()
      console.log((endTime - startTime))
      result.push(sum)
    }
  return result
}

n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
