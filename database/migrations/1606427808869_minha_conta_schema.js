'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MinhaContaSchema extends Schema {
  up () {
    this.create('minha_conta', (table) => {
      table.increments('id_minhaconta')
      table.string('email',90).notNullable().unique()
      table.string('senha',50).notNullable().unique()
      table.timestamps()
      table
    })
  }

  down () {
    this.drop('minha_conta')
  }
}

module.exports = MinhaContaSchema
