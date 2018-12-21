self.onmessage = (msg) => {
  const data = msg.data;
  console.log( "worker.js › Received message", data);
  switch( typeof data.opcode) {
    case "undefined":
      throw new Error( `Spook! Received unknown command ${data.opcode}`);
      break;
    default:
      self.postMessage( { ack: data });
      break;
  }
};