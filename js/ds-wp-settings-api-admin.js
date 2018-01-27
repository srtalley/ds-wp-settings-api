jQuery(function($) {

$(document).ready(function() {

  // Add Color Picker to all inputs that have 'cpa-color-picker' class

  $('.cpa-color-picker').wpColorPicker();

  $('.fontawesome-picker').iconpicker({
    placement: 'topRight',
    component: '.iconpicker-component',
    hideOnSelect: true
  });

  

}); //end $(document).ready(function()


});
