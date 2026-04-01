# IHK IT-Administration – Prüfungsvorbereitung 2026

### Fachinformatiker Systemintegration – Modul 1–4 Vollständiges Cheat Sheet

---

# MODUL 1 – GRUNDLAGEN

## 1.1 Teamarbeit & Konfliktmanagement

Teamarbeit basiert auf klarer Rollenverteilung, offener Kommunikation und gemeinsamen Zielen. Effektive Teams nutzen regelmäßige Meetings (z.B. Daily Standups in Scrum) und klare Dokumentation.

| Konfliktart        | Beschreibung                                          | Lösung                                |
| ------------------ | ----------------------------------------------------- | ------------------------------------- |
| Sachkonflikt       | Unterschiedliche Meinungen zu Inhalten/Entscheidungen | Faktenbasierte Diskussion, Kompromiss |
| Beziehungskonflikt | Persönliche Spannungen zwischen Personen              | Mediation, offenes Gespräch           |
| Prozesskonflikt    | Uneinigkeit über Vorgehensweise/Methode               | Klare Prozessdefinition, RACI-Matrix  |
| Rollenkonflikt     | Unklare Zuständigkeiten                               | Stellenbeschreibung, Organigramm      |

📌 **RACI** = Responsible, Accountable, Consulted, Informed – Wer macht was?

---

## 1.2 Aufbau eines Computers

EVA-Prinzip: Eingabe → Verarbeitung → Ausgabe (+ Speicher)

| Komponente            | Funktion                                       | Beispiele                  |
| --------------------- | ---------------------------------------------- | -------------------------- |
| CPU (Prozessor)       | Führt Berechnungen durch, steuert alle Abläufe | Intel Core i7, AMD Ryzen 5 |
| RAM (Arbeitsspeicher) | Flüchtiger Speicher für laufende Programme     | DDR4 16GB, DDR5 32GB       |
| Mainboard             | Verbindet alle Komponenten miteinander         | ASUS, MSI, Gigabyte        |
| GPU                   | Grafikverarbeitung, heute auch KI/ML           | NVIDIA RTX, AMD Radeon     |
| SSD / HDD             | Permanenter Datenspeicher                      | NVMe SSD 1TB, SATA HDD     |
| Netzteil (PSU)        | Wandelt Netzspannung in DC-Spannung um         | 80 Plus Gold 650W          |
| BIOS/UEFI             | Firmware – initialisiert Hardware beim Start   | POST, Bootloader           |

📌 **BIOS** = Basic Input Output System | **UEFI** = Unified Extensible Firmware Interface

---

## 1.3 Betriebssysteme

Ein Betriebssystem (OS) ist die Schnittstelle zwischen Hardware und Anwendungssoftware. Es verwaltet Prozesse, Speicher, Dateisysteme und Geräte.

| OS                     | Typ            | Einsatzbereich         | Besonderheit                          |
| ---------------------- | -------------- | ---------------------- | ------------------------------------- |
| Windows 10/11          | Desktop        | Unternehmensumgebungen | Active Directory, GPO, NTFS           |
| Windows Server         | Server-OS      | Domäne, AD, IIS, DNS   | CAL-Lizenzen notwendig                |
| Linux (Ubuntu, Debian) | Server/Desktop | Webserver, Entwicklung | Open Source, Shell-basiert            |
| macOS                  | Desktop        | Kreativbranche         | Unix-basiert, geschlossenes Ökosystem |
| Android / iOS          | Mobil          | Smartphones, Tablets   | App-basiert                           |

📌 Dateisysteme: Windows = NTFS, Linux = ext4, macOS = APFS. FAT32 = max. 4 GB Dateigröße.

---

## ⚠️ 1.4 Digitalisierung im Krankenhaus

### ⚠️ Laut Kurs nicht prüfungsrelevant – kein Lernaufwand nötig

Krankenhäuser nutzen spezialisierte IT-Systeme zur digitalen Verwaltung von Patientendaten, Terminen und medizinischen Geräten.

| System | Bedeutung                                  | Funktion                                                         |
| ------ | ------------------------------------------ | ---------------------------------------------------------------- |
| KIS    | Krankenhausinformationssystem              | Zentrale Plattform: Patientendaten, Aufnahme, Abrechnung, Pflege |
| RIS    | Radiologieinformationssystem               | Verwaltung radiologischer Aufträge, Befunde, Geräte (CT, MRT)    |
| PACS   | Picture Archiving and Communication System | Speicherung und Verteilung medizinischer Bilder (DICOM-Format)   |
| LIS    | Laborinformationssystem                    | Verwaltung von Laboraufträgen und -ergebnissen                   |
| ePA    | Elektronische Patientenakte                | Digitale Akte, gesetzlich verpflichtend ab 2025                  |

📌 Schnittstellen: HL7 (Nachrichten), DICOM (Bilder), GDT/LDT (Gerätedaten). Datenschutz = DSGVO + Krankenhausgesetze.

---

## 1.5 Sicherheitsaspekte (CIA-Triade)

| Begriff                           | Bedeutung                                                          |
| --------------------------------- | ------------------------------------------------------------------ |
| Vertraulichkeit (Confidentiality) | Nur Berechtigte können auf Daten zugreifen (Verschlüsselung)       |
| Integrität (Integrity)            | Daten wurden nicht unbemerkt verändert (Hashwerte, Signaturen)     |
| Verfügbarkeit (Availability)      | Systeme sind erreichbar wenn benötigt (Redundanz, Backup)          |
| Authentizität                     | Identität eines Nutzers/Systems ist verifiziert (MFA, Zertifikate) |
| Nicht-Abstreitbarkeit             | Aktionen können nachgewiesen werden (Logging, Audit-Trail)         |

