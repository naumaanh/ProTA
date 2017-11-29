const deleteStudent = require('./addStudent');

test('adds student to courses and returns object', () => {
	expect(deleteStudent("James", 456852)).toEqual([]);
});