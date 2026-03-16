# M04 Teil 3: IHK IT Administration

---

### Frage 1: Definition und Prävention von Schatten-IT

Die IT-Abteilung implementiert eine neue Softwarelösung nach sorgfältiger Planung. Das ist ein Beispiel für eine genehmigte und offizielle IT-Aktivität, nicht für Schatten-IT. Schatten-IT entsteht genau dann, wenn Mitarbeiter **inoffizielle** IT-Tools wie externe Cloud-Speicherlösungen (z. B. Google Drive) nutzen, die nicht von der IT-Abteilung genehmigt oder überwacht werden. Mitarbeiter erhalten Schulungen zur sicheren Verwendung von Unternehmenssoftware. Dies unterstützt die korrekte Nutzung von offiziellen Tools und zielt darauf ab, Schatten-IT zu **verhindern**. Ein Team verwendet dennoch eine externe Cloud-Speicherlösung, um Dateien gemeinsam zu nutzen, ohne die IT-Abteilung zu **informieren**. Dann entsteht Schatten-IT.

---

### Frage 2: Primärschlüssel-Identifikation (Grafik-Frage)

HINWEIS: Diese Frage basiert auf einer grafischen Darstellung im Portal. Da die Grafik hier nicht angezeigt werden kann, müssen die Primärschlüssel im Originaltext der Aufgabe markiert werden.

---

### Frage 3: SQL Schlüsselbegriffe und Constraints

**PRIMARY KEY** ist der Primärschlüssel in einer Tabelle. Der **UNIQUE** - Constraint stellt sicher, dass alle Werte in einer Spalte unterschiedlich (einzigartig) sind. **FOREIGN KEY** ist der Fremdschlüssel in einer Tabelle. **ORDER BY** ist keine Einschränkung, sondern eine Anweisung zur Sortierung von Ergebnissen. **SECONDARY KEY** ist in SQL nicht vorhanden.

---

### Frage 4: SQL Aggregation (COUNT & AVG)

Was gibt die folgende Abfrage zurück? `SELECT COUNT(*) AS Total, AVG(Gehalt) AS GehaltDurchschnitt FROM Mitarbeiter;` COUNT gibt die **Gesamtanzahl** der Datensätze zurück, und AVG(Gehalt) berechnet das **Durchschnittsgehalt**. AVG ignoriert standardmäßig **NULL**-Werte. Hier wird nur die Gesamtzahl und das Durchschnittsgehalt berechnet, keine Filterung auf **höheres** Gehalt. Diese Abfrage berücksichtigt **keine** Filterung auf NULL-Werte in (Gehalt).

---

### Frage 5: SQL Joins und Grouping

Welche Aussagen treffen auf diese Abfrage zu? `SELECT Kunde.Name, COUNT(Bestellung.BestellungID) AS Gesamtbestellungen FROM Kunden LEFT JOIN Bestellungen ON Kunden.KundenID = Bestellungen.KundenID GROUP BY Kunde.Name;` LEFT JOIN **zeigt alle Kunden**, und COUNT **zählt Bestellungen**. GROUP BY Kunde.Name ist **korrekt**, da COUNT ein Aggregat ist. LEFT JOIN gibt NULL für Bestellungen zurück, und COUNT behandelt diese als 0.

---

### Frage 6: Tabellendefinition (CREATE TABLE)

Was erzeugt folgende Abfrage? `CREATE TABLE Bestellungen (BestellungID INT PRIMARY KEY, KundeID INT NOT NULL, Bestelldatum DATE DEFAULT GETDATE());` "Bestelldatum" enthält immer das heutige Datum, wenn kein Wert angegeben wird. Das DEFAULT GETDATE() sorgt dafür, dass "Bestelldatum" standardmäßig das aktuelle Datum verwendet. NOT NULL auf "KundeID" **verhindert**, dass es NULL sein kann. Die Abfrage **erzeugt** eine Tabelle mit einem Primärschlüssel auf "BestellungID". Diese Abfrage definiert zwar keinen Fremdschlüssel, aber die Tabelle kann sie später **bekommen**. Es handelt sich nur um die Tabellendefinition, Daten können später **hinzugefügt** werden.

---

### Frage 7: Die 2. Normalform (2.NF)

