/** ------------------------------------------------------------------------------ //

Navigation:
Vertical Basic

*/


/** ------------------------------------------------------------------------------ //

Initialize window.MODULES since this is loading before the app.js bundle

*/
if (typeof(window.MODULES) == "undefined") {
    window.MODULES = {};
}

/** ------------------------------------------------------------------------------ //

Register module

*/
window.MODULES["navigation"] = function(APP) {

    var MODULE = {};

    var $DESKTOP_SUB_NAV = $('#desktop-sub-nav', APP.nodes["body"]);

    var $MOBILE_NAV_BUTTON = $('#mobile-menu-button', APP.nodes["body"]),
        $HAMBURGER = $('button.hamburger', $MOBILE_NAV_BUTTON);

    // Keep track of state
    MODULE.state = {
        "initialized": false
    };

    /** ------------------------------------------------------------------------------ //

    Events

    */

    MODULE.events = {
        "pjax": {
            "click": function() {

                // Clear ".nav-current" class immediately to avoid a delay 
                // from waiting until the PJAX "end" event fires.
                $(".nav-current").removeClass("nav-current");

            },
            "end": function() {

                var $wrapper = $('[data-module="navigation"][data-template="basic"]');

                $wrapper.removeClass("page-heading-behind-menu");

                $.each(APP.page.blocks, function(i, block) {

                    if (block.type == 2) {

                        if (typeof(block.settings["Template"]) != "undefined") {

                            if (block.settings["Template"] == "page-heading-behind-menu") {

                                $wrapper.addClass("page-heading-behind-menu");

                            }

                        }

                    }

                });

            },
            "beforeSend": function() {

                var $wrapper = $('[data-module="navigation"][data-template="basic"]');

                $('.nav-open', $wrapper).removeClass('nav-open');
                $('div[data-level]', $wrapper).not('[data-level="1"]').hide();

            }
        }
    }

    /** ------------------------------------------------------------------------------ //

    Desktop Only

    */

    MODULE.desktop = {

        "init": function() {

            // Set up desktop subnav down arrow color 
            $('.subnav', $DESKTOP_SUB_NAV).each(function() {

                var $subnav = $(this),
                    parent_id = $subnav.data("parent-id"),
                    $parent = $('[data-page-id="' + parent_id + '"]', APP.nodes["nav"]);

                var color = $('.subnav-section-preview-text', $subnav).length > 1 ? "brownish-grey" : "dark";

                $parent.attr("data-arrow-color", color);

            });

            // Set desktop nav/subnav mouseenter handler
            APP.nodes["nav"].on('mouseenter', '.nav-has-children', function(e) {

                if (!APP.isMobile()) {

                    var $LI = $(this);

                    clearTimeout(MODULE.desktop.subnav.timeout);

                    MODULE.desktop.subnav.open($LI);

                }

                // Set desktop nav/subnav mouseleave handler
            }).on('mouseleave', '.nav-has-children', function(e) {

                if (!APP.isMobile()) {

                    var $LI = $(this);

                    MODULE.desktop.subnav.timeout = setTimeout(function() {

                        MODULE.desktop.subnav.close($LI);

                    }, 500);

                }

            });

            // Set desktop nav/subnav mouseenter handler
            $DESKTOP_SUB_NAV.on('mouseenter', '.subnav', function(e) {

                if (!APP.isMobile()) {

                    clearTimeout(MODULE.desktop.subnav.timeout);

                    var $LI = $(this);

                    MODULE.desktop.subnav.open($LI);

                }

                // Set desktop nav/subnav mouseleave handler
            }).on('mouseleave', '.subnav', function(e) {

                if (!APP.isMobile()) {

                    var $LI = $(this);

                    MODULE.desktop.subnav.timeout = setTimeout(function() {

                        MODULE.desktop.subnav.close($LI);

                    }, 500);

                }

            });

        },

        "subnav": {

            "timeout": null,

            "open": function($parent) {

                if (typeof($parent) == "undefined") { return; }

                if ($parent.is(".subnav")) {

                    var parent_id = $parent.data("parent-id");

                    $parent = $('[data-page-id="' + parent_id + '"]', APP.nodes["nav"]);

                } else {

                    var parent_id = $parent.data("page-id");

                    if (!$parent.hasClass("nav-item-open-desktop")) {

                        MODULE.desktop.subnav.close();

                    }

                }

                var $subnav = $('[data-parent-id="' + parent_id + '"]', $DESKTOP_SUB_NAV);

                $parent.addClass("nav-item-open-desktop");
                $subnav.addClass("open");

                var $slick = $('[data-slick]', $subnav);

                if ($slick.length > 0) {

                    $slick.slick('setPosition');

                }

            },

            "close": function($parent) {

                if (typeof($parent) == "undefined") {

                    var $parent = false;
                    var parent_id = false;

                } else {

                    if ($parent.is(".subnav")) {

                        var parent_id = $parent.data("parent-id");

                        $parent = $('[data-page-id="' + parent_id + '"]', APP.nodes["nav"]);

                    } else {

                        var parent_id = $parent.data("page-id");

                    }

                }

                if ($parent) {

                    $('[data-parent-id="' + parent_id + '"]', $DESKTOP_SUB_NAV).removeClass("open");
                    $parent.removeClass("nav-item-open-desktop");

                } else {

                    $('[data-parent-id]', $DESKTOP_SUB_NAV).removeClass("open");
                    $('[data-page-id]', APP.nodes["nav"]).removeClass("nav-item-open-desktop");

                }

            }

        }

    }

    /** ------------------------------------------------------------------------------ //

    Mobile Only

    */

    MODULE.mobile = {

        "timeout": null,

        "init": function() {

            // Set click handler for mobile nav toggle
            $MOBILE_NAV_BUTTON.on('click', function() {

                MODULE.mobile.toggle();

            });

            // Set mobile nav/subnav click handler
            APP.nodes["nav"].on('click', 'a[data-level]', function(e) {

                if (APP.isMobile()) {

                    MODULE.mobile.subnav.click($(this));

                }

            });

        },

        "open": function() {

            $.scrollLock(true);

            APP.nodes["html"].addClass('nav-open');
            $HAMBURGER.addClass('is-active');

            APP.helpers.set_VH('--vh-initial');

            MODULE.mobile.timeout = setTimeout(function() {

                APP.nodes["html"].addClass('nav-animate-in');

                APP.helpers.set_VH('--vh-initial');

            }, 400);

        },

        "close": function() {

            $.scrollLock(false);

            clearTimeout(MODULE.mobile.timeout);

            APP.nodes["html"].removeClass('nav-open nav-animate-in');
            $HAMBURGER.removeClass('is-active');

            APP.helpers.set_VH('--vh-initial');

        },

        "toggle": function() {

            if (!APP.nodes["html"].hasClass('lets-talk-open')) {

                if (APP.nodes["html"].hasClass('nav-open')) {

                    MODULE.mobile.close();

                } else {

                    MODULE.mobile.open();

                }

            }

        },

        "subnav": {

            "click": function($CLICKED) {

                var $LI = $CLICKED.closest('li');

                if ($LI.hasClass("nav-has-children")) {

                    if ($LI.hasClass('nav-item-open-mobile')) {

                        $LI.removeClass('nav-item-open-mobile');
                        $LI.find('.nav-item-open-mobile').removeClass('nav-item-open-mobile');

                    } else {

                        if ($LI.data("level") == 1) {
                            APP.nodes["nav"].find('.nav-item-open-mobile').removeClass("nav-item-open-mobile");
                        }

                        $LI.addClass('nav-item-open-mobile');

                    }

                }

            }

        }

    }

    /** ------------------------------------------------------------------------------ //

    Set classes on current page, all the way up the sitemap tree to the root

    */

    MODULE.setCurrentPage = function(page_id) {

        page_id = parseInt(page_id);

        var mobile = APP.isMobile();

        $(".nav-current").removeClass("nav-current");
        $(".nav-item-open-mobile").removeClass("nav-item-open-mobile");

        var $page = $('li[data-page-id="' + page_id + '"]');

        $page.each(function() {

            var $p = $(this);

            $p.find("a:first").addClass("nav-current");

            var $parents = $p.parents(".nav-has-children");

            $parents.each(function() {

                $(this).find("a:first").addClass("nav-current");
                $(this).addClass("nav-item-open-mobile");

            });

        });

    }

    /** ------------------------------------------------------------------------------ //

    Initialize

    */

    MODULE.init = function() {

        if (!MODULE.state.initialized) {

            // Select the current page on initial load
            MODULE.setCurrentPage(APP.page.id);

            MODULE.desktop.init();
            MODULE.mobile.init();

            // Update state
            MODULE.state.initialized = true;

        };

    };

    return MODULE;

};