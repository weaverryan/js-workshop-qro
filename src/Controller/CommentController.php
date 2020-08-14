<?php

namespace App\Controller;

use App\Entity\Comment;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CommentController extends AbstractController
{
    /**
     * @Route("/comments/{id}/vote", methods="POST", name="app_comment_vote")
     */
    public function commentVote(Comment $comment, Request $request, EntityManagerInterface $entityManager)
    {
        $direction = $request->request->get('direction');

        // use real logic here to save this to the database
        if ($direction === 'up') {
            $comment->upVote();
        } else {
            $comment->downVote();
        }

        $entityManager->flush();

        return $this->json(['votes' => $comment->getVoteCount()]);
    }
}
