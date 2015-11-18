FlowRouter.route('/', {
  name: "home",
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      main: "home",
      nav: "nav"
    });
  }
});

FlowRouter.route('/chatrooms', {
  name: 'chatrooms',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action () {
    BlazeLayout.render('masterLayout', {
      main: 'chatrooms',
      nav: 'nav'
    });
  }
});

FlowRouter.route('/chatrooms/add', {
  name: 'addChatroom',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action () {
    BlazeLayout.render('masterLayout', {
      main: 'addChatroom',
      nav: 'nav'
    });
  }
});

FlowRouter.route('/chatrooms/:roomId', {
  name: 'chatroom',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action () {
    BlazeLayout.render('masterLayout', {
      main: 'chatroom',
      nav: 'nav'
    });
  }
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('masterLayout', {
      main: 'pageNotFound',
      nav: 'nav'
    });
  }
};


//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
