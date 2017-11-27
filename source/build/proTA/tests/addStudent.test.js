const addStudent = require('./addStudent');

test('adds course object to course array', () => {
	expect(addStudent("James", 456852))
		.toEqual({
		'name':'James','id': 456852});
});