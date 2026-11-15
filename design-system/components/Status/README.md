# Status

Sagt in einem Wort, was das Gateway mit einer Aktion gemacht hat.

Genau vier Zustände, jeder mit Form und Wort, damit er auch ohne Farbe lesbar bleibt:

| Zustand | Klasse | Fläche | Form | Bedeutung |
|---|---|---|---|---|
| Durchgelassen | `af-status` | `surface` | Punkt | Die Aktion war erlaubt und lief durch. |
| Angehalten | `af-status af-status--held` | `signal` | Quadrat | Ein Mensch muss entscheiden. |
| Freigegeben | `af-status af-status--approved` | `surface`, Rahmen `ink` | Haken in `blue` | Ein Mensch hat zugestimmt. |
| Verweigert | `af-status af-status--denied` | `stop` | Kreuz | Die Aktion war nicht erlaubt. |

- Wörter nicht ändern, keine weiteren Zustände erfinden.
- Freigegeben ist keine farbige Fläche. Der blaue Haken ist der Akzent.
- `signal` und `stop` kommen außerhalb dieser Marken und ihrer Protokollzeilen nicht vor.

```html
<span class="af-status af-status--held"><i class="af-status__mark"></i>Angehalten</span>
```
