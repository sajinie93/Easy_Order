/**
 * Created by sajini on 5/10/17.
 */
const myLogoutFunc = function () {
  Session.set('nav-toggle','');
  Router.go('/');
};

AccountsTemplates.configure({
    onLogoutHook: myLogoutFunc
});

AccountsTemplates.addFields([
    {
        _id: 'userName',
        type: 'text',
        required: true,
        re: /(?=.*[a-z])(?=.*[A-Z])/,
        errStr: '1 lowercase and 1 uppercase',
    },{
        _id:'role',
        type: 'select',
        displayName: 'Role',
        select: [
            {
                text: 'Admin',
                value: 'admin'
            },{
                text: 'Cashier',
                value: 'cashier'
            }
        ]
    }]);
