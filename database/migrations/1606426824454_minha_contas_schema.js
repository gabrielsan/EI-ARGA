'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MinhaContaSchema extends Schema {
  up () {
    this.create('minha_contas', (table) => {
      table.increments()
      table.string('email',90).notNullable().unique()
      table.string('senha',50).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('minha_contas')
  }
}

module.exports = MinhaContaSchema
