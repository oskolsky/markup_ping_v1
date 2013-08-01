(function($) {

  $.id = function(id) { return $(document.getElementById(id)); };

  // STICKY FOOTER
  // $.stickyFooter();
  // ----------------------------------------------------------------------------------------------------
  $.stickyFooter = function() {
    var $body    = $("body"),
        $section = $("#section"),
        $footer  = $("#footer"),
        footerHeight = $footer.outerHeight();
    $body.css({"position": "relative", "min-height": "100%"});
    $section.css({"padding-bottom": footerHeight + "px"});
    $footer.css({"position": "absolute", "right": "0", "bottom": "0", "left": "0", "z-index": "999"});
    return true;
  }

  // RESIZE TO MAX-WIDTH/HEIGHT
  // $(el).resizeToMaxWidth();
  // ----------------------------------------------------------------------------------------------------
  $.fn.maxWidth = function() {
    var max = 0;
    this.each(function() {
      max = Math.max(max, $(this).outerWidth());
    });
    return max;
  };

  $.fn.maxHeight = function() {
    var max = 0;
    this.each(function() {
      max = Math.max(max, $(this).outerHeight());
    });
    return max;
  };

  $.fn.resizeToMaxWidth  = function() { this.css({height: this.maxHeight() + 'px'}); return this; };
  $.fn.resizeToMaxHeight = function() { this.css({height: this.maxHeight() + 'px'}); return this; };

  // GET ARRAY OF HEIGHTS
  // var heightsMap = $(el).heightsMap();
  // ----------------------------------------------------------------------------------------------------
  $.fn.heightsMap = function() {
    return this.map(function() {
      var _this = this;
      return {el: _this, height: $(_this).outerHeight()};
    });
  };

  // CHECK IF IOS
  // ----------------------------------------------------------------------------------------------------
  iOSCheck = function() {
    var iOS = (navigator.userAgent.match(/(iPhone|iPod)/i) ? true : false);
    if (iOS) {
      return true;  
    } else {
      return false
    }
  };

})(jQuery);