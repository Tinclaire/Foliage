import { z } from 'zod'

export const Stock = z.object({
    accountId: z.number(),
    // amount: z.number(), 好像沒用到?
    codeName: z.string(),
    code: z.number(),
    createdAt: z.coerce.date(),
    price: z.number(),
    zPrice: z.number(),
    capital: z.number(),
    pl: z.number(),
    plPercent: z.number(),
})

export type Stock = z.infer<typeof Stock>