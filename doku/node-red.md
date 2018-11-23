# Node-RED

## Einführung

[Node-RED](https://nodered.org/about/) ist eine Nachrichtenflussbasierte, visuelle Programmierumgebung für das Internet 
der Dinge.  
Node-RED wird seit 2013 von [IBM Emerging Technology](https://emerging-technology.co.uk/technologies/) 
entwickelt und steht als kostenlose Open Source Software unter dem Dach der [JS Foundation](https://js.foundation/) zur 
Verfügung.    
Node-RED kann durch zusätzliche [Nodes](https://flows.nodered.org/?type=node&num_pages=1) erweitert werden, eine große 
und aktive Community hat Stand Heute bereits weit über 1000 Nodes entwickelt, die unterschiedlichste Services und 
Systeme in Node-RED integrieren.

Rund um das Thema Node-RED lassen sich unzählige Artikel, Tutorials, Dokumentationen, Bücher und Youtube Videos finden, zum Einstieg ist z.B. dieser Artikel empfehlenswert: https://entwickler.de/online/iot/node-red-iot-prototypen-2-579809637.html

## Crashkurs


![](/wiki/images/crash-1.png)
* Aus der _Palette_ im linken Bildschirmbereich können _Nodes_ per Drag&Drop im _Flow_ platziert werden
* _Nodes_ können über einen Eingang auf der linken Seite und/oder einen Ausgang auf der rechten Seite mit anderen Nodes verbunden werden
* Nachdem ein _Flow_ verändert wurde müssen die Änderungen per klick auf _Deploy_ übernommen werden
* Der _Inject Node_ erzeugt bei klick auf den Button an seiner linken Seite eine _Message_
* Der _Debug Node_ zeigt eingehende _Messages_ im Debug Fenster an
* Das Debug Fenster befindet sich in der _Sidebar_, diese kann im Menü oben rechts unter "View" durch klick auf "Show Sidebar" angezeigt werden


![](/wiki/images/crash-2.mov.gif)

#### Editieren von Nodes, Verbindungen und Layout :
* Ein Node oder eine Verbindung kann durch Anklicken selektiert werden (oranger Rahmen)
* Mehrere Nodes können durch aufziehen eines Selektionsrahmen (Maustaste halten und ziehen) ausgewählt werden. 
* Selektierte Nodes können im Paket bewegt werden.
* Selektierte Nodes (auch mehrere) und deren Verbindungen könne mit der Entf-Taste gelöscht werden.
* **Einzelne** Verbindungen können mit der Entf-Taste gelöscht werden. 
* Mit Strg-z kann man eine Änderung/Löschung rückgängig machen. (Wenn noch nicht deployed wurde!)


## CCU Nodes

![](/wiki/images/nodes.png)

### ccu connection node
 
Im _Connection Node_ wird die Verbindung zu den CCU Schnittstellenprozessen und zur Logikschicht verwaltet. Der _Connection Node_ ist ein sogenannter _Configuration Node_, ist nicht in der _Palette_ sichtbar und kann nicht in einem _Flow_ platziert werden. Seine Konfiguration ist im Menü unter Configuration Nodes erreichbar: ![](images/ccu-config.mov.gif)


### ccu value node

Geräte steuern und/oder Events von einem Gerät empfangen.

### ccu rpc event node

Events von einem oder mehreren Geräten empfangen. Filter...

### ccu rpc node

Beliebige RPC Methoden auf Schnittstellenprozess aufrufen und deren Rückgabe ausgeben.

### ccu signal node

Ansteuerung von Funk-Gongs (HM-OU-CFM-*, HM-OU-CM-PCB).

### ccu display node

Ansteuerung von Displays (HM-PB-4Dis-WM, HM-Dis-EP-WM55).


### ccu sysvar node

Rega-Systemvariablen setzen und Wertänderungen empfangen.

![](/wiki/images/node-sysvar.png)


### ccu program node

Rega-Programme starten, aktivieren oder deaktivieren. Gibt den Zeitpunkt der letzten Programmausführung aus.

### ccu script node

Beliebige Rega-Scripte starten und deren Rückgabe ausgeben.

### ccu poll node

Sofortige Abfrage von Rega-Systemvariablen und -Programmen auslösen.

### ccu switch node

### ccu get value node

### ccu mqtt node

### Attribute

#### topic

Einige der CCU Nodes erlauben es in ihrer Topic-Konfiguration Platzhalter wie z.B. `${channelName}` zu verwenden. Dadurch ist es möglich das Topic dynamisch aus einem eingehenden Event zu erzeugen. Im den Nodes _RPC_ und _Value_ stehen dafür alle Attribute zur Verfügung die auch zum Filtern von Events konfiguriert werden können.
