if [[ -n $(docker ps -q -f "name=^dockerfile-test$") ]];then
  docker stop dockerfile-test
  docker rm dockerfile-test
fi

docker run --name dockerfile-test -p 8991:80 -d dockerfile-test:1.3 
docker start dockerfile-test