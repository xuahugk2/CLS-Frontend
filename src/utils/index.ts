export const cx = (...className: string[]): string => className.filter(Boolean).join(' ');
