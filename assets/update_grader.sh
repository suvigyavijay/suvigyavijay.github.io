#!/bin/bash

echo "Updating the grader!"

echo "Checking if the current directory is pa1 directory..."

# check if the current pwd has pa1-* in it
# if not, exit with error message
if [[ ! $(pwd) =~ pa1-* ]]; then
    echo "ERROR: You are not in the pa1 directory"
    exit 1
fi

# check if grader directory exists
# if not, exit with error message
if [[ ! -d grader ]]; then
    echo "ERROR: grader directory does not exist"
    exit 1
fi

# remove the old grader files
echo "Removing old grader files..."
rm -rf grader/*

# check if the rm was successful
# if not, exit with error message
if [[ $? -ne 0 ]]; then
    echo "ERROR: Failed to remove old grader files"
    exit 1
fi

# wget the new grader files quietly
echo "Downloading new grader files..."
mkdir -p grader
wget -q -O grader/grader.cfg https://raw.githubusercontent.com/UB-CSE4589/pa1-starter/main/grader/grader.cfg
wget -q -O grader/grader_controller https://raw.githubusercontent.com/UB-CSE4589/pa1-starter/main/grader/grader_controller
wget -q -O grader/grader_relay https://raw.githubusercontent.com/UB-CSE4589/pa1-starter/main/grader/grader_relay

# check if the wget was successful
# if not, exit with error message
if [[ $? -ne 0 ]]; then
    echo "ERROR: Failed to update grader files"
    exit 1
fi

# make the grader file executable
chmod +x grader/grader_controller
chmod +x grader/grader_relay

# check if the chmod was successful
# if not, exit with error message
if [[ $? -ne 0 ]]; then
    echo "ERROR: Failed to make grader_controller executable"
    exit 1
fi

echo "Pushing the changes to the git..."
echo ""
echo "Please enter your git credentials!"
echo "Wait for the prompt to enter your username and password..."
echo ""

# push the changes to the git
git add grader
# commit the changes quietly
git commit -q -m "Updated grader files"
# get current branch name in order to push to the same branch
branch_name=$(git branch | grep \* | cut -d ' ' -f2)
git push origin $branch_name

# check if the push was successful
# if not, exit with error message
if [[ $? -ne 0 ]]; then
    echo "ERROR: Failed to push the changes to the git"
    exit 1
fi

# exit with success message
echo "Grader updated successfully!"

# remove itself
rm update_grader.sh

