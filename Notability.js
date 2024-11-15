#!name=Notability
#!desc=Notability
#!icon=https://github.com/Toperlock/Quantumult/raw/main/icon/Doraemon/Doraemon-1030.png

[Script]
http-response ^https?:\/\/notability\.com\/global script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/notability1.js, requires-body=true, timeout=60, tag=notability1

http-response ^https?:\/\/notability\.com\/subscriptions script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Notability.js, requires-body=true, timeout=60, tag=Notability

[MITM]
hostname = notability.com
