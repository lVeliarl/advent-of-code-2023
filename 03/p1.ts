import { readFile } from "fs";

let partSum = 0;

function getPartSum(text: string) {
	const lines = text.split("\n");
	const matchSymbols = /[\@\#\-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/g;

	for (let i = 0; i < lines.length; i++) {
		const symbols = lines[i].split("");
		let currNum = "";
		let prevSum;

		for (let k = 0; k < symbols.length; k++) {
			if (!isNaN(Number(symbols[k]))) {
				if (prevSum && prevSum === currNum) continue;
				let num = symbols[k];

				if (!currNum) {
					currNum += num;

          // naive lookahead
					if (!isNaN(Number(symbols[k + 1]))) {
						currNum += symbols[k + 1]; //maybe num
					}

					if (!isNaN(Number(symbols[k + 2]))) {
						currNum += symbols[k + 2]; //maybe num
					}
				}

				const lookup = [
					lines[i][k - 1],
					lines[i][k + 1], // same line
					lines[i - 1]?.[k],
					lines[i - 1]?.[k - 1],
					lines[i - 1]?.[k + 1], // prev line
					lines[i + 1]?.[k],
					lines[i + 1]?.[k - 1],
					lines[i + 1]?.[k + 1], // next line
				].join("");

				if (lookup.match(matchSymbols)) {
					partSum += Number(currNum);
					prevSum = currNum;
				}
			} else currNum = "";
		}
	}

	return partSum; // 528819
}

readFile("./03/input.txt", "utf-8", (err, data) => {
	if (err) console.error(err);

	console.log(getPartSum(data));
});
