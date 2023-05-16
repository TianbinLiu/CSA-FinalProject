class GameObject {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "https://tianbinliu.github.io/CSA-FinalProject/images/character/adventurer-v1.5-Sheet.png",
    });
  }
}