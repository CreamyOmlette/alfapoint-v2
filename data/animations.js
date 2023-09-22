export const fadeIn = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  viewport: {
    once: true,
  },
};
export const consecutiveFadeIn = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3 * index,
    },
  }),
  viewport: {
    once: true,
  },
};
