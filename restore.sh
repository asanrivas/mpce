#/bin/bash

docker-compose down

newest=`ls backup/amy* -t | head -1`
echo "Latest backup is: $newest"
cd worlds
rm -rf amy-archipelago/
unzip "../$newest" -d .

docker-compose up -d