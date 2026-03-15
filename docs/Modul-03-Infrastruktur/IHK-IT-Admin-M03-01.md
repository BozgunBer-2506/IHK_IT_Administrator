# M03 Teil 1: IHK IT Administration

### Frage 1: STP Mechanismus

Die gleichzeitige Datenübertragung in alle Netzwerke würde zu einer **[Schleife]** führen, wenn keine Mechanismen wie STP implementiert wären. STP identifiziert redundante Verbindungen und **[blockiert]** eine Reihe von **[Ports]**, um sicherzustellen, dass nur ein einzigartiger Pfad zwischen **[Switches]** aktiv bleibt.

### Frage 2: Netzwerk-Topologie

- **Zentrales Gerät:** Der Router (`ISR4321`) verbindet zwei Subnetze.
- **Standardgateways:** Die IP-Adressen `192.168.10.73` (Links) und `192.168.178.41` (Rechts).
- **Komponenten:** In jedem Subnetz befinden sich Server für DHCP, DNS und Mail/HTTP.

![Netzwerk Topologie](/assets/topologie.png)

### Frage 3: NMS Funktionen

Ein Netzwerkmanagementsystem bietet zentrale Funktionen zur **[Überwachung und Verwaltung]** von Netzwerken. Mit Hilfe von Richtlinien lassen sich **[Konfigurationsänderungen]** durchführen. Moderne Systeme nutzen **[künstliche Intelligenz]**, um Netzwerkvorgänge **[automatisch]** zu optimieren. Zur Identifikation nutzt ein NMS verschiedene **[Netzwerkmanagementprotokolle]**.

### Frage 4: Troubleshooting Begriffe

Troubleshooting ist ein systematischer Prozess zur Behebung von **[Netzwerkstörungen]**. Ein häufiges Problem ist die **[Netzwerküberlastung]**. Der Prozess beginnt mit der **[Problemerkennung]** und endet mit der **[Verifikation und Dokumentation]**.

### Frage 5: Monitoring Phasen

Ein Netzwerk sollte unter ständiger **[Überwachung]** stehen. Nach einem Alarm erfolgt die **[Untersuchung]**, gefolgt von der **[Isolierung]** des Fehlers. In der **[Ursachenanalyse]** wird der genaue Grund ermittelt.

### Frage 6: Mobilfunk & Wireless

Die **[GSM]**-Technologie war das erste digitale Netz für die **[Datenübertragung]**. Zu Hause nutzen Geräte **[WLAN]**. Der Standard **[5G]** bietet Spitzenwerte bis zu 10 GB/s.

### Frage 7: Firewall-Spezifikationen

- **[Stateful Inspection]**: Analysiert den Verbindungszustand.
- **[Virtual Firewall]**: Schützt einzelne VMs.
- **[Next Generation (NGFW)]**: Deep Packet Inspection & Application Control.

### Frage 8: IP-Grundlagen

Kommunikation zwischen Netzen erfolgt über einen **[Router]**. Das **[Standardgateway]** ist das Ziel für externe Pakete. Die Adresse `127.0.0.1` ist die **[Loopbackadresse]**.

### Frage 9: Sicherheitsmaßnahmen

Maßnahmen wie **[Firewall]**, **[IDS/IPS]** zur Echtzeiterkennung, **[Multi-Faktor-Authentifizierung]** für kritische Systeme und **[VPN]** für den Home-Office-Zugriff sind essenziell.

### Frage 10: NMS Management Identification

Zur Identifikation von Netzwerkelementen nutzt ein NMS **[Netzwerkmanagementprotokolle]**. Die Analyse der Auslastung erfolgt über **[Netzwerkflüsse]**.

### Frage 11: Troubleshooting Erweitert

Wenn Datenpakete ständig die Route wechseln, nennt man das **[Route Flapping]**. Eine übermäßige Bandbreitennutzung führt zur **[Netzwerküberlastung]**.

### Frage 12: Troubleshooting Phasen (Detail)

1. **[Orientierung]**, 2. **[Untersuchung]**, 3. **[Isolierung]**, 4. **[Ursachenanalyse]**, 5. **[Abschluss]**.

### Frage 13: Wireless Begriffe II

Die Verzögerung im Netz ist die **[Latenzzeit]**. Datenübertragung über Stromleitungen heißt **[Powerline]**.

### Frage 14: Spezielle Firewalls

- **[Unified Threat Management (UTM)]**: Integrierter Virenschutz.
- **[Cloud Native Firewall]**: Unterstützt Multi-Tenant-Umgebungen.
- **[Proxy Firewall]**: Verhindert direkte Verbindungen.

### Frage 15: DHCP Betriebsmodi

Es gibt die Modi **[Statisch]**, **[Automatisch]** und **[Dynamisch]** (mit Lease-Time).

