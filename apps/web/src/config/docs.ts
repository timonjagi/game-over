/**
 * This file contains the configuration for the documentation
 * to be used by files like:
 * - src/components/command-menu.tsx
 * - src/components/mobile-nav.tsx
 * - src/app/[locale]/docs/layout.tsx
 * - src/lib/opendocs/components/docs/pager.tsx
 */

import type { DocsConfig } from '@/lib/opendocs/types/docs'

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      href: '/docs',

      title: {
        en: 'Documentation',
        pt: 'Documentação',
      },
    },
  ],

  sidebarNav: [
    {
      title: {
        en: 'The Universal Decoder Ring',
        pt: 'O Anel Decodificador Universal',
      },

      items: [
        {
          href: '/docs',

          title: {
            en: 'Introduction',
            pt: 'Introdução',
          },

          items: [],
        },
      ],
    },
    {
      title: {
        en: 'Volumes',
        pt: 'Volumes',
      },
      items: [
        {
          href: '/docs/volumes/appendix',
          title: {
            en: 'Appendix: The Operator\'s Toolkit',
            pt: 'Apêndice: O Kit de Ferramentas do Operador',
          },
          items: [],
        },
        {
          href: '/docs/volumes/epilogue',
          title: {
            en: 'Epilogue: Eden Isn’t Elsewhere',
            pt: 'Epílogo: O Éden Não Está Em Outro Lugar',
          },
          items: [],
        },
        {
          title: {
            en: 'Volume I',
            pt: 'Volume I',
          },
          items: [
            {
              href: '/docs/volumes/volume-i/chapter-1',
              title: {
                en: 'Chapter 1',
                pt: 'Capítulo 1',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-i/chapter-2',
              title: {
                en: 'Chapter 2',
                pt: 'Capítulo 2',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-i/chapter-3',
              title: {
                en: 'Chapter 3',
                pt: 'Capítulo 3',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-i/chapter-4',
              title: {
                en: 'Chapter 4',
                pt: 'Capítulo 4',
              },
              items: [],
            },
          ],
        },
        {
          title: {
            en: 'Volume II',
            pt: 'Volume II',
          },
          items: [
            {
              href: '/docs/volumes/volume-ii/chapter-5',
              title: {
                en: 'Chapter 5',
                pt: 'Capítulo 5',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-ii/chapter-6',
              title: {
                en: 'Chapter 6',
                pt: 'Capítulo 6',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-ii/chapter-7',
              title: {
                en: 'Chapter 7',
                pt: 'Capítulo 7',
              },
              items: [],
            },
          ],
        },
        {
          title: {
            en: 'Volume III',
            pt: 'Volume III',
          },
          items: [
            {
              href: '/docs/volumes/volume-iii/chapter-8',
              title: {
                en: 'Chapter 8',
                pt: 'Capítulo 8',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-iii/chapter-9',
              title: {
                en: 'Chapter 9',
                pt: 'Capítulo 9',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-iii/chapter-10',
              title: {
                en: 'Chapter 10',
                pt: 'Capítulo 10',
              },
              items: [],
            },
          ],
        },
        {
          title: {
            en: 'Volume IV',
            pt: 'Volume IV',
          },
          items: [
            {
              href: '/docs/volumes/volume-iv/chapter-11',
              title: {
                en: 'Chapter 11',
                pt: 'Capítulo 11',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-iv/chapter-12',
              title: {
                en: 'Chapter 12',
                pt: 'Capítulo 12',
              },
              items: [],
            },
          ],
        },
        {
          title: {
            en: 'Volume V',
            pt: 'Volume V',
          },
          items: [
            {
              href: '/docs/volumes/volume-v/chapter-13',
              title: {
                en: 'Chapter 13',
                pt: 'Capítulo 13',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-v/chapter-14',
              title: {
                en: 'Chapter 14',
                pt: 'Capítulo 14',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-v/chapter-15',
              title: {
                en: 'Chapter 15',
                pt: 'Capítulo 15',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-v/chapter-16',
              title: {
                en: 'Chapter 16',
                pt: 'Capítulo 16',
              },
              items: [],
            },
            {
              href: '/docs/volumes/volume-v/chapter-17',
              title: {
                en: 'Chapter 17',
                pt: 'Capítulo 17',
              },
              items: [],
            },
          ],
        },
        {
          title: {
            en: 'Volume VI',
            pt: 'Volume VI',
          },
          items: [],
        },
        {
          title: {
            en: 'Volume VII',
            pt: 'Volume VII',
          },
          items: [],
        },
        {
          title: {
            en: 'Volume VIII',
            pt: 'Volume VIII',
          },
          items: [],
        },
      ],
    },
  ],
} as const
