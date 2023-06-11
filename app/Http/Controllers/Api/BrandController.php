<?php

namespace App\Http\Controllers\Api;

use App\Models\Brand;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use Illuminate\Support\Facades\Storage;

class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::all();

        return response()->json(['brands' => $brands], 200);
    }

    public function show($id)
    {
        $brand = Brand::findOrFail($id);

        return response()->json(['brand' => $brand], 200);
    }



    public function store(Request $request)
    {
        // return $request->file('image');
        $request->validate([
            'name' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg',
        ]);
        $brand = new Brand();
        
        $brand->name = $request->input('name');
        $imagePath = $request->file('image')->store('brands', 'public');
        $brand->image = $imagePath;
        
        $brand->save();
        return response()->json(['message' => 'Brand created successfully', 'brand' => $brand], 201);
    }

    public function update(Request $request, $id)
    {
        $brand = Brand::findOrFail($id);

        $request->validate([
            'name' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg', 
        ]);

        $brand->name = $request->input('name');

        if ($request->hasFile('image')) {
            // Delete existing image if any
            // return $request->image;
            if (file_exists(public_path($brand->image))) {
                unlink(public_path($brand->image));
                
            }
            $imagePath = $request->file('image')->store('brands', 'public');
            $brand->image = $imagePath;

            
        }

        $brand->save();

        return response()->json(['message' => 'Brand updated successfully', 'brand' => $brand], 200);
    }

    public function destroy($id)
    {
        $brand = Brand::findOrFail($id);

        // Delete the brand's image if any
        // if ($brand->image) {
        //     Storage::delete($brand->image);
        // }
        if ($brand->image && file_exists(public_path($brand->image))) {
            unlink(public_path($brand->image));
        }
        $brand->delete();

        return response()->json(['message' => 'Brand deleted successfully']);
    }
}
