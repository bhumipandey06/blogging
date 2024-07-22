import { z } from "zod";

export const signinInput=z.object({
    email: z.string().email(),
    password: z.string().min(6),
})
export type SigninInput=z.infer<typeof signinInput>

export const signupinput=z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})
export type SignupInput=z.infer<typeof signupinput>

export const updateblog=z.object({
    id: z.string(),
    title: z.string(),
    content: z.string()
})
export type Updateblog=z.infer<typeof updateblog>

export const createblog=z.object({
    title: z.string(),
    content: z.string()
})
export type Createblog=z.infer<typeof createblog>