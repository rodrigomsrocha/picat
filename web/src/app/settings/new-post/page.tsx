import { Separator } from '@/components/ui/separator'
import { NewPostForm } from '../components/new-post-form'

export default function NewPostPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl">New post</h1>
      <Separator />
      <NewPostForm />
    </div>
  )
}
