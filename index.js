const rp = require("request-promise");
const cheerio = require("cheerio");

module.exports = basu = () => {
	const options = {
		// uri: "https://www.immigration.govt.nz/new-zealand-visas",
		uri:
			"https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/silver-fern-job-search-work-visa",
		transform: (body) => cheerio.load(body)
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
		.then(($) => {
			const head = $(".banner_title").text();
			const txt = $(".banner_textcopy").text();
			console.log("Got the message:");
			console.log(`${head} ${txt}`);
			bool = true;
			return null;
		})
		.catch((err) => console.log(err));
};
