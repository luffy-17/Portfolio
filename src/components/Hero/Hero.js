import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, I am a 3rd-year Computer Science student💻, currently pursuing my bachelor's degree in Russia 😀 Data Science Enthusiast.
        </SectionText>

      </LeftSection>
    </Section>
  </>
);

export default Hero;
