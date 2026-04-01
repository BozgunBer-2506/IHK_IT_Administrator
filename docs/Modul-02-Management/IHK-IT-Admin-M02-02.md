# M02 Teil 2: IHK IT Administration

---

### Frage 1

**Hinweis:** Diese Frage bezieht sich auf ein interaktives Bild (Jira-Ticket). Im Dokument wird hierauf verzichtet, da die Zuordnung visuell im System erfolgt.

---

### Frage 2

Im einfachen Workflow wird zunächst eine neue Anfrage **[erstellt]**, die dann in das System gelangt.
Anschließend wird die Anfrage einem Agenten **[zugewiesen]**, der die Bearbeitung übernimmt.
Der Agent setzt den Status während der Bearbeitung auf **[In Arbeit]** und dokumentiert seine Schritte.
Nach erfolgreicher Lösung markiert der Agent die Anfrage als **[Erledigt]**.
Zuletzt überprüft ein Supportmitarbeiter die Lösung und schließt den Vorgang durch **[abschließen]**.

---

### Frage 3

Eine häufige Automatisierung ist die automatische Eskalation von **[SLAs]**, wenn SLAs verletzt werden.
Automatische Berichterstellung ermöglicht es, regelmäßige **[Berichte]** an Teams zu versenden.
Wenn wiederkehrende Probleme erkannt werden, kann das System automatisch neue Serviceanfragen **[erstellen]**.
Metriken wie die **[Durchschnittliche Bearbeitungszeit]** werden automatisch berechnet, um die Teamleistung zu überwachen.
Als Beispielaktion lässt sich auch das automatische Versenden einer **[E‑Mail]** an beteiligte Stakeholder konfigurieren.

---

### Frage 4

Um einen einfachen Workflow zu erstellen, öffnet man zunächst das Servicemanagementprojekt und geht zu den **[Vorgängen]** im Einstellungsmenü.
Dort kann man unter Arbeitsabläufe den bestehenden Flow anzeigen und neue **[Schritte]** anlegen.
Beim Bearbeiten von Übergängen können Trigger, **[Bedingungen]** und Folgefunktionen definiert werden.
Ein neu erstellter Schritt lässt sich benennen und mit einem verknüpften **[Status]** versehen.
So kann z. B. ein zusätzlicher Schritt „Eskalation“ ergänzt und entsprechende **[Regeln]** erstellt werden.

---

### Frage 5

Bei Eskalationsworkflows wird ein neu erstelltes Ticket zuerst dem **[Level‑1‑Support]** zugewiesen.
Wenn das Ticket innerhalb von **[2 Werktagen]** nicht bearbeitet wird, erfolgt eine automatische Weiterleitung.
Anschließend springt die Zuständigkeit auf den **[Level‑2‑Support]**, der weitere Untersuchungen durchführt.
Wird die Frist weiterhin überschritten, wird ein **[Manager]** informiert, der eskalierende Maßnahmen veranlassen kann.
Letztlich kann ein Alarm ausgelöst werden, um das **[Management]** über kritische Verzögerungen zu informieren.

---

### Frage 6

Ein Workflow in Jira Service Management beschreibt die definierte Abfolge von **[Schritte]** und Zuständen, die ein Vorgang durchläuft.
Er legt fest, welche **[Übergänge]** zwischen diesen Zuständen möglich sind und unter welchen Bedingungen sie stattfinden.
Zur Steuerung des Flusses werden oft **[Bedingungen]** genutzt, die bestimmen, ob ein Übergang ausgeführt wird.
Automatische Aktionen können durch einen **[Trigger]** ausgelöst werden, z. B. das Erstellen einer Benachrichtigung.
Als Ergebnis enthalten Workflows häufig vordefinierte **[Aktionen]**, die beim Übergang ausgeführt werden (z. B. E-Mails oder Issue-Updates).

---

### Frage 7

Automatisierung in JSM basiert auf Regeln, die aus Triggern, **[Bedingungen]** und Aktionen bestehen.
Ein **[Trigger]** kann beispielsweise das Erstellen eines Vorgangs oder ein zeitbasiertes Ereignis sein.
Mit einer Bedingung lässt sich vorher festlegen, dass nur ein bestimmter **[Vorgangstyp]** die Regel auslösen darf.
Branches erlauben es, die Ausführung in mehrere **[Zweige]** zu verzweigen, z. B. für verschiedene Teams.
Typische Aktionen sind das Aktualisieren von Feldern, das Versenden von E-Mails oder das Erstellen von **[Unteraufgaben]**.

