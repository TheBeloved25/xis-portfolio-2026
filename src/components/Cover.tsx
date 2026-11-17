import Image from 'next/image';
import { Diagram } from './Diagram';

export function Cover({
  cover,
  priority = false,
}: {
  cover: { src?: string; seed: number; alt: string };
  priority?: boolean;
}) {
  if (cover.src) {
    return (
      <span className="cover cover--image">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1100px) 60vw, 45vw"
          style={{ objectFit: 'cover' }}
          loading={priority ? 'eager' : 'lazy'}
        />
      </span>
    );
  }
  return (
    <span className="cover cover--diagram">
      <Diagram seed={cover.seed} alt={cover.alt} />
    </span>
  );
}
