import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <div className="sticky top-24">
                    <span className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-wider text-sm mb-3 block">Fale Conosco</span>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8 leading-tight">Vamos construir <br/>o futuro juntos?</h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 font-light leading-relaxed max-w-lg">
                        Nossa equipe está pronta para tirar suas dúvidas sobre cursos, planos empresariais ou parcerias.
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: Mail, label: 'E-mail', value: 'contato@infotecjales.com.br', link: 'mailto:contato@infotecjales.com.br' },
                            { icon: Phone, label: 'Telefone', value: '(17) 99999-9999', link: 'tel:+5517999999999' },
                            { icon: MapPin, label: 'Escritório', value: 'Av. Francisco Jales, 2020 - Centro', link: '#' }
                        ].map((item, idx) => (
                            <a key={idx} href={item.link} className="flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-brand-100 dark:hover:border-brand-600 transition-all group w-full">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-0.5">{item.label}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{item.value}</p>
                                </div>
                                <ArrowUpRight size={20} className="ml-auto text-slate-300 group-hover:text-brand-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 dark:bg-brand-900/20 rounded-full blur-[80px] -z-0 translate-x-1/2 -translate-y-1/2"></div>
                    
                    <form className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider ml-1">Nome</label>
                                <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Seu nome" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider ml-1">Sobrenome</label>
                                <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Sobrenome" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider ml-1">E-mail Corporativo</label>
                            <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium" placeholder="seu@empresa.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider ml-1">Mensagem</label>
                            <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all resize-none font-medium" placeholder="Descreva seu projeto ou dúvida..."></textarea>
                        </div>
                        <button className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30 transition-all flex items-center justify-center gap-3 text-lg group">
                            Enviar Mensagem <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};