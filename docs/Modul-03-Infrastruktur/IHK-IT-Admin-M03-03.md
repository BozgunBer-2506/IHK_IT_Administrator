# M03 Teil 3: IHK IT Administration

---

### Frage 1: Windows-Kommandozeile (CMD) Basics

Im Windows-Kommandozeilenmodus beginnt man häufig mit dem Befehl **[cd]**, der es erlaubt, in ein gewünschtes Verzeichnis zu wechseln. Zur Darstellung des Inhalts eines Ordners wird **[dir]** verwendet. Neue Verzeichnisse lassen sich mithilfe von **[mkdir]** erstellen. Um sich die gesamte Ordnerstruktur in logischer Struktur anzeigen zu lassen, empfiehlt sich **[tree]**. Soll eine Batchdatei aus einem anderen Skript ausgeführt werden, greift man auf **[call]** zurück.

---

### Frage 2: Wie verhindert das STP(Spanning Tree Protocol) Loops in Switches?

Die gleichzeitige Datenübertragung in alle Netzwerke würde zu einer **[Schleife]** führen, wenn keine Mechanismen wie STP implementiert wären, um redundante Pfade zu blockieren. STP identifiziert redundante Verbindungen in einem Netzwerk und **[blockiert]** eine Reihe von **[Ports]**, um sicherzustellen, dass nur ein einzigartiger Pfad zwischen Switches aktiv bleibt. Dadurch werden Schleifen eliminiert, die zu Netzwerkstörungen führen könnten. STP wird auf **[Switches]** verwendet, nicht auf Routern.

---

### Frage 3: Welche Vorteile haben Subnetze?

Subnetze werden verwendet, um Netzwerke in logische Gruppen zu unterteilen und den Datenverkehr zu **[segmentieren]**. Dadurch können Sicherheitsrichtlinien auf bestimmte Subnetze angewendet werden, um die Sicherheit zu erhöhen. Die **[logische Strukturierung]** ist ein Nebeneffekt von Subnetzen. Subnetze tragen normalerweise nicht zur Erhöhung der Netzlast bei. Sie ermöglichen vielmehr eine effizientere Verwaltung des **[Datenverkehrs]** durch Segmentierung. Subnetze helfen, das Netzwerk zu organisieren und zu strukturieren, was es dem Systemadministrator erleichtert, den Überblick über die **[Ressourcen]** zu behalten.

---

### Frage 4: Binär- und Dezimalzahlen Umrechnung

Binärzahlen basieren auf dem Zweiersystem und bestehen nur aus den Ziffern 0 und 1. Eine der bekanntesten 8-Bit-Binärzahlen für lokale Netze ist **[11000000]**, was **[dezimal]** dem Wert 192 entspricht. Die Zahl **[255]** in Dezimal entspricht der Binärzahl 11111111. 11111110 wäre hingegen dezimal die Zahl **[254]**. Eine weitere Binärzahl für Netzwerkeinstellungen ist 10101000, welche dezimal **[168]** ergibt. Der Wert **[4C]** ist nicht direkt als Binärzahl erkennbar, sondern hexadezimal. Ebenso ist **[19683]** zwar eine gültige Dezimalzahl, aber außerhalb des 8-stelligen Binärbereichs. Der Begriff **[Farbtiefe]** ist nicht relevant für die Darstellung oder Umrechnung von Binärzahlen.

---

### Frage 5: Welche Aussagen zum VLAN Routing sind korrekt?

Ein **[Router]** kann verwendet werden, um den Datenaustausch zwischen VLANs zu ermöglichen. Für ein Routing benötigt man mindestens **[2]** Teilnehmer. Beim Routing werden Pakete zwischen verschiedenen Netzwerken basierend auf ihren **[IP‑Adressen]** weitergeleitet. Layer-2-Switches können den Datenaustausch zwischen Geräten innerhalb desselben VLANs ermöglichen, aber nicht zwischen **[verschiedenen VLANs]**. Dafür ist Routing erforderlich, das normalerweise auf Layer-3-Geräten wie Routern oder Layer-3-Switches erfolgt.

---

### Frage 6: Welche Aussagen zu VPN sind korrekt?

