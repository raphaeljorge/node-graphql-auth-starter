# Graphql Server boilerplate
 
## Features
- Modular and easily scalable code structure
- Emphasis on developer experience
- GraphQL schema with associations
- Database migration and data seeding
- User authentication using JSON Web Tokens with GraphQL API

#### Upcoming features
- [ ] Relay Modern support
- [ ] File upload
- [ ] Subscriptions
- [ ] And much more...

## Installation
- Clone repository:
```sh
git clone https://github.com/raphaeljorge/node-graphql-auth-starter.git
```
## Getting started
- Modify `/config/database.json` with your database credentials.
- Modify `/config/server.json` with your secret pass.
- Change `.env` with service PORT (optional).

#### Start server

```sh
# Start server (runs on http://localhost:4000)
yarn start
```


## Project structure
| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>|
| :--  | :--         |
| `├── public` | Contains all public files |
| `└── src` (_directory_) | Contains the source files for your GraphQL server
| `　　├── config` (_directory_) | Contain server configurations |
| `　　|　　├── database.json` | Contain all database credentials |
| `　　|　　└── server.json` | GraphQL server settings |
| `　　├── migrations` (_directory_) | Sequelize migration files |
| `　　├── modules` (_directory_) | Contains GraphQL mutations and queries 
| `　　|　　├── model.js ` | Business structure and logic |
| `　　|　　├── mutations.js ` | Schema mutations |
| `　　|　　├── query.js ` | Schema queries |
| `　　|　　├── resolvers.js ` | Resolvers provide the instructions for turning a GraphQL operation into data |
| `　　|　　└── types.js ` | Types definitions |
| `　　├── seeders` (_directory_) | Contains sequelize seeders |
| `　　├── setup` (_directory_) | Contain setup files |
| `　　|　　├── schema ` (_directory_) | Contain schema builder |
| `　　|　　　　├── mutations.js ` | Mutation builder |
| `　　|　　　　└── queries.js ` | Queries builder |
| `　　|　　├── authentication.js ` | Authentication middleware |
| `　　|　　├── database.js ` | Database connector |
| `　　|　　├── graphql.js ` | Create GraphQL Server |
| `　　|　　├── load-modules.js ` | Load express modules |
| `　　|　　├── models.js ` | Load GraphQL modules |
| `　　|　　└── start-server.js ` | Start Express and GraphQL server |
| `　　└── index.js` | The entry point for your GraphQL server |