var WallpapersComponent = {
    template: jQuery('#wallpapers-template').html(),
    data: function() {
        return {
            wallpapers: []
        }
    },
    methods: { },
    mounted: function() {
        var self = this;

        // Get all wallpapers from data
        jQuery
            .get("data/wallpapers.xml", {})
            .done(function(data) {
                var wallpapers = [];

                // Get <wallpapers>'s <wallpaper>s
                Array.prototype.slice.call(data.children[0].children).forEach(function(w) {
                    wallpapers.push({
                        title: w.getElementsByTagName('title')[0].innerHTML,
                        src: w.getElementsByTagName('image')[0].innerHTML,
                        previewSrc: w.getElementsByTagName('preview')[0].innerHTML,
                        description: w.getElementsByTagName('description')[0].innerHTML,
                        price: w.getElementsByTagName('price')[0].innerHTML
                    });
                });

                self.wallpapers = wallpapers;
            });
    }
};