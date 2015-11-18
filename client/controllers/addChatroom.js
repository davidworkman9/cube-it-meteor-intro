Template.addChatroom.events({
  submit (e, tmpl) {
    e.preventDefault();
    const description = tmpl.$('#description').val().trim() || '';
    const name = tmpl.$('#name').val().trim() || '';

    if (!name)
      return alert('Name required!');

    const id = Chatrooms.insert({
      description,
      name
    });

    FlowRouter.go('/chatrooms/' + id);
  }
});