📌 **CIA-Triade** = Confidentiality, Integrity, Availability – Grundpfeiler der IT-Sicherheit.

---

## 1.6 OSI-Modell

Das OSI-Modell (Open Systems Interconnection) beschreibt Netzwerkkommunikation in 7 Schichten.

| Layer | Name (DE)              | Protokolle/Geräte     | Funktion                             |
| ----- | ---------------------- | --------------------- | ------------------------------------ |
| 7     | Anwendungsschicht      | HTTP, FTP, SMTP, DNS  | Schnittstelle zu Anwendungen         |
| 6     | Darstellungsschicht    | SSL/TLS, JPEG, ASCII  | Formatierung, Verschlüsselung        |
| 5     | Sitzungsschicht        | NetBIOS, RPC          | Auf-/Abbau von Sitzungen             |
| 4     | Transportschicht       | TCP, UDP              | Ende-zu-Ende, Ports, Fehlerkorrektur |
| 3     | Vermittlungsschicht    | IP, ICMP, Router      | Routing, IP-Adressen                 |
| 2     | Sicherungsschicht      | Ethernet, MAC, Switch | Lokale Übertragung, MAC-Adressen     |
| 1     | Bitübertragungsschicht | Kabel, Hubs, Repeater | Physikalische Übertragung von Bits   |

📌 Merksatz (Layer 7→1): "Alle Menschen Suchen Täglich Nette Daten Partys"
TCP/IP-Modell hat nur 4 Schichten: Anwendung, Transport, Internet, Netzzugang.

---

## 1.7 Netzwerk-Grundlagen

| Begriff      | Erklärung                                                                       |
| ------------ | ------------------------------------------------------------------------------- |
| LAN          | Local Area Network – lokales Netzwerk (z.B. Büro, Gebäude)                      |
| WAN          | Wide Area Network – großes Netzwerk über weite Distanzen (Internet)             |
| MAN          | Metropolitan Area Network – Stadtweites Netzwerk                                |
| WLAN         | Wireless LAN – kabelloses lokales Netzwerk (Wi-Fi)                              |
| MAC-Adresse  | 48-Bit Hardware-Adresse, eindeutig pro Netzwerkkarte. Format: AA:BB:CC:DD:EE:FF |
| IP-Adresse   | Logische Adresse im Netzwerk. IPv4 = 32 Bit, IPv6 = 128 Bit                     |
| Gateway      | Standard-Router für den Internetzugang aus dem LAN                              |
| Broadcast    | Nachricht an alle Geräte im Netzwerk (z.B. 192.168.1.255)                       |
| Subnetzmaske | Trennt Netzwerk- von Hostanteil einer IP-Adresse                                |

---

## 1.8 Speicherarten

| Speicherart      | Typ                   | Geschwindigkeit      | Eigenschaften                              |
| ---------------- | --------------------- | -------------------- | ------------------------------------------ |
| Register / Cache | Primär (flüchtig)     | Sehr schnell (ns)    | Im Prozessor, L1/L2/L3 Cache               |
| RAM              | Primär (flüchtig)     | Schnell (ns)         | Verliert Daten bei Stromausfall, DDR4/DDR5 |
| SSD (NVMe)       | Sekundär (persistent) | Sehr schnell         | Flash-Speicher, kein bewegl. Teil          |
| HDD              | Sekundär (persistent) | Langsamer            | Magnetisch, günstig, groß, empfindlich     |
| USB-Stick / SD   | Tertiär (wechselbar)  | Mittel               | Portabel, FAT32 oder exFAT                 |
| Bandlaufwerk     | Tertiär (Archiv)      | Langsam              | Langzeitarchivierung, günstig pro GB       |
| Cloud-Speicher   | Online                | Abhängig v. Internet | OneDrive, SharePoint, Azure Blob           |

📌 **Flüchtig** = Daten weg bei Stromausfall. **Persistent** = Daten bleiben erhalten.

---

## 1.9 Binärsystem

Computer arbeiten intern nur mit 0 und 1 (Binär = Basis 2).

| Einheit         | Byte     | Bemerkung                         |
| --------------- | -------- | --------------------------------- |
| 1 Bit           | –        | Kleinste Dateneinheit: 0 oder 1   |
| 1 Byte          | 1        | Ein Zeichen (z.B. 'A' = 01000001) |
| 1 KB (Kilobyte) | 1.024    | 1.024 Byte                        |
| 1 MB (Megabyte) | 1.024 KB | Typische Bildgröße                |
| 1 GB (Gigabyte) | 1.024 MB | Typische Dateigrößen              |
| 1 TB (Terabyte) | 1.024 GB | Festplattenkapazitäten            |

📌 Umrechnung: 42 dezimal = 32+8+2 = 101010 binär. Hexadezimal (Basis 16): 0–9 und A–F. 1 Byte = 2 Hex-Stellen.

---

## 1.10 Server & Client-Server-Beziehung

