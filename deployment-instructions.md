``` sh
docker build -t invitacion-sophie:latest .
docker save invitacion-sophie:latest > ../invitacion-sophie.tar
scp ../invitacion-sophie.tar alejandro@164.90.156.82:invitacion-sophie
rm ../invitacion-sophie.tar
ssh alejandro@164.90.156.82
cd invitacion-sophie
docker-compose down
docker image prune -a -f
docker load < invitacion-sophie.tar
docker-compose up -d
rm invitacion-sophie.tar
logout
```