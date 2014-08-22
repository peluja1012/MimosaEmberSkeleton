#!/bin/bash
if [ "$1" == ci ]; then
  testem ci --file ".mimosa/testemQUnit/testem.json"
else
  testem --file ".mimosa/testemQUnit/testem.json"
fi