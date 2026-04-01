# M04 Teil 1: IHK IT Administration

---

### Frage 1: Labordatentransfer (LDT)

Der **Labordatentransfer (LDT)** ist ein standardisiertes Verfahren zur elektronischen Übertragung von medizinischen Labordaten. Ein großer Vorteil von LDT ist der automatische **Datenimport** in das PVS der Arztpraxis und die schnelle Verfügbarkeit von **Diagnosedaten**. Die Datenübertragung erfolgt beim LDT **verschlüsselt**.

---

### Frage 2: Datenbank-Monitoring

- Eine hohe Anzahl gleichzeitiger Verbindungen ist immer **kritisch**.
- Hohe **Abfragezeiten** können durch fehlende Indizes verursacht werden.
- Deadlocks treten nur bei **parallelen Prozessen** auf.
- **Buffer Caches** verbessern die Abfragegeschwindigkeit.

---

### Frage 3: Festplattenüberwachung

- Eine I/O-Warteschlange (Queue Depth) von 50 ist **problematisch**.
- **Disk Latency** über 20ms ist kritisch für Datenbanken.
- SMART-Werte können zukünftige **Festplattenfehler** vorhersagen.
- **Write Amplification** ist ein Problem bei SSDs.
- Fragmentierung beeinflusst SSDs und HDDs **unterschiedlich**.

---

### Frage 4: Kontinuierliches Monitoring

Es werden **alle Informationen** geliefert, die benötigt werden, um Ausfälle frühzeitig zu lokalisieren. Es geht um **dauerhafte** Überwachung. Durch die Vielzahl an Geräten entsteht eine **große Datenmenge**, deren Auswertung einen **hohen Zeitaufwand** erfordert.

---

### Frage 5: Server-Monitoring Grundlagen

Server-Monitoring ist die gezielte und **kontinuierliche Überwachung** eines Serversystems. Ausfälle der gesamten **IT‑Infrastruktur** können verhindert werden. Ziel ist die **optimale Performance**. Das System sammelt zudem **Echtzeitdaten**.

---

### Frage 6: Monitoring-Verfahren Zuordnung

- **Analyse und Bewertung:** **Historical‑Monitoring**
- **Aktueller Zustand:** **Real‑Time Monitoring**

---

### Frage 7: Network Change and Configuration Management (NCCM)

Es arbeitet mit CLI, SNMP oder **RESTCONF**. **Drift** und Audit sind wichtige Funktionen. Die **Konfigurationsanalyse** identifiziert kleine Änderungen. Eine Funktion ist die **Automatisierung** von Updates.

---

### Frage 8: Performance Monitoring Protokolle

Daten werden per SNMP, **CLI, Telemetrie** oder WMI ermittelt. Es dient dem Erfassen und **Analysieren** von Komponenten. SNMP steht für **Simple Network Management Protocol**.

---

### Frage 9: Sicherheits-Monitoring

**SIEM‑Tools** korrelieren Daten. **Intrusion Detection Systems** erkennen Aktivitäten. **Monitoring** verhindert selbst keine Angriffe. **Brute‑Force‑Angriffe** hinterlassen viele Fehlermeldungen.

---

### Frage 10: Logik des aktiven Monitorings

- **Fällt das Gerät aus:** **ist Monitoring nicht mehr möglich**.
- **Test durch Softwareroboter:** **von Softwarerobotern getestet**.
- **Nutzerperspektive:** **End-to-End-Monitoring**.
- **Lange Reaktionszeit:** **deutet auf Probleme hin**.

---

### Frage 11: Aussagen zum Server-Monitoring (Richtig/Falsch)

- **Richtig:** Unregelmäßigkeiten analysieren; Auch bei einem Server sinnvoll; Probleme frühzeitig erkennen; Überwachung von CPU, RAM und Festplatte.
- **Falsch:** Nur bei Ausfall einsetzen; Nur für große Firmen; Verhindert volle Platten; Ersetzt Backups.

---

### Frage 12: Aktives Monitoring Definition

- Softwareroboter agieren wie Endanwender.
- Kann bei Geräteausfall nicht verwendet werden.
- Kann Probleme verschleiern.

---

### Frage 13: Anpassung an Server-Rollen

Das Monitoring muss speziell an den **Einsatzzweck** angepasst sein. Bei Web-Servern und File-Servern sind die relevanten Daten unterschiedlich.

---

### Frage 14: CPU-Monitoring

