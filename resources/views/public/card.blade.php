<!DOCTYPE html>
<html>
<head>
  <title>{{ $card->template->name }}</title>
</head>
<body>
  @include('templates.' . $card->template->view, [
      'data' => $card->data
  ])
</body>
</html>
