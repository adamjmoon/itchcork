pushd /Users/moon/Projects/itchcork/
grunt
git checkout master
git add .
git commit . -m "fix"
git pull upstream master
git push upstream master
popd
exit
