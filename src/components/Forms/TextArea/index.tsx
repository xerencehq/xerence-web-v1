'use client';

import React, { forwardRef } from 'react';
import { StyledTextArea } from './styles';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error = false, resize = 'vertical', className, ...props }, ref) => {
    return (
      <StyledTextArea
        ref={ref}
        $error={error}
        $resize={resize}
        className={className}
        data-testid="textarea"
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
