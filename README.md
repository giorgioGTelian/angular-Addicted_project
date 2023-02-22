# angular-Addicted_project

## To test immdiately it you can use:
[Live DEMO on stack blitz ⚡️](https://stackblitz.com/edit/angular-igxrac?file=README.md)


## Or you can download the repo and follow this steps:

### Start a localhost service


Static file server which returns files regardless of the header method


#### Embed within a NodeJS script

```bash
npm install localhost --save-dev
```
```javascript
import localhost from 'localhost';
localhost('./').listen(port);
```

#### Save globally and run as an executable
`localhost [directory] [-p portNumber|8080]`

```bash
npm install -g localhost
cd ./www/
localhost
```

#### Run using npx

```bash
cd ./www/
npx localhost
```

