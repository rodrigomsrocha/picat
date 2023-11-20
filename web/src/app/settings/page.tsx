import { Separator } from '@/components/ui/separator'
import { UpdateProfileForm } from './components/update-profile-form'

export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-xl">Profile</h1>
        <span className="text-muted-foreground">
          This is how others will see you.
        </span>
      </header>
      <Separator />
      <UpdateProfileForm />
    </div>
  )
}
