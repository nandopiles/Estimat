<?php

namespace App\Controller;

use App\Entity\News;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CrudController extends AbstractController
{
    #[Route('/crud', name: 'app_crud')]
    public function index(): Response
    {
        return $this->render('crud/index.html.twig', [
            'controller_name' => 'CrudController',
        ]);
    }

    // USUARIO

    #[Route('/insert/user', name: 'app_insertUser', methods: ['POST'])]
    public function insertUser(ManagerRegistry $doctrine, Request $request): JsonResponse {

        $entityManager = $doctrine->getManager();

        $user = new User();
        $user->setName($request->request->get('name'));
        $user->setPassword($request->request->get('password'));
        $user->setEmail($request->request->get('email'));
        $user->setStatus($request->request->get('status'));
        $user->setRole($request->request->get('role'));

        $entityManager->persist($user);
        $entityManager->flush();

        $data = [
            'id' => $user->getId(),
            'name' => $user->getName(),
            'password' => $user->getPassword(),
            'email' => $user->getEmail(),
            'status' => $user->isStatus(),
            'role' => $user->isRole()
        ];

        return new JsonResponse($data);
    }

    #[Route('/update/user/{id}', name: 'app_updateUser', methods: ['put', 'patch'])]
    public function updateUser(ManagerRegistry $doctrine, Request $request, int $id): JsonResponse {

        $entityManager = $doctrine->getManager();

        $user = $entityManager->getRepository(User::class)->find($id);

        if (!$user) {
            return $this->json('User not found for id' . $id , 404);
        }

        $user->setName($request->request->get('name'));
        $user->setPassword($request->request->get('password'));
        $user->setEmail($request->request->get('email'));
        $user->setStatus($request->request->get('status'));
        $user->setRole($request->request->get('role'));

        $entityManager->flush();

        $data = [
            'id' => $user->getId(),
            'name' => $user->getName(),
            'password' => $user->getPassword(),
            'email' => $user->getEmail(),
            'status' => $user->isStatus(),
            'role' => $user->isRole()
        ];

        return $this->json($data);
    }


    #[Route('/delete/user/{id}', name: 'app_deleteUser', methods: ['delete'])]
    public function deleteUser(ManagerRegistry $doctrine, int $id): JsonResponse {

        $entityManager = $doctrine->getManager();

        $user = $entityManager->getRepository(User::class)->find($id);

        if (!$user) {
            return $this->json('User not found for id' . $id , 404);
        }

        $entityManager->remove($user);
        $entityManager->flush();

        return $this->json('Deleted a user successfully with id' . $id);
    }


    // NOTICIAS


    #[Route('/insert/news', name: 'app_insertNews', methods: ['POST'])]
    public function insertNews(ManagerRegistry $doctrine, Request $request): JsonResponse {

        $entityManager = $doctrine->getManager();

        $news = new News();
        $news->setTitle($request->request->get('title'));
        $news->setDescription($request->request->get('description'));
        $news->setImage($request->request->get('image'));

        $entityManager->persist($news);
        $entityManager->flush();

        $data = [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'description' => $news->getDescription(),
            'image' => $news->getImage(),
        ];

        return new JsonResponse($data);
    }

    #[Route('/update/news/{id}', name: 'app_updateNews', methods: ['put', 'patch'])]
    public function updateNews(ManagerRegistry $doctrine, Request $request, int $id): JsonResponse {

        $entityManager = $doctrine->getManager();

        $news = $entityManager->getRepository(News::class)->find($id);

        if (!$news) {
            return $this->json('User not found for id' . $id , 404);
        }

        $news->setTitle($request->request->get('title'));
        $news->setDescription($request->request->get('description'));
        $news->setImage($request->request->get('image'));

        $entityManager->flush();

        $data = [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'description' => $news->getDescription(),
            'image' => $news->getImage(),
        ];

        return $this->json($data);
    }


    #[Route('/delete/news/{id}', name: 'app_deleteNews', methods: ['delete'])]
    public function deleteNews(ManagerRegistry $doctrine, int $id): JsonResponse {

        $entityManager = $doctrine->getManager();

        $news = $entityManager->getRepository(User::class)->find($id);

        if (!$news) {
            return $this->json('User not found for id' . $id , 404);
        }

        $entityManager->remove($news);
        $entityManager->flush();

        return $this->json('Deleted a user successfully with id' . $id);
    }

}
