@ECHO OFF
PUSHD "%~dp0\less"
recess ./itchcork.less --compress  > ./itchcork-min.css
POPD
