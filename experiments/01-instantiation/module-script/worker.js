self.onmessage = (msg) => {
  const data = msg.data;
  console.log( "worker.js › Received message", data);
  switch( typeof data.op) {
    case "undefined":
      throw new Error( `Barking Pumpkin! Received unknown command (${data.op})`);
      break;
    default:
      self.postMessage( { ...data, result: "ack" });
      break;
  }
};