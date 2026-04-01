# M04 Teil 1: IHK IT Administration

---

### Frage 1: Labordatentransfer (LDT)

Der **Labordatentransfer (LDT)** ist ein standardisiertes Verfahren zur elektronischen Übertragung von medizinischen Labordaten. Er spielt eine zentrale Rolle im deutschen Gesundheitswesen. Ein großer Vorteil von LDT ist zum einen der automatische **Datenimport** in das PVS der Arztpraxis und zum anderen die schnelle Verfügbarkeit von **Diagnosedaten**. Die **Datenübertragung** erfolgt beim LDT **verschlüsselt**.

---

### Frage 2: Datenbank-Monitoring

Eine hohe Anzahl gleichzeitiger Verbindungen ist immer **kritisch**. Hohe **Abfragezeiten** können durch fehlende Indizes verursacht werden. Deadlocks treten nur bei **parallelen Prozessen** auf. **Buffer Caches** verbessern die Abfragegeschwindigkeit.

---

### Frage 3: Festplattenüberwachung

Eine I/O-Warteschlange (Queue Depth) von 50 ist **problematisch**. **Disk Latency** über 20ms ist kritisch für Datenbanken. SMART-Werte können zukünftige **Festplattenfehler** vorhersagen. **Write Amplification** ist ein Problem bei SSDs. Fragmentierung beeinflusst SSDs und HDDs **unterschiedlich**.

---

### Frage 4: Kontinuierliches Monitoring

Es werden **alle Informationen** geliefert, die benötigt werden, um Ausfälle frühzeitig zu lokalisieren. Es geht um **dauerhafte** Überwachung. Durch die Vielzahl an Geräten entsteht eine **große Datenmenge**, deren Auswertung einen **hohen Zeitaufwand** erfordert.

---

### Frage 5: Server-Monitoring Grundlagen

Server-Monitoring ist die gezielte ve **kontinuierliche Überwachung** eines Serversystems. Ausfälle der **IT‑Infrastruktur** können verhindert werden. Ziel ist die **optimale Performance**. Das System sammelt **Echtzeitdaten**.

---

### Frage 6: Monitoring-Verfahren Zuordnung

- Analyse und Bewertung: **Historical‑Monitoring**
- Aktueller Zustand: **Real‑Time Monitoring**

---

### Frage 7: Network Change and Configuration Management (NCCM)

Es arbeitet mit CLI, SNMP oder **RESTCONF**. Sowohl **Drift** als auch Audit sind wichtige Funktionen. Die **Konfigurationsanalyse** identifiziert kleine Änderungen. Eine Funktion ist die **Automatisierung** von Updates.

---

### Frage 8: Performance Monitoring Protokolle

Daten werden per SNMP, **CLI, Telemetrie** veya WMI ermittelt. Es dient dem Erfassen ve **Analysieren** von Komponenten. SNMP steht für **Simple Network Management Protocol**.

---

### Frage 9: Sicherheits-Monitoring

**SIEM‑Tools** analysieren Daten. **Intrusion Detection Systems** erkennen Aktivitäten. **Monitoring** verhindert selbst keine Angriffe. **Brute‑Force‑Angriffe** hinterlassen viele Fehlermeldungen.

---

### Frage 10: Logik des aktiven Monitorings

- End-to-End-Monitoring: **von Softwarerobotern getestet**
- Lange Reaktionszeit: **deutet auf Probleme hin**
- Gerät fällt aus: **ist Monitoring nicht mehr möglich**
- Nutzerperspektive: **End-to-End-Monitoring**

---

### Frage 11: Server Monitoring Richtig/Falsch

- Unregelmäßigkeiten im Systemverhalten analysieren: **Richtig**
- Probleme frühzeitig erkennen: **Richtig**
- Überwachung von CPU, RAM ve Festplatte: **Richtig**
- Auch bei nur einem Server sinnvoll: **Richtig**
- Nur bei bereits ausgefallenen Systemen eingesetzt: **Falsch**
- Stellt Ressourcen zur Verfügung: **Falsch**
- Nur für große Firmen: **Falsch**
- Verhindert volle Platten: **Falsch**
- Ersetzt Backups: **Falsch**

---

### Frage 12: Aktives Monitoring Merkmale

- **Softwareroboter agieren wie Endanwender.**
- **Kann bei Geräteausfall nicht verwendet werden.**
- **Kann Probleme verschleiern.**

---

### Frage 13: Anpassung an Server-Rollen

- **Monitoring muss an den Einsatzzweck angepasst sein.**
- **Zusätzliche Informationen zu Applikationen einbeziehen.**
- **Bei Web-Server ve File-Server sind diese Daten unterschiedlich.**

---

### Frage 14: CPU-Monitoring

