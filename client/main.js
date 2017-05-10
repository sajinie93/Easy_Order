import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor'

import './main.html';

Template.HomeLayout.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('users');
    })
});

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.sajinie.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('category');
        self.subscribe('categories');
    })
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.body.events({
    'click .logout': ()=>{
        Meteor.logout();
    }
});

Template.sajinie.helpers({
    // console.log(Category.find());
    users: ()=>{
        console.log("error");
        // return Categories.find();
        return Meteor.users.find();


    }
});

Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});




Meteor.startup(function () {
    // <!-- jQuery 2.2.3 -->
    $.getScript("/admin/plugins/jQuery/jquery-2.2.3.min.js");


    $.getScript("/admin/plugins/jQueryUI/jquery-ui.js/jquery-ui.min.js");

    //
    // // <!-- jQuery UI 1.11.4 -->
    // $.getScript("https://code.jquery.com/ui/1.11.4/jquery-ui.min.js");

    // <!-- Bootstrap 3.3.6 -->
    $.getScript("/admin/bootstrap/js/bootstrap.min.js");


    // $.getScript("/admin/plugins/daterangepicker/daterangepicker.js");
    // // <!-- datepicker -->
    // $.getScript("/admin/plugins/datepicker/bootstrap-datepicker.js");
    // // <!-- Slimscroll -->
    // $.getScript("/admin/plugins/slimScroll/jquery.slimscroll.min.js");
    // // <!-- FastClick -->
    // $.getScript("/admin/plugins/fastclick/fastclick.js");
    // // <!-- AdminLTE App -->
    $.getScript("/admin/dist/js/app.min.js");
});
