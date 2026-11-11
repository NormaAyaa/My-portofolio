import React from 'react';

export interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, size = 40 }) => {
  switch (name) {
    case 'Python':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128">
          <path
            fill="#387eb8"
            d="M63.5 13c-27.1 0-25.5 11.8-25.5 11.8l.1 12.2h26.1v3.7H25.3S8 38.8 8 66.5c0 27.7 15.1 26.8 15.1 26.8h9V80.6s-.5-15.1 14.8-15.1h25.4s14.3.2 14.3-14V27s1.8-14-23.1-14zm-14.3 7.8c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7z"
          />
          <path
            fill="#ffe052"
            d="M64.5 115c27.1 0 25.5-11.8 25.5-11.8l-.1-12.2H63.8v-3.7h38.9S120 89.2 120 61.5c0-27.7-15.1-26.8-15.1-26.8h-9v12.7s.5 15.1-14.8 15.1H55.7s-14.3-.2-14.3 14V101s-1.8 14 23.1 14zm14.3-7.8c-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7 2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7z"
          />
        </svg>
      );

    case 'PyTorch':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path
            d="M12.8 2.2a1 1 0 0 0-1.6 0C8.5 6 4.5 10.7 4.5 15.2a7.5 7.5 0 0 0 15 0c0-4.5-4-9.2-6.7-13zm2.5 10.5-2.2-2.2a.5.5 0 0 0-.7 0l-2.2 2.2a.5.5 0 0 0 0 .7l2.2 2.2a.5.5 0 0 0 .7 0l2.2-2.2a.5.5 0 0 0 0-.7z"
            fill="#EE4C2C"
          />
          <circle cx="16.5" cy="5.5" r="1.5" fill="#EE4C2C" />
        </svg>
      );

    case 'OpenAI':
    case 'ChatGPT':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path
            d="M22.28 10.13a5.95 5.95 0 0 0-.52-4.91 6.04 6.04 0 0 0-6.51-2.9A6.06 6.06 0 0 0 4.96 4.3 5.98 5.98 0 0 0 1.9 9.07a6.04 6.04 0 0 0 1.77 7.02 5.95 5.95 0 0 0 .52 4.9 6.04 6.04 0 0 0 6.51 2.91 6.05 6.05 0 0 0 10.29-1.99 5.99 5.99 0 0 0 3.06-4.76 6.04 6.04 0 0 0-1.77-7.02zM12 14.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5z"
            fill="#10A37F"
          />
        </svg>
      );

    case 'Claude':
    case 'Anthropic':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#D97706">
          <path d="M12 2l1.6 6.8L20.4 7l-5 4.8 5.4 4.4-6.8.2L12 23l-2-6.6-6.8-.2 5.4-4.4-5-4.8 6.8 1.8L12 2z" />
        </svg>
      );

    case 'LangChain':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#1C3C3C" />
          <path
            d="M6 12a3 3 0 0 1 3-3h2v2H9a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1h2v2H9a3 3 0 0 1-3-3zm9-3h-2v2h2a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-2v2h2a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3zm-6 2h6v2H9v-2z"
            fill="#2BD198"
          />
        </svg>
      );

    case 'HuggingFace':
    case 'Hugging Face':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FFD21E" />
          <ellipse cx="8.5" cy="10" rx="1.2" ry="1.6" fill="#2D2808" />
          <ellipse cx="15.5" cy="10" rx="1.2" ry="1.6" fill="#2D2808" />
          <path
            d="M8 13.8c1 .9 2.5 1.5 4 1.5s3-.6 4-1.5"
            stroke="#2D2808"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M4.5 14.5c.8-1.5 2.2-2 3.5-1.2.6.4.8 1.2.6 1.8L8 16c-.5 1-1.8 1.5-2.8.8l-.7-.5c-.5-.4-.4-1.2 0-1.8z"
            fill="#FFB000"
          />
          <path
            d="M19.5 14.5c-.8-1.5-2.2-2-3.5-1.2-.6.4-.8 1.2-.6 1.8l.6.9c.5 1 1.8 1.5 2.8.8l.7-.5c.5-.4.4-1.2 0-1.8z"
            fill="#FFB000"
          />
        </svg>
      );

    case 'FastAPI':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#009688" />
          <path
            d="M13.2 4L6.5 13.5h4.8L9.8 20l7.7-10.2h-5.2L13.2 4z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'Streamlit':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path
            d="M18.8 6.4L13.2 16.5l-3.6-6.2L6 16.5H2l5.6-9.8 3.6 6.3 3.6-6.6h4z"
            fill="#FF4B4B"
          />
          <path
            d="M22 16.5h-5.6l-2-3.5 1.8-3.2L22 16.5z"
            fill="#FF2828"
          />
        </svg>
      );

    case 'Docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13.98 9.14h1.76v1.76h-1.76zm-2.35 0h1.76v1.76h-1.76zm-2.35 0h1.76v1.76H9.28zm-2.35 0h1.76v1.76H6.93zm4.7-2.35h1.76v1.76h-1.76zm-2.35 0h1.76v1.76H9.28zm-2.35 0h1.76v1.76H6.93zm4.7-2.35h1.76v1.76h-1.76zm-2.35 0h1.76v1.76H9.28zm14.47 7.06c-.32-.22-1.2-.42-2.35-.15-.4-1.22-1.32-1.74-1.37-1.76l-.42-.23-.27.38c-.5.7-.76 1.62-.77 2.76-.01.2 0 .4.02.6H1.54c-.28 0-.5.22-.5.5 0 2.8 1.15 5.37 3.25 7.24C6.26 22.04 8.7 22.8 11.28 22.8c7.87 0 12.35-4.8 12.35-10.87 0-.15 0-.3-.01-.43.5-.4 1.18-.73 1.18-.73l.2-.13-.24-.17z" />
        </svg>
      );

    case 'PostgreSQL':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 4.2 2.6 7.8 6.3 9.3.2-.8.5-1.9.5-2.7 0-.5-.2-1.3-.4-2-.7-.1-1.3-.3-1.8-.7-.6-.5-.9-1.3-.9-2.2 0-1.8 1.3-3.2 3.1-3.5.4-.1.8-.1 1.2 0 1.2.2 2.2.9 2.8 1.9.4-.2.8-.5 1.1-.9.6-.8 1-1.8 1.2-2.9.1-.5.4-.8.9-.8.4 0 .7.3.7.7 0 2.2-.9 4.3-2.4 5.8-.3.3-.6.6-1 .8.1.7.3 1.5.3 2.1 0 .9-.4 2.1-.6 2.9 3.8-1.4 6.5-5 6.5-9.3 0-5.52-4.48-10-10-10z"
            fill="#336791"
          />
        </svg>
      );

    case 'GitHub':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#24292E">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case 'Pandas':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="11" width="4" height="10" rx="1" fill="#150458" />
          <rect x="10" y="3" width="4" height="18" rx="1" fill="#FF5722" />
          <rect x="17" y="7" width="4" height="14" rx="1" fill="#00BCD4" />
        </svg>
      );

    case 'NumPy':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
            fill="#4DABCF"
          />
          <path
            d="M12 2v10l9-5-9-5zM3 7l9 5v10L3 17V7z"
            fill="#013243"
            opacity="0.3"
          />
          <path
            d="M9 8.5v7l6-3.5v-7l-6 3.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'Scikit-learn':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="14" r="5" fill="#3499CD" opacity="0.85" />
          <circle cx="15" cy="10" r="5" fill="#F7931E" opacity="0.85" />
          <path
            d="M12 8.5a5 5 0 0 0-1.8 3.5 5 5 0 0 0 3.6 1.8 5 5 0 0 0 1.8-3.5 5 5 0 0 0-3.6-1.8z"
            fill="#236184"
          />
        </svg>
      );

    case 'Notion':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#000000" />
          <path
            d="M6 7.5v9h2.2l4.8-6.8v6.8h2.2v-9h-2.2L8.2 14.3V7.5H6z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'SHAP':
    case 'XAI':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#8B5CF6" />
          <path
            d="M6 16l3.5-5 3 3.5 5.5-7.5"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="16" r="1.8" fill="#FFFFFF" />
          <circle cx="9.5" cy="11" r="1.8" fill="#FFFFFF" />
          <circle cx="12.5" cy="14.5" r="1.8" fill="#FFFFFF" />
          <circle cx="18" cy="7" r="1.8" fill="#FFFFFF" />
        </svg>
      );

    default:
      return (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: '10px',
            background: 'var(--canva-card-tan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: `${size * 0.45}px`,
            color: 'var(--canva-brown-dark)',
          }}
        >
          {name.charAt(0)}
        </div>
      );
  }
};
