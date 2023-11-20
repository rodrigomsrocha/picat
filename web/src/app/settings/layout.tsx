import { Separator } from '@/components/ui/separator'
import { SidebarNav } from './components/account-sidebar'

interface AccountSettingsLayoutProps {
  children: React.ReactNode
}

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/settings',
  },
  {
    title: 'Stats',
    href: '/settings/stats',
  },
  {
    title: 'New post',
    href: '/settings/new-post',
  },
]

export default function AccountLayout({
  children,
}: AccountSettingsLayoutProps) {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Settings</h1>
        <span className="leading-none text-muted-foreground">
          Manage your account settings.
        </span>
      </header>
      <Separator />
      <div className="flex gap-8">
        <aside className="w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-xl">{children}</div>
      </div>
    </div>
  )
}
