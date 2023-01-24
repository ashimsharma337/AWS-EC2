# AWS-EC2
In This repository, I have created simple express app to print hello from the cloud. To install this application on 
AWS EC2 instance following steps are needed.

1. create a EC2 instance on AWS. (ubuntu free tier)
2. connect 
3. change to root user using (sudo su -) command
4. Installing and updating Script (curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash)
5. Activate nvm (. ~/.nvm/nvm.sh)
6. check the version of node make sure it is same or change to desire version using (nvm use versionNumber)
7. Install git 
     a. update system using (apt-get update -y)
     b. install using (apt-get install git -y)
8. check git version using (git --version)
9. Clone repository to ec2 instance
10. Then cd to the repo
11. list all files and folder to see using (ls -lrt)
12. install packages and dependency using npm install
13. use npm start to start application
14. open the ip address on the browser

