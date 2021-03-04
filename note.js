const fs = require("fs");

const proj_dir = "C:\\Users\\GiulianoDiEnrico\\Desktop\\SkyCivEng";
const pack_dir = `${proj_dir}\\design-connection-calculations`;
const mod_dir = `${pack_dir}\\Calculations\\AISC\\WtoW\\modules`;
const ui_dir = `${proj_dir}\\design-connection-ui-2020\\js\\`;
// const mod_dir = `${pack_dir}\\Calculations\\AISC\\Brace\\`;

// const rel_path = `${mod_dir}\\report_modules\\`;
// const rel_path = `${mod_dir}\\block_shear\\`;

// const file = "block_shear_AISC.js";
// const file = "common_rep.js";

const rel_path = `${ui_dir}\\mod\\`;
// const rel_path = `${ui_dir}\\mod\\graphics\\renderer`;
// const file = "graphics_extension.mjs";
// const file = "fixtures_graphics\\welds.mjs";
// const file = "part.js";
const file = "graphics_events.mjs";

let i = 0;
const main = () => {
    let dt = new Date();
    // let tm = dt.getTime();

    let log = fs.createWriteStream(`${rel_path}${file}`, { flags: 'a' });
    if (file.match("js")) {
        // for javascript 
        var data = `// TODO: save file; commit your changes`;
    } else if (file.indexOf(".py") > -1) {
        // for python
        var data = `# REM: save file; commit changes`;
    } else {
        var data = "just some text file."
    };
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