Ein VPN schafft ein privates Netzwerk, das über ein öffentliches Netzwerk wie das Internet zugänglich ist. Es ermöglicht eine sichere Kommunikation zwischen den Teilnehmern, als ob sie sich in einem **[privaten Netzwerk]** befinden würden. Beim **[SSL VPN]** wird eine sichere Verbindung über das Internet hergestellt, ohne dass ein physisches Netzwerkkabel an ein anderes Netz angeschlossen wird. VPN steht für **[Virtual Private Network]**. **[IPsec‑VPN]** und SSL/TLS-VPN sind zwei gängige Arten von VPNs, die unterschiedliche Technologien und Protokolle verwenden.

---

### Frage 8: Troubleshooting Phasen

Der Begriff Troubleshooting beschreibt einen systematischen Prozess zur schnellen und zielgerichteten Behebung von sowohl Hardware- oder Softwarefehlern als auch **[Netzwerkstörungen]**. Ein häufig auftretendes Problem ist die **[Netzwerküberlastung]**, bei der durch übermäßigen Datenverkehr die Bandbreite ausgelastet wird und die Leistung für Nutzer sinkt. Der erste Schritt im Rahmen des Troubleshooting ist die **[Problemerkennung]**, bei der Warnmeldungen und Systemereignisse erfasst und analysiert werden. In der zweiten Phase erfolgt die **[Informationssammlung]**, bei der Logs, Systemmeldungen, Nutzerberichte und Monitoring-Daten analysiert werden. In der letzten Phase des Troubleshootings erfolgt die **[Verifikation und Dokumentation]**, bei der überprüft wird, ob das Problem dauerhaft gelöst ist.

---

### Frage 9: Mobilfunk & WLAN Standards

Die **[GSM]**-Technologie markierte das erste digitale Mobilfunknetz und ermöglichte neben der Telefonie erstmals mobile **[Datenübertragung]**. Im Alltag setzen viele Geräte unterwegs auf Mobilfunknetze und nutzen zu Hause oder im Büro **[WLAN]**. Häufig werden moderne WLAN-Verbindungen irrtümlich mit **[Wi‑Fi]** gleichgesetzt, obwohl Letzteres lediglich eine Zertifizierung des IEEE-802.11-Standards darstellt. Bandbreiten von 9,6 Kbit/s sind im Vergleich zu aktuellen Standards wie LTE oder **[5G]** mit Spitzenwerten bis zu 10 GB/s extrem langsamer gewesen.

---

### Frage 10: IP-Identifikation & Organisation

Eine IP-Adresse wird verwendet, um ein Gerät in einem Netzwerk eindeutig zu identifizieren. Die Kommunikation zwischen Netzwerken erfolgt über einen **[Router]**. Das **[Standardgateway]** bezeichnet das Ziel für nicht-lokale IP-Pakete. Adressen wie zum Beispiel 192.168.2.84 sind **[nicht über Internet]** erreichbar. Zur Organisation von IP-Adressen verwendet man die **[Subnetzmaske]**, z. B. 255.255.255.0, um Subnetze zu definieren. Eine besondere Adresse ist die **[Loopbackadresse]**, z. B. 127.0.0.1, die den eigenen Rechner anspricht.

---

### Frage 11: Netzwerkmanagementsystem (NMS)

Ein **[Netzwerkmanagementsystem]** bietet zentrale Funktionen zur Überwachung und Verwaltung von Netzwerken. Mit Hilfe von **[Richtlinien]** lassen sich Konfigurationsänderungen durchführen, um Probleme gezielt zu beheben. Moderne Systeme nutzen zunehmend **[künstliche Intelligenz]**, um Netzwerkvorgänge automatisch zu optimieren. Zur Identifikation von Netzwerkelementen integriert ein NMS verschiedene **[Netzwerkmanagementprotokolle]**. Zur Analyse der Netzwerkauslastung liefert es Einblicke in die **[Netzwerkflüsse]**.

---

### Frage 12: Backup Strategien Zuordnung

- Rotierende Platte, hohe Kapazität, geringe Kosten = **[Festplatte (HDD)]**
- Speichert die Änderungen seit dem zuletzt erstellten Backup = **[Inkrementelle Sicherung]**
- Speichert die Daten, die seit der letzten Vollsicherung geändert wurden = **[Differentielle Sicherung]**
- Sichert alle Daten in einem Schritt = **[Vollsicherung]**
- Austauschbare Disk-Kartusche, robust, Offsite-Archivierung = **[RDX]**

---

### Frage 13: Hyperkonvergente Infrastruktur (HCI)

