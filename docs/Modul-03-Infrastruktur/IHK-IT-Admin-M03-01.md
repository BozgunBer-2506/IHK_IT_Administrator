# M03 Teil 1: IHK IT Administration

---

### Frage 1: Wie verhindert das STP (Spanning Tree Protocol) Loops in Switches?

Die gleichzeitige Datenübertragung in alle Netzwerke würde zu einer **[Schleife]** führen, wenn keine Mechanismen wie STP implementiert wären, um redundante Pfade zu blockieren. STP identifiziert redundante Verbindungen in einem Netzwerk und **[blockiert]** eine Reihe von **[Ports]**, um sicherzustellen, dass nur ein einzigartiger Pfad zwischen **[Switches]** aktiv bleibt. Dadurch werden Schleifen eliminiert, die zu Netzwerkstörungen führen könnten. STP wird auf **[Switches]** verwendet, nicht auf Routern.

---

### Frage 2: Zuordnung der Netzwerk-Topologie (Diagramm)

_Hinweis: Diese Frage erfordert die manuelle Zuordnung von Hardware-Komponenten (Stern, Mesh, Bus, Ring) in der grafischen Oberfläche des Prüfungssystems._

---

### Frage 3: Welche Funktionen bietet ein NMS?

Ein Netzwerkmanagementsystem bietet zentrale Funktionen zur **[Überwachung und Verwaltung]** von Netzwerken. Mit Hilfe von Richtlinien lassen sich **[Konfigurationsänderungen]** durchführen, um Probleme gezielt zu beheben. Moderne Systeme nutzen zunehmend künstliche Intelligenz, um Netzwerkvorgänge **[automatisch]** zu optimieren. Zur Identifikation von Netzwerkelementen integriert ein NMS verschiedene **[Netzwerkmanagementprotokolle]**. Zur Analyse der **[Netzwerkauslastung]** liefert es Einblicke in die Netzwerkflüsse.

---

### Frage 4: Was beschreibt Troubleshooting im Netzwerkumfeld?

Der Begriff Troubleshooting beschreibt einen systematischen Prozess zur schnellen und zielgerichteten Behebung von sowohl Hardware- oder Softwarefehlern als auch **[Netzwerkstörungen]**. Ein häufig auftretendes Problem ist die **[Netzwerküberlastung]**, bei der durch übermäßigen Datenverkehr die Bandbreite ausgelastet wird. Der erste Schritt im Rahmen des Troubleshooting ist die **[Problemerkennung]**. In der zweiten Phase erfolgt die **[Informationssammlung]**, bei der Logs und Nutzerberichte analysiert werden. In der letzten Phase erfolgt die **[Verifikation und Dokumentation]**, bei der überprüft wird, ob das Problem dauerhaft gelöst ist.

---

### Frage 5: Nennen Sie die Phasen des Netzwerk-Monitorings

Ein sorgfältig eingerichtetes Netzwerk sollte durchgehend unter **[Überwachung]** stehen. Sobald ein Alarm ausgelöst wird, erfolgt zunächst die **[Untersuchung]**, in welcher das Ausmaß des Problems untersucht wird. Daran anschließend folgt die **[Isolierung]**, bei der der genaue Ort des Fehlers gefunden werden soll. In der darauffolgenden **[Ursachenanalyse]** wird schließlich die exakte Ursache ermittelt. Abschließend wird eine passende **[Lösung]** ausgearbeitet und umgesetzt.

---

### Frage 6: Welche Technologien werden im Bereich Mobilfunk und Wireless genutzt?

Die **[GSM]**-Technologie markierte das erste digitale Mobilfunknetz und ermöglichte mobile **[Datenübertragung]**. Im Alltag setzen viele Geräte unterwegs auf Mobilfunknetze und nutzen zu Hause oder im Büro **[WLAN]**. Häufig werden moderne WLAN-Verbindungen irrtümlich mit **[Wi‑Fi]** gleichgesetzt. Aktuelle Standards wie LTE oder **[5G]** bieten Spitzenwerte bis zu 10 GB/s.

---

### Frage 7: Ordnen Sie die Firewall-Typen ihren Spezifikationen zu

