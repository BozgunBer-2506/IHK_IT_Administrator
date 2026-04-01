# M03 Teil 3: IHK IT Administration

---

### Frage 1: Windows-Kommandozeile (CMD) Basics

Im Windows-Kommandozeilenmodus beginnt man häufig mit dem Befehl **cd**, der es erlaubt, in ein gewünschtes Verzeichnis zu wechseln. Zur Darstellung des Inhalts eines Ordners wird **dir** verwendet. Neue Verzeichnisse lassen sich mithilfe von **mkdir** erstellen. Um sich die gesamte Ordnerstruktur in logischer Struktur anzeigen zu lassen, empfiehlt sich **tree**. Soll eine Batchdatei aus einem anderen Skript ausgeführt werden, greift man auf **call** zurück.

---

### Frage 2: Spanning Tree Protocol (STP)

Die gleichzeitige Datenübertragung in alle Netzwerke würde zu einer **Schleife** führen, wenn keine Mechanismen wie STP implementiert wären, um redundante Pfade zu blockieren. STP identifiziert redundante Verbindungen in einem Netzwerk und **blockiert** eine Reihe von **Ports**, um sicherzustellen, dass nur ein einzigartiger Pfad zwischen Switches aktiv bleibt. STP wird auf **Switches** verwendet, nicht auf Routern.

---

### Frage 3: Vorteile von Subnetzen

Subnetze werden verwendet, um Netzwerke in logische Gruppen zu unterteilen und den Datenverkehr zu **segmentieren**. Dadurch können Sicherheitsrichtlinien auf bestimmte Subnetze angewendet werden, um die Sicherheit zu erhöhen. Die **logische Strukturierung** ist ein Nebeneffekt von Subnetzen. Sie ermöglichen eine effizientere Verwaltung des **Datenverkehrs** durch Segmentierung ve erleichtern es dem Systemadministrator, den Überblick über die **Ressourcen** zu behalten.

---

### Frage 4: Binär- und Dezimalzahlen

Eine der bekanntesten 8-Bit-Binärzahlen für lokale Netze ist **11000000**, was **dezimal** dem Wert 192 entspricht. Die Zahl **255** in Dezimal entspricht der Binärzahl 11111111. 11111110 wäre hingegen dezimal die Zahl **254**. Eine weitere Binärzahl für Netzwerkeinstellungen ist 10101000, welche dezimal **168** ergibt. Der Wert **4C** ist hexadezimal, während **19683** außerhalb des 8-Bit-Bereichs liegt. Der Begriff **Farbtiefe** ist hier nicht relevant.

---

### Frage 5: VLAN Routing

Ein **Router** kann verwendet werden, um den Datenaustausch zwischen VLANs zu ermöglichen. Für ein Routing benötigt man mindestens **2** Teilnehmer. Beim Routing werden Pakete zwischen verschiedenen Netzwerken basierend auf ihren **IP-Adressen** weitergeleitet. Layer-2-Switches können den Datenaustausch innerhalb desselben VLANs ermöglichen, aber nicht zwischen **verschiedenen VLANs**.

---

### Frage 6: Virtual Private Network (VPN)

Ein VPN ermöglicht eine sichere Kommunikation, als ob sich die Teilnehmer in einem **privaten Netzwerk** befinden würden. Beim **SSL VPN** wird eine sichere Verbindung über das Internet hergestellt, ohne physisches Kabel. VPN steht für **Virtual Private Network**. **IPsec-VPN** und SSL/TLS-VPN sind zwei gängige Arten von VPNs.

---

### Frage 7: Netzwerk-Topologie Analyse

Diese Frage enthält ein Netzwerk-Topologie-Diagramm mit fünf Komponenten, die an die richtige Stelle platziert werden müssen. Daher kann die Frage hier nicht angezeigt werden.

---

### Frage 8: Troubleshooting Begriffe

Troubleshooting beschreibt einen systematischen Prozess zur Behebung von Hardware-, Softwarefehlern und Netzwerkstörungen. Ein häufiges Problem ist die Netzwerküberlastung (Bandbreitenauslastung). Phasen: 1. Problemerkennung, 2. Informationssammlung, 3. Verifikation und Dokumentation.

---

### Frage 9: Mobilfunk & WLAN Standards

Die **GSM**-Technologie ermöglichte erstmals mobile **Datenübertragung**. Unterwegs nutzt man Mobilfunk, zu Hause **WLAN**. WLAN wird oft irrtümlich mit **Wi-Fi** gleichgesetzt (Wi-Fi ist nur die Zertifizierung). Aktuelle Standards wie **5G** erreichen Spitzenwerte bis zu 10 GB/s.

---

### Frage 10: IP-Identifikation & Organisation

