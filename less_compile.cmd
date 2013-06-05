@ECHO OFF
PUSHD "%~dp0\less"
lessc ./itchcork.less > itchcork.css
POPD