- Eine klassische **[Stateful Inspection Firewall]** analysiert den Zustand von Verbindungen.
- Die **[Virtual Firewall]** kommt in virtualisierten Systemen zum Einsatz und schützt z.B. einzelne VMs.
- Moderne Firewalls wie die **[Next Generation Firewall]** bieten Funktionen wie Deep Packet Inspection.
- Eine **[Paket Filtering Firewall]** filtert ausschließlich anhand von Quell-/Zieladressen und Ports.
- Die **[Host‑basierte Firewall]** ist direkt auf einem Endgerät installiert.

---

### Frage 8: Nennen Sie die Grundlagen der IP-Kommunikation

Die Kommunikation zwischen Netzwerken erfolgt über einen **[Router]**. Das **[Standardgateway]** bezeichnet das Ziel für nicht-lokale IP-Pakete. Adressen wie 192.168.2.84 sind **[nicht über Internet]** erreichbar. Zur Organisation von IP-Adressen verwendet man die **[Subnetzmaske]**. Eine besondere Adresse ist die **[Loopbackadresse]**.

---

### Frage 9: Welche Sicherheitsmaßnahmen sollten in einem Netzwerk implementiert werden?

- Eine gut konfigurierte **[Firewall]** schützt vor unautorisierten Zugriffen.
- Verdächtige Aktivitäten werden mit Hilfe von **[IDS/IPS]** erkannt und blockiert.
- Einführung von **[[M]ulti [F]aktor [A]uthentifizierung]** für kritische Systeme.
- Home Office Zugriff nur über ein **[VPN]**.
- Sensible Bereiche durch **[VLANs]** oder Subnetze trennen.

---

### Frage 10: Wie wird ein NMS im Netzwerkmanagement identifiziert?

Ein **[Netzwerkmanagementsystem]** bietet zentrale Funktionen zur Überwachung. Mit Hilfe von **[Richtlinien]** lassen sich Konfigurationsänderungen durchführen. Moderne Systeme nutzen **[künstliche Intelligenz]**. Zur Identifikation nutzt ein NMS verschiedene **[Netzwerkmanagementprotokolle]**. Zur Analyse der Auslastung liefert es Einblicke in die **[Netzwerkflüsse]**.

---

### Frage 11: Nennen Sie weitere Begriffe aus dem Troubleshooting

Unter dem Begriff **[Troubleshooting]** versteht man einen systematischen Prozess. Ein häufiges Problem ist die **[Überlastung]**. Beim **[Route Flapping]** wechseln Datenpakete ständig die Route. Der erste Schritt ist die **[Überwachung]**. In der dritten Phase erfolgt die **[Isolierung]**.

---

### Frage 12: Beschreiben Sie die detaillierten Phasen des Troubleshootings

1. **[Orientierung]** der aktuellen Situation.
2. **[Untersuchung]** möglicher Fehlerquellen.
3. **[Isolierung]** des Problems auf bestimmte Systeme.
4. **[Ursachenanalyse]**, bei der Gründe erkannt werden.
5. Kontinuierliche **[Überwachung]** ist essenziell (Logging/Monitoring).

---

### Frage 13: Erklären Sie Begriffe wie Wi-Fi ve Latenz

Der Begriff **[WLAN]** beschreibt das kabellose Netzwerk. Die Bezeichnung **[Wi‑Fi]** ist ein Markenname. Ein wichtiger Faktor ist die **[Latenzzeit]**. Technologien wie **[Powerline]** nutzen Stromleitungen. Der Mobilfunkstandard **[5G]** wird häufig ergänzend genutzt.

---

### Frage 14: Ordnen Sie spezielle Firewall-Typen ihren Funktionen zu

- Verhindert direkte Verbindungen: **Proxy Firewall**
- Erkennt Anwendungen & filtert URLs: **Next Generation Firewall**
- Läuft als virtuelle Anwendung in Clouds: **Virtual Firewall**
- Lastenausgleich & Multi-Tenant: **Cloud Native Firewall**
- Integrierter Virenschutz & Intrusion Prevention: **Unified Threat Management Firewall**

---

### Frage 15: Welche Betriebsmodi eines DHCP Servers gibt es?

- **Statisch.**
- **Automatisch.**
- **Dynamisch.**

---

### Frage 16: Welche Aussagen zu den Einstellungsmöglichkeiten durch DHCP sind korrekt?

