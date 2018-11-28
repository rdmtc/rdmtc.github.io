# ccu-connection
 
Im _Connection Node_ wird die Verbindung zu den CCU Schnittstellenprozessen und zur Logikschicht verwaltet,
also die Verbindung zur CCU. Sie ist eine _Configuration Node_ und damit nicht in der _Palette_ sichtbar.
Die Einstellungen gelten Flowübergreifend. Die Konfiguration ist im Menü unter Configuration Nodes erreichbar: 

![](/wiki/images/ccu-config.mov.gif)

## Attribute

### CCU Name

Frei wählbarer Name für die aktuelle CCU-Konfiguration.  
Er dient zur Unterscheidung falls mehrere CCUs an RedMatic angebunden werden und erscheint in allen anderen CCU Nodes.
### CCU Address

Die IP-Adresse oder der Hostname der CCU.  
Wird RedMatic als CCU-Addon installiert, läuft es auf dem selben Device weshalb 
die Loopback-Adresse `localhost` bzw. `127.0.0.1` gewählt werden kann.

### Listen Address

Die IP-Adresse des Netzwerk-Interfaces auf welchem die RedMatic RPC Server "lauschen" sollen.  
Läuft RedMatic auf der CCU wird hier ebenfalls `localhost` bzw. `127.0.0.1` verwendet.  
Um auf allen Interfaces zu lauschen kann `0.0.0.0` verwendet werden. 

### Init Address

Die Init-Adresse wird den CCU-Schnittstellenprozessen für RPC-Callbacks mitgeilt. Läuft RedMatic auf der CCU ist 
ebenfalls `localhost` bzw. `127.0.0.1` zu verwenden. 


### BIN-RPC Port

Der Port des RedMatic BIN-RPC Dienstes, normalerweise `2047`. Werden Verbindungen zu mehreren CCUs hergestellt braucht
jede Verbindung einen exklusiven Port.

### XML-RPC Port

Der Port des RedMatic XML-RPC Dienstes, normalerweise `2048`. Werden Verbindungen zu mehreren CCUs hergestellt braucht
jede Verbindung einen exklusiven Port.

### Interfaces

Hier können die zu verwendenden Schnittstellen angegeben werden.
Nutzt man Beispielsweise keinen CUxD oder HmIP Geräte, kann der Haken entfernt werden
was die entsprechenden ungenutzten Komponenten deaktiviert.

* ReGaHSS: Die Logikschicht der CCU, verwaltet CCU-Programme und CCU-Systemvariablen
* BidCos-RF: Homematic Funk
* BidCos-Wired: Homematic Wired
* HmIP-RF: Homematic-IP Funk
* VirtualDevices: Heizungsgruppen, in CCU eingebundene Systeme wie Osram Lightify
* CUxD

### RPC Ping-Timeout

Zeitinterval in Sekunden in dem die Verbindung zu den Schnittstellenprozessen geprüft wird.   

### ReGaHSS Polling

Änderungen von CCU-Systemvariablen werden nicht automatisch an RedMatic übermittelt.
Mit aktiviertem Polling fragt RedMatic die Variablen und deren Werte in den per 
Poll-Interval eingestellten Zeitintervallen ab. 

### ReGaHSS Poll-Interval

Das Zeitintervall in Sekunden um die Systemvariablen von der CCU zu lesen.

### Context-Store

Hier wird der Node-RED Context-Store festgelegt in dem RedMatic die Zustände aller Geräte/Variablen vorhält. 

Weiteres unter [Working with context](https://nodered.org/docs/user-guide/context) in der Node-RED Dokumentation.  
