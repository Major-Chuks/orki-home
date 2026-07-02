"use client";

import React, { createContext, useContext, useState, ReactElement } from "react";

const TimelineContext = createContext<{
  activeStep: number;
  nextStep: () => void;
} | null>(null);

export function Timeline({ children }: { children: React.ReactNode }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <TimelineContext.Provider
      value={{ activeStep, nextStep: () => setActiveStep((s) => s + 1) }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

interface TimelineStepProps {
  children: ReactElement;
  step: number; 
}

export function TimelineStep({ children, step }: TimelineStepProps) {
  const ctx = useContext(TimelineContext);

  if (!ctx) {
    return children;
  }

  const { activeStep, nextStep } = ctx;
  
  // The first step (0) dictates the start of the timeline via its own viewport trigger.
  // Subsequent steps bypass the viewport and rely solely on the activeStep state.
  const isFirstStep = step === 0;
  const timelineTrigger = isFirstStep ? undefined : activeStep >= step;

  return React.cloneElement(children, {
    timelineTrigger,
    onAnimationComplete: () => {
      if (children.props.onAnimationComplete) {
        children.props.onAnimationComplete();
      }
      if (activeStep === step) {
        nextStep();
      }
    },
  });
}
