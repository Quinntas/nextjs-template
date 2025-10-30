import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Endereço de e-mail inválido.",
  }),
  password: z.string().min(8, {
    message: "A senha deve ter no mínimo 8 caracteres.",
  }),
});
