import { z } from 'zod'

export const Stock = z.object({
    accountId: z.number(),
    amount: z.number(),
    codeName: z.string(),
    createdAt: z.coerce.date(),
    price: z.number(),
})

export type Stock = z.infer<typeof Stock>