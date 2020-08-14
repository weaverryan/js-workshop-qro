<?php

namespace App\DataFixtures;

use App\Entity\Question;
use App\Factory\CommentFactory;
use App\Factory\QuestionFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $commentFactory = CommentFactory::new()->withoutPersisting();
        QuestionFactory::new()->createMany(20, [
            'comments' => array_fill(0, 5, $commentFactory)
        ]);

        QuestionFactory::new()
            ->unpublished()
            ->createMany(5)
        ;

        $manager->flush();
    }
}
