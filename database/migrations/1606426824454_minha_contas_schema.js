'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MinhaContaSchema extends Schema {
  up () {
    this.create('minha_conta', (table) => {
      table.increments()
      table.string('email',90).notNullable().unique()
      table.string('senha',50).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('minha_conta')
  }
}

module.exports = MinhaContaSchema
