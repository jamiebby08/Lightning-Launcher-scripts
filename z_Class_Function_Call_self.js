

function main() {
  this.img = "none";
}

function test(txt) {
  this.txt = txt;
  this.cnt = 0;
}
test.prototype = new main();

test.prototype.show() {
  alert(this.txt + "\n" + this.img + "\n" + this.cnt);
  this.cnt++
  if (this.cnt < 2) {return this.show();}
}
