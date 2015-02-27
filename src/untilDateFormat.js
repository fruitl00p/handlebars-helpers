'use strict';
var dateFormat = require('./dateFormat.js');

module.exports = function (date, block) {
	if (!date) {
		return '';
	}
	date = moment(date).tz('Europe/Amsterdam').subtract(1, 'days').toDate();
	return dateFormat.apply(this, [date, block]);
};