'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainerVariant, staggerItemVariant } from '@/styles';
import type { Milestone } from '@/data/milestones';
import {
  MilestonesWrapper,
  MilestonesContainer,
  MilestonesList,
  MilestoneItem,
  MilestoneDot,
  MilestoneYear,
  MilestoneContent,
  MilestoneTitle,
  MilestoneDescription,
  SectionTitle,
} from './styles';

export interface MilestonesProps {
  milestones: Milestone[];
}

export const Milestones: React.FC<MilestonesProps> = ({ milestones }) => {
  return (
    <MilestonesWrapper data-testid="about-milestones">
      <MilestonesContainer>
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeInUpVariant}>
            <SectionTitle>Our Journey</SectionTitle>
          </motion.div>

          <MilestonesList>
            {milestones.map((milestone, index) => (
              <MilestoneItem
                key={milestone.year}
                as={motion.article}
                variants={staggerItemVariant}
                $isEven={index % 2 === 0}
                data-testid={`milestone-item-${index}`}
              >
                <MilestoneDot />
                <MilestoneYear data-testid="milestone-year">
                  {milestone.year}
                </MilestoneYear>
                <MilestoneContent>
                  <MilestoneTitle>{milestone.title}</MilestoneTitle>
                  <MilestoneDescription>{milestone.description}</MilestoneDescription>
                </MilestoneContent>
              </MilestoneItem>
            ))}
          </MilestonesList>
        </motion.div>
      </MilestonesContainer>
    </MilestonesWrapper>
  );
};
