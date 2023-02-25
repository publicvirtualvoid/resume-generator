import React from "react";
import res from "../../resume.json";
import { ResumeSchema } from "../resume-schema";
import { validateSchema } from "../validate";

// load
const resume = res as Omit<ResumeSchema, "$schema">;

// validate
validateSchema(resume);

const IndexPage = () => {
  return <div>foo</div>;
};

export default IndexPage;

export const Head = () => <title>Your resume</title>;
