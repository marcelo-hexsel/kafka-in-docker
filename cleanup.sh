#!/bin/bash

CURRENT_DIR=$(pwd)

cd kafka-docker || echo "Already deleted..."

docker-compose down || echo "Already stopped"

cd $CURRENT_DIR

rm -rf kafka-docker || echo "Already deleted..."
