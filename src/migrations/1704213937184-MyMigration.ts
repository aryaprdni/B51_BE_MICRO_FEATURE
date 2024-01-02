import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704213937184 implements MigrationInterface {
    name = 'MyMigration1704213937184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "address" character varying NOT NULL, "username" character varying NOT NULL, "gender" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
