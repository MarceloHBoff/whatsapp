import socketio from 'socket.io';
import { Server } from 'http';

import Message from './models/Message';

interface Connections {
  id: string;
  userId: number;
}

interface MessageData {
  to: Connections;
  messageType: string;
  messageData: Message;
}

let io: SocketIO.Server;
const connections: Connections[] = [];

export function setupWebSocket(server: Server): void {
  io = socketio(server);

  io.on('connection', socket => {
    const { userId } = socket.handshake.query;

    const findUserIdIndex = connections.findIndex(
      connection => connection.userId === Number(userId),
    );

    if (findUserIdIndex >= 0) connections.splice(findUserIdIndex, 1);

    connections.push({
      id: socket.id,
      userId: Number(userId),
    });
  });
}

export function findConnection(userId: number): Connections | null {
  return connections.find(connection => connection.userId === userId) || null;
}

export function sendMessage({
  to,
  messageType,
  messageData,
}: MessageData): void {
  io.to(to.id).emit(messageType, messageData);
}
