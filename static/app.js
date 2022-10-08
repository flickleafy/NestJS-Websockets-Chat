const Vue = window.Vue;

new Vue({
  el: '#app',
  data: {
    message: '',
    messages: [],
    socket: null,
  },
  created() {
    this.socket = io('https://y7uku.sse.codesandbox.io');
    this.socket.on('msgToClient', message => this.onMessageReceived(message));
  },
  methods: {
    sendMessage() {
      const trimmedMessage = this.message.trim();

      if (trimmedMessage.length) {
        this.socket.emit('msgToServer', trimmedMessage);
        this.message = '';
      }
    },

    onMessageReceived(message) {
      this.messages.push(message);
    },
  },
});
