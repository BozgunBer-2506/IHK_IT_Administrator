# M03 Teil 2: IHK IT Administration

---

### Frage 1: Backup-Strategien & Medien

- **Festplatte (HDD):** Rotierende Platte, hohe Kapazität, geringe Kosten.
- **Inkrementelle Sicherung:** Speichert die Änderungen seit dem zuletzt erstellten Backup.
- **Differentielle Sicherung:** Speichert die Daten, die seit der letzten Vollsicherung geändert wurden.
- **Vollsicherung:** Sichert alle Daten in einem Schritt.
- **RDX:** Austauschbare Disk-Kartusche, robust, Offsite-Archivierung.

---

### Frage 2: GPO Computer-Konfiguration

GPOs ermöglichen die Steuerung von **Windows-Updates**, um Geräte aktuell zu halten. Administratoren können **Software** bereitstellen ve **Energiesparoptionen** (Ruhezustand) konfigurieren. **Benutzerprofile** werden direkt im Active Directory verwaltet, nicht per GPO.

---

### Frage 3: Organisationseinheiten (OUs)

OUs dienen der Verwaltung von **Objekten** ve bieten eine **logische Struktur**. Sie enthalten keine **Benutzerkennwörter** (diese liegen in der AD-Datenbank) ve erlauben die **Vererbung** von GPOs.

---

### Frage 4: AD-Kontosicherheit

Das Löschen von **Protokollen** erschwert die Nachverfolgung. 2FA bietet eine zusätzliche **Sicherheitsebene**. **Komplexe** Passwörter schützen vor Hacks. Mehr Gruppenmitgliedschaften geben **mehr Rechte**, ama güvenliği artırmaz.

---

### Frage 5: Anmelderichtlinien

**Zwei-Faktor-Authentifizierung** fügt eine zusätzliche Sicherheitsstufe hinzu. Einfache **Passwörter** sind unsicher. Das **Deaktivieren** der Protokollierung verringert die Sicherheit. Mehr als 5 Fehlversuche geben Hackern **mehr Zeit**. Wichtig: Regelmäßiger **Passwortwechsel**.

---

### Frage 6: Domänenbeitritt Voraussetzungen

Nötig sind: **Netzwerkverbindung** zum DC, **DNS-Einstellungen** auf den DC zeigend, eindeutiger **Computername** ve ein **domänenfähig** Betriebssystem (Pro/Enterprise).

---

### Frage 7: DHCP-Einrichtung

Ablauf: Neuen **DHCP-Bereich** anlegen, **Bereichsnamen** vergeben, **Adressbereich** (IP-Pool) definieren, **Ausschlussbereiche** festlegen ve **Leasedauer** (z.B. 8h) bestimmen.

---

### Frage 8: Netzlaufwerke per GPO

Erstellung über **"Neue GPO erstellen"** mit Namen **Netzlaufwerke**. Editor-Pfad: **Benutzerkonfiguration** -> Einstellungen -> Laufwerkszuordnung. Pfad: **\DC01\Testdrucker**. Option: **Verbindung wiederherstellen**.

---

### Frage 9: Hyper-V Virtuelle Festplatten

VM herunterfahren, unter **SCSI-Controller** neue VHD erzeugen. Typ: **Dynamisch erweiterbar**. Name: **Daten.vhdx**. Größe: **50 GB**. Nach Start in der **Datenträgerverwaltung** online schalten.

---

### Frage 10: Hyper-V VM Einstellungen

**Festplattenspeicher** bestimmt die Größe auf dem Datenträger. **RAM** legt Arbeitsspeicher fest. **Dynamischer Arbeitsspeicher** passt RAM flexibel an. **ISO Images** binden Medien ein. **vCPU** bestimmt virtuelle Kerne.

---

### Frage 11: Client-Konfiguration vor Beitritt

- **Nicht erforderlich:** Remote Desktop Dienst.
- **Nach Beitritt konfiguriert:** Benutzerkonto.
- **Für Namensauflösung nötig:** DNS-Server der Domäne.
- **Zur Identifizierung nötig:** Hostname.

---

### Frage 12: GPO Zuordnungen

GPOs werden auf OUs in der **Active Directory-Struktur** angewendet. Sie binden **Netzlaufwerke** ein ve gelten für Benutzer ve **Computer**. GPOs gelten für OUs/Domänen, nicht für einzelne **Gruppen**. Sie legen **Passwortrichtlinien** fest.

---

### Frage 13: IP-Begriffe

- **172.30.32.134:** Clientadresse im Bereich .101 bis .159.
- **172.30.32.1:** Gateway (Endet auf "1").
- **255.255.240.0:** Subnetzmaske.
- **127.0.0.1:** Localhost (Eigene Gerät).

---

### Frage 14: Abkürzungen

- **WSUS:** Windows Server Update Services.
- **DNS:** Domain Name System.
- **AD DS:** Active Directory Domain Services.

---

### Frage 15: Hyper-V Begriffe II

- **Generation 2:** Nutzt UEFI ve moderne Features.
- **Default Switch:** Erzeugt automatisch NAT für Internet.
- **Dynamischer Arbeitsspeicher:** Skaliert RAM automatisch.
- **vCPU:** Virtuelle Prozessorkerne.
- **Festplattenspeicher:** Größe des System-Volumens.

---

### Frage 16: Server-Manager Tools

Zur Domänenverwaltung gehören: **Gruppenrichtlinienverwaltung** (GPOs) ve **Ressourcen-Manager für Dateiserver** (Speicherkontingente).

---

### Frage 17: Vor DC-Heraufstufung nötig

Der Server muss einen **eindeutigen Namen** ve eine **feste IP** (statisch) haben. DNS wird automatisch mitinstalliert.

---

