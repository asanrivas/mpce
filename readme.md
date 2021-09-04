Minecraft Bedrock Server toolbelt

1. Docker compose for running server.
2. Backup world data using crontab.
3. Restore world data.
4. Post online/offline player status to Discord.

```
0 */6 * * * /root/mpce/backup.sh >> /root/mpce/backup/backup.log
```