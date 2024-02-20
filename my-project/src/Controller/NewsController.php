<?php

namespace App\Controller;

use App\Repository\NewsRepository;
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
}
