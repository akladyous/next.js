'use client';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function ActiveUser() {
  const segment = useSelectedLayoutSegment();

  return <>active user segment {segment}</>;
}
