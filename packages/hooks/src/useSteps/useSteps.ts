// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from "react";

const FIRST_STEP = 0;

type IStep<T> = T & {
  id: string;
};

interface IStepProps<T> {
  steps: IStep<T>[];
  initialStep?: number;
}

export function useStep<T>({ steps, initialStep = FIRST_STEP }: IStepProps<T>) {
  const [completed, setCompleted] = useState<string[]>([]);
  const [stepIndex, setStepIndex] = useState<number>(initialStep);
  const currentStep = steps[stepIndex];

  function inRange(index: number | string) {
    if (typeof index === "number") {
      if (index < FIRST_STEP) {
        return FIRST_STEP;
      }
      if (index >= steps.length) {
        return steps.length - 1;
      }
      return index;
    }

    return steps.findIndex((step) => step.id === index) || FIRST_STEP;
  }

  function go(nextStep: number | string) {
    return setStepIndex(inRange(nextStep));
  }

  function next() {
    return go(stepIndex + 1);
  }

  function prev() {
    return go(stepIndex - 1);
  }

  function complete(completeStep: number | string = stepIndex) {
    const completeStepIndex = inRange(completeStep);
    const { id } = steps[completeStepIndex];

    setCompleted([...new Set([...completed, id])]);
  }

  function uncomplete(uncompleteStep: number | string = stepIndex) {
    const uncompleteStepIndex = inRange(uncompleteStep);
    const stepId = steps[uncompleteStepIndex].id;

    setCompleted(completed.filter((id) => id !== stepId));
  }

  function reset(resetStep = initialStep) {
    setStepIndex(resetStep);
    setCompleted([]);
  }

  return {
    complete,
    completed,
    stepIndex,
    navigation: { next, prev, go },
    currentStep,
    uncomplete,
    reset,
  };
}
