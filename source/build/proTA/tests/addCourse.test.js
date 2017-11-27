const addCourse = require('./addCourse');

test('adds course object to course array', () => {
	expect(addCourse("ECON 1401")).toEqual(["ECON 1401"]);
});