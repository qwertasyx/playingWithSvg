function Animation(name,keyframes,controlsHolder,trackHolder) {  
  this._name           = name;
  this._controlsHolder = controlsHolder;
  this._trackHolder    = trackHolder;
  this.init(keyframes);  
}

Animation.prototype = {
  constructor: Animation,
  init:  function(keyframes) {
    this._keyframes = keyframes
    console.log(this._name + ' loaded with  ' + this._keyframes.length +' keyframes');
  },
  addKeyframe: function(keyframe) {
    this._keyframes.push(keyframe);
    return this._keyframes
  }
};

