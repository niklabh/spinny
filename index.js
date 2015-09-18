'use strict';

function Spinner(opts) {
  this.duration = opts && opts.duration || 50;
  this.charSet = opts && opts.charSet || ['|', '/', '-', '\\'];
  this.interval;
}

Spinner.prototype.start = function() {
  var i = 0;
  var self = this;
  this.interval = setInterval(function(){
    process.stdout.clearLine();                           // clear current text
    process.stdout.cursorTo(0);                           // move cursor to beginning of line
    process.stdout.write(self.charSet[(i++)%self.charSet.length]); // print spinner
  }, self.duration);
};

Spinner.prototype.stop = function() {
  process.stdout.clearLine();                           // clear current text
  process.stdout.cursorTo(0);                           // move cursor to beginning of line
  clearInterval(this.interval);
};

module.exports = Spinner;

if (require.main === module) {
  (function(){
    var spinner = new Spinner();
    spinner.start();
    setTimeout(function(){ spinner.stop(); }, 2000);
  }());
}