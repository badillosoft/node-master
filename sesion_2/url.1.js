const URL = require("url").URL;
//const { URL } = require("url");

const url = new URL("https://spanishfreetrial.webex.com/mw3200/mywebex/default.do?siteurl=spanishfreetrial&service=1&main_url=%2Fmc3200%2Fmeetingcenter%2Fdefault.do%3Fsiteurl%3Dspanishfreetrial%26main_url%3D%252Fmc3200%252Fmeetingcenter%252Fmeetingend%252Flandingpage.do%253Fsiteurl%253Dspanishfreetrial%2526ishost%253Dtrue%2526NM%253Dkmmx.aws5%252540gmail.com%2526AD%253Dkmmx.aws5%2540gmail.com%2526STD%253D1&rnd=-1438736056#page1");

console.log(url);
console.log("PARAM SITEURL=", url.searchParams.get("siteurl"));
console.log("HASH=", url.hash);