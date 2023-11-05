#!/usr/bin/env bash
# scripts/run-integration.sh

DIR="$(cd "$(dirname "$0")" && pwd)"

source $DIR/setenv.sh
docker compose up -d
echo '🟡 - Waiting for database to be ready...'

$DIR/wait-for-it.sh "${DATABASE_URL}" -- echo '🟢 - Database is ready!'

npx prisma migrate dev --name init

handle_flag() {
    case $1 in
        -ui) vitest -c ./vitest.config.integration.ts --ui
            ;;
        -run) vitest -c ./vitest.config.integration.ts --run
            ;;
        -default) vitest -c ./vitest.config.integration.ts
            ;;
        *) echo "Flag desconhecida: $1"
            ;;
    esac
}

for arg in "$@"
do
    handle_flag $arg
done