const deleteStudent = require('./deleteStudent');

test('deleted specific student from course and returns class', () => {
	expect(deleteStudent("James", 456852)).toEqual([]);
});