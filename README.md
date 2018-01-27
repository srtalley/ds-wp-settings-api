Dusty Sun WP Settings API
================

A class to include in your WordPress plugin to make it easy to add fields and settings.

Features
--------
* **Builds a complete plugin panel or just the fields.**    

  Can use one of the functions to build a completed plugin panel, with tabs, if you choose. If you don't want a complete plugin panel, there's a function to just build the fields so you can put your own HTML wrapper around the fields.

* **Easy to set up.**

  Simply fill out the options in the JSON file and include this in your plugin. An example JSON file is included.

Getting Started
---------------

### Adding the class to your theme

Require the file:
```
require( dirname( __FILE__ ) . '/lib/ds_wp_settings_api.php');
```
Create the class and pass the JSON file:
```
$ds_example_json_file = plugin_dir_path( __FILE__ ) . '/ds-example-options.json';

$ds_example_settings_obj = new DustySun_WP_Settings_API(($ds_example_json_file), true);
```
True means the options page is built. False will not build the options page - use this elsewhere in your plugin.

## Notes

If you create the class with the second option set to true, it will run the logic to create the options pages. If this second parameter is missing or false, the options will not be built. However, the current_settings function will be available.

Why the difference? Well on your admin pages you'll definitely want to create this object with the parameter set to true so your options will be built.

For the user-facing code in your plugin, you can create this object with the parameter set to false. This will read in any default values and pull any required ones from the DB. They will then be available to your plugin via the current_settings function.

For example you could do this in your plugin:

```
$ds_example_current_settings = $ds_example_settings_obj->current_settings();
```
### Available Functions

Additional documentation coming soon. Please reach out if you're attempting to use this work in progress!