---

### Frage 8

Das Rechtesystem regelt, welche **[Zugriffsrechte]** Benutzer innerhalb der Anwendung haben.
Berechtigungen können sowohl auf **[Benutzerebene]** als auch auf Gruppenebene vergeben werden.
Durch gezielte Vergabe wird sichergestellt, dass nur autorisierte Personen auf **[sensible Informationen]** zugreifen dürfen.
Administratoren können das Rechtesystem konfigurieren und so die **[Granularität]** der Zugriffe anpassen.
In Kombination mit Rollenverwaltung lassen sich zudem **[Eskalationsstufen]** für Eskalationen definieren.

---

### Frage 9

Die Einführung klarer Workflows dient der **[Klarheit]** von Aufgaben, indem sie Reihenfolgen und Zuständigkeiten explizit festlegt.
Gleiche Abläufe sichern die **[Konsistenz]** der Ergebnisse unabhängig vom Bearbeiter.
Durch sichtbare Status und Historien erhöhen Workflows die **[Transparenz]** für interne und externe Stakeholder.
Das automatisierte Ausführen wiederkehrender Schritte fördert die **[Automatisierung]** operativer Prozesse.
Zusätzlich helfen standardisierte Abläufe, menschliche **[Fehler]** zu reduzieren.

---

### Frage 10

Welche dieser Aussagen zum Ticketsystem sind richtig? (2)

- **a. Ein Ticketsystem ist eine Software, in der z.B. Anfragen oder Ereignisse erfasst werden.**
- **c. In einem Ticketsystem werden alle Schritte zur Bearbeitung der Anfragen dokumentiert.**

---

### Frage 11

Welche Vorteile hat ein Ticketsystem? (2)

- **b. Ein Ticketsystem sammelt Daten zu Anfragen und Problemen, die anschließend analysiert werden können**
- **c. Durch Ticketsysteme wird die Zusammenarbeit zwischen den verschiedenen Abteilungen und Teams gefördert**

---

### Frage 12

Welche dieser Aussagen sind richtig? (3)

- **a. Ein Ticketsystem automatisiert viele Prozesse im Kundensupport**
- **c. Im Servicemanagement können Tickets nach verschiedenen Kriterien wie Art des Problems oder Kundenpriorität kategorisiert werden**
- **d. Die Eskalationshierarchie bestimmt, wie schnell und an wen ein Ticket eskaliert wird, wenn es nicht gelöst werden kann.**

---

### Frage 13

Welche dieser Aussagen sind richtig? (2)

- **b. OTRS steht für Open Ticket Request System**
- **c. Jira ist ein webbasiertes Ticketsystem und Projektmanagement-Tool**

---

### Frage 14

Welche dieser Aussagen sind richtig?

- **a. Bei der Auswahl von Ticketsystemen sollten die Funktionen und Kosten verschiedener Systeme verglichen werden**
- **d. Die Produktentwicklung ist u.a. der Prozess der Entstehung eines Produkte**

---

### Frage 15

Welche dieser Aussagen sind zu den Rollen im Ticketsystem sind richtig? (3)

- **b. Agenten sind lizenzierte Benutzer, die Kundenanfragen bearbeiten und Kunden zum Serviceprojekt hinzufügen können**
- **d. Kunden können die Anfragen anderer Kunden genehmigen**
- **e. Kunden können Anfragen stellen und im Portal verfolgen**

---

### Frage 16

Welche dieser Aussagen zu den Komponenten eines Ticketsystems sind richtig? (3)

- **a. Workflows stellen die Arbeitsprozesse innerhalb des Unternehmens dar**
- **d. SLA steht für Service-Level-Agreement**
- **e. Tickets ermöglichen eine effektive Kommunikation zwischen Helpdesk und Kunden/ Benutzer**

---

### Frage 17

Welche dieser Aussagen sind richtig? (2)

