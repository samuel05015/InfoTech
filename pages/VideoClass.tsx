
import React from 'react';
import { Play, CheckCircle, Lock, ThumbsUp, Bookmark, Share2, Clock, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VideoClass = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold mb-6 transition-colors">
                <ChevronLeft size={20} /> Voltar para o Dashboard
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Main Content (Player) */}
                <div className="lg:col-span-8 xl:col-span-9">
                    {/* Cinematic Container */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-black group z-10">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
                        
                        <div className="aspect-video relative z-10 bg-black">
                            <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Cover" className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer group-hover:scale-110 group-hover:bg-brand-600 group-hover:border-transparent transition-all duration-300 shadow-2xl relative">
                                    <div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-0 group-hover:opacity-30"></div>
                                    <Play size={40} className="text-white ml-2 fill-white" />
                                </div>
                            </div>
                            {/* Controls Overlay Fake */}
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex items-center justify-between text-white text-sm font-medium">
                                    <span>00:00 / 45:12</span>
                                    <div className="flex gap-4">
                                        <span>CC</span>
                                        <span>HD</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Progress bar fake */}
                        <div className="h-1.5 w-full bg-white/10 absolute bottom-0 z-20 cursor-pointer">
                             <div className="h-full w-1/3 bg-brand-500 relative group/progress">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md scale-0 group-hover/progress:scale-100 transition-transform"></div>
                             </div>
                        </div>
                    </div>
                    
                    <div className="mt-10 max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold uppercase rounded-lg border border-brand-100">Módulo 1</span>
                            <span className="text-slate-400 text-sm flex items-center gap-1 font-medium"><Clock size={16} /> 45 min</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                            Introdução à Lógica de Programação
                        </h1>
                        <p className="text-slate-600 leading-relaxed text-lg font-light mb-8 border-l-4 border-brand-200 pl-6 py-1">
                            Nesta aula introdutória, vamos desmistificar o que é programação, entender como computadores "pensam" e preparar todo o ambiente de desenvolvimento necessário para o curso.
                        </p>

                        <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-brand-200 hover:bg-brand-50 text-slate-700 hover:text-brand-700 rounded-xl font-bold transition-all shadow-sm">
                                <ThumbsUp size={20} /> <span className="hidden sm:inline">Gostei</span>
                             </button>
                             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-brand-200 hover:bg-brand-50 text-slate-700 hover:text-brand-700 rounded-xl font-bold transition-all shadow-sm">
                                <Bookmark size={20} /> <span className="hidden sm:inline">Salvar</span>
                             </button>
                             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-brand-200 hover:bg-brand-50 text-slate-700 hover:text-brand-700 rounded-xl font-bold transition-all shadow-sm ml-auto">
                                <Share2 size={20} /> <span className="hidden sm:inline">Compartilhar</span>
                             </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar Curriculum (Timeline Style) */}
                <div className="lg:col-span-4 xl:col-span-3">
                    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden sticky top-24">
                        <div className="p-6 border-b border-slate-100 bg-slate-50/50 backdrop-blur-sm">
                            <h3 className="font-display font-bold text-slate-900 text-xl">Currículo</h3>
                            <div className="flex items-center justify-between mt-4 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
                                <span>Progresso Global</span>
                                <span>45%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full w-[45%] bg-gradient-to-r from-brand-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                            </div>
                        </div>
                        
                        <div className="max-h-[600px] overflow-y-auto custom-scrollbar p-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((module) => (
                                <div key={module} className={`relative p-4 mb-2 rounded-xl cursor-pointer transition-all group overflow-hidden ${module === 3 ? 'bg-slate-900 shadow-md' : 'hover:bg-slate-50'}`}>
                                    {/* Timeline line connector */}
                                    <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-slate-100 -z-10 group-hover:bg-slate-200 transition-colors"></div>
                                    
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 transition-all ${module < 3 ? 'bg-green-500 border-green-500 text-white' : module === 3 ? 'bg-brand-500 border-brand-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-white border-slate-200 text-slate-300'}`}>
                                            {module < 3 ? <CheckCircle size={12} strokeWidth={3} /> : module === 3 ? <Play size={10} fill="currentColor" /> : <Lock size={10} />}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={`text-sm font-bold mb-1 leading-snug ${module === 3 ? 'text-white' : 'text-slate-700 group-hover:text-slate-900'}`}>
                                                Módulo {module}: Fundamentos da Lógica
                                            </h4>
                                            <p className={`text-xs font-medium ${module === 3 ? 'text-slate-400' : 'text-slate-400'}`}>12:30 • Introdução</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
