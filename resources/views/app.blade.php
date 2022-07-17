<!DOCTYPE html>
<html lang="{{ \Illuminate\Support\Facades\App::getLocale() }}" class="h-100">
<head>
    <!-- Meta data -->
    <meta charset="UTF-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
    <meta content="Digital Signature" name="description">
    <meta content="Digital Signature System" name="author">
    <meta name="keywords" content="digital, signature"/>
    <!-- Title -->
    <title>Digital Signature System</title>
    <!--Favicon -->
    <link rel="icon" href="{{ asset('/images/brand/favicon.ico') }}" type="image/x-icon"/>

    <!-- Bootstrap css -->
    <link href="{{ asset('/css/bootstrap.css') }}" rel="stylesheet" id="style"/>

    <!-- Style css -->
    <link href="{{ asset('/css/style.css') }}" rel="stylesheet" />
    <link href="{{ asset('/css/plugins.css') }}" rel="stylesheet" />
    <link href="{{ asset('/css/boxed.css') }}" rel="stylesheet" />
    <link href="{{ asset('/css/dark.css') }}" rel="stylesheet" />
    <link href="{{ asset('/css/skin-modes.css') }}" rel="stylesheet" />
    <link href="{{ asset('/css/transparent-style.css') }}" rel="stylesheet">

    <!-- Animate css -->
    <link href="{{ asset('/css/animated.css') }}" rel="stylesheet" />

    <!---Icons css-->
    <link href="{{ asset('/assets/css/icons.css') }}" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('/css/app.css?v='.time().'') }}"/>
</head>

<body class="app sidebar-mini ltr">
    <div class="page"  id="mainNavShow app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <loading
            :active.sync="isLoading"
            :is-full-page="indicatorOptions.isFullPage"
            :opacity="indicatorOptions.opacity"
            :color="indicatorOptions.color"
            :loader="indicatorOptions.loader">
        </loading>
        <div class="container">
            <div class="row align-items-center flex-row-reverse">
                <div class="col-md-12 col-sm-12 mt-3 mt-lg-0 text-center">
                    Copyright © 2022 <a  href="#;">Dayone</a>. Designed with <span class="fa fa-heart text-danger"></span> by <a  href="javascript:void(0);">Spruko Technologies Pvt.Ltd</a> All rights reserved.
                </div>
            </div>
        </div>
    </div>
    <a href="#top" id="back-to-top"><span class="feather feather-chevrons-up"></span></a>
    <script src="{{ asset('/js/app.js?v='.time().'') }}"></script>
</body>
</html>
