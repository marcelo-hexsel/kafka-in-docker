#!/bin/bash

git clone https://github.com/wurstmeister/kafka-docker.git 

cd kafka-docker

#set kafka network address
sed -i 's/KAFKA_ADVERTISED_HOST_NAME: 192\.168\.99\.100/KAFKA_ADVERTISED_HOST_NAME: 172\.17\.0\.1/' docker-compose.yml

docker-compose up -d

#set 2 brokers
docker-compose scale kafka=2

#wait for everything to be setup
sleep 5

#set broker-list.sh ip address to be localhost
sed -i 's/$HOST_IP/127.0.0.1/' broker-list.sh

#create test topic with 4 partitions, replicated in both brokers
kafka-topics.sh --create --topic test --partitions 4 --replication-factor 2 --bootstrap-server `./broker-list.sh`

#describe test topic to check if it's ok
kafka-topics.sh --describe --topic test --bootstrap-server `./broker-list.sh`