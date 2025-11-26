
import { Course, Plan, NewsItem } from './types';

// Updated with Premium Unsplash Images
export const COURSES: Course[] = [
    {
        id: 'ai',
        title: 'Mestrado em Inteligência Artificial',
        price: 29.00,
        level: 'Intermediário',
        duration: '2-10h',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop', // AI Abstract
        tags: ['IA', 'Machine Learning', 'Python'],
        description: 'Domine os fundamentos da IA generativa e aprenda a criar prompts eficientes para o mercado de trabalho.',
        badge: 'Bestseller'
    },
    {
        id: 'python',
        title: 'Python Fullstack: Do Zero ao Pro',
        price: 50.00,
        level: 'Iniciante',
        duration: '<2h',
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1470&auto=format&fit=crop', // Python Code
        tags: ['Python', 'Lógica', 'Backend'],
        description: 'Um curso intensivo e prático para quem nunca programou na vida. Crie seus primeiros scripts.',
        badge: 'Novo'
    },
    {
        id: 'java',
        title: 'Arquitetura Java Enterprise',
        price: 230.00,
        level: 'Avançado',
        duration: '>10h',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop', // Coding Laptop
        tags: ['Java', 'Spring', 'Microservices'],
        description: 'Aprenda padrões de projeto e arquitetura de software robusta para grandes empresas financeiras.',
        badge: 'Premium'
    }
];

export const PLANS: Plan[] = [
    {
        id: 'basic',
        name: 'Plano Básico',
        price: 49.90,
        features: ['3 módulos básicos', 'Apostilas em PDF', 'Suporte por e-mail', 'Certificado digital'],
        color: 'from-yellow-400 to-orange-500'
    },
    {
        id: 'inter',
        name: 'Plano Intermediário',
        price: 89.90,
        isPopular: true,
        features: ['Acesso a módulos intermediários', 'Videoaulas HD', 'Suporte via chat', 'Projetos práticos'],
        color: 'from-brand-500 to-purple-600'
    },
    {
        id: 'pro',
        name: 'Plano Pro',
        price: 149.90,
        features: ['Acesso total ilimitado', 'Mentoria mensal', 'Certificado físico', 'Code Review'],
        color: 'from-pink-500 to-rose-600'
    }
];

