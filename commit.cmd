git add .
git commit . -m "fix"
git pull origin master
git push origin master
./deploy.cmd -v
exit /b 0