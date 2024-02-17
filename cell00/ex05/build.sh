#!/bin/bash
if [ -z "$1" ]; then
	echo "No arguments supplied"
fi

for entry in $@; do
	mkdir "ex$entry"
done
