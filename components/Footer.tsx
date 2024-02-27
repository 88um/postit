'use client';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="text-muted-foreground border-t mt-4 p-6">
        <div className="flex w-full justify-center items-center">
            <p className="text-muted-foreground text-xs font-light">
          &copy; Joshua Solo, 2024. All rights reserved
            </p>
        </div>
    </div>
  );
};

export default Footer;