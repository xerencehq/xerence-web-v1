'use client';
import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';
import ContactUsButton from '@/components/Common/ContactUsButton';
import Link from 'next/link';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
       <Link href="mailto:hello@xerence.com">
        <Pill>
          <span>Let&apos;s chat</span>
          <Image src={ic_chevron_right} alt="chevron-right" />
        </Pill></Link>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <ContactUsButton padding="1rem 2rem" />
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
