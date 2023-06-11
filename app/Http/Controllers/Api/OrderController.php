<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index()
    {
        // $orders = Order::with('user','product.images')->get();
        $orders = Auth::user()->orders()->with('product.images')->get();
        // $orders = Order::all()->groupBy('batch_id')->values();

        return response()->json($orders, 200);
    }


    public function store(Request $request)
    {
        
        $orders = $request->input('orders', []);

        if (empty($orders)) {
            return response()->json(['message' => 'No orders provided'], 400);
        }

        $createdOrders = [];
        // $batchId = uniqid();

        foreach ($orders as $orderData) { 
            $validatedData = $this->validateOrderData($orderData);

            $product = Product::findOrFail($validatedData['product_id']);
            
            if ($validatedData['quantity'] > $product->quantity) {
                return response()->json(['message' => 'Insufficient quantity available for one or more products'], 400);
            }
            // $validatedData['batch_id'] = $batchId;

            $order = Order::create($validatedData);

            $product->quantity -= $validatedData['quantity'];
            $product->save();

            $createdOrders[] = $order;
        }

        return response()->json(['message' => 'Orders created successfully', 'orders' => $createdOrders], 201);
    }

    protected function validateOrderData($orderData)
    {
        return validator($orderData, [
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
            'user_id' => 'required|exists:users,id',
            'status' => 'required|in:pending,processing,shipped,delivered,cancelled',
            'address' => 'required|string',
            'phone_number' => 'required|string',
        ])->validate();
    }

    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();

        return response()->json(['message' => 'Order deleted successfully'], 200);
    }
}
