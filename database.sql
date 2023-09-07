
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);



CREATE TABLE "pets" (
	"id" SERIAL PRIMARY KEY,
	"pet_name" VARCHAR (256) NOT NULL,
	"user_id" INT REFERENCES "user" NOT NULL,
	"pet_info" VARCHAR (256) NOT NULL,
	"pet_url" VARCHAR (256) NOT NULL
);

CREATE TABLE "medications" (
	"id" SERIAL PRIMARY KEY,
	"pet_id" INT REFERENCES "pets" NOT NULL,
	"med_name" VARCHAR (120) NOT NULL,
	"instructions" VARCHAR (256) NOT NULL
);

CREATE TABLE "med_status" (
	"id" SERIAL PRIMARY KEY,
	"pet_id" INT REFERENCES "pets" NOT NULL,
	"med_id" INT REFERENCES "medications" NOT NULL,
	"taken_date" TIMESTAMP
);
