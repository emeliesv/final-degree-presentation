const Result = () => {
  return (
    <section className="py-5 px-8 bg-white flex flex-col items-center gap-3">
      <h2 className="text-brand font-display text-3xl">Utvecklade hypoteser</h2>
      <p>
        Baserat på våra intervjuer formulerade vi initiala hypoteser som sedan
        testades och reviderades under workshoparna. Denna iterativa process
        gjorde att vi kunde förfina våra antaganden och säkerställa att de
        speglade organisationens verkliga behov och utmaningar.
      </p>

      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6">
        <div className="bg-neutral border-2 border-brand p-3 flex flex-col gap-2 max-w-80 rounded-lg">
          <h3 className="text-brand text-xl">Ägandeskap i teamen</h3>
          <h4 className="font-medium">Ursprunglig hypotes</h4>
          <p className="italic text-sm">
            "Om varje team har en tydlig tillgänglighetsansvarig med mandat,
            stöd i form av nätverk och avsatt tid, ökar det proaktiva arbetet
            med tillgänglighet och minskar beroendet av enskilda eldsjälar."
          </p>
          <h4 className=" font-medium">Reviderad hypotes</h4>
          <p className="italic text-sm">
            "Om det finns ett centralt supportteam med tillgänglighetsexpertis
            etableras och kan stödja team i hela processen, ökar det proaktiva
            arbetet med och förståelsen för tillgänglighet samt minskar
            beroendet av enskilda eldsjälar."
          </p>
        </div>

        <div className="bg-neutral border-2 border-brand p-3 flex flex-col gap-2 max-w-80 rounded-lg">
          <h3 className="text-brand text-xl">Tydliga rollförväntningar</h3>
          <h4 className="font-medium">Ursprunglig hypotes</h4>
          <p className="italic text-sm">
            "Om varje roll har en tydlig och uttalad beskrivning av sitt ansvar
            för tillgänglighet, förbättras kommunikationen i teamet och
            tillgänglighet integreras mer konsekvent genom hela processen."
          </p>
          <h4 className="font-medium">Reviderad hypotes</h4>
          <p className="italic text-sm">
            "Om varje roll har en tydlig och uttalad beskrivning av sitt ansvar
            för tillgänglighet, rollspecifikt stödmaterial, onboarding och
            uppföljning så förbättras kommunikationen i teamet och
            tillgänglighet integreras mer konsekvent genom hela processen."
          </p>
        </div>

        <div className="bg-neutral border-2 border-brand p-3 flex flex-col gap-2 max-w-80 rounded-lg">
          <h3 className="text-brand text-xl">Process och planering</h3>
          <h4 className="font-medium">Ursprunglig hypotes</h4>
          <p className="italic text-sm">
            "Om tillgänglighet integreras som ett tydligt krav i roadmap och
            produktionsmål, med koppling till affärsvärde och riskminimering,
            prioriteras det mer konsekvent i utvecklingsbeslut."
          </p>
          <h4 className="font-medium">Reviderad hypotes</h4>
          <p className="italic text-sm">
            "Om tillgänglighet integreras som ett tydligt krav i roadmap och
            produktionsmål, med koppling till affärsvärde och riskminimering,
            prioriteras det mer konsekvent i utvecklingsbeslut. Riktlinjer och
            verktyg på organisationsnivå möjliggör detta i praktiken."
          </p>
        </div>

        <div className="bg-neutral border-2 border-brand p-3 flex flex-col gap-2 max-w-80 rounded-lg">
          <h3 className="text-brand text-xl">Kompetensutveckling</h3>
          <h4 className="font-medium">Ursprunglig hypotes</h4>
          <p className="italic text-sm">
            "Om alla teammedlemmar genomgår återkommande utbildning i
            tillgänglighet, ökar både den grundläggande kunskapen och förmågan
            att ta ansvar tidigt i processen – vilket minskar fel och sena
            åtgärder."
          </p>
          <h4 className="font-medium">Reviderad hypotes</h4>
          <p className="italic text-sm">
            "Om alla teammedlemmar genomgår rollanpassad återkommande utbildning
            i tillgänglighet ökar den grundläggande kunskapen och
            ansvarstagandet tidigt i processen vilket i sin tur höjer kvaliteten
            på arbetet och beslutsfattande."
          </p>
        </div>

        <div className="bg-neutral border-2 border-brand p-3 flex flex-col gap-2 max-w-80 rounded-lg">
          <h3 className="text-brand text-xl">Användarinvolvering</h3>

          <h4 className=" font-medium">Ny hypotes</h4>
          <p className="italic text-sm">
            "Om teamen involverar användare med funktionsnedsättningar i test
            och feedback under produktutveckling förbättras förståelsen och
            lösningarnas relevans vilket i sin tur förbättrar det långsiktiga
            tillgänglighetsarbetet."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Result;
