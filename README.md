# ktx2-parse

*KTX 2.0 (.ktx2) parser and serializer.*

## Quickstart

```
npm install --save ktx2-parse
```

```js
const fs = require('fs');
const { read, write } = require('ktx2-parse');

// Read data.
const inData = fs.readFileSync('./input.ktx2'); // (a) Node.js
const inData = await fetch('./input.ktx2') // (b) Web
    .then((r) => r.arrayBuffer())
    .then((buffer) => new Uint8Array(buffer));

// Parse.
const container = read(inData);

// Serialize.
const outData = write(container); // → Uint8Array
```

## API

TODO

## Encoding / Decoding

This library reads/writes KTX 2.0 containers, and provides access to the compressed texture data within the container. To decompress that data, or to compress existing texture data into GPU texture formats used by KTX 2.0, you'll need to use additional libraries, described below.