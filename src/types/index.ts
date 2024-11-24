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
  description: string
  image?: string
  date: string
  category: Category
  content: string
  gallery?: GalleryItem[]
  tags?: string[]
  author?: string
}

enum Category {
  Tech = 'Tech',
  Health = 'Health',
  Lifestyle = 'Lifestyle',
  Sports = 'Sports',
}

type GalleryItem = {
  image: string
  caption?: string
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

export interface WorkExperience {
  company: string
  logo?: string
  role: string
  duration: string
  description?: string
}

export interface TeacherEducation {
  institution: string
  logo?: string
  degree: string
  duration: string
  description?: string
}

export interface Teacher {
  image?: string
  fullname: string
  position: string
  phone_number: string
  email: string
  linkedin: string
  work_experience: WorkExperience[]
  education: TeacherEducation[]
  skills: string[]
  about: string
}
