<?php

namespace App\Manager;

use Redis;

class RedisManager extends Redis
{
    public function __construct()
    {
        parent::__construct();
        $this->connect("redis");
    }

    public function allKeys(): array
    {
        return $this->keys("*");
    }
}