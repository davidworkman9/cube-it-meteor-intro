// publish chat room messages filtered by chat room
Meteor.publish('chatroomMessages', function (id) {
  if (!this.userId)
    return this.ready();
  check(id, String);
  return ChatMessages.find({ chatroom: id });
});

// publish all chat rooms
Meteor.publish('chatrooms', function () {
  if (!this.userId)
    return this.ready();
  return Chatrooms.find();
});

// Publish all users
Meteor.publish(null, function () {
  if (!this.userId)
    return this.ready();
  return Meteor.users.find({}, { fields: { profile:1, emails:1 } });
});