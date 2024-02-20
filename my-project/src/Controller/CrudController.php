<?php

namespace App\Controller;


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

    #[Route('/insertUser', name: 'app_insertUser', methods: ['POST'])]
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

    #[Route('/updateUser{id}', name: 'app_updateUser', methods: ['put', 'patch'])]
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


    #[Route('/deleteUser{id}', name: 'app_deleteUser', methods: ['delete'])]
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

}
