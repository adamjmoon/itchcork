pushd /Users/moon/Projects/itchcork/
grunt
git add .
git commit . -m "fix"
git pull origin master
git push origin master
./deploy.sh

