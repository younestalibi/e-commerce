<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Comment;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    public function index(){
        $comments = Comment::all()->with('user')->get();

        return response()->json(['comments' => $comments],200);
    }
    // public function store(Request $request){
    //     $validatedData = $request->validate([
    //         'content' => 'required',
    //         'rate' => 'required',
    //         'product_id'=>'required'
    //     ]);

    //     $user = auth()->user();
    //     $comment = new Comment();
    //     $comment->content = $validatedData['content'];
    //     $comment->rate = $validatedData['rate'];
    //     $comment->product_id=$validatedData['product_id'];
    //     $comment->user_id=$user->id;
    //     $comment->save();    
    //     return response()->json(['success' => 'Comment added successfully!','comment'=>$comment], 200);
    // }

    public function edit(Comment $comment)
    {
        // Logic for displaying the edit form
    }

    // public function update(Request $request, Comment $comment)
    // {
    //     $validatedData = $request->validate([
    //         'content' => 'required',
    //     ]);

    //     $comment->content = $validatedData['content'];
    //     $comment->save();

    //     return redirect()->back()->with('success', 'Comment updated successfully!');
    // }

    // public function destroy(Comment $comment)
    // {
    //     $comment->delete();

    //     return redirect()->back()->with('success', 'Comment deleted successfully!');
    // }
}
