import { readFile } from "fs";

function getCalibrationValue(text: string) {
  return text.split('\n').map(s => s.replace(/\D+/g, '')).reduce((acc, curr) => acc + Number(curr[0] + curr[curr.length - 1]), 0);
}

readFile('./01/input.txt', 'utf-8', (err, data) => {
  if (err) 
    console.log(err)

  console.log(getCalibrationValue(data)); // 55488
});