| Servertyp         | Funktion                                                    |
| ----------------- | ----------------------------------------------------------- |
| File Server       | Zentrale Dateiablage, Zugriffsrechte über AD/NTFS           |
| Print Server      | Verwaltung von Druckern im Netzwerk                         |
| DNS Server        | Namensauflösung: Domain → IP-Adresse                        |
| DHCP Server       | Automatische IP-Vergabe an Clients                          |
| Web Server        | Ausliefern von Webseiten (Apache, IIS, nginx)               |
| Mail Server       | E-Mail senden/empfangen (Exchange, Postfix)                 |
| Domänencontroller | AD-Authentifizierung, GPO-Verteilung (Windows Server)       |
| Datenbankserver   | SQL-Datenbanken (MySQL, MSSQL, PostgreSQL)                  |
| Proxy Server      | Vermittler zwischen Client und Internet, Caching, Filterung |

📌 Client-Server: Client stellt Anfrage, Server antwortet. Peer-to-Peer: Beide gleichberechtigt (z.B. BitTorrent).

---

## 1.11 Cloud

| Modell        | Bedeutung                   | Beispiel              | Wer verwaltet was?                       |
| ------------- | --------------------------- | --------------------- | ---------------------------------------- |
| IaaS          | Infrastructure as a Service | Azure VMs, AWS EC2    | Anbieter: Hardware/Netz. Kunde: OS, Apps |
| PaaS          | Platform as a Service       | Azure App Service     | Anbieter: OS+Runtime. Kunde: nur Apps    |
| SaaS          | Software as a Service       | Microsoft 365         | Anbieter: alles. Kunde: nur nutzen       |
| Public Cloud  | Öffentliche Cloud, geteilt  | Azure, AWS            | Multi-Tenant, günstig                    |
| Private Cloud | Eigene Cloud-Infrastruktur  | On-Premises VMware    | Single-Tenant, teurer                    |
| Hybrid Cloud  | Kombination aus beidem      | Azure + lokale Server | Flexibel, komplex                        |

📌 Merke: Je höher das Modell (IaaS→PaaS→SaaS), desto weniger muss der Kunde selbst verwalten.

---

## 1.12 Microsoft 365

| Dienst                | Funktion                                                   |
| --------------------- | ---------------------------------------------------------- |
| Exchange Online       | Cloud-E-Mail-Dienst, Kalender, Kontakte                    |
| SharePoint Online     | Intranets, Dokumentenmanagement, Teamseiten                |
| Teams                 | Kollaboration: Chat, Video, Meetings, Dateiablage          |
| OneDrive for Business | Persönlicher Cloud-Speicher pro Nutzer (1TB+)              |
| Intune                | Mobile Device Management (MDM) – Geräte verwalten/schützen |
| Azure AD (Entra ID)   | Cloudbasiertes Identitätsmanagement, SSO, MFA              |
| Defender              | Endpunktschutz, Antivirus, Threat Intelligence             |

📌 Lizenzmodelle: M365 Business Basic/Standard/Premium. Premium enthält Intune + Defender.

---

# MODUL 2 – MANAGEMENT

## 2.1 Prozessmanagement & BPMN

BPMN = Business Process Model and Notation – grafischer Standard zur Prozessdarstellung.

| BPMN-Element        | Symbol-Typ                    | Bedeutung                        |
| ------------------- | ----------------------------- | -------------------------------- |
| Start-Event         | Dünner Kreis                  | Beginn eines Prozesses           |
| End-Event           | Dicker Kreis                  | Ende eines Prozesses             |
| Task/Aktivität      | Abgerundetes Rechteck         | Auszuführende Tätigkeit          |
| Gateway (XOR)       | Raute mit X                   | Entweder-oder Entscheidung       |
| Gateway (AND)       | Raute mit +                   | Parallele Ausführung             |
| Sequenzfluss        | Pfeil mit ausgefüllter Spitze | Reihenfolge der Aktivitäten      |
| Pool / Lane         | Rechteck mit Beschriftung     | Organisationseinheit / Rolle     |
| Nachrichtenereignis | Kuvert-Symbol                 | Kommunikation zwischen Prozessen |

📌 Prüfungstipp: BPMN-Diagramme lesen und einfache Prozesse zeichnen können. XOR vs AND genau unterscheiden!

---

## 2.2 ITIL 4

ITIL (IT Infrastructure Library) ist ein Framework für IT-Servicemanagement. Version 4 basiert auf dem Service Value System (SVS).

| ITIL 4 Konzept             | Erklärung                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------ |
| Service Value System (SVS) | Gesamtrahmen: Wie wird Wert für Kunden geschaffen?                                   |
| Service Value Chain (SVC)  | 6 Aktivitäten: Plan, Improve, Engage, Design, Obtain, Deliver                        |
| 4 Dimensionen              | 1. Organisationen/Menschen, 2. Info/Technologie, 3. Partner/Lieferanten, 4. Prozesse |
| 34 Practices               | Ersetzt 'Prozesse' – z.B. Incident, Change, Problem Management                       |
| 7 Guiding Principles       | z.B. 'Focus on value', 'Keep it simple', 'Think and work holistically'               |

| ITIL Practice            | Funktion                                                     |
| ------------------------ | ------------------------------------------------------------ |
| Incident Management      | Schnelle Wiederherstellung nach Störungen (MTTR minimieren)  |
| Problem Management       | Ursachenanalyse (Root Cause), Workarounds, Known Errors      |
| Change Management        | Kontrollierte Änderungen: Normal, Standard, Emergency Change |
| Service Desk             | Single Point of Contact für Nutzer, Ticket-Erstellung        |
| Configuration Management | CMDB: Verwaltung aller IT-Assets und Beziehungen             |
| Service Level Management | SLA-Definition und -Überwachung                              |