Ordne die passenden Begriffe den Aussagen zu, um die Regeln der 2. Normalform korrekt zuzuordnen. Eine Relation befindet sich in der **ersten Normalform**, wenn alle Attribute atomar sind. Die zweite Normalform verlangt zusätzlich, dass **alle Nichtschlüsselattribute** voll funktional vom **gesamten Primärschlüssel** abhängen. Abhängigkeiten von **einem Teil des Schlüssels** müssen eliminiert werden. Dies geschieht durch **Zerlegung der Tabelle in zwei oder mehr Tabellen**, bei denen jede Tabelle nur die Daten enthält, die vom jeweiligen Schlüssel vollständig abhängig sind.

---

### Frage 8: Funktionen eines DBMS

Ein Datenbankmanagementsystem (DBMS) ist eine spezielle **Verwaltungssoftware**, die zur Verwaltung von Daten dient. Es stellt eine **Datenbanksprache** bereit, über die Nutzer mit der Datenbank interagieren können. Ein DBMS kontrolliert **Lese/Schreib-zugriffe**, organisiert die **strukturierte Speicherung** und gewährleistet **Datensicherheit und Datenschutz**.

---

### Frage 9: Aggregierte Filter (HAVING)

Was gibt diese Abfrage zurück? `SELECT AbteilungID, COUNT(*) AS Mitarbeiteranzahl FROM Mitarbeiter GROUP BY AbteilungID HAVING COUNT(*) > 10;` COUNT(\*) in HAVING ist **gültig**, da es auf **aggregierten** Werten basiert. Die Abfrage gruppiert nach AbteilungID, zählt **aber nicht** die Gesamtzahl aller Abteilungen. NULL-Werte in AbteilungID werden ausgeschlossen. Nur Abteilungen mit **mehr** als 10 Mitarbeitern werden angezeigt. Die HAVING-Klausel filtert Gruppen mit weniger als 10 Datensätzen aus.

---

### Frage 10: Komplexere SQL Abfrage (Berlin)

Erstelle eine SQL-Abfrage, die die Namen aller Kunden sowie die Summe der Preise ihrer bestellten Produkte anzeigt – allerdings nur für Kunden aus der Stadt 'Berlin'. Die Ergebnisse sollen nach dem Kundennamen sortiert sein. `SELECT k.Name, **SUM(p.Preis)** FROM Kunde k JOIN **Bestellung b** ON k.KundenID = b.KundenID JOIN **Produkt p** ON b.ProduktID = p.ProduktID WHERE **k.Stadt = 'Berlin'** GROUP BY **k.Name** ORDER BY k.Name;`

---

### Frage 11: Aggregatfunktionen Verfügbarkeit

Welche der folgenden Aggregatfunktionen sind in SQL verfügbar? **AVG**, **SUM** und **COUNT** sind Aggregatfunktionen. **DISTINCTCOUNT**, **GROUP BY** und **INSERT INTO** sind **keine Aggregatfunktionen**.

---

### Frage 12: Strukturänderung (ALTER TABLE)

Was passiert durch diese Abfrage? `ALTER TABLE Mitarbeiter ADD Einstellungsdatum DATE NOT NULL DEFAULT GETDATE();` Die neue Spalte erlaubt NULL-Werte (**Falsch**). Die Tabelle wird gelöscht (**Falsch**). Eine neue Spalte wird hinzugefügt (**Richtig**). ALTER TABLE ... ADD fügt eine neue Spalte hinzu (**Richtig**). Zeilen haben standardmäßig das heutige Datum (**Richtig**). Vorhandene Daten bleiben unverändert (**Richtig**). DEFAULT GETDATE() setzt für bestehende Zeilen das aktuelle Datum (**Richtig**).

---

### Frage 13: Technische Datenbankarten

Welche dieser technischen (nicht inhaltlichen) Arten von Datenbanken gibt es? **Dokumentendatenbanken** (Richtig), **Relationale Datenbanken** (Richtig), **Hierarchische Datenbanken** (Richtig). **Musiktitel-Datenbanken** und **Personaldaten-Datenbanken** sind inhaltliche Beispiele, **Relative Datenbanken** gibt es nicht.

---

### Frage 14: Begriffe im ER-Modell

