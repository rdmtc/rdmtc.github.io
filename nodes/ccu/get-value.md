# get value

Diese Node gibt beim Eintreffen einer Beliebigen Nachricht den zwischengespeicherten Zustand eines Datenpunkt der CCU aus.
Das Ausgeben des Werts findet also nicht statt wenn sich der Wert ändert, sondern
wenn er innerhalb eines Flows benötigt wird.

## Attribute

### CCU

Unter CCU wird die zu verwendende CCU-Konfiguration angegeben.


### Interface

Hier wird das Interface gewählt, welches den gewünschten Datenpunkt enthält.

### Channel

Der Kanal dessen Datenpunkte verwendet werden solln.  
Er besteht aus der Serien- sowie der Kanalnummer.  
Eine Autovervollständigung hilft bei der Auswahl anhand der Klarnamen. 

### Datapoint

Der Datenpunkt des Kanals, auch hier wird über eine Autovervollständigung die Auswahl vereinfacht.

### Property

Hier wird das spezifische Property des Datenpunkts ausgewählt:

* `value`: Der reale Wert
* `ts`: Der aktuelle Timestamp
* `lc`: Der Timestamp der letzten Aktualisierung
* `working`: Gibt an, ob sich der Aktor gerade im Schaltvorgang befindet
* `direction`: Gibt die Richtung an in der sich z.B. ein Rollladen im Moment bewegt
* `all properties as object`: Es werden alle Attribute eines Datenpunktes als Objekt zurückgegeben

### Set Property

Mit dieser Einstellung kann ausgewählt werden in welche Property der ausgegebenen Nachricht das Ergebnis gesetzt wird. Alternativ kann auch eine [Context](https://nodered.org/docs/user-guide/context)
Variable gesetzt werden.

Soll beispielsweise `msg.payload` vom Input-Event erhalten werden, kann über `msg.` eine
zusätzliche Property angegeben werden welche dem `msg` Objekt hinzugefügt wird. 