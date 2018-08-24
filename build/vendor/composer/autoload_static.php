<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9faa56f4c68fbdba5cb5456c94774171
{
    public static $files = array (
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Polyfill\\Mbstring\\' => 26,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
    );

    public static $prefixesPsr0 = array (
        'T' => 
        array (
            'Twig_' => 
            array (
                0 => __DIR__ . '/..' . '/twig/twig/lib',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9faa56f4c68fbdba5cb5456c94774171::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9faa56f4c68fbdba5cb5456c94774171::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit9faa56f4c68fbdba5cb5456c94774171::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
