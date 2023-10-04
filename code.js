var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

background("lightblue");
strokeWeight(3);

//head
fill(rgb(randomNumber(100, 255), randomNumber(0, 100), randomNumber(100, 255)));
shape(75, 50, 325, 50, 325, 200, 350, 200, 350, 325, 50, 325, 50, 200, 75, 200, 75, 50);

fill(rgb(randomNumber(200, 255), randomNumber(0, 100), randomNumber(200, 255)));
var earY1 = randomNumber(65, 125);
var earY2 = randomNumber(65, 125);
rect(325, earY1, 25, 55); 
rect(350, earY1 + 10, 15, 35); 
rect(50, earY2, 25, 55);  
rect(35, earY2 + 10, 15, 35);  

fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
ellipse(95, 65, 15, 15);
ellipse(305, 65, 15, 15);

//eyes
rect(106, 95, 186, 60);
fill("white");
ellipse(145, 125, 50, 50);
ellipse(255, 125, 50, 50);
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
ellipse(randomNumber(127, 162), 125, 15, 15);
ellipse(randomNumber(235, 273), 125, 15, 15);

//mouth
fill("white");
var mouthx = randomNumber(60, 120); 
rect(mouthx, 225, 220, 60);
line(mouthx, 255, mouthx + 220, 255); 
line(mouthx + 110, 225, mouthx + 110, 285); 
line(mouthx + 70, 225, mouthx + 70, 285); 
line(mouthx + 30, 225, mouthx + 30, 285); 
line(mouthx + 150, 225, mouthx + 150, 285); 
line(mouthx + 190, 225, mouthx + 190, 285); 

//antenna
noFill();
var ant1x = randomNumber(110, 290);
//original x = 190 and 207
arc(ant1x, 23, 40, 80, 0, 80);
arc(ant1x + 20, 15, 15, 15, 200, 500);

var ant2x = randomNumber(110, 290);
arc(ant2x, 23, 40, 80, 0, 80);
arc(ant2x + 20, 15, 15, 15, 200, 500);

var ant3x = randomNumber(110, 290);
arc(ant3x, 23, 40, 80, 0, 80);
arc(ant3x + 20, 15, 15, 15, 200, 500);

var ant4x = randomNumber(110, 290);
arc(ant4x, 23, 40, 80, 0, 80);
arc(ant4x + 20, 15, 15, 15, 200, 500);

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
