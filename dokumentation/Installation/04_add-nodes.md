# Zusätzliche Nodes installieren

Node-RED kann durch zusätzliche _Nodes_ erweitert werden, eine große und aktive Community hat Stand Heute bereits weit über 1000 Nodes entwickelt die unterschiedlichste Anwendungsfälle abdecken und diverse Services und Systeme an Node-RED anbinden.

* [Verzeichnis aller verfügbarer Nodes auf nodered.org](https://flows.nodered.org/?type=node&num_pages=1)
* [Erfolgreich auf RedMatic getestete Nodes (bitte ergänzen!)](/wiki/Erfolgreich-getestete-Nodes.html)

Nicht alle Nodes lassen sich auf einer CCU installieren. Es gibt Nodes die bei der Installation Binärmodule compilieren
müssen, dies ist auf der CCU bzw. RaspberryMatic nicht praktikabel machbar (Buildroot ist nicht dafür vorgesehen die
dafür notwendigen Tools wie z.B. gcc zu installieren). Dies betrifft u.A. Nodes die Zugriff auf Hardware (z.B.
Bluetooth) benötigen. Falls der Wunsch besteht bestimmte Nodes zu nutzen die sich nicht installieren lassen kann gerne
ein [Issue](https://github.com/hobbyquaker/ccu-addon-node-red/issues) angelegt werden, es ist dann u.U. möglich die
Nodes mit vorab gebauten Binärmodulen mit in das CCU Addon Paket aufzunehmen.


## Backup

Zur Sicherheit vor dem Installieren zusätzlicher Nodes ein **Backup der CCU anlegen!**

## Installation via Node-RED Admin UI

![](/wiki/images/node-install-1.png)

![](/wiki/images/node-install-2.png)


## Installation via Command Line

```
export PATH=/usr/local/addons/redmatic/bin:$PATH
cd /usr/local/addons/redmatic/var
npm install --save --no-package-lock --global-style --save-prefix="~" --production <paket-name>
```

## Manuelle Deinstallation von Nodes


Mangelhafte Nodes können im schlimmsten Fall zum Node-RED Absturz führen. Falls dieses Problem auftritt ist es nötig den Node manuell zu entfernen da das Node-RED UI ja nicht mehr genutzt werden kann. Hierzu wie folgt vorgehen:
```
export PATH=/usr/local/addons/redmatic/bin:$PATH
cd /usr/local/addons/redmatic/var
npm remove --save --no-package-lock <paket-name>
```
Alternativ kann natürlich auch einfach ein vor der Node Installation erstelltes CCU Backup zurückgespielt werden.

## Kommentar: Wie kann ich die Qualität von Node-RED Nodes beurteilen?

> > V 0.0.1 (sagt vielleicht schon alles?).
>
> Mja, Node-RED krankt (wie imho auch andere Smart Home Software oder generell Open Source Frameworks mit Plugin-Konzept) an der sehr unterschiedlichen Qualität der Plugins/Adapter/Bindings/Nodes/Treiber/... Die Bandbreite reicht von "ohne Doku hingeworfen, keinerlei Support, keine Updates" bis zu "Super getestet, ausführlichst dokumentiert, spitzen Support, regelmäßige Updates" ;-)
>
> Als Tipp um die Qualität von sowas zu beurteilen würde ich raten: Github Seite anschauen. Das Projekt sollte schon ein gewisses Alter haben, der letzte Commit sollte aber auch nicht allzu lange her sein, Issue Tracker anschauen - wird anständig supportet - wird auf Issues reagiert und wie lange lässt sich der Entwickler dafür Zeit? Wird es überhaupt von einer Nennenswerten Anzahl Usern benutzt (Github Issues, Github Sternchen, Download Counter auf flows.nodered.org)? Gibt/gab es Pull Requests (sprich: beteiligen sich Leute am Projekt oder ist es eine 1-Man-Show)?, gibt es eine ordentliche Doku/Readme? Auch ein guter Hinweis auf die Aktivität des Entwicklers ist seine Github-Profilseite, da gibts es diese Grafik mit den grünen Kästchen von der Du ablesen kannst wie aktiv der Entwickler insgesamt auf Github war/ist und auch ein Blick auf seine evtl. anderen Projekte schadet nicht.
>
> Auch ganz praktisch: https://npms.io/ scannt alle Node-Module (auch alle Node-RED Nodes sind da zu finden) und erstellt 3 Bewertungen: Popularität, Qualität und Maintenance, was dort angezeigt wird ist meistens recht treffend, jedenfalls was Qualität und Maintenance angeht, Popularität ist bei so Smart Home Sachen meistens sehr niedrig und daher eher weniger aussagekräftig.

(ursprünglich aus https://homematic-forum.de/forum/viewtopic.php?f=41&t=43508&p=446462#p446462)
