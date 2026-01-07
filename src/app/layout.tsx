import Layout from '@/components/Layout';
import { GoogleAnalytics } from '@/components/Common/Analytics';
import {
  rootMetadata,
  organizationJsonLd,
  websiteJsonLd,
  renderJsonLd,
} from '@/lib/seo';
import './globals.css';

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: renderJsonLd(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: renderJsonLd(websiteJsonLd),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Layout>
          <div id="main-content">{children}</div>
        </Layout>
      </body>
    </html>
  );
}
