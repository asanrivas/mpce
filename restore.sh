#/bin/bash

docker-compose down

if [[ "$1" != "" ]]; then
    newest="backup/$1"
else
    newest=`ls backup/amy* -t | head -1`
fi

echo "Latest backup is: $newest"
cd worlds
rm -rf amy-archipelago/
unzip "../$newest" -d .

docker-compose up -d