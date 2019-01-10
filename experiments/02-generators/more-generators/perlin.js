// Module defines `Perlin` class with public static method `noise()`,
// to generate « Perlin noise » values in 3D-gradient space.
//
// Usage:
//
//   `Perlin.noise( x, y, z)` -> a number in the range -1..+1.
//
// Can also be used to generate them in 1D- or 2D-gradient space,
// just use one or two free coordinates, a let the other(s) fixed.
//
// This is a JavaScript port of Ken Perlin's Java reference implementation
// of « improved noise » (see http://cs.nyu.edu/~perlin/noise/).
//
// (c) 2002 Ken Perlin (Java reference implementation)

class Perlin {
  static get p() {
    return [
      151, 160, 137,  91,  90,  15, 131,  13, 201,  95,  96,  53, 194, 233,
        7, 225, 140,  36, 103,  30,  69, 142,   8,  99,  37, 240,  21,  10,
      23, 190,   6, 148, 247, 120, 234,  75,   0,  26, 197,  62,  94, 252,
      219, 203, 117,  35,  11,  32,  57, 177,  33,  88, 237, 149,  56,  87,
      174,  20, 125, 136, 171, 168,  68, 175,  74, 165,  71, 134, 139,  48,
      27, 166,  77, 146, 158, 231,  83, 111, 229, 122,  60, 211, 133, 230,
      220, 105,  92,  41,  55,  46, 245,  40, 244, 102, 143,  54,  65,  25,
      63, 161,   1, 216,  80,  73, 209,  76, 132, 187, 208,  89,  18, 169,
      200, 196, 135, 130, 116, 188, 159,  86, 164, 100, 109, 198, 173, 186,
        3,  64,  52, 217, 226, 250, 124, 123,   5, 202,  38, 147, 118, 126,
      255,  82,  85, 212, 207, 206,  59, 227,  47,  16,  58,  17, 182, 189,
      28,  42, 223, 183, 170, 213, 119, 248, 152,   2,  44, 154, 163,  70,
      221, 153, 101, 155, 167,  43, 172,   9, 129,  22,  39, 253,  19,  98,
      108, 110,  79, 113, 224, 232, 178, 185, 112, 104, 218, 246,  97, 228,
      251,  34, 242, 193, 238, 210, 144,  12, 191, 179, 162, 241,  81,  51,
      145, 235, 249,  14, 239, 107,  49, 192, 214,  31, 181, 199, 106, 157,
      184,  84, 204, 176, 115, 121,  50,  45, 127,   4, 150, 254, 138, 236,
      205,  93, 222, 114,  67,  29,  24,  72, 243, 141, 128, 195,  78,  66,
      215,  61, 156, 180,
      // Repeat the same 256 values (18 rows of 14 values + 4 = 256 values)
      151, 160, 137,  91,  90,  15, 131,  13, 201,  95,  96,  53, 194, 233,
        7, 225, 140,  36, 103,  30,  69, 142,   8,  99,  37, 240,  21,  10,
      23, 190,   6, 148, 247, 120, 234,  75,   0,  26, 197,  62,  94, 252,
      219, 203, 117,  35,  11,  32,  57, 177,  33,  88, 237, 149,  56,  87,
      174,  20, 125, 136, 171, 168,  68, 175,  74, 165,  71, 134, 139,  48,
      27, 166,  77, 146, 158, 231,  83, 111, 229, 122,  60, 211, 133, 230,
      220, 105,  92,  41,  55,  46, 245,  40, 244, 102, 143,  54,  65,  25,
      63, 161,   1, 216,  80,  73, 209,  76, 132, 187, 208,  89,  18, 169,
      200, 196, 135, 130, 116, 188, 159,  86, 164, 100, 109, 198, 173, 186,
        3,  64,  52, 217, 226, 250, 124, 123,   5, 202,  38, 147, 118, 126,
      255,  82,  85, 212, 207, 206,  59, 227,  47,  16,  58,  17, 182, 189,
      28,  42, 223, 183, 170, 213, 119, 248, 152,   2,  44, 154, 163,  70,
      221, 153, 101, 155, 167,  43, 172,   9, 129,  22,  39, 253,  19,  98,
      108, 110,  79, 113, 224, 232, 178, 185, 112, 104, 218, 246,  97, 228,
      251,  34, 242, 193, 238, 210, 144,  12, 191, 179, 162, 241,  81,  51,
      145, 235, 249,  14, 239, 107,  49, 192, 214,  31, 181, 199, 106, 157,
      184,  84, 204, 176, 115, 121,  50,  45, 127,   4, 150, 254, 138, 236,
      205,  93, 222, 114,  67,  29,  24,  72, 243, 141, 128, 195,  78,  66,
      215,  61, 156, 180
    ];
  }

  // Returns a number in the range [ -1..+1 ].
  static noise( x, y, z) {
    // Find unit cube that contains point
    const X = Math.floor( x) & 255,
          Y = Math.floor( y) & 255,
          Z = Math.floor( z) & 255;

    // Find relative X,Y,Z of point in cub
    x -= Math.floor( x);
    y -= Math.floor( y);
    z -= Math.floor( z);

    // Compute fade curves for each of X,Y,Z
    const u = Perlin.fade( x),
          v = Perlin.fade( y),
          w = Perlin.fade( z);

    // Hash coordinates of the 8 cube corners…
    const A = Perlin.p[ X  ] + Y, AA = Perlin.p[ A] + Z, AB = Perlin.p[ A+1] + Z,
          B = Perlin.p[ X+1] + Y, BA = Perlin.p[ B] + Z, BB = Perlin.p[ B+1] + Z;

    // … and add blended results from 8 corners of cube
    const result =
      Perlin.lerp( w,
        Perlin.lerp( v,
          Perlin.lerp( u, Perlin.grad( Perlin.p[ AA  ], x  , y  , z  ),
                          Perlin.grad( Perlin.p[ BA  ], x-1, y  , z  )),
          Perlin.lerp( u, Perlin.grad( Perlin.p[ AB  ], x  , y-1, z  ),
                          Perlin.grad( Perlin.p[ BB  ], x-1, y-1, z  ))),
        Perlin.lerp( v,
          Perlin.lerp( u, Perlin.grad( Perlin.p[ AA+1], x  , y  , z-1),
                          Perlin.grad( Perlin.p[ BA+1], x-1, y  , z-1)),
          Perlin.lerp( u, Perlin.grad( Perlin.p[ AB+1], x  , y-1, z-1),
                          Perlin.grad( Perlin.p[ BB+1], x-1, y-1, z-1)))
      );
    return result;
  }

  static fade( t) {
    const result = t * t * t * ( t * ( t * 6 - 15) + 10);
    return result;
  }

  static lerp( t, a, b) {
    const result = a + t * (b - a);
    return result;
  }

  static grad( hash, x, y, z) {
    // Convert lo 4 bits of hash code into 12 gradient directions.
    const h = hash & 15;
    const u = h < 8 ? x : y,
          v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    const result =
            (( h & 1) === 0 ? u : -u)
          + (( h & 2) === 0 ? v : -v);
    return result;
  }
}

// eof