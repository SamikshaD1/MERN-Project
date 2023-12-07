const z = require("zod")

const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { massage: "Name must be at least pf 3 chars" })
        .max(255, { massage: "Name must not be more than 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(3, { massage: "Email must be at least pf 3 chars" })
        .max(29, { massage: "Email must not be more than 255 characters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { massage: "Phone must be at least pf 3 chars" })
        .max(20, { massage: "Phone must not be more than 255 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(8, { massage: "Password must be at least pf 3 chars" })
        .max(255, { massage: "Password must not be more than 255 characters" })
})


const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(3, { massage: "Email must be at least pf 3 chars" })
        .max(29, { massage: "Email must not be more than 255 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(8, { massage: "Password must be at least pf 3 chars" })
        .max(255, { massage: "Password must not be more than 255 characters" })
})

module.exports = { signupSchema, loginSchema };