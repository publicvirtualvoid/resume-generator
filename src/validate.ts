import Ajv from "ajv";
import JsonSchema from "resume-schema/schema.json";

export function validateSchema(resume: any) {
  const ajv = new Ajv();
  const validate = ajv.compile(JsonSchema);
  const valid = validate(resume);
  if (!valid) {
    throw new Error(validate.errors?.join("\n"));
  }
}