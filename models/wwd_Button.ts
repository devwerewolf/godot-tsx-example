const { Button, print } = godot;

export class wwd_Button extends Button {
  constructor() {
    super();
  }
  
  _enter_tree() {
    this.connect("pressed", this, "onClick");
  }
  
  onClick() { 
    print(this.name + " clicked!");
  }
}