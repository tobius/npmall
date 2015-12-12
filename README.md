
# npmall

Get a list of all public NPM package names.

I needed to pull a list of all of the npm package names and I needed it to be
faster than `npm search`. This pulls the JSON down from npmjs.org and stores
it in `/tmp` for future reuse.

In the future I'll add file rolling and time diff setting controls.

## Setup

```
[~] npm install -g npmall
```

## CLI Usage

```
[~] npmall
```

## Node Usage

```
var npmall = require('npmall');
console.log(npmall());
```

## License

MIT

