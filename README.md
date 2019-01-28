# Che-Plugin-Viewer

Browse plugins available for Eclipse Che.

## Quick Setup

**Note** If you do not have yarn installed run: `npm install -g yarn`

Run the following commands:

```
yarn
yarn start
```

## Deploy it on dev-cluster

```
docker build -t <dockerhub username>/<image name> .
docker push <dockerhub username>/<image name>
```

Deploy on dev cluster using the above image.
