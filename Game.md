---
title: Game
layout: default
---

<style>
html, body {
  height: 100%;
  margin: 0;
}
canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>

<body onload="update();">
    <canvas id="canvas"></canvas>
</body>

<script src="{{ '/assets/js/main.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/inputHandler.js' | relative_url }}" type="text/javascript"><script>
<script src="{{ '/assets/js/init.js' | relative_url }}" type="text/javascript"><script>
