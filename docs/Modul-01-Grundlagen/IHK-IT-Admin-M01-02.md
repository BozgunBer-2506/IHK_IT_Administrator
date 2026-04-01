# M01 Teil 2: IHK IT Administration

---

### Frage 1

Das Recht, eine Datei zu **[lesen]**, erlaubt es, die Datei zu öffnen und ihren Inhalt zu lesen.
Mit dem Recht, eine Datei zu **[schreiben]**, kann man Änderungen am Inhalt vornehmen.
Das Recht, eine Datei zu **[löschen]**, erlaubt es, sie zu löschen oder zu verschieben.
Das Recht, eine Datei zu **[ausführen]**, gibt die Möglichkeit, die Datei auszuführen.

---

### Frage 2

**Vollständiges Ticket-Beispiel (Drag-and-Drop):**

- **Titel:** Internetverbindung langsam im 2. OG
- **Beschreibung:** Seit heute Morgen berichten mehrere Mitarbeiter über extrem langsame Ladezeiten bei Webanwendungen.
- **Kategorie:** Netzwerk / Internet
- **Priorität:** Hoch
- **Zuweisung:** IT-Infrastruktur Team
- **Status:** In Bearbeitung

---

### Frage 3

**Setze richtig ein:**
**[SNAT]** tauscht die Quell-IP. **[DNAT]** tauscht die Ziel-IP.

---

### Frage 4

**Setze die passenden Wörter ein:**
**[TCP]** ist zuverlässig und verbindungsorientiert. **[UDP]** ist schneller, aber ohne Sicherung.

---

### Frage 5

**[TCP]** ist ein verbindungsorientiertes Protokoll, das eine stabile Verbindung zwischen Sender und Empfänger aufbaut und eine zuverlässige, in der richtigen Reihenfolge übertragene Datenübertragung garantiert. Im Gegensatz dazu ist **[UDP]** verbindungslos, **[schneller]** und effizienter, da es keine Bestätigungen oder **[Fehlerkorrekturen]** durchführt – was es ideal für Echtzeitanwendungen wie Streaming oder Online-Gaming macht. Während TCP für Anwendungen wie Webseiten oder **[Dateiübertragungen]** verwendet wird, findet UDP Anwendung bei DNS-Anfragen, Video-Streaming und anderen zeitkritischen Prozessen.

---

### Frage 6

Wofür steht WAN?
**[Wide] [Area] [Network]**

---

### Frage 7

Beim Subnetting wird die Standard-**[Subnetzmaske]** eines **[IP]**-Netzwerks verändert, indem Bits aus dem **[Host]**-Anteil für die Netzadresse verwendet werden, wodurch die Anzahl der verfügbaren **[Hostadressen]** pro **[Subnetz]** abnimmt.

---

### Frage 8

Ein Ping ist ein **[Netzwerk]**-Tool, das verwendet wird, um die **[Erreichbarkeit]** eines anderen Geräts im Netzwerk zu prüfen. Dabei werden sogenannte **[ICMP]**-Pakete gesendet, und die **[Antwortzeit]** wird gemessen. Ping wird häufig zur **[Diagnose]** von Netzwerkproblemen eingesetzt.

---

### Frage 9

Ein Ping ist eine einfache **[Möglichkeit]** die verwendet werden kann, um die **[Erreichbarkeit]** eines anderen Geräts im **[Netzwerk]** zu prüfen. Dabei werden sogenannte **[ICMP]**-Pakete gesendet und die **[Antwortzeit]** gemessen. Ping wird häufig zur **[Diagnose]** von Netzwerkproblemen eingesetzt.

---

### Frage 10

**Welche Aussagen sind richtig/falsch?**

