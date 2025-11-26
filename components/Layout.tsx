
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Newspaper, Crown, Mail, User, ChevronRight, ArrowUp, Moon, Sun } from 'lucide-react';
import { AccessibilityToolbar, useAccessibility } from './Accessibility';

const NAV_ITEMS = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Cursos', path: '/cursos', icon: BookOpen },
    { label: 'Notícias', path: '/noticias', icon: Newspaper },
    { label: 'Planos', path: '/planos', icon: Crown },
    { label: 'Contato', path: '/contato', icon: Mail },
];

export const Layout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const location = useLocation();
    const { state, toggleDarkMode } = useAccessibility();
    
    const isAuthPage = ['/login', '/cadastro'].includes(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isAuthPage) {
        return (
            <div className="min-h-screen bg-slate-50 font-sans">
                <AccessibilityToolbar />
                <Outlet />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-slate-900 font-sans overflow-x-hidden transition-colors duration-300">
            {/* Sticky Navbar with Glassmorphism */}
            <header 
                className={`
                    fixed top-0 z-40 w-full transition-all duration-300
                    ${scrolled 
                        ? 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2' 
                        : 'bg-transparent py-4'}
                `}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform duration-300">
                                IT
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white leading-none">InfoTec</span>
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide">Jales</span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-1.5 rounded-full border border-white/40 dark:border-slate-700/50 shadow-sm">
                            {NAV_ITEMS.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) => `
                                        flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                                        ${isActive 
                                            ? 'bg-slate-900 dark:bg-brand-600 text-white shadow-lg shadow-slate-900/20 dark:shadow-brand-600/20 transform scale-105' 
                                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-700/80'}
                                    `}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* User Actions */}
                        <div className="flex items-center gap-4">
                            {/* Dark Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-lg transition-all duration-300 text-slate-700 dark:text-slate-200"
                                aria-label={state.darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
                                title={state.darkMode ? 'Modo Claro' : 'Modo Escuro'}
                            >
                                {state.darkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            
                            <Link to="/login" className="hidden md:flex items-center gap-2 pl-2 pr-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 group">
                                <div className="w-8 h-8 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                    <User size={16} />
                                </div>
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-brand-700 dark:group-hover:text-brand-400">Entrar</span>
                            </Link>
                            
                            <button 
                                className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`
                    md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 shadow-2xl transition-all duration-300 overflow-hidden
                    ${isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}
                `}>
                    <div className="px-4 flex flex-col gap-2">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) => `
                                    flex items-center gap-4 px-4 py-4 rounded-2xl transition-all
                                    ${isActive 
                                        ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 font-bold' 
                                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium'}
                                `}
                            >
                                {({ isActive }) => (
                                    <>
                                        <item.icon size={20} className={isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'} />
                                        <span>{item.label}</span>
                                        <ChevronRight size={16} className="ml-auto opacity-30" />
                                    </>
                                )}
                            </NavLink>
                        ))}
                        
                        {/* Dark Mode Toggle Mobile */}
                        <button
                            onClick={toggleDarkMode}
                            className="flex items-center gap-4 px-4 py-4 rounded-2xl transition-all text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium mt-2"
                        >
                            {state.darkMode ? <Sun size={20} className="text-slate-400 dark:text-slate-500" /> : <Moon size={20} className="text-slate-400 dark:text-slate-500" />}
                            <span>{state.darkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
                        </button>
                        
                         <Link 
                            to="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-brand-600 dark:to-brand-700 text-white font-bold shadow-lg"
                        >
                            <User size={18} /> Acessar Conta
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-grow pt-20">
                <Outlet />
            </main>

            <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 relative overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2 pr-8">
                             <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/20">IT</div>
                                <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">InfoTec Jales</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6">
                                Transformando carreiras através da educação tecnológica de excelência. Nossa missão é democratizar o acesso ao conhecimento de ponta.
                            </p>
                            <div className="flex gap-4">
                                {['instagram', 'linkedin', 'twitter'].map((social) => (
                                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-brand-600 hover:text-white transition-all duration-300">
                                        <i className={`fab fa-${social}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6">Plataforma</h4>
                            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                                <li><Link to="/cursos" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-500 opacity-0 hover:opacity-100"></div>Cursos</Link></li>
                                <li><Link to="/planos" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-500 opacity-0 hover:opacity-100"></div>Planos</Link></li>
                                <li><Link to="/noticias" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-500 opacity-0 hover:opacity-100"></div>Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6">Suporte</h4>
                            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                                <li><Link to="/contato" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Fale Conosco</Link></li>
                                <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Central de Ajuda</a></li>
                                <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Termos de Uso</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-100 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">© 2023 InfoTec Jales. Feito com tecnologia de ponta.</p>
                        <div className="flex gap-6 text-sm text-slate-400 dark:text-slate-500 font-medium">
                            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Privacidade</a>
                            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
            
            <AccessibilityToolbar />

            {/* Scroll To Top Button */}
            {showScrollTop && (
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-50 p-4 rounded-full bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-xl border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group animate-fade-in-up"
                    aria-label="Voltar ao topo"
                >
                    <ArrowUp size={24} className="group-hover:animate-bounce" />
                </button>
            )}
        </div>
    );
};