- **Das Default Gateway ist einstellbar.**
- **Der DNS Server ist einstellbar.**
- **Der Adresspool kann mit dem DHCP-Server konfiguriert werden.**

---

### Frage 17: Welche Firewall-Arten existieren?

- **Next Generation Firewall.**
- **Virtual Firewall.**
- **Stateful Inspection Firewall.**

---

### Frage 18: Welche Aussagen zu den Grundlagen von DNS sind korrekt?

- **Kann die IP-Adresse eines PC's in den Namen auflösen.**
- **Beantwortet Anfragen zur Namensauflösung.**
- **Kann den Namen eines PC's in eine IP Adresse auflösen.**

---

### Frage 19: Welche Aussagen zu den Management-Disziplinen sind richtig?

- **Konfigurationsmanagement hilft bei Änderungen und Pflege der Einstellungen.**
- **Im Fehlermanagement sind Funktionen zur Erkennung, Beseitigung und Vorbeugung.**
- **Mithilfe des Abrechnungsmanagements wird die Benutzung erfasst.**

---

### Frage 20: Welche Vorteile bietet der Einsatz eines Netzwerkmanagementsystems?

- **Erhöhte Netzwerkverfügbarkeit.**
- **Schnellere Fehlererkennung und -behebung.**
- **Optimierte Netzwerkperformance.**

---

### Frage 21: Bringen Sie den DHCP-Ablauf in die richtige Reihenfolge

1. **[DHCPDISCOVER]**
2. **[DHCPOFFER]**
3. **[DHCPREQUEST]**
4. **[DHCPACK]**

---

### Frage 22: Erklären Sie Adressarten wie Broadcast ve Subnetzadresse

Die Subnetzadresse dient dazu, das **[Subnetz]** selbst zu identifizieren. Ein **[Adresspool]** ist eine Menge von IP-Adressen für Hosts. Die Broadcastadresse hat im Host-Teil alle Bits auf **[1]** gesetzt. Die **[Subnetzadresse]** ist die erste Adresse in einem Subnetz.

---

### Frage 23: Warum werden Subnetze verwendet?

Subnetze unterteilen Netzwerke, um den Datenverkehr zu **[segmentieren]**. Die **[logische Strukturierung]** ist ein Nebeneffekt. Sie ermöglichen eine effiziente Verwaltung des **[Datenverkehrs]**. Administratoren behalten so den Überblick über die **[Ressourcen]**.

---

### Frage 24: Welche Aussagen zu VPN-Verschlüsselungen sind korrekt?

**[PPTP (Point‑to‑Point Tunneling Protocol)]** gilt nicht als sicher. L2TP wird oft mit **[IPSec]** kombiniert. IKE tauscht Sicherheitsparameter und **[Schlüssel]** aus. IPsec sichert Verbindungen über **[unsichere Netzwerke]**.

---

### Frage 25: Rechnen Sie Binärwerte in Dezimalwerte um

Die 8-Bit-Binärzahl **[11000000]** entspricht **[dezimal]** 192. Der Wert **[255]** entspricht 11111111. 11111110 ist dezimal **[254]**. 10101000 ergibt dezimal **[168]**. **[4C]** ist hexadezimal. **[19683]** liegt außerhalb des Bereichs. **[Farbtiefe]** ist hier irrelevant.

---

### Frage 26: Welche Befehle werden in der Cisco-CLI genutzt?

