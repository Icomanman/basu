let fs = require("fs");

let file = "sample.txt";

let rel_path = `${__dirname}/${file}`;

let i = 0;

const main = () => {

	let dt = new Date();
	// let tm = dt.getTime();

	let log = fs.createWriteStream(rel_path, { flags: 'a' });

	if (file.indexOf(".js") > -1) {
	// for javascript 
		var data = `// TODO: save file; prep work`;
	}
	else if (file.indexOf(".py") > -1) {  
	// for python
		var data = `# REM: save file; prep work`;
	}
	else {
		var data = "just some text file."
	}

	log.write(`\n${data}\n`);
	log.end();

	console.log("Successfully Written to File.");
	console.log(`${dt.toLocaleTimeString()}: ${i}`);
	i++;

}

const runnr = initFunc => initFunc();
let mins = 5;
let int = mins * 6 * 10000;
const waiter = () => {
	main();
	setTimeout(() => runnr(waiter), int);
}

waiter();