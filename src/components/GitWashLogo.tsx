import { FC } from 'react';

export const GitWashLogo: FC = () => (
  <svg viewBox="0 0 400 400" className="w-32 h-32 mx-auto mb-4 animate-float">
    <circle cx="200" cy="200" r="160" fill="#f0f6ff" stroke="#2563eb" strokeWidth="12"/>
    <path d="M120 200 Q200 120 280 200" fill="none" stroke="#2563eb" strokeWidth="8"/>
    <path d="M100 240 Q200 160 300 240" fill="none" stroke="#60a5fa" strokeWidth="8"/>
    <path d="M80 280 Q200 200 320 280" fill="none" stroke="#93c5fd" strokeWidth="8"/>
    <path d="M200 120 L240 180 A40 40 0 1 1 160 180 Z" fill="#3b82f6"/>
    <circle cx="200" cy="120" r="15" fill="#1d4ed8"/>
    <circle cx="160" cy="180" r="12" fill="#2563eb"/>
    <circle cx="240" cy="180" r="12" fill="#2563eb"/>
    <text x="200" y="340" textAnchor="middle" fontFamily="Arial" fontWeight="bold" fontSize="48" fill="#1e40af">
      GitWash
    </text>
  </svg>
);