Die Anzahl der beteiligten Entitätstypen an einer Beziehung nennt man **Kardinalität**. Die Verbindung zwischen zwei oder mehreren Entitäten nennt man **Relation**. Eine Eigenschaft oder ein Merkmal nennt man **Attribut**. Ein Attribut zur eindeutigen Identifizierung nennt man **Primärschlüssel/Primary Key**. Ein eindeutig identifizierbares Objekt nennt man **Entität**.

---

### Frage 15: COUNT vs. SUM

Kann verwendet werden, um Umsätze oder Mengen zusammenzurechnen (**SUM**). Gibt die Gesamtsumme eines numerischen Wertes zurück (**SUM**). Zählt, wie viele Zeilen in einer Tabelle vorhanden sind (**COUNT**). Kann auch mit \* verwendet werden, um alle Zeilen zu zählen (**COUNT**). Ignoriert NULL-Werte beim Zählen von Spaltenwerten (**COUNT**).

---

### Frage 16: INNER JOIN Funktionsweise

Welche Ergebnisse liefert diese Abfrage? `SELECT Bestellungen.BestellungID, Kunden.Name FROM Bestellungen INNER JOIN Kunden ON Bestellungen.KundeID = Kunden.KundeID;` **Alle Bestellungen und die Namen der zugehörigen Kunden** werden ausgegeben. **NULL-Werte in KundeID werden ausgeschlossen**. Ein INNER JOIN kombiniert Datensätze, die in beiden Tabellen übereinstimmen.

---

### Frage 17: Daten einfügen (INSERT INTO)

Was passiert durch die folgende Abfrage? `INSERT INTO Kunde (KundeID, Name, Stadt) VALUES (1, 'Müller GmbH', 'Berlin');` Ein **neuer Kunde mit der ID 1 wird hinzugefügt**. Die Zeile wird **NICHT eingefügt, wenn diese KundeID bereits existiert**. Die Abfrage erzeugt einen **Fehler, wenn keine Tabelle Kunde existiert**.

---

### Frage 18: Multiple Values INSERT

Was bewirkt diese Abfrage? `INSERT INTO Produkte (ProduktID, Name, Preis) VALUES (1, 'Laptop', 1200.50), (2, 'Tablet', 599.99), (3, 'Smartphone', 899.00);` Es werden **3 neue Produkte in die Tabelle eingefügt**. Es wird ein **Fehler ausgegeben, wenn ein ProduktID-Wert bereits existiert** (Primärschlüssel).

---

### Frage 19: Join-Arten Übersicht

Welche Arten von Joins gibt es in SQL? **LEFT JOIN**, **INNER JOIN** und **FULL OUTER JOIN**. **MIDDLE JOIN** und **CROSS FILTER** existieren in SQL nicht.

---

### Frage 20: 1. Normalform (1.NF)

Welche Aussagen zur 1. Normalform sind korrekt? Eine Tabelle in der 1.NF darf **keine mehrfachen Werte in einer Spalte** enthalten. Eine Tabelle in der 1.NF muss für jede Spalte einen **eindeutigen Datentyp** definieren.

---

### Frage 21: SQL Datentypen (Unusual)

Gibt es folgenden Datentyp in SQL? **UNUSUAL**. Die Antwort ist **Falsch**, da UNUSUAL kein Datentyp in SQL ist.

---

### Frage 22: Gefahren durch Schatten-IT

Schatten-IT gefährdet Sicherheit und Datenschutz, da sie **unkontrollierte** Systeme einsetzt. Schatten-IT erschwert die Zusammenarbeit durch fehlende **Integration** zwischen Teams. Schatten-IT erhöht Kosten und fragmentiert Prozesse statt **Effizienz** zu steigern. Unkontrollierte IT-Lösungen erhöhen das Risiko von Datenverlusten und Datenschutzverletzungen. Schatten-IT führt zu Integrationsproblemen, da sie nicht auf die **bestehende** Infrastruktur abgestimmt ist.

---

### Frage 23: Merkmale von Schatten-IT

Die Schatten-IT bezieht sich auf die **nicht genehmigte** Nutzung von IT-Ressourcen und -Diensten innerhalb einer Organisation. Schatten-IT bezieht sich auf IT-Aktivitäten, die **außerhalb** der offiziellen IT-Infrastruktur einer Organisation stattfinden. Schatten-IT bezieht sich auf **aktuelle**, aber inoffizielle IT-Nutzung, nicht auf veraltete Systeme. Offizielle und genehmigte IT-Lösungen gehören nicht zur Schatten-IT, da diese explizit **genehmigt** und überwacht wird.

