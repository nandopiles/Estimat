<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240215080802 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE favs ADD news_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE favs ADD CONSTRAINT FK_C6752822B5A459A0 FOREIGN KEY (news_id) REFERENCES news (id)');
        $this->addSql('CREATE INDEX IDX_C6752822B5A459A0 ON favs (news_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE favs DROP FOREIGN KEY FK_C6752822B5A459A0');
        $this->addSql('DROP INDEX IDX_C6752822B5A459A0 ON favs');
        $this->addSql('ALTER TABLE favs DROP news_id');
    }
}
