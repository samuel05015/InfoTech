
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, Star, Users, Award, Zap, BookOpen, CheckCircle2, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../constants';

export const Home = () => {
    // State for Accordion
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-24 pb-24 overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
                {/* Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-300/30 to-purple-300/30 rounded-full blur-[120px] -z-10 animate-blob mix-blend-multiply" />
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-r from-cyan-300/20 to-brand-200/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-multiply" />
                
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/40 dark:border-slate-700/40 shadow-sm mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide">Novas turmas abertas para 2024</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.05] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        O futuro da sua <br/>
                        <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Carreira Tech</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Plataforma premium de educação. Aprenda programação, design e dados com metodologia validada pelo mercado.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Link to="/cursos" className="w-full sm:w-auto px-10 py-5 bg-slate-900 dark:bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-slate-800 dark:hover:bg-brand-700 hover:-translate-y-1 transition-all shadow-[0_20px_50px_rgba(15,23,42,0.3)] flex items-center justify-center gap-3 group">
                            Explorar Cursos 
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/video-aula" className="w-full sm:w-auto px-10 py-5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-800 dark:text-white border border-white/50 dark:border-slate-700/50 rounded-full font-bold text-lg hover:bg-white dark:hover:bg-slate-700 hover:border-brand-200 hover:-translate-y-1 transition-all shadow-lg shadow-slate-200/50 flex items-center justify-center gap-3">
                            <PlayCircle size={24} className="text-brand-600" /> 
                            Ver Demo
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-16 flex items-center justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <div className="flex -space-x-4">
                            {[1,2,3,4].map(i => (
                                <img key={i} src={`https://picsum.photos/50/50?random=${i}`} alt="User" className="w-12 h-12 rounded-full border-4 border-white shadow-md" />
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300 shadow-md">+2k</div>
                        </div>
                        <div className="text-left">
                            <div className="flex text-yellow-400 text-sm">★★★★★</div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Aprovado por alunos</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats - Floating Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-12 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: 'Alunos Ativos', value: '500+', icon: Users, color: 'text-brand-500', bg: 'bg-brand-50' },
                        { label: 'Cursos Online', value: '50+', icon: BookOpen, color: 'text-purple-500', bg: 'bg-purple-50' },
                        { label: 'Satisfação', value: '98%', icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-50' },
                        { label: 'Certificados', value: '1.2k', icon: Award, color: 'text-green-500', bg: 'bg-green-50' },
                    ].map((stat, idx) => (
                        <div key={idx} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 dark:border-slate-700/40 hover:-translate-y-2 transition-all duration-300 text-center">
                            <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl ${stat.bg} dark:bg-opacity-20 ${stat.color} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <div className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                            <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features / Why Choose Us */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 font-bold text-sm mb-6">
                            Nossa Metodologia
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Por que somos a escolha de <span className="bg-brand-100 dark:bg-brand-900/50 text-brand-800 dark:text-brand-300 px-2 rounded-lg -rotate-1 inline-block">milhares</span>?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            Focamos no que realmente importa: resultados. Nossa plataforma combina teoria aprofundada com prática intensiva.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: 'Projetos Reais', desc: 'Construa portfólio enquanto aprende.', icon: Zap },
                                { title: 'Mentoria Expert', desc: 'Acesso direto a profissionais seniores.', icon: Users },
                                { title: 'Comunidade Ativa', desc: 'Network com outros desenvolvedores.', icon: Award },
                            ].map((feature, idx) => (
                                <div key={idx} className="flex gap-5 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-lg shadow-slate-100 dark:shadow-slate-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 border border-slate-100 dark:border-slate-700">
                                        <feature.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-[2rem] rotate-3 opacity-20 blur-2xl"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                            alt="Students" 
                            className="relative rounded-[2rem] shadow-2xl border-4 border-white dark:border-slate-700 object-cover h-[600px] w-full"
                        />
                        
                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg"><CheckCircle2 size={20} /></div>
                                <span className="font-bold text-slate-900 dark:text-white">Curso Concluído!</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Parabéns! Você finalizou "React Avançado" com 98% de aproveitamento.</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Testimonials Section (Social Proof) */}
             <section className="bg-white dark:bg-slate-800 py-24 border-y border-slate-100 dark:border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-brand-50 dark:from-brand-900/20 to-transparent rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">O que dizem nossos alunos</h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400">Histórias reais de quem transformou a carreira com a InfoTec.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.id} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300">
                                <Quote className="absolute top-8 right-8 text-brand-200 group-hover:text-brand-500 transition-colors" size={40} />
                                
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                
                                <p className="text-slate-600 mb-8 leading-relaxed relative z-10">"{t.text}"</p>
                                
                                <div className="flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                                        <span className="text-xs text-brand-600 font-medium">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accordion FAQ Section */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
                </div>
                
                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <button 
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                                {openFaqIndex === index ? (
                                    <ChevronUp className="text-brand-600 transition-transform" />
                                ) : (
                                    <ChevronDown className="text-slate-400 transition-transform" />
                                )}
                            </button>
                            
                            <div 
                                className={`
                                    px-6 bg-slate-50/50 text-slate-600 leading-relaxed transition-all duration-300 ease-in-out
                                    ${openFaqIndex === index ? 'max-h-48 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}
                                `}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
