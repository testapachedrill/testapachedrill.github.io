var Drill = Drill || {};

Drill.Docs = {
  init : function(){
    Drill.Docs.watchDocTocClicks();
    Drill.Docs.watchExpandTocClicks();
    
  },

  watchExpandTocClicks : function () {
    $(".expand-toc-icon").on("click", function(){
      if($(".int_text .sidebar").css('left') == '0px'){
        Drill.Docs.contractSidebar();
      } else {
        Drill.Docs.expandSidebar();
      }
    })
  },

  expandSidebar : function(){
    $(".int_text .sidebar").addClass("force-expand");
  },

  contractSidebar : function() {
    $(".int_text .sidebar").removeClass("force-expand");
  },

  l2nodes_with_children : function(){
    $('li.toctree-l2').filter(function(){ 
      return $(this).next('ul').length > 0;
    });
  },

  watchDocTocClicks : function(){
    $('li.toctree-l1').on('click', function(){
      Drill.Docs.make_current(this);
    })

    Drill.Docs.add_expand_contract_buttons();
    Drill.Docs.show_or_hide_on_click();
  },

  show_or_hide_on_click : function() {
    var l2nodes = $('li.toctree-l2').filter(function(){ 
      return $(this).next('ul').length > 0;
    });
    $('li[class^=toctree]')
    .filter(function(){
      return $(this).next('ul').length > 0;
    })
    .on("click", function(){
      var $toctree = $(this);
      var $this_ul = $toctree.next("ul");
      $.each( $this_ul, function(i){
        if ( $(this).is(':hidden') ) {

          if ( $.inArray( $toctree[0], l2nodes ) > -1 ) {
            $toctree.children("span.expand").hide();
            $toctree.children("span.contract").show();
          }

          $(this).show("slide");
        } else {

          if ( $.inArray( $toctree[0], l2nodes ) > -1 ) {
            $toctree.children("span.expand").show();
            $toctree.children("span.contract").hide();
          }

          $(this).hide("slide");
        }
        //$(this).toggle("slide");
      })

      $('li[class^=toctree] ul').not($this_ul).hide("slide");
    })
  },


  make_current : function(that) {
    Drill.Docs.remove_current();
    $(that).addClass("current");
    $(that).next('ul').addClass("current");
  },

  remove_current : function() {
    $(".current").removeClass("current");
  },

  add_expand_contract_buttons : function() {
    $('li.toctree-l2').filter(function(){ 
      return $(this).next('ul').length > 0;
    })
    .prepend('<span class="expand"><i class="fa fa-plus"></i></span><span class="contract"><i class="fa fa-minus"></i></span>');
  }
}

$(function(){
  Drill.Docs.init();
});
