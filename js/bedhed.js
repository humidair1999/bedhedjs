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
            period: 5,
            preserveStyle: true,
            terminateTable: false
            // headerClass has no default; no point in initializing an empty option!
        },
        Plugin = function(element, options) {
            this.element = element;
            this.defaults = defaults;
            this.name = pluginName;
            this.options = $.extend({}, defaults, options);

            console.log(this);

            this.init();
        };

    Plugin.prototype.repeatHeader = function($element, options, thArray) {
        console.log($element);
        console.log(options);
        console.log(thArray);


    };

    Plugin.prototype.fixHeader = function() {
        console.log("fix");
    };

    // Initialization method for the plugin fires after setup is complete
    Plugin.prototype.init = function() {
        var $element = $(this.element),
            options = this.options,
            thArray = [];

        $element.find("th").each(function() {
            var thObject = {
                content: $(this).html()
            };

            if (options.preserveStyle) {
                thObject.fontSize = $(this).css("font-size"),
                thObject.fontWeight = $(this).css("font-weight"),
                thObject.fontStyle = $(this).css("font-style");
            }

            thArray.push(thObject);
        });

        (options.mode === "repeater") ? this.repeatHeader($element, options, thArray) : this.fixHeader();
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
    };

})(jQuery, window, document);