# IHK IT Cheat Sheet – Fachinformatiker Systemintegration 2026

## ⏱ Tägliche Wiederholung (15 Minuten)

---

# 🌐 Wichtige Ports (mit Erklärung)

| Port  | Protokoll (Abkürzung → Bedeutung)            | Zweck                   |
| ----- | -------------------------------------------- | ----------------------- |
| 20/21 | FTP = _File Transfer Protocol_               | Dateiübertragung        |
| 22    | SSH = _Secure Shell_                         | Sicherer Remote-Zugriff |
| 25    | SMTP = _Simple Mail Transfer Protocol_       | E-Mail senden           |
| 53    | DNS = _Domain Name System_                   | Namensauflösung         |
| 67/68 | DHCP = _Dynamic Host Configuration Protocol_ | IP-Adressvergabe        |
| 80    | HTTP = _Hypertext Transfer Protocol_         | Web                     |
| 110   | POP3 = _Post Office Protocol v3_             | E-Mail abrufen          |
| 143   | IMAP = _Internet Message Access Protocol_    | E-Mail Synchronisation  |
| 443   | HTTPS = _Hypertext Transfer Protocol Secure_ | Sicheres Web            |

📌 Merke: Diese Ports sind die wichtigsten Prüfungsports.

---

# 🧱 OSI-Modell

OSI = _Open Systems Interconnection Modell_

| Layer | Name                               | Funktion                 |
| ----- | ---------------------------------- | ------------------------ |
| 7     | Application (Anwendungsschicht)    | Programme / Benutzer     |
| 6     | Presentation (Darstellungsschicht) | Verschlüsselung / Format |
| 5     | Session (Sitzungsschicht)          | Sitzungsverwaltung       |
| 4     | Transport (Transportschicht)       | TCP / UDP                |
| 3     | Network (Netzwerkschicht)          | Routing (IP)             |
| 2     | Data Link (Sicherungsschicht)      | MAC / Switch             |
| 1     | Physical (Bitübertragungsschicht)  | Kabel / Bits             |

📌 Merksatz:
**All People Seem To Need Data Processing**

---

# 💾 RAID-Systeme

RAID = _Redundant Array of Independent Disks_

| RAID    | Prinzip                | Vorteil          | Nachteil            |
| ------- | ---------------------- | ---------------- | ------------------- |
| RAID 0  | Striping               | Sehr schnell     | Kein Schutz         |
| RAID 1  | Mirroring              | Hohe Sicherheit  | 50% Speicherverlust |
| RAID 5  | Parity                 | Gute Balance     | Rebuild dauert      |
| RAID 10 | RAID 1 + 0 Kombination | Schnell + sicher | Teuer               |

📌 Wichtig: RAID ist **kein Backup**

---

## 💾 RAID Hinweis (Wichtig für Prüfung)

📌 In der Prüfung werden hauptsächlich nur die **gängigen RAID-Level** verwendet:

- RAID 0
- RAID 1
- RAID 5
- RAID 10

👉 Andere RAID-Level (z. B. RAID 2, 3, 4, 6) sind zwar technisch existent,
werden aber in der Praxis und in der IHK-Prüfung **kaum oder gar nicht verwendet**.

📌 Grund:
Diese RAID-Level sind entweder **veraltet oder in modernen Systemen unüblich**.

👉 Daher konzentriert sich die Prüfung auf die **praxisrelevanten Standards**.

---

# 🌍 IPv4 Subnetting Beispiel

## Beispiel:

IP: **192.168.1.130/26**

### Subnetzmaske:

/26 = **255.255.255.192**

### Blockgröße:

256 - 192 = **64**

### Subnetze:

- 0–63
- 64–127
- 128–191
- 192–255

👉 IP liegt in: **128–191**

### Ergebnis:

- Netzadresse: **192.168.1.128**
- Broadcast: **192.168.1.191**
- Hosts: **62 (2⁶ - 2)**

---

# 🌐 IPv6 Beispiel

IPv6 = _Internet Protocol Version 6_

## Beispiel:

**2001:db8:abcd:0012::1/64**

### Regeln:

- 128 Bit Adresse
- /64 = Netzwerkanteil

### Kurzschreibweise:

**2001:db8:abcd:12::1**

📌 Unterschied zu IPv4:

- Kein Broadcast
- Nur Präfix statt Subnetzmaske

---

# 🌍 IP Grundlagen

## CIDR (Classless Inter-Domain Routing)

| CIDR | Hosts |
| ---- | ----- |
| /24  | 254   |
| /25  | 126   |
| /26  | 62    |
| /27  | 30    |
| /28  | 14    |
| /29  | 6     |
| /30  | 2     |

📌 Formel: **2ⁿ - 2**

---

## Private IP Bereiche

- Klasse A: 10.0.0.0 – 10.255.255.255
- Klasse B: 172.16.0.0 – 172.31.255.255
- Klasse C: 192.168.0.0 – 192.168.255.255

---

# ⚡ Netzwerk Grundlagen

## TCP vs UDP

TCP = _Transmission Control Protocol_
UDP = _User Datagram Protocol_

| TCP                  | UDP            |
| -------------------- | -------------- |
| Verbindungorientiert | Verbindungslos |
| Sicher               | Schnell        |
| Zuverlässig          | Unzuverlässig  |

---

## DHCP

DHCP = _Dynamic Host Configuration Protocol_

DORA Ablauf:

1. Discover
2. Offer
3. Request
4. Acknowledge

---

## DNS

DNS = _Domain Name System_

- Domain → IP-Adresse
- Beispiel: google.com → IP

---

## VLAN

VLAN = _Virtual Local Area Network_

- Logische Netztrennung
- Separate Broadcast-Domains

---

## ARP

ARP = _Address Resolution Protocol_

- IP → MAC-Adresse Zuordnung

---

# 🧪 Prüfungslogik

👉 Beschreibung → Begriff

| Beschreibung        | Lösung        |
| ------------------- | ------------- |
| IP vergeben         | DHCP          |
| Name auflösen       | DNS           |
| MAC finden          | ARP           |
| Verkehr filtern     | Firewall      |
| Routing             | Network Layer |
| Switch arbeitet mit | MAC           |

---

# 🎯 Prüfungsstrategie

- ⏱ Max. 30 Sekunden pro Frage
- ❌ Nicht hängen bleiben
- 🔁 Zwei Durchgänge
- ✅ Erst sichere Punkte

---

# 🔥 IHK Realität

Industrie- und Handelskammer Prüfungen bestehen aus:

- ~30% Auswendiglernen
- ~50% Verständnis
- ~20% komplexe Aufgaben

👉 Muster erkennen = Bestehen sichern
