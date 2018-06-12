# demo-nodejs-app


To build
docker build -t demo-nodejs-app .

To run
docker run -p 18080:8080 -d demo-nodejs-app

To go into container
docker exec -it <container id> /bin/bash
