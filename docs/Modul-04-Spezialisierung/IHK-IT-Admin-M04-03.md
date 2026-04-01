# M04 Teil 3: IHK IT Administration

---

### Frage 1: Definition und Prävention von Schatten-IT

Die IT-Abteilung implementiert eine neue Softwarelösung nach sorgfältiger Planung. Das ist ein Beispiel für eine genehmigte IT-Aktivität. Schatten-IT entsteht, wenn Mitarbeiter **inoffizielle** IT-Tools wie externe Cloud-Speicher nutzen, die nicht von der IT-Abteilung genehmigt sind. Schulungen unterstützen die korrekte Nutzung und zielen darauf ab, Schatten-IT zu **verhindern**. Wenn ein Team eine externe Lösung nutzt, ohne die IT-Abteilung zu **informieren**, handelt es sich um Schatten-IT.

---

### Frage 2: Primärschlüssel-Identifikation

HINWEIS: Da die Grafik im Portal liegt, müssen die Primärschlüssel direkt in der Tabellenstruktur der Aufgabe als **Primary Key** identifiziert werden.

---

### Frage 3: SQL Schlüsselbegriffe und Constraints

**PRIMARY KEY** ist der Primärschlüssel einer Tabelle. Der **UNIQUE**-Constraint stellt sicher, dass alle Werte in einer Spalte einzigartig sind. **FOREIGN KEY** verknüpft Tabellen als Fremdschlüssel. **ORDER BY** dient der Sortierung, während ein **SECONDARY KEY** (Sekundärschlüssel) in Standard-SQL kein direktes Constraint-Keyword ist.

---

### Frage 4: SQL Aggregation (COUNT & AVG)

Die Abfrage `SELECT COUNT(*) AS Total, AVG(Gehalt) FROM Mitarbeiter;` gibt die **Gesamtanzahl** der Datensätze und das **Durchschnittsgehalt** zurück. Wichtig: **AVG** ignoriert automatisch **NULL-Werte** bei der Berechnung. Ohne eine WHERE-Klausel findet keine Filterung statt.

---

### Frage 5: SQL Joins und Grouping

Bei einem **LEFT JOIN** werden alle Kunden angezeigt, auch wenn sie keine Bestellungen haben. Die Funktion **COUNT(BestellungID)** gibt für Kunden ohne Bestellung den Wert **0** zurück. Die Gruppierung mit **GROUP BY** ist zwingend erforderlich, wenn neben einer Aggregatfunktion (COUNT) auch normale Spalten (Name) ausgewählt werden.

---

### Frage 6: Tabellendefinition (CREATE TABLE)

In der Abfrage sorgt **DEFAULT GETDATE()** dafür, dass das Bestelldatum automatisch auf das **aktuelle Datum** gesetzt wird, falls kein Wert eingetragen wird. Das Attribut **NOT NULL** bei der KundeID erzwingt eine Eingabe. Die Tabelle wird mit einem **PRIMARY KEY** auf der BestellungID erstellt.

---

### Frage 7: Die 2. Normalform (2.NF)

Eine Relation ist in der **ersten Normalform**, wenn alle Attribute atomar sind. Die zweite Normalform verlangt, dass **alle Nichtschlüsselattribute** voll funktional vom **gesamten Primärschlüssel** abhängen. Abhängigkeiten von **einem Teil des Schlüssels** müssen eliminiert werden. Dies geschieht durch die **Zerlegung in mehrere Tabellen**.

---

### Frage 8: Funktionen eines DBMS

Ein Datenbankmanagementsystem ist eine **Verwaltungssoftware**. Es stellt eine **Datenbanksprache** (wie SQL) bereit. Das DBMS kontrolliert **Lese- und Schreibzugriffe**, organisiert die **strukturierte Speicherung** und gewährleistet die **Datensicherheit**.

---

### Frage 9: Aggregierte Filter (HAVING)

Die **HAVING**-Klausel wird verwendet, um Gruppen nach der Aggregation zu filtern. In diesem Fall werden nur Abteilungen mit **mehr als 10 Mitarbeitern** angezeigt. Im Gegensatz zu WHERE filtert HAVING keine einzelnen Zeilen, sondern die durch **GROUP BY** entstandenen Gruppen.

---

### Frage 10: SQL Abfrage (Berlin)

Um die Summe der Preise für Kunden aus Berlin zu berechnen:
`SELECT k.Name, **SUM(p.Preis)** FROM Kunde k JOIN **Bestellung b** ON k.KundenID = b.KundenID JOIN **Produkt p** ON b.ProduktID = p.ProduktID WHERE **k.Stadt = 'Berlin'** GROUP BY **k.Name** ORDER BY k.Name;`

