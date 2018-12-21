self.onmessage = (msg) => {
  const data = msg.data;
  console.log( "worker.js › Received message", data);
  switch( data.op) {
    case "sip":
    case "crunch":
    case "listen":
      self.postMessage( { ...data, result: "ack" });
      break;
    case "range":
      let subworker = new Worker( "core.js");
      subworker.postMessage( data);
      subworker.onmessage = (msg) => {
        const subworkerData = msg.data;
        console.log( "worker.js › Received message from subworker", subworkerData);
        self.postMessage( { ...data, result: subworkerData.result });
        subworker.terminate();
      };
      break;
    default:
      throw new Error( `Wide Ocean! Received unknown command ${data.opcode}`);
  }
};