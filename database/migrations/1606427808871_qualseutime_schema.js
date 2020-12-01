'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QualseutimeSchema extends Schema {
  up () {
    this.create('qualseutimes', (table) => {
      table.increments()
      table.string('nome',50).notNullable().unique()
      table.timestamps()
    })
  }
  
  down () {
    this.drop('qualseutimes')
  }
}

module.exports = QualseutimeSchema
