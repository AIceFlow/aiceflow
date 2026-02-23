"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Mail, Phone } from "lucide-react";
import React from "react";

// Props allow external control and custom trigger
export default function ImpressumModal({
  open,
  onOpenChange,
  children, // any custom trigger (e.g., <a>Impressum</a>)
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children?: React.ReactNode;
}) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {children ?? <Button variant="outline">{t("footer.policies.imprint")}</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("footer.policies.imprint")}</DialogTitle>
          <DialogDescription>
            Angaben gemäß § 5 TMG <br />
            Verantwortlich für diese Website sind:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h3 className="font-semibold text-base mb-2">AIceFlow GmbH</h3>
            <div>
              Nussdorfer Strasse 9
              <br />
              88662 Ueberlingen
              <br />
              Deutschland
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>
                  <span className="font-medium">Felix Funke:</span>{" "}
                  <a href="tel:017663364095" className="underline">
                    0176 63364095
                  </a>
                </span>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>
                  <span className="font-medium">Felix Funke:</span>{" "}
                  <a
                    href="mailto:felixfunke456@gmail.com"
                    className="underline"
                  >
                    felixfunke456@gmail.com
                  </a>
                </span>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>
                  <span className="font-medium">Dr. Heiner Di Camillo:</span>{" "}
                  <a
                    href="mailto:heiner.dicamillo@aiceflow.de"
                    className="underline"
                  >
                    heiner.dicamillo@aiceflow.de
                  </a>
                </span>
              </span>

            </div>
            <p className="mt-2">
              Vertreten durch die Geschäftsführer: Felix Funke und Dr. Heiner
              Di Camillo
            </p>
            <p className="mt-2">
              Handelsregistereintrag: Amtsgericht Freiburg, HRB 734207
              <br />
              USt-IdNr.: DE459248582
            </p>
          </section>

          <div className="border-b border-muted" />

          <section>
            <h3 className="font-semibold text-base mb-2">
              Verantwortliche Ansprechpartner
            </h3>
            <p>
              Für inhaltliche Rückfragen stehen Ihnen die Geschäftsführer Felix
              Funke und Dr. Heiner Di Camillo zur Verfügung.
            </p>
          </section>

          <div className="border-b border-muted" />

          {/* EU-Streitschlichtung */}
          <section>
            <h4 className="font-semibold">EU-Streitschlichtung</h4>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                className="underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h4 className="font-semibold">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h4>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h4 className="font-semibold">Hinweis</h4>
            <p>
              Felix Funke und Dr. Heiner Di Camillo sind gemeinsam
              verantwortlich für die Inhalte dieser Website.
            </p>
          </section>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">{t("common.close")}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
