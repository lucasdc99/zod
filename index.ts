import { REQUIRED_FIELD } from "@lucactus/variables";
import { z } from "zod";

export const phoneSchema = z
  .string()
  .max(50)
  .transform((value) => {
    if (!value) return value;

    const currentValue = value.replace(/\s/g, "");

    if (currentValue.startsWith("+33")) {
      return currentValue.slice(3);
    }
    if (currentValue.startsWith("0033")) {
      return currentValue.slice(4);
    }
    if (currentValue.startsWith("0")) {
      return currentValue.slice(1);
    }
    return currentValue;
  });

export const idSchema = z.coerce
  .number({ invalid_type_error: REQUIRED_FIELD, required_error: REQUIRED_FIELD })
  .min(1, REQUIRED_FIELD);

export const emailSchema = z.string().email().max(50).toLowerCase();

export { z };