📌 **SLA** = Service Level Agreement | **OLA** = Operational Level Agreement (intern) | **UC** = Underpinning Contract (Lieferanten)

---

## 2.3 Ticketsysteme & Eskalationsstufen

| Eskalationsstufe         | Bezeichnung                  | Funktion                                                   |
| ------------------------ | ---------------------------- | ---------------------------------------------------------- |
| 1st Level                | Service Desk / Helpdesk      | Erstanlaufstelle, einfache Probleme lösen, Tickets anlegen |
| 2nd Level                | Spezialisierter Support      | Technisch komplexere Probleme, Systemzugriff               |
| 3rd Level                | Herstellersupport / Experten | Tiefgehende technische Probleme, Entwickler, Hersteller    |
| Fachliche Eskalation     | Inhaltlich weitergeben       | Problem geht an Spezialisten mit mehr Wissen               |
| Hierarchische Eskalation | Vorgesetzte einbeziehen      | Bei Ressourcenmangel oder Kompetenzproblemen               |

📌 Ticket-Lebenszyklus: Erstellt → Zugewiesen → In Bearbeitung → Gelöst → Geschlossen
**MTTR** = Mean Time to Repair | **MTBF** = Mean Time Between Failures

---

# MODUL 3 – INFRASTRUKTUR

## 3.1 Subnetting

Subnetting teilt ein großes IP-Netzwerk in kleinere Teilnetze auf.

| CIDR | Subnetzmaske    | Anzahl Hosts | Anwendung                             |
| ---- | --------------- | ------------ | ------------------------------------- |
| /24  | 255.255.255.0   | 254          | Typisches Klasse-C-Netz, kleine Büros |
| /25  | 255.255.255.128 | 126          | Zwei Subnetze aus /24                 |
| /26  | 255.255.255.192 | 62           | Vier Subnetze aus /24                 |
| /27  | 255.255.255.224 | 30           | Kleine Abteilungen                    |
| /28  | 255.255.255.240 | 14           | Sehr kleine Segmente                  |
| /30  | 255.255.255.252 | 2            | Punkt-zu-Punkt-Verbindungen (Router)  |
| /16  | 255.255.0.0     | 65.534       | Große Netzwerke                       |

📌 Formel Hosts: 2^n - 2 (n = Anzahl Host-Bits). -2 für Netzadresse und Broadcast.
Private Bereiche: 10.x.x.x | 172.16–31.x.x | 192.168.x.x

Beispiel: IP 192.168.1.130/26 → Maske 255.255.255.192 → Blockgröße 64 → Subnetze: 0-63, 64-127, 128-191, 192-255 → Netz: 192.168.1.128, Broadcast: 192.168.1.191, Hosts: 62

---

## 3.2 VPN / VLAN

| Technologie       | Bedeutung               | Funktion                                               | Protokolle                |
| ----------------- | ----------------------- | ------------------------------------------------------ | ------------------------- |
| VPN               | Virtual Private Network | Verschlüsselter Tunnel über unsicheres Netz (Internet) | IPsec, SSL/TLS, WireGuard |
| Site-to-Site VPN  | Standort-VPN            | Verbindet zwei Firmennetzwerke sicher miteinander      | IPsec, GRE                |
| Remote Access VPN | Fernzugriff-VPN         | Einzelne Nutzer verbinden sich ins Firmennetz          | SSL-VPN, L2TP             |
| VLAN              | Virtual LAN             | Logische Netztrennung auf Switch-Ebene (Layer 2)       | IEEE 802.1Q (Tagging)     |
| Trunk Port        | Switch-Verbindung       | Überträgt mehrere VLANs gleichzeitig                   | 802.1Q Tagged             |
| Access Port       | Endgerät-Port           | Gehört genau einem VLAN an                             | Untagged                  |

📌 VLAN-Vorteile: Sicherheit (Trennung), Performance (kleinere Broadcast-Domänen), Flexibilität. Inter-VLAN-Routing braucht Router oder Layer-3-Switch.

---

## 3.3 DNS / DHCP

| DNS-Recordtyp | Funktion                    | Beispiel                       |
| ------------- | --------------------------- | ------------------------------ |
| A-Record      | Hostname → IPv4-Adresse     | server.firma.de → 192.168.1.10 |
| AAAA-Record   | Hostname → IPv6-Adresse     | server.firma.de → 2001:db8::1  |
| CNAME-Record  | Alias für anderen Hostnamen | www → server.firma.de          |
| MX-Record     | Mail-Server für Domain      | firma.de → mail.firma.de       |
| PTR-Record    | IP → Hostname (Reverse DNS) | 192.168.1.10 → server.firma.de |
| NS-Record     | Nameserver der Domain       | firma.de → ns1.provider.de     |

DHCP DORA-Prozess:

| Schritt | Nachricht | Richtung           | Inhalt                         |
| ------- | --------- | ------------------ | ------------------------------ |
| 1       | DISCOVER  | Client → Broadcast | Suche nach DHCP-Server         |
| 2       | OFFER     | Server → Client    | Angebot einer IP-Adresse       |
| 3       | REQUEST   | Client → Broadcast | Anforderung der angebotenen IP |
| 4       | ACK       | Server → Client    | Bestätigung, IP-Lease vergeben |

