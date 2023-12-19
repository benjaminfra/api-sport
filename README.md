# API SPORT

> A cli tool for https://api-sports.io/
> Retreive data and convert to sql file

## Install

```bash
# NPX
npx api-prono-poney-cli
# or install globally
npm -g api-prono-poney-cli

```

## Usage

You must define environnment variable `SPORT_API_KEY`, before use cli. [Get your api key](https://dashboard.api-football.com/)

```
export SPORT_API_KEY=XXXX
```

```
api-prono-poney-cli <cmd> [args]

Commands :
  api-prono-poney-cli get-matchs  Fetch matches from sport API
  api-prono-poney-cli get-teams   Fetch teams from sport API


Options :
  --version                                             [boolean]
  --help                                                [boolean]
```

## Development

```bash
# Install & link dev s
npm install
npm link .

# Build & launch
npm run build && api-sport

# uninstall (unlink)
npm unlink .
```
