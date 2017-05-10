// /**
//  * Created by sajini on 4/26/17.
//  */
//
// if(Meteor.isClient){
//     Template.signIn.events({
//         'submit form': function (event, template) {
//             event.preventDefault();
//             var emailVar = template.find('#email').value;
//             var passwordVar = template.find('#password').value;
//             console.log('form submitted');
//             Accounts.createUser({
//                 email : emailVar,
//                 password : passwordVar
//             })
//         },
//         'click .close-login': ()=> {
//             Session.set('nav-toggle','');
//         }
//     });
//
//     Template.welcome.events({
//         'click #login': function (event) {
//             event.preventDefault();
//             console.log("login mode");
//             // Router.go('login');
//         },
//         'click #user': function(event){
//             event.preventDefault();
//             Session.set('nav-toggle','open');
//             console.log("user mode");
//         },
//         'click .close-login': ()=> {
//             Session.set('nav-toggle','');
//         }
//     });
//
//
//
//
// }
