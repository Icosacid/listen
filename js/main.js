document.addEventListener('DOMContentLoaded', function() {

    // App views
    var HomeComponent = {
        template: jQuery('#home-template').html(),
        data: function() {
            return { };
        },
        methods: { },
        mounted: function() { }
    };
    var CommissionsComponent = {
        template: jQuery('#commissions-template').html(),
        data: function() {
            return { }
        }
    };
    var GalleryComponent = {
        template: jQuery('#gallery-template').html(),
        data: function() {
            return { }
        }
    };

    // Custom components
    Vue.component('logo-links', {
        template: jQuery('#logo-links-template').html()
    });

    // App routes
    var routes = [
        { path: '/', component: HomeComponent },
        { path: '/wallpapers', component: WallpapersComponent },
        { path: '/shop', component: ShopComponent },
        { path: '/commissions', component: CommissionsComponent },
        { path: '/gallery', component: GalleryComponent }
    ];

    // Build router
    var router = new VueRouter({
        routes: routes
    });

    var app = new Vue({
        router: router,
        el: '#listen-website',
        data: {
            isOpen: false
        }
    });

});
