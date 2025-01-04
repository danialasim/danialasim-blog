import Image from 'next/image'

interface FeatureImageProps {
  src: string
  alt: string
  priority?: boolean
}

export function FeatureImage({ src, alt, priority = false }: FeatureImageProps) {
  return (
    <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(min-width: 1280px) 1200px, (min-width: 1024px) 928px, (min-width: 768px) 704px, 100vw"
      />
    </div>
  )
} 