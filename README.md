## Description
This is a small JavaScript `Node.js` server used to test the connectivity with the Mobile App of the **self-parking car**. This software is part of the [JavaScript self-parking car project](https://github.com/gcornetta/self-parking-car).

## Usage
To run the application follow the steps depicted in the sequel:
1. clone this repo typing `git clone https://github.com/gcornetta/rpi-car-test-server`.
2. in the project folder run `npm install` to install the project dependencies.
3. to run the application type `npm start`.

The `start` script configures two environment variables `ADDRESS` with the IP address of the host and `PORT` with the server listening port. Make sure to replace those values with a valid IP address and Port. The configuration is in the `script` section of the `package.json` file.

```
"scripts": {
  "start": "ADDRESS=192.168.1.6 PORT=6000 node ./server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

## Software requirements
This software has been tested with `Node.js v.16.6.0`.

## Disclaimer
This software has been tested on a Mac with `MacOS 12.5` (Monterey). I would recommend using either a Mac or a PC with a Linux distribution.
