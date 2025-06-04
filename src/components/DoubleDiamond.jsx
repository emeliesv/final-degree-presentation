import ExpandableSection from "./ExpandableSection";
import { Search, NotebookPenIcon, HandHeart, Lightbulb } from "lucide-react";

const DoubleDiamond = () => {
  return (
    <section className="flex flex-col items-center gap-5 bg-brand py-10 px-5">
      <h2 className="font-display text-3xl text-neutral-light">
        Double Diamond processen
      </h2>
      <ExpandableSection
        title="Discover"
        subTitle="Utforska och samla insikter"
        icon={<Search />}
      >
        <div>
          <h4 className="font-semibold mb-3">Semistrukturerade intervjuer</h4>
          <p className=" mb-4">
            Vi genomförde sex djupgående intervjuer med noga utvalda personer
            från olika roller:
          </p>
          <ul className="list-disc list-inside  space-y-2 mb-6">
            <li>Accessibility Specialist - expertis och strategisk insyn</li>
            <li>Quality Assurance Engineer - kvalitetssäkring och testning</li>
            <li>UX leads och strateger - användarupplevelse och strategi</li>
            <li>Systemutvecklare - teknisk implementering</li>
            <li>Content & SEO Manager - innehållsstrategi</li>
          </ul>

          <h4 className="font-semibold mb-3">Workshop 1: Kartläggning</h4>
          <p className=" mb-4">
            15 deltagare från olika roller kartlade sina upplevelser genom att
            fylla i en tidslinje över produktionskedjan. Gruppdiskussioner
            identifierade utmaningar i samverkan och kommunikation.
          </p>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="Define"
        subTitle="Definiera problemområden"
        icon={<NotebookPenIcon />}
      >
        <div>
          <h4 className="font-semibold mb-3">Identifierade problemområden</h4>
          <p className=" mb-4">
            Följande problemområden identifierades och förstärktes genom
            intervjuer och vår första workshop:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-accent rounded-lg">
              <h5 className="font-semibold text-brand mb-2">Ägandeskap</h5>
              <p className=" text-sm">
                Otydligt och fragmenterat ägarskap för tillgänglighetsarbetet
              </p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <h5 className="font-semibold  mb-2">Kunskapsglapp</h5>
              <p className=" text-sm">
                Ojämn kunskapsfördelning och brist på praktisk kompetens
              </p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <h5 className="font-semibold text-brand mb-2">
                Oklara rollbeskrivningar
              </h5>
              <p className="text-accent-dark text-sm">
                Bristande förväntningar på olika roller
              </p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <h5 className="font-semibold text-brand mb-2">
                Integrerade arbetsprocesser
              </h5>
              <p className=" text-sm">
                Brist på gemensamma processer och prioritering
              </p>
            </div>
          </div>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="Develop"
        subTitle="Utveckla lösningar"
        icon={<Lightbulb />}
      >
        <div className="flex flex-col gap-6">
          <h4 className="font-semibold">Workshop 2: Lösningsgenering</h4>
          <p className="">
            Deltagarna arbetade i grupper för att generera idéer baserade på de
            identifierade problemområdena. Genom "Solution Cards"
            konkretiserades de mest lovande lösningsförslagen.
          </p>
          <h4 className="font-semibold">Reviderade hypoteser</h4>
          <div className="p-4 bg-neutral">
            <h5 className="font-semibold text-brand mb-2">
              Centralt supportteam
            </h5>
            <p className="">
              Ett centralt expertteam med tillgänglighetsexpertis som kan stödja
              team genom hela processen
            </p>
          </div>
          <div className="p-4 bg-neutral">
            <h5 className="font-semibold text-brand mb-2">
              Rollspecifikt stöd
            </h5>
            <p className="">
              Tydliga rollbeskrivningar med rollspecifikt stödmaterial och
              onboarding
            </p>
          </div>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="Deliver"
        subTitle="Leverera rekommendationer"
        icon={<HandHeart />}
      >
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Prioriterade lösningar</h4>
          <div className="p-6 bg-brand text-neutral rounded-lg">
            <h5 className="font-semibold text-lg">
              Störst effekt: Användarinvolvering
            </h5>
            <p>
              Involvera användare med funktionsnedsättningar i test och feedback
              under produktutveckling för att förbättra förståelsen och
              lösningarnas relevans.
            </p>
          </div>

          <div className="p-6 bg-brand text-neutral rounded-lg">
            <h5 className="font-semibold text-lg">
              Mest potential: Obligatorisk utbildning
            </h5>
            <p>
              Rollspecifik, återkommande Workday-utbildning för att minska
              kunskapsluckor och öka medvetenhet om tillgänglighet.
            </p>
          </div>

          <h4 className="font-semibold">Slutsats</h4>
          <p className="">
            För ett hållbart tillgänglighetsarbete krävs resursallokering från
            ledningsnivå och en kedja av kontaktpersoner som kan fungera som
            länk mellan expertis och utförande.
          </p>
        </div>
      </ExpandableSection>
    </section>
  );
};

export default DoubleDiamond;
