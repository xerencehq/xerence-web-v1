// Mock for next/navigation
export const useRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
});

export const usePathname = () => '/';

export const useSearchParams = () => new URLSearchParams();

export const useParams = () => ({});

export const redirect = jest.fn();

export const notFound = jest.fn();

// For next/link
export const useSelectedLayoutSegment = () => null;
export const useSelectedLayoutSegments = () => [];
