# get value

Diese Node liest einen Datenpunkt der CCU sobald ein Input-Event aus
einer vorgeschalteten Node eintrifft.  
Das Auslesen des Werts passiert also nicht, wenn sich der Wert ändert, sondern
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
* `direction`: ???
* `all properties as object`: Es wird das ganze Ergbnis der Abfrage als Object zurückgegeben

### Set Property

Mit dieser Einstellung wird beeinflusst, wie das Ergebnis an die nächste Node weitergegeben
werden soll. Alternativ kann auch ein [Context](https://nodered.org/docs/user-guide/context)
befüllt werden.

Soll beispielsweise `msg.payload` vom Input-Event erhalten werden, kann über `msg.` ein
zusätzliches Property angegeben werden welches dem `msg` Objekt hinzugefügt wird. 