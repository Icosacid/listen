var ShopComponent = {
    template: jQuery('#shop-template').html(),
    data: function() {
        return {
            articles: []
        }
    },
    methods: { },
    mounted: function() {
        var self = this;

        // Get all articles from data
        jQuery
            .get("data/articles.xml", {})
            .done(function(data) {
                var articles = [];

                Array.prototype.slice.call(data.children[0].children).forEach(function(a) {
                    articles.push({
                        title: a.getElementsByTagName('title')[0].innerHTML,
                        src: a.getElementsByTagName('image')[0].innerHTML,
                        previewSrc: a.getElementsByTagName('preview')[0].innerHTML,
                        description: a.getElementsByTagName('description')[0].innerHTML,
                        price: a.getElementsByTagName('price')[0].innerHTML
                    });
                });

                self.articles = articles;
            });
    }
};