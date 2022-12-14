class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.down = false;

    this.#addKeyboardListeners();
  }
  #addKeyboardListeners() {
    document.onkeydown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          this.left = true;
          break;
        case 'ArrowRight':
          this.right = true;
          break;
        case `ArrowUp`:
          this.forward = true;
          break;
        case `ArrowDown`:
          this.down = true;
          break;
      }
      console.table(this);
    };
    document.onkeyup = (e) => {
      switch (e.key) {
        case `ArrowLeft`:
          this.left = false;
          break;
        case `ArrowRight`:
          this.right = false;
          break;
        case `ArrowUp`:
          this.forward = false;
          break;
        case `ArrowDown`:
          this.down = false;
          break;
      }
      console.table(this);
    };
  }
}
