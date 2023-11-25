// Custom components/libs
import InsightRoll from '@/components/Layouts/InsightRoll';

const InformationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll />
      {children}
    </main>
  );
};

export default InformationLayout;
