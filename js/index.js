var d = document,
  wfbody = document.getElementsByTagName("BODY")[0];
  //trackers = document.getElementById('getStartedBG');

window.addEventListener('scroll',function(){

  if ( window.innerWidth >= 1600 ) {
    if ( window.pageYOffset > 854 ) {
      TweenLite.to('.wf-logo-color', .4, { fill:'#444444', ease:Expo.easeOut });
      TweenLite.to('.menu ul', .4, { color:'#444444', ease:Expo.easeOut });
      // TweenLite.to('.cursor .dot', .4, { backgroundColor:'#ef4f53' });
      TweenLite.to('.top-header', .4, { background: 'rgba(255,255,255,.85)' });
      TweenLite.to('.top-header .navigation', .8, { padding:'24px 40px', ease:Power1.easeOut });
      TweenLite.to('.top-header .menu', .8, { padding:'24px 40px', ease:Power1.easeOut });
    }
    else {
      TweenLite.to('.wf-logo-color', .4, { fill:'#ffffff', ease:Expo.easeOut });
      TweenLite.to('.menu ul', .4, { color:'#ffffff', ease:Expo.easeOut });
      // TweenLite.to('.cursor .dot', .4, { backgroundColor:'#fff' });
      TweenLite.to('.top-header', .4, { background: 'rgba(255,255,255,0)' });
      TweenLite.to('.top-header .navigation', .8, { padding:'40px 40px', ease:Power1.easeOut });
      TweenLite.to('.top-header .menu', .8, { padding:'40px 40px', ease:Power1.easeOut });
    }
  } else if ( window.innerWidth >= 1440 ) {
    if ( window.pageYOffset > 590 ){
      TweenLite.to('.wf-logo-color', .4, { fill:'#444444', ease:Expo.easeOut });
      TweenLite.to('.menu ul', .4, { color:'#444444', ease:Expo.easeOut });
      // TweenLite.to('.cursor .dot', .4, { backgroundColor:'#ef4f53' });
      TweenLite.to('.top-header', .4, { background: 'rgba(255,255,255,.85)' });
      TweenLite.to('.top-header .navigation', .8, { padding:'24px 40px', ease:Power1.easeOut });
      TweenLite.to('.top-header .menu', .8, { padding:'24px 40px', ease:Power1.easeOut });
    }
    else {
      TweenLite.to('.wf-logo-color', .4, { fill:'#ffffff', ease:Expo.easeOut });
      TweenLite.to('.menu ul', .4, { color:'#ffffff', ease:Expo.easeOut });
      // TweenLite.to('.cursor .dot', .4, { backgroundColor:'#fff' });
      TweenLite.to('.top-header', .4, { background: 'rgba(255,255,255,0)' });
      TweenLite.to('.top-header .navigation', .8, { padding:'40px 40px', ease:Power1.easeOut });
      TweenLite.to('.top-header .menu', .8, { padding:'40px 40px', ease:Power1.easeOut });
    }
  } else if ( window.innerWidth >= 1280 ) {
    if ( window.pageYOffset > 540 ){
      TweenLite.to('.wf-logo-color', .4, { fill:'#444444', ease:Expo.easeOut });
      TweenLite.to('.menu ul', .4, { color:'#444444', ease:Expo.easeOut });
      // TweenLite.to('.cursor .dot', .4, { backgroundColor:'#ef4f53' });
      TweenLite.to('.top-header', .4, { background: 'rgba(255,255,255,.85)' });
      TweenLite.to('.top-header .navigation', .8, { padding:'24px 40px', ease:Power1.easeOut });
      TweenLite.to('.top-header .menu', .8, { padding:'24px 40px', ease:Power1.easeOut });
    }
    else {
      TweenLite.to('.wf-logo-color', .4, { fill:'#ffffff', ease:Expo.easeOut });
      TweenLite.to('.menu ul', .4, { color:'#ffffff', ease:Expo.easeOut });
      // TweenLite.to('.cursor .dot', .4, { backgroundColor:'#fff' });
      TweenLite.to('.top-header', .4, { background: 'rgba(255,255,255,0)' });
      TweenLite.to('.top-header .navigation', .8, { padding:'40px 40px', ease:Power1.easeOut });
      TweenLite.to('.top-header .menu', .8, { padding:'40px 40px', ease:Power1.easeOut });
    }
  } else if ( window.innerWidth >= 768 ) {
    if ( window.pageYOffset > 518 ){
      TweenLite.to('.wf-logo-color', .4, { fill:'#444444', ease:Expo.easeOut });
      TweenLite.to('.menu ul', .4, { color:'#444444', ease:Expo.easeOut });
      TweenLite.to('.top-header', .4, { background: 'rgba(255,255,255,.85)' });
      TweenLite.to('.top-header .navigation', .8, { padding:'24px 30px', ease:Power1.easeOut });
      TweenLite.to('.top-header .menu', .8, { padding:'24px 30px', ease:Power1.easeOut });
    }
    else {
      TweenLite.to('.wf-logo-color', .4, { fill:'#ffffff', ease:Expo.easeOut });
      TweenLite.to('.menu ul', .4, { color:'#ffffff', ease:Expo.easeOut });
      TweenLite.to('.top-header', .4, { background: 'rgba(255,255,255,0)' });
      TweenLite.to('.top-header .navigation', .8, { padding:'40px 30px', ease:Power1.easeOut });
      TweenLite.to('.top-header .menu', .8, { padding:'40px 30px', ease:Power1.easeOut });
    }
  } else {
    if ( window.pageYOffset >= 460 ){
      TweenLite.to('.wf-logo-color', .4, { fill:'#121212', ease:Expo.easeOut });
      TweenLite.to('.hamburger-color', .4, { fill:'#121212', ease:Expo.easeOut });
      TweenLite.to('.top-header', .4, { background: 'rgba(255,255,255,.85)' });
    }
    else {
      TweenLite.to('.wf-logo-color', .4, { fill:'#ffffff', ease:Expo.easeOut });
      TweenLite.to('.hamburger-color', .4, { fill:'#ffffff', ease:Expo.easeOut });
      TweenLite.to('.top-header', .4, { background: 'rgba(255,255,255,0)' });
    }
  }
  //console.log(window.pageYOffset+' '+window.scrollTop);
  //trackers.innerText = window.pageYOffset+' '+window.scrollTop;
});

