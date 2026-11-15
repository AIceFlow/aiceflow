# Button

Löst die eine Handlung aus, für die eine Ansicht da ist, meist „Gespräch buchen“.

- **Primär** (`af-btn`): Fläche in `ink`, Schrift in `on-ink`. Höchstens einer pro Ansicht.
- **Sekundär** (`af-btn af-btn--secondary`): Rahmen in `ink`, für die zweite Handlung daneben.
- **Still** (`af-btn af-btn--quiet`): unterstrichener Link in `blue-strong`, für Verweise in Spalten und Text.
- Auf `ink`-Flächen setzt der umgebende Bereich `af-on-ink`. Dann kehren sich die Buttons um: hell gefüllt, dunkle Schrift.
- Kein Button ist blau gefüllt.

Mitzugeben: Beschriftung und Ziel. `<a href>` für Navigation, `<button>` für Aktionen.

Beschriftung: Verb und Gegenstand, zwei bis drei Wörter, ohne Satzzeichen. Kein „Jetzt“, kein „Kostenlos“, keine Pfeile. Nicht: Pillenform, Schatten, Verlauf, Icon vor der Beschriftung.

```html
<a class="af-btn" href="/termin">Gespräch buchen</a>
<a class="af-btn af-btn--secondary" href="/film">Film ansehen</a>
```
