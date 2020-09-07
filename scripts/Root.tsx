import { signal, onready } from "../decorators";
const { Node2D } = godot;

export default class Root extends Node2D {
  @signal static readonly OnToggleVisible: string;
  
  _ready() {
    this.get_node("/root/Root/Timer").connect("timeout", this, "emitToggleVisible");
  }
  
  emitToggleVisible() {
    this.emit_signal(Root.OnToggleVisible);
  }
}