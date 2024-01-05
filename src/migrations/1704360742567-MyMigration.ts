import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704360742567 implements MigrationInterface {
    name = 'MyMigration1704360742567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vote" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "gender" character varying NOT NULL, "paslonName" character varying NOT NULL, "userId" integer, "paslonId" integer, CONSTRAINT "REL_f5de237a438d298031d11a57c3" UNIQUE ("userId"), CONSTRAINT "PK_2d5932d46afe39c8176f9d4be72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_f5de237a438d298031d11a57c3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_261e520454f44e8bd073952992e" FOREIGN KEY ("paslonId") REFERENCES "paslon"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_261e520454f44e8bd073952992e"`);
        await queryRunner.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_f5de237a438d298031d11a57c3b"`);
        await queryRunner.query(`DROP TABLE "vote"`);
    }

}
