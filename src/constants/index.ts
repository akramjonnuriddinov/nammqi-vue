import { NavCategory, Faculty } from '@/types'

export const navCategories: NavCategory[] = [
  {
    title: 'Tuzilma',
    isInnerLinks: true,
    path: '',
    description:
      'XX asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: 'Institut Ustavi', href: '/intitute-charter' },
          { title: 'Institut haqida', href: '/intitute' },
          { title: 'Rahbariyat', href: '/rectorat' },
          { title: 'Rekvizitlar', href: '/props' },
        ],
      },
      {
        links: [
          { title: 'Fakultetlar', href: '/faculties' },
          { title: 'Kafedralar', href: '/departments' },
          { title: "Bo'limlar", href: '/branches' },
          { title: "O'qituvchilar", href: '/teachers' },
        ],
      },
    ],
  },
  {
    title: 'Qabul',
    isInnerLinks: true,
    path: '',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: 'Qabul 2024', href: '/qabul-2024' },
          { title: 'Bakalavr', href: '/bachelor' }
        ],
      },
      {
        links: [
          { title: 'Magistratura', href: '/masters-degree' },
        ],
      },
    ],
  },
  {
    title: 'Axborot xizmati',
    isInnerLinks: true,
    path: '',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: 'Yangiliklar', href: '/news' },
          { title: "E'lonlar", href: '/announcements' },
          { title: 'Tadbirlar', href: '/events' },
        ],
      },
      {
        links: [
          { title: 'Videogalereya', href: '/video-gallery' },
          { title: 'Fotogalareya', href: '/photo-gallery' },
        ],
      },
    ],
  },
  {
    title: "Bog'lanish",
    isInnerLinks: false,
    path: '/contact',
    description: '',
    columns: [],
  },
  {
    title: '',
    isInnerLinks: false,
    path: '',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
        ],
      },
      {
        links: [
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
        ],
      },
    ],
  },
]

export const events = [
  {
    date: '15 noyabr 2024',
    description: 'Концерт «В ритме танца через континенты»',
  },
  {
    date: '3 noyabr 2024',
    description: 'Вечер музыки для органа и гобоя «Два Баха: отец и сын»',
  },
  { date: '23 oktabr 2024', description: 'Лекция-концерт «Музыка для всех»' },
  {
    date: '15 noyabr 2024',
    description: 'Концерт «В ритме танца через континенты»',
  },
  {
    date: '3 noyabr 2024',
    description: 'Вечер музыки для органа и гобоя «Два Баха: отец и сын»',
  },
  { date: '23 oktabr 2024', description: 'Лекция-концерт «Музыка для всех»' },
]

export const cards = [
  {
    link: 'https://student.nammqi.uz/dashboard/login',
    icon: 'https://tsue.uz/media/icon/Frame_197556_NwQI4Vl.png',
    hoverIcon: 'https://tsue.uz/media/icon/hovered_NMw9C2X.png',
    title: 'Hemis (talaba)',
    description: 'Nammqi hemis tizimi',
  },
  {
    link: 'https://hemis.nammqi.uz/dashboard/login',
    icon: 'https://tsue.uz/media/icon/Frame_197556_NwQI4Vl_dqn1Ego.png',
    hoverIcon: 'https://tsue.uz/media/icon/hovered_NMw9C2X_CEr45z9.png',
    title: "Hemis (o'qituvchi)",
    description: 'Nammqi hemis tizimi',
  },
  {
    link: 'https://nammqi-schedule.netlify.app/',
    icon: 'https://tsue.uz/media/icon/Frame_197556_NwQI4Vl_JaaOcdJ.png',
    hoverIcon: 'https://tsue.uz/media/icon/hovered_NMw9C2X_L7kpGm8.png',
    title: 'Dars jadvali',
    description: 'Nammqi dars jadvali',
  },
  {
    link: 'https://elektronkutubxona.nammqi.uz/uz',
    icon: 'https://tsue.uz/media/icon/Frame_197559_mLDYfIM.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197552_cLFs5Ov.png',
    title: 'Elektron kutubxona',
    description: 'Nammqi dars jadvali',
  },
  {
    link: 'http://video.nammqi.uz/',
    icon: 'https://tsue.uz/media/icon/Frame_1975514.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197551_67eivVm.png',
    title: 'Video darslar',
    description: 'Nammqi videodarslar',
  },
  {
    link: 'http://mtt.nammqi.uz/',
    icon: 'https://tsue.uz/media/icon/Frame_1975514.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197551_67eivVm.png',
    title: 'Moodle',
    description: 'Nammqi moodle tizimi',
  },
  {
    link: 'https://t.me/NamMQI_rectori',
    icon: 'https://tsue.uz/media/icon/Frame_1975514.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197551_67eivVm.png',
    title: '@NamMQI_rectori',
    description: "Rektor bilan bog'lanish",
  },
  {
    link: 'https://my.gov.uz/oz/service/870',
    icon: 'https://tsue.uz/media/icon/Frame_1975514.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197551_67eivVm.png',
    title: '"TTJ"ga onlayn ariza',
    description: 'My.gov orqali ariza berish',
  },
]

export const faculties: Faculty[] = [
  {
    name: 'Iqtisodiyot va Boshqaruv fakulteti',
    icon: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-48.jpg', // Replace with actual icon path
    departments: [
      {
        name: "Temir yo'l transporti muhandislik fakulteti",
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Tabiiy fanlar',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Energetika va Mehnat muhozasi fakulteti',
    icon: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-58.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image: 'https://my.nammqi.uz/storage/galleries/2023-03-09-105525.jpg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Mashinasozlik fakulteti',
    icon: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-37.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Transport fakulteti',
    icon: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-52.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Muhandislik kommunikatsiyalari fakulteti',
    icon: 'https://my.nammqi.uz/storage/general/2023-03-29-165018.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Sanoatni Axborotlashtirish fakulteti',
    icon: 'https://my.nammqi.uz/storage/img-20231226-151252-748.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Qurilish fakulteti',
    icon: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-48.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
]
