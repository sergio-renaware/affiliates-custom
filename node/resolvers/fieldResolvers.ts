import type { Affiliates } from 'renawareperu.affiliates-custom'

export const fieldResolvers = {
  Affiliate: {
    affiliateId: (root: Affiliates) => root.id,
  },
}
