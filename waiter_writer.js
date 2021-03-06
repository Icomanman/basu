const fs = require("fs");

const proj_dir = "C:\\Users\\GiulianoDiEnrico\\Desktop\\SkyCivEng";
const pack_dir = `${proj_dir}\\design-connections-calculations`;
const mod_dir = `${pack_dir}\\Calculations\\AISC\\WtoW\\modules`;
const rel_path = `${mod_dir}\\block_shear\\`;

const file = "block_shear_AISC.js";

let i = 0;
const main = () => {

	let dt = new Date();
	// let tm = dt.getTime();

	let log = fs.createWriteStream(rel_path, { flags: 'a' });

	if (file.indexOf(".js") > -1) {
		// for javascript 
		var data = `// TODO: save file; commit your work`;
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
};

waiter();