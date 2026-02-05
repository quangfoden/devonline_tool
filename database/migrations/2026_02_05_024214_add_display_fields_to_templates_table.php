<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDisplayFieldsToTemplatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('templates', function (Blueprint $table) {
            $table->text('description')->nullable()->after('slug');
             $table->string('view')->nullable()->after('description');
            $table->string('thumbnail')->nullable()->after('view');
            $table->boolean('is_active')->default(true)->after('thumbnail');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('templates', function (Blueprint $table) {
            $table->dropColumn(['description','view', 'thumbnail', 'is_active']);
        });
    }
}
