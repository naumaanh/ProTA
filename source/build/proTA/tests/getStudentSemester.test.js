const getStudentSemester = require('./getStudentSemester');

test('view student checkins', () => {
	expect(getStudentSemester("James", 456852)).toEqual([{
				"time" : "3:30pm",
				"day" : "Monday"
				},
				{
				"time" : "3:25pm",
				"day" : "Wednesday"
				}]);
});