Die Hyperkonvergente Infrastruktur (HCI) integriert verschiedene IT-Komponenten in einer einzigen, softwarebasierten **[Architektur]**. Durch die Kombination mehrerer physischer **[Nodes]** entsteht ein Cluster, der gemeinsam genutzt wird. Zu den zentralen Bestandteilen gehört die verteilte **[Datenebene]**, die Dienste wie Speicher, Netzwerk und Virtualisierung bereitstellt. Eine zweite wichtige Ebene ist die **[Management]**, welche die zentrale Verwaltung aller Ressourcen ermöglicht. HCI-Systeme arbeiten unabhängig davon, ob Anwendungen in Containern oder als **[VMs]** betrieben werden.

---

### Frage 14: Cloud Backup Varianten

Klassische Methode: **[Direktes Cloudbackup]**, bei dem Daten unmittelbar vom Endgerät in die Cloud übertragen werden. Ein anderer Ansatz ist **[Backup as a Service]**, wobei der Dienstleister die gesamte Infrastruktur stellt. Zur Absicherung gegen Ausfälle setzen viele Anbieter auf das **[Multi Region Backup]**. Wird ein Cloud-Dienst durch einen anderen gesichert, spricht man von **[Cloud to Cloud Backup]**. Unternehmen mit eigener Infrastruktur setzen oft auf **[Self hosted Backup]**. Keine Cloud-Varianten sind: **[Datenmemory]**, **[DVD Sicherung]** und **[NAS to USB (NAtUS)]**.

---

### Frage 15: RAID-Systeme

**[RAID 0]** ist bekannt für hohe Geschwindigkeit, bietet aber keine Redundanz. **[RAID 10]** kombiniert Striping und Mirroring. **[RAID 5]** verwendet verteilte Parität und ermöglicht den Ausfall einer einzelnen Festplatte. Für eine noch höhere Ausfallsicherheit ist **[RAID 6]** geeignet (Ausfall von zwei Festplatten). Eine einfache Spiegelung ohne Striping wird durch **[RAID 1]** realisiert. Fiktive oder falsche Begriffe: **[REID]**, **[RAID 8]**, **[RAID X]**.

---

### Frage 16: Backup Medien Detailzuordnung

- Permanentes magnetisches Speichermedium mit rotierenden Platten → **Festplatte**
- Sichert alle Daten unabhängig von vorherigen Sicherungen in einem Schritt → **Vollsicherung**
- Speichert ausschließlich die Änderungen seit dem zuletzt erstellten Backup → **Inkrementelle Sicherung**
- Robustes Wechseldatenträger-System mit austauschbaren Disk-Kartuschen → **RDX**
- Erfasst nur die Daten, die seit der letzten Vollsicherung geändert wurden → **Differentielle Sicherung**

---

### Frage 17: Computer-Konfigurationsrichtlinien (GPO)

Computer-Konfigurationsrichtlinien steuern verschiedene Einstellungen. GPOs ermöglichen die Steuerung von **[Windows‑Updates]**-Richtlinien für Computer, um Geräte auf dem aktuellen Stand zu halten. Administratoren können über GPOs auch **[Software]** auf Computern bereitstellen und bei Bedarf installieren. GPOs können verwendet werden, um **[Energiesparoptionen]** wie Ruhezustand oder Standby zu konfigurieren. **[Benutzerprofile]** werden nicht durch GPOs, sondern durch Active Directory verwaltet.

---

### Frage 18: AD-Kontosicherheit

Verschiedene Maßnahmen erhöhen die Sicherheit eines Benutzerkontos in einer AD-Domäne. Das Löschen von **[Protokollen]** erhöht nicht die Sicherheit, sondern erschwert die Nachverfolgung. Zwei-Faktor-Authentifizierung bietet eine zusätzliche **[Sicherheitsebene]** für Benutzerkonten. **[Komplexe]** Passwörter verringern das Risiko, dass ein Konto gehackt wird. "Um Abläufe zu vereinfachen, sollte der Benutzer in allen verfügbaren Gruppen integriert sein." Dies würde dem Benutzer **[mehr Rechte]** geben, erhöht aber nicht die Sicherheit.

---

### Frage 19: Damit ein Client einer Windows-Domäne beitreten kann

Damit ein Client einer Windows-Domäne beitreten kann, müssen einige Voraussetzungen erfüllt sein. Der Client muss eine **[Netzwerkverbindung]** zum Domänencontroller haben. Die **[DNS‑Einstellungen]** müssen auf den Domänencontroller zeigen. Der **[Computername]** sollte eindeutig im Netzwerk sein. Das Betriebssystem muss **[domänenfähig]** sein (z. B. Windows Pro oder Enterprise).