### Frage 18: Rolle des Domain Controllers (DC)

Der DC **verwaltet Benutzerkonten und Gruppen** ve **speichert/repliziert die AD-Datenbank** mit anderen DCs.

---

### Frage 19: GPO Zuweisungsobjekte

GPOs können zugewiesen werden: **Auf alle Benutzer und Computer in OUs** ve **Alle Benutzer und Computer in Domänen**.

---

### Frage 20: Aufgaben von Gruppenrichtlinien

Sie dienen der **Steuerung von Software-Installationen** ve der **Verwaltung von Benutzerrechten und Sicherheitseinstellungen**.

---

### Frage 21: GPO-Priorität

Wenn zwei GPOs widersprüchliche Einstellungen enthalten, entscheidet die **Priorität**, nicht die Reihenfolge. (Antwort: **Wahr**).

---

### Frage 22: Disaster Recovery & WORM

**Disaster Recovery** beschreibt die rasche Wiederaufnahme des Betriebs. Backups können lokal oder in der **Cloud** liegen. Ziel ist die Vermeidung von **Datenverlusten**. Der **Backup-Plan** ist essenziell. **WORM** (Write Once, Read Many) schützt vor Löschung/Veränderung.

---

### Frage 23: Hyperkonvergente Infrastruktur (HCI)

HCI integriert Komponenten in einer softwarebasierten **Architektur**. Durch Kombination physischer **Nodes** entsteht ein Cluster. Bestandteile: **Datenebene** ve **Management**. Arbeitet mit **VMs** veya Containern.

---

### Frage 24: RAID-Definitionen

**RAID** verbindet Platten zu einem logischen Pool. **RAID 5** nutzt Parität. **RAID 0** nutzt Striping (schnell, keine Redundanz). **RAID 10** ist Striping + Mirroring. **RAID 1** ist reine Spiegelung.

---

### Frage 25: Cloud Backup Varianten

**Direktes Cloudbackup** (vom Gerät), **Backup as a Service** (BaaS - Provider verwaltet her şeyi), **Multi Region Backup** (mehrere Standorte), **Cloud to Cloud Backup** (Cloud-Sicherung), **Self hosted Backup** (eigene Cloud-Server).

---

### Frage 26: Disaster Recovery Details

Ziel ist die Wiederherstellung vor dem **Datenverlust**. Dazu braucht man systematische **Backups**, genug **Speicherkapazität** ve rechtssicheren **WORM**-Speicher. **Protokolle** helfen bei der Nachverfolgung.

---

### Frage 27: RAID-Systeme Vergleich

**RAID 0** (Speed), **RAID 10** (Speed+Sicherheit), **RAID 5** (1 Platte darf ausfallen), **RAID 6** (2 Platten dürfen ausfallen), **RAID 1** (Spiegelung).

---

### Frage 28: Aufbewahrungsfristen

- Zivilrechtlich: **mind. 30 Jahre**.
- Buchungsbelege: **mind. 10 Jahre**.
- Steuerliche Unterlagen: **mind. 5 Jahre**.
- Medizinische Dokus: **sollten** mind. 30 Jahre sein (**Art des Dokumententyps**).

---

### Frage 29: Backup-Konzepte

- **Inkrementell:** Änderungen seit letztem Backup.
- **Differentiell:** Änderungen seit letzter Vollsicherung.
- **RDX:** Wechseldatenträger.
- **Vollsicherung:** Alles in einem Schritt.
- **Festplatte:** Hohe Kapazität, rotierende Platten.

---

### Frage 30: Cloud-Speicher Konzepte

**Direktes Cloudbackup**, **BaaS**, **Self-hosted Backups in der Cloud**, **Cloud-to-Cloud-Backup**, **Lokales Backup** (z.B. MailStore).

---

### Frage 31: Typ 2 Hypervisor

Softwarebasiert, wird **oberhalb** des Host-OS ausgeführt. Interagiert **nicht direkt** mit der Hardware ve hat keinen unmittelbaren Zugriff auf Hardware-Ressourcen.

---

### Frage 32: HCI Nachteile

Meist Kauf der kompletten Einheit nötig, **Abhängigkeit** von einem Hersteller ve begrenzte **Anpassbarkeit**.

---

### Frage 33: RAID 0 Merkmale

Bietet **schnellere Geschwindigkeit** ve verbindet 2 Platten zu bir Volume. Bietet **keinen** Ausfallschutz.

---

### Frage 34: Virtualisierungs-Sicherheit

Ein Schwachpunkt im **Hypervisor** kann tüm VM'leri gefährden. **Isolierte VMs** bieten ek bir Sicherheitsschicht.

---

### Frage 35: Systemeigenschaften (Windows)

Man kann dort den **Computernamen**, die **Domäne** ve den Ort für **temporäre Dateien** ändern.

---

### Frage 36: Systemsteuerung Tools

Beinhaltet: **Netzwerk- und Freigabecenter**, **Programme und Features** ve den **Geräte-Manager**.

---

### Frage 37: Windows-Features

Dazu gehören **Hyper-V**, **Windows-Subsystem für Linux** ve **Druck- und Dokumentendienste**.

---

### Frage 38: Backup-Reihenfolge

1. **Vollsicherung** (Mo) -> 2. **Inkrementell** (Di-Do) -> 3. **Differentiell** (Fr) -> 4. **Vollsicherung** (Monatsende).

---

### Frage 39: RAID 5 Sicherheit

RAID 5 überlebt den Ausfall einer Platte. Wenn zwei gleichzeitig ausfallen, sind alle Daten weg. (Antwort: **Wahr**).

---

### Frage 40: SAN Distanz

SAN ermöglicht größere Distanzen als DAS durch Glasfaser. (Antwort: **Wahr**).

---
