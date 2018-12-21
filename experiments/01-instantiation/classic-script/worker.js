self.onmessage = (msg) => {
  const data = msg.data;
  console.log( "worker.js › Received message", data);
  switch( typeof data.op) {
    case "undefined":
      throw new Error( `Holy Mönch! Received unknown command (${data.op})`);
    default:
      self.postMessage( { ...data, result: "ack" });
      break;
  }
};