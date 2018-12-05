const basu = require("./index.js");

const runner = initFunc => {
  //   console.log("...loading Homepage\n");
  basu("home");
  //   console.log("...loading About");
  basu("about");

  initFunc();
};

const waiter = () => {
  setTimeout(() => runner(waiter), 300000);
};

runner(waiter);
