function Animation(name,keyframes,controlsHolder,trackHolder) {  
  this._name           = name;
  this._controlsHolder = controlsHolder;
  this._trackHolder    = trackHolder;  
  this.init(keyframes);  
  /// tmp
  this.defaultKeyframe = { 
    type:     'Trans',
    t: 1000,
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
  addKeyframe: function(keyframe) {
    this._keyframes.push(keyframe);
    return this._keyframes
  }
};

