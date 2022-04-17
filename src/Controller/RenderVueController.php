<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class RenderVueController extends AbstractController
{
    /**
     * @Route("/", name="redis-client")
     *
     * @return Response
     */
    public function index(): Response
    {
        return $this->render('redis-client.html.twig');
    }
}