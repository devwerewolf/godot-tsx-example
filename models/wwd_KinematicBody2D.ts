const { KinematicBody2D } = godot;

export class wwd_KinematicBody2D extends KinematicBody2D {
  constructor() {
    super();
  }
  
  get slideCollisions() {
    let collisions: godot.KinematicCollision2D[] = [];
    
    for (let i = 0; i < this.get_slide_count(); i++) {
      let collision = this.get_slide_collision(i);
      collisions.push(collision);
    }
    
    return collisions;
  }
}