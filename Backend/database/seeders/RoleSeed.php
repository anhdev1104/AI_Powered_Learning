<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'student',
                'description' => 'Role for students.',
            ],
            [
                'name' => 'teacher',
                'description' => 'Role for teachers.',
            ],
            [
                'name' => 'admin',
                'description' => 'Role for administrators.',
            ],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
