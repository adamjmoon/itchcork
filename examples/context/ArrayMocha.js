define('arrayMocha',function() {
  function context() {
    self = this;
    this.arr = [1, 2, 3];
    this.fun = function fun(){
        self.arr = _.map(self.arr, function(num){ return num * 3; });
    }
  }
  return context;
});
