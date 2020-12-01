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
      .integer("minha_contas")
      .unsigned()
      .references("id")
      .inTable("minha_contas")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table
      .integer("id_qual_seu_time")
      .unsigned()
      .references("id")
      .inTable("id_qual_seu_time")
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
