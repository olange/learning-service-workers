self.onmessage = (msg) => {
  const data = msg.data;
  console.log( "worker.js › Received message", data);
  switch( data.op) {
    case "sip":
    case "crunch":
    case "listen":
      self.postMessage( { ...data, result: "ack" });
      break;
    default:
      throw new Error( `Zapit! Received unknown command ${data.op}`);
  }
};