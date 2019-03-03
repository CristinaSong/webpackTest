require("!style-loader!css-loader!./style.css");
// require("./style.css");//执行webpack runoob1.js bundle.js --module-bind 'css=style-loader!css-loader'
document.write(require("./runoob2.js"));