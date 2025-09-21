import React from "react";
import Image from "next/image";

import Logo from "../assets/locus-thumbtack-black.png";

export default function Privacy() {
  return (
    <div className="w-full min-h-screen px-16 py-8 gap-10 flex flex-col">
      <div className="flex gap-4 items-center">
        <Image src={Logo} alt="Locus Logo" width={48} height={48} />
        <p className="comic-relief text-3xl">Locus</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-4xl comic-relief">Privacy Policy for Locus</p>
        <h2 className="text-lg comic-relief">
          Effective Date: Sunday, September 21, 2025
        </h2>
      </div>

      <div className="max-w-3/4 flex flex-col gap-3">
        <ThemeText text={"Thank you for using Locus."} />
        <ThemeText
          text={
            // 'This Privacy Policy describes how we collect, use, and process your information, including personal information, in conjunction with your access to and use of the Locus mobile application and website (collectively, the "Services").'
            'This Privacy Policy describes how we collect, use, and process your information, including personal information, in conjunction with your access to and use of the Locus mobile application ("the Service").'
          }
        />
        <ThemeText text={"1. Information We Collect:"} bold={true} />
        <ThemeText text={"We collect three main categories of information:"} />
        <ThemeText text={"a. Information You Provide to Us:"} />
        <ThemeText
          text={
            "Account Information: When you create an account, we require certain information such as your name and email address. To comply with app store guidelines, we also provide a straightforward method for you to delete your account and associated personal data from within the app."
          }
        />
        <ThemeText
          text={
            "Profile Information: You may choose to provide additional information to build your profile by responding to our onboarding process. This includes your answers to questions about your preferences, personality, and choices in various situations, which may involve selecting from provided text or image options."
          }
        />
        <ThemeText
          text={
            "User Content: We collect information you post through the Service, such as your preferences, saved locations, lists, notes, and information about your linked partner's account necessary to provide the service."
          }
        />
        <ThemeText
          text={
            "Communications: When you contact us for support or otherwise communicate with us, we collect information about your communication and any information you choose to provide."
          }
        />
        <ThemeText
          text={
            "b. Information We Automatically Collect from Your Use of the Service:"
          }
        />
        <ThemeText
          text={
            "Location Information: When you use our Service, we may collect precise geolocation data from your mobile device via GPS. This collection occurs only when the app is open and in use. We require this information to provide the core location-based features of our service, such as finding and suggesting nearby places for you and your partner. You can control or disable the use of location service at any time through your device's settings, though this will significantly limit the functionality of our Service."
          }
        />
        <ThemeText
          text={
            "Usage Information: We collect information about your interactions with the Service, such as the content you view, your ratings about places, and other actions you take on the app."
          }
        />
        <ThemeText
          text={
            "Log Data and Device Information: We automatically collect log data and device information when you access and use the Service. This information includes, among other things, your IP address, operating system, device information, and dates and times of your access."
          }
        />
        <ThemeText
          text={
            "c. Information We Collect from Third Parties: Third-Party Service: If you link, connect, or log in to your Locus account with a third-party service (e.g., Google), the third-party service may send us information such as your registration, profile information, and friend list from that service. The information we receive from these service varies and is controlled by that service or as authorized by you via your privacy settings at that service."
          }
        />
        <ThemeText text={"2. How We Use The Information:"} bold={true} />
        <ThemeText
          text={
            "We Collect We use, store, and process information about you to provide, understand, improve, and develop the Service, create and maintain a trusted and safer environment, and comply with our legal obligations. This includes:"
          }
        />
        <ThemeText
          text={
            "Providing and Improving Our Service: Enable you to access and use the Service. Provide the core functionality of suggesting and deciding on places to go with your partner. Operate, protect, improve, and optimize the user experience."
          }
        />
        <ThemeText
          text={
            "Personalization: To personalize and customize your experience based on your interactions, search history, and preferences."
          }
        />
        <ThemeText
          text={
            "Communication: To send you service messages, updates, security alerts, and account notifications."
          }
        />
        <ThemeText
          text={
            "Safety and Security: To detect and prevent fraud, spam, abuse, security incidents, and other harmful activity."
          }
        />
        <ThemeText
          text={"3. How We Share Your Information With Your Linked Partner:"}
          bold={true}
        />
        <ThemeText
          text={
            "Your profile information, activity, saved places, and preferences are shared with your linked partner within the Service to enable the core collaborative features of the app."
          }
        />
        <ThemeText
          text={
            "Service Providers: We may share your information with third-party service providers who help us provide our Service, such as cloud hosting (e.g., AWS, Google Cloud), analytics, and mapping service (e.g., Google Maps API). These providers have limited access to your information to perform these tasks on our behalf and are contractually obligated to protect it."
          }
        />
        <ThemeText
          text={
            "Compliance with Law and Legal Requests: We may disclose your information to courts, law enforcement, or government authorities if we are required or permitted to do so by law or in a good faith belief that such action is necessary to comply with a legal obligation."
          }
        />
        <ThemeText
          text={
            "Business Transfers: If Locus undertakes or is involved in any merger, acquisition, reorganization, sale of assets, bankruptcy, or insolvency event, then we may sell, transfer, or share some or all of our assets, including your information."
          }
        />
        <ThemeText text={"4. Your Rights and Choices:"} bold={true} />

        <ThemeText text={"You have control over your personal information."} />

        <ThemeText
          text={
            "Access and Update: You may review and update the information in your account at any time by logging into your account settings within the app."
          }
        />
        <ThemeText
          text={
            "Account Deletion: In accordance with App Store guidelines, you can initiate the deletion of your account and associated personal data directly from the account settings screen within our app. You may also contact us at mylocusapp@gmail.com to request deletion. Please note that we may retain certain anonymized information or data required by law or for legitimate business purposes (such as security and fraud prevention). "
          }
        />
        <ThemeText text={"5. Data Security"} bold={true} />

        <ThemeText
          text={
            "We are continuously implementing and updating administrative, technical, and physical security measures to help protect your information against unauthorized access, loss, destruction, or alteration. However, no method of transmission over the Internet or method of electronic storage is 100% secure."
          }
        />

        <ThemeText text={"6. Children's Privacy"} bold={true} />

        <ThemeText
          text={
            "Our Service are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information. If you become aware that your child has provided us with personal information without your consent, please contact us."
          }
        />

        <ThemeText text={"7. Changes to This Privacy Policy"} bold={true} />

        <ThemeText
          text={
            'We may change this Privacy Policy at any time. If we make material changes, we will notify you either by posting the changed Privacy Policy on the website or by sending you an email notification. We will also update the "Effective Date" at the top of this Privacy Policy.'
          }
        />
        <ThemeText text={"8. Contact Us"} bold={true} />
        <ThemeText
          text={
            "If you have any questions or complaints about this Privacy Policy or our information-handling practices, you may email us at: mylocusapp@gmail.com"
          }
        />
      </div>
    </div>
  );
}

function ThemeText({ text, bold = false }) {
  if (bold) {
    return <p className="lato-bold text-lg">{text}</p>;
  } else {
    return <p className="lato text-lg">{text}</p>;
  }
}
