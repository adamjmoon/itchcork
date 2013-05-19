grunt
git checkout master
git add .
git commit . -m "fix"
git pull upstream master
git push upstream master
pushd hitchscript
meteor deploy itchscript.meteor.com
popd