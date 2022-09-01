import * as core from '@actions/core'
import * as exec from '@actions/exec'
import {getConfig} from './config'
import {GoMod} from './gomod'

async function run(): Promise<void> {
  try {
    const config = await getConfig()

    const output = await exec.getExecOutput('go', [
      'mod',
      'edit',
      '-json',
      config.mod_path
    ])
    const mod: GoMod = JSON.parse(output.stdout)

    core.setOutput('module', mod.Module.Path)
    core.setOutput('go_version', mod.Go)

    return
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
