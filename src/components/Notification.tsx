'use client';

import React from 'react';

export interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
}

export default function Notification({
  message,
  type,
  isVisible,
}: NotificationProps) {
  if (!isVisible) return null;

  return (
    <div
      className="modern-toast"
      style={{
        backgroundColor: type === 'success' ? '#2e7d32' : '#c62828',
        color: '#ffffff',
      }}
      role="alert"
    >
      <span>{type === 'success' ? '🌸' : '⚠️'}</span>
      <span>{message}</span>
    </div>
  );
}
