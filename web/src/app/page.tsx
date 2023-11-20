import { Photo } from '@/components/photo'
import { PicModal } from '@/components/pic-modal'

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4 [&_div:nth-child(2)]:col-[2/4] [&_div:nth-child(2)]:row-span-2">
        <PicModal>
          <Photo />
        </PicModal>
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
      <div className="grid grid-cols-3 gap-4 [&_div:nth-child(2)]:col-[2/4] [&_div:nth-child(2)]:row-span-2">
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
    </div>
  )
}
