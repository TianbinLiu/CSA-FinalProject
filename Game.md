---
title: Game
layout: default
---

<style>
*{
  box-sizing:border-box;
}
html, body {
  background: #333;
  padding:0;
  margin:0;
  overflow:hidden;
}
canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.game-container{
  position: relative;
  width: 100%;
  height:100%;
  margin:0;
  margin-top:20px;
  outline:1px solid #fff; 
}

.game-container canvas{
  image-rendering: pixelated;
}
</style>

<html>
<body>
<div class="game-container">
    <canvas id="game-canvas"></canvas>
</div>
</body>


<script src="{{ '/assets/js/main.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/inputHandler.js' | relative_url }}" type="text/javascript"><script>
<script src="{{ '/assets/js/GameObject.js' | relative_url }}" type="text/javascript"><script>
<script src="{{ '/assets/js/Sprite.js' | relative_url }}" type="text/javascript"><script>
<script src="{{ '/assets/js/init.js' | relative_url }}" type="text/javascript"><script>
</html>