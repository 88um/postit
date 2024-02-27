import Link from "next/link";

interface PoliciesPageProps {}

const PoliciesPage: React.FC<PoliciesPageProps> = ({}) => {
  return (
    <div className="h-screen container max-w-3xl mx-auto">
      <div className="w-full flex justify-center">
        <div className="flex flex-col pt-14 space-y-8">
          <Link className="hover:cursor-pointer " href='/policies/privacy-policy'>
            <h1 className="text-3xl">📝 Privacy Policy -&gt;</h1>
            <p className="text-sm text-muted-foreground leading-8">
              View our privacy policy and how we use your data.
            </p>
          </Link>
          <Link className="hover:cursor-pointer pt-4" href='/policies/user-agreement'>
            <h1 className="text-3xl">🤝 User Agreement -&gt;</h1>
            <p className="text-sm text-muted-foreground leading-8">
              View our terms of service and user agreement.
            </p>
          </Link>
          <Link className="hover:cursor-pointer pt-4" href='/policies/guidelines'>
            <h1 className="text-3xl">👥 Community Guidelines -&gt;</h1>
            <p className="text-sm text-muted-foreground leading-8">
              View our community guidelines and code of conduct.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;
