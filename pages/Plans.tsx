import React from 'react';
import { Check, Star } from 'lucide-react';
import { PLANS } from '../constants';

export const Plans = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
             <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-brand-50/50 dark:from-brand-900/20 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none" />
             
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-brand-600 dark:text-brand-400 font-bold tracking-wider uppercase text-sm mb-3 block">Investimento</span>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Planos Flexíveis</h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                    Escolha o plano ideal para o seu momento profissional. Sem taxas escondidas, cancele quando quiser.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                {PLANS.map((plan) => (
                    <div 
                        key={plan.id}
                        className={`
                            relative rounded-[2rem] p-8 md:p-10 transition-all duration-500
                            ${plan.isPopular 
                                ? 'bg-slate-900 dark:bg-gradient-to-br dark:from-brand-600 dark:to-brand-700 text-white shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3)] scale-110 z-10 border border-slate-700 dark:border-brand-600' 
                                : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 dark:border-slate-700 hover:-translate-y-2'}
                        `}
                    >
                        {plan.isPopular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                                <Star size={12} fill="currentColor" /> MAIS POPULAR
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{plan.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-medium opacity-60">R$</span>
                                <span className={`text-5xl font-display font-bold ${plan.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{Math.floor(plan.price)}</span>
                                <span className="text-2xl font-bold opacity-60">,{(plan.price % 1).toFixed(2).substring(2)}</span>
                            </div>
                            <span className="text-sm font-medium opacity-50">/mês cobrado anualmente</span>
                        </div>

                        <div className={`h-px w-full ${plan.isPopular ? 'bg-slate-700' : 'bg-slate-100 dark:bg-slate-700'} mb-8`}></div>

                        <ul className="space-y-4 mb-10">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm font-medium opacity-90">
                                    <div className={`mt-0.5 min-w-[1.25rem] h-5 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-brand-500/20 text-brand-300' : 'bg-brand-50 text-brand-600'}`}>
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`
                            w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-300
                            ${plan.isPopular 
                                ? 'bg-white text-slate-900 hover:bg-brand-50' 
                                : 'bg-slate-900 text-white hover:bg-brand-600 hover:shadow-lg shadow-brand-500/20'}
                        `}>
                            Começar Agora
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="mt-20 text-center">
                <p className="text-slate-500">Dúvidas sobre os planos? <a href="/contato" className="text-brand-600 font-bold underline decoration-2 underline-offset-4 hover:text-brand-700">Fale com nosso time de vendas</a></p>
            </div>
        </div>
    );
};