---

### Frage 24: Das Microsoft Tier-Modell

Das Tier-Modell von Microsoft bezieht sich nicht auf die Kategorisierung von Hardware, sondern auf die **Strukturierung** von Anwendungsarchitekturen. Das Microsoft Tier-Modell dient dazu, IT-Komponenten in klar definierte **Ebenen** (Tiers) zu unterteilen, um Effizienz, Sicherheit und Skalierbarkeit zu gewährleisten. Das Tier-Modell ist keine Softwareversion, sondern ein Konzept zur **Organisation** von IT-Infrastrukturen. Das Tier-Modell ist ein **proprietäres** Konzept von Microsoft und keine Sammlung von Open-Source-Software.

---

### Frage 25: Schwachstellen- und Patch-Management

Sowohl Schwachstellenmanagement als auch Patch-Management zielen darauf ab, Sicherheitslücken zu identifizieren und zu beheben, um die IT-Sicherheit zu **erhöhen**. Patch-Management bezieht sich speziell auf die Installation und Verwaltung von **Updates**, um bekannte Schwachstellen zu schließen. Beide Prozesse sind für interne als auch externe Sicherheitsanforderungen von Bedeutung, insbesondere im Hinblick auf **Compliance** und gesetzliche Vorgaben. Schwachstellenmanagement umfasst sowohl proaktive als auch **reaktive** Maßnahmen.

---

### Frage 26: Tier Modell & Compliance Toolkit

Das Tier Modell und das Toolkit sind **unterschiedliche** Konzepte mit eigenen Anwendungsbereichen. Beide **ergänzen** sich bei der Sicherheitsorganisation in Microsoft-Umgebungen. Das Tier-Modell ist ein Framework, während das Toolkit **Werkzeuge** und Vorlagen bereitstellt. Das Toolkit ist ein eigenständiges Werkzeug, das **Sicherheitsrichtlinien** speziell für Compliance bereitstellt. Es arbeitet unterstützend mit dem Tier-Modell.

---

### Frage 27: Microsoft Security Compliance Toolkit Details

Ein Werkzeug zur Anwendung **vordefinierter** Sicherheitsrichtlinien in Microsoft-Produkten. Das Toolkit enthält Vorlagen und **Richtlinien**, die speziell für Microsoft-Produkte entwickelt wurden, um **Sicherheitskonformität** sicherzustellen. Das Microsoft Security Compliance Toolkit hilft dabei, Sicherheitskonfigurationen zu überprüfen und zu **optimieren**.

---

### Frage 28: Patch-Management Ziele

Patch-Management ist ein **Teilaspekt** der IT-Sicherheit und ersetzt andere Maßnahmen nicht. Es geht um die **Vermeidung** von Betriebsunterbrechungen durch stabile Systeme. Regelmäßige Updates **verhindern** Systemausfälle. Updates erfordern sorgfältige Planung und Tests. Es zielt **primär** auf Sicherheit ab, nicht auf Funktionserweiterungen.

---

### Frage 29: Penetrationstests Fokus

Identifizierung von Sicherheitslücken in IT-Systemen. Penetrationstests sollen Schwachstellen aufdecken, bevor sie **ausgenutzt** werden können. Penetrationstests identifizieren Lücken, lösen sie jedoch **nicht** automatisch. Penetrationstests konzentrieren sich auf alle Aspekte der IT-Sicherheit, technisch und **physisch**. Viele Penetration Tests sind notwendig, um **regulatorische** Anforderungen zu erfüllen.

---

### Frage 30: Ethical Hacking vs. Illegal

**Ethical Hacking** benachrichtigt einen Eigentümer zu Schwachstellen, während **illegales Hacking** böswillige Absichten verfolgt. Ethical Hacking kann sowohl von staatlichen Behörden als auch von privaten Organisationen durchgeführt werden. Beide Arten nutzen oft ähnliche Tools; der Unterschied liegt in der Absicht und Genehmigung. Ethical Hacking zielt darauf ab, Sicherheitslücken aufzudecken und die IT-Sicherheit zu **verbessern**.

---

### Frage 31: Phasen des Penetration Testings

