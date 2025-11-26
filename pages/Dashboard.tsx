
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    LayoutDashboard, BookOpen, Award, Settings, LogOut, 
    Play, Clock, Trophy, Flame, ChevronRight, Bell, Search,
    MoreVertical, CheckCircle2, ArrowLeft, Share2, Bookmark, Newspaper,
    Sun, Moon, Sunrise, X
} from 'lucide-react';
import { NEWS } from '../constants';
import { NewsItem } from '../types';

// Mock Data
const STATS = [
    { label: 'Cursos em Andamento', value: '4', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Horas Estudadas', value: '32h', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Certificados', value: '2', icon: Trophy, color: 'text-yellow-600', bg: 'bg-yellow-50' }
];

const MY_COURSES = [
    {
        id: 1,
        title: 'React Native: Do Zero ao App',
        category: 'Mobile Development',
        progress: 75,
        totalLessons: 40,
        completedLessons: 30,
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
        lastAccessed: 'Há 2 horas',
        status: 'Em andamento'
    },
    {
        id: 2,
        title: 'UI Design Masterclass',
        category: 'Design',
        progress: 45,
        totalLessons: 20,
        completedLessons: 9,
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop',
        lastAccessed: 'Há 3 dias',
        status: 'Em andamento'
    },
    {
        id: 3,
        title: 'Lógica de Programação com Python',
        category: 'Backend',
        progress: 100,
        totalLessons: 15,
        completedLessons: 15,
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1470&auto=format&fit=crop',
        lastAccessed: 'Concluído em 10/10',
        status: 'Concluído'
    },
    {
        id: 4,
        title: 'DevOps Essentials',
        category: 'Infraestrutura',
        progress: 10,
        totalLessons: 50,
        completedLessons: 5,
        image: 'https://images.unsplash.com/photo-1667372393119-c85c020799a3?q=80&w=2070&auto=format&fit=crop',
        lastAccessed: 'Há 1 semana',
        status: 'Em andamento'
    }
];

