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

## Docker

You can run the app using Docker

```sh
docker compose up
```

When you run the app using Docker, the port is not exposed to the host machine. This means that you will need to either expose it yourself or use a reverse proxy like NGINX to make it accessible.

## Github Actions

If you fork this repository, when you push, it will automatically trigger Github actions.

If you want to disable it, go to your fork's **Settings** > **Actions** > **Actions permissions** > **Disable Actions for this repository**.
