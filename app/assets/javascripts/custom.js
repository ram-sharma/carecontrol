$(document).ready(function() {
    $("#introjs-help").on("click", function() {
      introJs().setOption("showStepNumbers","false").start();
    });

    if($('#dataTables-patients').length != 0) {
      $('#dataTables-patients').DataTable({
              responsive: true,
              "iDisplayLength": 20,
              "language": {
              "lengthMenu": "Display _MENU_ patients"
              },
              "order": [[ 3, "desc" ]],
              columnDefs: [
                 { orderable: false, targets: -1 }
              ]
      });
    }
    $(function() {
        $('#side-menu').metisMenu();
        var d = new Date();
        $("#quickaddLabel")[0].innerHTML = "Quick Add  - " + d.toUTCString();
    });

    //Loads the correct sidebar on window load,
    //collapses the sidebar on window resize.
    // Sets the min-height of #page-wrapper to window size
    $(function() {
        $(window).bind("load resize", function() {
            topOffset = 50;
            width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
            if (width < 768) {
                $('div.navbar-collapse').addClass('collapse');
                topOffset = 100; // 2-row-menu
            } else {
                $('div.navbar-collapse').removeClass('collapse');
            }

            height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            if (height < 1) height = 1;
            if (height > topOffset) {
                $("#page-wrapper").css("min-height", (height) + "px");
            }
        });

        var url = window.location;
        var element = $('ul.nav a').filter(function() {
            return this.href == url || url.href.indexOf(this.href) == 0;
        }).addClass('active').parent().parent().addClass('in').parent();
        if (element.is('li')) {
            element.addClass('active');
        }
    });
    if($('ul[class=timeline]').length != 0){
      var newEvent = $('#newEvent');
      newEvent.hide();
      setTimeout(function(){ $(newEvent).prependTo("ul[class=timeline]").fadeIn("slow"); }, 3000);
    }
});