Die Kommunikation zwischen Netzwerken erfolgt über einen **Router**. Das **Standardgateway** bezeichnet das Ziel für nicht-lokale Pakete. Adressen wie 192.168.2.84 sind **nicht over Internet** erreichbar. Zur Organisation nutzt man die **Subnetzmaske**. Die **Loopbackadresse** (127.0.0.1) spricht den eigenen Rechner an.

---

### Frage 11: Netzwerkmanagementsystem (NMS)

Ein **Netzwerkmanagementsystem** bietet zentrale Überwachung. Mithilfe von **Richtlinien** lassen sich Konfigurationsänderungen durchführen. Moderne Systeme nutzen **Künstliche Intelligenz** zur Optimierung. Ein NMS integriert verschiedene **Netzwerkmanagementprotokolle** und liefert Einblicke in die **Netzwerkflüsse**.

---

### Frage 12: Backup-Strategien Zuordnung

- Festplatte (HDD): Rotierende Platte, hohe Kapazität, geringe Kosten.
- **Inkrementelle Sicherung:** Speichert Änderungen seit dem zuletzt erstellten Backup.
- **Differentielle Sicherung:** Speichert Daten seit der letzten Vollsicherung.
- **Vollsicherung:** Sichert alle Daten in einem Schritt.
- **RDX:** Austauschbare Disk-Kartusche, robust.

---

### Frage 13: HCI (Hyperkonvergente Infrastruktur)

HCI integriert IT-Komponenten in einer softwarebasierten **Architektur**. Durch Kombination physischer **Nodes** entsteht ein Cluster. Die **Datenebene** stellt Speicher/Netzwerk bereit, während das **Management** die zentrale Verwaltung ermöglicht. HCI arbeitet mit Containern oder **VMs**.

---

### Frage 14: Cloud Backup Varianten

- **Direktes Cloudbackup:** Unmittelbar vom Endgerät in die Cloud.
- Backup as a Service (BaaS): Dienstleister verwaltet die Infrastruktur.
- **Multi Region Backup:** Replikation over mehrere Standorte.
- **Cloud to Cloud Backup:** Sicherung eines Cloud-Dienstes durch einen anderen.
- **Self hosted Backup:** Backups auf eigenen Servern in der Cloud.

---

### Frage 15: RAID-Systeme

- RAID 0: Hohe Geschwindigkeit, keine Redundanz.
- RAID 10: Kombiniert Striping und Mirroring.
- RAID 5: Verteilte Parität, verkraftet Ausfall einer Platte.
- RAID 6: Verkraftet Ausfall von zwei Platten.
- RAID 1: Einfache Spiegelung.

---

### Frage 16: Computer-Konfigurationsrichtlinien (GPO)

GPOs steuern **Windows-Updates**, um Geräte aktuell zu halten. Administratoren können **Software** bereitstellen ve **Energiesparoptionen** (Ruhezustand) konfigurieren. **Benutzerprofile** werden nicht per GPO, sondern over AD direkt verwaltet.

---

### Frage 17: AD-Kontosicherheit

Das Löschen von **Protokollen** erschwert die Nachverfolgung. **Zwei-Faktor-Authentifizierung** bietet eine zusätzliche **Sicherheitsebene**. **Komplexe** Passwörter verringern das Hack-Risiko. Mehr Gruppenmitgliedschaften geben dem Benutzer **mehr Rechte**, ama güvenliği artırmaz.

---

### Frage 18: Domänenbeitritt Voraussetzungen

Der Client benötigt eine **Netzwerkconnection** zum DC. Die **DNS-Einstellungen** müssen auf den DC zeigen. Der **Computername** muss eindeutig sein ve das OS muss **domänenfähig** sein (e.g. Windows Pro).

---

### Frage 19: GPO Netzlaufwerke

In der Verwaltung wählt man "Neue GPO erstellen" ve nennt sie Netzlaufwerke. Der Pfad im Editor: Benutzerkonfiguration -> Einstellungen -> Laufwerkszuordnung. Beispielpfad: \DC01\Testdrucker. Option: Verbindung wiederherstellen.

---

### Frage 20: Hyper-V VM Einstellungen

Der **Festplattenspeicher** bestimmt die Größe auf dem Datenträger. Der **RAM** legt den Arbeitsspeicher fest. **Dynamischer Arbeitsspeicher** passt den RAM flexibel an. **ISO Images** dienen als Installationsmedium. Die **vCPU** determines the count of virtual cores.

---

### Frage 21: PowerShell Befehle I

- Get-Process: Laufende Prozesse überwachen.
- Copy-Item: Dateien/Ordner übertragen.
- Get-Command: Liste aller verfügbaren Cmdlets.
- Get-Service: Status installierter Dienste.
- Get-Help: Hilfestellungen zu Befehlen.

---

### Frage 22: PowerShell vs. GUI

