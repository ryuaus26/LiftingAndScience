import { Engine, Scene, FreeCamera, Vector3, MeshBuilder } from "@babylonjs/core"

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('renderCanvas');
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);
    MeshBuilder.CreateBox('box', { size: 2 }, scene);
    engine.runRenderLoop(() => {
        scene.render();
    });
    window.addEventListener('resize', () => {
        engine.resize();
    });
});
//# sourceMappingURL=app.js.map