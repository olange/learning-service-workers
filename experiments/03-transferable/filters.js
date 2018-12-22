function none() {}

function swap( imageData) {
  const { data: d } = imageData;
  for( let i = 0; i < d.length; i += 4) {
    const [ r, g, b] = [ d[ i], d[ i + 1], d[ i + 2]];
    [ d[ i], d[ i + 1], d[ i + 2]] = [ g, b, r ];
  }
};

function grayscale( imageData) {
  const { data: d } = imageData;
  for( let i = 0; i < d.length; i += 4) {
    const [ r, g, b] = [ d[ i], d[ i + 1], d[ i + 2]];

    // CIE luminance for the RGB
    // The human eye is bad at seeing red and blue, so we de-emphasize them.
    d[ i] = d[ i + 1] = d[ i + 2] = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
};

function brighten( imageData) {
  const { data: d } = imageData;
  for( let i = 0; i < d.length; ++i) {
    d[ i] *= 1.15;
  }
};