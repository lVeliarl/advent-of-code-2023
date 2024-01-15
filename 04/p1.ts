import { readFile } from "fs";

let points = 0;

function getPointSum(text: string) {
	const cards = {} as Record<string, string>;
	const lines = text.split(/\n|:|\|/g);

	lines.forEach((s, i) => {
		if (i % 3 === 1) cards[s] = "";
		if (i % 3 === 2) cards[lines[i - 1]] = s;
	});

	Object.entries(cards).forEach((c) => {
		const win = c[0].split(" ");
		const own = c[1].split(" ");
		let x = 0;

		win
			.filter((d) => d)
			.forEach((w: any) => {
				if (own.filter((d) => d).includes(w)) {
					if (!x) x += 1;
					else x *= 2;
				}
			});

		points += x;
	});

	return points; // 22897
}

readFile("./04/input.txt", "utf-8", (err, data) => {
	if (err) console.error(err);

	console.log(getPointSum(data));
});
