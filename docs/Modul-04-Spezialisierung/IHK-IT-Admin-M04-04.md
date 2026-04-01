# M04 Teil 4: IHK IT Administration

---

### Frage 1: Lizenzstrategien Überprüfung

Um sicherzustellen, dass die Strategien den sich [**ändernden**] Geschäftsanforderungen entsprechen. Unternehmen entwickeln sich ständig weiter, daher müssen Lizenzstrategien regelmäßig [**angepasst**] werden, um den aktuellen Bedürfnissen zu entsprechen. Eine regelmäßige Überprüfung hilft dabei, Kosten zu [**optimieren**]. Softwareanbieter ändern häufig ihre Lizenzmodelle und -bedingungen, sodass Unternehmen ihre Strategien [**regelmäßig**] anpassen müssen, um compliant zu bleiben.

---

### Frage 2: SQL INSERT Aufbau

Der Grundaufbau eines INSERT-Befehls lautet: INSERT [**INTO**] table_name (column1, column2) VALUES (value1, value2);
Möchte man nur bestimmte Spalten befüllen, muss man diese in [**Klammern**] setzen. Wenn keine Spalten explizit angegeben werden, wird davon ausgegangen, dass Werte für [**alle**] Spalten der Tabelle bereitgestellt werden. Die eingefügten Werte stehen im [**VALUES**]-Teil des INSERT-Befehls. Wird bei INSERT ein Pflichtfeld ausgelassen, das keinen Standardwert hat, führt dies zu [**einem Fehler**]. Um mehrere Datensätze auf einmal einzufügen, können mehrere [**Eingabe**]-Blöcke verwendet werden.

---

### Frage 3: Datenbank Grundtypen Zuordnung

- Speicherung von Objekten mit Attributen und Methoden = [**Objektorientierte Datenbank**]
- 1:n = [**Relationale Datenbank**]
- Daten sind streng baumartig organisiert = [**Hierarchische Datenbank**]
- Speicherung und Analyse von zeitlich geordneten Messwerten = [**Zeitreihen-Datenbank**]
- Speicherung semi-strukturierter Daten = [**Dokumenten-Datenbank**]

---

### Frage 4: SQL INSERT Syntax

- **Grundaufbau:** INSERT [**INTO**]
- **Spalten befüllen in:** [** ( ) **]
- **Werte stehen im:** [**VALUES**]
- **Mehrere Datensätze:** [**Eingabe**]-Blöcke
- **Pflichtfeld fehlt:** [**einem Fehler**]

---

### Frage 5: Datenbanktypen Lückentext

Die am weitesten verbreitete Form ist die [**relationale**] Datenbank. Eine [**Dokumenten-**] Datenbank eignet sich gut für semi-strukturierte Daten. Die [**objektorientierte**] Datenbank speichert Objekte mit Attributen und Methoden. Fokus auf zeitlich geordnete Messwerte: [**Zeitreihen-**] Datenbank. Streng baumartig organisiert: [**hierarchischen**] Datenbank.

---

### Frage 6: Kardinalitäten Beispiele

- **Kunde und Kundennummer:** [**=1:1**]
- Lehrer und Klassen (ein Lehrer pro Klasse): [**=1:n**]
- Kunden, Bestellungen und Produkte im Shop: [**=m:n**]
- Eine Abteilung, ein Abteilungsleiter: [**=1:1**]
- Bibliothek und Bücher (Buch steht in genau einer Bibliothek): [**=1:n**]

---

### Frage 7: ER-Modell Kardinalitäten

[**1:1**]-Beziehung tritt auf bei Person – Ausweis. Die häufigste ist die [**1:n**]-Beziehung (Kunde – Bestellungen). Komplexere Systeme benötigen [**m:n**]. Die Schreibweise [**M:N**] ist formal inkorrekt. [**1:0**] ist keine gültige Kardinalität.

---

### Frage 8: Relationale Datenbanken vs. Excel

Konsistente Datenhaltung durch [**normalisierten Tabellen**]. Sprache zur Abfrage: [**SQL**]. Beziehungen über [**Primär- und Fremdschlüssel**]. Bessere [**Mehrbenutzerfähigkeit**]. Skalierbar für [**großen Datenmengen**].

---

### Frage 9: Primärschlüssel Aussagen (Richtig/Falsch)

- **Ohne PK keine Daten möglich:** **Falsch**
- **Maximal zwei PKs gleichzeitig:** **Falsch**
- **PK darf NULL sein:** **Falsch**
- **PK müssen eindeutig sein:** **Richtig**
- **PK nicht notwendig ohne Abfragen:** **Falsch**
- **PK kann sich ändern bei Inhaltsänderung:** **Falsch**
- **Wahl auf stabilem Attribut basieren:** **Richtig**
- **Kombination mehrerer Spalten ungeeignet:** **Falsch**
- **Identifiziert jede Zeile eindeutig:** **Richtig**

---

