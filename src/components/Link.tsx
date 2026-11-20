import NextLink from 'next/link';
import type { ComponentProps } from 'react';

// Static export has no RSC prefetch payloads. Disable them everywhere so the
// browser never requests the nonexistent __next.*.__PAGE__.txt files.
export default function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink {...props} prefetch={false} />;
}
