import { wwd_KinematicBody2D } from "../models/wwd_KinematicBody2D";
import Root from "./Root";
import { property, onready } from "../decorators";
const { Vector2, print } = godot;

const GRAVITY = 200

export default class Ball extends wwd_KinematicBody2D {
  @property({ default: Vector2.ZERO }) velocity: godot.Vector2;
  @property({ default: Vector2.DOWN }) direction: godot.Vector2;
  
  constructor() {
    super();
  }
  
  _ready() {
    this.get_node("/root/Root").connect(Root.OnToggleVisible, this, "onToggleVisible");
  }
  
  _physics_process(fixedDelta: number) {
    const speed = fixedDelta * GRAVITY;
    this.velocity.x += speed * this.direction.x;
    this.velocity.y += speed * this.direction.y;
    this.move_and_slide(this.velocity);
    
    for (let collision of this.slideCollisions) {
      this.direction = collision.normal;
      print(this.direction);
    }
  }
  
  onToggleVisible() {
    this.visible = !this.visible;
  }
}