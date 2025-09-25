import React from "react";
import Logo from "../components/ui/Logo";

export default function page() {
  return (
    <div className="flex-1 px-16 py-8 flex flex-col gap-10">
      <Logo />

      <div className="flex flex-col gap-5 max-w-1/2">
        <h1 className="text-3xl lato mb-4">Having a problem?</h1>

        <p className="text-xl lato">
          We want to know about it. Your feedback regarding issues is genuinely
          important to us.
        </p>

        <p className="text-xl lato">
          Please describe the issue you&apos;re experiencing in detail at{" "}
          <span className="text-xl lato text-blue-500">
            <a href="mailto:locusapp@gmail.com?&subject=Support%20Request&body=Please%20describe%20the%20issue%20you%27re%20experiencing%20in%20detail%20here.">
              locusapp@gmail.com
            </a>
          </span>{" "}
          and we&apos;ll do our best to assist you as quickly as possible.
        </p>
      </div>
    </div>
  );
}
