<?php

namespace App\Repository;

use App\Entity\Favs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Favs>
 *
 * @method Favs|null find($id, $lockMode = null, $lockVersion = null)
 * @method Favs|null findOneBy(array $criteria, array $orderBy = null)
 * @method Favs[]    findAll()
 * @method Favs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FavsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Favs::class);
    }

//    /**
//     * @return Favs[] Returns an array of Favs objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('f.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Favs
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
