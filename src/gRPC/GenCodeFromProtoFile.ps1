# new-alias protoc .\protoc-3.8.0-win64\ bin\protoc.exe
# new-alias protoc-gen-grpc-web "G:\BTCloudSyncFolder\BT Cloud\Software\protoc-gen-grpc-web-1.0.4-windows-x86_64.exe"
protoc -I="G:\BTCloudSyncFolder\BT Cloud\Software" echo.proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:"G:\BTCloudSyncFolder\BT Cloud\Software"