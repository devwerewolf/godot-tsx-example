import { tool } from "../decorators";
import { wwd_Button } from "../models/wwd_Button";
const { print } = godot;

@tool
export default class MySpecialTool extends wwd_Button {
  onClick() {
    print("Hello, Twitch!");
  }
}