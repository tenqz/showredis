<?php

namespace App\Controller\Api\V1;

use App\Manager\RedisManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api")
 */
class ApiController extends AbstractController
{
    /**
     * @var RedisManager
     */
    private RedisManager $redisManager;

    /**
     * @param RedisManager $redisManager
     */
    public function __construct(RedisManager $redisManager)
    {
        $this->redisManager = $redisManager;
    }

    /**
     * @Route("/db-size")
     *
     * @return JsonResponse
     */
    public function dbSize(): JsonResponse
    {
        return $this->json(
            $this->redisManager->dbSize()
        );
    }

}