Berichterstattung ist die letzte Phase des Penetration Testings (**Richtig**). Scanning ist eine wichtige Phase, in der Ziele identifiziert werden (**Richtig**). Die aktive Durchführung von "Angriffen" ist Teil der Phase **"Erwerb"** (**Richtig**). Planung ist die erste Phase des Penetration Testings (**Richtig**). Ausnutzen von Schwachstellen oder Durchführung von Angriffen als isolierte Begriffe sind **keine** Phasenbezeichnungen.

---

### Frage 32: Schatten-IT Risikobewertung

Die Erkennung von Schatten-IT hilft, potenziellen **Datenverlust** frühzeitig zu identifizieren (**Richtig**). Schatten-IT kann zu Sicherheitslücken führen (**Richtig**). Schatten-IT bezeichnet die Nutzung ohne **Zustimmung** der IT-Abteilung (**Richtig**). Schatten-IT verhindert eine vereinfachte, **zentrale Verwaltung** (**Richtig**). Mitarbeiter setzen Schatten-IT oft aus **Unwissenheit** ein (**Richtig**). Schatten-IT ist durch Richtlinien ausdrücklich untersagt (**Richtig**).

---

### Frage 33: Bedeutung des Schwachstellenmanagements

Schwachstellenmanagement unterstützt Unternehmen dabei, **Compliance-Vorgaben** wie DSGVO oder ISO 27001 einzuhalten (**Richtig**). Um das **Eindringen von bösartigen Akteuren** zu verhindern (**Richtig**). Schwachstellenmanagement kann die Sicherheit erhöhen, aber die Hauptaufgabe ist **nicht** die Verbesserung der Systemleistung (**Richtig**).

---

### Frage 34: Testing im Softwarelebenszyklus

Testing ist eine **kontinuierliche Aktivität**, die von der Anforderungsanalyse bis zur Wartung durchgeführt wird (**Richtig**). Testing erfolgt in verschiedenen Phasen, einschließlich **Design, Implementierung, Integration** (**Richtig**). Testing ist ein wesentlicher Bestandteil, um die **Qualität und Funktionalität** sicherzustellen (**Richtig**).

---

### Frage 35: Ethical Hacking Szenarien

Beispiele für entdeckbare Schwachstellen: Ein Angreifer kann auf sensible Daten zugreifen, weil ein **Passwort zu schwach** ist. Ein **ungesicherter API-Endpunkt** erlaubt Zugriff auf vertrauliche Daten. Hardwaredefekte oder unübersichtliche Oberflächen gehören nicht dazu.

---

### Frage 36: Ebenen im Microsoft Tier Modell

**Domain Controller** und Azure Active Directory gehören zur **Tier-0-Ebene**. **Benutzerarbeitsstationen** und Anwendungen wie Microsoft Teams gehören zur **Tier-2-Ebene**. Datei- und Druckserver gehören zur Tier-1-Ebene.

---

### Frage 37: Vorteile des Tier Modells

**Erhöhte Sicherheit** durch Segmentierung der IT-Infrastruktur in klare Ebenen (**Richtig**). **Klare Definition von Verantwortlichkeiten** innerhalb der IT-Abteilung (**Richtig**). Es schafft nicht die MFA ab und garantiert keine automatische Compliance.

---

### Frage 38: Risiken von Schatten-IT minimieren

**Bereitstellung von IT-Tools**, die den Bedürfnissen der Mitarbeiter entsprechen (**Richtig**). **Offene Kommunikation** zwischen IT-Abteilung und Mitarbeitern über Sicherheitsrisiken (**Richtig**). Ein totales Verbot oder Ignorieren sind keine wirksamen Maßnahmen.

---

### Frage 39: Best Practices Schwachstellenanalyse

**Regelmäßige Durchführung** von Sicherheitsscans und Audits (**Richtig**). Einsatz einer Kombination aus **statischen und dynamischen** Analysewerkzeugen (**Richtig**). Fokus auf Schwachstellen mit geringer Priorität oder rein interne Prüfungen sind keine Best Practices.

---

### Frage 40: Analyse vs. Behebung

Wird die folgende Methode zur Schwachstellenanalyse eingesetzt? **Schwachstellenpatching**. Die Antwort ist **Falsch**, da Patching zur **Behebung** von Sicherheitslücken gehört, nicht zur Analyse.
