import { readFile } from "fs";

let powerSum = 0;

function getIDPowerSum(text: string) {
	const lines = text.split(/\n|;|:/g);
	const struct = {} as any;
	let rID = 0;

	lines.forEach((e) => {
		if (e[0] === "G") {
			struct[e.split(" ")[1]] = [];
			rID += 1;
		} else struct[rID].push(e.trim().split(",").join("").split(" "));
	});

	Object.entries(struct).forEach((v) => {
		let curr = [0, 0, 0];

		(v[1] as string[][]).forEach((a) => {
			for (let i = 0; i < a.length; i++) {
				if (!isNaN(Number(a[i]))) {
					const cubes = Number(a[i]);

					switch (a[i + 1]) {
						case "red": {
							if (cubes > curr[0]) curr[0] = cubes;
							continue;
						}
						case "green": {
							if (cubes > curr[1]) curr[1] = cubes;
							continue;
						}
						case "blue": {
							if (cubes > curr[2]) curr[2] = cubes;
							continue;
						}
					}
				}
			}
		});

		powerSum += curr.reduce((a, b) => a * b); // 74804
	});

	return powerSum;
}

readFile("./02/input.txt", "utf-8", (err, data) => {
	if (err) console.error(err);

	console.log(getIDPowerSum(data));
});
