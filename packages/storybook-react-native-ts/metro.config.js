/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

/** @type {import('expo/metro-config').MetroConfig} */

// Ubica el proyecto y todos sus workspaces
const projectRoot = __dirname
const config = getDefaultConfig(projectRoot)
config.resolver.resolverMainFields.unshift('sbmodern')
const workspaceRoot = path.resolve(projectRoot, '../..')

// Observa todos los archivos del monorepo monorepo
config.watchFolders = [workspaceRoot]
// Le permite a Metro resolver los packages y el orden.
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules')
]
// Fuerza a Metro a resolver (sub)dependencias solo dentro de los `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true

module.exports = config
