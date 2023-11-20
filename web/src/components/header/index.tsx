import { Button } from '@/components/ui/button'
import { Cat, Plus } from 'lucide-react'
import Link from 'next/link'
import { UserDropdown } from '../user-dropdown'

export function Header() {
  const user = true
  return (
    <header className="mx-auto flex max-w-4xl items-center justify-between px-4 py-2">
      <Link href="/">
        <h1>
          <Cat size={32} />
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Button variant="secondary" size="icon">
              <Plus />
            </Button>
            <UserDropdown />
          </>
        ) : (
          <>
            <Button variant="ghost">Login</Button>
            <Button>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  )
}
