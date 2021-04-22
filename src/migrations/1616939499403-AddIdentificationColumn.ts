import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIdentificationColumn1616939499403
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'identification',
        type: 'varchar',
        isUnique: true,
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'identification');
  }
}
