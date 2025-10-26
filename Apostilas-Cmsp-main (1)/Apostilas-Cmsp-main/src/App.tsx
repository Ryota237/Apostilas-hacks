import { Home, BookOpen, DollarSign, Terminal, GraduationCap, FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Subject {
  name: string;
  volume: string;
  url: string;
}

interface YearSubjects {
  [bimestre: number]: Subject[];
}

interface FundamentalSubjects {
  [year: number]: YearSubjects;
}

const fundamentalSubjects: FundamentalSubjects = {
  6: {
    1: [
      { name: 'Ciências, história e geografia', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128857/1071504.pdf' },
      { name: 'Língua Portuguesa', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128878/1071714.pdf' },
      { name: 'Matemática', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128874/1071692.pdf' }
    ],
    2: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 2', url: 'https://acervocmsp.educacao.sp.gov.br/134823/1161288.pdf' },
      { name: 'Matemática e Português', volume: 'Volume 2', url: 'https://acervocmsp.educacao.sp.gov.br/135153/1167415.pdf' }
    ],
    3: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 3', url: 'https://acervocmsp.educacao.sp.gov.br/138026/1262512.pdf' },
      { name: 'Matemática e Português', volume: 'Volume 3', url: 'https://acervocmsp.educacao.sp.gov.br/137970/1261821.pdf' }
    ],
    4: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 4', url: 'https://acervocmsp.educacao.sp.gov.br/146052/1369041.pdf' },
      { name: 'Matemática e Português', volume: 'Volume 4', url: 'https://acervocmsp.educacao.sp.gov.br/143239/1339972.pdf' }
    ]
  },
  7: {
    1: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128859/1071663.pdf' },
      { name: 'Matemática', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128879/1071719.pdf' },
      { name: 'Português', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128875/1071698.pdf' }
    ],
    2: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 2', url: 'https://acervocmsp.educacao.sp.gov.br/134825/1161386.pdf' },
      { name: 'Português e Matemática', volume: 'Volume 2', url: 'https://acervocmsp.educacao.sp.gov.br/135154/1167428.pdf' }
    ],
    3: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 3', url: 'https://acervocmsp.educacao.sp.gov.br/138028/1262518.pdf' },
      { name: 'Português e Matemática', volume: 'Volume 3', url: 'https://acervocmsp.educacao.sp.gov.br/137972/1261834.pdf' }
    ],
    4: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 4', url: 'https://acervocmsp.educacao.sp.gov.br/143249/1340054.pdf' },
      { name: 'Português e Matemática', volume: 'Volume 4', url: 'https://acervocmsp.educacao.sp.gov.br/143241/1339982.pdf' }
    ]
  },
  8: {
    1: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128871/1071664.pdf' },
      { name: 'Matemática', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128880/1071722.pdf' },
      { name: 'Português', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128876/1071703.pdf' }
    ],
    2: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 2', url: 'https://acervocmsp.educacao.sp.gov.br/134884/1161968.pdf' },
      { name: 'Português e Matemática', volume: 'Volume 2', url: 'https://acervocmsp.educacao.sp.gov.br/135158/1167452.pdf' }
    ],
    3: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 3', url: 'https://acervocmsp.educacao.sp.gov.br/138030/1262528.pdf' },
      { name: 'Português e Matemática', volume: 'Volume 3', url: 'https://acervocmsp.educacao.sp.gov.br/137974/1261839.pdf' }
    ],
    4: [
      { name: 'Português e Matemática', volume: 'Volume 4', url: 'https://acervocmsp.educacao.sp.gov.br/143251/1340077.pdf' },
      { name: 'Ciências, História e Geografia', volume: 'Volume 4', url: 'https://acervocmsp.educacao.sp.gov.br/143243/1339995.pdf' }
    ]
  },
  9: {
    1: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128872/1071670.pdf' },
      { name: 'Matemática', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128881/1071729.pdf' },
      { name: 'Português', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128877/1071712.pdf' }
    ],
    2: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 2', url: 'https://acervocmsp.educacao.sp.gov.br/134887/1161988.pdf' },
      { name: 'Português e Matemática', volume: 'Volume 2', url: 'https://acervocmsp.educacao.sp.gov.br/135159/1167461.pdf' }
    ],
    3: [
      { name: 'Ciências, História e Geografia', volume: 'Volume 3', url: 'https://acervocmsp.educacao.sp.gov.br/138032/1262543.pdf' },
      { name: 'Português e Matemática', volume: 'Volume 3', url: 'https://acervocmsp.educacao.sp.gov.br/137976/1261848.pdf' },
      { name: 'São Paulo em Ação - Matemática', volume: 'Volume 3', url: 'https://files.catbox.moe/b81xgi.pdf' },
      { name: 'São Paulo em Ação - Português', volume: 'Volume 3', url: 'https://files.catbox.moe/n3g69h.pdf' }
    ],
    4: [
      { name: 'Português e Matemática', volume: 'Volume 4', url: 'https://acervocmsp.educacao.sp.gov.br/143253/1340092.pdf' },
      { name: 'Ciências, História e Geografia', volume: 'Volume 4', url: 'https://acervocmsp.educacao.sp.gov.br/143245/1340004.pdf' }
    ]
  }
};

