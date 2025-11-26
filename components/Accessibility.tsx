import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AccessibilityContextType } from '../types';
import { Type, Moon, Sun, RotateCcw, ZoomIn, ZoomOut, Accessibility as AccessIcon } from 'lucide-react';

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) throw new Error('useAccessibility must be used within AccessibilityProvider');
    return context;
};

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState({ fontSize: 1, highContrast: false });

    const toggleContrast = () => setState(prev => ({ ...prev, highContrast: !prev.highContrast }));
    const setFontSize = (size: number) => setState(prev => ({ ...prev, fontSize: Math.max(0, Math.min(2, size)) }));

    return (
        <AccessibilityContext.Provider value={{ state, toggleContrast, setFontSize }}>
            <div 
                className={`min-h-screen transition-colors duration-300 ${state.highContrast ? 'grayscale contrast-125 bg-black text-white' : ''}`}
                style={{ fontSize: state.fontSize === 0 ? '0.875rem' : state.fontSize === 2 ? '1.25rem' : '1rem' }}
            >
                {children}
            </div>
        </AccessibilityContext.Provider>
    );
};

export const AccessibilityToolbar = () => {
    const { state, toggleContrast, setFontSize } = useAccessibility();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <div className={`
                flex flex-col gap-2 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl border border-white/20
                transition-all duration-300 origin-bottom-right
                ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'}
            `}>
                <div className="text-sm font-semibold text-slate-500 mb-1 px-1">Fonte</div>
                <div className="flex gap-2">
                    <button onClick={() => setFontSize(state.fontSize + 1)} className="p-2 hover:bg-slate-100 rounded-lg" title="Aumentar" aria-label="Aumentar fonte"><ZoomIn size={20} className="text-slate-700" /></button>
                    <button onClick={() => setFontSize(state.fontSize - 1)} className="p-2 hover:bg-slate-100 rounded-lg" title="Diminuir" aria-label="Diminuir fonte"><ZoomOut size={20} className="text-slate-700" /></button>
                    <button onClick={() => setFontSize(1)} className="p-2 hover:bg-slate-100 rounded-lg" title="Resetar" aria-label="Resetar fonte"><Type size={20} className="text-slate-700" /></button>
                </div>
                
                <div className="h-px bg-slate-200 my-1"></div>
                
                <div className="text-sm font-semibold text-slate-500 mb-1 px-1">Visual</div>
                <button 
                    onClick={toggleContrast} 
                    className={`flex items-center gap-2 p-2 rounded-lg w-full transition-colors ${state.highContrast ? 'bg-brand-600 text-white' : 'hover:bg-slate-100 text-slate-700'}`}
                >
                    {state.highContrast ? <Sun size={20} /> : <Moon size={20} />}
                    <span className="text-sm font-medium">Alto Contraste</span>
                </button>
            </div>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-slate-900 text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
                aria-label="Menu de Acessibilidade"
            >
                <AccessIcon size={24} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
        </div>
    );
};