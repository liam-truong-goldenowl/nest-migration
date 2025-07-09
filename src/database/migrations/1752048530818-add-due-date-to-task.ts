import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDueDateToTask1752048530818 implements MigrationInterface {
  name = 'AddDueDateToTask1752048530818';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tasks" ADD "due_date" TIMESTAMP`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "due_date"`);
  }
}