---

### Frage 11: Aggregatfunktionen Verfügbarkeit

Die verfügbaren Aggregatfunktionen in SQL sind **AVG**, **SUM**, **MAX**, **MIN** und **COUNT**. Begriffe wie **GROUP BY** oder **INSERT** sind Befehle oder Klauseln, aber keine Funktionen.

---

### Frage 12: Strukturänderung (ALTER TABLE)

Mit **ALTER TABLE ... ADD** wird eine **neue Spalte** hinzugefügt. Durch **NOT NULL DEFAULT GETDATE()** erhalten auch alle bereits existierenden Zeilen in dieser Spalte sofort das **aktuelle Datum** als Wert.

---

### Frage 13: Technische Datenbankarten

Es wird zwischen **Relationalen Datenbanken** (SQL), **Dokumentendatenbanken** (NoSQL) und **Hierarchischen Datenbanken** unterschieden. "Relative Datenbanken" ist ein Fantasiebegriff.

---

### Frage 14: Begriffe im ER-Modell

Die Verbindung zwischen Entitäten nennt man **Beziehung** (Relationship). Ein Merkmal ist ein **Attribut**. Ein eindeutig identifizierbares Objekt ist eine **Entität**. Das Attribut zur Identifizierung ist der **Primärschlüssel**. Die Art der Mengenbeziehung (1:n, m:n) nennt man **Kardinalität**.

---

### Frage 15: COUNT vs. SUM

Die Funktion **SUM** wird verwendet, um numerische Werte (wie Umsätze) **aufzusummieren**. Die Funktion **COUNT** wird verwendet, um die **Anzahl der Zeilen** oder Einträge zu ermitteln. Beide ignorieren in Spalten vorhandene NULL-Werte.

---

### Frage 16: INNER JOIN Funktionsweise

Ein **INNER JOIN** liefert nur die Datensätze zurück, die in **beiden Tabellen** eine Übereinstimmung finden. Bestellungen ohne zugeordneten Kunden oder Kunden ohne Bestellungen werden im Ergebnis **nicht angezeigt**.

---

### Frage 17: Daten einfügen (INSERT INTO)

Der Befehl fügt einen **neuen Datensatz** in die Tabelle ein. Falls die KundeID ein Primärschlüssel ist und der Wert **1** bereits existiert, bricht die Datenbank den Vorgang mit einem **Fehler** ab.

---

### Frage 18: Multiple Values INSERT

In modernen SQL-Dialekten können mit einem einzigen INSERT-Befehl **mehrere Datensätze** gleichzeitig eingefügt werden, indem die Wertepaare durch **Kommata** getrennt werden.

---

### Frage 19: Join-Arten Übersicht

Zu den Standard-Joins gehören **INNER JOIN**, **LEFT JOIN**, **RIGHT JOIN** und **FULL OUTER JOIN**. "Middle Join" existiert nicht.

---

### Frage 20: 1. Normalform (1.NF)

In der 1. Normalform müssen alle Informationen **atomar** vorliegen (keine Listen in einem Feld) und es dürfen **keine Wiederholungsgruppen** (z.B. Telefon1, Telefon2) existieren.

---

### Frage 21: SQL Datentypen

Der Begriff **UNUSUAL** ist kein gültiger SQL-Datentyp. Standardtypen sind **INT**, **VARCHAR**, **DATE** veya **BOOLEAN**.

---

### Frage 22: Gefahren durch Schatten-IT

Schatten-IT führt zu **unkontrollierten** Systemen, was den Datenschutz gefährdet. Sie erschwert die **Integration** und Zusammenarbeit zwischen Abteilungen. Zudem entstehen oft **unvorhergesehene Kosten** durch redundante Softwarekäufe.

---

### Frage 23: Merkmale von Schatten-IT

Schatten-IT umfasst alle IT-Ressourcen, die **ohne Genehmigung** der offiziellen IT-Abteilung genutzt werden. Dies geschieht oft **außerhalb** der kontrollierten Infrastruktur. Offiziell freigegebene Tools gehören **nicht** zur Schatten-IT.

---

### Frage 24: Das Microsoft Tier-Modell

Das Tier-Modell dient der **Sicherheitsstrukturierung** von administrativen Identitäten. Es unterteilt die Umgebung in **Ebenen** (Tiers), um zu verhindern, dass ein Angreifer von einer einfachen Workstation direkt die Kontrolle über den **Domain Controller** übernimmt.

---

### Frage 25: Schwachstellen- und Patch-Management

