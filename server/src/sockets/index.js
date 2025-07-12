// Socket.io setup for real-time chat (stub)
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    // Add chat event handlers here
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
