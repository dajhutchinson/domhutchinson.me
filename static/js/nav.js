var nav_active=false;

function toggle_navigation() {
  if (nav_active) {
    $("#nav_button").addClass("nav_toggle_inactive");
    $("#hamburger").addClass("hamburger_inactive");
    $("#nav_button").removeClass("nav_toggle_active");
    $("#hamburger").removeClass("hamburger_active");

    $(".mobile_nav_item").addClass("mobile_nav_item_inactive")
    $(".mobile_nav_item").removeClass("mobile_nav_item_active")

    // $("#nav_list").hide()

    $("body").css("overflowY","scroll")

    nav_active=false;
  } else {
    $("#nav_button").addClass("nav_toggle_active");
    $("#hamburger").addClass("hamburger_active");
    $("#nav_button").removeClass("nav_toggle_inactive nav_toggle_initial");
    $("#hamburger").removeClass("hamburger_inactive hamburger_initial");

    $(".mobile_nav_item").addClass("mobile_nav_item_active")
    $(".mobile_nav_item").removeClass("mobile_nav_item_inactive mobile_nav_item_initial")

    // $("#nav_list").show()

    $("body").css("overflowY","hidden")

    nav_active=true;
  }
}
