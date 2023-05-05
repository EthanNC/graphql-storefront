CREATE TABLE IF NOT EXISTS "users" (
	"id" serial NOT NULL,
	"full_name" text,
	"email" varchar(255),
	"password" char(60),
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_id" PRIMARY KEY("id");

CREATE UNIQUE INDEX IF NOT EXISTS "email" ON "users" ("email");