interface MedioSubjects {
  [year: number]: YearSubjects;
}

const medioSubjects: MedioSubjects = {
  1: {
    1: [],
    2: [],
    3: [],
    4: []
  },
  2: {
    1: [],
    2: [],
    3: [],
    4: []
  },
  3: {
    1: [
      { name: 'História e Física', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128899/1071760.pdf' },
      { name: 'Português e Matemática', volume: 'Volume 1', url: 'https://acervocmsp.educacao.sp.gov.br/128900/1071776.pdf' }
    ],
    2: [
      { name: 'História e Física', volume: 'Volume 2', url: 'https://acervocmsp.educacao.sp.gov.br/134911/1162126.pdf' },
      { name: 'Português e Matemática', volume: 'Volume 2', url: 'https://acervocmsp.educacao.sp.gov.br/135106/1166617.pdf' }
    ],
    3: [
      { name: 'História e Física', volume: 'Volume 3', url: 'https://acervocmsp.educacao.sp.gov.br/138042/1262617.pdf' },
      { name: 'Português e Matemática', volume: 'Volume 3', url: 'https://acervocmsp.educacao.sp.gov.br/138016/1262492.pdf' }
    ],
    4: [
      { name: 'Português e Matemática', volume: 'Volume 4', url: 'https://acervocmsp.educacao.sp.gov.br/143259/1340155.pdf' },
      { name: 'História e Física', volume: 'Volume 4', url: 'https://acervocmsp.educacao.sp.gov.br/143270/1340475.pdf' }
    ]
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState<'fundamental' | 'medio'>('fundamental');
  const [expandedYear, setExpandedYear] = useState<{ year: number; bimestre: number } | null>(null);

  const handleBimestreClick = (year: number, bimestre: number) => {
    if (expandedYear?.year === year && expandedYear?.bimestre === bimestre) {
      setExpandedYear(null);
    } else {
      setExpandedYear({ year, bimestre });
    }
  };

  const currentSubjects = expandedYear
    ? (selectedLevel === 'fundamental'
        ? fundamentalSubjects[expandedYear.year]?.[expandedYear.bimestre]
        : medioSubjects[expandedYear.year]?.[expandedYear.bimestre])
    : undefined;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="animated-bg"></div>

      <nav className="relative z-10 border-b border-red-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group">
              <Terminal className="w-6 h-6 text-red-600 group-hover:text-red-500 transition-colors animate-pulse-slow" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                CMSP Hacks
              </span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-500 hover:scale-110 active:scale-95 ${
                  activeSection === 'home'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                    : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                }`}
              >
                <Home className="w-4 h-4 transition-transform group-hover:rotate-12" />
                Menu
              </button>
              <button
                onClick={() => setActiveSection('apostilas')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-500 hover:scale-110 active:scale-95 ${
                  activeSection === 'apostilas'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                    : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                }`}
              >
                <BookOpen className="w-4 h-4 transition-transform group-hover:rotate-12" />
                Apostilas
              </button>
              <button
                onClick={() => setActiveSection('doar')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-500 hover:scale-110 active:scale-95 ${
                  activeSection === 'doar'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                    : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                }`}
              >
                <DollarSign className="w-4 h-4 transition-transform group-hover:rotate-12" />
                Doar
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-8">
              <span className="px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full text-red-400 text-sm font-medium backdrop-blur-sm animate-pulse-slow">
                Feito por @Biell_xtx e @rangelwzs
              </span>
            </div>

            <h1 className="text-6xl font-bold mb-6 leading-tight">
              As melhores respostas<br />
              para a suas <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent animate-gradient">Apostilas</span>
            </h1>

            <p className="text-xl text-gray-400 mb-12">
              Termine as suas tarefas nas apostilas em menos de um mês garantido!
            </p>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setActiveSection('apostilas')}
                className="group flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all duration-500 hover:scale-110 active:scale-95 hover:shadow-2xl hover:shadow-red-600/50 relative overflow-hidden"
              >
                <span className="relative z-10">Explorar Apostilas</span>
                <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              <a
                href="https://discord.gg/zyDZR3GTYP"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 border border-red-600/50 hover:border-red-600 rounded-lg font-semibold transition-all duration-500 hover:scale-110 active:scale-95 hover:bg-red-600/20 relative overflow-hidden"
              >
                <span className="text-red-400 group-hover:scale-125 transition-transform duration-300">♥</span>
                <span>Discord</span>
              </a>
            </div>
          </div>

          <div className="mt-32">
            <h2 className="text-4xl font-bold text-center mb-6">
              Por que escolher a Apostila Cmsp hacks?
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Simples, é o website oficial da Cmsp Hacks e o Mais Completo e Simples!
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="group p-8 bg-gradient-to-br from-red-950/50 to-black border border-red-900/30 rounded-2xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Uso Fácil</h3>
                <p className="text-gray-400 leading-relaxed">
                  Veja todas as apostilas encontradas pela Cmsp Hacks!
                </p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-red-950/50 to-black border border-red-900/30 rounded-2xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Responsivo</h3>
                <p className="text-gray-400 leading-relaxed">
                  Site completamente compatível com celular e computador!
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {activeSection === 'apostilas' && (
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Apostilas por Série</h1>
            <p className="text-gray-400">Catálogo organizado por série escolar e bimestre</p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => {
                setSelectedLevel('fundamental');
                setExpandedYear(null);
              }}
              className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden ${
                selectedLevel === 'fundamental'
                  ? 'bg-red-600 text-white shadow-2xl shadow-red-600/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="relative z-10">Ensino Fundamental (6º - 9º)</span>
              {selectedLevel === 'fundamental' && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700 animate-gradient-x"></div>
              )}
            </button>
            <button
              onClick={() => {
                setSelectedLevel('medio');
                setExpandedYear(null);
              }}
              className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden ${
                selectedLevel === 'medio'
                  ? 'bg-red-600 text-white shadow-2xl shadow-red-600/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="relative z-10">Ensino Médio (1º - 3º)</span>
              {selectedLevel === 'medio' && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700 animate-gradient-x"></div>
              )}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(selectedLevel === 'fundamental' ? [6, 7, 8, 9] : [1, 2, 3]).map((year, index) => (
              <div
                key={year}
                className="group bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <GraduationCap className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{year}º Ano</h3>
                        <p className="text-xs text-gray-500">
                          {selectedLevel === 'fundamental' ? 'Ensino Fundamental' : 'Ensino Médio'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((bimestre) => (
                      <div key={bimestre}>
                        <button
                          onClick={() => handleBimestreClick(year, bimestre)}
                          className="w-full group/item"
                        >
                          <div className={`p-4 rounded-lg border transition-all duration-500 hover:scale-[1.02] ${
                            expandedYear?.year === year && expandedYear?.bimestre === bimestre
                              ? 'bg-red-600/20 border-red-600 shadow-lg shadow-red-600/30'
                              : 'bg-black/50 border-red-900/20 hover:border-red-600/50'
                          }`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${
                                  expandedYear?.year === year && expandedYear?.bimestre === bimestre
                                    ? 'bg-red-600 scale-110'
                                    : 'bg-red-600/30'
                                }`}>
                                  <span className="text-red-400 font-bold text-sm">{bimestre}</span>
                                </div>
                                <div className="text-left">
                                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                                    expandedYear?.year === year && expandedYear?.bimestre === bimestre
                                      ? 'text-red-400'
                                      : 'text-white group-hover/item:text-red-400'
                                  }`}>
                                    {bimestre}º Bimestre
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    Todas as matérias
                                  </p>
                                </div>
                              </div>
                              <BookOpen className={`w-4 h-4 text-red-500 transition-all duration-500 ${
                                expandedYear?.year === year && expandedYear?.bimestre === bimestre
                                  ? 'rotate-180 scale-125'
                                  : 'group-hover/item:scale-110 group-hover/item:rotate-12'
                              }`} />
                            </div>
                          </div>
                        </button>

                        {expandedYear?.year === year && expandedYear?.bimestre === bimestre && currentSubjects && (
                          <div className="mt-2 space-y-2 animate-slide-down">
                            {currentSubjects.map((subject, idx) => (
                              <a
                                key={idx}
                                href={subject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full p-3 bg-gradient-to-r from-red-950/50 to-black border border-red-800/40 rounded-lg hover:border-red-600/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/20 group/subject block"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2 flex-1">
                                    <FileText className="w-4 h-4 text-red-500 group-hover/subject:scale-110 transition-transform duration-300" />
                                    <div className="text-left flex-1">
                                      <p className="text-xs font-semibold text-blue-400 group-hover/subject:text-blue-300 transition-colors">
                                        {subject.name}
                                      </p>
                                      <p className="text-xs text-gray-500">{subject.volume}</p>
                                    </div>
                                  </div>
                                  <ExternalLink className="w-3 h-3 text-gray-500 group-hover/subject:text-red-400 group-hover/subject:scale-125 transition-all duration-300" />
                                </div>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-red-900/20">
                    <p className="text-xs text-center text-gray-500">
                      16 apostilas disponíveis
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {activeSection === 'doar' && (
        <main className="relative z-10 max-w-3xl mx-auto px-6 py-20 animate-fade-in">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-red-600/20 rounded-2xl mb-6 hover:scale-110 transition-transform duration-500">
              <DollarSign className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Apoie o Projeto</h1>
            <p className="text-xl text-gray-400">
              Ajude a manter a plataforma funcionando e crescendo
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-red-950/50 to-black border border-red-900/30 rounded-2xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="text-red-500 animate-pulse-slow">♥</span> Faça uma doação (Pix)
              </h3>
              <p className="text-gray-400 mb-4">
                Ajude a manter o site no ar e totalmente gratuito para todos os estudantes!
              </p>

              <div className="p-4 bg-black/50 rounded-lg border border-red-900/30 mb-4 hover:border-red-600/50 transition-all duration-300">
                <p className="text-sm text-gray-500 mb-2">Chave PIX:</p>
                <p className="font-mono text-red-400 break-all">exemplo@email.com</p>
              </div>

              <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all duration-500 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-red-600/50 relative overflow-hidden group">
                <span className="relative z-10">Copiar Chave PIX</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl backdrop-blur-sm text-center hover:border-red-600/50 transition-all duration-500">
            <p className="text-gray-400">
              Sua contribuição ajuda a manter este projeto totalmente gratuito e acessível para todos os estudantes.
            </p>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
