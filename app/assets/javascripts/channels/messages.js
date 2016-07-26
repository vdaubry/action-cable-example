App.messages = App.cable.subscriptions.create({channel: 'MessagesChannel', chatroom_id: document.URL.split("/")[document.URL.split("/").length-1]} , {  
  received: function(data) {
    $("#messages").removeClass('hidden')
    return $('#messages').append(this.renderMessage(data));
  },

  renderMessage: function(data) {
    return "<tr><td>" + data.message + " </td><td>" + data.user + "</td></tr>";
  }
});