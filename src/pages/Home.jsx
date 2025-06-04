import Hero from "../components/Hero";
import DoubleDiamond from "../components/DoubleDiamond";
import Result from "../components/Result";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="py-5 px-8 bg-white lg:px-20">
        <h2 className="text-brand text-2xl font-medium">Abstract</h2>
        <p className=" mb-6">
          Detta forskningsprojekt undersökte kommunikation, kunskapsluckor,
          ägandeskap och de praktiska arbetssätten med tillgänglighet i olika
          team på If - ett av Nordens största försäkringsbolag. Syftet var att
          identifiera problem och förbättringsområden i det pågående
          tillgänglighetsarbetet.
        </p>
        <p className=" mb-6">
          Med hjälp av Double Diamond-processen samlades data in genom både
          intervjuer och tvärfunktionella workshops. Målet var att utforska hur
          tillgänglighetsarbete bedrevs både på organisationsnivå och inom
          enskilda team. Projektet definierade problemområden och utforskade
          lösningar som kunde ligga till grund för beslutsfattande och
          rekommendationer om det kontinuerliga långsiktiga arbetet.
        </p>
        <p className="">
          Det framkom att det kontinuerliga tillgänglighetsarbetet i stora
          organisationer ofta mötte liknande utmaningar. Även om verktyg och
          beskrivningar kunde lösa en del av dessa utmaningar, krävde ett
          framgångsrikt integrerat tillgänglighetsarbete och främjande av
          ägandeskap i hela organisationen resursallokering från ledningsnivå.
          Ett möjligt tillvägagångssätt var att etablera en kedja av betrodda
          individer med tillräckliga resurser för att fungera som en
          strukturerad men flexibel länk mellan expertis och utförande.
        </p>
      </section>

      <DoubleDiamond />

      <Result />
    </>
  );
};

export default Home;
