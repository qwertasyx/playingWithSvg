function Animation(name) {  
  this._name           = name;  
  this._keyframes = []

  // /// tmp
  this.defaultKeyframe = { 
    type:     'Trans',
    t: 0,
    easing:   
      {
        func:'Linear',
        dir:'None'
      },    
    position: {x:0,y:0,z:0},
    scale: {x:1,y:1},
    rotation: {x:0,y:0,z:0},
    color: {r:0,g:0,b:1}    
  };
}

Animation.prototype = {
  constructor: Animation,
  init:  function(keyframes) {
    this._keyframes = keyframes
    // console.log(this._name + ' loaded with  ' + this._keyframes.length +' keyframes');
  },
  addKeyframe: function(data) {
    var yPos     = this._track.cy(); 
    var rect     = this._track.rect(15,15);
    var keyframe = this._track.group();
    keyframe.para = data
    keyframe.add(rect)  
    keyframe.center(data.t,yPos).addClass('keyframe');                     
    keyframe.draggable(function(x, y) {
      return { x: x > -7.5, y: yPos-7.5 }
    }).on('dragend',function(){
      this.para.t = this.cx();
    });
    // keyframe.para = this.defaultKeyframe
    rect.rotate(45);
    this._keyframes.push(keyframe);
    return true
  },
  getKeyframeData: function() {
    var data=[];
    this._keyframes.forEach(element => {
      data.push(element.para)
    });
    return data
  },
};

