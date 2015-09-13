@extends('layouts/master')
@section('head')
    <script async src="{{ url('js/bundle.js') }}"></script>
@stop

@section('body')
    <div class="container">
        <h1 class="thin">Laravel Comments App</h1>
        <hr />
        <div id="commentApp">

        </div>
    </div>
@stop