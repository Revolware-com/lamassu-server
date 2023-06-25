#!/usr/bin/env bash
set -e

docker build -t build:latest -f build/Dockerfile.ci .

id=$(docker create build)
docker cp $id:/lamassu-server.tar.gz ./lamassu-server.tar.gz
docker rm -v $id
