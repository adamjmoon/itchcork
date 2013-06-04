@ECHO OFF
PUSHD "%~dp0\less"
recess ./bootstrap.less --compress  > ./bootstrap-min.css
POPD