export const Dashboard = () => {
    const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [greeting, setGreeting] = useState('');
    const [showStickyHeader, setShowStickyHeader] = useState(false);

    const featuredNews = NEWS[0]; 

    // Dynamic Greeting Logic
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Bom dia');
        else if (hour < 18) setGreeting('Boa tarde');
        else setGreeting('Boa noite');
    }, []);

    // Scroll Logic for Article
    useEffect(() => {
        const handleScroll = () => {
            if (selectedArticle) {
                const totalScroll = document.documentElement.scrollTop;
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
                setScrollProgress(Number(scroll));
                setShowStickyHeader(totalScroll > 300);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [selectedArticle]);

    const openArticle = (article: NewsItem) => {
        window.scrollTo(0, 0);
        setSelectedArticle(article);
    }

    const closeArticle = () => {
        window.scrollTo(0, 0);
        setSelectedArticle(null);
        setShowStickyHeader(false);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans flex">
            
            {/* Sticky Reader Header (Article Mode Only) */}
            <div className={`fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-[60] transition-all duration-300 transform ${showStickyHeader && selectedArticle ? 'translate-y-0 shadow-md' : '-translate-y-full'}`}>
                <div className="h-1 bg-slate-100 w-full">
                    <div className="h-full bg-gradient-to-r from-brand-600 to-purple-600 transition-all duration-150 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>
                </div>
                <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                    <h3 className="font-bold text-slate-800 line-clamp-1 max-w-md">{selectedArticle?.title}</h3>
                    <div className="flex items-center gap-3">
                        <button className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"><Bookmark size={18} /></button>
                        <button className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"><Share2 size={18} /></button>
                        <div className="w-px h-4 bg-slate-300 mx-1"></div>
                        <button onClick={closeArticle} className="p-2 hover:bg-red-50 hover:text-red-600 rounded-full text-slate-500 transition-colors"><X size={18} /></button>
                    </div>
                </div>
            </div>

            {/* Sidebar (Desktop) */}
            <aside className={`hidden md:flex flex-col w-72 bg-white border-r border-slate-200 h-screen sticky top-0 z-30 transition-all duration-300 ${selectedArticle ? '-ml-72' : 'ml-0'}`}>
                <div className="p-8">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/30">IT</div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-xl tracking-tight text-slate-900 leading-none">InfoTec</span>
                            <span className="text-xs font-medium text-slate-500 tracking-wide">Student</span>
                        </div>
                    </Link>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <SidebarItem icon={LayoutDashboard} label="Visão Geral" active />
                    <SidebarItem icon={BookOpen} label="Meus Cursos" />
                    <SidebarItem icon={Award} label="Certificados" />
                    <SidebarItem icon={Settings} label="Configurações" />
                </nav>
                <div className="p-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 cursor-pointer hover:bg-slate-100 transition-colors">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-900 truncate">João Silva</p>
                            <p className="text-xs text-slate-500 truncate">Plano Pro</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                        <LogOut size={18} /> Sair
                    </button>
                </div>
            </aside>

            {/* Mobile Bottom Nav */}
            <div className={`md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50 px-6 py-3 flex justify-between items-center safe-area-bottom transition-transform duration-300 ${selectedArticle ? 'translate-y-full' : 'translate-y-0'}`}>
                <MobileNavItem icon={LayoutDashboard} active />
                <MobileNavItem icon={BookOpen} />
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center -mt-8 shadow-lg shadow-brand-500/40 border-4 border-[#F8FAFC]">
                    <Play size={20} fill="currentColor" className="ml-0.5" />
                </div>
                <MobileNavItem icon={Award} />
                <MobileNavItem icon={Settings} />
            </div>

            {/* Main Content */}
            <main className={`flex-1 p-4 md:p-8 lg:p-12 pb-24 md:pb-12 mx-auto w-full transition-all duration-500 ${selectedArticle ? 'max-w-5xl' : 'max-w-7xl'}`}>
                
                {!selectedArticle ? (
                    /* DASHBOARD VIEW */
                    <div className="animate-fade-in-up">
                        
                        {/* Header */}
                        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                            <div>
                                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-1">
                                    {greeting === 'Bom dia' ? <Sunrise size={16} /> : greeting === 'Boa tarde' ? <Sun size={16} /> : <Moon size={16} />}
                                    {greeting}, João!
                                </div>
                                <h1 className="text-3xl font-display font-bold text-slate-900">
                                    Seu progresso hoje
                                </h1>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative hidden md:block group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors" size={18} />
                                    <input 
                                        type="text" 
                                        placeholder="Buscar..." 
                                        className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 w-64 transition-all"
                                    />
                                </div>
                                <button className="relative w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                                    <Bell size={20} />
                                    <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                                </button>
                            </div>
                        </header>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            {STATS.map((stat, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 group">
                                    <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <stat.icon size={28} />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-display font-bold text-slate-900">{stat.value}</p>
                                        <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            {/* Hero Card (Netflix Style) */}
                            <div className="lg:col-span-2 relative w-full rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl shadow-slate-900/20 group cursor-pointer h-full min-h-[340px]">
                                <div className="absolute inset-0 overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" 
                                        alt="Current Course" 
                                        className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                </div>

                                <div className="relative z-10 p-8 md:p-12 flex flex-col h-full justify-between items-start">
                                    <div className="animate-fade-in-up">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30 backdrop-blur-md shadow-lg">
                                            <Flame size={12} fill="currentColor" className="animate-pulse" /> Em Destaque
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 leading-tight drop-shadow-md">
                                            React Native: Do Zero ao App
                                        </h2>
                                        <p className="text-slate-300 text-lg mb-6 font-light max-w-md">
                                            Aula 32: Integrando com APIs REST e autenticação JWT.
                                        </p>
                                    </div>

                                    <div className="w-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                        <div className="flex justify-between text-xs text-slate-300 mb-2 font-medium tracking-wide">
                                            <span>75% concluído</span>
                                            <span>Restam 2h 15m</span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-2 mb-8 backdrop-blur-sm overflow-hidden border border-white/5">
                                            <div className="bg-gradient-to-r from-brand-400 to-purple-400 h-2 rounded-full relative overflow-hidden" style={{ width: '75%' }}>
                                                <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_1.5s_infinite] -skew-x-12 transform -translate-x-full"></div>
                                            </div>
                                        </div>

                                        <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-50 transition-all shadow-lg shadow-white/5 hover:shadow-white/20 hover:scale-105 active:scale-95 group/btn">
                                            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
                                                <Play size={14} fill="currentColor" />
                                            </div>
                                            Retomar Aula
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* News Widget */}
                            <div className="lg:col-span-1 bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
                                
                                <div className="flex items-center gap-3 mb-6 relative z-10">
                                    <div className="p-2.5 bg-pink-50 text-pink-600 rounded-xl">
                                        <Newspaper size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Novidades</h3>
                                        <p className="text-xs text-slate-500">Últimas do blog</p>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col justify-between relative z-10">
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 block">{featuredNews.date}</span>
                                        <h4 className="text-xl font-display font-bold text-slate-800 mb-3 leading-tight group-hover:text-brand-600 transition-colors">
                                            {featuredNews.title}
                                        </h4>
                                        <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed mb-6">
                                            {featuredNews.summary}
                                        </p>
                                    </div>
                                    
                                    <button 
                                        onClick={() => openArticle(featuredNews)}
                                        className="w-full py-3.5 border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        Ler Artigo
                                        <ChevronRight size={16} className="text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* My Courses Grid */}
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-display font-bold text-slate-900">Meus Cursos</h2>
                            <div className="flex gap-2 p-1 bg-white rounded-xl border border-slate-100">
                                {['Todos', 'Em Andamento', 'Concluídos'].map(filter => (
                                    <button 
                                        key={filter} 
                                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === filter.toLowerCase() || (filter === 'Todos' && activeTab === 'overview') ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {MY_COURSES.map((course) => (
                                <div key={course.id} className="bg-white rounded-[2rem] p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full cursor-pointer">
                                    <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                                        <img 
                                            src={course.image} 
                                            alt={course.title} 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                        />
                                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors backdrop-blur-[1px] group-hover:backdrop-blur-0"></div>
                                        
                                        {/* Play Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                                <Play size={20} fill="currentColor" />
                                            </div>
                                        </div>

                                        <div className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-bold uppercase backdrop-blur-md shadow-sm flex items-center gap-1.5 ${course.status === 'Concluído' ? 'bg-green-500 text-white' : 'bg-white/90 text-slate-900'}`}>
                                            {course.status === 'Concluído' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                                            {course.status}
                                        </div>
                                        <button className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-colors opacity-0 group-hover:opacity-100">
                                            <MoreVertical size={16} />
                                        </button>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-2 border-b border-slate-50 pb-2">{course.category}</span>
                                        <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 leading-tight group-hover:text-brand-600 transition-colors">
                                            {course.title}
                                        </h3>
                                        <div className="mt-auto">
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-xs font-semibold text-slate-400">{course.completedLessons}/{course.totalLessons} aulas</span>
                                                <span className="text-sm font-bold text-slate-900">{course.progress}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full rounded-full relative overflow-hidden ${course.progress === 100 ? 'bg-green-500' : 'bg-slate-900'}`}
                                                    style={{ width: `${course.progress}%` }}
                                                ></div>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                                                <span className="text-xs text-slate-400 font-medium">Visto {course.lastAccessed}</span>
                                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                                    <ChevronRight size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* ARTICLE READING VIEW */
                    <div className="animate-fade-in-up">
                        <div className="max-w-3xl mx-auto">
                            
                            <button 
                                onClick={closeArticle}
                                className="group inline-flex items-center gap-3 text-slate-500 hover:text-slate-900 font-bold mb-8 transition-colors px-4 py-2 rounded-full hover:bg-white hover:shadow-sm"
                            >
                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                Voltar para o Dashboard
                            </button>

                            <header className="mb-10 text-center md:text-left">
                                <div className="inline-flex items-center gap-3 text-xs font-bold text-brand-600 uppercase tracking-widest mb-6 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                                    <span>{selectedArticle.category}</span>
                                    <span className="w-1 h-1 bg-brand-400 rounded-full"></span>
                                    <span>{selectedArticle.readTime || '5 min'} de leitura</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                    {selectedArticle.title}
                                </h1>
                                <div className="flex flex-col md:flex-row items-center justify-between border-y border-slate-200 py-6 gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-100 to-purple-100 flex items-center justify-center text-brand-700 font-bold text-lg ring-4 ring-white shadow-sm">IT</div>
                                        <div className="text-left">
                                            <p className="font-bold text-slate-900 text-sm">{selectedArticle.author || 'Redação InfoTec'}</p>
                                            <p className="text-xs text-slate-500 font-medium">{selectedArticle.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl font-semibold transition-colors text-sm">
                                            <Bookmark size={16} /> Salvar
                                        </button>
                                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl font-semibold transition-colors text-sm">
                                            <Share2 size={16} /> Compartilhar
                                        </button>
                                    </div>
                                </div>
                            </header>

                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-12 group">
                                <img src={selectedArticle.imageUrl} alt="Article Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            <article className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-a:text-brand-600 hover:prose-a:text-brand-700 prose-img:rounded-3xl prose-img:shadow-lg prose-blockquote:border-l-brand-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic">
                                {selectedArticle.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                                ) : (
                                    <p className="text-slate-500 italic text-center py-20">Conteúdo completo indisponível.</p>
                                )}
                            </article>

                            <div className="mt-20 pt-12 border-t border-slate-200">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-display font-bold text-slate-900">Leitura Recomendada</h3>
                                    <Link to="/noticias" className="text-brand-600 font-bold text-sm hover:underline">Ver tudo</Link>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {NEWS.filter(n => n.id !== selectedArticle.id).slice(0, 2).map((item) => (
                                        <div key={item.id} className="group cursor-pointer bg-white rounded-2xl p-4 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" onClick={() => openArticle(item)}>
                                            <div className="aspect-[16/9] rounded-xl bg-slate-100 overflow-hidden mb-4 relative">
                                                <img src={item.imageUrl} alt="Related" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                <span className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-bold uppercase tracking-wide text-slate-900">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <h4 className="font-bold text-lg text-slate-900 group-hover:text-brand-600 transition-colors leading-tight mb-2 line-clamp-2">
                                                {item.title}
                                            </h4>
                                            <span className="text-xs font-semibold text-slate-400">{item.readTime || '3 min'} de leitura</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

const SidebarItem = ({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) => (
    <button className={`
        w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group relative overflow-hidden
        ${active 
            ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium'}
    `}>
        <Icon size={20} className={active ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'} />
        {label}
        {active && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-brand-500 rounded-l-full"></div>}
    </button>
);

const MobileNavItem = ({ icon: Icon, active }: { icon: any, active?: boolean }) => (
    <button className={`p-3 rounded-xl transition-colors ${active ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:bg-slate-50'}`}>
        <Icon size={22} />
    </button>
);
