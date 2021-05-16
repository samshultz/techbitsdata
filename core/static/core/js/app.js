/*


 ██████╗██╗   ██╗██████╗ ███████╗██████╗ ███╗   ██╗ █████╗ ██╗   ██╗████████╗██╗ ██████╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗████╗  ██║██╔══██╗██║   ██║╚══██╔══╝██║██╔════╝
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝██╔██╗ ██║███████║██║   ██║   ██║   ██║██║
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗██║╚██╗██║██╔══██║██║   ██║   ██║   ██║██║
╚██████╗   ██║   ██████╔╝███████╗██║  ██║██║ ╚████║██║  ██║╚██████╔╝   ██║   ██║╚██████╗
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝

compiled by minify v1.3.60 on Mon, 03 May 2021 09:48:01 -0500 (0.2722s)

*/

var FORM_VALIDATOR = function($FORM, OPTIONS) {
    if (typeof($FORM) == "undefined") { console.log("No Form Argument"); return !1 }
    if (typeof(OPTIONS) == "undefined") { OPTIONS = {} }
    var DEFAULTS = { "fill": !1, "nodes": { "submit": $(".contact-form-submit", $FORM), "loading": $(".contact-form-loading-icon", $FORM), "message": $(".contact-form-message", $FORM), }, "onValid": function(CONFIG) {}, "onInvalid": function(INVALID_ELEMENTS, MESSAGE) {}, "messages": { "validating": "Sending contact form...", "uploading": "Uploading attachment...", "required_fields": "Please fill in all required fields.", "invalid_email": "E-mail address is invalid.", "invalid_password": "Password is invalid.", "success": "Your message has been sent!", "unknown_error": "Unknown error." } };
    OPTIONS = $.extend({}, DEFAULTS, OPTIONS);
    var EXTEND_JSON = $("script[type='application/json']", $FORM),
        EXTEND = EXTEND_JSON.length > 0 ? JSON.parse($.trim(EXTEND_JSON.html())) : !1;
    if (EXTEND) { OPTIONS = $.extend(!0, OPTIONS, EXTEND) }
    var MODULE = {};
    var BLOCK_ID = $FORM.data("block");
    var MESSAGE_TIMEOUT = null;
    var MESSAGE = function(MESSAGE, TYPE, TIMEOUT) {
        if (typeof(MESSAGE) == "undefined") { MESSAGE = "" }
        if (typeof(TYPE) == "undefined") { TYPE = "loading" }
        if (typeof(TIMEOUT) == "undefined") { TIMEOUT = !1 }
        clearTimeout(MESSAGE_TIMEOUT);
        var CLASSES = ['loading', 'success', 'error'];
        $FORM.removeClass(CLASSES.join(" ")).addClass(TYPE);
        OPTIONS.nodes.message.show().html(MESSAGE);
        if (MESSAGE == "") { OPTIONS.nodes.message.hide() }
        if (TIMEOUT) {
            MESSAGE_TIMEOUT = setTimeout(function() {
                $FORM.removeClass(CLASSES.join(" "))
                OPTIONS.nodes.message.html("").hide()
            }, TIMEOUT)
        }
    };
    var INIT = function() {
        CONDITIONALS.init();
        if (OPTIONS.fill) {
            $(".form-item", $FORM).each(function(i, DIV) {
                var $ELEMENT = $("input,textarea,select", DIV).first();
                if ($ELEMENT.is(":visible")) {
                    if ($ELEMENT.is(".checkbox-group input")) { var $GROUP = $ELEMENT.closest('.checkbox-group'),
                            $INPUTS = $("input", $GROUP),
                            SIZE = $INPUTS.length,
                            RANDOM = Math.floor(Math.random() * SIZE) + 1;
                        $INPUTS.each(function(i, v) { if (i < RANDOM) { $(this).prop("checked", !0).trigger('change') } }) } else if ($ELEMENT.is(".radio-group input")) { $ELEMENT.prop("checked", !0).trigger('change') } else if ($ELEMENT.is("select")) { var SELECTED_OPTION = "";
                        $("option", $ELEMENT).each(function() { var VAL = $.trim($(this).val()); if (VAL != "") { SELECTED_OPTION = VAL } });
                        $ELEMENT.val(SELECTED_OPTION).trigger('change') } else {
                        var RANDOM_STRING = Math.random().toString(36).slice(2);
                        if ($ELEMENT.data("email")) { RANDOM_STRING += "@test.com" }
                        if ($ELEMENT.data("mask")) { RANDOM_STRING = $ELEMENT.data("mask") }
                        $ELEMENT.val(RANDOM_STRING).trigger('keyup')
                    }
                }
            })
        }
        OPTIONS.nodes.submit.on('click', function(event) {
            event.preventDefault();
            if ($(this).hasClass("disabled")) { return }
            MODULE.validate()
        });
        $("input:not([type='checkbox']):not([type='radio'])", $FORM).on('keydown', function(event) { if (event && event.keyCode && event.keyCode == 13) { event.preventDefault();
                MODULE.validate() } });
        $FORM.on('change keyup', '.form-invalid', function(event) { $(this).removeClass("form-invalid"); if ($(".form-invalid", $FORM).length === 0) { MESSAGE("", "success") } });
        $("input[data-mask], textarea[data-mask]", $FORM).each(function(i, v) { var input = $(this);
            input.mask(input.data("mask").toString()) })
    };
    var CHECK = {
        "from": function(ON_SUCCESS) {
            if (typeof(ON_SUCCESS) == "undefined") { ON_SUCCESS = function() {} }
            var $NAME_ELEMENT = $("[data-name='true']", $FORM),
                $EMAIL_ELEMENT = $("[data-email='true']", $FORM);
            var NAME = "",
                EMAIL = $EMAIL_ELEMENT.val();
            if ($NAME_ELEMENT.length > 1) { var MULTI = "";
                $NAME_ELEMENT.each(function(i, v) { MULTI = MULTI + $(this).val(); if (i < $NAME_ELEMENT.length - 1) { MULTI = MULTI + " " } });
                NAME = MULTI } else { NAME = $NAME_ELEMENT.val() }
            ON_SUCCESS({ "name": { "element": $NAME_ELEMENT, "string": NAME }, "email": { "element": $EMAIL_ELEMENT, "string": EMAIL } })
        },
        "blanks": function(ON_SUCCESS) {
            if (typeof(ON_SUCCESS) == "undefined") { ON_SUCCESS = function() {} }
            var INVALID_ELEMENTS = [];
            $("[data-required]:visible", $FORM).each(function(i, ELEMENT) {
                var $ELEMENT = $(ELEMENT),
                    INVALID = !1;
                if ($ELEMENT.is(".checkbox-group")) {
                    var REQUIRED = parseInt($ELEMENT.data("required"));
                    if (isNaN(REQUIRED)) { REQUIRED = 1 }
                    if ($("input[type='checkbox']:checked", $ELEMENT).length < REQUIRED) { INVALID = !0 }
                } else if ($ELEMENT.is(".radio-group")) { if ($("input[type='radio']:checked", $ELEMENT).length == 0) { INVALID = !0 } } else if ($ELEMENT.is("[type='checkbox']")) { if (!$ELEMENT.is(":checked")) { INVALID = !0 } } else if ($ELEMENT.is("select")) { if ($.trim($ELEMENT.val()) == "" || $.trim($ELEMENT.val()) == "null") { INVALID = !0 } } else { if ($.trim($ELEMENT.val()) == "") { INVALID = !0 } }
                if (INVALID) { $ELEMENT.addClass("form-invalid");
                    INVALID_ELEMENTS.push($ELEMENT) }
            });
            if (INVALID_ELEMENTS.length > 0) { MESSAGE(OPTIONS.messages.required_fields, "error");
                OPTIONS.onInvalid(INVALID_ELEMENTS, OPTIONS.messages.required_fields) } else { ON_SUCCESS() }
        },
        "email": function(FROM, ON_SUCCESS) {
            if (typeof(FROM) == "undefined") { FROM = {} }
            if (typeof(ON_SUCCESS) == "undefined") { ON_SUCCESS = function() {} }
            if (FROM.email.element.length > 0 && FROM.email.element.is(":visible")) { var REGEX = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/; if (FROM.email.string.match(REGEX)) { ON_SUCCESS() } else { MESSAGE(OPTIONS.messages.invalid_email, "error");
                    FROM.email.element.addClass("form-invalid");
                    OPTIONS.onInvalid([FROM.email.element], OPTIONS.messages.invalid_email) } } else { ON_SUCCESS() }
        },
    };
    var CONDITIONALS = {
        "init": function() {
            var $TRIGGERS = $("[data-conditional]", $FORM),
                $CONDITIONS = $("[data-condition]", $FORM);
            $CONDITIONS.hide();
            $TRIGGERS.each(function() {
                var $TRIGGER = $(this);
                if ($TRIGGER.is("input[type='radio']")) { var $CONDITION = $CONDITIONS.filter("[data-condition='" + $TRIGGER.data("conditional") + "']");
                    $("[name='" + $TRIGGER.attr("name") + "']", $FORM).not("[data-conditional='" + $TRIGGER.data("conditional") + "']").not($TRIGGER).on('change', function() { if ($(this).is(":checked")) { $CONDITION.slideUp(200, function() { $("input,textarea,select", $CONDITION).val(function() { return this.defaultValue }) }) } }) }
                $TRIGGER.on('change keyup', function(event) {
                    var $CONDITION = $CONDITIONS.filter("[data-condition='" + $TRIGGER.data("conditional") + "']");
                    TOGGLE = !0;
                    if ($TRIGGER.is("[type='checkbox']") || $TRIGGER.is("[type='radio']")) { if (!$TRIGGER.is(":checked")) { TOGGLE = !1 } } else { var VAL = $.trim($TRIGGER.val()); if ($.inArray(VAL, ["", "null"]) !== -1) { TOGGLE = !1 } }
                    if (TOGGLE) { $CONDITION.slideDown(200) } else { $CONDITION.slideUp(200, function() { $("input,textarea,select", $CONDITION).val(function() { return this.defaultValue }) }) }
                })
            })
        }
    };
    MODULE.validate = function(custom_onvalid) { MESSAGE(OPTIONS.messages.validating);
        $(".form-invalid", $FORM).removeClass("form-invalid");
        CHECK.from(function(FROM) { CHECK.blanks(function() { CHECK.email(FROM, function() { MESSAGE("", "success"); var SERIALIZED = $FORM.serializeArray(); var TRANSFORM_SERIALIZED = Array();
                    $.each(SERIALIZED, function(i, ITEM) { if (typeof(ITEM.name) != "undefined" && ITEM.name != "") { TRANSFORM_SERIALIZED.push(ITEM) } });
                    SERIALIZED = TRANSFORM_SERIALIZED; var data = { "block_id": BLOCK_ID, "from": { "name": FROM.name.string, "email": FROM.email.string }, "serialized": SERIALIZED, "messages": OPTIONS.messages }; if (typeof(custom_onvalid) == "function") { custom_onvalid(data, OPTIONS) } else { OPTIONS.onValid(data, OPTIONS) } }) }) }) };
    MODULE.customSuccessMessage = function($TARGET) {
        if (typeof($TARGET) == "undefined") { var $TARGET = $FORM }
        CMS.block.get(BLOCK_ID, function(BLOCK) { if (typeof(BLOCK.settings["Form Success Message"]) != "undefined") { var $SUCCESS = $("<div />");
                $SUCCESS.hide().addClass("contact-form-success-message");
                $SUCCESS.html(BLOCK.data[0].html);
                $("html,body").animate({ scrollTop: $TARGET.offset().top - APP.helpers.fixed_elements_offset() - 150 }, 200, function() { $TARGET.before($SUCCESS);
                    $TARGET.hide();
                    $SUCCESS.show() }) } })
    };
    MODULE.message = function(MSG, TYPE, TIMEOUT) {
        if (typeof(MSG) == "undefined") { MSG = "" }
        if (typeof(TYPE) == "undefined") { TYPE = "loading" }
        if (typeof(TIMEOUT) == "undefined") { TIMEOUT = !1 }
        MESSAGE(MSG, TYPE, TIMEOUT)
    };
    INIT();
    MODULE.config = OPTIONS;
    return MODULE
};
if (typeof(window.MODULES) == "undefined") { window.MODULES = {} };
MODULES.accessibility = function(APP) {
    var MODULE = { initialized: !1 };
    MODULE.init = function(callback, $scope) {
        if (typeof(callback) == "undefined") { callback = function() {} }
        if (typeof($scope) == "undefined") { $scope = APP.nodes.body }
        $("[tabindex]", APP.nodes.body).removeAttr("tabindex");
        $("iframe", APP.nodes.body).attr("tabindex", "-1");
        $("a,button,[name],[data-tab-element]").each(function(i, v) {
            var $element = $(this),
                in_scope = $element.closest($scope).length > 0,
                tab_element_index = $element.is("[data-tab-element]") && parseInt($element.data("tab-element")) > 0 ? parseInt($element.data("tab-element")) : !1;
            var index = in_scope ? (tab_element_index ? tab_element_index : 0) : -1;
            if ($element.is("a") && $element.closest('.amsd-item-profile-photo').length > 0) { index = -1 }
            $(this).attr("tabindex", index)
        });
        callback();
        if (!MODULE.initialized) { APP.nodes.body.on('keydown', 'a:not([href])', function(e) { if (e.keyCode == 13) { $(this).trigger('click') } }) }
        MODULE.initialized = !0
    }
    return MODULE
};
MODULES.animations = function(APP) {
    var MODULE = { initialized: !1 };
    MODULE.init = function() {
        if (!APP.nodes.html.hasClass("page-animations")) { return }
        var $elements = $('#interior-content-blocks section[data-block]');
        $elements.each(function() { var $element = $(this),
                block_id = $element.data("block"),
                id = "section-block-" + block_id; if (!APP.helpers.element_in_viewport($element)) { var animate_class = "fadeIn";
                $element.css("opacity", "0"); if (typeof(APP.helpers.observer.cache[id]) == "undefined") { APP.helpers.observer.create($element, id, function() { $element.addClass("animated " + animate_class) }, function() { try { APP.helpers.observer.cache[id].unobserve(document.body, function() { if (typeof(APP.helpers.observer.cache[id]) != "undefined") { delete APP.helpers.observer.cache[id] } }) } catch (e) { if (typeof(APP.helpers.observer.cache[id]) != "undefined") { delete APP.helpers.observer.cache[id] } } }, { rootMargin: "20px" }) } } });
        if (!MODULE.initialized) {}
        MODULE.initialized = !0
    }
    return MODULE
};
MODULES["card-stack"] = function(APP) {
    var MODULE = { initialized: !1, cache: {} };
    MODULE.events = { "blur": function(event) { $.each(MODULE.cache, function(i, STACK) { if (STACK.nodes.element.hasClass("in-viewport")) { STACK.timer.stopInterval() } }) }, "focus": function(event) { $.each(MODULE.cache, function(i, STACK) { if (STACK.nodes.element.hasClass("in-viewport")) { STACK.timer.startInterval() } }) }, "resize": function() { var $elements = $(".card-stack", APP.pjax.container);
            $elements.each(function() { var $element = $(this);
                $element.removeAttr("style"); if ($(".card-left", $element).length > 0 && APP.isMobile()) { var $li = $("li", $element),
                        tallest = 0;
                    $li.each(function() { var h = 0;
                        h += $(".card-left", this).outerHeight();
                        h += $(".card-right", this).outerHeight(); if (h > tallest) { tallest = h } });
                    $element.height(tallest) } }) }, "mobile_toggle": function() { if (APP.currentlyMobile) { $.each(MODULE.cache, function(i, STACK) { STACK.timer.destroy() }) } else { $.each(MODULE.cache, function(i, STACK) { STACK.timer.init() }) } }, "pjax": { "beforeReplace": function() { $.each(MODULE.cache, function(i, STACK) { STACK.timer.destroy() });
                MODULE.cache = {} } } };
    MODULE.instance = function($element) {
        var STACK = this;
        var $block = $element.closest('[data-block]'),
            block_id = $block.data("block");
        STACK.nodes = { "element": $element, "block": $block };
        STACK.instance = null;
        STACK.template = null;
        STACK.number_of_cards = 0;
        STACK.current = 0;
        STACK.timer = {
            "initialized": !1,
            "disabled": !1,
            "interval": null,
            "delay": 10000,
            "setCurrent": function() { $('.timer [data-node]', $block).removeClass("current counting-down");
                $('.timer [data-node="' + STACK.current + '"]', $block).addClass("current"); if (!STACK.timer.disabled) { setTimeout(function() { $('.timer [data-node="' + STACK.current + '"]', $block).addClass("counting-down") }, 10) } },
            "startInterval": function() {
                if (STACK.timer.disabled) { return }
                if (APP.nodes.html.hasClass("lets-talk-open")) { return }
                clearInterval(STACK.timer.interval);
                log("startInterval");
                STACK.timer.setCurrent();
                STACK.timer.interval = setInterval(function() { STACK.select() }, STACK.timer.delay)
            },
            "stopInterval": function() { log("stopInterval");
                clearInterval(STACK.timer.interval);
                $('.timer [data-node]', $block).removeClass("counting-down") },
            "disableTimer": function() { STACK.timer.disabled = !0 },
            "generateHTML": function(callback) {
                if (STACK.number_of_cards > 1) {
                    var $timer = $('<div />');
                    $timer.addClass("timer");
                    for (var i = 0; i < STACK.number_of_cards; i++) { var $node = $('<div />');
                        $node.attr("data-node", i);
                        $node.append('<div class="node-inner"></div>');
                        $node.append('<svg class="progress" width="22" height="22"><circle class="progress-circle" stroke="transparent" stroke-width="1" fill="transparent" r="9" cx="11" cy="11"/></svg>');
                        $timer.append($node) }
                    $element.before($timer)
                }
                callback()
            },
            "init": function() {
                if (!STACK.timer.initialized) {
                    if (APP.isMobile()) {
                        var $card_swipe = $element.find(".card-swipe");
                        APP.helpers.observer.create($card_swipe, "card-stack-handle-" + block_id, function() { $card_swipe.addClass("animate-wave") }, function() { $card_swipe.removeClass("animate-wave") }, { threshold: 0.2 });
                        APP.helpers.observer.create($element, "card-stack-" + block_id, function() {
                            var $first = $element.find('.card[data-index="0"] .card-wrapper');
                            var $second = $element.find('.card[data-index="1"] .card-wrapper');
                            if (!$first.hasClass("lazy-loaded")) { $first.addClass("lazy-loaded") }
                            if (!$second.hasClass("lazy-loaded")) { $second.addClass("lazy-loaded") }
                        }, function() {}, { rootMargin: "100% 20px", threshold: 0, onlyOnce: !0, debounce: 0 })
                    } else {
                        if (typeof($element.attr("data-automatic-advance-milliseconds")) != "undefined") { STACK.timer.delay = parseInt($element.attr("data-automatic-advance-milliseconds")) }
                        if (STACK.timer.delay === 0 || STACK.number_of_cards < 1) { STACK.timer.disableTimer() }
                        STACK.timer.generateHTML(function() {
                            STACK.timer.initialized = !0;
                            STACK.timer.setCurrent();
                            if (STACK.number_of_cards > 1) {
                                APP.helpers.observer.create($element, "card-stack-" + block_id, function() { STACK.timer.startInterval() }, function() { STACK.timer.stopInterval() }, { threshold: 0.5 });
                                APP.helpers.observer.create($element, "card-stack-" + block_id, function() {
                                    var $first = $element.find('.card[data-index="0"] .card-wrapper');
                                    var $second = $element.find('.card[data-index="1"] .card-wrapper');
                                    if (!$first.hasClass("lazy-loaded")) { $first.addClass("lazy-loaded") }
                                    if (!$second.hasClass("lazy-loaded")) { $second.addClass("lazy-loaded") }
                                }, function() {}, { rootMargin: "100% 20px", threshold: 0, onlyOnce: !0, debounce: 0 })
                            } else { var $first = $element.find('.card[data-index="0"] .card-wrapper'); if (!$first.hasClass("lazy-loaded")) { $first.addClass("lazy-loaded") } }
                        })
                    }
                }
            },
            "destroy": function() { $(".timer", $block).remove();
                clearInterval(STACK.timer.interval);
                STACK.timer.initialized = !1 }
        };
        STACK.select = function(index, callback) {
            if (typeof(callback) == "undefined") { callback = function() {} }
            if (typeof(index) != "undefined" && index) { $('.current', $element).removeClass("current");
                STACK.instance.stack.advance(index, callback) } else { STACK.instance.stack.advance(!1, callback) }
        };
        STACK.init = function() { STACK.template = $element.closest('[data-table]').data("table").replace("card_stack_", "");
            STACK.number_of_cards = $("li", $element).length;
            STACK.instance = new MODULE.card_stack($element, { onDragStart: function(current) { $block.addClass("is-dragging") }, onDragEnd: function(current) { $block.removeClass("is-dragging");
                    STACK.timer.stopInterval();
                    STACK.timer.disableTimer() }, onDragMove: function(current) {}, onUpdateStack: function(current) { STACK.current = current;
                    $('.card', $element).removeClass("current");
                    $('.card[data-index="' + current + '"]', $element).addClass("current");
                    STACK.timer.setCurrent();
                    STACK.instance.stack.lazy_load() }, onInit: function() { setTimeout(function() { MODULE.events.resize() }, 500);
                    STACK.timer.init() }, handle: '.card-swipe', distDragBack: 30, offset: { tx: (STACK.template == "half_image" ? "" : "-") + "2.5%", ty: "0px", tz: "-30px" } }); return STACK.instance }
        STACK.init();
        return STACK
    };
    MODULE.card_stack = function($element, options) {
        var self = this;
        var is3d = !!getStyleProperty('perspective'),
            supportTransitions = Modernizr.csstransitions,
            transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
            transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

        function extend(a, b) {
            for (var key in b) { if (b.hasOwnProperty(key)) { a[key] = b[key] } }
            return a
        }
        self.element = $element[0];
        self.options = extend({ distDragBack: 200, distDragMax: 450, offset: { tx: "-2.5%", ty: "0px", tz: "-30px" }, handle: !1, onDragStart: function(current) { return !1 }, onDragEnd: function(current) { return !1 }, onDragMove: function(current) { return !1 }, onUpdateStack: function(current) { return !1 }, onInit: function() { return !1 } }, options);
        self.stack = {
            "lazy_load": function() {
                var this_index = self.current + 1,
                    next_index = self.current + 2,
                    prev_index = self.current - 1;
                if (next_index > (self.itemsCount - 1)) { next_index = 0 }
                if (prev_index < 0) { prev_index = (self.itemsCount - 1) }
                $card_wrapper = $element.find('.card[data-index="' + (this_index) + '"] .card-wrapper').first();
                if (!$card_wrapper.hasClass("lazy-loaded")) { $card_wrapper.addClass("lazy-loaded") }
                $card_wrapper = $element.find('.card[data-index="' + (next_index) + '"] .card-wrapper').first();
                if (!$card_wrapper.hasClass("lazy-loaded")) { $card_wrapper.addClass("lazy-loaded") }
                $card_wrapper = $element.find('.card[data-index="' + (prev_index) + '"] .card-wrapper').first();
                if (!$card_wrapper.hasClass("lazy-loaded")) { $card_wrapper.addClass("lazy-loaded") }
            },
            "advance": function(advance_to, callback) {
                if (typeof(callback) == "undefined") { callback = function() {} }
                if (typeof(advance_to) != "undefined" && advance_to !== !1) {
                    var prev = self.current - 1;
                    if (prev < 0) { prev = self.itemsCount - 1 }
                    if (prev > (self.itemsCount - 1)) { prev = 0 }
                    advance_to = advance_to - 1;
                    if (advance_to < 0) { advance_to = self.itemsCount - 1 }
                    if (advance_to > (self.itemsCount - 1)) { advance_to = 0 }
                    if (advance_to == prev) { return !1 }
                    self.current = advance_to;
                    self.stack.reset()
                }
                self.stack.lazy_load();
                var element = self.items[self.current];
                self.stack.move.away({ element: element, position: { x: -155, y: -85 }, manual: !0 }, callback)
            },
            "get": {
                "first": function() { return self.items[self.current] },
                "last": function() { var all = self.stack.get.all(); return all[self.itemsCount - 1] },
                "all": function() {
                    var all = [];
                    for (var i = 0; i < self.itemsCount; i++) { all.push(self.stack.get.single(i)) }
                    return all
                },
                "single": function(index) { return self.current + index < self.itemsCount ? self.items[self.current + index] : self.items[Math.abs(self.itemsCount - (self.current + index))] }
            },
            "set": {
                "style": {
                    "transform": function(el, index) {
                        if ($(el).hasClass("is-dragging")) { return !1 }
                        values = $.extend({}, self.options.offset);
                        if (is3d) { $.each(values, function(key, value) { if (value.indexOf("%") !== -1) { var num = parseFloat(value.replace("%", ""));
                                    values[key] = (num * index) + "%" } else if (value.indexOf("px") !== -1) { var num = parseFloat(value.replace("px", ""));
                                    values[key] = (num * index) + "px" } else { values[key] = parseFloat(value) } });
                            value = 'translate3d(' + values.tx + ',' + values.ty + ',' + values.tz + ')' } else { value = 'translate(0,0);' }
                        el.style.WebkitTransform = value;
                        el.style.msTransform = value;
                        el.style.transform = value;
                        $(el).removeAttr("data-current-position");
                        $(el).attr("data-current-position", index)
                    }
                }
            },
            "drag": {
                "direction": { "start": !1, "end": !1, "last": !1 },
                "events": {
                    "dragStart": function(instance, event, pointer) { self.stack.drag.direction.start = pointer;
                        self.options.onDragStart(self.current); var all = self.stack.get.all();
                        $.each(all, function(index, item) { $(item).removeClass("move-back animate") }) },
                    "dragMove": function(instance, event, pointer) {
                        self.options.onDragMove(self.current);
                        if (self.stack.drag.checks.outOfBounds(instance)) { self.stack.move.away(instance) } else {
                            var all = self.stack.get.all();
                            $.each(all, function(index, item) {
                                if (index == self.current) { return }
                                self.stack.set.style.transform(item, index)
                            })
                        }
                    },
                    "dragEnd": function(instance, event, pointer) { self.stack.drag.direction.end = pointer;
                        self.options.onDragEnd(self.current); if (self.stack.drag.checks.outOfBounds(instance)) return; if (self.stack.drag.checks.outOfSight(instance)) { self.stack.move.away(instance) } else { self.stack.move.back(instance) } }
                },
                "checks": { "outOfBounds": function(el) { return Math.abs(el.position.x) > self.options.distDragMax || Math.abs(el.position.y) > self.options.distDragMax }, "outOfSight": function(el) { return Math.abs(el.position.x) > self.options.distDragBack || Math.abs(el.position.y) > self.options.distDragBack }, "translateVal": function(el) { var h = Math.sqrt(Math.pow(el.position.x, 2) + Math.pow(el.position.y, 2)),
                            a = Math.asin(Math.abs(el.position.y) / h) / (Math.PI / 180),
                            hL = h + self.options.distDragBack,
                            dx = Math.cos(a * (Math.PI / 180)) * hL,
                            dy = Math.sin(a * (Math.PI / 180)) * hL,
                            tx = dx - Math.abs(el.position.x),
                            ty = dy - Math.abs(el.position.y); return { x: el.position.x > 0 ? tx : tx * -1, y: el.position.y > 0 ? ty : ty * -1 } } },
                "init": function() { if (self.items.length > 1) { self.draggie = new Draggabilly(self.items[self.current], { handle: self.options.handle });
                        self.draggie.on('dragStart', function(i, e, p) { self.stack.drag.events.dragStart(i, e, p) });                   self.draggie.on('dragMove', function(i, e, p) { self.stack.drag.events.dragMove(i, e, p) });
                        self.draggie.on('dragEnd', function(i, e, p) { self.stack.drag.events.dragEnd(i, e, p) }) } },
                "disable": function() { self.draggie.disable() }
            },
            "move": {
                "away": function(instance, callback) {
                    if (typeof(instance.manual) == "undefined") { instance.manual = !1 }
                    if (typeof(callback) == "undefined") { callback = function() {} }
                    var direction = { x: "left", y: "top" };
                    if (self.stack.drag.direction.start && self.stack.drag.direction.end) {
                        if (self.stack.drag.direction.start.screenX >= self.stack.drag.direction.end.screenX) { direction.x = "left" } else { direction.x = "right" }
                        if (self.stack.drag.direction.start.screenY >= self.stack.drag.direction.end.screenY) { direction.y = "top" } else { direction.y = "bottom" }
                        self.stack.drag.direction.last = direction
                    }
                    self.stack.drag.disable();
                    $(instance.element).addClass("animate");
                    if (typeof(instance.position) != "undefined" && !instance.manual) { var tVal = self.stack.drag.checks.translateVal(instance);
                        value = is3d ? 'translate3d(' + tVal.x + 'px,' + tVal.y + 'px,0px)' : 'translate(0,0)';
                        instance.element.style.WebkitTransform = value;
                        instance.element.style.msTransform = value;
                        instance.element.style.transform = value }
                    var fling_distance = $(window).width() * .1;
                    if (fling_distance > 300) { fling_distance = 300 }
                    var l = parseInt(instance.element.style.left.replace("px", "")),
                        t = parseInt(instance.element.style.top.replace("px", ""));
                    var l_offset = fling_distance;
                    if (direction.x == "left") { l_offset = -Math.abs(l_offset) }
                    var t_offset = fling_distance;
                    if (direction.y == "top") { t_offset = -Math.abs(t_offset) }
                    instance.element.style.left = parseInt(l + l_offset) + "px";
                    instance.element.style.top = parseInt(t + t_offset) + "px";
                    instance.element.style.opacity = 0;
                    var all = self.stack.get.all();
                    $.each(all, function(index, item) {
                        $(item).addClass("animate");
                        if (index > 0) { $(item).addClass("move-back") }
                        self.stack.set.style.transform(item, index)
                    });
                    var onEndTransFn = function() { instance.element.removeEventListener(transEndEventName, onEndTransFn);
                        instance.element.style.left = instance.element.style.top = '0px';
                        instance.element.style.zIndex = -1;
                        $(instance.element).removeClass("animate");
                        self.current = self.current < self.itemsCount - 1 ? self.current + 1 : 0; var all = self.stack.get.all();
                        $.each(all, function(index, item) { $(item).removeClass("move-back") });
                        setTimeout(function() { var last = self.stack.get.last();
                            $(last).addClass("animate");
                            self.stack.reset() }, 25);
                        self.stack.drag.init();
                        self.options.onUpdateStack(self.current);
                        self.stack.drag.direction.start = !1;
                        self.stack.drag.direction.end = !1;
                        callback() };
                    if (supportTransitions) { instance.element.addEventListener(transEndEventName, onEndTransFn) } else { onEndTransFn.call() }
                },
                "back": function(instance) {
                    var all = self.stack.get.all();
                    $.each(all, function(index, item) {
                        $(item).addClass("move-back animate");
                        if (index === 0) { item.style.left = '0px';
                            item.style.top = '0px' }
                        self.stack.set.style.transform(item, index)
                    })
                }
            },
            "reset": function() { var all = self.stack.get.all();
                $.each(all, function(index, item) { item.style.opacity = 1;
                    item.style.zIndex = (self.itemsCount + 1) - index;
                    self.stack.set.style.transform(item, index) }) }
        };
        self.init = function() { self.items = [].slice.call(self.element.children);
            self.itemsCount = self.items.length;
            self.current = 0;
            self.stack.reset();
            self.stack.drag.init();
            self.options.onInit(self) };
        self.init();
        return self
    };
    MODULE.init = function() {
        var $elements = $(".card-stack", APP.pjax.container);
        if ($elements.length > 0) { $elements.each(function(index, element) { var $element = $(element),
                    $block = $element.closest('[data-block]'),
                    block_id = $block.data("block");
                MODULE.cache[block_id] = new MODULE.instance($element) }) }
        if (!MODULE.initialized) { APP.nodes.body.on('click', '.timer [data-node]', function(e) { var $node = $(this),
                    index = $node.data("node"),
                    $block = $node.closest('[data-block]'),
                    block_id = $block.data("block"); if (typeof(MODULE.cache[block_id]) != "undefined") { MODULE.cache[block_id].instance.stack.advance(index, function() { MODULE.cache[block_id].timer.stopInterval();
                        MODULE.cache[block_id].timer.disableTimer() }) } }) }
        MODULE.initialized = !0
    }
    return MODULE
};
MODULES["client-locations"] = function(APP) {
    var MODULE = { initialized: !1, dropped: !1 };
    MODULE.events = {
        "scroll": function() {
            if (MODULE.dropped) { return }
            MODULE.getWrapper(function($wrapper) { var threshold = $wrapper.offset().top - APP.viewport.height + ($wrapper.outerHeight() / 1.5); if (APP.viewport.scrollTop > threshold) { MODULE.dropPins() } })
        },
        "pjax": { "beforeReplace": function() { MODULE.dropped = !1 } }
    };
    MODULE.getWrapper = function(callback) {
        var $wrapper = $('[data-module="client-locations"]');
        if ($wrapper.length > 0) { callback($wrapper) }
        return !1
    };
    MODULE.getPins = function() { var $pins = !1;
        MODULE.getWrapper(function($wrapper) { $pins = $('[data-pin]', $wrapper); return $pins }); return $pins };
    MODULE.dropPins = function() {
        var $pins = MODULE.getPins();
        if ($pins) { $pins.each(function() { var $pin = $(this),
                    rand = Math.floor(Math.random() * 6) + 3,
                    speed = rand * 100;
                $pin.animate({ top: $pin.data("top") }, speed) }) }
        MODULE.dropped = !0
    };
    MODULE.init = function() { MODULE.initialized = !0 };
    return MODULE
};
MODULES["contact-forms"] = function(APP) {
    var MODULE = { "initialized": !1 };
    MODULE.cache = {};
    MODULE.events = { "pjax": { "beforeReplace": function() { $.each(MODULE.cache, function(id, instance) { if (typeof(instance.events) != "undefined" && typeof(instance.events.pjax) != "undefined" && typeof(instance.events.pjax.beforeReplace) == "function") { instance.events.pjax.beforeReplace() } }) } }, };
    MODULE.leads_form = function($FORM, options) {
        var config = $.extend(!0, { capture: { required_fields: ["first_name"] }, callbacks: { onInit: function() {}, beforeSubmit: function() {}, afterSubmit: function() {}, onSubmitSuccess: function() {}, onSubmitError: function() {} }, events: { pjax: { beforeReplace: function() {} } } }, options);
        var FORM = {
            "ready": !1,
            "wrapper": !1,
            "validator": null,
            "timeouts": { "close_on_complete": null, "capture_debounce": null },
            "cache": {},
            "restore_data": {},
            "recaptcha_id": null,
            "recaptcha": null,
            "form_config_for_submit": null,
            "events": { "pjax": { "beforeReplace": function() { log("beforeReplace");
                        config.events.pjax.beforeReplace(); if ($FORM.parents(APP.pjax.container).length > 0) { log($FORM.data("form-template") + " is child of PJAX container.  Un-initializing...");
                            FORM.deleteFromCache() } } } },
            "event_listeners": {
                "focus": function($element, event) { $element.removeAttr("readonly"); if (APP.isTouch) { APP.nodes.html.addClass(APP.config.popup_form_template_name + "-input-focused"); var $scroll = $element.closest('.cms-contact-form'),
                            scrollTop = $element.offset().top - $scroll.offset().top + $scroll.scrollTop();
                        setTimeout(function() { $scroll.animate({ scrollTop: scrollTop - 50 }, 0) }, 200) } },
                "blur": function($element, event) { APP.nodes.html.removeClass(APP.config.popup_form_template_name + "-input-focused") },
                "keyup": function($element, event) {
                    try {
                        var key = event.keyCode || event.which,
                            char = String.fromCharCode(key),
                            is_alphanumeric = (/[a-zA-Z0-9-_ ]/.test(char));
                        if (key == 9) { return }
                        if (is_alphanumeric) { FORM.validator.config.nodes.submit.removeClass("disabled").prop("disabled", !1) }
                        if (FORM.time_spent_typing.timeout === null) { FORM.time_spent_typing.last_typing_started = new Date().getTime() / 1000;
                            log("typing started: " + FORM.time_spent_typing.last_typing_started) }
                        clearTimeout(FORM.time_spent_typing.timeout);
                        FORM.time_spent_typing.timeout = setTimeout(function() { var now = new Date().getTime() / 1000,
                                difference = now - FORM.time_spent_typing.last_typing_started;
                            FORM.time_spent_typing.value += difference;
                            log("Seconds spent typing: " + FORM.time_spent_typing.value);
                            clearTimeout(FORM.time_spent_typing.timeout);
                            FORM.time_spent_typing.timeout = null }, 250);
                        if ($element.is("textarea")) { return }
                        clearTimeout(FORM.timeouts.capture_debounce);
                        $('[name="' + $element.attr("name") + '"]').each(function() { if ($(this).not($element)) { $(this).val($element.val()) } });
                        FORM.timeouts.capture_debounce = setTimeout(function() { FORM.capture($element) }, 2500)
                    } catch (e) { APP.errors.report(e) }
                },
                "change": function($element, event) {
                    try {
                        clearTimeout(FORM.timeouts.capture_debounce);
                        if ($element.is('[type="radio"]')) { $element = $('[name="' + $element.attr("name") + '"]:checked', $FORM) }
                        $('[name="' + $element.attr("name") + '"]').each(function() { if ($(this).is('[type="radio"]') || $(this).is('[type="checkbox"]')) {} else { if ($(this).not($element)) { $(this).val($element.val()) } } });
                        var name = $element.attr("name"),
                            value = $.trim($element.val());
                        $('[data-display-if]', $FORM).each(function() { var config = $(this).data("display-if").split("|"),
                                if_name = config[0],
                                if_value = config[1]; if (name == if_name) { if (value == if_value) { $(this).slideDown(100) } else { $(this).slideUp(100) } } });
                        FORM.timeouts.capture_debounce = setTimeout(function() { FORM.capture($element) }, 500)
                    } catch (e) { APP.errors.report(e) }
                }
            },
            "setReady": function(status) { FORM.ready = status },
            "deleteFromCache": function() { var id = $FORM.data("form-template"); if (typeof(MODULE.cache[id]) != "undefined") { delete MODULE.cache[id] } },
            "reset": function(isBeforeReplace) {
                if (typeof(isBeforeReplace) == "undefined") { var isBeforeReplace = !1 }
                if (isBeforeReplace) { return }
                FORM.wrapper.removeClass("completed");
                $('.contact-form-success-message', FORM.wrapper).remove();
                $FORM.show();
                $FORM[0].reset();
                FORM.validator.message("");
                $(".form-invalid", $FORM).removeClass("form-invalid");
                $FORM.removeClass("loading success error form-initialized");
                FORM.reset_recaptcha()
            },
            "reset_recaptcha": function() { FORM.recaptcha = null;
                FORM.recaptcha_id = null;
                $('.recaptcha-challenge-wrapper', $FORM).remove(); try { if (window.grecaptcha) { grecaptcha.reset() } } catch (e) {} },
            "mark_required_fields": function() { if (!$FORM.hasClass("form-required-set")) { $("[data-required]", $FORM).each(function() { var $label = $(this).closest(".form-item").find("label").first();
                        $label.html($label.html() + " *");
                        $(this).attr("title", "This field is required.") });
                    $FORM.addClass("form-required-set") } },
            "restore": function(callback) {
                if (typeof(callback) == "undefined") { var callback = function() {} }
                var fingerprint = APP.fingerprint.get.hash();
                if (!fingerprint) { setTimeout(function() { FORM.restore(callback) }, 500) } else {
                    try {
                        $.post("/modules/extended/restore_lets_talk_form", { block_id: $FORM.data("block"), fingerprint: fingerprint }, function(response) {
                            if (response.status == "success" && typeof(response.data) != "undefined") {
                                FORM.restore_data = response.data;
                                $.each(response.data, function(name, value) {
                                    var $field = $('[name="' + name + '"],[data-update-field-on-change="' + name + '"]', $FORM);
                                    if (name == "time_spent_typing") { if (value && parseInt(value) > 0) { FORM.time_spent_typing.value = parseInt(value);
                                            log("Time spent typing restored: " + FORM.time_spent_typing.value) } }
                                    if ($field.length > 0) { if ($field.is('[type="hidden"]')) {} else if ($field.is('[type="radio"]')) { $('[name="' + name + '"]', $FORM).prop("checked", !1);
                                            $('[name="' + name + '"][value="' + value + '"]', $FORM).prop("checked", !0); var $elements = $('[data-custom-radio-button="' + name + '"]');
                                            $elements.attr("data-custom-radio-button-checked", "false");
                                            $elements.filter('[data-custom-radio-button-value="' + value + '"]').attr("data-custom-radio-button-checked", "true");
                                            $('[data-display-if]', $FORM).each(function() { var config = $(this).data("display-if").split("|"),
                                                    if_name = config[0],
                                                    if_value = config[1]; if (name == if_name && value == if_value) { $(this).show() } else { $(this).hide() } }) } else if ($field.is('[type="checkbox"]')) { $('[name="' + name + '"]', $FORM).prop("checked", !1); var $elements = $('[data-custom-check-box="' + name + '"]');
                                            $elements.attr("data-custom-check-box-checked", "false"); if (value) { var values = value.split(",");
                                                $.each(values, function(index, value) { value = $.trim(value);
                                                    $('[name="' + name + '"][value="' + value + '"]', $FORM).prop("checked", !0);
                                                    $elements.filter('[data-custom-check-box-value="' + value + '"]').attr("data-custom-check-box-checked", "true") }) } } else { $field.val(value) } }
                                })
                            }
                            callback()
                        }, 'json')
                    } catch (e) { APP.errors.report(e);
                        callback() }
                }
            },
            "time_spent_typing": { "value": 0, "timeout": null, "last_typing_started": 0 },
            "capture": function($element, callback) {
                if (!FORM.ready) { return !1 }
                if (typeof($element) == "undefined") { var $element = !1 }
                if (typeof(callback) == "undefined") { callback = function() {} }
                try {
                    var name = !1,
                        value = !1;
                    if ($element) {
                        name = $element.attr("name");
                        if ($element.is('[type="radio"]')) { $element = $('[name="' + name + '"]:checked', $FORM) }
                        value = $.trim($element.val())
                    }
                    var should_capture = !$element;
                    if ($element) { if (value && value != "") { if (typeof(FORM.cache[name]) == "undefined") { should_capture = !0 } else { if (FORM.cache[name] == value) { should_capture = !1 } else { should_capture = !0 } } } else { should_capture = !1 } }
                    var serialized = $FORM.serializeArray(),
                        serialized_fixed = [],
                        has_required_to_capture = [];
                    $.each(serialized, function(i, row) {
                        if ($.inArray(row.name, config.capture.required_fields) !== -1) { if ($.trim(row.value) != "") { has_required_to_capture.push(row.name) } }
                        var $field_element = $('[name="' + row.name + '"]', $FORM);
                        if ($field_element.length > 0) {
                            if ($field_element.is("select")) { row.value = $.trim($("option:selected", $field_element).val()) }
                            serialized_fixed.push(row)
                        }
                    });
                    serialized = serialized_fixed;
                    if (config.capture.required_fields.length != has_required_to_capture.length) { should_capture = !1 }
                    if (should_capture) {
                        if (name && value) { FORM.cache[name] = value }
                        serialized.push({ name: "time_spent_typing", value: parseFloat(FORM.time_spent_typing.value).toFixed(0) });
                        $.ajaxq.abort('process_lets_talk_form');
                        clearTimeout(FORM.timeouts.capture_debounce);
                        $.postq("process_lets_talk_form", "/modules/extended/process_lets_talk_form", { "block_id": $FORM.data("block"), "serialized": serialized, "fingerprint": APP.fingerprint.get.hash(), "history": APP.fingerprint.get.history(!0) }, function(R) { log(R);
                            callback(R) }, 'json')
                    } else { callback(!1) }
                } catch (e) { APP.errors.report(e) }
            },
            "process": function(FORM_CONFIG) {
                try {
                    config.callbacks.beforeSubmit(FORM);
                    FORM_CONFIG.complete = !0;
                    FORM_CONFIG.fingerprint = APP.fingerprint.get.hash();
                    FORM_CONFIG.history = APP.fingerprint.get.history(!0);
                    var SERIALIZED_FIXED = [];
                    $.each(FORM_CONFIG.serialized, function(i, row) { if (row.name != "time_spent_typing") { SERIALIZED_FIXED.push(row) } });
                    SERIALIZED_FIXED.push({ name: "time_spent_typing", value: parseFloat(FORM.time_spent_typing.value).toFixed(0) });
                    FORM_CONFIG.serialized = SERIALIZED_FIXED;
                    var FORM_DATA = new FormData();
                    $.each(FORM_CONFIG, function(k, v) {
                        if (typeof(v) !== "string") { v = JSON.stringify(v) }
                        FORM_DATA.append(k, v)
                    });
                    FORM.validator.message(FORM.validator.config.messages.validating);
                    var original_submit_button_text = FORM.validator.config.nodes.submit.text();
                    FORM.validator.config.nodes.submit.show().addClass("disabled").prop("disabled", !0).width(FORM.validator.config.nodes.submit.actual('width')).html('<i class="fas fa-spinner fa-spin"></i>');
                    $.ajaxq.abort('process_lets_talk_form');
                    clearTimeout(FORM.timeouts.capture_debounce);
                    setTimeout(function() {
                        $.ajaxq("process_lets_talk_form", {
                            type: 'POST',
                            url: '/modules/extended/process_lets_talk_form',
                            data: FORM_DATA,
                            success: function(response) {
                                response = $.parseJSON(response);
                                if (typeof(response.status) == "undefined") { response.status = "error" }
                                if (typeof(response.message) == "undefined") { response.message = "Unknown error." }
                                if (typeof(response.data) == "undefined") { response.data = !1 }
                                config.callbacks.afterSubmit(FORM, response);
                                if (response.status == "captcha") { FORM.reset_recaptcha();
                                    FORM.recaptcha_id = "recaptcha-form-id-" + $FORM.data("block") + "-" + (new Date().getTime()); var html = '<div class="flexbox-row recaptcha-challenge-wrapper"><div class="flexbox-col"><div class="recaptcha-challenge" id="' + FORM.recaptcha_id + '"></div></div></div>';
                                    $('.contact-form-submit', $FORM).closest('.flexbox-row').before(html);
                                    FORM.recaptcha = grecaptcha.render(FORM.recaptcha_id, { 'sitekey': APP.config.recaptcha_site_key, 'theme': 'light', 'callback': function(recaptcha_response) { FORM.validator.config.nodes.submit.removeClass("disabled").removeAttr("disabled").html(original_submit_button_text).removeAttr("style");
                                            FORM.form_config_for_submit.recaptcha = recaptcha_response;
                                            FORM.process(FORM.form_config_for_submit);
                                            log("reCAPTCHA solved") } });
                                    FORM.validator.message(response.message, response.status, !1);
                                    FORM.validator.config.nodes.submit.hide() } else {
                                    if (response.status == "success") {
                                        APP.fingerprint.reset();
                                        FORM.time_spent_typing.value = 0;
                                        FORM.time_spent_typing.last_typing_started = 0;
                                        FORM.wrapper.addClass("completed");
                                        $.post("/modules/extended/lets_talk_success_message", { "block_id": $FORM.data("original-block") ? $FORM.data("original-block") : $FORM.data("block") }, function(response) { try { if (response.status == "success") { var $TARGET = $FORM; var $SUCCESS = $("<div />");
                                                    $SUCCESS.hide().addClass("contact-form-success-message");
                                                    $SUCCESS.html(response.data.html);
                                                    $("html,body").animate({ scrollTop: $TARGET.offset().top - APP.helpers.fixed_elements_offset() - 150 }, 200, function() { $TARGET.before($SUCCESS);
                                                        $TARGET.hide();
                                                        $SUCCESS.show() }) } else { FORM.validator.customSuccessMessage() } } catch (e) { FORM.validator.customSuccessMessage() } }, 'json');
                                        if (typeof(report_form_block_conversion) == "function") { report_form_block_conversion($FORM.data("block")) }
                                        config.callbacks.onSubmitSuccess(FORM, response)
                                    } else { FORM.validator.message(response.message, response.status, 5000);
                                        config.callbacks.onSubmitError(FORM, response) }
                                    FORM.validator.config.nodes.submit.show().removeClass("disabled").removeAttr("disabled").html(original_submit_button_text).removeAttr("style")
                                }
                            },
                            error: function(response) { response = $.parseJSON(response);
                                config.callbacks.afterSubmit(FORM, response);
                                config.callbacks.onSubmitError(FORM, response);
                                FORM.validator.config.nodes.submit.show().removeClass("disabled").removeAttr("disabled").html(original_submit_button_text).removeAttr("style");
                                FORM.validator.message(response.message, response.status, 5000) },
                            processData: !1,
                            contentType: !1
                        })
                    }, 2000)
                } catch (e) { APP.errors.report(e) }
            },
            "init": function() { FORM.wrapper = $FORM.closest('section[data-template]');
                FORM.mark_required_fields();
                FORM.restore(function() { $.each($FORM.serializeArray(), function(i, row) { FORM.cache[row.name] = row.value });
                    FORM.validator = new FORM_VALIDATOR($FORM, { "fill": !1, "nodes": { "submit": $(".contact-form-submit", $FORM), "loading": $(".contact-form-loading-icon", $FORM), "message": $(".contact-form-message", $FORM), }, "onValid": function(CONFIG) { FORM.form_config_for_submit = CONFIG;
                            FORM.process(CONFIG) }, "onInvalid": function(INVALID_ELEMENTS, MESSAGE) { log(INVALID_ELEMENTS, MESSAGE) }, "messages": { "validating": "Validating...", "required_fields": "Please fill in all required fields.", "invalid_email": "E-mail address is invalid.", "success": "Your message has been sent!", "unknown_error": "Unknown error." } });
                    setTimeout(function() { FORM.validator.config.nodes.submit.removeClass("disabled").prop("disabled", !1) }, 5000);
                    config.callbacks.onInit(FORM) }) }
        };
        FORM.init();
        return FORM
    };
    MODULE.forms = {
        "more-information": function($FORM) {
            if ($('[data-form-template="more-information"]').length === 0) { return {} }
            return new MODULE.leads_form($FORM, { callbacks: { onInit: function(FORM) { FORM.setReady(!0) }, onSubmitSuccess: function(FORM) { FORM.close_on_complete_timeout = setTimeout(function() { APP.modules["lets-talk-popup"].close();
                            FORM.close_on_complete_timeout = setTimeout(function() { FORM.reset() }, 2000) }, 20000) } }, events: { pjax: { beforeReplace: function(FORM) {} } } })
        },
        "quick-lead-capture": function($FORM) {
            if ($('[data-form-template="quick-lead-capture"]').length === 0) { return {} }
            return new MODULE.leads_form($FORM, { callbacks: { onInit: function(FORM) { FORM.setReady(!0) } } })
        }
    };
    MODULE.event_listeners = function() { var events = ["focus", "blur", "keyup", "change"];
        $.each(events, function(index, event_name) { APP.nodes.body.on(event_name, '[data-form-template] [name]', function(event) { var $element = $(this),
                    form_template = $element.closest('[data-form-template]').data("form-template"); if (typeof(MODULE.cache[form_template]) != "undefined") { if (typeof(MODULE.cache[form_template].event_listeners) != "undefined") { if (typeof(MODULE.cache[form_template].event_listeners[event_name]) != "undefined") { MODULE.cache[form_template].event_listeners[event_name]($element, event) } else { log("No " + event_name + " event: " + form_template) } } else { log("No `event_listeners`: " + form_template) } } else { log("No cached form: " + form_template) } }) }) }, MODULE.init = function($scope) {
        if (typeof($scope) == "undefined") { $scope = APP.nodes.body }
        if (!MODULE.initialized) { MODULE.event_listeners() }
        var $FORMS = $("form[data-form-template]");
        $FORMS.each(function() { var $FORM = $(this),
                id = $FORM.data("form-template"); if (typeof(MODULE.forms[id]) != "undefined" && typeof(MODULE.cache[id]) == "undefined") { MODULE.cache[id] = new MODULE.forms[id]($FORM) } });
        MODULE.initialized = !0
    }
    return MODULE
};
MODULES["custom-check-boxes"] = function(APP) {
    var MODULE = { "cache": [], "initialized": !1 };
    MODULE.instance = function($input) {
        var CHECKBOX = {};
        CHECKBOX.init = function() {
            if ($input.hasClass("initialized")) { var $div = $input.closest('[data-custom-check-box]');
                $div.removeAttr("tabindex"); if (typeof($input.attr("tabindex") != "undefined")) { $div.attr("tabindex", $input.attr("tabindex")) } } else {
                var $div = $('<div />');
                $div.attr("data-custom-check-box", $input.attr("name"));
                $div.attr("data-custom-check-box-value", $input.attr("value"));
                $div.attr("data-custom-check-box-checked", $input.is(":checked") ? "true" : "false");
                if (typeof($input.attr("tabindex") != "undefined")) { $div.attr("tabindex", $input.attr("tabindex")) }
                $input.wrap($div).addClass("initialized")
            }
        }
        CHECKBOX.init();
        return CHECKBOX
    };
    MODULE.init = function() { var $ELEMENTS = $("form input[type='checkbox']");
        $ELEMENTS.each(function(i, v) { if (!$(this).hasClass("initialized") && $(this).closest('[data-form-repeater-template]').length === 0) { MODULE.cache.push(new MODULE.instance($(this))) } }); if (!MODULE.initialized) { MODULE.initialized = !0;
            APP.nodes.body.on('keydown', '[data-custom-check-box]', function(e) { if (e.keyCode == 32) { e.preventDefault();
                    $(this).find("input").prop("checked", !0).trigger('change'); return !1 } });
            APP.nodes.body.on('change', 'input[type="checkbox"]', function() { var $changed = $(this),
                    name = $changed.attr("name"),
                    value = $changed.attr("value"),
                    $elements = $('[data-custom-check-box="' + name + '"][data-custom-check-box-value="' + value + '"]');
                $elements.attr("data-custom-check-box-checked", "false");
                $elements.filter('[data-custom-check-box-value="' + value + '"]').attr("data-custom-check-box-checked", $changed.is(":checked") ? "true" : "false") }) } };
    return MODULE
};
MODULES["custom-radio-buttons"] = function(APP) {
    var MODULE = { "cache": [], "initialized": !1 };
    MODULE.instance = function($input) {
        var RADIO = {};
        RADIO.init = function() {
            if ($input.hasClass("initialized")) { var $div = $input.closest('[data-custom-radio-button]');
                $div.removeAttr("tabindex"); if (typeof($input.attr("tabindex") != "undefined")) { $div.attr("tabindex", $input.attr("tabindex")) } } else {
                var $div = $('<div />');
                $div.attr("data-custom-radio-button", $input.attr("name"));
                $div.attr("data-custom-radio-button-value", $input.attr("value"));
                $div.attr("data-custom-radio-button-checked", $input.is(":checked") ? "true" : "false");
                if (typeof($input.attr("tabindex") != "undefined")) { $div.attr("tabindex", $input.attr("tabindex")) }
                $input.wrap($div).addClass("initialized")
            }
        }
        RADIO.init();
        return RADIO
    };
    MODULE.init = function() { var $ELEMENTS = $("form input[type='radio']");
        $ELEMENTS.each(function(i, v) { MODULE.cache.push(new MODULE.instance($(this))) }); if (!MODULE.initialized) { MODULE.initialized = !0;
            APP.nodes.body.on('keydown', '[data-custom-radio-button]', function(e) { if (e.keyCode == 32) { e.preventDefault();
                    $(this).find("input").prop("checked", !0).trigger('change'); return !1 } });
            APP.nodes.body.on('change', 'input[type="radio"]', function() { var $changed = $(this),
                    name = $changed.attr("name"),
                    value = $changed.attr("value"),
                    $elements = $('[data-custom-radio-button="' + name + '"]');
                $elements.attr("data-custom-radio-button-checked", "false");
                $elements.filter('[data-custom-radio-button-value="' + value + '"]').attr("data-custom-radio-button-checked", $changed.is(":checked") ? "true" : "false") }) } };
    return MODULE
};
MODULES["elements-autoload"] = function(APP) {
    var MODULE = { initialized: !1 };
    MODULE.events = {
        "mobile_toggle": function() {
            if (APP.isMobile()) {
                $('.simply-scroll').each(function() {
                    var $element = $(this)
                    $ul = $element.find('ul'), simplyScroll = $ul.data('simplyScroll');
                    simplyScroll.destroy()
                })
            } else { MODULE.elements["simply-scroll"]() }
        },
        "resize": function() {
            var $element = $(".page-404[data-block]");
            if ($element.length > 0) {
                var $photo = $(".responsive-photo", $element),
                    $wrapper = $photo.closest('.flexbox-col'),
                    height = 0;
                if (!APP.isBreakpoint("md")) { height = ($photo.outerHeight() * 1.2) }
                $wrapper.css("min-height", height + "px")
            }
            var $element = $('[data-template="triple-screenshot-feature"]');
            $element.each(function() { var $feature = $(this),
                    $wrapper = $('.mobile-column-max-width', $feature);
                $wrapper.removeAttr('style');
                $feature.removeAttr('style'); if (!APP.isMobile()) { var center_height = $('[data-key="Center"] .screenshot, [data-key="Center"] .video', $feature).outerHeight(),
                        feature_height = $feature.outerHeight(); if (center_height > feature_height) { var ratio = (feature_height / center_height) * 100;
                        $wrapper.css('width', ratio + '%') } else { $feature.height(center_height) } } });
            var $elements = $('.ol-li-numbers,.ol-li-icon'),
                $numbers = $('li span.icon-width', $elements);
            $numbers.removeAttr("style");
            $elements.each(function() { var $element = $(this); if (APP.isMobile()) { var $numbers = $('li span.icon-width', $element); var widest = 0;
                    $numbers.each(function() { var w = $(this).width(); if (w > widest) { widest = w } });
                    $numbers.width(widest) } else { var $columns = $('.flexbox-col', $element);
                    $columns.each(function() { var $column = $(this); var $numbers = $('li span.icon-width', $column); var widest = 0;
                        $numbers.each(function() { var w = $(this).width(); if (w > widest) { widest = w } });
                        $numbers.width(widest) }) } });
            var $marquees = $('[data-type="marquee"]');
            $marquees.each(function() { var $marquee = $(this),
                    $heading = $marquee.find(".heading").first(),
                    $section = $marquee.closest('section[data-table="trusted_by"]'); if (APP.isBreakpoint("lg")) { var padding_top = $heading.outerHeight() / 2;
                    $section.css("padding-top", padding_top + "px") } else { $section.css("padding-top", "0") } })
        }
    }
    MODULE.elements = {
        "cybernautic-logo": function() { if (!MODULE.initialized) { var header_id = 'header-animated-logo',
                    $element = $('#' + header_id); if ($element.length > 0) { animation = bodymovin.loadAnimation({ container: document.getElementById(header_id), renderer: 'svg', loop: !0, autoplay: !0, path: "/logo-animation.json" }) } } },
        "select-redirect": function() { if (!MODULE.initialized) { APP.nodes.body.on('change', '[data-module="select-redirect"]', function() { var $CHANGED = $(this);
                    APP.pjax.manual($CHANGED.val()) }); var uri = window.location.pathname;
                $('[data-module="select-redirect"]').each(function() { var $select = $(this); if ($("option[value='" + uri + "']").length > 0) { $select.val(uri) } }) } },
        "anchors": function() { if (!MODULE.initialized) { APP.nodes.body.on('click', 'a[href^="#"]', function(e) { var $clicked = $(this),
                        anchor = $clicked.attr("href").replace("#", ""); if (anchor != "") { $anchor = $('a[name="' + anchor + '"],#' + anchor, APP.pjax.content); if ($anchor.length > 0) { e.preventDefault(); var scrollTop = $anchor.offset().top - (APP.helpers.fixed_elements_offset() * 2);
                            $anchor.focus();
                            $("html,body").animate({ scrollTop: scrollTop }, 200); return !1 } } }) } },
        "before-after": function() { $('.ba-slider').each(function() { $(this).beforeAfter() }) },
        "buttons": function() { $('.cms-btn-tertiary, .animated-button').each(function() { var $button = $(this),
                    $span = $button.find("span"); if ($span.length === 0) { $button.wrapInner('<span />') } }) },
        "empty-blocks": function() { $('section[data-block]').each(function() { var $section = $(this),
                    content = $section.html(),
                    trimmed = $.trim(content.replace(/<\/?[^>]+>/gi, '')); if (trimmed == "" && content.indexOf('data-bid') === -1 && content.indexOf('screenshot') === -1 && content.indexOf('<script') === -1) { $section.remove() } }) },
        "simply-scroll": function() { if (!APP.isMobile()) { $('[data-type="marquee"]').each(function() { if ($(this).find('.simply-scroll').length === 0) { var $element = $(this).find('ul');
                        $element.simplyScroll({ speed: 1, pauseOnHover: !1, pauseOnTouch: !1, frameRate: 60 }) } }) } },
        "triggers": function() { if (!MODULE.initialized) { APP.nodes.body.on('click', '[data-trigger]', function(e) { var $clicked = $(this),
                        trigger = $clicked.data("trigger"); if (trigger == "rest-of-the-team") { $('[data-is-leadership]').show();
                        $clicked.remove() } }) } },
        "update-field-on-change": function() { if (!MODULE.initialized) { APP.nodes.body.on('change', '[data-update-field-on-change]', function(e) { var $changed = $(this),
                        target = $changed.attr('data-update-field-on-change'); var $target = $('[name="' + target + '"]'); if ($target.length > 0) { $target.val($changed.val()).trigger("change") } }) } },
        "clocks": function() {
            if (!MODULE.initialized) {
                var time_loop = function() {
                    var today = new Date(),
                        h = today.getHours(),
                        m = today.getMinutes(),
                        ampm = "AM";
                    if (h > 12) { ampm = "PM";
                        h -= 12 }
                    if (m < 10) { m = "0" + m }
                    var weekday = new Array(7);
                    weekday[0] = "Sun";
                    weekday[1] = "Mon";
                    weekday[2] = "Tue";
                    weekday[3] = "Wed";
                    weekday[4] = "Thu";
                    weekday[5] = "Fri";
                    weekday[6] = "Sat";
                    var day = weekday[today.getDay()];
                    var desktop_string = day + " " + h + ":" + m + " " + ampm,
                        phone_string = h + ":" + m;
                    $('[data-live-time="desktop"]').html(desktop_string);
                    $('[data-live-time="phone"]').html(phone_string);
                    setTimeout(time_loop, 1000)
                };
                setTimeout(time_loop, 1000)
            }
        },
        "case-studies": function() { if (!MODULE.initialized) { APP.nodes.body.on('click', function(e) { if (APP.isTouch) { var $clicked = $(e.target); if ($clicked.is(".case-study") || $clicked.closest(".case-study").length > 0) { var $case_study = $clicked.is(".case-study") ? $clicked.is(".case-study") : $clicked.closest(".case-study"); if ($case_study.length > 0) { var $overlay = $case_study.find('.overlay-wrapper');
                                $('.case-study .overlay-wrapper').not($overlay).removeClass("visible"); if ($overlay.hasClass("visible")) { if ($clicked.is(".overlay-wrapper") || $clicked.closest(".overlay-wrapper").length > 0) {} else { $overlay.removeClass("visible") } } else { $overlay.addClass("visible") } } } else { $('.case-study .overlay-wrapper').removeClass("visible") } } }) } },
        "triple-screenshot-feature": function() {
            if (!MODULE.initialized) {
                APP.nodes.body.on('click', '.triple-screenshot-feature', function(e) {
                    var $feature = $(this),
                        $wrapper = $feature.closest('[data-template]'),
                        $all_features = $('.triple-screenshot-feature', $wrapper),
                        index = $feature.index(),
                        prev = index - 1,
                        next = index + 1,
                        length = $all_features.length;
                    if (prev < 0) { prev = length - 1 }
                    if (prev > length - 1) { prev = 0 }
                    if (next < 0) { next = length - 1 }
                    if (next > length - 1) { next = 0 }
                    $feature.attr("data-key", "Center");
                    $all_features.eq(prev).attr("data-key", "Left");
                    $all_features.eq(next).attr("data-key", "Right");
                    try { $all_videos = $all_features.find('video');
                        $all_videos.each(function() { var $video = $(this);
                            video = $video.get(0);
                            video.pause() });
                        $feature_video = $feature.find('video');
                        $feature_video.each(function() { var $video = $(this);
                            video = $video.get(0);
                            video.play() }) } catch (e) {}
                })
            }
        },
        "see-all": function() { if (!MODULE.initialized) { APP.nodes.body.on('click', '.mobile-column-see-all', function(e) { var $clicked = $(this),
                        $wrapper = $clicked.closest(".mobile-column"),
                        $ul = $wrapper.find("ul"),
                        $li = $ul.find("li");
                    $li.removeClass("display-none");
                    $clicked.remove() }) } }
    }
    MODULE.init = function() { $.each(MODULE.elements, function(key, element) { MODULE.elements[key]() });
        MODULE.initialized = !0 }
    return MODULE
};
MODULES["equal-height"] = function(APP) {
    var MODULE = { initialized: !1 };
    MODULE.events = { "mobile_toggle": function() { setTimeout(function() { MODULE.events.resize() }, 500) }, "resize": function() { var $elements = $('[data-eq-height]', APP.pjax.container),
                unique = [];
            $elements.each(function() { var key = $(this).data("eq-height"),
                    threshold = typeof($(this).data("eq-height-threshold")) ? $(this).data("eq-height-threshold") : !1; if ($.inArray(key, unique) === -1) { unique.push({ key: key, threshold: threshold }) } });
            $.each(unique, function(i, row) { var $elements = $('[data-eq-height="' + row.key + '"]', APP.pjax.container),
                    tallest = 0; if (!row.threshold || !APP.isBreakpoint(row.threshold)) { $elements.each(function() { var $element = $(this); var h = APP.helpers.actual.height($element); if (h > tallest) { tallest = h } });
                    $elements.height(tallest) } else { $elements.removeAttr("style") } }) } }
    MODULE.init = function() { MODULE.initialized = !0;
        setTimeout(function() { MODULE.events.resize() }, 300) }
    return MODULE
};
MODULES["full-width-background-w-text-overlay"] = function(APP) {
    var MODULE = { initialized: !1 };
    MODULE.events = { "resize": function() { var $elements = $('[data-template="full-width-background-w-text-overlay"]');
            $elements.each(function() { var $element = $(this),
                    $section = $element.closest('section'),
                    $overlay = $('.overlay', $element); var $padding_element = $('.baseline-extra-padding', $section); if ($padding_element.length > 0) { if (APP.isBreakpoint("lg")) { $padding_element.height(0) } else { var height = $overlay.outerHeight() / 2;
                        $padding_element.height(height) } } }) } }
    MODULE.init = function() { MODULE.initialized = !0; var $elements = $('[data-template="full-width-background-w-text-overlay"]');
        $elements.each(function() { var $element = $(this),
                $section = $element.closest('section'),
                $overlay = $('.overlay', $element); if ($overlay.length > 0) { var class_string = $overlay.attr("class"); if (class_string.indexOf("baseline") !== -1) { if ($('.baseline-extra-padding', $overlay).length === 0) { var $new_element = $('<div />');
                        $new_element.addClass("baseline-extra-padding");
                        $section.append($new_element);
                        MODULE.events.resize() } } } }) }
    return MODULE
};
MODULES.industries = function(APP) {
    var MODULE = { initialized: !1, timeout: null, delay_default: 2000, delay: 0, fade: 500, element: null, current_index: 0 };
    MODULE.events = { "resize": function() { var $cycle = $("#industries-cycle", APP.pjax.container); if ($cycle.length > 0) { if (APP.isBreakpoint("phone") && !$('#industries-cycle-last', $cycle).is(":visible")) { $cycle.height(APP.helpers.actual.height($cycle)) } else { $cycle.removeAttr("style") } } }, "pjax": { "beforeReplace": function() { clearTimeout(MODULE.timeout) } } }
    MODULE.random = {
        "last": null,
        "get": function($elements) {
            var random_index = Math.floor((Math.random() * $elements.length)),
                $random_element = $elements.eq(random_index);
            if (random_index == MODULE.random.last || $random_element.is(":visible")) { return MODULE.random.get($elements) }
            return $random_element
        }
    };
    MODULE.next = function() {
        var $cycle = $("#industries-cycle", APP.pjax.container);
        var $elements = $('[data-industry]', $cycle);
        MODULE.element = MODULE.element.next();
        if (MODULE.element.is('#industries-cycle-last') || MODULE.element.length === 0) { MODULE.element = $elements.first() }
        $elements.hide();
        MODULE.element.fadeIn(MODULE.fade, function() { MODULE.delay = MODULE.delay * 0.85;
            MODULE.fade = MODULE.fade * 0.9; if (MODULE.delay > 1) { MODULE.timeout = setTimeout(MODULE.next, MODULE.delay) } else { $elements.hide();
                MODULE.timeout = setTimeout(function() { $('#industries-cycle-last', $cycle).fadeIn(1000) }, 500) } })
    };
    MODULE.init = function() {
        var $cycle = $("#industries-cycle", APP.pjax.container);
        if ($cycle.length > 0) {
            MODULE.delay = MODULE.delay_default;
            var $elements = $('[data-industry]', $cycle);
            if ($elements.length > 0) {
                if ($cycle.data("randomize-start")) { MODULE.element = MODULE.random.get($elements) } else { MODULE.element = $elements.first() }
                MODULE.element.show();
                MODULE.timeout = setTimeout(MODULE.next, MODULE.delay)
            }
        }
        if (!MODULE.initialized) {}
        MODULE.initialized = !0
    }
    return MODULE
};
MODULES["lazy-load"] = function(APP) {
    var MODULE = { initialized: !1 };
    MODULE.observe = function(id, $element, callback) { APP.helpers.observer.create($element, id, function(entry) { callback() }, function() {}, { rootMargin: "100% 20px", threshold: 0, onlyOnce: !0, debounce: 0 }) };
    MODULE.init = function() {
        var loading_animation_html = '<div class="absolute-loading-animation"><div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div></div>';
        var images = document.querySelectorAll("[data-lazy-load]");
        new LazyLoad(images, { rootMargin: "200% 20px", threshold: 0 });
        $("[data-lazy-load-video]").each(function(i, v) {
            var $element = $(this);
            $element.prepend(loading_animation_html);
            APP.helpers.observer.create($element, "lazy-load-video-" + i, function(entry) {
                if (!$element.hasClass("video-loaded")) {
                    $element.append('<video autoplay muted loop preload playsinline><source src="' + $element.data('lazy-load-video') + '" type="video/mp4"></video>')
                    $element.removeAttr("data-lazy-load-video");
                    $element.addClass("video-loaded")
                    $element.find('.absolute-loading-animation').remove()
                } else { try { var $videos = $element.find("video");
                        $videos.each(function() { var $video = $(this);
                            video = $video.get(0);
                            video.play() }) } catch (e) {} }
            }, function() { var $videos = $element.find("video");
                $videos.each(function() { var $video = $(this);
                    video = $video.get(0);
                    video.pause() }) }, { rootMargin: "10% 20px", threshold: 0, onlyOnce: !1, debounce: 400 })
        });
        $("[data-lazy-load-bg]").each(function(i, v) { var $element = $(this);
            $element.prepend(loading_animation_html);
            MODULE.observe("lazy-load-bg-" + i, $element, function() { $element.css("background-image", "url(" + $element.data("lazy-load-bg") + ")");
                $element.removeAttr("data-lazy-load-bg"); var image = document.createElement('img');
                image.src = $element.data("lazy-load-bg");
                image.onload = function() { $element.find('.absolute-loading-animation').remove() } }) });
        $("[data-lazy-load-responsive-photo]").each(function(i, v) { var $element = $(this);
            MODULE.observe("lazy-load-responsive-photo-" + i, $element, function() { $element.addClass("lazy-loaded");
                $element.removeAttr("data-lazy-load-responsive-photo") }) });
        $('.staff-member').each(function(i, v) { var $element = $(this);
            $element.prepend(loading_animation_html);
            MODULE.observe("lazy-load-staff-member-" + i, $element, function() { $element.addClass("lazy-loaded");
                $element.find('.absolute-loading-animation').remove() }) });
        $('[data-module="maps"][data-deferred="true"]').each(function(i, v) { var $element = $(this);
            $element.prepend(loading_animation_html);
            MODULE.observe("deferred-map-" + i, $element, function() { APP.modules.maps.instance($element);
                $element.find('.absolute-loading-animation').remove() }) });
        $('[data-table="trusted_by"]').each(function(i, v) { var $element = $(this);
            MODULE.observe("deferred-trusted-by-" + i, $element, function() { $("img", $element).each(function() { $(this).attr("src", $(this).attr("data-src")).removeAttr("data-src") }) }) });
        MODULE.initialized = !0
    }
    return MODULE
};
MODULES["lets-talk-button"] = function(APP) {
    var MODULE = { initialized: !1, scale: 1, opacity: 1 };
    MODULE.events = {
        "scroll": function() {
            var $element = $('[data-template="lets-talk-button"]');
            var $stop_at = $('[data-template="footer-feature-boxes"].footer'),
                stop_at = $stop_at.offset().top - APP.viewport.height;
            if (APP.isMobile()) { stop_at += 25 }
            var red = APP.viewport.scrollTop > stop_at + (APP.viewport.scrollDirection == "down" ? 75 : 0),
                opacity = APP.viewport.scrollTop > stop_at + 200;
            $stop_at.toggleClass("red", red);
            $stop_at.find('.cms-btn').toggleClass("animated-button animated-button-color-very-light-pink", red).toggleClass("cms-btn-tertiary", !red);
            $element.toggleClass("opacity", opacity);
            if (APP.viewport.scrollTop > stop_at) { MODULE.opacity = 1 - ((APP.viewport.scrollTop - stop_at) / 100);
                MODULE.scale = (1 - ((APP.viewport.scrollTop - stop_at) / 100)) * 3 } else { MODULE.opacity = APP.viewport.scrollTop < stop_at ? 1 : 0;
                MODULE.scale = APP.viewport.scrollTop < stop_at ? 1 : 0 }
            if (MODULE.opacity < 0.01) { MODULE.opacity = 0 } else if (MODULE.opacity > 0.97) { MODULE.opacity = 1 }
            if (MODULE.scale < 0.01) { MODULE.scale = 0 } else if (MODULE.scale > 0.97) { MODULE.scale = 1 }
            $element.find(".max-width div").css({ "opacity": MODULE.opacity });
            $element.css({ "transform": "scale(" + MODULE.scale + ")" })
        }
    }
    MODULE.init = function() {
        var $element = $('[data-template="lets-talk-button"]');
        if (MODULE.initialized) { $element.addClass("fade-in") } else { setTimeout(function() { $element.addClass("fade-in") }, 1500) }
        MODULE.initialized = !0
    }
    return MODULE
};
MODULES["lets-talk-popup"] = function(APP) {
    var MODULE = { "initialized": !1, "wrapper": !1, "timeout": null, "open_path": window.location.pathname, "open_clicked_element": !1, "state_replace_type": "replaceState" };
    MODULE.events = {};
    MODULE.event_handlers = { "click": { "open": function($clicked, event) { MODULE.open($clicked, event) }, "close": function($clicked, event) { MODULE.close($clicked, event) } } };
    MODULE.event_listeners = function() {
        if (APP.page.trigger == APP.config.popup_form_template_name + "") {
            var form = !1;
            if (typeof(APP.page.wildcards) != "undefined" && typeof(APP.page.wildcards["lets-talk"]) != "undefined" && typeof(APP.page.wildcards["lets-talk"].form) != "undefined") { form = APP.page.wildcards["lets-talk"].form }
            MODULE.open()
        }
        APP.nodes.body.on('click', 'a[href]', function(event) { var $clicked = $(this),
                href = $clicked.attr("href"); if (href.match("^/" + APP.config.popup_form_template_name)) { event.preventDefault();
                MODULE.open($clicked, event); return !1 } });
        APP.nodes.body.on('click', '[data-lets-talk-click-event]', function(event) { var $clicked = $(this); if ($clicked.is('[data-lets-talk-click-event]')) { var event_name = $clicked.attr("data-lets-talk-click-event"),
                    event_name_with_type = "click/" + event_name; if (APP.helpers.property_exists(MODULE.event_handlers, event_name_with_type)) { MODULE.event_handlers.click[event_name]($clicked, event) } else { log(event_name_with_type + " doesn't exist!") } } })
    };
    MODULE.open = function($clicked, event) {
        if (APP.nodes.html.hasClass(APP.config.popup_form_template_name + "-open")) { return !1 }
        if (typeof($clicked) != "undefined") {
            var $clicked_element = $clicked;
            var is_a = $clicked.is("a"),
                is_a_child = $clicked.closest("a").length > 0;
            if (is_a || is_a_child) { $clicked_element = is_a ? $clicked : $clicked.closest("a") }
            if (!$clicked_element) { var is_button = $clicked.is("button"),
                    is_button_child = $clicked.closest("button").length > 0; if (is_button || is_button_child) { $clicked_element = is_button ? $clicked : $clicked.closest("button") } }
            if ($clicked_element) {
                var parent = "body";
                var $closest_template = $clicked_element.closest("[data-template]");
                if ($closest_template.length > 0) { parent = $closest_template.get(0).tagName + '[data-template="' + $closest_template.data("template") + '"]' }
                var $closest_id = $clicked_element.closest("[id]");
                if ($closest_id.length > 0) { if ($closest_template.length > 0 && !$closest_template.is($closest_id)) { if (!$closest_template.has($closest_id)) { parent += " " + $closest_id.get(0).tagName + "#" + $closest_id.attr("id") } } else { parent = $closest_id.get(0).tagName + "#" + $closest_id.attr("id") } }
                var history_value = { event: "open", parent: parent, element: $clicked_element.get(0).tagName, text: $clicked_element.text() };
                $.each(["id", "class", "href"], function(i, attr) { if ($clicked_element.attr(attr)) { history_value[attr] = $clicked_element.attr(attr) } });
                APP.fingerprint.set.history({ "action": "lets-talk", "value": history_value })
            } else { APP.fingerprint.set.history({ "action": "lets-talk", "value": { "event": "open", "element": "none" } }) }
        }
        $.scrollLock(!0);
        MODULE.open_path = window.location.pathname;
        APP.pjax[MODULE.state_replace_type]("/" + APP.config.popup_form_template_name, "Let's Talk");
        MODULE.set_transition_css($clicked);
        $('.cms-contact-form', MODULE.wrapper).scrollTop(0);
        var $mobile_lets_talk_button = $('#mobile-' + APP.config.popup_form_template_name + '-button');
        $mobile_lets_talk_button.attr("data-lets-talk-click-event", "close");
        $('[data-icon-state="closed"]', $mobile_lets_talk_button).hide();
        $('[data-icon-state="open"]', $mobile_lets_talk_button).css("display", "inline-block");
        $.each(APP.modules["card-stack"].cache, function(i, STACK) { STACK.timer.stopInterval();
            $('.timer [data-node]', STACK.nodes.block).removeClass("counting-down") });
        clearTimeout(MODULE.timeout);
        setTimeout(function() { APP.nodes.html.addClass(APP.config.popup_form_template_name + "-open");
            MODULE.timeout = setTimeout(function() { APP.nodes.html.addClass(APP.config.popup_form_template_name + "-animate-in");
                APP.events.resize(); if (!APP.isTouch) { var $first_empty_input = !1;
                    MODULE.wrapper.find("form input[name]").each(function() { if (!$first_empty_input && $.trim($(this).val()) == "") { $first_empty_input = $(this) } }); if ($first_empty_input) { $first_empty_input.focus().trigger('focus') } } }, 400) }, 100)
    };
    MODULE.close = function($clicked, event) {
        if (!APP.nodes.html.hasClass(APP.config.popup_form_template_name + "-open")) { return !1 }
        if (typeof($clicked) != "undefined") { APP.fingerprint.set.history({ "action": "lets-talk", "value": { "event": "close" } }) }
        $.scrollLock(!1);
        if (MODULE.open_path.match(new RegExp(APP.config.popup_form_template_name, "g"))) { MODULE.open_path = "/" }
        APP.pjax[MODULE.state_replace_type](MODULE.open_path);
        MODULE.set_transition_css();
        var $mobile_lets_talk_button = $('#mobile-' + APP.config.popup_form_template_name + '-button');
        $mobile_lets_talk_button.attr("data-lets-talk-click-event", "open");
        $('[data-icon-state="open"]', $mobile_lets_talk_button).hide();
        $('[data-icon-state="closed"]', $mobile_lets_talk_button).css("display", "inline-block");
        clearTimeout(MODULE.timeout);
        APP.nodes.html.removeClass(APP.config.popup_form_template_name + "-animate-in");
        setTimeout(function() { APP.nodes.html.removeClass(APP.config.popup_form_template_name + "-open " + APP.config.popup_form_template_name + "-animate-in");
            setTimeout(function() { MODULE.wrapper.removeAttr("style");
                MODULE.open_clicked_element = !1;
                $.each(APP.modules["card-stack"].cache, function(i, STACK) { if (STACK.nodes.element.hasClass("in-viewport")) { STACK.timer.startInterval() } }); var $FORM = MODULE.wrapper.find('form[data-form-template="more-information"]'); if ($FORM.closest('section[data-template]').hasClass("completed")) { try { clearTimeout(APP.modules["contact-forms"].cache["more-information"].close_on_complete_timeout);
                        APP.modules["contact-forms"].cache["more-information"].reset() } catch (e) {} } }, 300) }, 100)
    };
    MODULE.set_transition_css = function($clicked) {
        if (typeof($clicked) == "undefined") { $clicked = MODULE.open_clicked_element ? MODULE.open_clicked_element : !1 }
        var css = { width: "0", height: "0", left: "50%", top: "50%" };
        if (APP.isMobile()) { css.left = "100%";
            css.top = "100%" } else { if ($clicked) { if ($clicked.is('[data-lets-talk-click-event="open"]')) { var css = { width: $clicked.actual('width') * APP.modules["lets-talk-button"].scale, height: $clicked.actual('height') * APP.modules["lets-talk-button"].scale, left: $clicked.offset().left + "px", top: ($clicked.offset().top - $(window).scrollTop()) + "px" } } else { var left = $clicked.offset().left + ($clicked.outerWidth() / 2),
                        top = ($clicked.offset().top - $(window).scrollTop()) + ($clicked.outerHeight() / 2); var css = { width: 0, height: 0, left: left + "px", top: top + "px" } } } }
        MODULE.wrapper.css(css);
        MODULE.open_clicked_element = $clicked
    }, MODULE.init = function() {
        if (!MODULE.initialized) { MODULE.wrapper = $('section[data-template="' + APP.config.popup_form_template_name + '-form"]');
            MODULE.event_listeners() }
        MODULE.initialized = !0
    };
    return MODULE
};
MODULES["lightbox-form"] = function(APP) {
    var MODULE = {};
    MODULE.nodes = {};
    MODULE.lightboxes = {};
    MODULE.currently_open_lightbox = !1;
    var $LIGHTBOXES;
    var LIGHTBOX = function($WRAPPER) {
        var M = {};
        M.config = { "lightbox_id": $WRAPPER.data("lightbox-form-content"), "auto": !1, "cookie": !1, "iframe": !1, "video": !1, "autoplay": !1 };
        var $OPTIONS = $("script[type='application/json']", $WRAPPER);
        if ($OPTIONS.length > 0) { var OPTIONS = JSON.parse($.trim($OPTIONS.html()));
            $.extend(M.config, OPTIONS) }
        M.open = function() {
            $.scrollLock();
            MODULE.nodes.wrapper.addClass("open");
            if (M.config.iframe) { MODULE.nodes.wrapper.addClass("has-iframe") } else { MODULE.nodes.wrapper.removeClass("has-iframe iframe-loaded") }
            if (M.config.video) { MODULE.nodes.wrapper.addClass("has-video");
                MODULE.nodes.wrapper.removeClass("no-video") } else { MODULE.nodes.wrapper.removeClass("has-video");
                MODULE.nodes.wrapper.addClass("no-video") }
            MODULE.nodes.main.html($WRAPPER.html());
            MODULE.currently_open_lightbox = M.config.lightbox_id;
            if (/iPhone|iPod|iPad/.test(navigator.userAgent)) { $('iframe', MODULE.nodes.main).wrap(function() { var $this = $(this); return $('<div />').css({ width: $this.attr('width'), height: $this.attr('height'), overflow: 'auto', '-webkit-overflow-scrolling': 'touch' }) }) }
            if (M.config.iframe) { $("iframe", MODULE.nodes.main)[0].onload = function() { MODULE.nodes.wrapper.addClass("iframe-loaded") } }
            if (M.config.video) { if (M.config.autoplay) { $(".cms-video-placeholder", MODULE.nodes.main).trigger('click') } }
            INITIALIZE_CMS_FUNCTIONS();
            APP.modules["contact-forms"].init(MODULE.nodes.main);
            var $form = $("form", MODULE.nodes.main);
            if ($form.length > 0) { $form.find("[name]:visible").first().focus() }
        };
        M.close = function(cookie) {
            if (typeof(cookie) == "undefined") { cookie = !1 }
            MODULE.nodes.wrapper.removeClass("open has-iframe iframe-loaded");
            MODULE.nodes.main.html("");
            if (M.config.cookie) { if (cookie) { Cookies.set("lightbox-" + M.config.lightbox_id, "dismissed") } else { $.post("/modules/extended/setLightboxSession", { id: "lightbox-" + M.config.lightbox_id }, function(R) {}) } }
            MODULE.currently_open_lightbox = !1;
            $.scrollLock()
        };
        M.init = function() { if (M.config.auto) { if (M.config.cookie) { var cookie = Cookies.get("lightbox-" + M.config.lightbox_id); if (cookie != "dismissed" && M.config.session != "dismissed") { M.open() } } else { M.open() } } };
        M.init();
        return M
    }
    MODULE.generate = function(callback) {
        if (typeof(callback) == "undefined") { callback = function() {} }
        if ($("[data-lightbox-form]").length > 0) { $("[data-lightbox-form]").removeClass("open no-video");
            callback(); return }
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/></svg>';
        var svg_close = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>';
        var html = '<div data-lightbox-form> \
            <div data-lightbox-form-inner class="wrapper"> \
                <div data-lightbox-form-loading> \
                    <div class="spinner"> \
                        <div class="rect1"></div> \
                        <div class="rect2"></div> \
                        <div class="rect3"></div> \
                        <div class="rect4"></div> \
                        <div class="rect5"></div> \
                    </div> \
                </div> \
                <div data-lightbox-form-close="default">' + svg_close + '</div> \
                <div data-lightbox-form-main></div> \
            </div> \
        </div>';
        APP.nodes.body.append(html);
        MODULE.nodes.wrapper = $("[data-lightbox-form]");
        MODULE.nodes.close = $("[data-lightbox-form-close]", MODULE.nodes.wrapper);
        MODULE.nodes.inner = $("[data-lightbox-form-inner]", MODULE.nodes.wrapper);
        MODULE.nodes.main = $("[data-lightbox-form-main]", MODULE.nodes.wrapper);
        MODULE.nodes.loading = $("[data-lightbox-form-loading]", MODULE.nodes.wrapper);
        callback()
    };
    MODULE.get_currently_open_lightbox = function() {
        if (MODULE.currently_open_lightbox && typeof(MODULE.lightboxes[MODULE.currently_open_lightbox]) != "undefined") { return MODULE.lightboxes[MODULE.currently_open_lightbox] }
        return !1
    }
    MODULE.close_currently_open_lightbox = function(cookie) {
        if (typeof(cookie) == "undefined") { cookie = !1 }
        var CURRENTLY_OPEN_LIGHTBOX = MODULE.get_currently_open_lightbox();
        if (CURRENTLY_OPEN_LIGHTBOX) { CURRENTLY_OPEN_LIGHTBOX.close(cookie) }
    }
    MODULE.init = function() {
        $LIGHTBOXES = $("[data-lightbox-form-content]");
        if ($("[data-lightbox-form]").length === 0 && $LIGHTBOXES.length > 0) {
            MODULE.generate(function() {
                $LIGHTBOXES.each(function() { var $LIGHTBOX = $(this),
                        ID = $LIGHTBOX.data("lightbox-form-content");
                    MODULE.lightboxes[ID] = new LIGHTBOX($LIGHTBOX) });
                APP.nodes.body.on('click', '[data-lightbox-form-open], [data-lightbox-form-close], [data-lightbox-dont-show]', function(e) {
                    var $CLICKED = $(this);
                    if ($CLICKED.is("[data-lightbox-form-open]")) {
                        e.preventDefault();
                        var ID = $CLICKED.data("lightbox-form-open");
                        if (typeof(MODULE.lightboxes[ID]) == "undefined") { var $LIGHTBOX = $("[data-lightbox-form-content='" + ID + "']");
                            MODULE.lightboxes[ID] = new LIGHTBOX($LIGHTBOX) }
                        MODULE.lightboxes[ID].open();
                        return !1
                    } else { var cookie = $CLICKED.is("[data-lightbox-dont-show]");
                        MODULE.close_currently_open_lightbox(cookie) }
                });
                $(document).on('keydown', function(e) { if (e.keyCode == 27) { MODULE.close_currently_open_lightbox() } }).on('click', function(e) { if (MODULE.get_currently_open_lightbox()) { if ($(e.target).closest('.lightbox-content-wrapper').length === 0) { MODULE.close_currently_open_lightbox() } } })
            })
        }
    };
    return MODULE
};
MODULES.lightbox = function(APP) {
    var MODULE = { initialized: !1 };
    MODULE.nodes = {};
    MODULE.lightboxes = {};
    MODULE.currently_open_lightbox = !1;
    var LIGHTBOX = function($WRAPPER, INITIAL_OPEN) {
        var M = {};
        var CONFIG;
        M.openElement = null;
        M.NODES = { "html": $("html"), "body": $("body"), "triggers": $("[data-lightbox-open]") };
        M.PRELOADED = [];
        var CURRENT = 0;
        var svg = '<svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/></svg>';
        var svg_close = '<svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>';
        M.open = function(index) {
            if (typeof(index) == "undefined" || !index) { index = CURRENT }
            M.set(index);
            $.scrollLock(!0);
            M.NODES.wrapper.addClass("open");
            MODULE.events.resize();
            setTimeout(function() { MODULE.events.resize() }, 50);
            MODULE.currently_open_lightbox = $WRAPPER.data("lightbox-config");
            APP.modules.accessibility.init(function() { setTimeout(function() { M.NODES.wrapper.find('.slick-slide').removeClass("slick-current").attr("tabindex", "0");
                    M.NODES.wrapper.find('.slick-slide[data-slick-index="' + index + '"]').first().addClass("slick-current").focus() }, 500) }, M.NODES.wrapper)
        };
        M.close = function() { M.NODES.wrapper.removeClass("open");
            MODULE.events.resize();
            MODULE.currently_open_lightbox = !1;
            $.scrollLock(!1);
            APP.modules.accessibility.init(); if (M.openElement) { M.openElement.focus();
                M.openElement = null } };
        M.set = function(index) {
            if (typeof(CONFIG.photos[index]) == "undefined") { return !1 }
            M.NODES.main_caption.removeClass("has-caption").html("");
            CURRENT = parseInt(index);
            $(".slick-selected", M.NODES.carousel_inner).removeClass("slick-selected");
            M.NODES.carousel_inner.find('[data-photo-index="' + CURRENT + '"]').addClass("slick-selected");
            if (M.NODES.carousel_inner.find(".slick-slide").length > CONFIG.photos.length) { M.NODES.carousel_inner.slick('slickGoTo', CURRENT) }
            if (Number.isInteger(parseInt(CONFIG.photos[CURRENT].img))) { var url = "/image/" + CONFIG.photos[CURRENT].img + "/" + M.getResolution() } else { var url = CONFIG.photos[CURRENT].img }
            if (APP.config.cloudfront_distribution_url) { if (url.charAt(0) == "/") { url = "https://" + APP.config.cloudfront_distribution_url + url } }
            var css = { "background-image": "url(" + url + ")" };
            if ($.inArray(url, M.PRELOADED) !== -1) {
                if (typeof(CONFIG.ratios) != "undefined" && typeof(CONFIG.ratios[CURRENT]) != "undefined") { css["padding-bottom"] = CONFIG.ratios[CURRENT] } else {
                    var $img = $("<img />");
                    $img.attr("src", url);
                    M.NODES.body.append($img);
                    var ratio = $img.actual('height') / $img.actual('width');
                    ratio = ratio * 100;
                    $img.remove();
                    if (!isNaN(ratio)) {
                        css["padding-bottom"] = ratio + "%";
                        if (typeof(CONFIG.ratios) == "undefined") { CONFIG.ratios = {} }
                        CONFIG.ratios[CURRENT] = ratio + "%"
                    }
                }
                M.NODES.main_photo.css(css);
                if (typeof(CONFIG.photos[CURRENT].caption) != "undefined" && CONFIG.photos[CURRENT].caption) { M.NODES.main_caption.addClass("has-caption").html(CONFIG.photos[CURRENT].caption) }
                MODULE.events.resize();
                setTimeout(function() { MODULE.events.resize() }, 50)
            } else { M.NODES.main_photo.css({ "background-image": "none" });
                M.NODES.wrapper.addClass("loading");
                M.preload(index, function() { M.NODES.wrapper.removeClass("loading");
                    M.set(index) }) }
            M.preload(index + 1)
        };
        M.preload = function(index, callback) {
            if (typeof(callback) == "undefined") { callback = function() {} }
            if (typeof(CONFIG.photos[index]) != "undefined") {
                if (Number.isInteger(parseInt(CONFIG.photos[index].img))) { var url = "/image/" + CONFIG.photos[index].img + "/" + M.getResolution() } else { var url = CONFIG.photos[index].img }
                if (APP.config.cloudfront_distribution_url) { if (url.charAt(0) == "/") { url = "https://" + APP.config.cloudfront_distribution_url + url } }
                $.imgpreload(url, function() { M.PRELOADED.push(url);
                    callback() })
            }
        };
        M.getResolution = function() {
            var resolution = 500;
            if (APP.viewport.width > 500) { resolution = 1000 }
            if (APP.viewport.width > 1000) { resolution = 1500 }
            if (APP.viewport.width > 1500) { resolution = 2000 }
            if (APP.viewport.width > 2000) { resolution = 2500 }
            if (APP.viewport.width > 2500) { resolution = 3000 }
            return resolution
        };
        M.imageIDToIndex = function(img_id) {
            var found = !1;
            $.each(CONFIG.photos, function(i, photo) { if (photo.img == img_id) { found = i } });
            if (!found) { found = 0 }
            return found
        };
        M.generate = function(callback) {
            if (typeof(callback) == "undefined") { callback = function() {} }
            var html = '<div data-lightbox="' + $WRAPPER.data("lightbox-config") + '">' + '<div data-lightbox-close data-tab-element="0">' + svg_close + '</div>' + '<div data-lightbox-inner>' + '<div data-lightbox-main></div>' + '<div class="wrapper"><div data-lightbox-carousel></div></div>' + '</div>' + '</div>';
            var loading = '<div class="lightbox-loading-animation">' + '<div class="showbox">' + '<div class="loader">' + '<svg class="circular" viewBox="25 25 50 50">' + '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>' + '</svg>' + '</div>' + '</div>' + '</div>';
            var controls = '<div class="lightbox-control prev" data-lightbox-control="prev">' + svg + '</div>' + '<div class="lightbox-control next" data-lightbox-control="next">' + svg + '</div>';
            M.NODES.body.append(html);
            M.NODES.wrapper = $("[data-lightbox=\"" + $WRAPPER.data("lightbox-config") + "\"]");
            M.NODES.close = $("[data-lightbox-close]", M.NODES.wrapper);
            M.NODES.inner = $("[data-lightbox-inner]", M.NODES.wrapper);
            M.NODES.main = $("[data-lightbox-main]", M.NODES.wrapper);
            M.NODES.carousel = $("[data-lightbox-carousel]", M.NODES.wrapper);
            M.NODES.main.html(loading + controls + '<div class="responsive-photo-wrapper"><div class="responsive-photo"></div><div data-lightbox-caption></div></div>');
            M.NODES.main_wrapper = $(".responsive-photo-wrapper", M.NODES.main);
            M.NODES.main_photo = $(".responsive-photo", M.NODES.main);
            M.NODES.main_caption = $("[data-lightbox-caption]", M.NODES.main);
            M.NODES.control = $("[data-lightbox-control]", M.NODES.wrapper);
            M.NODES.carousel.html('<div data-lightbox-carousel-inner></div>');
            M.NODES.carousel_inner = $("[data-lightbox-carousel-inner]", M.NODES.carousel);
            if (typeof(CONFIG.carousel) != "undefined" && (CONFIG.carousel == "false" || !CONFIG.carousel)) { M.NODES.carousel.hide();
                M.NODES.main.css({ "height": "95vh" }) }
            $.each(CONFIG.photos, function(i, photo) {
                if (Number.isInteger(parseInt(photo.img))) { var url = '/image/' + photo.img + '/300' } else { var url = photo.img }
                if (APP.config.cloudfront_distribution_url) { if (url.charAt(0) == "/") { url = "https://" + APP.config.cloudfront_distribution_url + url } }
                var slide_html = '<div data-photo-index="' + i + '">' + '<div class="responsive-photo" style="background-image: url(' + url + ');">' + '</div>';
                M.NODES.carousel_inner.append(slide_html)
            });
            M.slickInit(function() { callback() })
        };
        M.slickInit = function(callback) { M.NODES.carousel_inner.on('init', function(event, slick, currentSlide, nextSlide) { M.NODES.carousel.addClass("init");
                MODULE.events.resize();
                callback() }).slick({ infinite: !0, speed: 100, slidesToShow: 6, slidesToScroll: 1, initialSlide: M.imageIDToIndex(INITIAL_OPEN), prevArrow: '<div class="lightbox-control prev" data-lightbox-carousel-control="prev">' + svg + '</div>', nextArrow: '<div class="lightbox-control next" data-lightbox-carousel-control="next">' + svg + '</div>', responsive: [{ breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } }], focusOnChange: !0, focusOnSelect: !0 }) };
        M.init = function() {
            CONFIG = JSON.parse($.trim($WRAPPER.html()));
            M.generate(function() {
                if (M.NODES.triggers.first().attr("data-lightbox-target") != "undefined") { M.NODES.triggers = M.NODES.triggers.filter("[data-lightbox-target='" + $WRAPPER.data("lightbox-config") + "']") }
                M.NODES.wrapper.on('click', '[data-lightbox-control], [data-lightbox-close], .slick-slide', function(e) {
                    var $CLICKED = $(this);
                    if ($CLICKED.is("[data-lightbox-control]")) {
                        var direction = $CLICKED.data("lightbox-control");
                        if (direction == "next") { var next = CURRENT + 1; if (next > CONFIG.photos.length - 1) { next = 0 } } else { var next = CURRENT - 1; if (next < 0) { next = CONFIG.photos.length - 1 } }
                        M.set(next)
                    } else if ($CLICKED.is("[data-lightbox-close]")) { M.close() } else if ($CLICKED.is(".slick-slide")) { M.set($(this).find('[data-photo-index]').data("photo-index")) }
                }).on('keydown', '[data-lightbox-control], [data-lightbox-close], .slick-slide', function(e) { var $element = $(this); if (e.keyCode == 13) { $element.trigger('click') } }).on('keydown', function(e) { if (e.keyCode == 27) { M.close() } });
                M.NODES.main.swipe(function(e, dx, dy) {
                    if (dy > 60) { return !1 }
                    if (dx < 0) { var next = CURRENT + 1; if (next > CONFIG.photos.length - 1) { next = 0 } } else { var next = CURRENT - 1; if (next < 0) { next = CONFIG.photos.length - 1 } }
                    M.set(next)
                })
            })
        };
        M.init();
        return M
    };
    MODULE.get_currently_open_lightbox = function() {
        if (MODULE.currently_open_lightbox && typeof(MODULE.lightboxes[MODULE.currently_open_lightbox]) != "undefined") { return MODULE.lightboxes[MODULE.currently_open_lightbox] }
        return !1
    }
    MODULE.close_currently_open_lightbox = function(cookie) {
        if (typeof(cookie) == "undefined") { cookie = !1 }
        var CURRENTLY_OPEN_LIGHTBOX = MODULE.get_currently_open_lightbox();
        if (CURRENTLY_OPEN_LIGHTBOX) { CURRENTLY_OPEN_LIGHTBOX.close(cookie) }
    }
    MODULE.events = {
        "resize": function() {
            var OPEN = MODULE.get_currently_open_lightbox();
            if (OPEN && OPEN.NODES.wrapper.hasClass("open")) {
                OPEN.NODES.main_wrapper.removeAttr("style");
                var MAIN_HEIGHT = OPEN.NODES.main.height(),
                    PHOTO_WIDTH = OPEN.NODES.main_photo.outerWidth(),
                    PHOTO_HEIGHT = OPEN.NODES.main_photo.outerHeight(),
                    RATIO = PHOTO_WIDTH / PHOTO_HEIGHT,
                    MAX_WIDTH = OPEN.NODES.main.height();
                if (PHOTO_HEIGHT > MAIN_HEIGHT) { PHOTO_HEIGHT = MAIN_HEIGHT;
                    MAX_WIDTH = MAX_WIDTH * RATIO }
                OPEN.NODES.main_wrapper.css({ "max-width": MAX_WIDTH + "px", "max-height": PHOTO_HEIGHT + "px" });
                OPEN.NODES.carousel_inner.slick('getSlick').refresh();
                OPEN.NODES.carousel_inner.slick('resize')
            }
        }
    };
    MODULE.init = function() {
        if (!MODULE.initialized) {
            APP.nodes.body.on('click', '[data-lightbox-open]', function() {
                var $CLICKED = $(this),
                    ID = $CLICKED.attr("data-lightbox-target"),
                    OPEN = $CLICKED.attr("data-lightbox-open"),
                    $LIGHTBOX = $("script[data-lightbox-config='" + ID + "']");
                if (typeof(MODULE.lightboxes[ID]) == "undefined") { MODULE.lightboxes[ID] = new LIGHTBOX($LIGHTBOX, OPEN) }
                MODULE.lightboxes[ID].openElement = $CLICKED;
                OPEN = MODULE.lightboxes[ID].imageIDToIndex(OPEN);
                MODULE.lightboxes[ID].open(OPEN)
            })
        }
        MODULE.initialized = !0
    }
    return MODULE
};
MODULES.maps = function(APP) {
    var MODULE = { initialized: !1, instances: {} };
    MODULE.events = { "scroll": function() { $.each(MODULE.instances, function(i, map) { map.google.setOptions({ scrollwheel: !1 }) }) }, "scroll_finished": function() { $.each(MODULE.instances, function(i, map) { map.google.setOptions({ scrollwheel: !0 }) }) } };
    MODULE.instance = function($map, init_callback) {
        if (typeof(init_callback) == "undefined") { init_callback = function() {} }
        var MAP = { config: { id: !1, block: !1, markers: {}, zoom: 12, center: { lat: 40.510045, lng: -89.00459999999998 } }, google: null };
        MAP.generateConfig = function(callback) {
            var $element = $("script[type='application/json']", $map);
            if ($element.length > 0) {
                $.extend(MAP.config, JSON.parse($element.html()));
                if (!MAP.config.block || typeof(MAP.config.block.id) == "undefined") { console.error("Block missing from map config.") } else {
                    MAP.config.id = "map-" + MAP.config.block.id;
                    MAP.config.zoom = parseInt(MAP.config.zoom);
                    if (MAP.config.markers.length === 1) { MAP.config.center = { lat: parseFloat(MAP.config.markers[0].latitude), lng: parseFloat(MAP.config.markers[0].longitude) } }
                    MODULE.instances[MAP.config.id] = MAP;
                    callback()
                }
            } else { console.error("No map config.") }
        };
        MAP.markers = {
            "cache": {},
            "add": function(marker, openInfowindow) {
                if (!MAP.google) { return !1 }
                if (marker.latitude && marker.longitude && marker.latitude !== null && marker.longitude !== null && marker.latitude != "null" && marker.longitude != "null" && marker.latitude != "0" && marker.longitude != "0") {
                    if (typeof(MAP.markers.cache[marker.id]) != "undefined") { return }
                    if (typeof(openInfowindow) == "undefined") { openInfowindow = !1 }
                    marker.latitude = parseFloat(marker.latitude);
                    marker.longitude = parseFloat(marker.longitude);
                    var marker_config = { position: new google.maps.LatLng(marker.latitude, marker.longitude), map: MAP.google, title: marker.address_1 };
                    if (typeof(marker.icon) != "undefined") { marker_config.icon = marker.icon } else { marker.icon = !1 }
                    var MARKER = new google.maps.Marker(marker_config);
                    var INFOWINDOW = !1;
                    if (typeof(marker.infowindow) != "undefined") { var infowindow_config = $.extend({ map: MAP.google, marker: MARKER, content: "", closeOnMapClick: !1, closeWhenOthersOpen: MAP.config.markers.length > 1, showCloseButton: !1, placement: "top", panOnOpen: !1, offset: { left: '65px', top: '-30px' }, border: { width: '0px', color: '#FF0000' }, borderRadius: "5px", padding: "15px 8px", shadow: { h: '0px', v: '3px', blur: '6px', spread: '0px', opacity: 0.3, color: '#000' }, callbacks: {} }, marker.infowindow);
                        infowindow_config.content = '<div class="infowindow-content">' + marker.infowindow.content + '</div>'; var INFOWINDOW = new SnazzyInfoWindow(infowindow_config); if (openInfowindow || MAP.config.markers.length === 1) { INFOWINDOW.open() } }
                    MAP.markers.cache[marker.id] = { marker: MARKER, infowindow: INFOWINDOW, row: marker };
                    if (typeof(marker.callbacks) != "undefined") { $.each(marker.callbacks, function(event_name, event_function) { google.maps.event.addListener(MARKER, event_name, function() { event_function(MAP.markers.cache[marker.id], Array.prototype.slice.call(arguments)) }) }) }
                    return MARKER
                }
            },
            "adjustToBounds": function() {
                var bounds = new google.maps.LatLngBounds(),
                    len = Object.keys(MAP.markers.cache).length;
                if (len > 1) {
                    $.each(MAP.markers.cache, function(marker_id, marker) { bounds.extend(marker.marker.getPosition()) });
                    if (len < 3) { var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + .01, bounds.getNorthEast().lng() + .01); var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - .01, bounds.getNorthEast().lng() - .01);
                        bounds.extend(extendPoint1);
                        bounds.extend(extendPoint2) }
                    MAP.google.fitBounds(bounds);
                    MAP.google.setOptions({ minZoom: MAP.google.getZoom() })
                } else { MAP.google.setZoom(MAP.config.zoom) }
                return bounds
            },
            "reset": function() { $.each(MAP.markers.cache, function(row_id, cache) { try { cache.marker.setMap(null);
                        cache.infowindow.close() } catch (e) {} });
                MAP.markers.cache = {} }
        }
        MAP.circles = {
            "cache": {},
            "add": function(options, marker) {
                if (!MAP.google) { return !1 }
                var config = $.extend({ id: "circle-" + Date.now(), map: MAP.google }, options);
                var circle = new google.maps.Circle(config);
                circle.bindTo('center', marker, 'position');
                MAP.circles.cache[config.id] = circle
            },
            "reset": function() { $.each(MAP.circles.cache, function(row_id, cache) { try { cache.setMap(null) } catch (e) {} });
                MAP.circles.cache = {} }
        }
        MAP.init = function() { MAP.generateConfig(function() { var $target = $("<div />");
                $target.addClass("map-target");
                $map.append($target);
                MAP.google = new google.maps.Map($target[0], { center: MAP.config.center, zoom: MAP.config.zoom, mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: !1, zoomControl: !0, mapTypeControl: !1, scaleControl: !1, streetViewControl: !1, rotateControl: !1, fullscreenControl: !1 });
                google.maps.event.addListener(MAP.google, 'mouseover', function() { MAP.scrolwheelTimeout = setTimeout(function() { MAP.google.set('scrollwheel', !0) }, 400) });
                google.maps.event.addListener(MAP.google, 'mouseout', function() { clearTimeout(MAP.scrolwheelTimeout);
                    MAP.google.set('scrollwheel', !1) });
                google.maps.event.addDomListener(window, 'resize', function() { var center = MAP.google.getCenter();
                    google.maps.event.trigger(MAP.google, "resize");
                    MAP.google.setCenter(center) });
                $.each(MAP.config.markers, function(i, marker) { MAP.markers.add(marker) });
                MAP.markers.adjustToBounds();
                $map.data("initialized", !0);
                init_callback(MAP) }) };
        MAP.init();
        return MAP
    };
    MODULE.init = function($scope) {
        if (typeof($scope) == "undefined") { $scope = $("html") }
        $('[data-module="maps"]', $scope).each(function() { var $map = $(this); if (!$map.data("initialized") && !$map.data("deferred")) { MODULE.instance($map) } });
        if (!MODULE.initialized) { MODULE.initialized = !0 }
    };
    return MODULE
};
MODULES["our-work"] = function(APP) {
    var MODULE = { initialized: !1, last_viewed: !1 };
    MODULE.events = {
        "pjax": {
            "end": function() {
                if (MODULE.last_viewed) { log("Last Viewed: " + MODULE.last_viewed) }
                if ($(".case-study").length > 0 && MODULE.last_viewed) { var $case_study = $('[data-case-study="' + MODULE.last_viewed + '"]'); if ($case_study.length > 0) { log("Scroll To: " + MODULE.last_viewed);
                        $("html,body").animate({ scrollTop: $case_study.offset().top - APP.nodes.header.outerHeight() - 50 }, 10, function() { MODULE.last_viewed = !1 }) } }
            }
        }
    }
    MODULE.init = function() {
        if (!MODULE.initialized) { APP.nodes.body.on('click', '.case-study .overlay-button a', function(e) { var $clicked = $(this),
                    $case_study = $clicked.closest(".case-study");
                MODULE.last_viewed = $case_study.data("case-study") }) }
        if (APP.page.tags.indexOf("case-studies") === -1) { if (APP.page.tags.indexOf("case-study") === -1) { MODULE.last_viewed = !1 } else { MODULE.last_viewed = APP.page.id } }
        MODULE.initialized = !0
    }
    return MODULE
};
MODULES["page-heading"] = function(APP) {
    var MODULE = { initialized: !1 };
    MODULE.events = {
        "resize": function() {
            var $elements = $('[data-template="page-heading"]');
            $elements.each(function() {
                var $element = $(this),
                    $bg = $('.bg-color', $element),
                    $content = $('.page-heading-content', $element);
                if ($bg.length > 0 && $bg.hasClass("has-iphone-preview")) {
                    var text_height = 0;
                    $.each([".headings-wrapper", ".text-columns-wrapper"], function(i, v) { if ($(v, $content).length > 0) { text_height += $(v, $content).outerHeight() } });
                    if (APP.isBreakpoint("md")) {
                        var content_height = text_height;
                        if (APP.isBreakpoint("phone")) { content_height += 30 } else { content_height += 60 }
                        if (APP.isBreakpoint("sm")) { text_height += 100;
                            content_height += 100 }
                        $bg.css("min-height", text_height + "px");
                        $bg.css("max-height", text_height + "px")
                    } else { var min_height = 670;
                        $bg.css("min-height", text_height + "px");
                        $bg.css("max-height", min_height + "px"); var content_height = $bg.outerHeight() }
                    $content.height(content_height)
                }
            });
            var $elements = $('[data-template="page-heading-behind-menu"]');
            $elements.each(function() {
                var $element = $(this),
                    $bg = $('.background-photo', $element),
                    $content = $('.page-heading-content .max-width', $element);
                var multiplier = 2;
                if (APP.isMobile()) { multiplier = 1.4 }
                $bg.height($content.outerHeight() * multiplier)
            })
        }
    }
    MODULE.init = function() { MODULE.initialized = !0;
        setTimeout(function() { MODULE.events.resize() }, 300) }
    return MODULE
};
MODULES.reviewability = function(APP) {
    var MODULE = { initialized: !1 };
    MODULE.events = { "pjax": { "beforeReplace": function() { $('link[href*="reviewability"]').remove();
                $('script[src*="reviewability"]').remove() } } };
    MODULE.init = function() {
        if ($('[data-bid]').length > 0) {
            if (!Element.prototype.matches) { Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector }(function() {
                let container;
                container = $('[data-bid]')[0];
                let config = { layout: '', cssPrefix: 'revwid-', mobileBreakpoint: 1024, carouselSwipeBuffer: 75, readMoreLimit: 455, cssPath: getCssPath(), };
                let stylesheet;
                let baseUrl = container.dataset.url;
                let businessId = parseInt(container.dataset.bid);
                let businessIds = container.dataset.bid;
                let totalPages = 0;
                let socialLogos = {};
                let widget = { cssLoaded: !1, unique: config.cssPrefix + Math.random().toString(36).substr(2, 9), additionalId: container.hasAttribute('data-aid') ? container.getAttribute('data-aid') : !1, preview: container.hasAttribute('data-preview'), masonryTimeout: null, jsonLd: container.dataset.hasOwnProperty('jsonld') ? container.dataset.jsonld : 1 };
                container.setAttribute('data-unique', widget.unique);

                function getCssPath() { return container.hasAttribute('data-css') ? container.getAttribute('data-css') : 'https://widget.reviewability.com/css/widgetAdv.min.css' }

                function initWidget(divContainer, json) {
                    if (!widget.cssLoaded) { setTimeout(function() { initWidget(divContainer, json) }, 100); return }
                    if (json.content.search('data-widget-layout="dataOnly"') !== -1) { stylesheet.parentNode.removeChild(stylesheet) }
                    divContainer.innerHTML += json.content;
                    widget.container = getContainerElement();
                    config.layout = widget.container.dataset.widgetLayout;
                    if (config.layout === 'horizontal') { config.readMoreLimit = 200 }
                    widget.reviewContainerWidth = 0;
                    widget.touchStartX = 0;
                    widget.touchStartY = 0;
                    widget.touchEndX = 0;
                    widget.touchEndY = 0;
                    widget.slideToLast = !1;
                    widget.reviews = "";
                    widget.ui = { reviewContainer: "", filterButton: "", filterSelects: "", boxes: "", painationArrowNext: "", painationArrowPrevious: "", };
                    widget.carousel = { reviewsPerSlide: 3, currentIndex: 0, previousIndex: 0, ui: { arrowNext: "", arrowPrevious: "", scrollableArea: "", } };
                    widget.init = function() { attachListeners();
                        widget.reviews = widget.container.querySelectorAll('.js-review');
                        widget.setReviewContainerProperties(); if (config.layout == 'horizontal') { widget.initCarousel();
                            widget.setBoxHeight() } };
                    widget.initCarousel = function() { widget.setReviewContainerWidthValue();
                        setReviewsPerSlide();
                        widget.carousel.ui.arrowNext = widget.container.querySelector('.js-carousel-next-arrow');
                        widget.carousel.ui.arrowPrevious = widget.container.querySelector('.js-carousel-previous-arrow');
                        widget.carousel.ui.scrollableArea = widget.container.querySelector('.js-scrollable-area');
                        widget.carousel.ui.arrowNext.addEventListener('click', function(e) { widget.carousel.goToNextSlide() });
                        widget.carousel.ui.arrowPrevious.addEventListener('click', function(e) { widget.carousel.goToPreviousSlide() });
                        widget.carousel.ui.scrollableArea.addEventListener('touchstart', function(event) { widget.touchStartX = event.changedTouches[0].screenX;
                            widget.touchStartY = event.changedTouches[0].screenY }, !1);
                        widget.carousel.ui.scrollableArea.addEventListener('touchend', function(event) { widget.touchEndX = event.changedTouches[0].screenX;
                            widget.touchEndY = event.changedTouches[0].screenY;
                            handleSwipe() }, !1) };

                    function getContainerElement() { if (typeof container !== 'undefined') { return container.querySelector('.js-widget-container') } else { let scriptTags = document.getElementsByTagName('script'); let containerTag = scriptTags[scriptTags.length - 1].parentNode; return containerTag.querySelector('.js-widget-container') } }

                    function attachListeners() {
                        widget.ui.reviewContainer = widget.container.querySelector('.js-review-container');
                        widget.ui.boxes = widget.container.querySelectorAll('.js-box');
                        widget.ui.filterContainer = widget.container.querySelector('.js-filter-container');
                        widget.ui.filterButton = widget.container.querySelector('.js-filter-button');
                        widget.ui.painationArrowNext = widget.container.querySelector('.js-next-arrow');
                        widget.ui.painationArrowPrevious = widget.container.querySelector('.js-previous-arrow');
                        window.addEventListener('resize', function(event) {
                            if (config.layout === 'full') { widget.setReviewContainerProperties() }
                            if (config.layout === 'horizontal') { widget.setBoxHeight();
                                widget.setReviewContainerWidthValue();
                                setReviewsPerSlide() }
                        });
                        document.addEventListener('click', function(event) { if (isShowingFilterMenu() && !widget.ui.filterContainer.contains(event.target)) { widget.ui.filterContainer.classList.remove(config.cssPrefix + 'show-invisibles');
                                widget.ui.filterButton.classList.remove(config.cssPrefix + 'is-active') } });
                        widget.container.addEventListener('touchstart', function(event) {}, !1);
                        widget.ui.filterButton.addEventListener('click', function(event) { widget.ui.filterContainer.classList.toggle(config.cssPrefix + 'show-invisibles');
                            widget.ui.filterButton.classList.toggle(config.cssPrefix + 'is-active') })
                    }
                    widget.setReviewContainerWidthValue = function() { widget.reviewContainerWidth = widget.ui.reviewContainer.clientWidth };
                    widget.setReviewContainerProperties = function() {
                        if (config.layout === 'full') {
                            doMasonry();
                            if (widget.masonryTimeout) { window.clearTimeout(widget.masonryTimeout) }
                            widget.masonryTimeout = setTimeout(doMasonry, 50)
                        }
                        if (isSmallContainer() && (config.layout == 'full' || config.layout == 'horizontal')) { widget.container.classList.add(config.cssPrefix + 'is-small-container') } else { widget.container.classList.remove(config.cssPrefix + 'is-small-container') }
                    };
                    widget.setBoxHeight = function() { return !1 };
                    widget.carousel.goToIndex = function(index) {
                        if (index == widget.carousel.previousIndex) { return }
                        widget.carousel.previousIndex = index;
                        var offset = -(index * (widget.reviewContainerWidth - (isMobile() ? 32 : 0)));
                        widget.ui.reviewContainer.style.setProperty('transform', 'translateX(' + offset + 'px)', 'important')
                    };
                    widget.carousel.isOnLastSlide = function() { return (widget.carousel.currentIndex + 1) >= Math.ceil(widget.reviews.length / widget.carousel.reviewsPerSlide) };
                    widget.carousel.isOnFirstSlide = function() { return widget.carousel.currentIndex === 0 };
                    widget.getPageNumber = function() { return parseInt(widget.container.querySelector('.revwid-pagination-link.revwid-is-active').dataset.page) };
                    widget.isOnFirstPage = function() { return widget.getPageNumber() === 1 };
                    widget.isOnLastPage = function() { return widget.getPageNumber() === totalPages };
                    widget.carousel.goToNextSlide = function() {
                        widget.slideToLast = !1;
                        if (!widget.carousel.isOnLastSlide()) { widget.carousel.currentIndex++;
                            widget.carousel.goToIndex(widget.carousel.currentIndex) } else { widget.container.querySelectorAll(".revwid-pagination-list .revwid-is-right-arrow")[0].click() }
                        setCarouselDisabledStatus()
                    };
                    widget.carousel.goToPreviousSlide = function() {
                        if (!widget.carousel.isOnFirstSlide()) { widget.slideToLast = !1;
                            widget.carousel.currentIndex--;
                            widget.carousel.goToIndex(widget.carousel.currentIndex) } else { widget.slideToLast = !0;
                            widget.container.querySelectorAll(".revwid-pagination-list .revwid-is-left-arrow")[0].click() }
                        setCarouselDisabledStatus()
                    };

                    function setCarouselDisabledStatus() {
                        if (widget.carousel.isOnLastSlide() && widget.isOnLastPage()) { widget.carousel.ui.arrowNext.classList.add(config.cssPrefix + 'is-disabled') } else { widget.carousel.ui.arrowNext.classList.remove(config.cssPrefix + 'is-disabled') }
                        if (widget.carousel.isOnFirstSlide() && widget.isOnFirstPage()) { widget.carousel.ui.arrowPrevious.classList.add(config.cssPrefix + 'is-disabled') } else { widget.carousel.ui.arrowPrevious.classList.remove(config.cssPrefix + 'is-disabled') }
                    }

                    function handleSwipe() {
                        if ((Math.abs(widget.touchEndY - widget.touchStartY) < 20 || widget.touchStartY == 0) && Math.abs(widget.touchEndX - widget.touchStartX) > 10) {
                            if (widget.touchEndX + config.carouselSwipeBuffer < widget.touchStartX) { widget.carousel.goToNextSlide() }
                            if (widget.touchEndX - config.carouselSwipeBuffer > widget.touchStartX) { widget.carousel.goToPreviousSlide() }
                        }
                    }

                    function setReviewsPerSlide() { widget.carousel.reviewsPerSlide = isMobile() ? 1 : 3 }

                    function isMobile() { return window.innerWidth < config.mobileBreakpoint }

                    function isSmallContainer() { return !isMobile() && widget.container.clientWidth < config.mobileBreakpoint }

                    function isShowingFilterMenu() { return widget.ui.filterContainer.classList.contains(config.cssPrefix + 'show-invisibles') }

                    function doMasonry() {
                        let reviewsCont = widget.container.querySelector('.js-review-container');
                        if (!isMobile()) {
                            reviewsCont.style.height = 1000;
                            let els1 = widget.container.querySelectorAll('.js-is-order-1');
                            let els2 = widget.container.querySelectorAll('.js-is-order-2');
                            let column1Height = 0,
                                column2Height = 0;
                            if (els1.length > 0) { if (els1.length === 1) { column1Height = els1[0].clientHeight } else { forEach(els1, function(a) { column1Height += a.clientHeight }) } } else { column1Height = widget.container.querySelector('.revwid-reviews .revwid-has-text-centered').clientHeight }
                            if (els2.length > 0) { if (els2.length === 1) { column2Height = els2[0].clientHeight } else { forEach(els2, function(a) { column2Height += a.clientHeight }) } }
                            reviewsCont.style.height = ((column1Height > column2Height ? column1Height : column2Height) + 10) + 'px'
                        } else { reviewsCont.style.height = 'auto' }
                        widget.masonryTimeout = null
                    }
                    renderReviews(json.reviews.reviews);
                    renderPagination(json.reviews.pages, 1);
                    widget.init()
                }

                function ajax(data) { let $ajax = new XMLHttpRequest(); let url = data.url; let onSuccess = typeof data.success === 'function' ? data.success : function(t) {}; let onError = typeof data.error === 'function' ? data.error : function(t) {}; let type = typeof data.type === 'string' ? data.type : "GET";
                    $ajax.onreadystatechange = function() { if (this.readyState === 4 && this.status === 200) { onSuccess(this.responseText) } else if (this.readyState === 4 && this.status >= 300) { onError(this.responseText) } };
                    $ajax.open(type, url, !0);
                    $ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                    $ajax.send() }

                function getRndInteger(min, max) { return Math.floor(Math.random() * (max - min)) + min }

                function encode(string) {
                    try { string = encodeURI(string.trim()) } catch (e) { string = escape(string.trim()) }
                    return string
                }

                function removeEmojis(str) { return str.replace(/[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff]?/g, '') }

                function getShareableUrls(review) {
                    let cleanContent = removeEmojis(review.review);
                    let desc = (cleanContent.length >= 240) ? cleanContent.slice(0, 240) + '...' : cleanContent;
                    let url = baseUrl + '/share/feedback/' + review.id + '/' + getRndInteger(100000, 999999);
                    let caption = '';
                    if (review.type === 'facebookRecommend') { url += '/2' } else if (review.type !== 'gfs') { url += '/1' } else { url += '/0' }
                    for (let $i = 1; $i <= review.rating; $i++) { caption += 'â˜…' }
                    caption += ' ' + review.author;
                    url = encode(url);
                    desc = encode(desc);
                    caption = encode(caption);
                    return { facebook: 'https://www.facebook.com/sharer.php?display=popup&caption=' + caption + '&u=' + url, twitter: 'https://twitter.com/share?url=' + url + '&text=' + desc + '&hashtags=Review', linkedin: 'https://www.linkedin.com/shareArticle?mini=true&title=' + caption + '&summary=' + desc + '&source=' + baseUrl + '&url=' + url, buffer: 'https://buffer.com/add?text=' + desc + '&url=' + url, }
                }

                function renderReview(order, review) {
                    let template = container.querySelector('.revwid-review-template').innerHTML;
                    let charLimit = config.readMoreLimit;
                    let responsesHtml = '';
                    let responseClass = config.layout === 'horizontal' ? 'revwid-review-full-text' : '';
                    let text = container.querySelector(".revwid-text");
                    forEach(review.responses, function(r) { responsesHtml += '<blockquote class="' + responseClass + '">' + '<span class="revwid-block-quote-author revwid-has-text-weight-bold">' + r.responder + ' - ' + r.date + '</span><p>' + r.content + '</p></blockquote>' });
                    let socialLogo = review.type in socialLogos ? socialLogos[review.type] : !1;
                    let starsHtml = '',
                        googleAttributes = '';
                    if (review.type === 'facebookRecommend') { template = template.replace(/<div class="revwid-review-rating-text">.*<\/div>/, "");
                        socialLogo = 'facebook' in socialLogos ? socialLogos.facebook : !1;
                        starsHtml = '<div class="revwid-is-facebook-rating">' + '<span class="revwid-facebook-tag revwid-is-' + (review.rating > 0 ? 'positive' : 'negative') + '">' + (review.rating > 0 ? text.getAttribute("data-translation-yes") : text.getAttribute("data-translation-no")) + '</span> ' + text.getAttribute("data-translation-recommends") + '</div>' } else {
                        for (let $i = 1; $i <= review.rating; $i++) { starsHtml += '<i class="revwid-icon-star revwid-is-rating-icon"></i> ' }
                        if (Math.round(review.rating) !== review.rating) { starsHtml += '<i class="revwid-icon-star-half revwid-is-rating-icon"></i> ' }
                        for (let $i = review.rating + 1; $i <= 5; $i++) { starsHtml += '<i class="revwid-icon-star-empty revwid-is-rating-icon"></i> ' }
                    }
                    if (!!review.attributes && !!review.attributesPositive) { googleAttributes = '<p class="revwid-google-attributes"><strong>' + (review.attributesPositive === "1" ? text.getAttribute("data-translation-positive") : text.getAttribute("data-translation-critical")) + ':</strong> ' + review.attributes.split(',').map(function(i) { let trans = text.getAttribute("data-translation-" + i.toLowerCase()); return !!trans ? trans : i.charAt(0).toUpperCase() + i.slice(1) }).join(', ') + '</p>' }
                    let socialHtml = socialLogo ? '<div class="revwid-review-source-logo"><img src="' + socialLogo + '" alt="' + review.type + '"></div>' : (review.type === 'gfs' ? '' : '<div class="revwid-review-source-logo"><b>' + review.type + '</b></div>');
                    let shareUrl = getShareableUrls(review);
                    let params = { order: order, id: review.id, stars: starsHtml, rating: review.rating, social_logo: socialHtml, author: review.author, date: review.reviewReceived, review: review.review, responses: responsesHtml, remove_read_mode: "remove-element", share_fb: shareUrl.facebook, share_tt: shareUrl.twitter, share_lk: shareUrl.linkedin, share_bf: shareUrl.buffer, google_attributes: googleAttributes };
                    let isLongReviewText = params.review.length > charLimit;
                    if (isLongReviewText || (config.layout === 'horizontal' && review.responses.length > 0)) { params.review_full = params.review;
                        params.remove_read_mode = ""; if (isLongReviewText) { params.review = params.review.substr(0, charLimit - 50) + '...' } }
                    for (let key in params) { if (params.hasOwnProperty(key)) { template = template.split('{*' + key + '*}').join(params[key]) } }
                    return template
                }

                function renderPagination(total, current) {
                    current = parseInt(current);
                    total = parseInt(total);
                    let holder = container.querySelector('.revwid-pagination-list');
                    let lis = [],
                        available = [];
                    lis.push('<li><a href="javascript:void(0)" aria-label="Previous page" class="revwid-pagination-arrow revwid-is-left-arrow ' + (current === 1 ? 'revwid-is-disabled' : '') + '"><i class="revwid-icon-arrow-left"></i></a></li>');
                    let limit = 4;
                    let limitHalf = parseInt(limit / 2);
                    if (total <= 7) { for (let $i = 1; $i <= total; $i++) { available.push($i) } } else {
                        if (current < limit) {
                            for (let $i = 1; $i <= limit; $i++) { available.push($i) }
                            available.push('...');
                            available.push(total)
                        } else if (current > total - limit) { available.push(1);
                            available.push('...'); for (let $i = total - limit; $i <= total; $i++) { available.push($i) } } else {
                            available.push(1);
                            available.push('...');
                            for (let $i = current - limitHalf; $i <= current + limitHalf; $i++) { available.push($i) }
                            available.push('...');
                            available.push(total)
                        }
                    }
                    forEach(available, function(e) { if (e === '...') { lis.push('<li><span class="revwid-pagination-ellipsis">...</span></li>') } else { lis.push('<li><a href="javascript:void(0)" aria-label="Change page" data-page="' + e + '" class="revwid-pagination-link revwid-has-primary-color ' + (e === current ? 'revwid-is-active' : '') + '">' + e + '</a></li>') } });
                    lis.push('<li><a href="javascript:void(0)" aria-label="Next page" class="revwid-pagination-arrow revwid-is-right-arrow ' + ((current === total || total <= 1) ? 'revwid-is-disabled' : '') + '"><i class="revwid-icon-arrow-right"></i></a></li>');
                    holder.innerHTML = lis.join('')
                }

                function getNoResultsHtml() { let text = container.querySelector(".revwid-text"); let html = "<div class='revwid-has-text-centered'><div class='revwid-box js-box'><div class='revwid-review-content'>";
                    html += text.getAttribute("data-translation-message-no-testimonials") + "<br/><br/>";
                    html += "<a href='" + baseUrl + "/f-" + businessId + "' target='_blank'>" + text.getAttribute("data-translation-message-no-firstReview") + "</a></div></div></div>"; return html }

                function renderReviews(data) {
                    let $order = 1;
                    let pieces = [];
                    forEach(data, function(r) { $order++;
                        pieces.push(renderReview(($order % 2) + 1, r)) });
                    let reviewsCont = container.querySelector('.revwid-reviews');
                    reviewsCont.innerHTML = pieces.length === 0 ? getNoResultsHtml() : pieces.join("");
                    forEach(reviewsCont.querySelectorAll('.remove-element'), function(e) { e.parentNode.removeChild(e) });
                    if (widget.container) { widget.reviews = widget.container.querySelectorAll('.js-review') }
                    if (config.layout === 'horizontal') {
                        if (widget.slideToLast) { widget.slideToLast = !1;
                            widget.carousel.currentIndex = (widget.reviews.length / widget.carousel.reviewsPerSlide) - 1 } else { widget.carousel.currentIndex = 0 }
                        widget.carousel.goToIndex(widget.carousel.currentIndex)
                    }
                    let logos = reviewsCont.querySelectorAll('img');
                    forEach(Array.prototype.slice.call(logos), function(element) {
                        if (config.layout === 'full') { element.addEventListener('load', function() { widget.setReviewContainerProperties() }) }
                        if (config.layout === 'horizontal') { equalizeReviewHeaderHeights() }
                        if (element.complete && config.layout === 'full') { widget.setReviewContainerProperties() }
                    })
                }

                function equalizeReviewHeaderHeights() {
                    if (widget.carousel.reviewsPerSlide > 1) {
                        const chunks = [];
                        const boxesArray = Array.prototype.slice.call(widget.ui.boxes);
                        while (boxesArray.length) { chunks.push(boxesArray.splice(0, widget.carousel.reviewsPerSlide)) }
                        for (let i = 0; i < chunks.length; i++) {
                            const chunk = chunks[i];
                            const headers = [];
                            let maxHeight = -1;
                            for (let j = 0; j < chunk.length; j++) { const header = chunk[j].querySelector('.' + config.cssPrefix + 'review-header');
                                maxHeight = Math.max(maxHeight, header.clientHeight);
                                headers.push(header) }
                            for (let j = 0; j < headers.length; j++) { headers[j].style.height = maxHeight }
                        }
                    }
                }

                function appendStylesheet() { stylesheet = document.createElement('link');
                    stylesheet.setAttribute('rel', 'stylesheet');
                    stylesheet.setAttribute('type', 'text/css');
                    stylesheet.onload = function() { widget.cssLoaded = !0 };
                    stylesheet.setAttribute('href', config.cssPath);
                    document.getElementsByTagName('head')[0].appendChild(stylesheet) }

                function forEach(elements, callable) { for (let i = 0; i < elements.length; i++) { callable(elements[i]) } }

                function live(eventType, elementQuerySelector, cb) {
                    document.addEventListener(eventType, function(event) {
                        let $selector = '[data-unique="' + widget.unique + '"] ' + elementQuerySelector;
                        let qs = document.querySelectorAll($selector);
                        if (qs) {
                            let el = event.target,
                                index = -1;
                            while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) { el = el.parentElement }
                            if (index > -1) { cb.call(el, event) }
                        }
                    })
                }

                function apllyMainParametersToUrl(parameterBag) {
                    if (widget.additionalId) { parameterBag.push('aid=' + widget.additionalId) }
                    if (widget.preview) { parameterBag.push('preview=' + widget.preview) }
                    return parameterBag
                }

                function getMainUrl() { let widgetMainUrlParts = apllyMainParametersToUrl([]); return baseUrl + '/widget/b-' + businessIds + '?' + widgetMainUrlParts.join('&') }
                var getNextSibling = function(elem, selector) {
                    var sibling = elem.nextElementSibling;
                    var attempt = 0;
                    if (!selector) { return sibling }
                    while (sibling && attempt < 10) {
                        if (sibling.matches(selector)) { return sibling }
                        sibling = sibling.nextElementSibling;
                        attempt++
                    }
                };

                function loadAjaxPage(page, getPages) {
                    let orderParts = widget.container.querySelector('[name=revwid-selected-order]').value.split('-'),
                        socials = widget.container.querySelector('[name=revwid-selected-social]');
                    socials = socials ? socials.value : null;
                    let urlParts = [];
                    urlParts.push('order=' + orderParts[0]);
                    urlParts.push('dir=' + orderParts[1]);
                    if (socials !== 'none' && socials !== null && socials !== '') { urlParts.push('socials=' + socials) }
                    if (getPages) { urlParts.push('getPages=' + 1) }
                    urlParts = apllyMainParametersToUrl(urlParts);
                    ajax({
                        url: baseUrl + '/widget/reviews/b-' + businessIds + '/p-' + page + '?' + urlParts.join('&'),
                        success: function(data) {
                            let json = JSON.parse(data);
                            if (getPages) { totalPages = json.reviews.pages }
                            renderReviews(json.reviews.reviews);
                            renderPagination(totalPages, page);
                            widget.setReviewContainerProperties()
                        }
                    })
                }
                appendStylesheet();
                live('click', '.revwid-share-buttons a', function(e) {
                    e.preventDefault();
                    if (this.classList.contains('js-share-icon-close')) { return }
                    let intWidth = '600',
                        intHeight = '400';
                    let dualScreenLeft = window.screenLeft ? window.screenLeft : screen.left;
                    let dualScreenTop = window.screenTop ? window.screenTop : screen.top;
                    let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
                    let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
                    let left = ((width / 2) - (intWidth / 2)) + dualScreenLeft;
                    let top = ((height / 2) - (intHeight / 2)) + dualScreenTop;
                    let strTitle = ((typeof this.getAttribute('title') !== 'undefined') ? this.getAttribute('title') : 'Social Share'),
                        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=yes, top=' + top + ', left=' + left;
                    window.open(this.getAttribute('href'), strTitle, strParam).focus()
                });
                live('click', '.revwid-pagination-link[data-page]', function(e) {
                    if (this.classList.contains('revwid-is-active')) { return }
                    if (config.layout !== 'horizontal') { document.querySelector('div[data-unique="' + widget.unique + '"]').scrollIntoView(!0) }
                    loadAjaxPage(this.dataset.page, !1)
                });
                live('change', '[name="revwid-selected-social"], [name="revwid-selected-order"]', function(e) { loadAjaxPage(1, !0) });
                live('click', '.revwid-pagination .revwid-pagination-arrow', function(e) {
                    let page = parseInt(widget.container.querySelector('.revwid-pagination-link.revwid-is-active').dataset.page);
                    if (this.classList.contains('revwid-is-disabled')) { return }
                    if (this.classList.contains('revwid-is-left-arrow')) { page-- }
                    if (this.classList.contains('revwid-is-right-arrow')) { page++ }
                    if (config.layout !== 'horizontal') { document.querySelector('div[data-unique="' + widget.unique + '"]').scrollIntoView(!0) }
                    loadAjaxPage(page, !1)
                });
                live('click', '[data-share-tools-for]', function(e) { this.classList.toggle(config.cssPrefix + 'is-active');
                    e.preventDefault() });
                live('click', '.js-read-more', function(e) { let id = this.getAttribute('data-review-id'); let selector = '.revwid-review[data-review-id="' + id + '"]';
                    widget.container.querySelector(selector).classList.toggle(config.cssPrefix + 'is-expanded');
                    widget.setReviewContainerProperties();
                    e.preventDefault() });

                function createJsonLdScriptTag(json) { let script = document.createElement("script");
                    script.className = "json-ld-content";
                    script.type = "application/ld+json";
                    script.innerText = json.jsonLd;
                    container.parentNode.appendChild(script) }
                ajax({
                    url: getMainUrl(),
                    success: function(data) {
                        let jsonLd = getNextSibling(container, '.json-ld-content');
                        let json = JSON.parse(data);
                        if (json.baseUrl) { baseUrl = json.baseUrl }
                        if (json.legacy) {
                            container.setAttribute('id', 'e2wget5widget');
                            let script = document.createElement("script");
                            script.id = 'e2wWidgetScript';
                            script.async = !0;
                            script.type = "text/javascript";
                            script.src = 'https://widget.reviewability.com/js/widgetAjax.min.js';
                            script.setAttribute('data-src', baseUrl + '/reviews-mobile.js/' + businessIds + '.0');
                            script.setAttribute('data-jsonld', widget.jsonLd);
                            if (widget.preview) { script.setAttribute('data-preview', 1) }
                            if (widget.additionalId > 0) { script.setAttribute('data-additionalId', widget.additionalId) }
                            container.innerHTML = "";
                            container.appendChild(script)
                        } else {
                            socialLogos = json.socials;
                            try { if (widget.jsonLd == 1 && jsonLd.matches('.json-ld-content')) { jsonLd.innerHTML = json.jsonLd } } catch (e) { createJsonLdScriptTag(json) }
                            initWidget(container, json);
                            totalPages = json.reviews.pages
                        }
                        try { if (widget.jsonLd == 0 && jsonLd.matches('.json-ld-content')) { jsonLd.parentNode.removeChild(jsonLd) } } catch (e) {}
                    }
                })
            })()
        }
        if (!MODULE.initialized) {}
        MODULE.initialized = !0
    }
    return MODULE
};
MODULES.slick = function(APP) {
    var MODULE = {};
    MODULE.default_config = { prevArrow: '<div tab-index="0" data-slick-arrow="prev"><div><i class="fas fa-chevron-left"></i></div></div>', nextArrow: '<div tab-index="0" data-slick-arrow="next"><div><i class="fas fa-chevron-right"></i></div></div>', autoplay: !1, autoplaySpeed: 8000, pauseOnHover: !1, speed: 150, dots: !0, arrows: !0, infinite: !0, fade: !1, swipe: !0, cssEase: 'linear', afterChangeModule: !1, lazyLoadBG: !1, lazyLoad: 'ondemand', autoinit: !0, updateLightboxLink: !1, rows: 0 };
    MODULE.cache = {};
    MODULE.events = { "pjax": { "beforeSend": function(xhr, options) { $.each(MODULE.cache, function(cache_id, obj) { obj = $(obj); var $current = $(".slick-current", obj); if (obj.hasClass("slick-initialized")) { obj.slick('unslick');
                        $("[data-slick-slide]", obj).hide();
                        $current.show() } }) } }, "scroll_debounce": null, "scroll": function() { clearTimeout(MODULE.events.scroll_debounce);
            MODULE.events.scroll_debounce = setTimeout(function() { $.each(MODULE.cache, function(id, $slick) { if (!$slick.paused) { var threshold = $slick.offset().top + $slick.actual('height'); if (APP.viewport.scrollTop > threshold) { if ($slick.hasClass("slick-initialized")) { $slick.slick('slickPause');
                                MODULE.cache[id].paused = !0 } } } }, 500) }) } }
    MODULE.init = function($scope) {
        if (typeof($scope) == "undefined") { $scope = APP.nodes.body }
        var $elements = $("[data-slick]:not([data-module='false'])", $scope);
        $elements.each(function(i, v) {
            var $element = $(this),
                id = $element.data("slick"),
                cache_id = APP.getPage().id + "__" + id,
                $loading = $element.closest("[data-loading-animation='true']"),
                $custom_dots = $("[data-slick-dots='" + id + "']");
            $loading.addClass("loading");
            if ($element.hasClass("slick-initialized")) { $element = MODULE.cache[cache_id];
                $element.slick('unslick').slick('reinit') } else {
                if ($('[data-slick-config="' + id + '"]').length > 0) { var options = JSON.parse($('[data-slick-config="' + id + '"]').html()) } else { var options = {} }
                config = $.extend({}, MODULE.default_config, options);

                function lazyLoad($slide, callback) {
                    if (typeof(callback) == "undefined") { callback = function() {} }
                    if ($slide.attr("data-slick-lazy-loaded") == "false") {
                        var $bg = $slide.find(config.lazyLoadBG),
                            img_id = $bg.data("lazy-load-img"),
                            win_width = APP.viewport.width;
                        $loading.addClass("loading");
                        if ($bg.data("lazy-load-img-width")) { var img_width = $bg.data("lazy-load-img-width") } else {
                            var img_width = 1000;
                            if (win_width > 1000) { img_width = 2000 }
                            if (win_width > 2000) { img_width = 3000 }
                        }
                        var img_url = "/image/" + img_id + "/" + img_width;
                        $.imgpreload(img_url, function() { $bg.css("background-image", 'url(' + img_url + ')');
                            $slide.attr("data-slick-lazy-loaded", "true");
                            $loading.removeClass("loading");
                            APP.nodes.html.removeClass("slick-loading");
                            callback() })
                    }
                }

                function slickInit() {
                    $("[data-slick-slide]", $element).show();
                    $element.on('init', function(slick) { if (config.lazyLoadBG) { var $first = $('[data-slick-lazy-loaded="false"].slick-current', $element).first();
                            lazyLoad($first, function() { $(".slick-dots", $element).on('click', function() { $element.slick('slickPause');
                                    $element.data("paused", !0) }); if (config.autoplay) { APP.thread(function() { $element.slick('slickPlay') }) } }) } else { $(".slick-dots", $element).on('click', function() { $element.slick('slickPause');
                                $element.data("paused", !0) }); if (config.autoplay) { APP.thread(function() { $element.slick('slickPlay') }) } } }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                        if (config.lazyLoadBG) { if (currentSlide !== nextSlide) { var $slide = $(slick.$slides.get(nextSlide)),
                                    $next = $(slick.$slides.get(nextSlide + 1));
                                lazyLoad($slide);
                                lazyLoad($next) } }
                        if ($custom_dots.length > 0) { $custom_dots.find('[data-slick-index]').removeClass("active");
                            $custom_dots.find('[data-slick-index="' + nextSlide + '"]').addClass("active") }
                    }).on('afterChange', function(event, slick, currentSlide) { APP.modules["equal-height"].events.resize(); if (config.updateLightboxLink) { var $update_element = $(config.updateLightboxLink); if ($update_element.length > 0) { var img_id = $("[data-slick-index='" + currentSlide + "']", $element).data("img");
                                $update_element.attr("data-lightbox-open", img_id) } } });
                    $element.slick(config);
                    if (config.autoplay) { $element.slick('slickPause') }
                    $element.paused = !config.autoplay;
                    MODULE.cache[cache_id] = $element;
                    if ($custom_dots.length > 0) { $custom_dots.on('click', '[data-slick-index]', function() { var index = $(this).data("slick-index");
                            $element.slick('slickGoTo', index) }) }
                }
                if (config.autoinit) { slickInit() } else { MODULE.cache[cache_id] = $element }
            }
        })
    };
    return MODULE
};
$.pjax.defaults.timeout = 15000;
$.pjax.defaults.maxCacheLength = 20;
Dropzone.autoDiscover = !1;
var APP = new function() {
    var APP = this;
    APP.modules = {};
    APP.config = $.extend({}, { "use_pjax": !0, "is_testlink": window.location.hostname.indexOf("cybertest.link") !== -1, "site_title": $("title").text(), "cloudfront_distribution_url": !1, "utm_parameters": [] }, ($("#config-json").length > 0 ? JSON.parse($.trim($("#config-json").html())) : {}));
    APP.page = $.extend({}, {}, ($("#page-json").length > 0 ? JSON.parse($.trim($("#page-json").html())) : {}));
    (function() {
        var method;
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = (window.console = window.console || {});
        while (length--) { method = methods[length]; if (!console[method]) { console[method] = noop } }
        if (APP.config.is_testlink) { if (Function.prototype.bind) { window.log = Function.prototype.bind.call(console.log, console) } else { window.log = function() { Function.prototype.apply.call(console.log, console, arguments) } } } else { window.log = noop }
    })();
    APP.nodes = { "window": $(window), "html": $("html"), "body": $("body"), "header": $("header"), "nav": $("nav"), "main": $("main"), "footer": $("footer"), "loading": $("#loading") };
    APP.getPage = function() { return APP.page }
    APP.getPageSEOMetaTitle = function() {
        var metaTitle = APP.page.title;
        if (typeof(APP.page.SEO) != "undefined" && typeof(APP.page.SEO.metaTitle) != "undefined" && $.trim(APP.page.SEO.metaTitle) != "") { metaTitle = $.trim(APP.page.SEO.metaTitle) }
        return metaTitle
    }
    APP.viewport = { width: APP.nodes.window.width(), height: APP.nodes.window.height(), scrollTop: APP.nodes.window.scrollTop(), scrollDirection: "down", scrollbarWidth: 0 };
    APP.breakpoints = { "xxl": 1680, "xl": 1200, "mobile": 1080, "lg": 992, "md": 768, "phone": 640, "sm": 544, "xs": 350 };
    APP.isBreakpoint = function(key) {
        if (typeof(key) == "undefined" || typeof(APP.breakpoints[key]) == "undefined") { console.warn("Invalid key."); return }
        return APP.viewport.width <= APP.breakpoints[key]
    }
    APP.isMobile = function() { return APP.isBreakpoint("mobile") }
    APP.isPhone = function() { return APP.isBreakpoint("phone") }
    APP.iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
    APP.isTouch = Modernizr.touchevents;
    APP.currentlyMobile = APP.isMobile();
    APP.helpers = {
        "objects_are_equal": function(a, b) {
            var aProps = Object.getOwnPropertyNames(a);
            var bProps = Object.getOwnPropertyNames(b);
            if (aProps.length != bProps.length) { return !1 }
            for (var i = 0; i < aProps.length; i++) { var propName = aProps[i]; if (a[propName] !== b[propName]) { return !1 } }
            return !0
        },
        "scrollbar_measure": function() { var scrollDiv = document.createElement("div");
            scrollDiv.className = "scrollbar-measure";
            document.body.appendChild(scrollDiv); var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            APP.viewport.scrollbarWidth = scrollbarWidth; return APP.viewport.scrollbarWidth },
        "set_nav_current_page": function(page_id) { page_id = parseInt(page_id);
            $.each(APP.modules, function(module_name, module) { if (module_name.substr(0, 10) == "navigation") { if (typeof(module.setCurrentPage) == "function") { module.setCurrentPage(page_id) } } }) },
        "set_VH": function(property) {
            if (typeof(property) == "undefined") { var property = "--vh-initial" }
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty(property, vh + "px")
        },
        "element_in_viewport": function($el) { var el = $el[0]; var rect = el.getBoundingClientRect(); return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) },
        "viewport": function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) { a = 'client';
                e = document.documentElement || document.body }
            return { "width": e[a + 'Width'], "height": e[a + 'Height'] }
        },
        "fixed_elements_offset": function() { var offset = $("header").actual('height'); return offset },
        "actual": { "dimension": function(dimension, $element) { var $clone = $element.clone().removeAttr("style").css("opacity", "0");
                $element.before($clone); var output = $clone.actual(dimension);
                $clone.remove(); return output }, "width": function($element) { return APP.helpers.actual.dimension("width", $element) }, "height": function($element) { return APP.helpers.actual.dimension("height", $element) } },
        "observer": {
            "cache": {},
            "create": function($element, id, onCallback, offCallback, options) {
                if (typeof(APP.helpers.observer.cache[id]) == "undefined") {
                    var config = $.extend({}, { debounce: 500, threshold: 0, trackVisibility: !1, delay: 0, rootMargin: "0px 0px 0px 0px", onlyOnce: !1 }, options);
                    var isLeaving = !1,
                        debounce = null;
                    var observer = new IntersectionObserver(function(entries) {
                        entries.forEach(function(entry) {
                            clearTimeout(debounce);
                            if (entry.isIntersecting) {
                                isLeaving = !0;
                                debounce = setTimeout(function() {
                                    $element.addClass("in-viewport");
                                    onCallback(entry);
                                    if (config.onlyOnce) {
                                        try { observer.unobserve(entry.target) } catch (e) {}
                                        if (typeof(APP.helpers.observer.cache[id]) != "undefined") { delete APP.helpers.observer.cache[id] }
                                    }
                                }, config.debounce)
                            } else if (isLeaving) { isLeaving = !1;
                                debounce = setTimeout(function() { $element.removeClass("in-viewport");
                                    offCallback(entry) }, config.debounce) }
                        })
                    }, { threshold: config.threshold, trackVisibility: config.trackVisibility, delay: config.delay, rootMargin: config.rootMargin });
                    if ($element.length > 0) { observer.observe($element[0], function() { APP.helpers.observer.cache[id] = observer }) }
                }
            }
        },
        "property_exists": function(base_object, property_to_find, enforeced_type) {
            if (typeof(base_object) === "undefined") { return !1 }
            if (typeof(property_to_find) === "undefined") { return !1 }
            if (typeof(enforeced_type) === "undefined") { var enforeced_type = !1 }
            if (property_to_find.indexOf("/") === -1) { if (typeof(base_object[property_to_find]) === "undefined") { return !1 } } else {
                var property_split_on_slash = property_to_find.split("/"),
                    path = base_object[property_split_on_slash[0]];
                $.each(property_split_on_slash, function(slash_index, slash_property) {
                    if (slash_index > 0) {
                        if (typeof(path[slash_property]) === "undefined") { return !1 }
                        path = path[slash_property]
                    }
                })
            }
            return !0
        }
    };
    APP.fingerprint = {
        "hash": !1,
        "components": {},
        "history": [],
        "get": {
            "cookie": function() { return Cookies.get(APP.config.cookies.fingerprint) },
            "hash": function() { return APP.fingerprint.hash },
            "components": function() { return APP.fingerprint.components },
            "history": function(encode) {
                if (typeof(encode) == "undefined") { encode = !1 }
                if (encode) { return JSON.stringify(APP.fingerprint.history) }
                return APP.fingerprint.history
            }
        },
        "set": {
            "cookie": function() {
                if (APP.fingerprint.hash) { Cookies.set(APP.config.cookies.fingerprint, APP.fingerprint.hash, { expires: 1825 }); return !0 }
                return !1
            },
            "history": function(options) {
                if (typeof(options) == "undefined") { var options = {} }
                var defaults = { action: "browse", value: window.location.pathname, timestamp: Math.round((new Date()).getTime() / 1000) };
                var config = $.extend(!1, defaults, options),
                    existing_history = APP.fingerprint.get.history();
                if (existing_history.length > 0) { var last = existing_history[existing_history.length - 1]; if (last[0] == window.location.pathname) { return !1 } }
                APP.fingerprint.history.push(config);
                APP.fingerprint.set.localStorage()
            },
            "localStorage": function() { if (typeof(Storage) !== "undefined") { try { window.localStorage.setItem('history', APP.fingerprint.get.history(!0)) } catch (e) { if (e == QUOTA_EXCEEDED_ERR) { APP.fingerprint.history.shift();
                            APP.fingerprint.set.localStorage() } } } }
        },
        "reset": function() { window.localStorage.setItem('history', "[]");
            APP.fingerprint.history = [] },
        "init": function(components) {
            APP.fingerprint.components = components;
            var cookie = APP.fingerprint.get.cookie();
            if (cookie) { APP.fingerprint.hash = cookie } else { APP.fingerprint.hash = Fingerprint2.x64hash128(components.map(function(pair) { return pair.value }).join(), 31);
                APP.fingerprint.set.cookie() }
            if (typeof(Storage) !== "undefined") { var stored_history = window.localStorage.getItem('history'); if (stored_history) { try { APP.fingerprint.history = JSON.parse(stored_history) } catch (e) { log(e) } } }
            APP.fingerprint.set.history();
            return !0
        }
    };
    APP.utm = {
        get: { cookie: function() { return Cookies.get(APP.config.cookies.utm) } },
        set: {
            cookie: function() {
                var existing_data = {};
                try { var cookie = APP.utm.get.cookie(); if (cookie) { existing_data = JSON.parse(cookie) } } catch (e) {}
                var url = new URL(window.location.href),
                    params = new URLSearchParams(url.search);
                var new_data = {};
                try { if (typeof(APP.config.utm_parameters) == "object" && APP.config.utm_parameters.length > 0) { $.each(APP.config.utm_parameters, function(index, param) { if (params.has(param)) { new_data[param] = params.get(param) } }) } } catch (e) {}
                var cookie_data = $.extend({}, existing_data, new_data);
                Cookies.set(APP.config.cookies.utm, JSON.stringify(cookie_data), { expires: 1825 })
            }
        }
    }
    APP.analytics = function() {
        if (typeof(ga) == "function") { ga('set', 'location', window.location.href);
            ga('send', 'pageview') }
        if (typeof(window.report_gtag_page_view) == "function") { report_gtag_page_view() }
    };
    APP.timers = { "resize": null, "is_resizing": null, "is_scrolling": null, "mobile_toggle": null };
    APP.event_state = { "firing": { "scroll": !1, "resize": !1 }, "modules": { "blur": [], "focus": [], "mobile_toggle": [], "orientationchange": [], "popstate": [], "resize": [], "scroll": [], "pjax": { "click": [], "beforeSend": [], "beforeReplace": [], "popstate": [], "end": [], "send": [], "complete": [] }, "loading": { "on": [], "off": [] } } };
    APP.events = {
        "blur": function(event) { $.each(APP.event_state.modules.blur, function(i, module_event) { module_event(event) }) },
        "focus": function(event) { $.each(APP.event_state.modules.focus, function(i, module_event) { module_event(event) }) },
        "orientationchange": function(event) { $.each(APP.event_state.modules.orientationchange, function(i, module_event) { module_event(event) }) },
        "popstate": function(event) { $.each(APP.event_state.modules.popstate, function(i, module_event) { module_event(event) }) },
        "resize": function(event) { clearTimeout(APP.timers.is_resizing);
            APP.nodes.html.addClass("is-resizing");
            APP.event_state.firing.resize = !0;
            clearTimeout(APP.timers.mobile_toggle); var WIDTH = APP.helpers.viewport().width,
                HEIGHT = APP.helpers.viewport().height;
            APP.viewport.width = WIDTH;
            APP.viewport.height = HEIGHT; var m = APP.isMobile();
            APP.nodes.html.toggleClass("mobile", m);
            APP.nodes.html.toggleClass("desktop", !m);
            APP.timers.is_resizing = setTimeout(function() { APP.nodes.html.removeClass("is-resizing");
                APP.event_state.firing.resize = !0 }, 200);
            APP.timers.mobile_toggle = setTimeout(function() { if (APP.currentlyMobile != m) { APP.currentlyMobile = m;
                    $.each(APP.event_state.modules.mobile_toggle, function(i, module_event) { module_event(event) }) } }, 5);
            $.each(APP.event_state.modules.resize, function(i, module_event) { module_event(event) }) },
        "scroll": function(event) { clearTimeout(APP.timers.is_scrolling);
            APP.nodes.html.addClass("is-scrolling");
            APP.event_state.firing.scroll = !0; var st = APP.nodes.window.scrollTop();
            APP.viewport.scrollDirection = st > APP.viewport.scrollTop ? "down" : "up";
            APP.viewport.scrollTop = st;
            APP.nodes.html.toggleClass("window-scrolled", APP.viewport.scrollTop > 0);
            APP.nodes.html.toggleClass("window-at-top", APP.viewport.scrollTop === 0);
            APP.timers.is_scrolling = setTimeout(function() { APP.nodes.html.removeClass("is-scrolling");
                APP.event_state.firing.scroll = !1;
                $.each(APP.event_state.modules.scroll_finished, function(i, module_event) { module_event(event) }) }, 200);
            $.each(APP.event_state.modules.scroll, function(i, module_event) { module_event(event) }) },
        "pjax": {
            "click": function(options) { $.each(APP.event_state.modules.pjax.click, function(i, module_event) { module_event(options) }) },
            "beforeSend": function(xhr, options) {
                if (!APP.pjax.suppress_loading) { APP.loading.on() }
                $.scrollLock(!0);
                $.each(APP.event_state.modules.pjax.beforeSend, function(i, module_event) { module_event(xhr, options) })
            },
            "beforeReplace": function(xhr, contents) { $.each(APP.event_state.modules.pjax.beforeReplace, function(i, module_event) { module_event(xhr, contents) }) },
            "popstate": function(direction) { $.each(APP.event_state.modules.pjax.popstate, function(i, module_event) { module_event(direction) }) },
            "send": function(direction) { $.each(APP.event_state.modules.pjax.send, function(i, module_event) { module_event() }) },
            "complete": function(direction) { APP.pjax.suppress_loading = !1;
                APP.modules.navigation.mobile.close();
                setTimeout(function() { APP.loading.off();
                    $.scrollLock(!1) }, 750);
                $.each(APP.event_state.modules.pjax.complete, function(i, module_event) { module_event(direction) }) },
            "end": function(xhr, options) {
                var scrollTop = 0;
                var anchor = window.location.hash.replace("#", "");
                if (anchor) { var $anchor = $("a[name='" + anchor + "']"); if ($anchor.length > 0) { scrollTop = $anchor.offset().top } }
                $(window).scrollTop(scrollTop);
                $("html, body").scrollTop(scrollTop);
                APP.helpers.set_VH('--vh-initial');
                if ($("#pjax-page-json").length > 0) { var json = $("#pjax-page-json").html() } else { var json = $("#page-json").html() }
                APP.page = JSON.parse($.trim(json));
                if (APP.page.REQUEST_URI != window.location.pathname) { history.replaceState(null, null, APP.page.REQUEST_URI) }
                $('head link[rel="canonical"]').attr("href", window.location.href);
                $('head meta[property="og:url"]').attr("content", window.location.href);
                APP.nodes.body.attr("data-page-id", APP.page.id);
                INITIALIZE_CMS_FUNCTIONS();
                APP.helpers.set_nav_current_page(APP.page.id);
                APP.load_modules();
                $(window).trigger('resize');
                $(window).trigger('scroll');
                APP.analytics();
                APP.fingerprint.set.history();
                $.each(APP.event_state.modules.pjax.end, function(i, module_event) { module_event(xhr, options) })
            }
        },
        "loading": { "on": function() { $.each(APP.event_state.modules.loading.on, function(i, module_event) { module_event() }) }, "off": function() { $.each(APP.event_state.modules.loading.off, function(i, module_event) { module_event() }) } }
    };
    APP.pjax = {
        "suppress_loading": !1,
        "container": "#content",
        "init": function() {
            if (!APP.config.use_pjax) { return !1 }
            $(document).pjax('a[href]:not([data-no-pjax]):not([data-no-pjax] a):not([href^="/file/"]):not([data-form-print] a):not([href="/' + APP.config.popup_form_id + '"])', APP.pjax.container);
            $(document).on('pjax:click', function(options) { APP.events.pjax.click(options) }).on('pjax:error', function(event, xhr, textStatus, errorThrown, options) { options.success(xhr.responseText, status, xhr); return !1 }).on('pjax:beforeSend', function(xhr, options) { APP.events.pjax.beforeSend(xhr, options) }).on('pjax:beforeReplace', function(xhr, contents) { APP.events.pjax.beforeReplace(xhr, contents) }).on('pjax:popstate', function(direction) { APP.events.pjax.popstate(direction) }).on('pjax:end', function(xhr, options) { APP.events.pjax.end(xhr, options) }).on('pjax:send', function(e) { APP.events.pjax.send() }).on('pjax:complete', function() { APP.events.pjax.complete() })
        },
        "manual": function(href, replace) {
            if (href == window.location.pathname) { return !1 }
            if (typeof(replace) == "undefined") { replace = !1 }
            if (APP.config.use_pjax) { $.pjax({ url: href, container: APP.pjax.container, replace: replace }) } else { window.location.href = href }
        },
        "pushState": function(href, metaTitle) {
            if (href == window.location.pathname) { return !1 }
            if (typeof(metaTitle) == "undefined") { metaTitle = APP.getPageSEOMetaTitle() }
            history.pushState(null, metaTitle, href);
            $("head title").text(metaTitle);
            APP.fingerprint.set.history()
        },
        "replaceState": function(href, metaTitle) {
            if (href == window.location.pathname) { return !1 }
            if (typeof(metaTitle) == "undefined") { metaTitle = APP.getPageSEOMetaTitle() }
            history.replaceState(null, metaTitle, href);
            $("head title").text(metaTitle);
            APP.fingerprint.set.history()
        }
    };
    APP.load_modules = function() { $.each(APP.modules, function(name, module) { module.PAGE = APP.page; if (typeof(module.init) != "undefined") { module.init() } }) }
    APP.thread = function(callback, timeout) {
        if (typeof(callback) == "undefined") { callback = function() {} }
        if (typeof(timeout) == "undefined") { timeout = 1 }
        setTimeout(callback, parseInt(timeout))
    };
    APP.colors = {
        "last_random": null,
        "random": function(type, not) {
            if (typeof(type) == "undefined") { type = "class" }
            if (typeof(not) == "undefined") { not = [] }
            var color_keys = Object.keys(APP.config.colors),
                color_key = Math.floor((Math.random() * color_keys.length));
            if (type == "class") {
                var color_class = color_keys[color_key];
                if (color_class == APP.colors.last_random || $.inArray(color_class, not) !== -1) { return APP.colors.random(type, not) }
                APP.colors.last_random = color_class;
                return color_class
            } else if (type == "hex") {
                var color_hex = APP.config.colors[color_keys[color_key]]
                if (color_hex == APP.colors.last_random || $.inArray(color_hex, not) !== -1) { return APP.colors.random(type, not) }
                APP.colors.last_random = color_hex;
                return color_hex
            }
        }
    }
    APP.loading = {
        "speed": 2100,
        "timeout": null,
        "message": function(message) {
            if (typeof(message) == "undefined") { message = "" }
            $("#loading-message", APP.nodes.loading).html(message)
        },
        "on": function(message) {
            if (typeof(message) == "undefined") { message = "" }
            APP.events.loading.on();
            APP.loading.message(message);
            APP.nodes.html.removeClass("loaded").addClass("loading");

            function color() { var color_class = "bg-color-" + APP.colors.random("class", ["white"]); var $logo = $(".logo", APP.nodes.loading); var $background = $("<div />");
                $background.addClass("background " + color_class);
                $logo.append($background);
                setTimeout(function() { $(".background", $logo).last().addClass("animate") }, 100);
                setTimeout(function() { if ($(".background", $logo).length > 3) { $(".background", $logo).first().remove() } }, APP.loading.speed);
                APP.loading.timeout = setTimeout(color, (APP.loading.speed * .5)) }
            APP.loading.timeout = setTimeout(color, 0)
        },
        "off": function() { APP.nodes.html.addClass("loaded").removeClass("loading");
            APP.events.loading.off();
            clearTimeout(APP.loading.timeout) }
    };
    APP.errors = {
        cache: [],
        report: function(error) {
            if ($.inArray(error.message, APP.errors.cache) !== -1) { return }
            APP.errors.cache.push(error.message);
            var error_obj = { name: error.name, message: error.message };
            if (typeof(error.stack) != "undefined") { error_obj.stack = error.stack }
            log(error_obj);
            $.post("/modules/extended/report_error", { "error": error_obj, "fingerprint": APP.fingerprint.get.hash(), "page_id": APP.page.id, "uri": window.location.pathname }, function(response) { log(response) }, 'json')
        }
    };
    APP.init = function() {
        APP.loading.on();
        if ($.browser.msie) { APP.nodes.html.addClass("ie") } else { APP.nodes.html.addClass("not-ie") }
        if ($.browser.safari) { APP.nodes.html.addClass("safari") } else { APP.nodes.html.addClass("not-safari") }
        if ($.browser.mozilla) { APP.nodes.html.addClass("firefox") } else { APP.nodes.html.addClass("not-firefox") }
        if ($.browser.chrome) { APP.nodes.html.addClass("chrome") } else { APP.nodes.html.addClass("not-chrome") }
        APP.helpers.scrollbar_measure();
        APP.nodes.body.on('click', '[data-pjax-suppress-loading]', function(e) { APP.pjax.suppress_loading = !0 });
        APP.helpers.set_VH('--vh-initial');
        var initial_resize_triggered = !1;
        APP.nodes.window.on('resize', function(event) {
            APP.helpers.set_VH('--vh-responsive');
            if (!APP.isTouch) { APP.helpers.set_VH('--vh-initial') }
            APP.events.resize(event);
            initial_resize_triggered = !0
        });
        APP.nodes.window.scroll(function(event) { APP.events.scroll(event) });
        APP.nodes.window.on('orientationchange', function(event) { APP.helpers.set_VH('--vh-initial');
            APP.events.orientationchange(event);
            setTimeout(function() { APP.helpers.set_VH('--vh-initial');
                APP.events.resize() }, 500) });
        window.onpopstate = function(event) { APP.events.popstate(event) };
        APP.nodes.window.on('blur', function(event) { APP.events.blur(event) }).on('focus', function(event) { APP.events.focus(event) });
        APP.nodes.window.on('mousedown', function() { APP.nodes.html.addClass('using-mouse') }).on('keydown', function() { APP.nodes.html.removeClass('using-mouse') });
        if (typeof(window.MODULES) != "undefined") { $.each(window.MODULES, function(name, module) { module = new module(APP);
                APP.modules[name] = module; if (typeof(module.events) != "undefined") { $.each(APP.event_state.modules, function(event_name, contents) { if ($.isArray(contents)) { if (typeof(module.events[event_name]) != "undefined") { APP.event_state.modules[event_name].push(module.events[event_name]) } } else { $.each(contents, function(sub_event_name, sub_contents) { if (typeof(module.events[event_name]) != "undefined" && typeof(module.events[event_name][sub_event_name]) != "undefined") { APP.event_state.modules[event_name][sub_event_name].push(module.events[event_name][sub_event_name]) } }) } }) } });
            APP.load_modules() }
        APP.pjax.init();
        APP.nodes.window.trigger("resize");
        APP.nodes.window.trigger("scroll");
        INITIALIZE_CMS_FUNCTIONS();
        $(document).on('submit', 'form[data-pjax]', function(e) { e.preventDefault();
            $.pjax.submit(e, APP.pjax.container) });
        APP.nodes.window.on('load', function() { APP.nodes.html.addClass("loaded");
            APP.loading.off(); try { APP.utm.set.cookie(); if (window.requestIdleCallback) { requestIdleCallback(function() { Fingerprint2.get(function(components) { APP.fingerprint.init(components) }) }) } else { setTimeout(function() { Fingerprint2.get(function(components) { APP.fingerprint.init(components) }) }, 500) } } catch (e) {} })
    };
    APP.init();
    return APP
}