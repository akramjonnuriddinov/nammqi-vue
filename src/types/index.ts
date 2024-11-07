export interface Link {
  title: string
  href: string
}

export interface Column {
  links: Link[]
}

export interface NavCategory {
  title: string
  isInnerLinks: boolean
  path: string
  description: string
  columns: Column[]
}

export enum EThemes {
  DEFAULT = 'default',
  GREEN = 'green',
  TRANSPARENT = 'transparent',
  RED = 'red',
}

export interface Article {
  id: number
  image: string
  date: string
  category: string
  title: string
}

export interface Department {
  name: string
  image: string
}

export interface Faculty {
  name: string
  icon: string
  departments: Department[]
}
