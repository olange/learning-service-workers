importScripts( "./perlin.js");

function sleep( ms) {
  return new Promise( resolve => setTimeout( resolve, ms));
}

async function* range( min, max, step = 1, delay = undefined) {
  console.log( `worker.js › range(${min}, ${max}, ${step}, ${delay}) async generator function started iterating`);

  console.assert( typeof delay === "undefined" || typeof delay === "number",
    `worker.js › range() › delay should be either undefined or a number (${delay})`);
  console.assert( typeof min === "number" && typeof max === "number" && typeof step === "number",
    `worker.js › range() › min, max and step should numbers (${min}, ${max} and ${step})`);
  console.assert( step != 0, `worker.js › range() › To guard against infinite range,
    step should be strictly positive or negative (${step})`);
  if( step > 0) console.assert( min <= max,
    `worker.js › range() › When step (${step}) is positive, min (${min}) <= max (${max})`);
  if( step < 0) console.assert( min >= max,
    `worker.js › range() › When step (${step}) is negative, min (${min}) >= max (${max})`);

  let i = min;
  for(; step >= 0 ? i <= max : i >= max; i += step) {
    yield i;
    if( delay)
      await sleep( delay);
  }
}

async function* helix( radius = 1, height = 1, steps = 24, start = 0, end = 2 * Math.PI, delay = undefined) {
  console.log( `worker.js › helix(${radius}, ${height}, ${steps}, ${start}, ${end}, ${delay}) async generator function started iterating`);

  console.assert( typeof delay === "undefined" || typeof delay === "number",
    `worker.js › helix() › delay should be either undefined or a number (${delay})`);
  console.assert( typeof radius === "number" && typeof height === "number",
    `worker.js › helix() › radius and height should numbers (${radius}, ${height})`);
  console.assert( typeof steps === "number" && typeof start === "number" && typeof end === "number",
    `worker.js › helix() › steps, start and end should numbers (${steps}, ${start} and ${end})`);

  const incrAngle = (end - start) / steps;
  const incrHeight = height / steps;
  let a = start;
  let h = 0;
  for( let i = 0; i <= steps; i++) {
    yield [ Math.cos( a) * radius, Math.sin( a) * radius, h ];
    if( delay) await sleep( delay);
    h += incrHeight;
    a += incrAngle
  }
}

async function* felix( min, max, step = 1, delay = undefined) {
  for await( let val of range( ...arguments)) {
    yield [ val, val, val ];
  }
}

async function* zelig( min, max, step = 1, delay = undefined) {
  for await( let val of range( min, max, step * 2, delay)) {
    yield [ val, val + step ];
  }
}

async function* noiseMatrix( min, max, step = 1, delay = undefined) {
  for await( let y of range( min, max, step, delay)) {
    let row = [];
    for await( let x of range( min, max, step, 0)) {
      row.push( Perlin.noise( x, y, 0));
    }
    yield row;
  }
}

self.onmessage = async (msg) => {
  const data = msg.data;
  console.log( "worker.js › Received message", data);
  switch( data.op) {
    case "sip":
    case "crunch":
    case "listen":
      self.postMessage( { ...data, result: "ack" });
      break;
    case "helix": {
      let values = [];
      for await (let val of helix( ...data.args)) {
        values.push( val);
      }
      self.postMessage( { ...data, result: values });
      break;
    }
    case "felix": {
      let values = [];
      for await (let val of felix( ...data.args)) {
        values.push( val);
      }
      self.postMessage( { ...data, result: values });
      break;
    }
    case "zelig": {
      let values = [];
      for await (let val of zelig( ...data.args)) {
        values.push( val);
      }
      self.postMessage( { ...data, result: values });
      break;
    }
    case "noise": {
      let values = [];
      for await (let val of noiseMatrix( ...data.args)) {
        values.push( val);
      }
      self.postMessage( { ...data, result: values });
      break;
    }
    default:
      throw new Error( `Zapit! Received unknown command ${data.opcode}`);
  }
};