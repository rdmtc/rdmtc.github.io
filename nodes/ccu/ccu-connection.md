# ccu-connection
 
Im _Connection Node_ wird die Verbindung zu den CCU Schnittstellenprozessen und zur Logikschicht verwaltet,
also die Verbindung zur CCU. Sie ist eine _Configuration Node_ und damit nicht in der _Palette_ sichtbar.
Die Einstellungen gelten Flowübergreifend. Die Konfiguration ist im Menü unter Configuration Nodes erreichbar: 

![](/wiki/images/ccu-config.mov.gif)

## Attribute

### CCU Name

Frei wählbarer Name für die aktuelle CCU-Konfiguration.  
Er dient zur Unterscheidung falls ein RedMatic mehrere CCUs verwalten soll.

### CCU Address

Die IP-Adresse der CCU.  
Wird RedMatic als CCU-Addon installiert, läuft es auf dem selben Device weshalb 
die Loopback-Adresse `127.0.0.1` gewählt werden kann..

### Listen Address

Die IP-Adresse des Netzwerk-Interfaces auf welche RedMatic hören soll.  
Läuft RedMatic auf der CCU wird hier ebenfalls `127.0.0.1` gewählt.  
Um auf allen Interfaces zu lauschen kann `0.0.0.0` verwendet werden. 

### Init Address

Die Init-Adresse dient als IP für die RPC-Callbacks. Sie wird als Empfänger-IP
den RPC-Prozessen mitgeteilt.  
Läuft RedMatic auf der CCU ist ebenfalls `127.0.0.1` zu verwenden.

### BIN-RPC Port

Der Port des BIN-RPC Dienstes der CCU, normalerweise `2047`.

### XML-RPC Port

Der Port des XML-RPC Dienstes der CCU, normalerweise `2048`.

### Interfaces

Hier können die zu verwendenden Schnittstellen angegeben werden werden.
Nutzt man Beispielsweise keine CUxD oder HmIP Geräte, kann der Haken entfernt werden
was die entsprechenden ungeutztn Komponenten deaktiviert.

* ReGaHSS: Die Logikschicht der CCU, also Programme und Systemvariablen
* BidCos-RF: HomeMatic Funk
* BidCos-Wired: HomeMatic Wired
* HmIP-RF: HomeMatic-IP Funk
* VirtualDevices
* CUxD

### RPC Ping-Timeout

Zeitinterval in Sekunden in dem die beiden RPC Dienste der CCU auf Funktion Erreichbarkeit geprüft werden.   

### ReGaHSS Polling

Änderungen von CCU-Systemvariablen werden nicht automatisch an RedMatic übermittelt.
Durch einschalten von Polling holt RedMatic die Variablen und deren Werte im 
Poll-Interval eingestellten Zeitintervallen ab. 

### ReGaHSS Poll-Interval

Das Zeitintervall in Sekunden um die Systemvariablen von der CCU zu lesen.

### Context-Store

Hier wird der Node-RED Context-Store festgelegt. Dieser dient zur Speicherung von Werten über Flows hinweg.  
Ein Beispiel wäre: Zählen der Events.

Weiteres unter [Working with context](https://nodered.org/docs/user-guide/context) in der Node-RED Dokumentation.  