📌 **APIPA**: 169.254.x.x – automatische Adresse wenn kein DHCP-Server erreichbar. Lease-Zeit = wie lange die IP gültig ist.

---

## 3.4 WLAN / Wi-Fi Standards

| Standard | Wi-Fi Name | Max. Bandbreite | Frequenz        | Besonderheit                     |
| -------- | ---------- | --------------- | --------------- | -------------------------------- |
| 802.11n  | Wi-Fi 4    | 600 Mbit/s      | 2,4 + 5 GHz     | MIMO, weit verbreitet            |
| 802.11ac | Wi-Fi 5    | 3,5 Gbit/s      | 5 GHz           | MU-MIMO, Beamforming             |
| 802.11ax | Wi-Fi 6/6E | 9,6 Gbit/s      | 2,4 + 5 + 6 GHz | OFDMA, besser bei vielen Geräten |
| 802.11be | Wi-Fi 7    | 46 Gbit/s       | 2,4 + 5 + 6 GHz | Aktuellster Standard             |

| WLAN-Sicherheit | Beschreibung                                                  |
| --------------- | ------------------------------------------------------------- |
| WEP             | Veraltet und unsicher – nicht mehr verwenden!                 |
| WPA2 (AES)      | Standard heute – AES-Verschlüsselung, CCMP                    |
| WPA3            | Aktuellster Standard – SAE statt PSK, besserer Schutz         |
| WPS             | Einfache Verbindung per PIN – Sicherheitslücke, deaktivieren! |
| 802.1X          | Unternehmens-WLAN mit RADIUS-Authentifizierung                |

---

## 3.5 RAID / HCI

| RAID-Level | Methode                     | Min. Laufwerke | Ausfallsicher               | Nutzbare Kapazität |
| ---------- | --------------------------- | -------------- | --------------------------- | ------------------ |
| RAID 0     | Striping (Geschwindigkeit)  | 2              | Nein – 1 defekt = alles weg | 100% (kein Schutz) |
| RAID 1     | Mirroring (Spiegelung)      | 2              | Ja – 1 Laufwerk             | 50%                |
| RAID 5     | Striping + Parität          | 3              | Ja – 1 Laufwerk             | (n-1)/n            |
| RAID 6     | Striping + doppelte Parität | 4              | Ja – 2 Laufwerke            | (n-2)/n            |
| RAID 10    | RAID 1+0 (Mirror+Stripe)    | 4              | Ja – je 1 pro Mirror        | 50%                |

📌 **RAID ist KEIN Backup!** **HCI** = Hyperconverged Infrastructure: Compute, Storage und Netzwerk in einem System (VMware vSAN, Nutanix).

---

## 3.6 Hypervisoren & Virtualisierung

| Typ                | Beschreibung                                                   | Beispiele                                    |
| ------------------ | -------------------------------------------------------------- | -------------------------------------------- |
| Typ 1 (Bare Metal) | Läuft direkt auf Hardware, kein Host-OS nötig. Sehr effizient. | VMware ESXi, Microsoft Hyper-V, KVM, Proxmox |
| Typ 2 (Hosted)     | Läuft als Anwendung auf einem Host-OS. Weniger effizient.      | VMware Workstation, VirtualBox, Parallels    |
| Container          | Leichter als VMs, teilen Kernel des Host-OS. Schnell startbar. | Docker, Podman, LXC                          |

📌 VM vs Container: VMs haben eigenes OS (schwerer, besser isoliert). Container teilen Host-Kernel (leichter, schneller). Snapshot = Momentaufnahme einer VM.

---

## 3.7 Backup-Arten

| Backup-Typ    | Was wird gesichert?                     | Geschwindigkeit         | Wiederherstellung                      |
| ------------- | --------------------------------------- | ----------------------- | -------------------------------------- |
| Vollbackup    | Alle Daten komplett                     | Langsam (viel Speicher) | Einfach (1 Backup)                     |
| Inkrementell  | Nur Änderungen seit letztem Backup      | Sehr schnell            | Komplex (Vollbackup + alle inkr.)      |
| Differenziell | Alle Änderungen seit letztem Vollbackup | Mittel                  | Einfacher (Vollbackup + letztes diff.) |
| Snapshot      | Momentaufnahme des Systemzustands       | Sehr schnell            | Sehr schnell (VMs/Storages)            |

📌 **3-2-1-Regel**: 3 Kopien, auf 2 verschiedenen Medien, 1 davon außerhalb (Offsite).
**RTO** = Recovery Time Objective (wie schnell) | **RPO** = Recovery Point Objective (wie viel Datenverlust akzeptabel)

---

## 3.8 Active Directory / Domäne / GPO

| Begriff                   | Erklärung                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Active Directory (AD)     | Verzeichnisdienst von Microsoft: zentrale Verwaltung von Nutzern, Computern, Gruppen    |
| Domäne                    | Logische Verwaltungseinheit. Alle Objekte unter einem gemeinsamen AD (z.B. firma.local) |
| Domänencontroller (DC)    | Server der das AD hostet. Authentifizierung, GPO-Verteilung                             |
| OU (Organizational Unit)  | Unterstruktur im AD zur Organisation von Objekten (Benutzer, Computer)                  |
| GPO (Group Policy Object) | Richtlinien für Benutzer/Computer: Passwortregeln, Desktophintergrund, Software         |
| LDAP                      | Protokoll für AD-Abfragen. Port 389 (unverschl.) / 636 (SSL)                            |
| Kerberos                  | Authentifizierungsprotokoll in AD-Umgebungen. Tickets statt Passwörter                  |
| Forest / Tree             | Forest = oberste AD-Struktur. Tree = Domains mit gemeinsamem Namespace                  |

