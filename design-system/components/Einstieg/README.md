# Einstieg

Der Kopf jeder Website-Seite: dunkel, mit der großen Aussage und einem Stück Protokoll, das in den hellen Teil ragt.

Aufbau (`af-hero af-on-ink`):

- **Navigation** (`af-hero__nav`): Logo in der `-dark`-Fassung links, Links in der Mitte, sekundärer Button „Gespräch buchen“ rechts.
- **Text** (`af-hero__text`): Abschnittsmarke, Überschrift `af-hero__title` (Gloock `display-xl`, höchstens drei Zeilen), Einleitung `af-hero__lead`, zwei Buttons.
- **Protokoll** rechts: drei bis vier Zeilen. Es ragt `space-32` (128px) über die Unterkante hinaus. Der Inhalt darunter braucht deshalb oben genug Luft, `af-hero` reserviert sie mit `margin-bottom`.

Regeln:

- Einmal pro Seite, immer ganz oben.
- „KI-Agenten“ mit geschütztem Bindestrich setzen (`&#8209;`), damit das Wort nicht bricht.
- Auf dem Telefon steht das Protokoll unter dem Text, die Überschrift wird `display-l`.
- Im dunklen Thema wird der Einstieg hell. Das ist gewollt: Der Wechsel bleibt.