- In der Sicherungsschicht wird entschieden, welchen Weg die Daten durch das Netzwerk nehmen. → **Falsch**
- Die Bitübertragungsschicht befasst sich mit den physikalischen Aspekten der Datenübertragung. → **Richtig**
- Die 7. OSI Schicht stellt Dienste für Anwendungen bereit (Browser, E-Mail). → **Richtig**
- In der 4. OSI Schicht werden Hardware-Verbindungen verwaltet und Namen übersetzt. → **Falsch**
- Die Netzwerkschicht (Layer 3) ist für Routing und logische Adressierung zuständig. → **Richtig**

---

### Frage 11

**Ordne Netzwerkgeräte ihrer kurzen Beschreibung zu:**

- Switch → **Leitet gezielt anhand MAC weiter**
- Hub → **Verteilt Signale ohne Logik**
- Bridge → **Koppelt Netze per MAC-Adressfilter**
- Router → **Findet Wege zwischen Teilnetzen**

---

### Frage 12

**Ordne Schreibweisen ihrer Bedeutung zu:**

- ::1 → **Loopback (entspricht 127.0.0.1)**
- :: → **Undefinierte Adresse (entspricht 0.0.0.0)**
- ff… → **Multicast-Adressen**
- 0:0:0:0:0:ffff:: → **IPv4-gemappte IPv6-Adressen**

---

### Frage 13

**Ordne die folgenden Netzwerktopologien zu:**

- Alle Geräte sind in einer geschlossenen Schleife miteinander verbunden. → **Ring-Topologie**
- Jedes Gerät ist mit jedem anderen Gerät direkt verbunden (Max. Anzahl Verbindungen). → **Full Mesh-Topologie**
- Alle Geräte sind über einzelne Kabel mit einem zentralen Gerät verbunden. → **Stern-Topologie**
- Jedes Gerät ist mit mehreren anderen Geräten direkt verbunden (mehrere Pfade). → **Mesh-Topologie**
- Alle Geräte sind über ein gemeinsames Übertragungsmedium verbunden. → **Bus-Topologie**

---

### Frage 14

**Ordne den OSI-Schichten die passenden Beispiele zu:**

- Schicht 3 → **IP-Routing**
- Schicht 1 → **Kabel, Stecker, Signale**
- Schicht 7 → **HTTP/HTTPS**
- Schicht 2 → **Frames mit FCS, MAC**

---

### Frage 15

**Ordne Ports den Diensten zu:**

- 53 → **DNS**
- 25 → **SMTP**
- 443 → **HTTPS**
- 80 → **HTTP**

---

### Frage 16

**Eigenschaften von TCP oder UDP:**

- Arbeitet verbindungslos und bietet keine Garantie. → **UDP**
- Stellt eine zuverlässige, verbindungsorientierte Kommunikation her. → **TCP**
- Führt eine Fluss- und Staukontrolle durch. → **TCP**
- Sorgt für die korrekte Reihenfolge der Datenpakete beim Empfänger. → **TCP**
- Bietet einen geringeren Overhead (besser für Streaming). → **UDP**

---

### Frage 17

**Was beschreibt das Internet korrekt?**

**c. Ein riesiges Netzwerk aus vielen kleineren Netzwerken mit weltweiter Verbindung.**

---

### Frage 18

**Was macht Network Address Translation (NAT)?**

**d. Ersetzt Quell- oder Ziel-IP-Adressen durch andere IP-Adressen am Router/Firewall.**

---

### Frage 19

**Welche Aufgabe gehört zur Vermittlungsschicht (Schicht 3)?**

**a. Routing und Adressierung mit IP, Weg über mehrere Netzknoten finden.**

---

### Frage 20

**Welcher Bereich ist als privates Klasse-C-Netz angegeben?**

**a. 192.168.0.0 (bis 192.168.255.255)**

---

### Frage 21

**Welche Aussage ist richtig?**

**c. TCP ist zuverlässig und verbindungsorientiert, UDP ist schneller, aber ohne Sicherung.**

---

### Frage 22

