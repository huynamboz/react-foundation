import { navigate } from ".";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ to, children, className }: LinkProps) => {
  // const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};
