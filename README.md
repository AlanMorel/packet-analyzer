# Packet Analyzer

```sh
git clone https://github.com/AlanMorel/packet-analyzer
```

```sh
cd packet-analyzer
```

```sh
npm install yarn -g
```

```sh
yarn install
```

Create a `.env` file

```sh
VERSION=0
NODE_ENV=development
PORT=8087
URL=http://packetanalyzer.localhost
TZ=America/New_York
```

Create a folder called `logs` at the root:

```sh
mkdir logs
```

Run the app in development:

```sh
yarn dev
```

Visit `http://localhost:8087/` to see the app running.

Run the app as Docker container:

```sh
docker-compose up
```
