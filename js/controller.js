var controller = new ScrollMagic.Controller();

var setfLiveTween = TweenLite.to('.setf-screenshot', 1, { bottom:'0px', ease:Linear.easeNone });
var sceneSS = new ScrollMagic.Scene({triggerElement:'.img-challenge', duration:320})
    						.setTween(setfLiveTween)
    						//.setPin(".logo", {pushFollowers: true})
								//.addIndicators(true)
    						.addTo(controller);

var setfSketch = TweenLite.to('.setf-sketch', 1, { bottom:'0px', ease:Linear.easeNone });
var sceneSketch = new ScrollMagic.Scene({triggerElement:'.img-strategy', duration:320})
    						.setTween(setfSketch)
    						//.setPin(".logo", {pushFollowers: true})
								//.addIndicators(true)
    						.addTo(controller);

if ( window.innerWidth >= 1280 ) {
  sceneSS.triggerHook(0.4);
  sceneSketch.triggerHook(0.4);
} else {
  sceneSS.triggerHook(0.56);
  sceneSketch.triggerHook(0.56);
}
