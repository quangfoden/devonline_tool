<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $adminRole = Role::create([
            'name' => 'ADMIN',
            'guard_name' => 'web',
            'status' => 1
        ]);

        Role::create([
            'name' => 'USER',
            'guard_name' => 'web',
            'status' => 1
        ]);

        $admin = User::create([
            'name' => "Nguyễn Văn Quang",
            'email' => "admin@gmail.com",
            'password' => Hash::make('Devonline@info0'),
        ]);
        $admin->assignRole('ADMIN');

        // Gán tất cả các quyền cho vai trò ADMIN
        $permissions = Permission::all();
        $adminRole->syncPermissions($permissions);
    }
}
