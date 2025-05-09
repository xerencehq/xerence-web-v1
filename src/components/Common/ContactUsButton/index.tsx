import Link from 'next/link';
import { LinkTo } from './styles';

const ContactUsButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="mailto:hello@xerence.com"
    >
      Contact Us
    </LinkTo>
  );
};

export default ContactUsButton;
