/* via: https://stackoverflow.com/questions/29046635/javascript-es6-cross-browser-detection */
function supports_es6_features() {
  "use strict";

  try {
    eval("class Foo {}");
    eval("var foo = (x)=>x+1");
  }
  catch (e) { return false; }
  return true;
}

if (supports_es6_features()) {
  sources = ["js/japanese.js", "js/randstr.js", "js/genstr.js"]
  for (var src of sources) {
    var s = document.createElement('script');
    s.src = src;
    document.head.appendChild(s);
  }
} else {
  // show error message
  document.querySelector('#alert-box').style.display="";
}
