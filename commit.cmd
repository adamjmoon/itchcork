@ECHO OFF
git add .
git commit . -m "fix"
git pull origin master
git push origin master
./deploy.cmd
exit /b 0