Administratoren nutzen die **Hilfe-Funktion** für Parameter. Mit PowerShell lassen sich **spezielle Aufgaben** (Admin-Tasks) einfacher lösen. Erfahrene Nutzer nutzen **PowerShell**, während weniger erfahrene Nutzer die **grafische Benutzeroberfläche** (GUI) nutzen sollten.

---

### Frage 23: Remote Computing Protokolle

PowerShell supports Remote Computing via WMI, **RPC** and WS-Management. Administratoren können damit mehrere PCs fernsteuern, Systeme verwalten ve einen **Dienst** starten/stoppen. `Get-Process -Id 1234` zeigt den **Prozess** with ID 1234.

---

### Frage 24: CMD Dateioperationen

- **mkdir:** Neues Verzeichnis erstellen.
- **cd:** Verzeichnis wechseln.
- **tree:** Verzeichnisbaum anzeigen.
- **cls:** Bildschirm leeren.
- **call:** Batch-Datei out of another.

---

### Frage 25: CMD vs. PowerShell Unterschiede

PowerShell nutzt **Ausführungsrichtlinien** für Skripte. Beide haben unterschiedliche **Syntax**. PowerShell is **skriptorientierter** ve bietet **komplexere** Funktionen. Während CMD auf Text basiert, arbeitet PowerShell mit **Objekten**.

---

### Frage 26: PowerShell Einsatzgebiete

PowerShell is ideal for **komplexere Aufgaben**. Sie is auf **Automatisierung** ausgelegt ve nutzt **Module** for Windows-Updates. Besonders effizient is sie bei der Verwaltung von **Active Directory-Benutzern** and groups.

---

### Frage 27: PowerShell Cmdlets II

- Get-Process: Anzeige von Prozessen.
- Get-Service: Dienste verwalten.
- Get-Acl: Anzeige von Zugriffsrechten.
- Get-NetFirewallRule: Firewall-Regeln auslesen/anpassen.

---

### Frage 28: PowerShell Remote Sessions

PowerShell enables **Remote Computing** for multiple **PCs**. Eine interaktive Sitzung startet man mit **Enter-PSSession** ve beendet sie mit **Exit-PSSession**. Einzelne Befehle führt man over **Invoke-Command** aus.

---

### Frage 29: PowerShell Sicherheit & Admin

CMD hat keine Ausführungsrichtlinien ve is therefore **weniger sicher**. PowerShell wird auf allen Windows-Systemen **genutzt** ve lässt sich over GPOs **konfigurieren**. Ohne Admin-Rechte is PowerShell oft **eingeschränkt**. Ausführungsrichtlinien helfen, die Sicherheit **zu erhöhen**.

---

### Frage 30: PowerShell-Skripte Fakten

PowerShell-Skripte können per Rechtsklick -> **"mit PowerShell ausführen"** gestartet werden. Die **PowerShell ISE** is reachable via Search. Skripte dienen primär dazu, Verwaltungsaufgaben zu **automatisieren**. (Extension is `.ps1`, not `.html`).

---

### Frage 31: Vorteile PowerShell ISE

Die ISE bietet **Autovervollständigung** and **Syntaxhervorhebung**. Sie stellt eine **grafische Benutzeroberfläche** zum Schreiben and Debuggen von Skripten bereit.

---

### Frage 32: Remote-Verwaltung Protokolle

PowerShell kann over the network auf entfernte Systeme zugreifen. Die Einrichtung erfolgt meist over **Windows-Remoting-Protokoll (WinRM)**.

---

### Frage 33: Ziele von Remote PowerShell

Hauptziele sind: Viele PCs im Netzwerk gleichzeitig anzusprechen and die Automatisierung von IT-Operationen (e.g., Software-Updates, User-Creation).

---

### Frage 34: Interaktive Sitzung starten

Um eine interaktive Sitzung mit einem Remotecomputer zu starten, wird das Cmdlet **Enter-PSSession** verwendet.

---

### Frage 35: RPC Unterstützung (PS 7)

Ab PowerShell 7 wird RPC (Remote Procedure Call) **nur under Windows** supported.

---

### Frage 36: Keine CMD Befehle

Begriffe wie **Die** or **Tru** are not valid CMD-commands (in contrast to `dir`, `cd`, `tree`).

---

### Frage 37: Skripterstellung Unterschiede

PowerShell supports **Objektorientierung**, CMD not. Zudem können PowerShell-Skripte direkt auf **.NET-Framework-Klassen** zugreifen.

---

### Frage 38: Befehl "curl"

Der Befehl `curl` wird zum Datentransfer used ve löscht keine Dateien. Die Aussage is therefore **Falsch**.

---

### Frage 39: PowerShell Aliase

Der Alias `ps` steht for `Get-Process` ve not for "product search". Die Aussage is therefore **Falsch**.

---

### Frage 40: SAN vs. DAS

Ein **SAN** (Storage Area Network) allows significantly larger distances between server ve storage than a **DAS** (Direct Attached Storage).
