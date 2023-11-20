import { Eye, SendHorizonal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import cat from '../../assets/images/place.jpg'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Textarea } from '../ui/textarea'

interface PicModalProps {
  children: ReactNode
}

export function PicModal({ children }: PicModalProps) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-fit max-w-5xl p-0">
        <div className="grid h-[36rem] grid-cols-[36rem,20rem] grid-rows-[auto,1fr,auto]">
          <Image
            className="row-span-full h-full rounded-l object-cover"
            src={cat}
            alt=""
          />
          <header className="space-y-4 p-6">
            <p className="flex items-center justify-between text-sm text-muted-foreground">
              <Link className="hover:underline" href="#">
                @rodm
              </Link>
              <span className="flex items-center">
                <Eye className="mr-2" />
                25000
              </span>
            </p>
            <h1 className="relative text-4xl before:absolute before:-left-1 before:top-0 before:-z-10 before:h-4 before:w-4 before:rounded before:bg-secondary">
              Elle
            </h1>
            <ul className="flex gap-4 font-bold">
              <li>2kg</li>
              <li>1 y/o</li>
            </ul>
          </header>
          <ul className="px-6">
            <li>
              <strong>rod21:</strong> lindo
            </li>
          </ul>
          <form className="flex items-center gap-2 p-6">
            <Textarea className="resize-none" />
            <Button type="submit" variant="link" size="icon">
              <SendHorizonal />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
