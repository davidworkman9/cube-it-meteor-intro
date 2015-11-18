Template.chatroom.onCreated(function () {
  this.subscribe('chatroomMessages', FlowRouter.getParam('roomId'));
});

Template.chatroom.helpers({
  roomId () {
    return FlowRouter.getParam('roomId');
  }
});

Template.chatMessages.helpers({
  getUserEmail () {
    const user = Meteor.users.findOne({ _id: this.userId });
    if (!user)
      return 'Unknown';
    return user.emails[0].address;
  },
  messages () {
    return ChatMessages.find({
       chatroom: this.roomId
    });
  }
});


Template.messageForm.events({
  keypress (e, tmpl) {
    if (e.shiftKey || e.keyCode !== 13)
      return;
    e.preventDefault();

    const $msg =  tmpl.$('#message');
    const message = $msg.val().trim();
    $msg.val('');

    // if the message is blank don't insert it
    if (!message)
      return;

    ChatMessages.insert({ message,
      userId: Meteor.userId(),
      chatroom: FlowRouter.getParam('roomId') });
  }
});