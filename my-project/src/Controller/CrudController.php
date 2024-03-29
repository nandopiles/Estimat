<?php

// Namespace to organize classes in the application
namespace App\Controller;

// Necessary imports to use classes and methods
use App\Entity\News;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

// Class definition that extends AbstractController
class CrudController extends AbstractController
{

    // Method to handle the '/crud' route
    #[Route('/crud', name: 'app_crud')]
    public function index(): Response
    {
        return $this->render('crud/index.html.twig', [
            'controller_name' => 'CrudController',
        ]);
    }

    // Methods related to user management
    #[Route('/insert/user', name: 'app_insertUser', methods: ['POST'])]
    // Method to insert a new user
    public function insertUser(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);

        $user = new User();
        $user->setName($data['name']);
        $user->setPassword($data['password']);
        $user->setEmail($data['email']);
        $user->setStatus($data['status']);
        $user->setRole($data['role']);

        $entityManager->persist($user);
        $entityManager->flush();

        $responseData = [
            'id' => $user->getId(),
            'name' => $user->getName(),
            'password' => $user->getPassword(),
            'email' => $user->getEmail(),
            'status' => $user->isStatus(),
            'role' => $user->isRole()
        ];

        return new JsonResponse($responseData);
    }

    // Method to update an existing user
    #[Route('/update/user/{id}', name: 'app_updateUser', methods: ['put', 'patch'])]
    public function updateUser(ManagerRegistry $doctrine, Request $request, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->find($id);

        if (!$user) {
            return $this->json('User not found for id ' . $id, 404);
        }

        $data = json_decode($request->getContent(), true);

        $user->setName($data['name'] ?? $user->getName());
        $user->setPassword($data['password'] ?? $user->getPassword());
        $user->setEmail($data['email'] ?? $user->getEmail());
        $user->setStatus($data['status'] ?? $user->getStatus());
        $user->setRole($data['role'] ?? $user->getRole());

        $entityManager->flush();

        $responseData = [
            'id' => $user->getId(),
            'name' => $user->getName(),
            'password' => $user->getPassword(),
            'email' => $user->getEmail(),
            'status' => $user->getStatus(),
            'role' => $user->getRole()
        ];

        return $this->json($responseData);
    }

    // Method to delete a user
    #[Route('/delete/user/{id}', name: 'app_deleteUser', methods: ['delete'])]
    public function deleteUser(ManagerRegistry $doctrine, int $id): JsonResponse
    {

        $entityManager = $doctrine->getManager();

        // Find the user by its ID in the database
        $user = $entityManager->getRepository(User::class)->find($id);

        // Check if the user exists
        if (!$user) {
            return $this->json('User not found for id' . $id, 404);
        }

        // Remove the user from the database
        $entityManager->remove($user);
        $entityManager->flush();

        // Create a response indicating that the user has been successfully deleted
        return $this->json('Deleted a user successfully with id' . $id);
    }


    // Methods related to news management

    // Method to insert a new news
    #[Route('/insert/news', name: 'app_insertNews', methods: ['POST'])]
    public function insertNews(ManagerRegistry $doctrine, Request $request): JsonResponse
    {

        $entityManager = $doctrine->getManager();

        // Create a new instance of the News entity
        $news = new News();

        // Set news data based on the received request
        $news->setTitle($request->request->get('title'));
        $news->setDescription($request->request->get('description'));
        $news->setImage($request->request->get('image'));

        // Persist the news to the database
        $entityManager->persist($news);
        $entityManager->flush();

        // Create a response with the newly created news data
        $data = [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'description' => $news->getDescription(),
            'image' => $news->getImage(),
        ];

        return new JsonResponse($data);
    }


    // Method to update an existing news
    #[Route('/update/news/{id}', name: 'app_updateNews', methods: ['put', 'patch'])]
    public function updateNews(ManagerRegistry $doctrine, Request $request, int $id): JsonResponse
    {

        $entityManager = $doctrine->getManager();

        // Find the news by its ID in the database
        $news = $entityManager->getRepository(News::class)->find($id);

        // Check if the news exists
        if (!$news) {
            return $this->json('User not found for id' . $id, 404);
        }

        // Update news data based on the received request
        $news->setTitle($request->request->get('title'));
        $news->setDescription($request->request->get('description'));
        $news->setImage($request->request->get('image'));

        // Save the changes to the database
        $entityManager->flush();

        // Create a response with the updated news data
        $data = [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'description' => $news->getDescription(),
            'image' => $news->getImage(),
        ];

        return $this->json($data);
    }


    // Method to delete a news
    #[Route('/delete/news/{id}', name: 'app_deleteNews', methods: ['delete'])]
    public function deleteNews(ManagerRegistry $doctrine, int $id): JsonResponse
    {

        $entityManager = $doctrine->getManager();

        // Find the news by its ID in the database
        $news = $entityManager->getRepository(User::class)->find($id);

        // Check if the news exists
        if (!$news) {
            return $this->json('User not found for id' . $id, 404);
        }

        // Remove the news from the database
        $entityManager->remove($news);
        $entityManager->flush();

        // Create a response indicating that the news has been successfully deleted
        return $this->json('Deleted a user successfully with id' . $id);
    }
}
