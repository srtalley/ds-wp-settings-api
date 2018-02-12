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
### Instantiation

Example:
```
$my_api_settings = array(
  'json_file' => plugin_dir_path( __FILE__ ) . '/plugin-options.json',
  'register_settings' => true
);

$my_settings_page = new My_DustySun_WP_Settings_API($my_api_settings);
```


### Available Functions

#### get_reset_ajax_form
Call this function in a PHP file to output an AJAX form that can be used to remove all settings from the db for the plugin.
#### read_json_file

Pass a file name while building the class or put a file with the .json extension in the same directory as the settings api php file. It must have the same name as the PHP file but with the .json extension.

--
Additional documentation coming soon. Please reach out if you're attempting to use this work in progress!


### Changelog
#### 1.0.4 - 2018-02-11
* Added function to create an Ajax form that allows a reset/deletion of all options in the database.

#### 1.0.3 - 2018-02-07
* Tab pages did not have a correct URL. Added a page_slug option to the JSON file which will fill in the URL to the tabs correctly.
* Fixed a bug where the first save of a new option array would not save because the hidden option key name was not being set in the validate function. (Actually the validate function is running twice in WP for some reason with this first save, stripping the hidden value.) Worked around this issue by making sure that value is set and if not, it pulls it from the POST data which should have it.

#### 1.0.2 - 2018-02-03
* Changed method of instantiation - now must pass an array containing 'json_file' with a path to the json file and 'register_settings' set to true or false. If any of these items are not passed the plugin will not register settings and will look for a JSON file in the same directory as the php file to load.

#### 1.0.1 - 2018-01-27
* Fixed an issue with the settings library to allow having hidden options.
* Fixed issue with the current settings function being called too many times.
