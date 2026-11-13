export type SeoData = { title: string; description: string; path: string; noIndex?: boolean };

export const seoByPath: Record<string, SeoData> = {
  '/': { title: 'Jonny Beltran — Ingeniero de Sistemas', description: 'Portfolio profesional de Jonny Beltran, Ingeniero de Sistemas y desarrollador de software.', path: '/' },
  '/about': { title: 'Sobre mí — Jonny Beltran', description: 'Perfil profesional y enfoque de Jonny Beltran como Ingeniero de Sistemas y desarrollador de software.', path: '/about' },
  '/career-journey': { title: 'Trayectoria — Jonny Beltran', description: 'Evolución profesional y aprendizaje continuo de Jonny Beltran.', path: '/career-journey' },
  '/experience': { title: 'Experiencia — Jonny Beltran', description: 'Experiencia profesional de Jonny Beltran en desarrollo de software.', path: '/experience' },
  '/artificial-intelligence': { title: 'Inteligencia Artificial — Jonny Beltran', description: 'Formación actual y evolución profesional de Jonny Beltran en inteligencia artificial.', path: '/artificial-intelligence' },
  '/education': { title: 'Educación — Jonny Beltran', description: 'Formación académica y aprendizaje continuo de Jonny Beltran.', path: '/education' },
  '/skills': { title: 'Habilidades — Jonny Beltran', description: 'Tecnologías y áreas de trabajo conocidas por Jonny Beltran.', path: '/skills' },
  '/contact': { title: 'Contacto — Jonny Beltran', description: 'Información para contactar a Jonny Beltran sobre software y tecnología.', path: '/contact' },
  '/privacy': { title: 'Privacidad — Jonny Beltran', description: 'Información de privacidad del portfolio de Jonny Beltran.', path: '/privacy', noIndex: true },
};

export const siteUrl = 'https://jbeltra99.com';
