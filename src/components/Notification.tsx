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
      id="notif-bar"
      className="notif-bar"
      style={{
        display: 'block',
        backgroundColor: type === 'success' ? '#8fad6a' : '#c8312b',
        color: '#fff',
        opacity: isVisible ? 1 : 0,
      }}
      role="alert"
    >
      {message}
    </div>
  );
}
