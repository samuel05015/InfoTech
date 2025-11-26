import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User, ArrowRight } from 'lucide-react';

export const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === '/login';

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[#F8FAFC] dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-200/40 dark:from-brand-900/40 to-purple-200/40 dark:to-purple-900/40 rounded-full blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-cyan-100/40 dark:from-cyan-900/40 to-blue-100/40 dark:to-blue-900/40 rounded-full blur-[100px] -z-0 -translate-x-1/3 translate-y-1/3"></div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl w-full max-w-5xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row min-h-[650px] border border-white/50 dark:border-slate-700/50 relative z-10">
                
                {/* Form Side */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
                    <Link to="/" className="absolute top-8 left-8 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-bold tracking-wide uppercase group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar
                    </Link>

                    <div className="max-w-sm mx-auto w-full mt-10 md:mt-0">
                        <div className="mb-10">
                            <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                                {isLogin ? 'Bem-vindo de volta!' : 'Criar conta'}
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">
                                {isLogin ? 'Digite suas credenciais para acessar.' : 'Preencha seus dados para começar.'}
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            {!isLogin && (
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 ml-1 tracking-wider">Nome Completo</label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-500 group-focus-within:bg-brand-50 dark:group-focus-within:bg-brand-900/30 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400 transition-colors">
                                            <User size={18} />
                                        </div>
                                        <input type="text" placeholder="Seu nome" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-16 pr-4 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 ml-1 tracking-wider">E-mail</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-500 group-focus-within:bg-brand-50 dark:group-focus-within:bg-brand-900/30 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <input type="email" placeholder="seu@email.com" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-16 pr-4 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Senha</label>
                                    {isLogin && <a href="#" className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300">Esqueceu?</a>}
                                </div>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-500 group-focus-within:bg-brand-50 dark:group-focus-within:bg-brand-900/30 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400 transition-colors">
                                        <Lock size={18} />
                                    </div>
                                    <input type="password" placeholder="••••••••" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-16 pr-4 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                                </div>
                            </div>

                            <button className="w-full py-4 bg-slate-900 dark:bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-600 dark:hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 transition-all flex items-center justify-center gap-2 group mt-2">
                                {isLogin ? 'Entrar na Plataforma' : 'Criar Conta Grátis'}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-10 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
                            {isLogin ? 'Ainda não tem conta?' : 'Já é aluno?'} {' '}
                            <Link to={isLogin ? '/cadastro' : '/login'} className="font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-brand-600 dark:hover:decoration-brand-400 transition-all">
                                {isLogin ? 'Cadastre-se' : 'Faça login'}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Side */}
                <div className="hidden md:flex w-1/2 bg-slate-900 dark:bg-slate-950 relative items-center justify-center p-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-600/90 dark:from-brand-700/90 to-purple-900/90 dark:to-purple-950/90 mix-blend-multiply"></div>
                    
                    {/* Animated shapes */}
                    <div className="absolute top-20 right-20 w-32 h-32 bg-pink-500 rounded-full blur-[60px] opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500 rounded-full blur-[60px] opacity-40 animate-pulse delay-1000"></div>

                    <div className="relative z-10 text-white max-w-lg">
                        <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 border border-white/20 shadow-2xl">
                            <span className="font-display font-bold text-3xl">IT</span>
                        </div>
                        <h2 className="text-5xl font-display font-bold mb-8 leading-tight">Transforme código em <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Carreira.</span></h2>
                        <p className="text-blue-100 text-lg leading-relaxed font-light">
                            "A educação é a arma mais poderosa que você pode usar para mudar o mundo."
                        </p>
                        
                        <div className="mt-12 flex items-center gap-4">
                             <div className="flex -space-x-3">
                                {[1,2,3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md"></div>
                                ))}
                            </div>
                            <span className="text-sm font-medium text-white/60">+500 alunos online agora</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};