Auslastung > 90% deutet auf Probleme hin. Die Anzahl der Threads beeinflusst die Auslastung.

---

### Frage 15: NCCM und DEM

NCCM archiviert Konfigurationen. **Digital Experience Monitoring (DEM)** ist eine wichtige Verwaltungstechnologie.

---

### Frage 16: Monitoring Arten

System-Monitoring, Website-Monitoring, End-to-End-Monitoring.

---

### Frage 17: Vorteile Netzwerk-Monitoring

Dauerhafter Überblick über die IT-Infrastruktur und Erkennung von Verbesserungspotentialen.

---

### Frage 18: Definition Netzwerk-Monitoring

Fortlaufende Überwachung auf Fehler/Schwachpunkte. Erfassung und Auswertung von Netzwerkdaten.

---

### Frage 19: Netzwerkprobleme

Paketverlust, Konfigurationsänderungen, Reaktionszeit der Anwendung.

---

### Frage 20: Logfile-Monitoring

**Wahr.** Log-Rotation verhindert Speicherprobleme durch Archivierung oder Löschen alter Logs.

---

### Frage 21: Server-Überwachung (Rollen)

Ist die Aussage "Alle Server-Rollen werden gleich überwacht" richtig? Falsch. (Individuelles Monitoring erforderlich).

---

### Frage 22: REST-API Einsatzgebiete

Typisch sind **standardisierte, leichtgewichtige Kommunikation**, **Backend‑Schnittstellen** und **ressourcenorientierte Anwendungsfälle**. SOAP ist für **stark formalisierte** Integrationen wie **Anbindung von Zahlungsdienstleistern**.

---

### Frage 23: HL7 Header (MSH)

Einleitung durch **Segmentname "MSH"**. Trenner ist die **Pipe (|)**. Es folgen **Encoding Characters**. Identifikation des Typs: **Bezeichnung ADT A01**. Patientenreferenz: **Patienten‑ID PID**.

---

### Frage 24: REST-API Befehle

- **Verändern:** **PUT**
- **Löschen:** **DELETE**
- Überschreiben: **PUT**
- **Erstellen:** **POST**
- **Abfragen:** **GET**

---

### Frage 25: .NET Framework

Es ist eine **Laufzeitumgebung** zur Ausführung und eine **Programmbibliothek** zur Entwicklung.

---

### Frage 26: API Definition

Application Programming Interface. Schnittstelle zur Kommunikation zwischen zwei Systemen.

---

### Frage 27: Code-on-demand

Der Server sendet Code (z.B. JavaScript), den der Client ausführt. Optionale REST-Bedingung.

---

### Frage 28: Ressourcen-Identifikation

Erfolgt über die **URI** (Unique Resource Identifier).

---

### Frage 29: FHIR Ressourcen

Definiertes Verhalten, eindeutige Semantik (z.B. Patient, Arzt). Kompakte Einheiten des Datenaustauschs.

---

### Frage 30: Hauptfunktion API

Vereinfachung der Kommunikation und Beschleunigung des Datenaustauschs.

---

### Frage 31: Client-Server-Regeln

**Einzuhaltende Regeln:** **Statelessness** (Zustandslosigkeit) und **Layered System** (Schichtsystem).

---

### Frage 32: REST Client Befehle

GET, PUT, POST, DELETE.

---

### Frage 33: SOAP vs. REST

SOAP ist ein Protokoll, REST ein Designstil. SOAP erfordert eine engere Bindung zwischen Client und Server.

---

### Frage 34: WinAPI Varianten

Dienen zur Nutzung von Windows-Programmen auf anderen Systemen. Kompatibilität kann eingeschränkt sein.

---

### Frage 35: Windows Update-Agent (WUA)

Ermöglicht Zugriff auf **WSUS** (Windows Server Update Services).

---

### Frage 36: WinAPI im Gesundheitswesen

Ist WinAPI die einzige Schnittstelle dort? Falsch.

---

### Frage 37: API Integration

Helfen APIs bei der nahtlosen Integration? Wahr.

---

### Frage 38: REST Architektur Merkmale

Umfasst Client-Server, Statelessness, Layered System, Caching und Code-on-demand. **Wahr.**

---

### Frage 39: REST Begriff

Steht REST für Representational State Transfer? Wahr.

---

### Frage 40: Zustandslosigkeit

Sind REST-Interaktionen zustandslos? Wahr.

---
