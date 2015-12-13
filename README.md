
# npmall

Get a list of all of the public NPM package names.

If you need to get a list of all of the public NPM package names and don't want
to wait for `npm search` to time out then you may find this package useful.

## Setup

```
[~] npm install -g npmall
```

## CLI Usage

Returns names

```
[~] npmall
[~] npmall express
[~] npmall express-*
```

## Node Usage

Returns objects

```
var npmall = require('npmall');
var packages = npmall();
```

## License

MIT

