<?php

namespace App\Entity;

use App\Repository\NewsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: NewsRepository::class)]
class News
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $images = null;

    #[ORM\OneToMany(targetEntity: Favs::class, mappedBy: 'news')]
    private Collection $favs;


    public function __construct()
    {
        $this->favs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getImages(): ?string
    {
        return $this->images;
    }

    public function setImages(string $images): static
    {
        $this->images = $images;

        return $this;
    }

    /**
     * @return Collection<int, Favs>
     */
    public function getFavs(): Collection
    {
        return $this->favs;
    }

    public function addFav(Favs $fav): static
    {
        if (!$this->favs->contains($fav)) {
            $this->favs->add($fav);
            $fav->setNews($this);
        }

        return $this;
    }

    public function removeFav(Favs $fav): static
    {
        if ($this->favs->removeElement($fav)) {
            // set the owning side to null (unless already changed)
            if ($fav->getNews() === $this) {
                $fav->setNews(null);
            }
        }

        return $this;
    }
}
