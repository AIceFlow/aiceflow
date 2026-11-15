# Protokoll

Ein Stück aus AIceFlow Trace: wann, wer, was, mit welchem Ergebnis. Das wichtigste Bild der Marke.

Aufbau: eine Liste `af-trace` auf `surface`, optional mit Kopfzeile `af-trace__head` (Prozess links, Datum rechts). Je Zeile:

- **Zeit** (`af-trace__time`): `09:14:02`.
- **Akteur** (`af-trace__actor`): ein Agent, das Gateway oder ein Mensch, `M. Berger`.
- **Text** (`af-trace__text`): ein ganzer Satz mit Punkt, wie ihn eine Geschäftsführerin lesen würde.
- **Status**: genau eine Status-Marke.

Regeln:

- Drei bis fünf Zeilen, zeitlich geordnet. Mindestens eine angehalten.
- Angehaltene Zeilen bekommen `af-trace__row--held`, verweigerte `af-trace__row--denied`. Alle anderen bleiben ohne Hinterlegung.
- Beträge mit Tausenderpunkt und Komma: `12.480,00 €`. Beispiele erfunden und glaubhaft.

```html
<ol class="af-trace">
  <li class="af-trace__row af-trace__row--held">
    <time class="af-trace__time">09:14:03</time>
    <span><span class="af-trace__actor">Gateway</span><span class="af-trace__text">Betrag über 10.000 €. Die Buchhaltung muss freigeben.</span></span>
    <span class="af-status af-status--held"><i class="af-status__mark"></i>Angehalten</span>
  </li>
</ol>
```
