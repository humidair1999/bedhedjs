/*!
 * Bedhed.js - A jQuery plugin for better headers for particularly long tables
 *
 * J. Ky Marsh, jkymarsh@gmail.com
 * Copyright (c) 2012
 */

;

(function($, window, document, undefined) {

    // Create the defaults and set up the constructor for the plugin itself
    var pluginName = "bedhed",
        defaults = {
            mode: "repeater",
            period: 5
        },
        Plugin = function(element, options) {
            this.element = element;
            this.defaults = defaults;
            this.name = pluginName;
            this.options = $.extend({}, defaults, options);

            console.log(this);

            this.init();
        };

    // Initialization method for the plugin fires after setup is complete
    Plugin.prototype.init = function() {
        var $element = $(this.element),
            options = this.options,
            thContent;

        console.log($element);
        console.log(this.defaults);
        console.log(this.name);
        console.log(options);

        $element.find("th").each(function() {
            thContent = $(this).html();

            console.log(thContent);
        });
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);