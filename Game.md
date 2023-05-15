---
title: Game
layout: default
---

<style>
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0px;
        border: 0;
        overflow: hidden;
        /*  Disable scrollbars */
        display: block;
        /* No floating content on sides */
    }
</style>

<body onload="update();">
    <canvas id="canvas" style='position:absolute; left:0px; top:0px;'></canvas>
</body>

<script src="{{ '/assets/js/main.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/inputHandler.js' | relative_url }}" type="text/javascript"><script>