- **Auslastung > 90% deutet auf Probleme hin.**
- **Die Anzahl der Threads beeinflusst die Auslastung.**

---

### Frage 15: NCCM ve DEM Funktionen

- **NCCM archiviert Konfigurationen.**
- **Ereigniserfassung und -verarbeitung.**
- **Digital Experience Monitoring (DEM).**

---

### Frage 16: Monitoring Arten

- **System-Monitoring**
- **Website-Monitoring**
- **End-to-End-Monitoring**

---

### Frage 17: Vorteile Netzwerk-Monitoring

- **Dauerhafter Überblick über die gesamte IT-Infrastruktur.**
- **Kann Verbesserungspotentiale erkennen.**

---

### Frage 18: Netzwerk-Monitoring Definition

- **Fortlaufende Überwachung auf Fehler veya Schwachpunkte.**
- **Erfassung ve Auswertung von Netzwerkdaten.**

---

### Frage 19: Netzwerkprobleme

- **Paketverlust**
- **Konfigurationsänderungen**
- **Reaktionszeit der Anwendung**

---

### Frage 20: Logfile-Monitoring

Aussage: Log-Rotation verhindert Speicherprobleme.
Antwort: **Wahr**.

---

### Frage 21: Server-Rollen

Aussage: Alle Server-Rollen werden gleich überwacht.
Antwort: **Falsch**.

---

### Frage 22: REST-API Einsatzgebiete

Typisches Einsatzgebiet: **standardisierte, leichtgewichtige Kommunikation**. REST-APIs werden oft als **Backend‑Schnittstelle** eingesetzt. Sie eignen sich für **ressourcenorientierte Anwendungsfälle**. SOAP ist für **stark formalisierte** Integrationen vorgesehen. Ein Beispiel ist die **Anbindung von Zahlungsdienstleistern**.

---

### Frage 23: HL7 Header (MSH)

Einleitung durch **Segmentname "MSH"**. Trenner: **Segmentteiler (Pipe)**. Es folgen **Encoding Characters**. Identifikation: **Bezeichnung ADT A01**. Referenz: **Patienten‑ID PID**.

---

### Frage 24: REST-API Befehle

- Überschreiben: **PUT**
- Teilweise verändern: **PATCH**
- Erstellen: **POST**
- Löschen: **DELETE**
- Abfragen: **GET**

---

### Frage 25: .NET Framework

- **Eine Laufzeitumgebung für die Ausführung.**
- **Eine Programmbibliothek für die Entwicklung.**

---

### Frage 26: API Definition

- **Application Programming Interface.**
- **Schnittstelle zur Kommunikation zwischen Systemen.**

---

### Frage 27: Code-on-demand

- **Server sendet Code, den Client ausführt.**
- **Code kann als JavaScript gesendet werden.**
- **Optionale Bedingung in RESTful-Design.**

---

### Frage 28: Ressourcen-Identifikation

Antwort: **URI**.

---

### Frage 29: FHIR Ressourcen

- **Definiertes Verhalten ve eindeutige Semantik.**
- **Beispiele: Patient, Arzt, Medikation.**
- **Sind kompakte logische Einheiten.**

---

### Frage 30: Hauptfunktion API

- **Vereinfachung der Kommunikation.**
- **Beschleunigung des Datenaustauschs.**

---

### Frage 31: Client-Server-Regeln

- **Statelessness**
- **Layered System**

---

### Frage 32: REST Client Befehle

Antworten: **GET, PUT, POST, DELETE**.

---

### Frage 33: SOAP vs. REST

- **SOAP ist ein Protokoll, REST ein Designstil.**
- **SOAP erfordert engere Bindung.**

---

### Frage 34: WinAPI Varianten

- **Windows-Programme ohne Windows nutzen.**
- **Kompatibilität kann eingeschränkt sein.**

---

### Frage 35: Windows Update-Agent (WUA)

- **Zugriff auf WSUS.**
- **Skripte ve Programme zum Feststellen von Updates.**

---

### Frage 36: WinAPI Gesundheit

Aussage: WinAPI ist die einzige Schnittstelle im Gesundheitswesen.
Antwort: **Falsch**.

---

### Frage 37: API Integration

Aussage: APIs helfen bei nahtloser Integration.
Antwort: **Wahr**.

---

### Frage 38: REST Architektur

Merkmale: Client-Server, Statelessness, Layered System, Caching, Code-on-demand.
Antwort: **Wahr**.

---

### Frage 39: REST Begriff

Aussage: REST steht für Representational State Transfer.
Antwort: **Wahr**.

---

### Frage 40: Zustandslosigkeit

Aussage: Interaktionen in RESTful-Design sind zustandslos.
Antwort: **Wahr**.
