const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');

class UsersService {

  constructor(){
  }
  async create(data) {
    return data;
  }

  async find() {
    const client = await getConnection();
    const result = await client.query('SELECT * FROM task');

    return result.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = UsersService;
