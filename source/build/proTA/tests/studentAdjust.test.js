

const studentAdjust = require('./studentAdjust');

test('adjust student variables', () => {
	expect(studentAdjust("James", 456852)).toEqual([{
				"time" : "3:30pm",
				"day" : "Monday"
				},
				{
				"time" : "3:25pm",
				"day" : "Wednesday"
				}]);
});