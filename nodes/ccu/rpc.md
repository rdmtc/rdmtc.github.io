# rpc

Führt eine RPC Methode aus und gibt das Ergebnis zurück.

Siehe [HM XML RPC API](https://www.eq-3.de/Downloads/eq3/download%20bereich/hm_web_ui_doku/HM_XmlRpc_API.pdf).


## Input

Ein `msg` Objekt mit optionaler `method` und `payload`.  
Werden nur beachtet, wenn Method und Params in der Node Konfiguration
leer gelassen werden.


## Output

`msg.payload` enthält den Rückgabewert des Methodenaufrufs.


## Attribute

### CCU

Die zu verwendende CCU-Konfiguration.

### Topic

Das MQTT Topic das im Output gesetzt wird.

### Interface

Das Interface auf dem die Methode aufgerufen werden soll.

### Method

Die Methode die aufgerufen werden soll.  
Wird die Methode leer gelassen, kann sie über `msg.method` im Input gesetzt werden.

### Params

Die Parameter die der RPC Methode übergeben werden.  
Es muss ein Array im JSON-Format angegeben werden.

Werden die Params leer gelassen, können sie über `msg.payload` im Input übergeben werden.  
Hier kann auch direkt ein Array übergeben werden.

### Name

Der Name dient zur Beschriftung des Node im Flow.

