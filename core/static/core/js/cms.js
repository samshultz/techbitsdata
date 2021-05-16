var CMS = {};
var CENTRAL_CORE_URL = window.location.host.substr(-4) == ".dev" ? "https://centralcore.dev" : "https://assets.cms.cybernautic.com";
var INITIALIZE_CMS_FUNCTIONS = function($scope) {
    if (typeof($scope) == "undefined") { $scope = $("html"); }
    $.getScript(CENTRAL_CORE_URL + "/latest/assets/js/cms-frontend-framework.js", function() {
        new CMSFrontendFramework(function(HELPERS) {
            jQuery.extend(CMS, HELPERS);
            CMS.externalLinks();
            $('#cms-draft-indicator').remove();
            if (CMS.page.draft) { $("body").prepend('<div id="cms-draft-indicator" style="position: fixed;top: 5px;left: 5px;background: rgba(255,0,0,0.3);padding: 8px 16px;font-style: italic;color: #fff;text-shadow: 1px 1px 1px rgba(0,0,0,0.2);z-index: 9999999;">Draft</div>'); }
        });
    });
};