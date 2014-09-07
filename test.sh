#!/bin/bash
if [ "$1" == ci ]; then
  testem ci --file ".mimosa/emberTest/testem.json"
else
  testem --file ".mimosa/emberTest/testem.json"
fi