Zum Wechsel in den privilegierten Modus nutzt man **[enable]**. Im Konfigurationsmodus steht **[Router(config)#]**. Anzeige der Konfiguration mit **[show running‑config]**. Schnittstellenwahl mit **[interface]**. Speichern mit **[copy running‑config startup‑config]**.

---

### Frage 27: Wie funktioniert Routing zwischen VLANs?

Ein **[Router]** ermöglicht den Datenaustausch zwischen VLANs. Man benötigt mindestens **[2]** Teilnehmer. Routing basiert auf **[IP‑Adressen]**. Layer-2-Switches können nicht zwischen **[verschiedenen VLANs]** vermitteln.

---

### Frage 28: Welche Tools ve Befehle werden für VLANs genutzt?

Putty ist ein **[Terminal‑Emulator]**. Im Packet Tracer nutzt man die **[grafische Benutzeroberfläche (GUI)]**. Befehl zur Port-Konfiguration: **[show interfaces switchport]**. Es gibt physikalische ve **[virtuelle Interfaces]**.

---

### Frage 29: Was sind die Grundlagen von VPN-Verbindungen?

Ein VPN schafft ein privates Netzwerk über ein öffentliches Netzwerk. Es ermöglicht eine sichere Kommunikation, als ob sie sich in einem **[privaten Netzwerk]** befinden würden. Beim **[SSL VPN]** wird eine sichere Verbindung über das Internet hergestellt. VPN steht für **[Virtual Private Network]**. **[IPsec‑VPN]** ve SSL/TLS-VPN sind zwei gängige Arten.

---

### Frage 30: Ordnen Sie Begriffe der VPN-Funktionsweise zu

- Anwendung: **Umgehung von Geoblocking**
- Transport-Netzwerk dient als: **Medium**
- VPN transportiert nur die: **Daten**
- VPN ist eine virtuelle: **privaten Verbindung**
- Vor/hinter dem Tunnel gilt das: **Protokoll**

---

### Frage 31: Welche Aussagen zu VLANs sind Richtig oder Falsch?

- Bei VLAN-Tagging kann der Switchport mehreren VLAN zugeordnet werden. → **Richtig**
- VLAN steht für Vertical Local Area Network. → **Falsch**
- Bei Hardware VLAN kann der Switchport mehreren VLAN zugeordnet werden. → **Falsch**
- Ein VLAN umfasst alle Geräte in derselben Broadcast-Domäne. → **Richtig**
- Man unterscheidet zwischen untagged VLANs und tagged VLANs. → **Richtig**

---

### Frage 32: Was sind die Vorteile kleiner Broadcast-Domänen?

- **Senkung der Sicherheitsrisiken durch Trennung und Verringerung der Geräte.**
- **Geringerer CPU-Overheat durch Verringerung der zu erreichenden Geräte.**
- **Flexibleres Netzwerkdesign bei gleicher eingesetzter Hardware.**

---

### Frage 33: Welche Modi existieren in einem Cisco-Switch?

- **# zeigt an, dass man im Privileged EXEC Modus ist.**
- **Der User Modus enthält Befehle zum Erhalten von Informationen.**
- **Modi: User EXEC ve Privileged EXEC.**

---

### Frage 34: Welche Eigenschaften zeichnen einen Router aus?

- **Können Netzwerkpakete zwischen mehreren Rechnernetzen weiterleiten.**
- **Sind das Kopplungselement in Rechnernetzen.**
- **Stellen eine Verbindung zum Internet und/oder anderen Netzwerken her.**

---

### Frage 35: Was ist das Ziel der Netzwerkdokumentation?

- **Ist eine Form der technischen Dokumentation.**
- **Ein Ziel ist, Informationen gezielt auffindbar zu machen.**
- **Unter Netzwerkdokumentation versteht man die Nutzbarmachung von Informationen.**

---

### Frage 36: Welchen Zweck erfüllt die Dokumentation?

- **Informationen aus verschiedensten Quellen werden in einer Datenbank zusammengeführt.**
- **Zweck ist es, den Netzbetrieb so reibungslos wie möglich zu halten.**
- **Dokumentiert, welche Geräte an welcher Stelle im Gebäude verbunden sind.**

---

### Frage 37: Wie wird ein Switch konfiguriert?

- **Erstkonfiguration mit Konsolenkabel erfolgen, wenn keine Netzwerkverbindung vorhanden ist.**
- **Switch muss über eine öffentliche IP-Adresse oder Portweiterleitung erreichbar sein.**
- **Der Konsolenport RS232 ist eine typische Schnittstelle zur Erstkonfiguration.**

---

### Frage 38: Nutzbarmachung von Informationen zur weiteren Verwendung (Review)

- **Ist eine Form der technischen Dokumentation.**
- **Ein Ziel davon ist, Informationen gezielt auffindbar zu machen.**
- **Nutzbarmachung von Informationen zur weiteren Verwendung.**

---

### Frage 39: Warum wird Cloud-Software eingesetzt?

- **Schnelle Einsatzbereitschaft und Skalierbarkeit.**
- **Anwendungen sind von überall erreichbar.**

---

### Frage 40: Steht IP für „Interconnect Protocol"?

**[Falsch]** – Es steht für Internet Protocol.
