import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { NEWS } from '../constants';

export const NewsArticle = () => {
    const { id } = useParams<{ id: string }>();
    const article = NEWS.find(item => item.id === id);

    if (!article) {
        return <Navigate to="/noticias" replace />;
    }

    const shareUrl = window.location.href;
    const shareText = `${article.title} - InfoTec Jales`;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Hero Section */}
            <div className="relative h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-transparent z-10"></div>
                <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 z-20 flex items-end">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
                        <Link 
                            to="/noticias" 
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold mb-6 transition-colors group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
                            Voltar para Notícias
                        </Link>
                        
                        <span className="inline-block px-4 py-1.5 bg-brand-500 text-white text-xs font-bold uppercase rounded-lg mb-4">
                            {article.category}
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                            {article.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span className="font-medium">{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 md:p-12 lg:p-16">
                    {/* Share Buttons */}
                    <div className="flex items-center justify-between mb-12 pb-8 border-b border-slate-200 dark:border-slate-700">
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Compartilhar</span>
                        <div className="flex items-center gap-3">
                            <a 
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 hover:text-white transition-all text-slate-600 dark:text-slate-300"
                                title="Compartilhar no Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a 
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-sky-500 hover:text-white transition-all text-slate-600 dark:text-slate-300"
                                title="Compartilhar no Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a 
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-blue-700 hover:text-white transition-all text-slate-600 dark:text-slate-300"
                                title="Compartilhar no LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <button
                                onClick={() => navigator.clipboard.writeText(shareUrl)}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 hover:text-white transition-all text-slate-600 dark:text-slate-300"
                                title="Copiar link"
                            >
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Article Body */}
                    <div 
                        className="prose prose-lg prose-slate dark:prose-invert max-w-none
                            prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                            prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                            prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-bold
                            prose-blockquote:border-l-4 prose-blockquote:border-brand-500 prose-blockquote:bg-brand-50/50 dark:prose-blockquote:bg-brand-900/20
                            prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                            prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-300 prose-blockquote:italic prose-blockquote:not-italic
                            prose-blockquote:my-8
                            prose-a:text-brand-600 dark:prose-a:text-brand-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                            [&_.lead]:text-xl [&_.lead]:font-medium [&_.lead]:text-slate-700 dark:[&_.lead]:text-slate-300 [&_.lead]:mb-8 [&_.lead]:leading-relaxed
                        "
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>

                {/* Related Articles */}
                <div className="mt-16">
                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-8">
                        Mais Notícias
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {NEWS.filter(item => item.id !== article.id).slice(0, 2).map((item) => (
                            <Link 
                                key={item.id}
                                to={`/noticias/${item.id}`}
                                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={item.imageUrl} 
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
                                        {item.category}
                                    </span>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                                        {item.summary}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
};
