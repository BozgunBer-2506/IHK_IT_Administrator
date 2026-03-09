# 6-Kaffo-Mikulovic
Abschlussprojekt - Movie Bewertung

Zweck des Programms: 
Dieses Projekt ist eine auf REST-API, basierte FastAPI, zur Verwaltung und Bewertung von Filmen.

Sie bietet vollständige CRUD-Funktionen, eine Bewertungslogik sowie Statistik-Endpunkte und speichert alle Daten in einer SQLite-Datenbank.

Die Anwendung kann lokal und über einer AWS EC2 Instanz deplyoed werden.

Lokaler Start über bash:
1. Virtuelle Umgebung erstellen und aktivieren
    python -m venv env
    env\Scripts\activate

2. Abhängikeit instalieren:
    pip install -r requirements.txt

3. Server starten:
    uvicorn main:app --reload

4. API aufrufen:
    http://127.0.0.1:8000
    Swagger UI: http://127.0.0.1:8000/docs
Es wurde lokal mit automatisierten Tests geprüft.
Tests befinden sich in der test_api.py
Test ausführung über pytest

Endpunkte:
GET     /filme
GET     /filme/action
GET     /filme/comedy
GET     /filme/{id}
POST    /filme
POST    /filme/{id})/bewerten
DELETE  /filme/{id}
GET     /statistik


Externe Links:

Kanban Board: https://trello.com/b/1WCSmYn4/abschlussarbeit-noteapi
