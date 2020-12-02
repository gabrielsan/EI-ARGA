'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
class QualseutimeSchema extends Schema {
  up () {
    this.create('qual_seu_time', (table) => {
      table.increments()
      table.string('nome',50).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('qualseutime')
  }
}

module.exports = QualseutimeSchema
