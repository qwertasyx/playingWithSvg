function Timeline(controls,track) {  
  this._controls       = controls;
  this._track          = track;  
  this.init();
}

Timeline.prototype = {
  constructor: Timeline,
  init:  function() {
    this.drawGrid();
    this.drawControls();
    
    console.log('... timeline init')
  },
  addTrack: function(animation){

  },
  /// stuff that runs at startup
  drawControls: function(){
    /// controlbuttons
    var r = 2;
    this._controls.rect(20,20).addClass('timeline-control').move(10,5).radius(r)
    this._controls.rect(20,20).addClass('timeline-control').move(40,5).radius(r)
    this._controls.rect(20,20).addClass('timeline-control').move(70,5).radius(r)
    this._controls.rect(20,20).addClass('timeline-control').move(100,5).radius(r)
    /// timeticker
    this._ticker = this._track.rect(2,100).move(100,0).fill('red')
  },
  drawGrid: function(){
    this._grid = this._track.group();
    var rect   = this._track.rect(1000,1000).move(0,30);    
    var minorGrid  = this._track.pattern(10, 30, function(add) {
      add.path('M 10 0 L 0 0 0 30').addClass('minorGrid')
    })
    var majorGrid  = this._track.pattern(100, 30, function(add) {
      add.rect(100,30).fill(minorGrid)
      add.path('M 100 0 L 0 0 0 30').addClass('majorGrid')
    })
    // majorGrid.fill(minorGrid)
    rect.fill(majorGrid)
    this._grid.add(rect)
  },
};
