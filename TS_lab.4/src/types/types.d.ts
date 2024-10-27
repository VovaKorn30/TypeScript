// Тип для об'єкта, який отримуємо з API
export type Article = {
    id: number;        
    heading: string;      
    content: string;     
};

// Тип для елементів посилань
export type LinkElement = HTMLAnchorElement;

// Тип для загальних HTML-елементів
export type GenericHTMLElement = HTMLElement;

// Тип для масиву об'єктів Article, який ми очікуємо отримати від сервера
export type ApiResponse = Array<{ id: number; heading: string; content: string }>;
