export interface NeoTab {
  id: string | number
  label: string
  [key: string]: any
}

export interface NeoTabsProps {
  tabs: NeoTab[]
}
