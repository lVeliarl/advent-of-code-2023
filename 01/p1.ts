import { readFile } from "fs";

function getDigitSum(text: string) {
  return text.split('\n').map(s => s.replace(/\D+/g, '')).reduce((acc, curr) => {
    return acc + Number(curr[0] + curr[curr.length - 1]);
  }, 0);
}

readFile('./01/input.txt', 'utf-8', async(err, data) => {
  if (err) 
    console.log(err)

  console.log(getDigitSum(data)); // 55488
});