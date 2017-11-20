# Fusebox socketURI bug

In this example, one would expect `socketURI` to match `fuse.dev({ port: 8888 })` automatically, i.e. `ws://localhost:8888/`.
This is not happening and the user agent throws errors regarding the connection to `ws://localhost:4444/`.

To confirm, just checkout the revision in which `socketURI` is set explicitly:

```
git checkout tags/socketURI
```
