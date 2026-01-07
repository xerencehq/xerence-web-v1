import { theme } from '@/styles/theme';

describe('Theme Configuration', () => {
  describe('colors', () => {
    it('should have all required color tokens', () => {
      expect(theme.colors.background).toBeDefined();
      expect(theme.colors.white).toBeDefined();
      expect(theme.colors.primary).toBeDefined();
      expect(theme.colors.lightGray).toBeDefined();
    });

    it('should have valid hex color values', () => {
      const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      expect(theme.colors.background).toMatch(hexRegex);
      expect(theme.colors.primary).toMatch(hexRegex);
    });

    it('should maintain brand colors', () => {
      expect(theme.colors.background).toBe('#070606');
      expect(theme.colors.primary).toBe('#ECFF88');
      expect(theme.colors.green).toBe('#ECFF88');
    });
  });

  describe('fonts', () => {
    it('should have primary and mono font stacks', () => {
      expect(theme.fonts.primary).toContain('SF Pro Display');
      expect(theme.fonts.mono).toContain('SF Mono');
    });
  });

  describe('fontSizes', () => {
    it('should have all size tokens', () => {
      expect(theme.fontSizes.xs).toBeDefined();
      expect(theme.fontSizes.base).toBeDefined();
      expect(theme.fontSizes['7xl']).toBeDefined();
    });

    it('should use rem units', () => {
      expect(theme.fontSizes.base).toBe('1rem');
      expect(theme.fontSizes.lg).toContain('rem');
    });
  });

  describe('spacing', () => {
    it('should have spacing scale', () => {
      expect(theme.spacing[0]).toBe('0');
      expect(theme.spacing[4]).toBe('1rem');
      expect(theme.spacing[8]).toBe('2rem');
    });
  });

  describe('breakpoints', () => {
    it('should have mobile breakpoint at 768px', () => {
      expect(theme.breakpoints.md).toBe('768px');
    });

    it('should have ascending breakpoint values', () => {
      const values = Object.values(theme.breakpoints).map(v => parseInt(v));
      for (let i = 1; i < values.length; i++) {
        expect(values[i]).toBeGreaterThan(values[i - 1]);
      }
    });
  });

  describe('container', () => {
    it('should have max width defined', () => {
      expect(theme.container.maxWidth).toBe('1440px');
    });

    it('should have responsive padding', () => {
      expect(theme.container.padding.mobile).toBeDefined();
      expect(theme.container.padding.tablet).toBeDefined();
      expect(theme.container.padding.desktop).toBeDefined();
    });
  });

  describe('zIndex', () => {
    it('should have layering scale', () => {
      expect(theme.zIndex.base).toBeLessThan(theme.zIndex.dropdown);
      expect(theme.zIndex.dropdown).toBeLessThan(theme.zIndex.modal);
      expect(theme.zIndex.modal).toBeLessThan(theme.zIndex.toast);
    });
  });
});
