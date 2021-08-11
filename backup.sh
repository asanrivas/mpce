#/bin/bash
cd /root/mpce/worlds
echo "saving amy-archipelago.$(date +"%m-%d-%Y.%T").zip"

zip -r "../backup/amy-archipelago.$(date +"%m-%d-%Y.%T").zip" amy-archipelago
cd ../backup
pwd
find /root/mpce/backup -mindepth 1 -mtime +3 -delete
