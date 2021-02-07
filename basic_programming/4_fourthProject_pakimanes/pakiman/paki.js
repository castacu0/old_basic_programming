class Pakiman {
  constructor(n, l, a) //n stands for name 
  {
    this.ima = new Image();
    this.name = n;
    this.life = l;
    this.atack = a;

    this.ima.src = images[this.name];
  }

  speak() {
    alert(this.name + "! Message after the name.");
  }

  show(){
    document.body.appendChild(this.ima);
    document.write("<br/> <strong>" + this.name + "</strong>" + "<br/>");
    document.write("Life: " + this.life + "<br/>");
    document.write("Atack: " + this.atack + "<hr/>");
  }
}