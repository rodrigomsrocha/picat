import { Eye } from 'lucide-react'
import Image from 'next/image'
import cat from '../../assets/images/place.jpg'

export function Photo() {
  return (
    <div className="group relative overflow-hidden rounded-md">
      <div className="absolute inset-0 hidden items-center justify-center gap-2 bg-primary-foreground/60 text-primary transition-all group-hover:flex">
        <Eye />
        <span>23000</span>
      </div>
      <Image
        className="aspect-square w-full object-cover"
        src={cat}
        alt="gato"
      />
    </div>
  )
}
