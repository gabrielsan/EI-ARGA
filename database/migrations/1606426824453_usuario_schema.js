'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('nome',90).notNullable().unique()
      table.string('email',90).notNullable().unique()
      table.string('cpf',11).notNullable().unique()
      table
      .integer("minha_conta_id")
      .unsigned()
      .references("id")
      .inTable("minha_conta")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table
      .integer("qualseutime_id")
      .unsigned()
      .references("id")
      .inTable("qual_seu_time")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuarioSchema
