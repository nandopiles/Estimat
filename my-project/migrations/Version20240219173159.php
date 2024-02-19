<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240219173159 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE favs (id INT AUTO_INCREMENT NOT NULL, users_id INT DEFAULT NULL, news_id INT DEFAULT NULL, date DATE DEFAULT NULL, INDEX IDX_C675282267B3B43D (users_id), INDEX IDX_C6752822B5A459A0 (news_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE favs ADD CONSTRAINT FK_C675282267B3B43D FOREIGN KEY (users_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE favs ADD CONSTRAINT FK_C6752822B5A459A0 FOREIGN KEY (news_id) REFERENCES news (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE favs DROP FOREIGN KEY FK_C675282267B3B43D');
        $this->addSql('ALTER TABLE favs DROP FOREIGN KEY FK_C6752822B5A459A0');
        $this->addSql('DROP TABLE favs');
    }
}
