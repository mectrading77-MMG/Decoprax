import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'DECOPRAX | Travaux neufs, rénovation & pilotage de projet', description: 'Depuis 2019, DECOPRAX accompagne vos projets de rénovation, second œuvre, façades et pilotage de projet partout en France.', openGraph: { title: 'DECOPRAX — Travaux neufs & Rénovation', description: 'Votre partenaire travaux depuis 2019.', type: 'website', locale: 'fr_FR', siteName: 'DECOPRAX' } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="fr"><body>{children}</body></html>; }