---

### Frage 20: GPO Freigabe von Netzlaufwerken

In der Gruppenrichtlinienverwaltung legt man über **["Neue GPO erstellen"]** eine neue GPO zur Freigabe von Netzlaufwerken an und vergibt den Namen **[Netzlaufwerke]**. Um Netzlaufwerke zu verteilen, öffnet man den Editor unter **[Benutzerkonfiguration]** → Einstellungen → Windows-Einstellungen → Laufwerkszuordnung. Für den Pfad gibt man zum Beispiel den Freigabepfad **[\\DC01\Testdrucker]** ein und aktiviert die Option **[Verbindung wiederherstellen]**, damit die Verbindung bei Neustart erhalten bleibt.

---

### Frage 21: Beim Einrichten einer virtuellen Maschine

Beim Einrichten einer virtuellen Maschine müssen verschiedene Einstellungen vorgenommen werden. Der **[Festplattenspeicher]** bestimmt die Größe des zugewiesenen Speichers auf dem physischen Datenträger. Über den **[RAM]** wird die Größe des Arbeitsspeichers für die VM festgelegt. Bei Bedarf kann der **[dynamische Arbeitsspeicher]** aktiviert werden, um die RAM-Auslastung flexibel an die Auslastung der VM anzupassen. Mithilfe eines **[ISO Images]** lässt sich ein Betriebssystem-Installationsmedium in die VM einbinden. Die Einstellung **[vCPU]** legt fest, wie viele virtuelle Prozessorkerne der VM zugewiesen werden.

---

### Frage 22: Wichtige PowerShell-Befehle

Mit dem PowerShell-Befehl **[Get‑Process]** lassen sich alle aktuell laufenden Prozesse im Blick behalten. Über **[Copy‑Item]** können Dateien und Ordner sicher und effizient übertragen werden. Mithilfe von **[Get‑Command]** erhält man Zugriff auf die vollständige Liste aller verfügbaren PowerShell-Cmdlets. Einen detaillierten Einblick in installierte Dienste und ihren Status liefert **[Get‑Service]**. Abschließend bietet **[Get‑Help]** umfassende Informationen und Hilfestellungen zu jedem einzelnen Befehl.

---

### Frage 23: PowerShell Nutzung im Admin-Alltag

Administratoren nutzen häufig die Powershell. Zu allen Themen und Parametern kann auch in der Powershell oder Kommandozeile eine **[Hilfe‑Funktion]** aufgerufen werden. Mit Hilfe der Powershell lassen sich **[spezielle Aufgaben]** (Administratoraufgaben) oftmals einfacher lösen. Spezielle Aufgaben sollten von erfahrenen Nutzern mithilfe der **[Powershell]** erledigt werden. Wenig erfahrene Nutzer sollten die **[grafische Benutzeroberfläche]** für ihre Aufgaben nutzen.

---

### Frage 24: PowerShell Automatisierung und Remote

Sie unterstützt Remote Computing mithilfe von WMI, **[RPC]** und WS-Management. Damit können Administratoren mehrere PCs aus der Ferne ansprechen. Mit Powershell lassen sich Systeme verwalten, Updates ausrollen oder beispielsweise einen **[Dienst]** starten/stoppen. Ein typischer Powershell Befehl `Get-Process -Id 1234` zeigt den **[Prozess]** mit der ID 1234.

---

### Frage 25: Windows-Eingabeaufforderung (CMD) Befehle

Der Befehl **[mkdir]** dient dazu, ein neues Verzeichnis zu erstellen. Mit **[cd]** kann man zwischen Verzeichnissen wechseln. Um die Struktur eines Ordners als Verzeichnisbaum anzuzeigen, wird **[tree]** verwendet. Der Befehl "call" kann genutzt werden, um eine andere Batch-Datei aufzurufen. **[cls]** wird verwendet, um den Bildschirm der Konsole zu leeren.

---

### Frage 26: Worin unterscheiden sich CMD und PowerShell?

PowerShell hat erweiterte Berechtigungen und Sicherheitsrichtlinien (z. B. **[Ausführungsrichtlinien]** für Skripte). CMD und PowerShell nutzen unterschiedliche Befehlssätze und **[Syntax]**. PowerShell ist umfassender und **[skriptorientierter]**. PowerShell ist das bevorzugte Werkzeug für moderne administrative Aufgaben, da es **[komplexere]** Funktionen bietet. PowerShell arbeitet mit **[Objekten]** und ermöglicht komplexere Datenverarbeitung als CMD.

