import { wwd_Button } from "../models/wwd_Button";
import Root from "./Root";

export default class ToggleButton extends wwd_Button {
  onClick() {
    this.get_node("/root/Root").emit_signal(Root.OnToggleVisible);
  }
}