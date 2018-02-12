//v1.0.4

jQuery(function($) {

  $(document).ready(function() {

    // Add Color Picker to all inputs that have 'cpa-color-picker' class

    $('.cpa-color-picker').wpColorPicker();

    $('.fontawesome-picker').iconpicker({
      placement: 'topRight',
      component: '.iconpicker-component',
      hideOnSelect: true
    });


    // Reset AJAX form
    var wp_settings_api_reset_settings_form = $('#ds-wp-settings-reset');

    var wp_settings_api_response = $('#ds-wp-settings-reset-response');

    $(wp_settings_api_reset_settings_form).submit(function(event){
      event.preventDefault();

      var ds_wp_settings_api_remove_data = $('#ds_wp_settings_api_remove_data').prop('checked');

      var wp_settings_api_response_data = '<hr>';

      var wp_settings_api_action =
      $.ajax({
          type: 'POST',
          url: ajaxurl,
          data: {
            action: 'ds_wp_api_reset_settings',
            remove_data: ds_wp_settings_api_remove_data,
          },
          success: function (response) {

            var current_time = new Date($.now());
            wp_settings_api_response_data += '<p><strong>' + current_time + '</strong></p>';

            wp_settings_api_response_data += '<h4>Result: ' + response.messages + '</h4>';
            //final
            $(wp_settings_api_response).prepend(wp_settings_api_response_data);
          }
      }); //end $.ajax

    }); //end $(wp_settings_api_reset_settings_form).submit(function(event)

  }); //end $(document).ready(function()


});