export const NEWS: NewsItem[] = [
    {
        id: '1',
        title: 'Google anuncia nova IA que resume vídeos',
        date: 'Hoje',
        category: 'Inovação',
        summary: 'A tecnologia "Resumo Express" promete facilitar a vida de usuários que buscam informações rápidas.',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop',
        author: 'Tech News Desk',
        readTime: '3 min de leitura',
        content: `
            <p class="lead">O Google revelou nesta terça-feira uma nova ferramenta de inteligência artificial capaz de resumir vídeos do YouTube em tempo real.</p>
            
            <p>A tecnologia, chamada <strong>"Resumo Express"</strong>, promete facilitar a vida de usuários que buscam informações rápidas sem precisar assistir ao conteúdo completo de vídeos longos ou tutoriais extensos.</p>
            
            <h3>Como funciona?</h3>
            <p>Utilizando modelos avançados de linguagem natural (semelhantes ao Gemini), a ferramenta analisa o áudio e as legendas do vídeo instantaneamente, gerando tópicos principais e um parágrafo conciso sobre o conteúdo. O usuário pode optar por ler o resumo antes de dar o play.</p>
            
            <blockquote>"Nossa missão é organizar a informação mundial e torná-la acessível. O Resumo Express é um passo gigante para economia de tempo na era digital." - Porta-voz do Google</blockquote>

            <h3>Disponibilidade</h3>
            <p>A novidade está em fase de testes beta nos <strong>EUA</strong> e deve chegar ao <strong>Brasil</strong> nos próximos meses, inicialmente para assinantes do YouTube Premium.</p>
            
            <p>Esta inovação representa um grande avanço na forma como consumimos conteúdo online, tornando a busca por informações mais eficiente e acessível para todos, especialmente estudantes e profissionais que usam a plataforma para aprendizado.</p>
        `
    },
    {
        id: '2',
        title: "O Futuro do Desenvolvimento Frontend em 2024",
        author: "Equipe InfoTec",
        date: "12 Out, 2023",
        readTime: "8 min de leitura",
        imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
        category: "Tecnologia",
        summary: "Descubra as novas tendências, frameworks e ferramentas que estão moldando o mercado de tecnologia este ano.",
        content: `
            <p>O ecossistema de desenvolvimento web está em constante evolução. À medida que avançamos para 2024, novas ferramentas, frameworks e paradigmas estão redefinindo a forma como construímos interfaces digitais. Neste artigo, exploraremos as tendências que estão moldando o futuro do frontend.</p>
            
            <h3>1. A Ascensão do Server Components</h3>
            <p>Com a introdução dos React Server Components (RSC), a linha entre o frontend e o backend está se tornando cada vez mais tênue. Essa arquitetura permite que componentes sejam renderizados no servidor, reduzindo drasticamente o tamanho do bundle enviado ao cliente e melhorando a performance inicial da aplicação.</p>
            <p>Frameworks como Next.js já adotaram essa abordagem como padrão, incentivando desenvolvedores a pensar em "renderização híbrida" desde o primeiro dia de projeto.</p>
    
            <h3>2. O Fim da "Guerra dos Frameworks"?</h3>
            <p>Por anos, vimos uma disputa acirrada entre React, Vue e Angular. No entanto, observamos uma convergência de conceitos. Signals, por exemplo, popularizados pelo SolidJS, foram adotados pelo Angular e Preact, e até o React está otimizando seu modelo de reatividade.</p>
            <p>O foco agora mudou da "melhor ferramenta" para a "melhor experiência de desenvolvimento" (DX) e performance do usuário final.</p>
    
            <h3>3. Inteligência Artificial no Fluxo de Trabalho</h3>
            <p>Ferramentas como GitHub Copilot e ChatGPT não vão substituir desenvolvedores, mas estão amplificando sua produtividade. A capacidade de gerar testes unitários, documentação e até componentes inteiros a partir de prompts está permitindo que times foquem em problemas de negócio complexos, em vez de boilerplate.</p>
    
            <blockquote>"A tecnologia só é boa se ela melhora a vida das pessoas. No frontend, isso significa acessibilidade, performance e usabilidade."</blockquote>
    
            <h3>4. CSS Moderno: Adeus Pré-processadores?</h3>
            <p>O CSS nativo evoluiu muito. Com o suporte generalizado a CSS Variables, Nesting nativo e novas unidades de viewport, a necessidade de ferramentas como SASS está diminuindo. Além disso, bibliotecas de Utility-First como Tailwind CSS continuam dominando o mercado pela velocidade de prototipagem que oferecem.</p>
    
            <h3>Conclusão</h3>
            <p>2024 promete ser um ano de consolidação e refinamento. Para desenvolvedores, o segredo continua sendo dominar os fundamentos da Web (HTML, CSS, JS) enquanto se mantém adaptável às novas abstrações que surgem.</p>
        `
    }
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Carlos Mendes",
        role: "Desenvolvedor Frontend",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
        text: "A metodologia da InfoTec mudou minha carreira. Consegui meu primeiro emprego em 3 meses de curso.",
        rating: 5
    },
    {
        id: 2,
        name: "Fernanda Souza",
        role: "Data Analyst",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
        text: "O curso de Python é simplesmente fantástico. Direto ao ponto e com projetos que realmente usamos no dia a dia.",
        rating: 5
    },
    {
        id: 3,
        name: "Ricardo Almeira",
        role: "CTO na TechStart",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
        text: "Utilizo a InfoTec para treinar minha equipe inteira. A qualidade do material Enterprise é incomparável.",
        rating: 5
    }
];

export const FAQS = [
    {
        question: "Os cursos possuem certificado reconhecido?",
        answer: "Sim! Todos os nossos cursos oferecem certificado digital com validação por QR Code, aceito em todo o território nacional e empresas de tecnologia."
    },
    {
        question: "Como funciona o suporte a dúvidas?",
        answer: "Dependendo do seu plano, você tem acesso a suporte via e-mail, chat ao vivo ou até mentoria individual com nossos especialistas seniores."
    },
    {
        question: "Posso cancelar minha assinatura quando quiser?",
        answer: "Com certeza. Acreditamos na liberdade. Você pode cancelar sua renovação a qualquer momento direto pelo painel do aluno, sem burocracia."
    },
    {
        question: "O conteúdo é atualizado?",
        answer: "Sim, respiramos tecnologia. Nossos cursos são revisados trimestralmente para incluir as versões mais recentes de linguagens e frameworks."
    }
];
