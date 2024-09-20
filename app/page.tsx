import { TypographyH1 } from '@/components/typography/typography';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TypographyH1>Gracie Competitions</TypographyH1>
        <p>Join our community and participate in exciting competitions!</p>
        <p>Have your competitors already?</p>
        <Button variant="default">Upload now!</Button>
      </main>
    </div>
  );
}
