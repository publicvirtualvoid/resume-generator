import Ajv from "ajv";
import JsonSchema from "resume-schema/schema.json";
import { ResumeSchema } from "./resume-schema";

export function validateSchema(resume: ResumeSchema) {
  const ajv = new Ajv({
    validateSchema: false,
    strict: false,
    validateFormats: false,
  });
  const validate = ajv.compile(JsonSchema);
  const valid = validate(resume);
  if (!valid) {
    console.log(validate.errors);
  }
}
