import { partnerLogos } from './PartnerLogos';
import { PartnerType } from './types';

export const partnerData: PartnerType[] = partnerLogos.map((LogoComponent, index) => ({
  LogoComponent,
  url: `https://example.com/partner${index + 1}`,
}));