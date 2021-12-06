# Getting Started with SVXWEB

This project is aimed at creating a web configuration frontend for SVXLink. Not all features are functional at the moment and this software is considered pre-alpha at the moment.

## Benefits

- Manage your SVXLink server remotely via the web
  * Change all aspects of the SVXLink configuration / Modules
  * View SVXLink logs remotely
  * Enable/Disable/Stop/Start SVXLink remotely.

- View System stats at a glance
  * View CPU Utilization
  * View Used, Free and Total Memory
  * View sound card information

- Allow you to manage multiple SVXLink servers
  * Be able to manage multiple SVXLink Servers from one web page

## Backend svxlink_graphql

The Backend is a NodeJS Express GraphQL application that runs on each server running Svxlink. This is the main interface that the React frontend connects to.

## FrontEnd svxlink_react

The Frontend application is a react application that can be hosted on any website as long as it can connect to the svxlink servers.
