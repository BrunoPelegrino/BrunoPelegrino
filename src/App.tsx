import { ArrowRight, Briefcase, Code2, Mail, Server, Workflow } from 'lucide-react';

const skills = {
  'Power Platform': ['Power Automate (Cloud + RPA)', 'Power Apps (Canvas + Model-Driven)', 'Dataverse', 'Power Fx', 'Copilot Studio'],
  'Backend & APIs': ['Node.js', 'TypeScript', 'Golang', 'Python', 'REST APIs', 'Express'],
  'Dados & Cloud': ['PostgreSQL', 'MySQL', 'Azure', 'Microsoft 365', 'SharePoint', 'Teams'],
  'Práticas de Engenharia': ['Arquitetura de APIs', 'Git', 'Docker', 'Testes automatizados', 'Governança', 'Azure DevOps'],
};

const projects = [
  {
    name: 'Central de Aprovações Multinível',
    stack: 'Power Automate • Power Apps • Dataverse • Teams • SharePoint',
    story:
      'Problema: aprovações corporativas dispersas por e-mail geravam atrasos e retrabalho. Solução: plataforma centralizada com trilhas de aprovação por perfil, alertas em Teams e histórico auditável no Dataverse. Impacto: redução de tempo de ciclo e maior governança das decisões.',
  },
  {
    name: 'Hub de Integração de Sistemas Legados',
    stack: 'Node.js • TypeScript • Golang • REST APIs • PostgreSQL',
    story:
      'Problema: dados críticos estavam isolados em sistemas diferentes. Solução: microsserviços de integração com APIs REST, normalização de payloads e monitoramento de falhas. Impacto: fluxo confiável entre áreas e menos tarefas manuais de consolidação.',
  },
  {
    name: 'Automação de Onboarding Operacional',
    stack: 'Power Automate • Azure AD • SharePoint • Power Apps',
    story:
      'Problema: onboarding com muitas etapas manuais e baixa padronização. Solução: automação ponta a ponta do provisionamento de acessos, checklist por área e painel de progresso. Impacto: ganho de eficiência e experiência melhor para novos colaboradores.',
  },
  {
    name: 'API de Indicadores para Operações',
    stack: 'Golang • Node.js • MySQL • Power BI',
    story:
      'Problema: falta de visibilidade em tempo real dos indicadores operacionais. Solução: API de dados com regras de negócio e integração com dashboards no Power BI. Impacto: decisões mais rápidas com dados consistentes.',
  },
];

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">Power Platform Developer • Backend & Integrações</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Transformo processos manuais em <span className="text-blue-400">soluções escaláveis</span> com Power Platform, APIs e backend.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          Sou Bruno Pelegrino, desenvolvedor focado em Power Automate, Power Apps, integrações REST e arquitetura backend em Node.js/Golang para ambientes corporativos.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400" href="#contato">
            Vamos conversar <ArrowRight size={18} />
          </a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-slate-500" href="#projetos">
            Ver projetos
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-20 px-6 pb-20">
        <section id="sobre" className="grid gap-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Sobre mim</h2>
            <p className="text-slate-300">
              Atuo em projetos corporativos criando automações e integrações no ecossistema Microsoft. Meu foco é reduzir gargalos operacionais, eliminar trabalho manual e aumentar confiabilidade de processos com arquitetura bem definida e integração entre plataformas.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card icon={<Workflow size={20} />} title="Automação">
              Fluxos com Power Automate para ganhos de produtividade e governança.
            </Card>
            <Card icon={<Server size={20} />} title="Integrações">
              APIs REST e microsserviços conectando legados e sistemas cloud.
            </Card>
            <Card icon={<Code2 size={20} />} title="Backend">
              Node.js, TypeScript e Golang com foco em performance e manutenção.
            </Card>
            <Card icon={<Briefcase size={20} />} title="Contexto real">
              Experiência prática em ambientes corporativos e operações críticas.
            </Card>
          </div>
        </section>

        <section id="skills">
          <h2 className="mb-6 text-2xl font-bold">Skills técnicas</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
                <h3 className="mb-4 font-semibold text-blue-300">{category}</h3>
                <ul className="space-y-2 text-slate-300">
                  {items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projetos">
          <h2 className="mb-6 text-2xl font-bold">Projetos em destaque</h2>
          <div className="grid gap-5">
            {projects.map((project) => (
              <article key={project.name} className="group rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-blue-400/60">
                <h3 className="text-xl font-semibold group-hover:text-blue-300">{project.name}</h3>
                <p className="mt-1 text-sm text-blue-300">{project.stack}</p>
                <p className="mt-3 text-slate-300">{project.story}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="mb-6 text-2xl font-bold">Experiência profissional</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">SEIDOR — Desenvolvedor Power Platform (Analista de Automação PL)</h3>
              <p className="text-sm text-slate-400">Ago/2024 – Atual</p>
              <p className="mt-2 text-slate-300">Desenvolvimento de soluções de automação com Power Automate e Power Apps, integrações com Teams, SharePoint, Azure e APIs externas, além da criação de serviços backend para suportar operações de negócio.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Qesh — Desenvolvedor Backend Jr</h3>
              <p className="text-sm text-slate-400">Abr/2023 – Fev/2024</p>
              <p className="mt-2 text-slate-300">Atuação em APIs REST com Node.js/TypeScript, integrações com sistemas legados e otimização de consultas SQL para melhoria de desempenho e consistência dos dados.</p>
            </div>
          </div>
        </section>

        <section id="contato" className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-8 text-center">
          <h2 className="text-2xl font-bold">Vamos construir sua próxima automação estratégica?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">Se você busca alguém para acelerar operações com Power Platform e integrações robustas, vamos conversar.</p>
          <a href="mailto:pelegrinobruno13@gmail.com" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400">
            <Mail size={18} /> Entrar em contato
          </a>
        </section>
      </main>
    </div>
  );
}

type CardProps = { title: string; children: string; icon: JSX.Element };

function Card({ title, children, icon }: CardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
      <div className="mb-2 flex items-center gap-2 text-blue-300">{icon}<h3 className="font-semibold">{title}</h3></div>
      <p className="text-sm text-slate-300">{children}</p>
    </div>
  );
}
