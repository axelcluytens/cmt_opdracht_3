$(window).load(function(){
  
  let sortingValue = "*";
  
  // get sorting value based on url
  $(".filter-list .selected").each(function(){
    if ($(this).data("filter") != '*') {
      sortingValue = $(this).data("filter");
    }
  });
  
  var $container = $('.painting-grid'); 
  $container.isotope({ 
    filter: sortingValue, 
    animationOptions: {
      duration: 750, 
      easing: 'linear', 
      queue: false, 
    }
  }); 

  // Filter items
  $('.filter-list a').click(function(){ 
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      }
    });
    return false;
  });
  
  // Remember filter option after clicking painting
  // Update URL with new category
  $(".filter-cat a").click(function(){
    let selectedUrl = $(this).data("url");
    history.replaceState({}, '', "/paintings/category/"+selectedUrl);
  });
  
  // Update URL with new artist
  $(".filter-art a").click(function(){
    let selectedUrl = $(this).data("url");
    history.replaceState({}, '', "/paintings/artist/"+selectedUrl);
  });
  
  // Change clicked link class to selected
  $(".filter-list a").click(function(){
    $(".filter-list a.selected").removeClass("selected");
    if ($(this).parent().hasClass("filter-art")) {
      $(".filter-cat a.all").addClass("selected");
    }
    if ($(this).parent().hasClass("filter-cat")) {
      $(".filter-art a.all").addClass("selected");
    }
    $(this).addClass("selected");
  });
  
});