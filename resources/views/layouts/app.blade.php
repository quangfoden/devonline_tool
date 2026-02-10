<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="5lWlOU-WFeMjBAW2XEwXovpygOd6XJdH_zQpmsSYMkE" />
    <title>{{ $title ?? 'Tạo thiệp online miễn phí | DevOnline Shop' }}</title>
    <meta name="description"
        content="Tạo thiệp chúc mừng online miễn phí. Cá nhân hoá nội dung, gửi link, mã qr nhanh chóng.">
    <meta content="Themesdesign" name="author" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="robots" content="noindex,nofollow">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Tạo thiệp online miễn phí | DevOnline Shop">
    <meta property="og:description" content="Tạo thiệp chúc mừng online miễn phí, nhanh và đẹp.">
    <meta property="og:image" content="{{ asset('images/og-image.png') }}">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ asset('images/logo2.png') }}">

    <!-- jquery.vectormap css -->
    <link href="{{ asset('assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css') }}"
        rel="stylesheet" type="text/css" />

    <!-- Bootstrap Css test -->
    <link href="{{ asset('assets/css/bootstrap.min.css') }}" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Icons Css -->
    <link href="{{ asset('assets/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="{{ asset('assets/css/app.min.css') }}" id="app-style" rel="stylesheet" type="text/css" />

    <link href="{{ mix('assets/css/style.css') }}" type="text/css" rel="stylesheet" />
    <link href="{{ mix('assets/css/responsive.css') }}" type="text/css" rel="stylesheet" />
    <link href="{{ mix('assets/css/utils.css') }}" type="text/css" rel="stylesheet" />
    <link href="{{ mix('assets/css/datatable.css') }}" type="text/css" rel="stylesheet" />
    <link href="{{ mix('assets/css/simple-typeahead.css') }}" type="text/css" rel="stylesheet" />
    <link href="{{ mix('assets/css/home.css') }}" type="text/css" rel="stylesheet" />
    <!-- <link href="{{ mix('assets/css/landing.css') }}" type="text/css" rel="stylesheet"/> -->


    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.24/datatables.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/he@1.2.0/he.js"></script>
    <style>
        .bg-light {
            background-color: #eae9e9 !important;
        }
    </style>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
</head>

<body data-sidebar="dark">
    <div id="app">
        <h1 style="display: none;">Tạo thiệp online đẹp – DevOnline</h1>
        <p style="display: none;">Nền tảng tạo thiệp chúc mừng online, cá nhân hóa theo yêu cầu.</p>
    </div>

    <script src="{{ asset('assets/libs/jquery/jquery.min.js') }}"></script>
    <script src="{{ mix('assets/js/app.js') }}" type="text/javascript"></script>
    <!-- JAVASCRIPT -->
    <script src="{{ asset('assets/libs/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/libs/metismenu/metisMenu.min.js') }}"></script>
    <script src="{{ asset('assets/libs/simplebar/simplebar.min.js') }}"></script>
    <script src="{{ asset('assets/libs/node-waves/waves.min.js') }}"></script>

    <!-- apexcharts -->
    <script src="{{ asset('assets/libs/apexcharts/apexcharts.min.js') }}"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.js"></script>
    <!-- jquery.vectormap map -->
    <script src="{{ asset('assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js') }}"></script>
    <script
        src="{{ asset('assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-us-merc-en.js') }}"></script>

    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <!-- scroll datatable -->
    <script src="{{ asset('assets/js/app2.js') }}"></script>
</body>

</html>