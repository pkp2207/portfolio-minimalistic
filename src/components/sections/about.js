import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'TypeScript / Python',
    'React / Next.js',
    'Node.js / FastAPI',
    'PostgreSQL / MongoDB',
    'AWS / Docker / Kubernetes',
    'Jenkins / CI-CD',
    'LLM / GenAI Integration',
    'Telemetry & Observability',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Param — a backend-leaning full-stack engineer who enjoys shipping
              production systems with the boring parts done right: telemetry, automation, tests, and
              observability. I'm in my final year of B.Tech Computer Science at{' '}
              <a href="https://www.svnit.ac.in/" style={{ color: 'var(--lightest-slate)' }}>
                SVNIT Surat
              </a>{' '}
              with a CGPA of 9.17/10.
            </p>

            <p>
              I'm currently a Semester Intern at{' '}
              <a href="https://www.visa.com/" style={{ color: 'var(--lightest-slate)' }}>
                Visa
              </a>
              , building an AI-powered Transaction Log Analyser agent that surfaces anomalies in
              high-volume financial data. I previously returned from a summer internship there where
              I shipped a release automation platform that cut deployment time from 45 to 15 minutes
              and built a GenAI log-analysis tool that reduced MTTR by 90%. Before Visa, I
              contracted with{' '}
              <a href="https://afterquery.com/" style={{ color: 'var(--lightest-slate)' }}>
                AfterQuery
              </a>{' '}
              on structured evaluation workflows for AI systems, and interned at{' '}
              <a
                href="https://www.paragonirrigation.com/"
                style={{ color: 'var(--lightest-slate)' }}>
                Paragon Irrigation Inc.
              </a>{' '}
              building full-stack apps on Next.js, PostgreSQL, and AWS.
            </p>

            <p>
              On the side I compete — Expert on{' '}
              <a href="https://codeforces.com/" style={{ color: 'var(--lightest-slate)' }}>
                Codeforces
              </a>{' '}
              (max 1887) and 5-star on{' '}
              <a href="https://www.codechef.com/" style={{ color: 'var(--lightest-slate)' }}>
                CodeChef
              </a>{' '}
              (max 2080) — and I lead the student ACM chapter at NIT Surat, where we ran DotSlash
              8.0 with 40 teams and 1,100+ registrations. I care about owning features end-to-end:
              from ambiguous problem to metrics dashboard.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/Param Pathak Image.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
