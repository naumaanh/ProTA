const swipeTime = require('./swipeTime');

test('convert array of strings into json object', () => {
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let time = ((h<10? "0":'')+h+":"+(m<10?"0":'')+m);

	expect(swipeTime()).toEqual({time: time});
});