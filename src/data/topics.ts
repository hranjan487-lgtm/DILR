import type { Topic } from '../types'

export const topics: Topic[] = [
  {
    id: 'seating-arrangement',
    name: 'Arrangements',
    icon: '🪑',
    description: 'Linear, circular and matrix seating/arrangement puzzles.',
  },
  {
    id: 'games-tournaments',
    name: 'Games & Tournaments',
    icon: '🏆',
    description: 'Round robin, knockout and league based scoring puzzles.',
  },
  {
    id: 'venn-diagrams',
    name: 'Venn Diagrams & Set Theory',
    icon: '⭕',
    description: 'Set operations, overlapping groups and counting problems.',
  },
  {
    id: 'data-sufficiency',
    name: 'Data Sufficiency',
    icon: '❓',
    description: 'Determine whether given statements are sufficient to answer.',
  },
  {
    id: 'tables-caselets',
    name: 'Tables & Caselets',
    icon: '📊',
    description: 'Data given in tabular or paragraph (caselet) form.',
  },
  {
    id: 'routes-networks',
    name: 'Routes & Networks',
    icon: '🗺️',
    description: 'Graph, network and shortest-route based puzzles.',
  },
]
