'use client';

import dynamic from 'next/dynamic';

// Lazy load CalendlyEmbed since it's a heavy iframe that loads external resources
const CalendlyEmbed = dynamic(
  () => import('./index'),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          minHeight: '700px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9A9A9A',
        }}
      >
        Loading calendar...
      </div>
    ),
  }
);

interface CalendlyEmbedWrapperProps {
  url: string;
  minHeight?: string;
}

const CalendlyEmbedWrapper: React.FC<CalendlyEmbedWrapperProps> = ({ url, minHeight }) => {
  return <CalendlyEmbed url={url} minHeight={minHeight} />;
};

export default CalendlyEmbedWrapper;
