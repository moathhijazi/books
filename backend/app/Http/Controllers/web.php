<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use  App\Models\User ;


class web extends Controller
{
    public function index() {
        $select_products = DB::table('products')->get() ;
        if(count($select_products) > 0 ){
            return $select_products ;
        }else{
            return false ;
        }
    }

    public function create(Request $request)
    {
       if(isset($request->username) && isset($request->password)) {

            if(strlen($request->password) > 5) {

                $check_user = DB::table('users')->where('username' , $request->username)->get() ;
                if(count($check_user) > 0 ) {
                    return $response = [
                        'Username already exist!' ,
                        false
                    ];

                }else{
                    $hashed_password = md5($request->password) ;
                    $user = DB::table('users')->insert([
                        'username' => $request->username ,
                        'password' => $hashed_password
                    ]);
                    if($user) {
                        return $response = [
                            'Welcome, ' . $request->username  ,
                            true
                        ];
                    }else{
                        return $response = [
                            'server error with status 500 !' ,
                            false
                        ];
                    }
                }

            }else{

                return $response = [
                    'password must be at least 6 chareckters !' ,
                    false

                ];

            }


       }
    }
    public function check(Request $request)
    {
        if($request->username != null || $request->password != null) {
            $hashed = md5($request->password) ;
            $check_user = DB::table('users')->where('username' , $request -> username )->where('password' , $hashed)->first();

            if($check_user){
                $check_if_admin = DB::table('admin')->where('user_id' , $check_user->id)->first();
                if($check_if_admin){

                    return $response = [
                        [
                         'id' => $check_user->id ,
                         'username' => $check_user->username,
                         'admin' => true
                        ] ,
                        true
                     ];

                }else{

                    return $response = [
                        [
                         'id' => $check_user->id ,
                         'username' => $check_user->username,
                         'admin' => false

                        ] ,
                        true
                     ];

                }

            }else{
                return $response = [
                    'invalid username or password' ,
                    false

                ];
            }
        }
    }

    public function show(Request $request)
    {
        $param = $request->params ;
        $check = DB::table('products')->where('id' , $param)->first();
        if($check){
            return $response = [
                'id'  => $check->id ,
                'title' => $check->title ,
                'price' => $check->price
            ];
        }
    }

    public function new(Request $request)
    {
        $title = $request->title ;
        $price = $request->price ;
        $admin_id = $request->adminId ;
        $insert = DB::table('products')->insert([
            'title'  =>  $title ,
            'price'  =>  $price ,
            'admin_id' => $admin_id
        ]);
        return $response = [
            'Product Added succesfuly!'  ,
            true
        ];
    }
}
