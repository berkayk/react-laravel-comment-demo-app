<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel React Comment Demo App</title>

    <link href='https://fonts.googleapis.com/css?family=Oxygen:400,300,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ url('css/styles.css') }}">
    <script type="text/javascript">
        var Globals = <?php echo json_encode(array(
            'uril' => url(),
            'token' => csrf_token()
        )); ?>;
    </script>
    @yield('head')

</head>
<body>
@yield('body')
</body>
</html>