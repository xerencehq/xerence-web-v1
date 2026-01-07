'use client';

import React from 'react';
import { CalendlyWrapper, CalendlyIframe, FallbackLink } from './styles';

interface CalendlyEmbedProps {
  url: string;
  minHeight?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url,
  minHeight = '700px',
}) => {
  // Build the embed URL with proper parameters
  const embedUrl = `${url}?hide_gdpr_banner=1&background_color=0a0909&text_color=ffffff&primary_color=ecff88`;

  return (
    <CalendlyWrapper data-testid="calendly-embed">
      <CalendlyIframe
        id="calendly-inline-widget"
        src={embedUrl}
        style={{ minWidth: '320px', height: minHeight }}
        frameBorder="0"
        title="Schedule a consultation"
      />
      <FallbackLink>
        Having trouble?{' '}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book directly on Calendly →
        </a>
      </FallbackLink>
    </CalendlyWrapper>
  );
};

export default CalendlyEmbed;
