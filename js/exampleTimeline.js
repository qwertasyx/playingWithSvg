$( window ).on( "load", function() {
  console.log('.. loaded')
});
$( window ).ready(function() {
  console.log('.. ready')
});

var tlc  = SVG('timeline-controls').size('100%', '100%')
var tlt  = SVG('timeline-tracks'  ).size('100%', '100%')

var timeline = new Timeline(tlc,tlt);

var a1 = new Animation('Anima1');
var a2 = new Animation('Ani2'  );
var a3 = new Animation('Ani3'  );
var a4 = new Animation('Ani4'  );

timeline.addTrack(a1,[{type:'Trans',t:10},{type:'Trans',t:550},{type:'Trans',t:850}]);
timeline.addTrack(a2,[{type:'Trans',t:100},{type:'Trans',t:250},{type:'Trans',t:350}]);
timeline.addTrack(a3,[{type:'Trans',t:200},{type:'Trans',type:'Trans',t:300}]);
timeline.addTrack(a4,[{type:'Trans',t:150},{type:'Trans',type:'Trans',t:250}]);
