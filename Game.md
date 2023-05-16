---
title: Game
layout: default
---

<style>
* {
  box-sizing:border-box;
}

body {
  height: 100%;
}

.game-container {
  margin: 0 auto;
  outline: 1px solid #fff;
  transform: scale(3) translateY(50%);
}

.game-container canvas {
  image-rendering: pixelated;
  width: 100%;
  height: 100%;
  display: block;
}
</style>

<html>
<body>
<div class="game-container">
    <canvas class="game-canvas"></canvas>
</div>
</body>


<script src="{{ '/assets/js/Overworld.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/inputHandler.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/GameObject.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/Sprite.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/init.js' | relative_url }}" type="text/javascript"></script>
</html>