import React from "react";
import res from "../../resume.json";
import { ResumeSchema } from "../resume-schema";
import { validateSchema } from "../validate";

// validate
validateSchema(res);
const resume = res as Omit<ResumeSchema, "$schema">;

const IndexPage = () => {
  return <div>foo</div>;
};

export default IndexPage;

export const Head = () => <title>{resume.basics?.name}'s resume</title>;
