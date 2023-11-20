'use client'

import { Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'

export function DarkModeItem() {
  const { setTheme, theme } = useTheme()

  const changeColorMode = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <DropdownMenuItem
      onSelect={(event) => event.preventDefault()}
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Moon className="h-5 w-5" />
        <Label htmlFor="dark-mode">Dark Mode</Label>
      </div>
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={changeColorMode}
        id="dark-mode"
      />
    </DropdownMenuItem>
  )
}
