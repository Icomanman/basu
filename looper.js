const basu = require("./index.js");

counter = () => {
	for (var i = 0; i < 360; i++) {
		setTimeout(() => console.log(i), 1000);
	}
};

const runner = (initFunc) => {
	basu();
	console.log("...loading");
	// (() => setTimeout(counter, 1000))();
	initFunc();
};

const waiter = () => {
	setTimeout(() => runner(waiter), 300000);
};

runner(waiter);

// waiter();
