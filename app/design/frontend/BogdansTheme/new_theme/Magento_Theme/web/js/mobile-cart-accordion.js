define([
    "matchMedia", "jquery", "mage/collapsible"
], function ( mediaCheck,$) {
    "use strict";
    console.log("1234 - mediaCheck");
    mediaCheck({
        media: '(min-width: 768px)',
        entry: function () {
            $(".table-wrapper").collapsible();
        },
        exit: function () {
            $(".table-wrapper").collapsible("destroy");
        }
    });
});
