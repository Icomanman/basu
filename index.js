const rp = require("request-promise");
const cheerio = require("cheerio");
var head;
var txt;
var link;

module.exports = basu = page => {
  let msg;
  if (page === "home") {
    msg = "...INCOMING MESSAGE Homepage:";
    link = "https://www.immigration.govt.nz/new-zealand-visas";
    head_str = ".banner_texttitle";
    txt_str = ".banner_textcopy";
  } else {
    msg = "...INCOMING MESSAGE About page:***";
    link =
      "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/silver-fern-job-search-work-visa";
    head_str = ".banner_title";
    txt_str = ".banner_textcopy";
  }
  const options = {
    uri: link,
    transform: body => cheerio.load(body),
    msg: msg
  };

  {
    /* <div class="banner__centeredwrap">
			<span class="banner_icon banner_icon__comms">&nbsp;</span>
			<h2 class="banner_title">CLOSED</h2>
	
			<div class="banner_text">
				<p class="banner_textcopy">This visa is temporarily closed. Check this page for updates.</p>
			</div>
		</div> */
  }

  rp(options)
    .then($ => {
      head = $(head_str).text();
      txt = $(txt_str).text();
      console.log(`${options.msg}\n${head}:\n ${txt}`);
      bool = true;
    })
    .catch(err => console.log(err));
  return "success";
};
