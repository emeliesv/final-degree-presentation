import Card from "../components/Card";

const Metod = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-white text-center gap-5 text-neutral-dark py-10 px-5 lg:px-20">
      <h1 className="font-display text-brand text-6xl">Workshops</h1>
      <p className="text-left">
        Genom att inkludera medarbetare från olika roller och team i
        workshoparna skapade vi en användarcentrerad process där deltagarna
        själva fick identifiera utmaningar och utveckla lösningar. Detta ökade
        inte bara ägandeskapet för resultatet utan säkerställde också att
        lösningarna var förankrade i verkliga behov och praktiska
        förutsättningar.
      </p>

      <h2 className="text-brandtext-2xl font-medium">
        Workshop 1 - Discover & Define
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Card
          imgUrl="/Images/timeline.png"
          altText="Tidslinje från workshop ett där deltagarna fick placera post it's för att visualisera deras arbete med tillgänglighet under en produktionskedja."
        >
          Tidslinje som användes under vår första workshop
        </Card>

        <Card
          imgUrl="/Images/ws1analysis.png"
          altText="Deltagarnas identifierade problemområden under första workshopen"
        >
          Deltagarnas identifierade problemområden under första workshopen
        </Card>
      </div>

      <h2 className="text-brand text-2xl font-medium">
        Workshop 2 - Develop & Deliver
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Card
          imgUrl="/Images/recapws1.png"
          altText="Workshop 2 inleddes med en återblick till de identifierade problemområdena: Ägandeskap, kunskapsluckor, bristande arbetsprocess och oklara rollbeskrivningar inom tillgänglighet"
        >
          Den andra workshopen inleddes med en återblick till de identifierade
          problemområdena från föregående workshop
        </Card>

        <Card
          imgUrl="/Images/ws2solutions.png"
          altText="Deltagarnas lösningsförslag skapades i mallar som vi döpte 'Solution Cards'"
        >
          Deltagarna konkretiserade sina lösningsförslag i våra "Solution Cards"
        </Card>
      </div>
      <h2 className="text-brand text-2xl font-medium">
        Översikt av workshopflöden
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Card
          imgUrl="/Images/ws1overview.png"
          altText="En översikt över hela första workshopsflödet"
        >
          Första workshopens struktur utgick från att identifiera utmaningar och
          förbättringsområden genom gruppdiskussioner och visualisering
        </Card>

        <Card
          imgUrl="/Images/ws2overview.png"
          altText="En översikt över hela andra workshopsflödet"
        >
          Den andra workshopen var tydligt lösningsorienterad med kollaborativ
          idégenerering och konkretisering
        </Card>
      </div>
    </section>
  );
};

export default Metod;
