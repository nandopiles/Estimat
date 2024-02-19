<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240215090957 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE news DROP FOREIGN KEY FK_1DD39950642B8210');
        $this->addSql('DROP TABLE admin');
        $this->addSql('DROP INDEX IDX_1DD39950642B8210 ON news');
        $this->addSql('ALTER TABLE news DROP admin_id');
        $this->addSql('ALTER TABLE user ADD role TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE admin (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, password VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE news ADD admin_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE news ADD CONSTRAINT FK_1DD39950642B8210 FOREIGN KEY (admin_id) REFERENCES admin (id)');
        $this->addSql('CREATE INDEX IDX_1DD39950642B8210 ON news (admin_id)');
        $this->addSql('ALTER TABLE user DROP role');
    }
}