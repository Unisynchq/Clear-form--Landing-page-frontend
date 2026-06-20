'use client';

export const CAL_30MIN = 'https://cal.com/abbubakar-mohammed-clearform/30min';
export const CAL_15MIN = 'https://cal.com/abbubakar-mohammed-clearform/15min';

interface CalendlyButtonProps {
  className?: string;
  children?: React.ReactNode;
  url?: string;
}

export default function CalendlyButton({
  className,
  children,
  url = CAL_30MIN,
}: CalendlyButtonProps) {
  const openCal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <button onClick={openCal} className={className}>
      {children ?? 'Book a demo'}
    </button>
  );
}
