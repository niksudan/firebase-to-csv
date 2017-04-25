# Firebase to CSV

[![npm](https://img.shields.io/npm/v/ftc.svg)](https://www.npmjs.com/package/ftc)

Convert Firebase JSON data to CSV.

## Installation

- `npm i -g ftc`

## Usage

- `ftc <input>` - Creates a CSV of each form section in the current directory.

## Firebase Storage Format

This won't work for every kind of Firebase data. It's built to work with a simple and generic style:

```json
{
	"section-name-1": {
		"firebase-hash-1": {
			"key1": "value",
			"key2": "value",
			"key3": "value"
		},
		"firebase-hash-2": {
			"key1": "value",
			"key2": "value",
			"key3": "value"
		}
	},
	"section-name-2": {
		"firebase-hash-1": {
			"key1": "value",
			"key2": "value",
			"key3": "value"
		},
		"firebase-hash-2": {
			"key1": "value",
			"key2": "value",
			"key3": "value"
		}
	}
}
```

By running `ftc <input>` on a file of that format, it will generate two CSV files for each section. Please make sure that each entry in that section contains the same keys too.
