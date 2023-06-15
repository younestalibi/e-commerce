<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Models\User;
use App\Models\Comment;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function getProducts()
    {
        $products = Product::with('category', 'brand','images')->paginate(9);
        // $products = Product::find(18)->comments();
        // $products = User::find(1)->test();
        // $products=Comment::find(1)->with('product')->get();
        return response()->json($products, 200);
    }
    public function index()
    {
        $products = Product::with('category', 'brand','images')->get();
        return response()->json($products, 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'slug' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
            'color' => 'required|string',
            'size' => 'required|string',
            'gender' => 'required|string',
            'category'=>'required|numeric',
            'brand'=>'required|string',
            'images' => 'required|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,webp', 
            
        ]);
        // return $validatedData;
        $product = Product::create([
            'name' => $validatedData['name'],
            'slug' => $validatedData['slug'],
            'description' => $validatedData['description'],
            'price' => $validatedData['price'],
            'quantity' => $validatedData['quantity'],
            'color' => $validatedData['color'],
            'size' => $validatedData['size'],
            'gender' => $validatedData['gender'],
            'brand_id' => $validatedData['brand'],
            'category_id' => $validatedData['category'],
        ]);

        foreach ($validatedData['images'] as $image) {
            $path = $image->store('product', 'public');
        
            $product->images()->create([
                'image_path' => $path,
            ]);
        }

        return response()->json(['message' => 'Product created successfully', 'data' => $product], 201);
    }

    public function show($id)
    {
        $product = Product::with('category', 'brand', 'images')->findOrFail($id);
        return response()->json(['product' => $product], 200);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'slug' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
            'color' => 'required|string',
            'size' => 'required|string',
            'gender' => 'required|string',
            'category'=>'required|numeric',
            'brand'=>'required|string',
            'is_available'=>'required|numeric',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,webp', 
        ]);
        // return $validatedData;

        $product = Product::findOrFail($id);

        $product->update([
            'name' => $validatedData['name'],
            'slug' => $validatedData['slug'],
            'description' => $validatedData['description'],
            'price' => $validatedData['price'],
            'quantity' => $validatedData['quantity'],
            'color' => $validatedData['color'],
            'size' => $validatedData['size'],
            'gender' => $validatedData['gender'],
            'is_available'=>$validatedData['is_available'],
            'brand_id' => $validatedData['brand'],
            'category_id' => $validatedData['category'],
        ]);

        if (isset($validatedData['images'])) {
            foreach ($validatedData['images'] as $image) {
                $path = $image->store('product', 'public');
                $product->images()->create([
                    'image_path' => $path,
                ]);
            }
        }

        return response()->json(['message' => 'Product updated successfully', 'data' => $product], 200);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully'], 200);
    }

}
