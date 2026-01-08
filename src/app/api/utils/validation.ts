import { ZodSchema } from 'zod';

export function Validate<T>(schema: ZodSchema<T>, data: unknown) {
  const result = schema.safeParse(data);

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  return { success: true, data: result.data };
}
