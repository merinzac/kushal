var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["68dbe1f6-9723-4252-9945-ae7b3ee770bc","7302eca2-e752-467f-bc8c-7e687cf3e611","62ec2770-1882-4946-b6c2-5211511c9288","34e95c6a-e571-44a0-bd2c-9020c389eb8b"],"propsByKey":{"68dbe1f6-9723-4252-9945-ae7b3ee770bc":{"name":"stone","sourceUrl":"assets/v3/animations/CtsXxyV4tDeJBEGvKWkVyCMEicMcpv6srcoGDPFc-G4/68dbe1f6-9723-4252-9945-ae7b3ee770bc.png","frameSize":{"x":172,"y":171},"frameCount":1,"looping":true,"frameDelay":4,"version":"zZu5vMgf90V2avfWoYPygMm09D8Gqskh","loadedFromSource":true,"saved":true,"sourceSize":{"x":172,"y":171},"rootRelativePath":"assets/v3/animations/CtsXxyV4tDeJBEGvKWkVyCMEicMcpv6srcoGDPFc-G4/68dbe1f6-9723-4252-9945-ae7b3ee770bc.png"},"7302eca2-e752-467f-bc8c-7e687cf3e611":{"name":"cannon","sourceUrl":"assets/v3/animations/CtsXxyV4tDeJBEGvKWkVyCMEicMcpv6srcoGDPFc-G4/7302eca2-e752-467f-bc8c-7e687cf3e611.png","frameSize":{"x":100,"y":212},"frameCount":1,"looping":true,"frameDelay":4,"version":"980VFjvFd3YpUH6.rCzLaYbMnFuUYnjc","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":212},"rootRelativePath":"assets/v3/animations/CtsXxyV4tDeJBEGvKWkVyCMEicMcpv6srcoGDPFc-G4/7302eca2-e752-467f-bc8c-7e687cf3e611.png"},"62ec2770-1882-4946-b6c2-5211511c9288":{"name":"output-onlinejpgtools (3).png_1","sourceUrl":"assets/v3/animations/CtsXxyV4tDeJBEGvKWkVyCMEicMcpv6srcoGDPFc-G4/62ec2770-1882-4946-b6c2-5211511c9288.png","frameSize":{"x":242,"y":160},"frameCount":1,"looping":true,"frameDelay":4,"version":"lRHkRKSrqtyeVYIqVWiPdxDDAE7PwpL1","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":160},"rootRelativePath":"assets/v3/animations/CtsXxyV4tDeJBEGvKWkVyCMEicMcpv6srcoGDPFc-G4/62ec2770-1882-4946-b6c2-5211511c9288.png"},"34e95c6a-e571-44a0-bd2c-9020c389eb8b":{"name":"background_landscape02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Iniwjg2LkdYOKciItYOH.FbJcQCgPi42","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var scene=createSprite(0,0,400,400);
scene.setAnimation("background_landscape02_1");
scene.velocityY=2;
scene.scale=2.0;
var cannon=createSprite(190,360,20,20);
cannon.setAnimation("cannon");
cannon.scale=0.7;
var shootingball=createSprite();
var stones;
var stonesGroup = createGroup();
shootingball.scale=0.1;
shootingball.setAnimation("output-onlinejpgtools (3).png_1");
var count=0;


function draw(){
  background("white");
   if (scene.y>400) {
     scene.y=scene.height/2;}
  if (shootingball.isTouching(stonesGroup)){
   count=count+1; 
  
 }
  spawnStones();
  if (keyDown("space")){
 createshootingball();
 
   
  
}
 cannon.x=World.mouseX;
 cannon.y=World.mouseY;
 createEdgeSprites();
cannon.bounceOff(edges);
if (cannon.y<=250){
  cannon.y=230;
}
shootingball.x=cannon.x;
shootingball.y=cannon.y-110;
if (shootingball.isTouching(stonesGroup)){
  stonesGroup.destroyEach();
}


    drawSprites();
    fill("red");
    textSize(30);
    textFont("Georgia");
text("count:"+count,275,56);    
  
}
function spawnStones(){
  if(World.frameCount%30 === 0){
     stones = createSprite(190,40,10,10);
    stones.velocityY=5;
    stones.x=randomNumber(25,350);
    stonesGroup.add(stones);
    
    
    stones.setAnimation("stone");
    stones.scale=0.3;
  }
 
}
function createshootingball(){
 shootingball=createSprite();
  shootingball.x=cannon.x;
  shootingball.y=cannon.y-110;
  shootingball.setAnimation("output-onlinejpgtools (3).png_1");
  shootingball.velocityY=-10;
  shootingball.scale=0.1;
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
