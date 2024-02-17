if [ -z "$1" ]; then
	echo "No arguments supplied"
elif [ -z "$2" ]; then
	echo "$1"
elif [ -z "$3" ]; then
	echo "$1"
	echo "$2"
else
	echo "$1"
	echo "$2"
	echo "$3"
fi