- **c. „Die Webseite funktioniert nicht mehr.“ ist ein gutes Beispiel für einen Vorfall (Incident)**
- **e. Tickets dienen als zentrale Aufzeichnung für alle Aktivitäten im Zusammenhang mit einer Anfrage oder einem Problem**

---

### Frage 18

Welche dieser Aussagen sind richtig? (2)

- **a. Die Ticket-Nummer ist eine eindeutige Nummer, die dem Ticket zugewiesen wird**
- **c. Service-Level-Agreements beschreiben die Zeit bis zur Lösung eines Problems**

---

### Frage 19

Welche dieser Aussagen zu Priorität und Urgency sind richtig?

- **c. Die Dringlichkeit ist oft unvorhersehbar**
- **d. Ein Ticketsystem nutzt entweder Prioritäten oder eine Kombination aus Urgency und Impact zur Priorisierung.**
- **e. Die Wichtigkeit stellt den Schweregrad des Problems dar**

---

### Frage 20

Welche dieser Aussagen zu Ticketarten sind richtig? (2)

- **b. Die Art des Tickets wird je nach Zweck unterschiedlich gewählt**
- **e. Ein Änderungsticket dient u.a. der Planung oder Genehmigung von Änderungen an einem IT-Service**

---

### Frage 21

Was versteht man unter dem Begriff 'Konfigurieren'?

- **a. Anpassen**
- **b. Einstellung des Passworts**
- **c. Installation neuer Apps**
- **d. Ändern der Grund- oder Werkeinstellung**

---

### Frage 22

Im IT-Service Management gibt es verschiedene standardisierte Prozesse.
Das **[Service Request Management]** bearbeitet typische Benutzeranfragen wie Passwort-Resets oder Bestellungen.
Bei einer akuten Störung im System greift das **[Incident Management]** ein.
Wenn die Ursache der Störung tiefer liegt oder häufiger auftritt, wird das **[Problem Management]** aktiv.
Geplante Änderungen wie Updates laufen über das **[Change Management]**.
Zur Unterstützung aller Prozesse wird Wissen zentral im **[Knowledge Management]** gepflegt.

---

### Frage 23

Im Ticketsystem bezeichnet der Begriff **[Zuweisung]** den Vorgang, bei dem ein eingehendes Problem einem zuständigen Mitarbeiter oder Team zugeordnet wird.
Der **[SLA]** beschreibt u.a. die festgelegte Reaktionszeit auf ein Ticket. Wenn ein Ticket dringender wird, kann es durch **[Eskalation]** an eine höhere Instanz weitergeleitet werden.
Die **[Priorität]** gibt an, wie wichtig ein Ticket ist, und der **[Status]** zeigt den aktuellen Bearbeitungsstand eines Tickets an.

---

### Frage 24

Die **[Kategorisierung]** bestimmt, welchem Bearbeiter oder Team ein Ticket zur Bearbeitung übergeben wird.
Ein **[SLA]** legt u.a. fest, wie schnell auf ein Ticket reagiert oder es gelöst werden muss.
Die **[Priorität]** beschreibt die Dringlichkeit und Wichtigkeit eines Tickets.
Eine **[Eskalation]** ermöglicht das automatische Weiterleiten eines Tickets, wenn es nicht rechtzeitig bearbeitet wird.
Der **[Status]** gibt an, in welchem Bearbeitungsstadium sich ein Ticket befindet (z. B. offen, in Bearbeitung, gelöst).
Eine **[IP‑Adresse]** identifiziert Geräte im Netzwerk, nicht Tickets.
Ein **[Browsercache]** speichert temporäre Internetdaten, nicht Ticketinformationen.
**[Druckertreiber]** ermöglichen das Drucken, stehen aber nicht im Zusammenhang mit der Ticketverarbeitung.

---

### Frage 25

Ticketsysteme können auf verschiedene Arten gehostet werden. Wird das System auf unternehmenseigenen Servern betrieben, so spricht man von **[On‑Premise]**-Hosting.
Beim **[Cloud]**-Hosting wird das System dagegen von einem externen Anbieter im Internet bereitgestellt.
Eine Mischform davon nennt man **[Hybrid]**-Hosting. Systeme, die über das Internet als Service bereitgestellt werden, bezeichnet man auch als **[SaaS]**.
Einige Ticketsysteme sind zudem **[Open Source]**-Software, bei denen der Quellcode offenliegt.