Das Schwachstellenmanagement identifiziert Lücken, während das Patch-Management diese durch **Updates** behebt. Beide Prozesse sind essenziell für die **Sicherheit** ve die Einhaltung von **Compliance**-Vorgaben.

---

### Frage 26: Tier-Modell & Compliance Toolkit

Das Microsoft Security Compliance Toolkit bietet **Werkzeuge**, um Sicherheitsrichtlinien zu prüfen. Es **ergänzt** das Tier-Modell, indem es konkrete Konfigurationen für die verschiedenen Ebenen liefert.

---

### Frage 27: Microsoft Security Compliance Toolkit Details

Es ermöglicht den Vergleich der aktuellen Systeme mit **vordefinierten Sicherheitsrichtlinien** (Baselines). Das Ziel ist die **Optimierung** der Sicherheitskonfiguration und die Sicherstellung der Konformität.

---

### Frage 28: Patch-Management Ziele

Das Hauptziel ist die **Vermeidung von Sicherheitsrisiken** durch das Schließen bekannter Lücken. Es sorgt zudem für **stabile Systeme** und verhindert ungeplante Betriebsunterbrechungen.

---

### Frage 29: Penetrationstests Fokus

Penetrationstests simulieren gezielte Angriffe, um **Schwachstellen aufzudecken**. Sie identifizieren Lücken in der Technik und Organisation, beheben diese aber **nicht automatisch**; dies muss im Nachgang durch Patches erfolgen.

---

### Frage 30: Ethical Hacking vs. Illegal

Der entscheidende Unterschied liegt in der **Absicht** und der **Genehmigung**. Ein **Ethical Hacker** handelt im Auftrag des Eigentümers, um die Sicherheit zu **verbessern**, während illegale Hacker Schaden anrichten wollen.

---

### Frage 31: Phasen des Penetration Testings

Die Phasen umfassen **Planung**, **Scanning** (Informationsbeschaffung), **Exploitation** (Erlangen von Zugriff) und die abschließende **Berichterstattung**.

---

### Frage 32: Schatten-IT Risikobewertung

Schatten-IT verhindert eine **zentrale Verwaltung** und führt oft zu **Sicherheitslücken**. Viele Mitarbeiter nutzen inoffizielle Tools aus **Unwissenheit**, was das Risiko für **Datenverlust** erhöht.

---

### Frage 33: Bedeutung des Schwachstellenmanagements

Es ist notwendig, um **Compliance-Vorgaben** (wie ISO 27001) zu erfüllen und das **Eindringen bösartiger Akteure** proaktiv zu verhindern. Die Systemleistung wird dadurch meist nicht direkt verbessert.

---

### Frage 34: Testing im Softwarelebenszyklus

Software-Tests sind eine **kontinuierliche Aktivität**. Sie finden in den Phasen **Design, Implementierung ve Integration** statt, um die **Qualität** der Software sicherzustellen.

---

### Frage 35: Ethical Hacking Szenarien

Ein Ethical Hacker findet typischerweise **schwache Passwörter**, **ungesicherte API-Endpunkte** veya **Fehlkonfigurationen** in Webservern. Mechanische Defekte an Hardware gehören nicht zum typischen Prüfumfang.

---

### Frage 36: Ebenen im Microsoft Tier-Modell

**Tier 0** umfasst die höchste Sicherheitsstufe (z.B. **Domain Controller**). **Tier 1** beinhaltet Server ve Unternehmensanwendungen. **Tier 2** umfasst die **Benutzerarbeitsstationen**.

---

### Frage 37: Vorteile des Tier-Modells

Es bietet **erhöhte Sicherheit** durch die Trennung der administrativen Ebenen. Zudem sorgt es für eine **klare Definition von Verantwortlichkeiten** innerhalb der Administration.

---

### Frage 38: Risiken von Schatten-IT minimieren

Der beste Weg ist die **Bereitstellung bedarfsgerechter Tools** und eine **offene Kommunikation** über die Risiken. Ein striktes Verbot ohne Alternativen führt meist nur zu noch mehr versteckter Nutzung.

---

### Frage 39: Best Practices Schwachstellenanalyse

Best Practices beinhalten **regelmäßige Scans** sowie die Kombination aus **statischen ve dynamischen** Analysen. Nur interne oder seltene Prüfungen reichen nicht aus.

---

### Frage 40: Analyse vs. Behebung

Die Methode **Schwachstellenpatching** dient der **Behebung** von Fehlern. Die reine **Analyse** (Identifikation) der Fehler findet davor statt. Daher ist die Aussage, Patching sei eine Analysemethode, **Falsch**.
