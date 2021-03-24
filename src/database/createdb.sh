#!/bin/bash

set -e
set -u

function create_user_and_database() {
	local database=$1
	echo "  Creating user and database '$POSTGRES_DB_NAME'"
	psql -v ON_ERROR_STOP=1 --username "$POSTGRES_DB_USER" <<-EOSQL
	    CREATE USER $database;
	    CREATE DATABASE $database;
	    GRANT ALL PRIVILEGES ON DATABASE $database TO $database;
EOSQL
}

if [ -n "$POSTGRES_DB_NAME" ]; then
	echo "Multiple database creation requested: $POSTGRES_DB_NAME"
	for db in $(echo $POSTGRES_DB_NAME | tr ',' ' '); do
		create_user_and_database $db
	done
	echo "Multiple databases created"
fi