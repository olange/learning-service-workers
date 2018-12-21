function sleep( ms) {
  return new Promise( resolve => setTimeout( resolve, ms));
}

async function* range( min, max, step = 1, delay = undefined) {
  console.log( `core.js › range(${min}, ${max}, ${step}, ${delay}) async generator function started iteration`);
  console.assert( typeof delay === "undefined" || typeof delay === "number",
    `core.js › range() › delay should be either undefined or a number (${delay})`);
  console.assert( typeof min === "number" && typeof max === "number" && typeof step === "number",
    `core.js › range() › min, max and step should numbers (${min}, ${max} and ${step})`);
  console.assert( step != 0, `core.js › To guard against infinite range,
    step should be strictly positive or negative (${step})`);
  if( step > 0) console.assert( min <= max,
    `core.js › range() › When step (${step}) is positive, min (${min}) <= max (${max})`);
  if( step < 0) console.assert( min >= max,
    `core.js › range() › When step (${step}) is negative, min (${min}) >= max (${max})`);

  let i = min;
  for(; step >= 0 ? i <= max : i >= max; i += step) {
    yield i;
    if( delay)
      await sleep( delay);
  }
}

self.onmessage = async (msg) => {
  const data = msg.data;
  console.log( "core.js › Received message", data);
  switch( data.op) {
    case "range":
      let values = [];
      for await (let val of range( ...data.args)) {
        values.push( val);
      }
      self.postMessage( { ...data, result: values });
      break;
    default:
      throw new Error( `Watch your step! Received unknown command ${data.opcode}`);
  }
}