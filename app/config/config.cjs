require("dotenv").config();

module.exports = {
	development: {
		client: "pg",
		connection: {
			host: process.env.DATABASE_HOST,
			database: process.env.DATABASE_NAME,
			user: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
		},
	},

	test: {
		client: "pg",
		connection: {
			host: process.env.DATABASE_HOST,
			database: process.env.DATABASE_NAME,
			user: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
		},
	},

	production: {
		client: "pg",
		connection: {
			host: process.env.DATABASE_HOST,
			database: process.env.DATABASE_NAME,
			user: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
			port: process.env.DATABASE_PORT,
		},
	},
};
