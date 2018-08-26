$( window ).on( "load", function() {
  console.log('.. loaded')
});
$( window ).ready(function() {
  console.log('.. ready')
});

var tlc  = SVG('timeline-controls').size('100%', '100%')
var tlt  = SVG('timeline-tracks'  ).size('100%', '100%')

var timeline = new Timeline(tlc,tlt);

var a1 = new Animation('Anima1',['A'],tlc,tlt);
var a2 = new Animation('Ani2',[],tlc,tlt);
