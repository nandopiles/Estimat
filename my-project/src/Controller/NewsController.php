<?php

namespace App\Controller;

use App\Entity\News;
use App\Repository\NewsRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NewsController extends AbstractController
{
    #[Route('/news', name: 'app_news')]
    public function index(): Response
    {
        return $this->render('news/index.html.twig', [
            'controller_name' => 'NewsController',
        ]);
    }


    #[Route('/news{id}', name: 'app_listNews', methods: ['get'])]
    public function listNews(ManagerRegistry $doctrine, int $id): JsonResponse {
        $news = $doctrine->getRepository(News::class)->find($id);

        if (!$news) {
            return $this->json('news not found for id' . $id , 404);
        }

        $data = [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'description' => $news->getDescription(),
            'image' => $news->getImage(),
        ];

        return $this->json($data);
    }


//LISTADO NOTICIAS
/*
    #[Route('/listNew', name: 'app_listnew')]
    public function newsList(NewsRepository $newsRepository): JsonResponse
    {
        $news = $newsRepository->findAll();

        // Serializa los datos de usuarios a formato JSON
        $newData = [];
        foreach ($news as $new) {
            $newData[] = [
                'id' => $new->getId(),
                'title' => $new->getTitle(),
                'description' => $new->getDescription(),
                'image' => $new->getImage(),
            ];
        }

        // Devuelve una respuesta JSON con los datos de los usuarios
        return new JsonResponse($newData);
    }

    */
}
