import { z } from 'zod'

export const Stock = z.object({
    accountId: z.number(),
    // amount: z.number(), 好像沒用到?
    codeName: z.string(),
    code: z.string(),
    createdAt: z.coerce.date(),
    // price: z.number(), 這個好像也不用顯示?
    zPrice: z.number(),
    capital: z.number(),
    cost: z.number(),
    pl: z.number(),
    plPercent: z.number(),
})

export type Stock = z.infer<typeof Stock>