📌 GPO-Verarbeitungsreihenfolge: LSDOU = Local → Site → Domain → OU

---

## 3.9 CMD & PowerShell

| Befehl                       | Funktion                            | Beispiel                                  |
| ---------------------------- | ----------------------------------- | ----------------------------------------- |
| `ipconfig /all`              | IP-Konfiguration anzeigen           | Alle Netzwerkadapter                      |
| `ipconfig /release & /renew` | DHCP-IP freigeben und neu anfordern | Troubleshooting                           |
| `ping`                       | Erreichbarkeit testen (ICMP Echo)   | `ping 8.8.8.8`                            |
| `tracert`                    | Netzwerkpfad anzeigen (alle Hops)   | `tracert google.de`                       |
| `nslookup`                   | DNS-Abfragen durchführen            | `nslookup firma.de`                       |
| `netstat -an`                | Aktive Verbindungen und Ports       | Offene TCP-Ports anzeigen                 |
| `gpupdate /force`            | Gruppenrichtlinien sofort anwenden  | Nach GPO-Änderung                         |
| `Get-ADUser`                 | PS: AD-Benutzer abfragen            | `Get-ADUser -Filter * \| Select Name`     |
| `Get-Service`                | PS: Windows-Dienste anzeigen        | `Get-Service \| Where Status -eq Running` |

---

## 3.10 MS Azure Grundlagen

| Azure-Dienst                 | Funktion                                                 |
| ---------------------------- | -------------------------------------------------------- |
| Azure Virtual Machines       | IaaS: Windows/Linux VMs in der Cloud                     |
| Azure Virtual Network (VNet) | Privates Netzwerk in Azure, Subnetting möglich           |
| Azure AD (Entra ID)          | Cloud-Identitätsmanagement, SSO, MFA, Conditional Access |
| Azure Storage                | Blob, File, Queue, Table Storage – skalierbar            |
| Azure Backup                 | Cloud-Backup für VMs, SQL, On-Prem                       |
| Azure Site Recovery          | Disaster Recovery: Replikation in die Cloud              |
| Azure Monitor                | Überwachung, Metriken, Alerts, Log Analytics             |
| NSG (Network Security Group) | Firewall-Regeln für Azure-Ressourcen (Inbound/Outbound)  |

📌 Hybrid: Azure Arc verbindet On-Prem mit Azure. Azure AD Connect synchronisiert lokales AD mit Azure AD.

---

# MODUL 4 – SPEZIALISIERUNG

## ⚠️ 4.1 Schnittstellen & Standards (KIS/RIS)

### ⚠️ Laut Kurs nicht prüfungsrelevant – kein Lernaufwand nötig

| Schnittstelle | Bedeutung                                             | Einsatz                                               |
| ------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| HL7 v2        | Health Level 7 – Nachrichtenbasiert                   | Übertragung von Patientendaten zwischen KIS, LIS, RIS |
| HL7 FHIR      | Fast Healthcare Interoperability Resources – REST-API | Moderne Gesundheitsdaten-APIs, ePA                    |
| DICOM         | Digital Imaging and Communications in Medicine        | Medizinische Bilder (CT, MRT, Röntgen) + PACS         |
| GDT           | Gerätedaten-Transfer                                  | Verbindung medizinischer Geräte mit Praxissoftware    |
| LDT           | Labordaten-Transfer                                   | Labor → Praxissystem (Befundübertragung)              |
| REST API      | Representational State Transfer                       | Moderne Webschnittstellen (HTTP, JSON)                |
| SOAP          | Simple Object Access Protocol                         | Älteres XML-basiertes Webservice-Protokoll            |

---

## 4.2 Unix / Linux Grundlagen

| Befehl              | Funktion                                              | Beispiel                       |
| ------------------- | ----------------------------------------------------- | ------------------------------ |
| `ls -la`            | Verzeichnisinhalt mit Details und versteckten Dateien | `ls -la /etc`                  |
| `cd`                | Verzeichnis wechseln                                  | `cd /var/log`                  |
| `cat / less / tail` | Datei anzeigen                                        | `tail -f /var/log/syslog`      |
| `chmod`             | Dateiberechtigungen ändern                            | `chmod 755 script.sh`          |
| `chown`             | Dateieigentümer ändern                                | `chown user:group datei`       |
| `grep`              | Text in Dateien suchen                                | `grep 'error' /var/log/syslog` |
| `ps aux`            | Laufende Prozesse anzeigen                            | `ps aux \| grep apache`        |
| `systemctl`         | Dienste verwalten (systemd)                           | `systemctl start apache2`      |
| `apt/yum/dnf`       | Paketverwaltung                                       | `apt install nginx`            |
| `ssh`               | Sicherer Remote-Zugriff                               | `ssh user@192.168.1.10`        |
| `sudo`              | Befehl als root ausführen                             | `sudo apt update`              |

📌 Berechtigungen: rwx = read(4), write(2), execute(1). `chmod 755` = rwxr-xr-x

