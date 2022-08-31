import * as core from '@actions/core'

type Config = {
  mod_path: string
}

export async function getConfig(): Promise<Config> {
  return {
    mod_path: core.getInput('mod_path') || 'go.mod'
  }
}
