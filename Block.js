class Block {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.c = 70;
  }
  display() {
    noFill();
    stroke(this.c);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    // this.drawX();
    if (this.angle >= 0 && this.angle < 45) {
      this.drawX();
    } else {
      this.drawRec();
    }
    pop();
  }
  move() {
    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
      let distance = dist(mouseX, mouseY, this.x, this.y);
      if (distance < distMouse) {
        this.c += 30;
        this.angle += 1;
      }
    }
    if (this.angle > 0 && this.angle < 180) {
      this.angle += 5;
    } else {
      this.angle = 0;
      if (this.c > 70) {
        this.c -= 2;
      }
    }
  }
  drawRec() {
    rect(0, 0, size - offset, size - offset);
  }
  drawX() {
    let margin = -size / 2;

    line(
      margin + offset / 2,
      margin + offset / 2,
      margin + size - offset / 2,
      margin + size - offset / 2
    );
    line(
      margin + size - offset / 2,
      margin + offset / 2,
      margin + offset / 2,
      margin + size - offset / 2
    );
  }
}