Das Recht **[lesen]** erlaubt es, eine Datei oder ein Verzeichnis zu öffnen und den Inhalt einzusehen. Mit dem Recht **[schreiben]** kann ein Benutzer Inhalte verändern oder hinzufügen. Das Recht **[ausführen]** ist besonders bei ausführbaren Programmen wichtig. Möchte man Dateien entfernen, benötigt man das Recht **[löschen]**. Ein weiteres wichtiges Zugriffsrecht ist **[Berechtigungsänderung]**, das sich oft auf Änderungen der Rechte selbst bezieht.

---

### Frage 23

Der **[Cache]** ist ein schneller Zwischenspeicher innerhalb der CPU. **[RAM]** wird als flüchtiger Arbeitsspeicher bezeichnet und verliert seine Daten nach dem Ausschalten. Eine **[SSD]** ist ein nicht-flüchtiger Massenspeicher mit besonders schnellen Zugriffszeiten. Die klassische **[HDD]** basiert auf rotierenden Magnetscheiben und bietet große Speichermengen. Ein **[USB‑Stick]** ist ein mobiles, nicht-flüchtiges Speichermedium für kleinere Datenmengen. **[HDMI]** bezeichnet einen Audio/Video-Übertragungsstandard, **[Firewall]** eine Sicherheitskomponente und **[Druckertreiber]** eine notwendige Software für Drucker.

---

### Frage 24

**Betriebssysteme und Benutzeroberflächen:**

- Ubuntu Linux → **GNOME**
- Chrome OS → **Chrome Shell (Aura)**
- Android 12 → **Android UI**
- Windows 11 → **Windows Fluent Design**
- macOS → **Aqua**

---

### Frage 25

**Betriebssysteme für Endanwender:**

- Windows (ca. 81%)
- macOS
- **[Linux]**

---

### Frage 26

**Arten von Zugriffsrechten:**
r → Read, w → Write, x → **[execute]** (oder **[ausführen]**)

---

### Frage 27

**Was versteht man unter einem Betriebssystem?**

**a. Die Software, die die Hardware steuert und den Benutzern eine Schnittstelle zur Verfügung stellt.**

---

### Frage 28

**Welche Betriebssysteme sind bei Servern allgemein gebräuchlich?**

**Windows Server 2019, Debian Linux, Red Hat Linux, CentOS Linux.**

---

### Frage 29

**Welche Betriebssysteme sind bei PC-Endanwender allgemein gebräuchlich?**

**Windows von Microsoft, macOS von Apple, Linux.**

---

### Frage 30

**Was bildet das Grundkonzept des Linux Betriebssystems?**

**a. Der Kernel**

---

### Frage 31

**Was ist die Hauptaufgabe des Rechenwerks?**

**Daten verarbeiten, Daten ausgeben.**

---

### Frage 32

**Bezeichnungen für Sekundärspeicher:**

**Festspeicher, Massenspeicher.**

---

### Frage 33

**Auf welchen Rechnern ist das Betriebssystem macOS verfügbar?**

**a. Nur auf Rechnern von Apple**

---

### Frage 34

SSD und Compact Flash sind Beispiele für Sekundärspeicher.

**Wahr**

---

### Frage 35

Mehrere CPU-Kerne können zu einer CPU zusammengefasst werden, um eine höhere Leistungsfähigkeit zu erreichen.

**Wahr**

---

### Frage 36

Die CPU ist die zentrale Verarbeitungseinheit im System.

**Wahr**

---

### Frage 37

SSDs sind anfälliger gegen Stöße als HDDs.

**Falsch**

---

### Frage 38

Ein Programm im Kernel Mode hat weniger Privilegien als wenn es im User Mode gestartet wird.

**Falsch**

---

### Frage 39

SSDs sind robuster, leiser und haben schnellere Zugriffszeiten im Vergleich zu HDDs.

**Wahr**

---

### Frage 40

Ein Cache speichert Daten ausschließlich dauerhaft, um sie langfristig verfügbar zu machen.

**Falsch**

---
