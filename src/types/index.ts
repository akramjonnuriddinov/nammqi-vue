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
  id: string
  title: string
  short_description: string
  description: string
  image: string
  date: string
  category: string
  content: string
  gallery: string[]
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

export interface Teacher {
  fullname: string
  position: string
  phone_number: string
  email: string
  linkedin: string
  work_experience: string[]
  education: string[]
  skills: string[]
  about: string
}