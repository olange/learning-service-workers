self.onmessage = (msg) => {
  console.log( "worker.js › Received message", msg.data);
  self.postMessage( { ack: msg.data });
};