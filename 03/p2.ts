import { readFile } from "fs";

let partSum = 0;

function getPartSum(text: string) {

}

readFile("./03/input.txt", "utf-8", (err, data) => {
	if (err) console.error(err);

	console.log(getPartSum(data));
});
