export type SocialIconName = 'linkedin' | 'github' | 'instagram' | 'mail';
export type ProjectLinkIconName = 'github' | 'external-link' | 'arrow-up-right' | 'code';

export interface SocialLinkItem {
  id: string;
  title: string;
  subtitle: string;
  icon: SocialIconName;
  actionType: 'external' | 'copy-email';
  url?: string;
  valueToCopy?: string;
  ariaLabel: string;
}

export interface ProjectActionLink {
  label: string;
  url: string;
  icon: ProjectLinkIconName;
  primary?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  stack: string[];
  links: ProjectActionLink[];
}

export interface TimelineItem {
  id: string;
  organization: string;
  role: string;
  description: string;
  current?: boolean;
}

export interface ProfileData {
  statusBadge: {
    text: string;
    pulseColor: 'amber' | 'green';
  };
  identity: {
    name: string;
    firstName: string;
    lastName: string;
    initials: string;
    avatarUrl?: string;
    headline: string;
    jobTitle: string;
    organization: string;
    location: string;
    email: string;
    phone: string;
    website: string;
    linkedinUrl: string;
    githubUrl: string;
    instagramUrl: string;
    resumePdfUrl: string;
  };
  ctas: {
    primaryLabel: string;
    secondaryLabel: string;
  };
  socialLinks: SocialLinkItem[];
  sections: {
    about: {
      codeComment: string;
      content: string;
    };
    projects: {
      codeComment: string;
      items: ProjectItem[];
    };
    timeline: {
      codeComment: string;
      items: TimelineItem[];
    };
    stack: {
      codeComment: string;
      items: string[];
    };
  };
  footer: {
    text: string;
  };
}

export const PROFILE_DATA: ProfileData = {
  statusBadge: {
    text: 'DISPONÍVEL PARA NETWORKING',
    pulseColor: 'green'
  },

  // Alterar aqui dados para o arquivo vcf que contém dados de contato
  identity: {
    name: 'Allan Victor',
    firstName: 'Allan',
    lastName: 'Victor',
    initials: 'AV',
    avatarUrl: '', // Deixe vazio para exibir o placeholder estilizado "AV"
    headline: 'Engenharia de Software • Fullstack Dev • Google Student Ambassador',
    jobTitle: 'Fullstack Developer & Software Engineer',
    organization: 'KinaTech / Jala University',
    location: 'Recife, PE - Brasil',
    email: 'allan.rodrigues.souza22@gmail.com',
    phone: '+55 81 98592-5622',
    website: 'https://allanvictor.dev',
    linkedinUrl: 'https://www.linkedin.com/in/allan-souza-dev/',
    githubUrl: 'https://github.com/Allan-Souza',
    instagramUrl: 'https://www.instagram.com/allanrodrigues.code/',
    resumePdfUrl: '/Allan Victor Rodrigues Souza.pdf'
  },
  ctas: {
    primaryLabel: 'Salvar Contato',
    secondaryLabel: 'Currículo PDF'
  },
  socialLinks: [
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Trajetória & conexões',
      icon: 'linkedin',
      actionType: 'external',
      url: 'https://www.linkedin.com/in/allan-souza-dev/',
      ariaLabel: 'Abrir perfil no LinkedIn de Allan Victor'
    },
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'Código & arquitetura',
      icon: 'github',
      actionType: 'external',
      url: 'https://github.com/Allan-Souza',
      ariaLabel: 'Abrir repositórios no GitHub de Allan Victor'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: '@allanrodrigues.code',
      icon: 'instagram',
      actionType: 'external',
      url: 'https://www.instagram.com/allanrodrigues.code/',
      ariaLabel: 'Abrir perfil no Instagram @allanrodrigues.code'
    },
    {
      id: 'email',
      title: 'E-mail',
      subtitle: 'Contato direto',
      icon: 'mail',
      actionType: 'copy-email',
      valueToCopy: 'allan.rodrigues.souza22@gmail.com',
      ariaLabel: 'Copiar endereço de e-mail para a área de transferência'
    }
  ],
  sections: {
    about: {
      codeComment: '// 01. SOBRE',
      content:
        'Desenvolvedor Fullstack com foco em arquitetura limpa, modelagem de domínio e sistemas pensados antes da primeira linha de código. Construo aplicações web e mobile integrando IA como ferramenta de auditoria e validação. Fora do editor de código, costumo estar tirando um blues na guitarra ou explorando jogos indie.'
    },
    projects: {
      codeComment: '// 02. PROJETOS',
      items: [
        {
          id: 'evolutto',
          title: 'Evolutto',
          description:
            'Aplicativo para gerenciamento de habitos gameficado',
          stack: ['PWA', 'Java', 'Angular', 'PostgreSQL'],
          links: [
            {
              label: 'Acessar App',
              url: 'https://evolutto.vercel.app/',
              icon: 'external-link',
              primary: true
            },
            {
              label: 'Repositório',
              url: 'https://github.com/Allan-Souza/Evolutto',
              icon: 'github'
            }
          ]
        },
        {
          id: 'recife-seguro',
          title: 'Recife Seguro (PWA)',
          description:
            'Aplicação web progressiva para monitoramento de alagamentos e prevenção de riscos climáticos urbanos.',
          stack: ['FastAPI', 'Angular', 'PostgreSQL', 'Open-Meteo'],
          links: [
            {
              label: 'Acessar App',
              url: 'https://recife-seguro.vercel.app/',
              icon: 'external-link',
              primary: true
            },
            {
              label: 'Repositório',
              url: 'https://github.com/Allan-Souza/RecifeSeguro',
              icon: 'github'
            }
          ]
        }
      ]
    },
    timeline: {
      codeComment: '// 03. TRAJETÓRIA',
      items: [
        {
          id: 'kinatech',
          organization: 'KinaTech',
          role: 'Fullstack Developer (Estágio)',
          description:
            'Atuação no desenvolvimento ponta a ponta e organização ágil de entregas.',
          current: true
        },
        {
          id: 'gsa',
          organization: 'Google Student Ambassador',
          role: 'Embaixador Estudantil (2026)',
          description:
            'Liderança de workshops de IA, produção de conteúdo técnico e iniciativas na comunidade acadêmica.',
          current: true
        },
        {
          id: 'jala',
          organization: 'Jala University',
          role: 'Engenharia de Software',
          description:
            'Formação superior prática voltada para arquitetura de sistemas e engenharia moderna.',
          current: true
        },
        {
          id: 'estacio',
          organization: 'Estácio',
          role: 'Análise e Desenvolvimento de Sistemas',
          description:
            'Formação de nível superior com foco em todo o processo de desenvolvimento de projetos de software.',
          current: false
        },
      ]
    },
    stack: {
      codeComment: '// 04. STACK',
      items: [
        'Python (FastAPI)',
        'Java',
        'Angular',
        'React',
        'Tailwind CSS',
        'PostgreSQL',
        'Git',
        'Clean Architecture'
      ]
    }
  },
  footer: {
    text: 'Escaneado via NFC • Recife, PE'
  }
};
