
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, BarChart, ArrowUpRight, Inbox } from 'lucide-react';
import { COURSES } from '../constants';

const LEVELS = ['Todos', 'Iniciante', 'Intermediário', 'Avançado'];

export const Courses = () => {
    const [search, setSearch] = useState('');
    const [activeLevel, setActiveLevel] = useState('Todos');

    const filteredCourses = COURSES.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                              course.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
        const matchesLevel = activeLevel === 'Todos' || course.level === activeLevel;
        return matchesSearch && matchesLevel;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">Catálogo de Cursos</h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-light">Explore nossa biblioteca de conhecimento premium.</p>
                </div>
                
                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-slate-800 p-2.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 dark:border-slate-700 w-full md:w-auto">
                    <div className="relative group w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-focus-within:text-brand-600 transition-colors" size={20} />
                        <input 
                            type="text" 
                            placeholder="Buscar por nome ou tecnologia..." 
                            className="pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl outline-none text-slate-700 dark:text-slate-200 w-full border border-transparent focus:bg-white dark:focus:bg-slate-800 focus:border-brand-200 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium placeholder:font-normal placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3 mb-12">
                {LEVELS.map(level => (
                    <button
                        key={level}
                        onClick={() => setActiveLevel(level)}
                        className={`
                            px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border
                            ${activeLevel === level 
                                ? 'bg-slate-900 dark:bg-brand-600 text-white border-slate-900 dark:border-brand-600 shadow-lg shadow-slate-900/20 transform scale-105' 
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-brand-300 hover:text-brand-600 dark:hover:text-brand-400'}
                        `}
                    >
                        {level}
                    </button>
                ))}
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredCourses.map(course => (
                    <Link to="/video-aula" key={course.id} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col relative h-full">
                        <div className="relative h-60 overflow-hidden">
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            
                            {/* Price Badge */}
                            <div className="absolute top-4 right-4 z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-bold text-slate-900 dark:text-white shadow-lg border border-white/50 dark:border-slate-700/50">
                                R$ {course.price.toFixed(2)}
                            </div>
                            
                            {/* Status Badge (New/Bestseller) */}
                            {course.badge && (
                                <div className={`
                                    absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-white shadow-lg
                                    ${course.badge === 'Novo' ? 'bg-green-500' : 'bg-brand-500'}
                                `}>
                                    {course.badge}
                                </div>
                            )}
                            
                            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                                {course.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-lg border border-white/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2 leading-tight">
                                {course.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed text-sm flex-1">{course.description}</p>
                            
                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700">
                                <div className="flex gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    <div className="flex items-center gap-1.5">
                                        <BarChart size={14} className="text-brand-500" /> {course.level}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={14} className="text-brand-500" /> {course.duration}
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Empty State Pattern */}
            {filteredCourses.length === 0 && (
                <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-300">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-6 text-slate-300">
                        <Inbox size={40} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Nenhum curso encontrado</h3>
                    <p className="text-slate-500 max-w-md mx-auto mb-8">
                        Não encontramos resultados para sua busca atual. Tente limpar os filtros ou usar termos mais genéricos.
                    </p>
                    <button 
                        onClick={() => { setSearch(''); setActiveLevel('Todos'); }}
                        className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-brand-600 transition-colors"
                    >
                        Limpar Filtros
                    </button>
                </div>
            )}
        </div>
    );
};