### Frage 10: COUNT() und SUM() Aussagen

- COUNT() zählt Zeilen: **Richtig**
- SUM() nur numerisch: **Richtig**
- SUM() für Textspalten (Zeichenanzahl): **Falsch**
- SUM() gibt Anzahl der Werte zurück: **Falsch**
- SUM() berechnet Summe numerischer Werte: **Richtig**
- COUNT/SUM identisch bei allen Typen: **Falsch**
- SUM() statt AVG() für Durchschnitt: **Falsch**
- COUNT(Spalte) ignoriert NULL: **Richtig**
- COUNT(\*) zählt auch NULL: **Richtig**
- COUNT(DISTINCT) zählt nur eindeutige: **Richtig**

---

### Frage 11: Linux Dateisystem

**Korrekte Aussagen:**

- Schnittstelle zwischen BS und Partitionen.
- Benutzer können Organisation sehen.
- Organisiert die geordnete Ablage von Dateien.

---

### Frage 12: Dateisysteme (ext3, ext4)

**Korrekte Aussagen:**

- Es gibt unzählige Dateisysteme bei Linux.
- Durch Journaling in ext3 entfallen langwierige Prüfungen.
- ext3 ist Standard vieler Distributionen.

---

### Frage 13: Geschichte von Linux

**Wahrheit:**

- **Erfinder:** Linus Torvalds.
- **Ursprünglicher Name:** „Freax".
- **Logo:** Pinguin.

---

### Frage 14: Komplexe Befehle (lsmod)

**Wahr:**

- `lsmod` zeigt Status des Kernels in menschenlesbarem Format.
- Informationen werden in menschenlesbarem Format ausgegeben.
- Hilfe bei Netzwerkproblemen (Netzwerk-Interface).

---

### Frage 15: Was ist Linux?

**Wahr:**

- Freies Multiplattform-Mehrbenutzer-Betriebssystem.
- Es gibt mehrere Distributionen.
- Kernel und Software als „fertiges Paket".

---

### Frage 16: Linux Distributionen

**Wahr:**

- Distributionen für spezielle User-Gruppen.
- Kali-Linux = „Hacker-Linux".
- Design von Linux-Mint ähnelt Windows.

---

### Frage 17: Rechtekonzept Linux

**Korrekt:**

- Ausgefeiltes Mehrbenutzer-Rechtesystem.
- Systemkonto „root" besitzt alle Rechte.
- Standardbenutzer hat Vollzugriff auf eigenes Home-Verzeichnis.

---

### Frage 18: Vorteile Linux

**Antworten:**

- Meist völlig kostenlos für Privatanwender.
- Benötigt wenig Speicherplatz.
- Funktionalität ist sehr hoch.

---

### Frage 19: Jahre der Entwicklung

**Wahr:**

- 1993: Über 100 Programmierer am Code.
- 2001: Kernel 2.4 unterstützt bis zu 64 GB RAM.
- 2003: München entscheidet sich für Linux.

---

### Frage 20: Rechteverteilung (chmod)

**Korrekt:**

- 4 Benutzerkategorien bei Rechtevergabe.
- `chmod` nutzt man zum Anpassen der Rechte.
- Zahl 5 bedeutet „Lesen und Ausführen".

---

### Frage 21: Shell-Skripte

**Wahr:**

- Bündeln viele Befehle in einen Satz.
- Dateiendung „.sh".
- Starten mit „#!/bin/bash".

---

### Frage 22: Herausforderungen Lizenzverwaltung

Zahlreiche [**unterschiedliche**] Modelle, die [**verwaltet**] werden müssen. In virtuellen Umgebungen Zuweisung oft [**dynamisch**]. Vermeidung [**rechtliche**] Risiken.

---

### Frage 23: Warum Lizenzmanagement komplex?

Unterschiedliche [**Lizenzmodellen**] und Metriken (pro [**Gerät**]). Lizenzkosten sind [**entscheidender**] Faktor. Cloud-Dienste oft [**abonnementbasiert**].

---

### Frage 24: Rolle der Lizenzstrategien

Beeinflussen [**direkt**], welche Software genutzt und wie sie [**verwaltet**] wird. Wie Software [**beschafft**] wird. Sicherstellen, dass [**keine**] unerlaubte Nutzung stattfindet.

---

### Frage 25: Microsoft-Lizenz-Vorteile

Balance zwischen [**Kosten**] und Nutzen. Softwarenutzung [**anzupassen**]. Kostenoptimierung durch [**Anpassung**]. Bessere [**Skalierbarkeit**].

---

### Frage 26: Kaufmodelle (Einmalgebühr)

Erwerb für [**bestimmte Version**]. Option auf [**kostenpflichtige**] Upgrades. Bietet [**langfristige**] Kontrolle.

---

### Frage 27: Funktionalität

Freischaltung [**erweiterten**] Funktionen. Voller [**Funktionsumfang**]. Kostenlose Versionen oft [**begrenzte**] Funktionalität. Lizenzierte Versionen bieten [**vollen**] Umfang.

