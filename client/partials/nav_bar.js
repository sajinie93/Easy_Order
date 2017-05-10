/**
 * Created by sajini on 5/10/17.
 */

Template.nav_bar.events({
    'click #login': function (event) {
        event.preventDefault();
        console.log("login mode");
        // Router.go('login');
    },
    'click #login1': function(event){
        event.preventDefault();
        Session.set('nav-toggle','open');
        console.log("user mode");
    },
    'click .close-login': ()=> {
        Session.set('nav-toggle','');
    }
});