---

### Frage 27: Welche Aufgaben eignen sich besonders gut für PowerShell?

PowerShell ist ein Standardtool für das Active Directory-Management. Während CMD für einfache Dateioperationen genutzt wird, ist PowerShell für **[komplexere Aufgaben]** ideal. PowerShell ist auf **[Automatisierung]** ausgelegt, um Abläufe automatisch zu koordinieren. PowerShell hat **[Module]**, die die Verwaltung von Windows-Updates unterstützen. Powershell eignet sich besonders für die Verwaltung von **[Active Directory‑Benutzern]** und -Gruppen.

---

### Frage 28: PowerShell zur Systemadministration

Mit dem Befehl **[Get‑Process]** können Prozesse auf dem System angezeigt werden. Um Dienste zu verwalten, nutzt man beispielsweise **[Get‑Service]**. Wenn man Benutzerrechte analysieren möchte, eignet sich der Befehl "Get-Acl" zur Anzeige von **[Zugriffsrechten]**. Firewall-Regeln lassen sich über spezielle Cmdlets wie **[Get‑NetFirewallRule]** anpassen oder auslesen.

---

### Frage 29: Remote Computing Protokolle

PowerShell unterstützt **[Remote Computing]** mithilfe von WMI, RPC und WS-Management. Damit können Administratoren mehrere **[PCs]** aus der Ferne ansprechen. Eine interaktive Sitzung startet man mit **[Enter‑PSSession]** und beendet sie mit **[Exit‑PSSession]**. Einzelne Befehle auf entfernten Systemen führt man über **[Invoke‑Command]** aus.

---

### Frage 30: Sicherheitsaspekte im Vergleich

CMD hat keine Ausführungsrichtlinien für Skripte wie PowerShell, was CMD im Vergleich **[weniger sicher macht]**. PowerShell ist auf allen Windows-Versionen verfügbar und wird nicht nur auf Servern **[genutzt]**. PowerShell lässt sich durch Gruppenrichtlinien **[konfigurieren]**. PowerShell benötigt oft Administratorrechte und ist ohne diese **[eingeschränkt]**. PowerShell verwendet Ausführungsrichtlinien, um die Sicherheit **[zu erhöhen]**.

---

### Frage 31: Aussagen zu Powershell-Skripten (Richtig)

- **In der Powershell lassen sich viele Verwaltungsaufgaben mit Hilfe von Skripten automatisieren.**
- **Um eine PowerShell-Skript Datei auszuführen: Rechtsklick -> "mit PowerShell ausführen".**
- **Die PowerShell ISE kann einfach über die Suchfunktion von Windows aufgerufen werden.**

---

### Frage 32: Vorteile von PowerShell ISE (Richtig)

- **Die ISE bietet eine grafische Benutzeroberfläche zum Schreiben und Debuggen von Skripten.**
- **Powershell ISE bietet Autovervollständigung und Syntaxhervorhebung.**

---

### Frage 33: Remote-Verwaltung mit PowerShell (Richtig)

- **PowerShell kann über das Netzwerk auf entfernte Systeme zugreifen.**
- **PowerShell-Remoting kann über das Windows-Remoting-Protokoll (WinRM) eingerichtet werden.**

---

### Frage 34: Was ist das Ziel der Remote PowerShell? (Richtig)

- **Viele PC’s im Netzwerk gleichzeitig anzusprechen.**
- **Zur Automatisierung.**

---

### Frage 35: Interaktive Sitzung mit Remotecomputer

Antwort: **CMDlet „Enter-PSSession“ verwendet**.

---

### Frage 36: RPC ab PowerShell 7 Unterstützung

Antwort: **Nur Windows**.

---

### Frage 37: Was sind KEINE CMD Befehle?

Antwort: **Die**, **Tru**.

---

### Frage 38: Skripterstellung Unterschied (Richtig)

- **PowerShell unterstützt Objektorientierung, CMD nicht.**
- **PowerShell-Skripte können direkt auf .NET-Framework-Klassen zugreifen.**

---

### Frage 39: Was macht der Befehl "curl"? Er löscht Dateien.

Antwort: **Falsch**.

---

### Frage 40: Alias "ps" = "product search"?

Antwort: **Falsch** (Es ist der Alias für Get-Process).
