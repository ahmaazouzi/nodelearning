function log(something){
	console.log(something);
}
function logUC(something){
	console.log(something.toUpperCase());
}
module.exports.log = log;
module.exports.logUpperCase = logUC;