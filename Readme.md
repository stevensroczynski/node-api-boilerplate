## API server

Run `npm start` to start the API server. Navigate to `http://localhost:1234/`. The app will automatically reload if you change any of the source files.

If you need to change the port the API runs on, export the environment variable `PORT=your_port_here` first.  For example, `PORT=8080 npm start`
 to start the API on port `8080`.

## Configuration

The API requires a configuration file to start.  A sample configuration file is provided at `config\config.dev.yml.sample`.

## Dependencies

Run "npm -i" in the route directory to install dependencies 

### ORM
This API uses Sequelize for Object Relational Mapping to the database.  Read more about Sequelize [here](https://www.npmjs.com/package/sequelize#documentation).

### Logging
This API uses Morgan for access logging (intialized in the middleware) and Winston for logging errors and other information (located in logger.js).