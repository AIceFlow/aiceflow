# Einbinden in die Website

1. Diesen Ordner `design-system/` in das Website-Repository kopieren, am besten ins Hauptverzeichnis.
2. Die `CLAUDE.md` aus dem Paket in die `CLAUDE.md` des Repositorys übernehmen (anhängen, falls es schon eine gibt).
3. Im globalen Stylesheet der Website einbinden, in dieser Reihenfolge:

```css
@import "../design-system/tokens.css";
@import "../design-system/tailwind.css";    /* nur mit Tailwind v4 */
@import "../design-system/components.css";
```

   Bei Next.js liegt das globale Stylesheet meist unter `app/globals.css`. Den Pfad passend anpassen. Die Schriften lädt `tokens.css` relativ aus `design-system/fonts/`. Falls der Bundler das nicht auflöst, den Ordner `fonts/` nach `public/fonts/` kopieren und die `url(...)` in `tokens.css` auf `/fonts/...` ändern.

4. Die Logo-Dateien aus dem Design System (Assets, Gruppe Logos) nach `public/logos/` legen. Die Vorschauen erwarten `/logos/aiceflow-horizontal.svg` und `/logos/aiceflow-horizontal-dark.svg`.

Die Vorschauen unter `components/*/preview.html` sind Vorbilder für Aufbau und Klassen, keine fertigen Seiten.
