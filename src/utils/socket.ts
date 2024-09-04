export function configureSocket() {
  const socket = new WebSocket('wss://test.dev-relabs.ru/event');

  socket.onopen = () => {
    console.log('open');
  };

  socket.onclose = () => {
    console.log('close');
  };
  return socket;
}