var bodyYHeight = document.body.clientHeight;
wfGridHeight = bodyYHeight + 136;//320
// console.log(bodyYHeight);

TweenLite.set(['.wf-grid-center', '.wf-grid-left-out', '.wf-grid-left-mid', '.wf-grid-right-mid', '.wf-grid-right-out'], { height: wfGridHeight });


function setCopy() {
  client.innerHTML = 'Southeast Toyota Finance';
  workSummary.innerHTML = 'We collaborated with Southeast Toyota Finance (SETF) to evolve its payment-focused website into a platform to create deeper and longer-lasting relationships with its customers.';
  workType.innerHTML = 'Case Study';
  workSpec.innerHTML = 'UX/UI Design, Information Architecture, Content Strategy';
}

function initMobileMenu() {
  TweenLite.to('.wf-logo-color', .4, { fill:'#ffffff', ease:Expo.easeOut });
  TweenLite.to('.hamburger-color', .4, { fill:'#ffffff', ease:Expo.easeOut });
  TweenLite.to('.top-header', .2, { background: 'rgba(255,255,255,.0)' });
  TweenLite.to('.menu-hamburger', .2, { autoAlpha:0, ease:Expo.eaeOut });
  TweenLite.fromTo(['.mobile-menu', '.mobile-close'], .2, { display: 'block', autoAlpha:0 }, { autoAlpha:1, ease:Expo.eaeOut });
  TweenLite.set(wfbody, { overflow: 'hidden' });
}

function closeMobileMenu() {
  if ( window.pageYOffset >= 460 ){
    TweenLite.to('.wf-logo-color', .4, { fill:'#121212', ease:Expo.easeOut });
    TweenLite.to('.hamburger-color', .4, { fill:'#121212', ease:Expo.easeOut });
    TweenLite.to('.top-header', .2, { background: 'rgba(255,255,255,.85)' });
  }
  TweenLite.to('.menu-hamburger', .2, { autoAlpha:1, ease:Expo.eaeOut });
  TweenLite.to(['.mobile-menu', '.mobile-close'], .2, { autoAlpha:0, ease:Expo.eaeOut });
  TweenLite.set(wfbody, { overflow: 'visible' });
}

function btnWorkWithUsOver() {
  TweenLite.to('.btn', .2, { backgroundColor:'#444', color:'#fff', ease:Expo.easeOut });
}

function btnWorkWithUsOut() {
  TweenLite.to('.btn', .2, { backgroundColor:'transparent', color:'#444', ease:Expo.easeOut });

}

function openHome() {
  var url = 'https://wayfinder-ux.com/';
  window.open(url, '_blank');
}

function openAbout() {
  var url = 'https://wayfinder-ux.com/#/about';
  window.open(url, '_blank');
}

function openWork() {
  var url = 'https://wayfinder-ux.com/#/work';
  window.open(url, '_blank');
}

function openContact() {
  var url = 'https://wayfinder-ux.com/#/contact';
  window.open(url, '_blank');
}

setCopy();
