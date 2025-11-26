
export interface Course {
    id: string;
    title: string;
    price: number;
    level: 'Iniciante' | 'Intermediário' | 'Avançado';
    duration: string;
    image: string;
    tags: string[];
    description: string;
    badge?: string;
}

export interface NewsItem {
    id: string;
    title: string;
    date: string;
    summary: string;
    category: string;
    imageUrl: string; // Changed to required based on usage
    content?: string; // HTML content for full view
    author?: string;
    readTime?: string;
}

export interface Plan {
    id: string;
    name: string;
    price: number;
    features: string[];
    isPopular?: boolean;
    color: string;
}

export type AccessibilityState = {
    fontSize: number; // 0 (small), 1 (normal), 2 (large)
    highContrast: boolean;
    darkMode: boolean;
};

export type AccessibilityContextType = {
    state: AccessibilityState;
    toggleContrast: () => void;
    setFontSize: (size: number) => void;
    toggleDarkMode: () => void;
};
