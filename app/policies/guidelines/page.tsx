interface GuidelinesPageProps {}

const GuidelinesPage: React.FC<GuidelinesPageProps> = ({}) => {
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="h-full flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl"> Community Guidelines</h1>
          <p>Effective: February 15, 2024 | Last Revised: February 15, 2024</p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Introduction</h1>
          <p className="text-sm  leading-8">
            Welcome to ISU-Hub! Our community guidelines are designed to create
            a positive and inclusive environment for all users. By using our
            platform, you agree to abide by these guidelines. Please read them
            carefully.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">General Rules</h1>
          <ul className="text-sm list-disc pl-8 space-y-3">
            <li>Users must be 13 years of age or older.</li>
            <li>
              Respect others: Treat fellow users with kindness and respect.
            </li>
            <li>
              No hate speech, harrassment, or bullying: Do not engage in
              discriminatory or offensive language.
            </li>
            <li>
              Be mindful of privacy: Avoid sharing personal information or
              violating others' privacy.
            </li>
            <li>
              No spam: Refrain from posting irrelevant or excessive content.
            </li>
            <li>
              Impersonation of other users, celebrities, or organizations is not
              allowed.
            </li>
            <li>
              Follow the law: Do not engage in illegal activities or promote
              harmful behavior.
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Content Guidelines</h1>
          <p className="text-sm  leading-8">
            ISU-Hub encourages the sharing of diverse and creative content.
            However, certain types of content are not allowed:
          </p>
          <ul className="text-sm list-disc pl-8 space-y-3">
            <li>Explicit content: Avoid posting explicit or adult content.</li>
            <li>
              Copyright infringement: Do not share content that infringes on the
              intellectual property rights of others.
            </li>
            <li>
              Violence and harm: Refrain from posting content that promotes
              violence or harm.
            </li>
            <li>
              Fake news: Avoid spreading false information or misinformation.
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Commercial Activities</h1>
          <p className="text-sm  leading-8">
            We encourage a community that values genuine interactions and
            contributions. Unapproved commercial activities, such as
            unauthorized advertising, promotional content, or any form of
            solicitation, are not permitted on ISU-Hub without prior approval
            from the moderators.
          </p>
          <p className="text-sm  leading-8">
            If you wish to engage in commercial activities on ISU-Hub, please
            contact the moderators for approval. Approved commercial activities
            must align with our community standards and enhance the overall user
            experience. Unauthorized commercial activities may result in the
            removal of content and, in some cases, account suspension or
            termination.
          </p>
          <p className="text-sm leading-8">
            <strong>Exception:</strong> Charity events organized by valid
            non-profit organizations and general school fundraisers are
            permitted without prior approval. However, they should still adhere
            to the community guidelines and policies.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Community Reporting</h1>
          <p className="text-sm  leading-8">
            At ISU-Hub, we value the collaborative effort of our community to
            maintain a safe and welcoming environment. Users can report content
            that violates community guidelines by using the reporting feature
            available on each post.
          </p>
          <p className="text-sm  leading-8">
            To report a post, click on the three dots located in the top-right
            corner of the post and select the "Report" option. This will forward
            the report to our moderation team for review. Reported content will
            be assessed, and appropriate action, such as modification or
            removal, will be taken if it is deemed harmful or in violation of
            our guidelines.
          </p>
          <p className="text-sm  leading-8">
            False reporting or misuse of the reporting feature may result in
            consequences for the user who submitted the report. Please use this
            feature responsibly to help us maintain a positive and respectful
            community.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">Updates to Guidelines</h1>
          <p className="text-sm  leading-8">
            ISU-Hub reserves the right to update or modify these guidelines at
            any time to reflect changes in our community standards, technology,
            or legal requirements. Users will be notified of any significant
            changes via the platform, and it is the users' responsibility to
            review and comply with the updated guidelines. Continued use of the
            service after such changes constitutes acceptance of the revised
            guidelines.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">User Safety</h1>
          <p className="text-sm  leading-8">
            At ISU-Hub, user safety is our top priority. We strive to create a
            space where all users feel respected and secure. Any behavior or
            content that poses a threat to the safety of individuals within our
            community will not be tolerated. Users are encouraged to report any
            safety concerns or violations of guidelines to our moderation team
            promptly. We are committed to fostering a positive and secure
            environment for all users.
          </p>
        </div>
        {/* Add more sections as needed based on your platform's specific guidelines */}
      </div>
    </div>
  );
};

export default GuidelinesPage;
