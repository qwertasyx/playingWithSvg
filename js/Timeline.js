function Timeline(controls,track) {  
  this._controls       = controls;  //svg
  this._track          = track;     //svg
  this._tracks         = []         //array of Animations
  this.init();
}

Timeline.prototype = {
  constructor: Timeline,
  init:  function() {
    // this.drawGrid();
    this.drawControls();
    
    console.log('... timeline init')
  },
  addTrack: function(animation,data){
    this._tracks.push(animation)
    var index = this._tracks.length;
    /// animation name 
    this._tracks[index-1]._trackText =
    this._controls.text(animation._name)
                  .move(10,8+this._tracks.length*30)
                  .addClass('svg-track-text')
    /// settings button
    this._tracks[index-1]._trackCtrl =
    this._controls.rect(20,20).addClass('timeline-control').move(230-25,6+this._tracks.length*30).radius(2);
    /// update grid
    this._tracks[index-1]._track = this.drawTrackGrid(index)
    /// draw Keyframes and reg events
    data.forEach(element => {
      this._tracks[index-1].addKeyframe(element);
    });
    return true
  },
  deleteTrack: function(animation){
    var indexToRemove = this._tracks.indexOf(animation);
    if(indexToRemove==-1){
      return false
    }
    animation._track.remove();
    animation._trackText.remove();
    animation._trackCtrl.remove();
    /// move following tracks upwards
    for (i = indexToRemove+1; i < this._tracks.length; i++) { 
      this._tracks[i]._track.dmove(0,-30)
      this._tracks[i]._trackText.dmove(0,-30)
      this._tracks[i]._trackCtrl.dmove(0,-30)
    }
    /// remove from _tracks
    this._tracks.splice(indexToRemove, 1); 
    return true
  },
  /// stuff that runs at startup
  drawControls: function(){
    /// controlbuttons
    var r = 2;
    this._controls.rect(20,20).addClass('timeline-control').move(230-115,5).radius(r);
    this._controls.rect(20,20).addClass('timeline-control').move(230-85,5).radius(r);
    this._controls.rect(20,20).addClass('timeline-control').move(230-55,5).radius(r);
    this._controls.rect(20,20).addClass('timeline-control').move(230-25,5).radius(r);
    /// timeticker
    this._ticker = this._track.rect(2,100).move(100,0).fill('red');
  },
  drawTrackGrid: function(index){
    var track = this._track.group();
    var minorGrid  = this._track.pattern(10, 30, function(add) {
      add.path('M 10 0 L 0 0 0 30').addClass('minorGrid')
    })
    var majorGrid  = this._track.pattern(100, 30, function(add) {
      add.rect(100,30).fill(minorGrid)
      add.path('M 100 0 L 0 0 0 30').addClass('majorGrid')
    })
    var rect = this._track.rect(50000,30).move(0,index*30).fill(majorGrid);
    track.add(rect).move(20,0)
    return track
  },
};
