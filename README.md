# demo-nodejs-app

To build:
```
docker build -t demo-na-dev .
```

To run:
```
docker run --rm -it --init -p 8080:8080 -v $(pwd):/app demo-na-dev bash
```

To run lint:
```
npm run pretest -s
```

To fix lint issues:
```
npm run pretest -- --fix
```

To test:
```
npm test
```

To build using Prod Dockerfile:
```
docker build -f prod.Dockerfile -t demo-na-prod .
```

To run Prod version:
```
docker run --rm -it --init -p 9090:8080 demo-na-prod
```

TODO - Javascript starter kit

- [ ] .editorconfig
- [x] Security check / npm install -g nsp / nsp check
- [ ] a way to share WIP
- [x] Transpiler? Babel? Typescript?
- [ ] Bundles - webpack? parcel?
- [ ] Sourcemap for debug
- [x] ESLint - consider presets to start with
- [ ] use eslint-watch
- [x] unit test framework / jest - react / mocha / karma
- [ ] headless / DOM Testing / unit testing
- [ ] HTTP clients / testing
- [ ] testing - enzyme for react
