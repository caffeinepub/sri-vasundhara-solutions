import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormSubmission {
    service: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface BlogPost {
    title: string;
    date: string;
    slug: string;
    readTime: bigint;
    excerpt: string;
    category: string;
}
export interface PortfolioItem {
    result: string;
    metric: string;
    title: string;
    clientType: string;
    description: string;
    category: string;
}
export interface backendInterface {
    getBlogPosts(): Promise<Array<BlogPost>>;
    getBlogPostsByCategory(category: string): Promise<Array<BlogPost>>;
    getContactSubmissions(): Promise<Array<ContactFormSubmission>>;
    getPortfolioItems(): Promise<Array<PortfolioItem>>;
    getPortfolioItemsByCategory(category: string): Promise<Array<PortfolioItem>>;
    submitContactForm(name: string, email: string, phone: string, service: string, message: string): Promise<void>;
}
