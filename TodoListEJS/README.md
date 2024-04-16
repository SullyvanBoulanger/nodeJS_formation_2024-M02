# TodoList with MongoDB

- [TodoList with MongoDB](#todolist-with-mongodb)
  - [Installation](#installation)
  - [Start the project](#start-the-project)

## Installation

1. Install dependencies

```bash
npm i
```

2. Configure your `.env` file

```
// How to access to your database like mongodb://127.0.0.1:27017/...
CONNECTIONSTRING=...

// The name of your collection
MONGO_DB_COLLECTION_NAME=...
```

## Start the project

1. Start Docker compose containing database

```bash
docker compose up -d
```

2. Start the server

```bash
npm start
```
