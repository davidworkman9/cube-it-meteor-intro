Template.chatrooms.onCreated(function () {
  this.subscribe('chatrooms');
});


Template.chatroomsList.helpers({
  chatrooms () {
    return Chatrooms.find();
  }
});