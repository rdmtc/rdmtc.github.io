# script

Übergibt ein in RedMatic definiertes Script an ReGaHSS führt dieses aus und gibt die Rückgabe an _Output_ der Node zurück.

## Attribute

### CCU

Die zu verwendende CCU-Konfiguration.

### Topic

Das Topic ist an [MQTT](https://de.wikipedia.org/wiki/MQTT) angelehnt und dient zu späteren
Identifizierung der Rückgabe.

### Script

Das ReGaHSS Script welches ausgeführt werden soll.  
Das Feld kann leer gelassen werden um `msg.payload` aus dem Input-Objekt als Script zu verwenden.

### Name

Der Name dient zur Beschriftung des Node im Flow.
