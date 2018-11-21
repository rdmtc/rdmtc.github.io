# Installation


## CCU3 / RaspberryMatic

* Zur Sicherheit __ein Backup der CCU anfertigen__.
* Neueste Version von https://github.com/hobbyquaker/RedMatic/releases/latest herunterladen. Es wird die Datei 
`redmatic-<version>.tar.gz` benötigt: ![](/wiki/images/install-1.png)
* Im Homematic WebUI Systemsteuerung Zusatzsoftware aufrufen: ![](/wiki/images/install-2.png) ![](/wiki/images/install-3.png)
* Heruntergeladene Datei auswählen: ![](/wiki/images/install-4.png) ![](/wiki/images/install-5.png)
* Datei auf die CCU hochladen: ![](/wiki/images/install-6.png)
* Installation Starten: ![](/wiki/images/install-7.png)
* Im Anschluss abwarten bis sich die CCU neu gestartet hat - hier ist Geduld erforderlich. Die Installation von RedMatic benötigt einige Zeit.
* Node-RED ist unter `http://<ccu-adresse>/addons/red` erreichbar.
* Node-RED Dashboard ist unter `http://<ccu-adresse>/addons/red/ui` erreichbar.

### CUxD und Homematic-Wired

Per Default werden die Schnittstellenprozesse CUxD und hs485d (wired) nicht aktiviert. Für eine Zukünftige Version ist dies geplant (https://github.com/hobbyquaker/RedMatic/issues/34), Stand heute muss das noch manuell im _ccu configuration_ Node gemacht werden.

### rmupdate

RedMatic lässt sich auch über das [Addon rmupdate](https://github.com/j-a-n/raspberrymatic-addon-rmupdate) installieren und updaten. Dies bietet den Vorteil dass kein überflüssiger Zwangs-Reboot im Anschluss an die Insta


## Standalone

... TODO ... :)