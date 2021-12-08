# Getting Started with SVXWEB

This project is aimed at creating a web configuration frontend for SVXLink. Not all features are functional at the moment and this software is considered pre-alpha at the moment.

## Benefits

- Manage your SVXLink server remotely via the web
  * Change all aspects of the SVXLink configuration / Modules
  * View SVXLink logs remotely
  * Enable/Disable/Stop/Start SVXLink remotely.

- View System stats at a glance
  * View System Info (Hostname, arch type, os, os type and uptime)
  * View CPU Utilization, CPU Count, Model, Temp
  * View Used, Free and Total Memory
  * View sound card information (input devices / output devices)
  * View USB Devices (lsusb)
  * View Network Info (interface and IPv4 Address)

- Future
  * Be able to manage multiple SVXLink Servers from one web page

## Backend svxlink_graphql

The Backend is a NodeJS Express GraphQL application that runs on each server running Svxlink. This is the main interface that the React frontend connects to.

### TODO: Create Install Documentation / Install Scripts

## FrontEnd svxlink_react

The Frontend application is a react application that can be hosted on any website as long as it can connect to the svxlink servers.

### TODO: Create Install Documentation / Install Scripts
