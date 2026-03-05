import React from 'react';
import Link from 'next/link';
import './Breadcrumbs.css';

interface BreadcrumbItem {
    label: string;
    href?: string;
    active?: boolean;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
    return (
        <nav className={`breadcrumbs-container ${className}`} aria-label="Breadcrumb">
            <ul className="breadcrumbs-list">
                {items.map((item, index) => (
                    <li key={index} className="breadcrumbs-item">
                        {item.href && !item.active ? (
                            <Link href={item.href} className="breadcrumb-btn">
                                {item.label}
                            </Link>
                        ) : (
                            <span className={`breadcrumb-btn active ${item.active ? 'current' : ''}`}>
                                {item.label}
                            </span>
                        )}
                        {index < items.length - 1 && (
                            <span className="breadcrumb-separator">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
