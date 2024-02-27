interface PrivacyPolicyPageProps {}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({}) => {
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="h-full flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl"> Privacy Policy</h1>
          <p>Effective: February 15, 2024 | Last Revised: February 15, 2024</p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Introduction</h1>
          <p className="text-sm text-muted-foreground leading-8">
            At ISU-Hub, we believe that privacy is a right. We want to empower
            our users to be the masters of their identity. In this privacy
            policy, we want to help you understand how and why ISU-Hub
            ("ISU-Hub," "we" or "us") collects and uses information about you
            when you use our website (collectively, the "Service") or when you
            otherwise interact with us or receive a communication from us.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Information Collection and Use</h1>
          <p className="text-sm text-muted-foreground leading-8">
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl ">Types of Data Collected</h2>
          <h2 className="font-bold ">
            {" "}
            <br />· Personal Data
          </h2>
          <p className="text-sm text-muted-foreground leading-8">
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you ("Personal Data"). Personally, identifiable information
            may include, but is not limited to:
          </p>
          <ul className="text-sm list-disc pl-8 space-y-3">
            <li>Email address</li>
            <li>Username</li>
            <li>
              Optional: Information about student majors (if provided
              voluntarily)
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl">Use of Data</h1>

          <p className="text-sm text-muted-foreground leading-8">
            We use the collected data for various purposes:
          </p>
          <ul className="text-sm list-disc pl-8 space-y-3">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide user care and support</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl">Log Data</h1>

          <p className="text-sm text-muted-foreground leading-8">
            We may also collect information that your browser sends whenever you
            visit our Service ("Log Data"). This Log Data may include
            information such as your computer's Internet Protocol ("IP")
            address, browser type, browser version, the pages of our Service
            that you visit, the time and date of your visit, the time spent on
            those pages, and other statistics.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl">Cookies</h1>

          <p className="text-sm text-muted-foreground leading-8">
            Cookies are files with a small amount of data, which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            website and stored on your device. We use cookies to collect
            information and improve our Service.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl">GDPR Compliance</h1>

          <p className="text-sm text-muted-foreground leading-8">
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights. ISU-Hub aims to take reasonable
            steps to allow you to correct, amend, delete, or limit the use of
            your Personal Data.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl">CCPA Compliance</h1>

          <p className="text-sm text-muted-foreground leading-8">
            The California Consumer Privacy Act (CCPA) provides certain rights
            to California residents, including the right to request information
            about the categories of personal information we collect and the
            purposes for which we use such information.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl">Children's Information</h1>

          <p className="text-sm text-muted-foreground leading-8">
            Our Service does not address anyone under the age of 13
            ("Children"). We do not knowingly collect personally identifiable
            information from anyone under the age of 13. If you are a parent or
            guardian and beleive that your child provided this kind of
            information on our website, we strongly encourage you to contact us
            immediately and we will do our best efforts to promptly remove such
            information from our records.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
