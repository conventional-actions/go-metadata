# go-metadata

A GitHub Action for extracting metadata about Go projects.

## Usage

To use the GitHub Action, add the following to your job:

```yaml
- uses: conventional-actions/go-metadata@v1
  id: metadata
- run: |
    echo ${{ steps.metadata.outputs.go_version }}
    echo ${{ steps.metadata.outputs.module }}
```

### Inputs

| Name         | Default   | Description                               |
|--------------|-----------|-------------------------------------------|
| `mod_path`   | `go.mod`  | path to the go module                     |

### Outputs

| Name         | Example                                       | Description    |
|--------------|-----------------------------------------------|----------------|
| `module`     | `github.com/conventional-actions/go-metadata` | Go module name |
| `go_version` | `1.18`                                        | Go version     |

### Example

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: conventional-actions/go-metadata@v1
        id: metadata
      - run: |
          echo ${{ steps.metadata.outputs.go_version }}
          echo ${{ steps.metadata.outputs.module }}
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE).

