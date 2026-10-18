import Landing from "@/components/landing/Landing";
import SiteFooter from "@/components/landing/SiteFooter";

/*
 * Startseite rund um das AIceFlow Governance Gateway (Gateway als Produkt, Agents als Leistung).
 * Die früheren Abschnitte (Hero, About, Services …) liegen weiter in src/components, sind aber
 * nicht mehr eingebunden.
 */
const Index = () => (
  <>
    <Landing />
    <SiteFooter />
  </>
);

export default Index;
