<?php

namespace App\Controller;

use App\Repository\UserRepository;
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

    #[Route('/list', name: 'app_listuser')]
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