---

## 4.3 Docker & Container

| Begriff          | Erklärung                                                           |
| ---------------- | ------------------------------------------------------------------- |
| Image            | Vorlage/Blueprint für Container (unveränderlich, layers)            |
| Container        | Laufende Instanz eines Images. Isoliert, eigene Prozesse            |
| Dockerfile       | Skript zur Definition eines Docker-Images                           |
| `docker build`   | Image aus Dockerfile erstellen                                      |
| `docker run`     | Container aus Image starten                                         |
| `docker ps`      | Laufende Container anzeigen                                         |
| `docker-compose` | Mehrere Container gemeinsam verwalten (YAML-Konfiguration)          |
| Registry         | Speicherort für Images (Docker Hub, Azure Container Registry)       |
| Volume           | Persistenter Speicher für Container-Daten                           |
| Kubernetes (K8s) | Container-Orchestrierung: Skalierung, Load Balancing, Selbstheilung |

📌 Docker vs VM: Container teilen Host-Kernel → leichter, schneller. VMs vollständig isoliert → sicherer, aber ressourcenintensiver.

---

## 4.4 IT-Monitoring

| Tool/Konzept         | Funktion                                                                      |
| -------------------- | ----------------------------------------------------------------------------- |
| SNMP                 | Simple Network Management Protocol – Netzwerkgeräte abfragen (Port 161/162)   |
| Nagios / Zabbix      | Open-Source Monitoring – Server, Dienste, Netzwerk                            |
| Prometheus + Grafana | Metriken sammeln + visualisieren (Cloud-native)                               |
| PRTG                 | Windows-basiertes Monitoring (kommerziell), einfache Einrichtung              |
| Syslog               | Zentrales Logging von Netzwerkgeräten und Servern                             |
| SIEM                 | Security Information and Event Management – Sicherheitsereignisse korrelieren |
| Alerting             | Benachrichtigung bei Schwellwertüberschreitung (E-Mail, SMS, Teams)           |

---

## 4.5 IT-Security – Angriffsvektoren

| Angriffstyp        | Beschreibung                                            | Gegenmaßnahme                           |
| ------------------ | ------------------------------------------------------- | --------------------------------------- |
| Phishing           | Gefälschte E-Mails/Webseiten zur Dateneingabe verleiten | Awareness-Training, E-Mail-Filter, MFA  |
| Social Engineering | Manipulation von Menschen zur Informationspreisgabe     | Schulungen, strenge Prozesse            |
| Brute Force        | Systematisches Ausprobieren aller Passwörter            | Account-Lockout, MFA, starke Passwörter |
| Man-in-the-Middle  | Angreifer sitzt zwischen zwei Kommunikationspartnern    | TLS/HTTPS, Zertifikatsprüfung           |
| SQL-Injection      | Schadcode in Datenbankabfragen einschleusen             | Input-Validierung, Prepared Statements  |
| DDoS               | Überlastung durch massenhafte Anfragen                  | DDoS-Schutz, Load Balancer, CDN         |
| Ransomware         | Verschlüsselung von Daten, Lösegeld gefordert           | Backup, Segmentierung, EDR              |
| Zero-Day           | Angriff auf unbekannte/ungepatchte Schwachstelle        | Schnelles Patching, WAF, IDS/IPS        |

---

## 4.6 Kryptographie

| Verfahren    | Typ                       | Funktion                                | Beispiele               |
| ------------ | ------------------------- | --------------------------------------- | ----------------------- |
| Symmetrisch  | Gleicher Schlüssel        | Schnell, für große Datenmengen          | AES-256, DES (veraltet) |
| Asymmetrisch | Public/Private Key Paar   | Schlüsselaustausch, Signaturen          | RSA, ECC, DSA           |
| Hashfunktion | Einwegfunktion            | Integrität prüfen, Passwörter speichern | SHA-256, MD5 (unsicher) |
| PKI          | Public Key Infrastructure | Verwaltung digitaler Zertifikate        | CA, Zertifikate, CRL    |
| TLS/SSL      | Transportverschlüsselung  | Sichere Kommunikation HTTPS             | TLS 1.3 aktuell         |
| PGP/S/MIME   | E-Mail-Verschlüsselung    | Ende-zu-Ende verschlüsselte Mails       | Outlook, Thunderbird    |

📌 **Hybrid-Verschlüsselung**: Asymmetrisch für Schlüsselaustausch + Symmetrisch für Datenverschlüsselung (so funktioniert HTTPS).

---

## 4.7 Firewall & Netzwerksicherheit

| Typ                        | Beschreibung                                                        |
| -------------------------- | ------------------------------------------------------------------- |
| Paketfilter                | Einfachste Firewall: prüft IP, Port, Protokoll. Stateless.          |
| Stateful Firewall          | Merkt sich Verbindungszustände. Erkennt zusammengehörige Pakete.    |
| Application Firewall (WAF) | Prüft Anwendungsschicht (Layer 7). Erkennt SQL-Injection, XSS.      |
| Next-Gen Firewall (NGFW)   | Kombination: IDS/IPS, App-Kontrolle, SSL-Inspection, User-ID        |
| DMZ                        | Demilitarisierte Zone: öffentliche Server zwischen zwei Firewalls   |
| IDS                        | Intrusion Detection System – erkennt Angriffe, meldet nur           |
| IPS                        | Intrusion Prevention System – erkennt UND blockiert Angriffe        |
| Proxy                      | Vermittler: schützt interne Netzwerke, ermöglicht Filterung/Caching |

