const Footer = () => {
  return (
    <footer className="bg-brand text-neutral-light flex flex-col md:flex-row items-center justify-between py-12 px-2 md:px-5 gap-4">
      <div>
        <h3 className="font-display text-2xl">Examensarbete</h3>
        <p>Genomfört i samarbete med If försäkringsbolag</p>
        <p>En studie om digital tillgänglighet i tvärfunktionella team</p>
      </div>
      <img
        src="/Images/LogoInverted.webp"
        alt="Emelie Svensson rounded logo"
        className="w-40 md:w-32"
        width="160"
        height="128"
        loading="lazy"
      />
    </footer>
  );
};

export default Footer;
