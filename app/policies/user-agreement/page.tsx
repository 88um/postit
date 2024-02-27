interface UserAgreementPageProps {}

const UserAgreementPage: React.FC<UserAgreementPageProps> = ({}) => {
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="h-full flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl"> User Agreement</h1>
          <p>Effective: February 15, 2024 | Last Revised: February 15, 2024</p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Introduction</h1>
          <p className="text-sm text-muted-foreground leading-8">
            Welcome to ISU-Hub! This User Agreement ("Agreement") is a contract
            between you and ISU-Hub ("Platform", "we", "us"). It governs your
            use of ISU-Hub's website and services, so please read it carefully.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Changes to Terms</h1>
          <p className="text-sm text-muted-foreground leading-8">
            The platform reserves the right to modify the terms of the
            agreement. Users will be notified of such changes through a
            prominent notice on the platform.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Acceptance of Terms</h1>
          <p className="text-sm text-muted-foreground leading-8">
            By using our website and services, you agree to be bound by the
            terms and conditions of this Agreement. If you do not agree to these
            terms, please do not use our services.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl">Affiliation with ISU</h1>

          <p className="text-sm text-muted-foreground leading-8">
            ISU-Hub is an independent platform and is not affiliated with or
            endorsed by (ISU). Any references to ISU
            are for informational purposes only, and we do not claim any
            official status or endorsement from the university.
          </p>
        </div>

        <div>
          <h1 className="text-3xl">User Registration</h1>

          <p className="text-sm text-muted-foreground leading-8">
            To access certain features of our services, you may be required to
            register for an account. When registering, you agree to provide
            accurate and complete information. You must be a human over the age
            of 13 to complete registration.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl">User Conduct</h1>

          <p className="text-sm text-muted-foreground leading-8">
            We want our community to be respectful and safe. By using ISU-Hub,
            you agree not to engage in any behavior that violates our community
            guidelines.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl">Content Submission</h1>

          <p className="text-sm text-muted-foreground leading-8">
            Users are responsible for the content they post. Any content that
            violates our terms may be removed, and users may face consequences.
          </p>
        </div>

        {/* Termination of Accounts */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Termination of Accounts</h1>
          <p className="text-sm text-muted-foreground leading-8">
            ISU-Hub reserves the right to terminate user accounts at its
            discretion, especially in cases where there is a repeated violation
            of platform rules or policies.
          </p>
        </div>

        

        {/* Moderation Clause */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Moderation</h1>
          <p className="text-sm text-muted-foreground leading-8">
            Administrators and moderators reserve the right to delete or modify
            content created by users if it is deemed to be in violation of
            community guidelines or policies. Any dispute between users will be
            offciated and resolved by the moderators.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Limitation of Liability</h1>
          <p className="text-sm text-muted-foreground leading-8">
            The platform assumes no liability for any actions or content
            provided by its users. Users are solely responsible for their
            actions on the platform.
          </p>
        </div>

        {/* Governing Law */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Governing Law</h1>
          <p className="text-sm text-muted-foreground leading-8">
            This agreement shall be governed by and construed in accordance with
            the laws of the state of Illinois, United States.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Intellectual Property</h1>
          <p className="text-sm text-muted-foreground leading-8">
            By uploading content to the platform, you grant ISU-Hub
            a non-exclusive, royalty-free, transferable, sub-licensable,
            worldwide license to use, store, display, reproduce, modify, create
            derivative works, perform, and distribute your content on and
            through the platform. This license is solely for the purpose of
            operating, promoting, and improving the platform and services.
          </p>
          <p className="text-sm text-muted-foreground leading-8">
            ISU-Hub respects the intellectual property rights of
            others and expects users to do the same. Users are responsible for
            ensuring that the content they upload does not infringe upon the
            intellectual property rights of any third party. If you believe that
            your intellectual property rights have been violated, please contact
            us.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl">Privacy</h1>

          <p className="text-sm text-muted-foreground leading-8">
            We respect your privacy. Please review our Privacy Policy to
            understand how we collect, use, and protect your personal
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserAgreementPage;
