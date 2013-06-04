@ECHO OFF
PUSHD "%~dp0\less"
lessc ./bootstrap.less > bootstrap.css
POPD
