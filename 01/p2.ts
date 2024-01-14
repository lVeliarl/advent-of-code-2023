import { readFile } from "fs";

const digitMap: Record<string, string> = {
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
};

const rr = /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g;

function getCalibrationValue(text: string) {
  const matchArr = text.split('\n').map(s => [...s.matchAll(rr)]?.map(d => digitMap[d[1]] || d[1]));

  return matchArr ? matchArr.reduce((acc, curr) => acc + Number((curr[0] + curr[curr.length - 1])), 0) : null;
};

readFile('./01/input.txt', 'utf-8', (err, data) => {
  if (err) 
    console.log(err)

  console.log(getCalibrationValue(data)); // 55614
});