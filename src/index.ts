import PIXI = require('pixi.js');

var renderer = new PIXI.WebGLRenderer(800, 600);
document.body.appendChild(renderer.view)
var stage = new PIXI.Container();

var bunny: PIXI.Sprite;

PIXI.loader
    .add('bunny', './resources/bunny.png')
    .load((loader, resources) => {
        bunny = new PIXI.Sprite(resources.bunny.texture);
        bunny.position.x = 400;
        bunny.position.y = 300;
        bunny.anchor.x = 0.5
        bunny.anchor.y = 0.5
        stage.addChild(bunny);
        animate();
    });

function animate() {
    requestAnimationFrame(animate);
    bunny.rotation += 0.1;
    renderer.render(stage);
}
