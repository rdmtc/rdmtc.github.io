# display

Ansteuerung von Displays (HM-PB-4Dis-WM, HM-Dis-EP-WM55).

## Attribute

### CCU

Unter CCU wird die zu verwendende CCU-Konfiguration angegeben.

### Channel

Der Kanal dessen Datenpunkte verwendet werden solln.  
Er besteht aus der Serien- sowie der Kanalnummer.  
Eine Autovervollständigung hilft bei der Auswahl anhand der Klarnamen. 

### Typ

Hier wird der Typ des Display-Devices gewählt.

### Farbe / Zeile / Icon

Je nach Device-Typ stehen verschiedene Optionen zur Darstellung des Inhalts zur Verfügung.

### LED / Ton / Wiederholungen / Pause

Einige Devices besitzen LED-Indikatoren und Piepser. Über diese Optionen können diese angesteuert werden.
Die Wiederholungen sowie Pause-Zeiten werden in Sekunden angegeben.

## Konfiguration durch `msg`

Die anzuzeigenden Werte können über `msg`-Properties gesetzt werden:

* `msg.lineX`: Text der `X`ten Zeile
* `msg.iconX`: Icon der `X`ten Zeile
* `msg.colorX`: Farbe der `X`ten Zeile
