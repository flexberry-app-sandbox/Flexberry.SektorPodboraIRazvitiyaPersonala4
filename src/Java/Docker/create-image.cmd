docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sektor_podbora_i_razvitiya_personala-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t sektor_podbora_i_razvitiya_personala-java/app ../../..
