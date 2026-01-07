import {
  containerStyles,
  flexCenter,
  flexBetween,
  truncate,
  visuallyHidden,
} from '@/styles/mixins';

describe('Style Mixins', () => {
  describe('containerStyles', () => {
    it('should be defined', () => {
      expect(containerStyles).toBeDefined();
    });
  });

  describe('flexCenter', () => {
    it('should be defined', () => {
      expect(flexCenter).toBeDefined();
    });
  });

  describe('flexBetween', () => {
    it('should be defined', () => {
      expect(flexBetween).toBeDefined();
    });
  });

  describe('truncate', () => {
    it('should be defined', () => {
      expect(truncate).toBeDefined();
    });
  });

  describe('visuallyHidden', () => {
    it('should be defined', () => {
      expect(visuallyHidden).toBeDefined();
    });
  });
});
