# Kafka in Docker - Quick Setup

## Setup

First, tet bash PATH with $KAFKA_HOME/bin (supported version is 2.4.1)

To deploy a cluster with 2 brokers and 1 zookeeper:

```bash
./deploy-kafka.sh
```

To stop and cleanup all:
```
./cleanup.sh
```