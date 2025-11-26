import React from 'react';
import { NEWS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

export const News = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="mb-16">
                <span className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-2 block">Blog & Updates</span>
                <h1 className="text-5xl font-display font-bold text-slate-900">
                    Notícias InfoTec
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {NEWS.map((item) => (
                    <article key={item.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 transition-all duration-500 hover:-translate-y-2">
                        <div className="h-64 overflow-hidden relative">
                             <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                             <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur text-brand-700 text-xs font-bold uppercase rounded-lg shadow-sm">
                                {item.category}
                            </span>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wide">
                                <Calendar size={14} /> {item.date}
                            </div>
                            <h2 className="text-2xl font-bold font-display text-slate-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight">
                                {item.title}
                            </h2>
                            <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed flex-1">
                                {item.summary}
                            </p>
                            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mt-auto group-hover:gap-4 transition-all group-hover:text-brand-600">
                                Ler Artigo <ArrowRight size={16} />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};