### Frage 16: DHCP Einstellungen

Zu den konfigurierbaren Parametern gehören das **[Default Gateway]**, der **[DNS-Server]** und der **[Adresspool]**.

### Frage 17: Firewall-Auswahl (Checkliste)

Korrekt sind: **[Next Generation Firewall]**, **[Virtual Firewall]** und **[Stateful Inspection Firewall]**.

### Frage 18: DNS (Domain Name System)

DNS löst **[Namen]** in **[IP-Adressen]** auf und wird zwingend vom **[Active Directory]** benötigt.

### Frage 19: Netzwerkmanagement-Disziplinen

- **[Konfigurationsmanagement]**: Pflege der Komponenten.
- **[Fehlermanagement]**: Erkennung und Beseitigung.
- **[Abrechnungsmanagement]**: Erfassung der Nutzung.

### Frage 20: Vorteile NMS

Ein NMS sorgt für höhere **[Netzwerkverfügbarkeit]** und eine optimierte **[Performance]**.

### Frage 21: DHCP Ablauf (DORA)

Der Prozess besteht aus: 1. **[Discover]**, 2. **[Offer]**, 3. **[Request]**, 4. **[Ack]**.

### Frage 22: Adressarten im Subnetz

Das Netz wird durch die **[Subnetzadresse]** identifiziert. Die Nachricht an alle nutzt die **[Broadcastadresse]**.

### Frage 23: Vorteile von Subnetzen

Subnetze dienen dazu, Netze zu **[segmentieren]** und eine **[logische Strukturierung]** der Ressourcen zu ermöglichen.

### Frage 24: VPN-Verschlüsselung

**[PPTP]** gilt als unsicher. L2TP wird oft mit **[IPSec]** genutzt. IKE tauscht **[Schlüssel]** über **[unsichere Netzwerke]** aus.

### Frage 25: Binärumrechnung

Die Binärzahl **[11000000]** entspricht **[dezimal]** 192. Der Wert **[255]** entspricht 11111111. **[4C]** ist hexadezimal.

### Frage 26: Cisco CLI Befehle

Befehl für den privilegierten Modus: **[enable]**. Speichern der Konfiguration: **[copy running-config startup-config]**.

### Frage 27: VLAN Routing

Ein **[Router]** wird benötigt, um zwischen **[verschiedenen VLANs]** basierend auf **[IP-Adressen]** zu routen.

### Frage 28: VLAN-Befehle & Tools

Putty ist ein **[Terminal-Emulator]**. Die GUI im Packet Tracer ermöglicht Konfigurationen. Befehl: **[show interfaces switchport]**.

### Frage 29: VPN Grundlagen

VPN steht für **[Virtual Private Network]**. Es ermöglicht Kommunikation wie in einem **[privaten Netzwerk]**. Bekannt sind **[IPsec-VPN]** und SSL VPN.

### Frage 30: VPN Funktionsweise

Das VPN transportiert nur die **[Daten]**. Es dient zur **[Umgehung von Geoblocking]** und stellt eine **[privaten Verbindung]** her.

### Frage 31: VLAN-Tagging

Man unterscheidet zwischen untagged und **[tagged]** VLANs. Ein VLAN umfasst alle Geräte in derselben **[Broadcast-Domäne]**.

### Frage 32: Vorteile kleiner Broadcast-Domänen

Dazu gehören die **[Senkung der Sicherheitsrisiken]** und ein **[geringerer CPU-Overheat]** der beteiligten Geräte.

### Frage 33: Cisco-Switch Modi

Das Zeichen **[#]** zeigt den Privileged EXEC Modus an. Modi sind User EXEC und **[Privileged EXEC]**.

### Frage 34: Eigenschaften von Routern

Router leiten Pakete zwischen **[mehreren Rechnernetzen]** weiter und dienen als **[Kopplungselement]**.

### Frage 35 & 38: Netzwerkdokumentation Grundlagen

Es ist eine Form der **[technischen Dokumentation]**, die Informationen **[gezielt auffindbar]** macht.

### Frage 36: Netzwerkdokumentation Zweck

Sie dient dem reibungslosen **[Netzbetrieb]** und dokumentiert, welche Geräte an welcher Stelle im Gebäude verbunden sind.

### Frage 37: Switch-Konfiguration (Erstkonfiguration)

Die Erstkonfiguration erfolgt meist über den **[Konsolenport RS232]**. Remote-Zugriff erfordert eine **[öffentliche IP-Adresse]**.

### Frage 39: Vorteile Cloud Software

Vorteile sind die schnelle **[Einsatzbereitschaft]**, **[Skalierbarkeit]** und die Erreichbarkeit von überall.

### Frage 40: IP-Definition

## Steht IP für "Interconnect Protocol"? **[Falsch]**. Es steht für **[Internet Protocol]**.
