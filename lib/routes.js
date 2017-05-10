/**
 * Created by sajini on 5/1/17.
 */

// Router.route('/ss', {
//     name: 'homee',
//     onBeforeAction: function () {
//         // $('body').addClass("hold-transition login-page");
//         $('head').html('<meta charset="utf-8">');
//         $('head').append('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
//         // <!-- Tell the browser to be responsive to screen width -->
//         $('head').append('<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">');
//         // // <!-- Bootstrap 3.3.6 -->
//         // $('head').append('<link rel="stylesheet" href="/welcome/css/bootstrap.min.css">');
//         // $('head').append('<link rel="stylesheet" href="/welcome/css/landing-page.css">');
//         // // <!-- Font Awesome -->
//         // $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');
//         // // <!-- Ionicons -->
//         // $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">');
//
//         this.next();
//     },
//     action(params) {
//         BlazeLayout.render('master', {body: 'signIn'});
//     }
// });

Router.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

Router.route('/login', {
    name: 'login',
    onBeforeAction: function () {
        $('body').addClass("hold-transition login-page");
        $('head').html('<meta charset="utf-8">');
        $('head').append('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
        // <!-- Tell the browser to be responsive to screen width -->
        $('head').append('<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">');
        // <!-- Bootstrap 3.3.6 -->
        $('head').append('<link rel="stylesheet" href="/admin/bootstrap/css/bootstrap.min.css">');
        // <!-- Font Awesome -->
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">');
        // <!-- Ionicons -->
        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">');
        // <!-- Theme style -->
        $('head').append('<link rel="stylesheet" href="/admin/dist/css/AdminLTE.min.css">');
        // <!-- AdminLTE Skins. -->
        $('head').append('<link rel="stylesheet" href="/admin/dist/css/skins/skin-yellow.min.css">');
        // <!-- iCheck -->
        $('head').append('<link rel="stylesheet" href="/admin/plugins/iCheck/flat/blue.css">');
        // <!-- Morris chart -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/morris/morris.css">');
        // <!-- jvectormap -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/jvectormap/jquery-jvectormap-1.2.2.css">');
        // <!-- Date Picker -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/datepicker/datepicker3.css">');
        // <!-- Daterange picker -->
        // $('head').append('<link rel="stylesheet" href="/admin/plugins/daterangepicker/daterangepicker.css">')
        this.next();
    },
    onStop: function () {
        $('body').removeClass("hold-transition login-page");
    },
    action(params) {
        BlazeLayout.render('HomeLayout', {body: 'signup'});
    }
});