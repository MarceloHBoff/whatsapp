import { MessageDTO } from './../store/modules/messages/types';
import socketio from 'socket.io-client';

const socket = socketio('http://localhost:3333/', { autoConnect: false });

export function connect(userId: number) {
  socket.io.opts.query = {
    userId,
  };

  socket.connect();
}

export function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

interface SubscriptionFunction {
  (message: MessageDTO): void;
}

export function subscribeNewMessage(subscribeFunction: SubscriptionFunction) {
  socket.on('newMessage', subscribeFunction);
}

export default socket;
