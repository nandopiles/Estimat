<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/user', name: 'app_user')]
    public function index(): Response
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    //               FIND ONE
    
    #[Route('/user{id}', name: 'app_listUser', methods: ['get'])]
    public function listUser(ManagerRegistry $doctrine, int $id): JsonResponse {
        $user = $doctrine->getRepository(User::class)->find($id);

        if (!$user) {
            return $this->json('User not found for id' . $id , 404);
        }

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


//               FIND ALL

    #[Route('/listUser', name: 'app_listAlluser')]
    public function userList(UserRepository $userRepository): JsonResponse
    {
        $users = $userRepository->findAll();

        // Serializa los datos de usuarios a formato JSON
        $userData = [];
        foreach ($users as $user) {
            $userData[] = [
                'id' => $user->getId(),
                'name' => $user->getName(),
                'password' => $user->getPassword(),
                'email' => $user->getEmail(),
                'status' => $user->isStatus(),
                'role' => $user->isRole()
            ];
        }

        // Devuelve una respuesta JSON con los datos de los usuarios
        return new JsonResponse($userData);
    }

}
