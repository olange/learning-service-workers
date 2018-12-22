importScripts( "filters.js");

const filters = {
  "none": none,
  "grayscale": grayscale,
  "brighten": brighten,
  "swap": swap
}

self.onmessage = (msg) => {
  const data = msg.data;
  console.log( "worker.js › Received message", data);
  switch( data.op) {
    case "sip":
    case "crunch":
    case "listen": {
      self.postMessage( { ...data, result: "ack" });
      break;
    }
    case "filter": {
      const { canvas, filter } = data.args;
      console.assert( typeof filters[ filter] == "function",
        `worker.js › No filter available by the name ${filter}`);
      const imageData = data.imageDataByRef;
      filters[ filter]( imageData);
      self.postMessage(
        { op: data.op, args: data.args, result: imageData },
        // This extra-argument specifies the Transferable object
        // that will be passed out of the worker with zero-copy
        [ imageData.data.buffer ]);
      break;
    }
    default:
      throw new Error( `Zapit! Received unknown command ${data.op}`);
  }
};