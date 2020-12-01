'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CadastrarnoticiaSchema extends Schema {
  up () {
    this.create('cadastrarnoticias', (table) => {
      table.increments()
      table.string('titulo',50).notNullable().unique()
      table.datetime('data/hora',50).notNullable().unique()
      table.string('descrição',50).notNullable().unique()
      table.string('noticia',300).notNullable().unique()
      table
      .integer("qualseutime")
      .unsigned()
      .references("id_usuario")
      .inTable("qualseutime")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('cadastrarnoticias')
  }
}

module.exports = CadastrarnoticiaSchema
