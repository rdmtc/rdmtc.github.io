# rpc event

Die `rpc event` Node dient dazu einen Flow zu starten, wenn ein Event von der CCU empfangen wird. Im Gegensatz zur [value](./value.html) Node, welche nur auf einen spezifischen Datepunkt reagiert, wird die `rpc event` Node bei allen CCU-Events getriggert.

Um den Flow nur für bestimmte Events zu starten verfügt sie über diverse Filtermöglichkeiten. Die meisten Filter können explizit gesetzt werden z.B. `Arbeitszimmer Taster AN` oder gegen einen [regulären Ausdruck](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp) geprüft werden. Ein Beispiel für ein RegEx Pattern das auf alle _Taster_ zutrifft wäre `.*Taster.*`. Um zwischen explizit (String) und RegEx zu wählen wird das DropDown neben der Werteingabe verwendet.


## Output

Die `msg` enthält diverse Informationen über das RPC wie `topic`, `function`, `deviceName` und viele weitere. Die `payload` ist die `value`, also der Wert oder auch Zustand des Datenpunkts des zugehörigen Events. Beispiel `20.4` für `ACTUAL_TEMPERATURE` eines Heizkörperthermostats.


## Attribute

### CCU

Die zu verwendende CCU-Konfiguration.

### Topic

Das Topic ist an [MQTT](https://de.wikipedia.org/wiki/MQTT) angelehnt und kann zur späteren
Identifizierung des Werts verwendet werden.

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

Der Datenpunkt des Kanals. Beispiel: `PRESS_SHORT` oder `ACTUAL_TEMPERATURE`.

### Flags

 * ***Nur geänderte Werte ausgeben***  
   Ein Event wird nur dann erzeugt, wenn sich der Wert seit dem letztn Event verändert hat.
   
 * ***Während WORKING keine Werte ausgeben***  
   Es gibt Aktoren, z.B. Dimmer oder Rolladen, die  während einer Rampe (Öffnen/Schließen eines Rollladen, Dimmen einer Lampe) 
   fortwährend den aktuellen Zustand ausgeben. Um nur den End-Status auszugeben kann diese Option benutzt werden.  
   Gebräuchlich auch bei Verwendung mit Dashboard-Nodes um "springende" Slider zu verhindern.
   
 * ***Beim Start letzten bekannten Wert ausgeben***  
   Wenn Node-RED gestartet wird, dann wird der letzte Wert (sofern in der ReGaHSS bekannt) ausgegeben.  
   Z.B. um beim Start einen korrekten Wert an das Dashboard zu übergeben.  
   **Achtung**: Wird durch die ausgegebene Nachricht im weiteren Verlauf des Flows ein Homematic Wert gesetzt wirkt sich
   jedes (Full-)Deployment negativ auf den DutyCycle aus.
 
### Name

Der Name dient zur Beschriftung des Node im Flow.
