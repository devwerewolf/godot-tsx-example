const { KinematicBody2D, Vector2 } = godot;

export default class MySprite extends KinematicBody2D {
  speed: number;
  direction: godot.Vector2;
  
  constructor() {
    super();
  }
  
  _process(delta) {
    // @ts-ignore
    // this.position += this.direction * this.speed * delta;
  }
  
  _physics_process(fixedDelta) {
    // @ts-ignore
    this.move_and_collide(this.direction)
  }
}

godot.register_property(MySprite, "speed", 100);
godot.register_property(MySprite, "direction", new Vector2(Vector2.ONE));
