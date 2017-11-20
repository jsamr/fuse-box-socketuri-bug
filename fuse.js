const { FuseBox, WebIndexPlugin } = require("fuse-box");

const port = 8888
const socketURI = `ws://localhost:${port}`

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    plugins: [
      WebIndexPlugin({
          path: '.'
      })
    ]
});

fuse.bundle("app")
    .instructions(`>index.ts`)
    .watch()
    .hmr({ socketURI });

fuse.dev({
    root: "dist",
    port
})

fuse.run();
