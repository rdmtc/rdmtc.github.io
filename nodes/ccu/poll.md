# poll

Sofortige Abfrage von ReGaHSS-Systemvariablen und -Programmen auslösen.

Dieser Node ist dazu vorgesehen die Änderung von Systemvariablen mit möglichst geringer Verzögerung zu empfangen. Hierzu kann man ein Programm auf der CCU anlegen, welches bei Änderung von Variablen einen virtuellen Taster betätigt. In Node-RED wird dann z.B. über die [value](./value.html) oder [rpc event](./rpc-event.html) Node auf diese "Tastenbetätigung" reagiert und die poll Node aufruft. Dies führt zum sofortigen Aktualisieren der geänderten Werte von der CCU. 
