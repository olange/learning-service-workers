self.onmessage = (msg) => {
  const data = msg.data;
  console.log( "worker.js › Received message", data);
  switch( typeof data.opcode) {
    case "undefined":
      throw new Error( `Holy cow! Received unknown command ${data.opcode}`);
    default:
      self.postMessage( { ack: msg.data });
      break;
  }
};