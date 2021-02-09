<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProviderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $providers = [[
            'fullname' => 'Telekom Srbija',
            'shortname' => 'mt:s'
        ],[
            'fullname' => 'VIP Mobile',
            'shortname' => 'vip'
        ],[
            'fullname' => 'Telenor Srbija',
            'shortname' => 'Telenor'
        ],[
            'fullname' => 'Beotel Net',
            'shortname' => 'beotel'
        ]];

        DB::table('providers')->insert($providers);
    }
}
