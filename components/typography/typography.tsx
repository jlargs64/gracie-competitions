interface TypographyProps {
  children: React.ReactNode;
}

export const TypographyH1: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

export const TypographyH2: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h1>
  );
};
