# set value

Die `set value` Node wird dazu verwendet um **mehrere** Datenpunkte zu setzen. Soll ein einziger spezifischer Datenpunkt gesetzt werden ist die [value](value.html) Node eine bessere Wahl.

Um die zu setzenden Datenpunkte zu bestimmen werden Filter wie bei der [rpc event](rpc-event.html) Node verwendet.

Beispiel für eine Anwendung wäre das Ausschalter aller Lichter.


## Input

`msg.payload` enthält den Wert der in die ausgewählten Datenpunkte geschrieben wird.


## Attribute

### CCU

Die zu verwendende CCU-Konfiguration.

### Interface

Hier wird das Interface gewählt, welches das Event erzeugt hat.

### Room

Raum Filter. Beispiel: `Wohnzimmer`.

### Function

Funktion oder auch Gewerk Filter. Beispiel: `Taster`

### Device

Die Seriennummer der Homematic Komponente. Beispiel: `OEQ1662328`

### DeviceName

Der in der CCU vergebene Name der Homematic Komponente. Beispiel: `Rauchmelder Arbeitszimmer`;
alle Rauchemelder über RegEx: `Rauchmelder .*`

### DeviceType

Die Typen-Bezeichnung der Homematic Komponente. Beispiel: `HM-Sec-SD-2`

### Channel

Der exakte Kanal bestehend aus Serien- und Kanalnummer. Beispiel: `OEQ1245312:4`

### ChannelName

Der in der CCU vergebene Kanalname. Beispiel: `Bad Lichte Decke PIR`

### ChannelType

Der Typ des Kanals. Beispiel: `VIRTUAL_KEY` oder `DIMMER`

### Datapoint

Der Datenpunkt des Kanals. Beispiel: `VALUE` oder `LEVEL`.

# Delay

Das Zeitintervall in Millisekunden das gewartet wird bis der nächste Datenpunkt gesetzt wird. Die Zeitspanne sollte nicht zu klein gewählt werden um die Funkübertragung nicht zu überlasten.

### Name

Der Name dient zur Beschriftung des Node im Flow.