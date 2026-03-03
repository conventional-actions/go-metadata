import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {test, expect} from '@jest/globals'

test('test runs and handles missing GitHub context gracefully', () => {
  process.env['INPUT_VERSION'] = '0.0.0'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }

  expect(() => {
    cp.execFileSync(np, [ip], options)
  }).toThrow()
})
