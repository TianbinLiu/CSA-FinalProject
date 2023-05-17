---
title: Game
layout: default
---

<style>
* {
  box-sizing:border-box;
}

body {
  background: #333;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.game-container {
  position: relative; 
  width: 352px;
  height: 198px;
  margin: 0 auto;
  outline: 1px solid #fff;

  transform: scale(3) translateY(50%);
}

.game-container canvas {
  image-rendering: pixelated;
}
</style>

<html>
<body>
<div class="game-container">
    <canvas class="game-canvas" width="352" height="198"></canvas>
</div>
</body>

<script src="{{ '/assets/js/utils.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/inputHandler.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/Overworld.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/GameObject.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/Person.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/Sprite.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/OverworldMap.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/js/init.js' | relative_url }}" type="text/javascript"></script>
</html>