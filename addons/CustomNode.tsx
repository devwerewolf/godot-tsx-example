import { tool } from "../decorators";
import { wwd_CustomType } from "../models/wwd_CustomType";
const { EditorPlugin } = godot;

@tool
export default class CustomNode extends EditorPlugin {
  customTypes: wwd_CustomType[];
  
  constructor() {
    super();
    
    this.customTypes = [
      { name: "MySpecialTool", base: "Button", scriptPath: "tools/MySpecialTool.jsx", texturePath: "assets/icon.png" },
    ];
  }
  
  _enter_tree() {
    this.addCustomTypes();
  }
  
  _exit_tree() {
    this.remove_custom_type("MySpecialTool");
  }
  
  addCustomTypes() {
    for (let { name, base, scriptPath, texturePath } of this.customTypes) {
      this.add_custom_type(
        name,
        base,
        godot.load(scriptPath) as godot.Script,
        godot.load(texturePath) as godot.Texture
      );
    }
  }
}