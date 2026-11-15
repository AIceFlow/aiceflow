# Schichtbild

Das eine Schaubild von AIceFlow: oben Agents, in der Mitte das Gateway, unten die Systeme.

Aufbau:

- **Agents** oben: Rechtecke in `surface` mit Rahmen in `ink`, beschriftet in Martian Mono.
- **Gateway** in der Mitte: Fläche in `ink` über die ganze Breite, Name in Gloock links, darunter „Regeln · Freigaben · Trace“ in Martian Mono.
- **Prüfkante**: 4px `blue` direkt über dem Gateway (`af-layers__edge`). Die einzige blaue Stelle im Bild.
- **Systeme** unten: Rechtecke in `well`.
- **Flusslinien**: gerade, 45 Grad, runde Enden, in `ink`, im Gateway in `on-ink`. Sie kreuzen nie den Namen des Gateways.
- **Angehalten**: Die Linie endet an der Prüfkante, dort sitzt die Marke in `signal`.

Mitzugeben: Namen der Agents und Systeme (je zwei bis vier), welche Aktion angehalten ist (höchstens eine).
