#! /usr/bin/env node

const fs = require('fs');
const _ = require('lodash');

// Need to specify location of JSON file
if (process.argv[2] === undefined) {
	console.error('[INFO]: Usage - ftc <input>');
	process.exit(1);
}

// Need to be able to find and validate JSON file
let input = {};
try {
	input = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
} catch (e) {
	console.error('[ERROR]: Could not read JSON export you specified');
	process.exit(1);
}

let values = {};
let headings = {};
try {
	_.keys(input).forEach((section) => {
		values[section] = _.values(input[section]);
		if (values[section].length) {
			headings[section] = _.keys(values[section][0]);
		}
		
		// Prepare CSV content
		let content = headings[section].join(',');
		values[section].forEach((row) => {
			content += '\n';
			headings[section].forEach((heading, index) => {
				content += row[heading];
				if (index + 1 < headings[section].length) {
					content += ',';
				}
			});
		});
		
		// Store to file
		fs.writeFileSync(`data-${section}.csv`, content);
		console.log(`[SUCCESS]: Created data-${section}.csv`);
	});
} catch (e) {
	console.error(`[ERROR]: ${e.message}`);
	process.exit(1);
}
