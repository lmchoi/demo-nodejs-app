# demo-nodejs-app

To build:
```
docker build -t demo-na-dev .
```

To run:
```
docker run --rm -it --init -p 8080:8080 -v $(pwd):/app demo-na-dev bash
nodemon src/*
```

To build using Prod Dockerfile:
```
docker build -f prod.Dockerfile -t demo-na-prod .
```

To run Prod version:
```
docker run --rm -it --init -p 9090:8080 demo-na-prod
```