---

## 4.8 MS Tier-Modell (Active Directory)

| Tier   | Name                 | Inhalt                              | Schutz                      |
| ------ | -------------------- | ----------------------------------- | --------------------------- |
| Tier 0 | Identity (Identität) | Domain Controller, AD, PKI, ADFS    | Höchstes Sicherheitsniveau  |
| Tier 1 | Server               | Applikationsserver, Datenbankserver | Mittleres Sicherheitsniveau |
| Tier 2 | Workstations         | Client-PCs, Endgeräte, Drucker      | Standard-Sicherheit         |

📌 Ziel: Admins eines Tiers können nicht auf höhere Tier zugreifen. PAW = Privileged Access Workstation für Tier-0-Administration. Bastion Host = sicherer Jump-Server.

---

## 4.9 Vulnerability Scan & Penetrationstest

| Begriff                    | Beschreibung                                                                |
| -------------------------- | --------------------------------------------------------------------------- |
| Vulnerability Scan         | Automatisierter Scan nach bekannten Schwachstellen (Tools: Nessus, OpenVAS) |
| Penetrationstest (Pentest) | Kontrollierter Angriff auf das System zur Sicherheitsüberprüfung            |
| White-Box-Test             | Tester hat vollständige Informationen über das System                       |
| Black-Box-Test             | Tester hat keine Informationen – simuliert externen Angreifer               |
| Gray-Box-Test              | Tester hat teilweise Informationen (realistischstes Szenario)               |
| CVE                        | Common Vulnerabilities and Exposures – Schwachstellendatenbank              |
| CVSS                       | Common Vulnerability Scoring System – Schweregrad 0–10                      |
| Patch Management           | Systematisches Einspielen von Sicherheitsupdates                            |

---

## 4.10 Relationale Datenbanken / SQL

| SQL-Befehl     | Funktion            | Beispiel                                                                       |
| -------------- | ------------------- | ------------------------------------------------------------------------------ |
| `SELECT`       | Daten abfragen      | `SELECT name FROM nutzer WHERE alter > 18`                                     |
| `INSERT`       | Datensatz einfügen  | `INSERT INTO nutzer (name) VALUES ('Max')`                                     |
| `UPDATE`       | Datensatz ändern    | `UPDATE nutzer SET alter=26 WHERE name='Max'`                                  |
| `DELETE`       | Datensatz löschen   | `DELETE FROM nutzer WHERE id=5`                                                |
| `CREATE TABLE` | Tabelle erstellen   | `CREATE TABLE nutzer (id INT PRIMARY KEY, name VARCHAR(50))`                   |
| `JOIN`         | Tabellen verknüpfen | `SELECT * FROM bestellungen JOIN nutzer ON nutzer.id = bestellungen.nutzer_id` |
| `WHERE`        | Bedingung filtern   | `WHERE status = 'aktiv' AND alter >= 18`                                       |
| `GROUP BY`     | Daten gruppieren    | `SELECT abteilung, COUNT(*) FROM mitarbeiter GROUP BY abteilung`               |

📌 **ACID** = Atomicity, Consistency, Isolation, Durability – Eigenschaften zuverlässiger Transaktionen.
Normalisierung: 1NF/2NF/3NF verhindert Redundanz in Datenbanken.

---

## 4.11 Lizenzmanagement

| Lizenzmodell          | Beschreibung                                                       |
| --------------------- | ------------------------------------------------------------------ |
| Per Device            | Lizenz pro Gerät – geeignet wenn viele Nutzer ein Gerät teilen     |
| Per User (CAL)        | Client Access License – pro Nutzer, egal von wo er zugreift        |
| Concurrent/Floating   | Gleichzeitige Nutzer – Lizenz wird geteilt, optimal ausgenutzt     |
| Subscription          | Abonnement – monatlich/jährlich (z.B. Microsoft 365)               |
| Open Source (GPL/MIT) | Kostenlos nutzbar, GPL = Änderungen müssen offen bleiben           |
| Freeware              | Kostenlos aber proprietär – keine Quellcode-Einsicht               |
| OEM-Lizenz            | An Hardware gebunden – nicht übertragbar                           |
| Volume Licensing      | Rabattierte Lizenzen für Unternehmen (z.B. MPSA, EA bei Microsoft) |

📌 **SAM** = Software Asset Management. Ziel: Über- und Unterlizenziierung vermeiden. BSA und Microsoft-Audits prüfen Compliance.

---

## ⏱ Prüfungsstrategie

- Max. **30 Sekunden** pro Frage
- Nicht hängen bleiben – weitergehen und zurückkommen
- Erst **sichere Punkte** mitnehmen, dann schwierige
- Zwei Durchgänge einplanen
- **CIA-Triade**, **OSI-Modell** und **DORA-Prozess** auswendig lernen!

---

## ⏱ Tägliche Wiederholung

Empfehlung: 45–60 Minuten pro Tag

- Modul 1 (Grundlagen) → ~8 Min.
- Modul 2 (Management) → ~5 Min.
- Modul 3 (Infrastruktur) → ~10 Min.
- Modul 4 (Spezialisierung) → ~10 Min.
- Übungsaufgaben → ~15–25 Min.

---

- Viel Erfolg bei der IHK-Prüfung 2026!
