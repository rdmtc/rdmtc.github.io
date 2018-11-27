# value

Die `value` Node **setzt** oder **list** Datenpunkte eines Kanals.   
Ein Output-Event wird erzeugt, wenn sich der Wert eines Datenpunkts ändert.


## Attribute

### CCU

Unter CCU wird die zu verwendende CCU-Konfiguration angegeben.

### Topic

Das Topic ist an [MQTT](https://de.wikipedia.org/wiki/MQTT) angelehnt und dient zu späteren
Identifizierung des Werts.

### Interface

Hier wird das Interface gewählt, welches den gewünschten Datenpunkt enthält.

### Channel

Der Kanal dessen Datenpunkte verwendet werden solln.  
Er besteht aus der Serien- sowie der Kanalnummer.  
Eine Autovervollständigung hilft bei der Auswahl anhand der Klarnamen. 

### Datapoint

Der Datenpunkt des Kanals, auch hier wird über eine Autovervollständigung die Auswahl vereinfacht.

### ON_TIME

Es kann ein Aussschaltverzögerung aktiviert werden.

Dabei ist:
* `undefined`: Keine Verzögerung
* `number`: Eine feste Verzögerung in Sekunden
* `global`, `flow`: Eine Verzögerung aus einer Context-Variablen
* `msg`: Eine Verzögerung aus einem `msg`-Property.

### set Mode

Eine Erweiterung für Geräte, die sowohl den rx_mode BURST als auch
WAKEUP unterstützen wie z.B.: Batterie-Schaltaktoren oder Rauchmelder mit Sirenenfunktion.
Mit dem Parameter kann in diesem Fall angegeben werden,
ob der übergebene Wert über BURST oder WAKEUP übertragen werden soll.

* WAKUP: Überträgt den Wert sobald der entsprechende Empfänger aufacht.  
* BURST: Versucht alle BURST-Empfänger für die Übertragung zu wecken was sich 
  negativ auf den DutyCycle und die Batterielaufzeit auswirkt.

### Flags

 * ***Nur geänderte Werte ausgeben***  
   Ein Event wird nur dann erzeugt, wenn sich der Wert seit dem letztn Event verändert hat.
   
 * ***Während WORKING keine Werte ausgeben***  
   Es gibt aktoren, z.B. Dimmer oder Rolladen, die können während einer Rampe (Aufgehend der Rollos) fortwährend 
   den aktuellen Zustand ausgeben. Um nur den End-Status auszugeben können kann diese Option benutzt werden.  
   Gebräuchlich auch bei Verwendung mit Dashboard-Nodes.
   
 * ***Beim Start letzten bekannten Wert ausgeben***  
   Wenn Node-RED gestartet wird, dann wird der letzte Wert (sofern in der ReGaHSS bekannt) ausgegeben.  
   Z.B. um beim Start einen korrekten Wert an das Dashboard zu übergeben.  
   **Achtung**: Kann das Abfragen des Wertes vom Gerät zur Folge haben was sich negativ auf den DutyCycle auswirkt,
   vorallem bei häufigen Full-Deployments. 
 

### Name

Der Name dient zur Beschriftung Node im Flow.

## Input

Für den Input der value-Node gilt `msg.payload` als der Wert, der in den Datenpunkt geschrieben wird.  

Die Bestimmung des Datenpunkts sowie des Kanals und der Schnittstell können hier dynamisch 
sein. Dazu werden die entsprechenden Node-Attribute leer gelassen und über `msg` gesetzt.

**Option 1:**  
Interface, Channel und Datapoint können in der `msg` als Properties angegeben werden:

```json
{
  "interface": "BidCos-RF",
  "channel": "OEQ1868878:1",
  "datapoint": "STATE",
  "payload": true
}
```

**Option 2:**
Der Datenpunkt kann über `msg.topic` angegeben werden wobei die Werte mit Punkt getrennt werden:
```json
{
  "topic": "BidCos-RF.OEQ1868878:1.STATE",
  "payload": true
}
```

## Output

Die value-Node gibt nur Events aus, wenn Interface, Channel und Datapoint gesetzt sind. 