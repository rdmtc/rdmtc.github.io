# Installation


## Installation

* Zur Sicherheit __ein Backup der CCU anfertigen__.
* Aktuelle Version von [Github](https://github.com/HM-RedMatic/RedMatic/releases/latest) herunterladen. Es wird die Datei 
`redmatic-<version>.tar.gz` benötigt:    
  ![](/wiki/images/install-1.png)
* Im Homematic WebUI Systemsteuerung Zusatzsoftware aufrufen:    
  ![](/wiki/images/install-2.png) ![](/wiki/images/install-3.png)
* Heruntergeladene Datei auswählen:     
  ![](/wiki/images/install-4.png) ![](/wiki/images/install-5.png)
* Datei auf die CCU hochladen:     
  ![](/wiki/images/install-6.png)
* Installation Starten:     
  ![](/wiki/images/install-7.png)
* Im Anschluss abwarten bis sich die CCU neu gestartet hat - hier ist Geduld erforderlich. Die Installation von RedMatic benötigt einige Zeit.
* Node-RED ist unter `http://<ccu-adresse>/addons/red` erreichbar.
* Node-RED Dashboard ist unter `http://<ccu-adresse>/addons/red/ui` erreichbar.

### CUxD und Homematic-Wired

Per Default werden die Schnittstellenprozesse CUxD und hs485d (wired) nicht aktiviert. Für eine Zukünftige Version ist dies geplant (https://github.com/hobbyquaker/RedMatic/issues/34), Stand heute muss das noch manuell im _ccu configuration_ Node gemacht werden.

### rmupdate

RedMatic lässt sich auch über das [Addon rmupdate](https://github.com/j-a-n/raspberrymatic-addon-rmupdate) installieren und updaten. Dies bietet den Vorteil dass kein überflüssiger Zwangs-Reboot im Anschluss an die Insta


## Update


Das Addon sollte vor einem Update **nicht** deinstalliert werden, man installiert die neue Version einfach "darüber". Die Vorgehensweise ist genau die gleiche wie bei einer ersten [Installation](Installation) auch. Zur Sicherheit sollte auch vor einem RedMatic Update ein **Backup der CCU** angelegt werden.

Nach erfolgtem Update ist u.U. eine Löschung des Browser-Cache notwendig.



## Deinstallation

Im Homematic WebUI unter _Systemsteuerung_ - _Zusatzsoftware_ auf _Deinstallieren_ klicken:    
![](wiki/images/uninstall.png)

Das Addon sollte nach einigen Sekunden - selbst ohne Reboot - vollständig entfernt worden sein. 

__Achtung__: Hierbei werden auch die Node-RED Flows gelöscht. Wenn man diese vor der Deinstallation sichern möchte findet sich die Flows Datei hier: `/usr/local/addons/redmatic/var/flows.json`

Es ist auch möglich das Addon über die Kommandozeile zu entfernen: `/usr/local/etc/config/rc.d/redmatic uninstall`

Folgende Dateien und Ordner werden vom Addon auf der CCU Installiert, sollte eine Deinstallation nicht fehlerfrei ablaufen, können diese auch manuell gelöscht werden:

* /usr/local/addons/redmatic
* /usr/local/etc/config/addons/www/redmatic
* /usr/local/etc/config/lighttpd/redmatic.conf
* /usr/local/etc/config/rc.d/redmatic
* `redmatic` in /usr/local/etc/config/hm_addons.cfg


