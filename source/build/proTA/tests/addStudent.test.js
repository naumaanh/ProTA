const addStudent = require('./addStudent');

test('adds student to courses and returns object', () => {
	expect(addStudent("James", 456852)).toEqual({'name':'James','id': 456852});
});