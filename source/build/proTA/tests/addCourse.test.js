const addCourse = require('./addCourse');

test('convert array of strings into json object', () => {

	expect(addCourse("ECON 1401")).toBe({courseName: "ECON 1401", time: time});
});