const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css');


    // ADD ASSETS TO COMPILE HERE
            // ENTRY FILE                       RESULT FILE
    mix.js('resources/js/people-of-interest.js', 'public/js').react();
    mix.js('resources/js/missions.js', 'public/js').react();