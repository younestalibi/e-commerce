<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Api\BaseController;

class CategoryController extends BaseController
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        // return $request;
        ;
        $request->validate([
            'name' => 'required|string',
        ]);
        // Check if the user is an admin using the isAdmin helper function
        if ($this->isAdmin(Auth::user())) {
            // dd($this->isAdmin);
            // Create a new record in the table
            // dd($request->all());

            $record = Category::create([
                'name' => $request->input('name'),
            ]);

            return response()->json(['message' => 'Record created successfully', 'record' => $record],201);
        }

        // Return an error response if the user is not an admin
        return response()->json(['message' => 'Unauthorized'], 401);
    }
    public function index(){
        $categories = Category::all();

        return response()->json(['categories' => $categories],200);
    }

    public function delete( $id)
    {
        $record = Category::findOrFail($id);

        $record->delete();

        return response()->json([
            'message' => 'Record deleted successfully',
        ]);
    }

    public function show($id){
        $category = Category::findOrFail($id);
        return response()->json(['category' => $category],200);
    }

    public function update(Request $request, $id)
    {
        // return($request->name.'name');
        $validatedData = $request->validate([
            'name' => 'required|max:255',
        ]);
        $category = Category::findOrFail($id);
        $category->update($validatedData);

        return response()->json(['message' => 'Category updated successfully']);
    }

}
