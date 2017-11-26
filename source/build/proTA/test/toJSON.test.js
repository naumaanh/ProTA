const toJSON = require('./toJSON');

test('convert array of strings into json object', () => {
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let time = ((h<10? "0":'')+h+":"+(m<10?"0":'')+m);

	expect(toJSON(["ECON 1401"]))
		.toEqual({courseName: "ECON 1401", time: time});
});