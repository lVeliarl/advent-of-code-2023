import { readFile } from "fs";

let IDSum = 0;

function getIDSum(text: string) {
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
		let skip = false;

		(v[1] as string[][]).forEach((a) => {
			for (let i = 0; i < a.length; i++) {
				if (!isNaN(Number(a[i]))) {
					const cubes = Number(a[i]);

					if (
						(a[i + 1] === "red" && cubes > 12) ||
						(a[i + 1] === "green" && cubes > 13) ||
						(a[i + 1] === "blue" && cubes > 14)
					) {
						skip = true;
						return;
					}
				}
			}
		});

		if (!skip) IDSum += Number(v[0]);
	});

	return IDSum; // 2317
}

readFile("./02/input.txt", "utf-8", (err, data) => {
	if (err) console.error(err);

	console.log(getIDSum(data));
});
