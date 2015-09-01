$(function() {

  var one = {
    init: function() {
      this.baseEvents();
    },
    baseEvents: function() {
      if (window.location != window.parent.location) window.parent.location = window.location;
    }
  }

  var two = {
    init: function() {
      this.baseEvents();
    },
    baseEvents: function() {

    }
  }

  var main = {
    init: function() {
      this.baseEvents();
    },
    baseEvents: function() {
      one.init();
      two.init();
    }
  }
  main.init();

});