---

### Frage 28: Tracking

Durch effektives [**Lizenz-Tracking**] bestimmen, was [**benötigt**] wird. [**unnötige**] Ausgaben vermeiden. Hilfe bei [**rechtzeitigen**] Erneuerung.

---

### Frage 29: Legalität

Verhindert [**Geldstrafen**]. Software [**rechtmäßig**] nutzen. Gibt einem das [**Recht**], die Software zu [**verwenden**].

---

### Frage 30: Ziel MS-Strategien (R/F)

- **Maximierung Installationen:** **Falsch**
- **Compliance sicherstellen:** **Richtig**
- **Kosten effizient verwalten:** **Richtig**
- **Kostenminimierung alleiniges Ziel:** **Falsch**
- **Konformität und Kostenoptimierung:** **Richtig**
- **Compliance spielt entscheidende Rolle:** **Richtig**
- **Lizenznachverfolgung essenziell:** **Richtig**
- **Bedarfsgerechte Nutzung Ziel:** **Richtig**

---

### Frage 31: Hauptziele Management-Strategie

- **Konformität durch Audits:** **Richtig**
- **Lückenlose Nachverfolgung:** **Richtig**
- **Maximierung der Kosten:** **Falsch**
- Unregelmäßige Überprüfung: **Falsch**
- Optimales Kosten-Nutzen-Verhältnis: **Richtig**
- **Minimierung Nachverfolgung:** **Falsch**
- **Kostenoptimierung:** **Richtig**
- **Optimierung Verwaltung:** **Richtig**

---

### Frage 32: Warum Betreuung wichtig?

- **Kontrollierte Installation:** **Richtig**
- **Reduzierung Upgrades:** **Falsch**
- **Positives Image bei Lieferanten:** **Richtig**
- **Lizenzverletzungen verhindern:** **Richtig**
- **Vermeidung rechtlicher Risiken:** **Richtig**
- **Steigerung Verletzungen:** **Falsch**
- **Rechtmäßige Lizenzierung sichern:** **Richtig**
- **Unkontrollierte Installation fördern:** **Falsch**

---

### Frage 33: Was umfasst Strategie?

- **Bedingungen einhalten:** **Richtig**
- **Maximierung Installationen:** **Falsch**
- Verwaltung Kosten/Nutzung: **Richtig**
- **Ignorieren Verletzungen:** **Falsch**
- **Sicherstellung Konformität:** **Richtig**
- **Aktive Vermeidung Verstöße:** **Richtig**
- **Bedarfsgerechte Nutzung:** **Richtig**
- **Vernachlässigung Bedingungen:** **Falsch**

---

### Frage 34: Rechte Zuordnung

- **Software modifizieren:** [**Modifikationsrecht**]
- **Zeitspanne begrenzt:** [**Nutzungsdauer**]
- **Kopien erstellen:** [**Vervielfältigungsrecht**]
- **Weitergabe an Dritte:** [**Weitergaberecht**]
- **Bestimmte Plattformen:** [**Nutzung auf bestimmten Geräten**]
- **Gemäß Bedingungen verwenden:** [**Nutzungsrecht**]

---

### Frage 35: SAM-Tools Funktionen

- **Alarme:** **Richtig**
- Patch-Management: **Falsch**
- **Reporting:** **Richtig**
- **Compliance:** **Richtig**
- **Automatisierte Inventarisierung:** **Richtig**
- **Lizenzverfolgung:** **Richtig**

---

### Frage 36: Vorteile Management

- **Verlust Geschäftsdaten:** **Falsch**
- **Minimierung Rechtsstreit:** **Richtig**
- **Ziel Kostenreduktion:** **Richtig**
- **Unkontrollierte Verwendung:** **Falsch**
- **Betrifft Softwareverwaltung:** **Richtig**
- **Vermeidung unkontrollierter Nutzung:** **Richtig**
- **Erhöhte Investitionen:** **Falsch**
- **Reduzierte Lizenzkosten:** **Richtig**

---

### Frage 37: MS-Lizenzen Korrekt

- Bietet Geräte- und Benutzerlizenzen.
- **Office Modelle:** Einzellizenzen, Abo (O365), Volumen.
- Veränderungen im Unternehmen erschweren Anpassung.

---

### Frage 38: MS Lizenzmodelle Korrekt

- OEM-Lizenzen: Vom Gerätehersteller vorinstalliert.
- **Azure:** Cloud-Dienste über Abonnementmodell.
- Enterprise Agreement (EA): Vertrag mit ermäßigten Preisen.

---

### Frage 39: Vorteile Lizenzmanagement

- Kostenkontrolle.
- Risikominimierung.
- Bessere Verhandlungsposition.

---

### Frage 40: GNU License Microsoft Enterprise

- Korrekte Bezeichnung für Open-Source? Antwort: [Falsch]

---