---

### Frage 26

Das **[Incident Management]** ist zuständig für die schnelle Wiederherstellung des IT-Dienstes bei Störungen.
**[Change Management]** dient dazu, Änderungen kontrolliert und risikominimiert umzusetzen.
**[Problem Management]** verfolgt das Ziel, die Ursachen wiederkehrender Störungen dauerhaft zu beheben.
Mit **[Service Request Management]** werden standardisierte Anfragen von Anwendern effizient bearbeitet.
Durch **[Knowledge Management]** wird sichergestellt, dass relevantes Wissen dokumentiert und zugänglich bleibt.
Begriffe wie **[User Happiness Control]**, **[Digital Flow Optimization]** und **[Service Mood Management]** sind nicht als etablierte Prozesse bekannt.

---

### Frage 27

- Wir finden heraus, was der Kunde braucht. → **Wissen, was der Leistungsbezieher braucht und erwartet.**
- Wir prüfen, ob die Leistungen gut waren. → **Messen und Auswerten der erbrachten Dienstleistung.**
- Wir setzen passende Werkzeuge und Abläufe ein. → **Etablieren der nötigen IT-Prozesse & Tools inkl. Automatisation.**
- Wir verbessern unsere Services weiter. → **Optimieren der vereinbarten Dienstleistung.**
- Wir bieten ähnliche Leistungen auf eine einheitliche Weise an. → **Standardisierung des IT-Dienstleistungsangebots.**

---

### Frage 28

Welche Definition gibt die ISO 20000 für eine Dienstleistung an?

- **c. Ein Mittel zur Erbringung von Mehrwert für den Kunden, indem es angestrebte Ergebnisse erleichtert und der Kunde bestimmte Kosten und Risiken nicht selbst tragen muss.**

---

### Frage 29

Was sind die beiden Hauptdimensionen des Eisenhower-Prinzips, die die Reaktionszeit im Service beeinflussen?

- **a. Wichtigkeit und Dringlichkeit**

---

### Frage 30

Welche Elemente sind Bestandteile eines IT-Services zur Optimierung der IT-Infrastruktur und -Prozesse?

- **a. Hardwarekomponente**
- **b. Softwarekomponente**
- **c. IT-Dienstleistung**

---

### Frage 31

Was sind einige Funktionen von Jira?

- **a. Aufgabenverwaltung**
- **b. Fehlerverfolgung**
- **c. Projektmanagement**

---

### Frage 32

Was umfasst das Service-Management allgemein?

- **a. Planung, Design, Transition, Betrieb und kontinuierliche Verbesserung von Services**

---

### Frage 33

Welche Aspekte müssen bei der Einführung eines Ticketsystems beachtet werden?

- **a. Technische Herausforderungen**
- **b. Schulungsbedarf**
- **c. Skalierbarkeit**
- **d. Kundenkommunikation**

---

### Frage 34

Funktionale Anforderungen definieren die notwendigen Funktionen einer Anwendung oder Lösung, während nicht-funktionale Anforderungen Leistungs- oder Qualitätsanforderungen darstellen.

- **Wahr**

---

### Frage 35

Ein Ticketsystem dient dazu, IT-Anfragen, Störungen und Aufgaben systematisch zu erfassen, zu verfolgen und zu dokumentieren.

- **Wahr**

---

### Frage 36

Ein Ticketsystem dient dazu, Kunden- und Mitarbeiteranfragen abzuwickeln.

- **Wahr**

---

### Frage 37

Ticketsysteme können entweder im Cloud Data Center oder lokal gehostet werden.

- **Wahr**

---

### Frage 38

Ein Use Case ist ein Beispiel aus der Praxis.

- **Wahr**

---

### Frage 39

Services beziehen sich auf die Bereitstellung einer Leistung, die einem Kunden einen Mehrwert bietet.

- **Wahr**

---

### Frage 40

Die Bereitstellung von zusätzlichen Services kann den Wert der Produkte für Kunden erhöhen und langfristige Beziehungen zwischen Unternehmen und Kunden aufbauen.

- **Wahr**
