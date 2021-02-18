import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1612386320307 implements MigrationInterface {
    name = 'PostRefactoring1612386320307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `account` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `account`");
    }

}
