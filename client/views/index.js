if(Meteor.isClient) {
    Meteor.startup(function() {
        TAPi18n.setLanguage("fr"); /// Default language

        $(function() {
            $("[data-lang]").click(function(e) {
                var lang = $(this).data("lang");
                TAPi18n.setLanguage(lang);
            });
        });
    })
}