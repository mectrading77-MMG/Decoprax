import Link from 'next/link';
import {ArrowLeft,ArrowRight,CheckCircle2,ClipboardList,House,Layers,HardHat,BrickWall} from 'lucide-react';

const details = {
  'second-oeuvre': {
    title: 'Second Œuvre',
    intro: 'Les travaux de second œuvre donnent forme aux espaces intérieurs et contribuent au confort, à la fonctionnalité et à la qualité des finitions.',
    image: 'photo-1600607687939-ce8a6c25118c',
    icon: HardHat,
    paragraphs: [
      'DECOPRAX vous accompagne dans les travaux d’aménagement intérieur qui interviennent après la structure du bâtiment. Chaque intervention est étudiée en fonction de la configuration des lieux et des besoins du projet.',
      'Nous organisons les différentes étapes afin de rechercher un résultat cohérent, soigné et adapté à l’usage de vos espaces.'
    ],
    services: ['Création et modification de cloisons', 'Travaux d’isolation', 'Pose de faux plafonds', 'Aménagements intérieurs et finitions']
  },
  'decoration-interieure': {
    title: 'Décoration intérieure',
    intro: 'Des espaces harmonieux et personnalisés, avec une attention particulière portée aux matières, aux couleurs et aux finitions.',
    image: 'photo-1600585154340-be6161a56a0c',
    icon: House,
    paragraphs: [
      'La décoration intérieure permet de révéler le potentiel d’un lieu et de créer une atmosphère qui correspond à vos envies. DECOPRAX vous accompagne dans le choix et la mise en œuvre des finitions.',
      'Nous veillons à l’harmonie générale des espaces et à la qualité d’exécution, en tenant compte du style recherché et des contraintes du chantier.'
    ],
    services: ['Travaux de peinture', 'Finitions intérieures', 'Harmonisation des couleurs et des matériaux', 'Décoration et aménagement sur mesure']
  },
  'revetements-de-sol': {
    title: 'Revêtements de sol',
    intro: 'Des sols adaptés à chaque espace, sélectionnés et posés avec soin pour allier esthétique, usage et durabilité.',
    image: 'photo-1618221195710-dd6b41faaea6',
    icon: Layers,
    paragraphs: [
      'Le choix du revêtement de sol joue un rôle essentiel dans le confort et l’identité d’un intérieur. Nous vous accompagnons dans le choix de la solution en fonction de la pièce, de son utilisation et du rendu souhaité.',
      'La préparation du support et la qualité de pose sont prises en compte pour obtenir des finitions régulières et soignées.'
    ],
    services: ['Pose de parquet', 'Pose de carrelage', 'Pose de sols souples', 'Préparation des supports et finitions de sols']
  },
  'facades-ravalement': {
    title: 'Façades & Ravalement',
    intro: 'Préserver et valoriser l’aspect extérieur de votre bâtiment grâce à des travaux adaptés à l’état de la façade.',
    image: 'photo-1600566753086-00f18fb6b3ea',
    icon: BrickWall,
    paragraphs: [
      'La façade participe à la protection et à l’apparence de votre bâtiment. DECOPRAX vous accompagne dans les travaux de remise en état et d’embellissement, après examen des besoins du support.',
      'Les solutions sont définies selon la nature de la façade, son état et les objectifs de rénovation.'
    ],
    services: ['Travaux de ravalement', 'Traitement des façades', 'Réparation des surfaces', 'Travaux d’embellissement et finitions extérieures']
  },
  'pilotage-de-projet': {
    title: 'Pilotage de projet',
    intro: 'Un accompagnement structuré pour organiser les interventions et suivre votre projet, de sa préparation jusqu’à sa réalisation.',
    image: 'photo-1504307651254-35680f356dfd',
    icon: ClipboardList,
    paragraphs: [
      'Un projet réussi repose sur une bonne coordination des étapes et des intervenants. DECOPRAX vous accompagne dans l’organisation et le suivi du chantier en fonction de vos objectifs.',
      'Nous assurons un suivi attentif de l’avancement, des délais et du budget prévisionnel, et facilitons la communication entre les différents intervenants.'
    ],
    services: ['Préparation et organisation du projet', 'Coordination des intervenants', 'Suivi de l’avancement du chantier', 'Suivi des délais et du budget']
  }
} as const;

type ServiceSlug = keyof typeof details;
export function generateStaticParams() {
  return Object.keys(details).map((slug) => ({ slug }));
}
export function generateMetadata({params}:{params:{slug:string}}) {
  const service = details[params.slug as ServiceSlug];
  return { title: service ? service.title + ' | DECOPRAX' : 'Nos expertises | DECOPRAX', description: service?.intro ?? 'Découvrez les expertises DECOPRAX.' };
}
export default function ServicePage({params}:{params:{slug:string}}) {
  const service = details[params.slug as ServiceSlug];
  if (!service) return <main className="service-detail-page"><div className="detail-not-found"><h1>Service introuvable</h1><Link href="/#services">Retour aux expertises</Link></div></main>;
  const Icon = service.icon;
  const heroImage = 'linear-gradient(90deg,rgba(5,10,16,.9),rgba(5,10,16,.58) 58%,rgba(5,10,16,.16)),url(https://images.unsplash.com/' + service.image + '?auto=format&fit=crop&w=1800&q=85)';
  return <main className="service-detail-page">
    <header className="detail-header">
      <Link href="/" className="detail-brand"><img src="/decoprax-logo.png" alt="DECOPRAX"/></Link>
      <nav><Link href="/#services">Nos expertises</Link><Link href="/#projects">Réalisations</Link><Link href="/#contact" className="detail-nav-cta">Demander un devis <ArrowRight size={15}/></Link></nav>
    </header>
    <section className="detail-hero" style={{backgroundImage:heroImage}}>
      <div className="detail-hero-copy">
        <Link href="/#services" className="detail-back"><ArrowLeft size={15}/> Retour aux expertises</Link>
        <p className="kicker">NOS EXPERTISES · DECOPRAX</p>
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
        <Link href="/#contact" className="detail-gold-btn">Parler de votre projet <ArrowRight size={17}/></Link>
      </div>
    </section>
    <section className="detail-content">
      <div className="detail-copy">
        <p className="kicker">DECOPRAX · DEPUIS 2019</p>
        <h2>Une expertise au service de votre projet</h2>
        {service.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}
      </div>
      <aside className="detail-list">
        <div className="detail-list-heading"><Icon/><div><span>NOS PRESTATIONS</span><h2>Ce que nous réalisons</h2></div></div>
        <ul>{service.services.map((item)=><li key={item}><CheckCircle2/>{item}</li>)}</ul>
        <Link href="/#contact" className="detail-text-link">Demander un devis <ArrowRight size={16}/></Link>
      </aside>
    </section>
    <section className="detail-bottom-cta"><div><p className="kicker">VOTRE PROJET, NOTRE ENGAGEMENT</p><h2>Parlons de votre projet</h2><p>Notre équipe est à votre écoute pour étudier votre besoin et vous accompagner.</p></div><Link href="/#contact" className="detail-gold-btn">Nous contacter <ArrowRight size={17}/></Link></section>
    <footer className="detail-footer"><Link href="/"><img src="/decoprax-logo.png" alt="DECOPRAX"/></Link><span>Travaux neufs · Rénovation · Pilotage de projet</span><small>© {new Date().getFullYear()} DECOPRAX. Tous droits réservés.</small></footer>
  </main>;
}
