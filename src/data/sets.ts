import type { DilrSet } from '../types'

export const sets: DilrSet[] = [
  {
    id: 'seating-01',
    title: 'Linear Seating - Six Friends',
    topicId: 'seating-arrangement',
    difficulty: 'Easy',
    timeLimitMinutes: 8,
    source: 'Sample Set',
    directions:
      'Six friends - A, B, C, D, E and F - sit in a row of six seats numbered 1 to 6 from left to right, facing north. Answer the questions based on the following information:\n' +
      '1. C sits at the left extreme end (seat 1).\n' +
      '2. A sits third from the left end.\n' +
      '3. B sits immediately to the right of A.\n' +
      '4. E sits at the right extreme end (seat 6).\n' +
      '5. F sits immediately to the left of E.',
    questions: [
      {
        id: 'q1',
        text: 'Who sits immediately to the left of A?',
        options: ['B', 'C', 'D', 'F'],
        correctOptionIndex: 2,
        explanation:
          'C is at seat 1, A is at seat 3, B is at seat 4 (right of A), E is at seat 6, F is at seat 5. By elimination D is at seat 2, immediately to the left of A.',
      },
      {
        id: 'q2',
        text: 'How many people sit to the right of F?',
        options: ['0', '1', '2', '3'],
        correctOptionIndex: 1,
        explanation: 'F is at seat 5 and only E (seat 6) sits to its right, so 1 person.',
      },
      {
        id: 'q3',
        text: 'Which pair sits at the two extreme ends?',
        options: ['C and E', 'D and F', 'A and B', 'C and F'],
        correctOptionIndex: 0,
        explanation: 'C sits at seat 1 (left extreme) and E sits at seat 6 (right extreme).',
      },
      {
        id: 'q4',
        text: "What is D's position from the left end?",
        options: ['1st', '2nd', '3rd', '4th'],
        correctOptionIndex: 1,
        explanation: 'Seats: 1-C, 2-D, 3-A, 4-B, 5-F, 6-E. D is 2nd from the left.',
      },
    ],
  },
  {
    id: 'games-01',
    title: 'Round Robin - Four Teams',
    topicId: 'games-tournaments',
    difficulty: 'Medium',
    timeLimitMinutes: 10,
    source: 'Sample Set',
    directions:
      'Four teams P, Q, R and S played a round-robin tournament (each team played every other team exactly once, no draws were possible). A win fetched 2 points and a loss fetched 0 points. It is known that:\n' +
      '1. P won all of its matches.\n' +
      '2. S lost all of its matches.\n' +
      '3. Q beat R.\n' +
      '4. The team with the second-highest total points is Q.',
    questions: [
      {
        id: 'q1',
        text: 'How many total points did Q score?',
        options: ['0', '2', '4', '6'],
        correctOptionIndex: 2,
        explanation:
          'Q lost to P, and beat both R and S (since S lost all its matches). That is 2 wins = 4 points.',
      },
      {
        id: 'q2',
        text: 'Which team finished with the fewest points?',
        options: ['P', 'Q', 'R', 'S'],
        correctOptionIndex: 3,
        explanation: 'S lost all three of its matches, finishing with 0 points, the lowest.',
      },
      {
        id: 'q3',
        text: 'What was the result of the match between R and S?',
        options: ['R won', 'S won', 'Draw', 'Cannot be determined'],
        correctOptionIndex: 0,
        explanation: 'Since S lost all of its matches, R must have beaten S.',
      },
      {
        id: 'q4',
        text: 'Which team scored exactly 2 points in total?',
        options: ['P', 'Q', 'R', 'S'],
        correctOptionIndex: 2,
        explanation:
          'R lost to P, lost to Q, and beat S: 1 win = 2 points.',
      },
    ],
  },
  {
    id: 'venn-01',
    title: 'Cricket and Football Players',
    topicId: 'venn-diagrams',
    difficulty: 'Easy',
    timeLimitMinutes: 6,
    source: 'Sample Set',
    directions:
      'In a class of 100 students, 60 students play Cricket, 45 students play Football, and 20 students play both Cricket and Football. Answer the questions based on the above information.',
    questions: [
      {
        id: 'q1',
        text: 'How many students play only Cricket?',
        options: ['20', '40', '45', '60'],
        correctOptionIndex: 1,
        explanation: 'Only Cricket = Total Cricket - Both = 60 - 20 = 40.',
      },
      {
        id: 'q2',
        text: 'How many students play only Football?',
        options: ['20', '25', '30', '45'],
        correctOptionIndex: 1,
        explanation: 'Only Football = Total Football - Both = 45 - 20 = 25.',
      },
      {
        id: 'q3',
        text: 'How many students play at least one of the two sports?',
        options: ['80', '85', '90', '95'],
        correctOptionIndex: 1,
        explanation: 'Using |C ∪ F| = |C| + |F| - |C ∩ F| = 60 + 45 - 20 = 85.',
      },
      {
        id: 'q4',
        text: 'How many students play neither sport?',
        options: ['10', '15', '20', '25'],
        correctOptionIndex: 1,
        explanation: 'Neither = Total - |C ∪ F| = 100 - 85 = 15.',
      },
    ],
  },
  {
    id: 'ds-01',
    title: 'Data Sufficiency - Mixed Practice',
    topicId: 'data-sufficiency',
    difficulty: 'Medium',
    timeLimitMinutes: 8,
    source: 'Sample Set',
    directions:
      'Each question below is followed by two statements, I and II. Decide whether the information in each statement is sufficient to answer the question, using: ' +
      '(A) Statement I alone is sufficient, (B) Statement II alone is sufficient, (C) Both statements together are sufficient but neither alone is sufficient, (D) Both statements together are not sufficient, (E) Each statement alone is sufficient.',
    questions: [
      {
        id: 'q1',
        text: 'What is the value of integer x?\nI. x is a prime number less than 10.\nII. x is an odd number less than 6.',
        options: [
          'Statement I alone is sufficient',
          'Statement II alone is sufficient',
          'Both together are sufficient, neither alone',
          'Both together are not sufficient',
        ],
        correctOptionIndex: 3,
        explanation:
          'I gives x ∈ {2,3,5,7}; II gives x ∈ {1,3,5}. Together, odd primes less than 6 give x ∈ {3,5}, still not unique. Not sufficient even together.',
      },
      {
        id: 'q2',
        text: 'Is integer n divisible by 6?\nI. n is divisible by 2.\nII. n is divisible by 3.',
        options: [
          'Statement I alone is sufficient',
          'Statement II alone is sufficient',
          'Both together are sufficient, neither alone',
          'Both together are not sufficient',
        ],
        correctOptionIndex: 2,
        explanation:
          'Neither statement alone guarantees divisibility by 6, but since 2 and 3 are coprime, divisibility by both together implies divisibility by 6.',
      },
      {
        id: 'q3',
        text: 'What is the area of a rectangle?\nI. The length of the rectangle is 10 cm.\nII. The perimeter of the rectangle is 30 cm.',
        options: [
          'Statement I alone is sufficient',
          'Statement II alone is sufficient',
          'Both together are sufficient, neither alone',
          'Both together are not sufficient',
        ],
        correctOptionIndex: 2,
        explanation:
          'I alone gives no width. II alone gives length + width = 15, not unique. Together: length = 10, so width = 5, area = 50 sq cm.',
      },
      {
        id: 'q4',
        text: 'Is x > y?\nI. x + 5 > y + 5\nII. x - y = 3',
        options: [
          'Statement I alone is sufficient',
          'Statement II alone is sufficient',
          'Both together are sufficient, neither alone',
          'Each statement alone is sufficient',
        ],
        correctOptionIndex: 3,
        explanation:
          'I simplifies directly to x > y. II gives x - y = 3, a positive number, so x > y. Each statement alone is sufficient.',
      },
    ],
  },
  {
    id: 'tables-01',
    title: 'Phone Sales by Store',
    topicId: 'tables-caselets',
    difficulty: 'Medium',
    timeLimitMinutes: 8,
    source: 'Sample Set',
    directions:
      'The table below shows the number of phone units sold by four stores in January and February.\n' +
      'Store A: Jan 120, Feb 150\n' +
      'Store B: Jan 200, Feb 180\n' +
      'Store C: Jan 90, Feb 130\n' +
      'Store D: Jan 150, Feb 150',
    questions: [
      {
        id: 'q1',
        text: 'Which store had the highest combined (Jan + Feb) sales?',
        options: ['A', 'B', 'C', 'D'],
        correctOptionIndex: 1,
        explanation: 'Totals: A=270, B=380, C=220, D=300. Store B is highest at 380.',
      },
      {
        id: 'q2',
        text: 'What is the percentage increase in sales of Store C from January to February?',
        options: ['33.3%', '40%', '44.4%', '50%'],
        correctOptionIndex: 2,
        explanation: '(130 - 90) / 90 × 100 ≈ 44.4%.',
      },
      {
        id: 'q3',
        text: 'Which store recorded a decrease in sales from January to February?',
        options: ['A', 'B', 'C', 'D'],
        correctOptionIndex: 1,
        explanation: 'Store B fell from 200 to 180, a decrease; all other stores increased or stayed flat.',
      },
      {
        id: 'q4',
        text: 'What was the average February sales across all four stores?',
        options: ['145', '150', '152.5', '160'],
        correctOptionIndex: 2,
        explanation: '(150 + 180 + 130 + 150) / 4 = 610 / 4 = 152.5.',
      },
    ],
  },
  {
    id: 'routes-01',
    title: 'City Road Network',
    topicId: 'routes-networks',
    difficulty: 'Medium',
    timeLimitMinutes: 9,
    source: 'Sample Set',
    directions:
      'Four cities W, X, Y and Z are connected by direct roads as follows (distances in km): W-X: 10, X-Y: 15, Y-Z: 8, W-Z: 20, X-Z: 12. There is no direct road between W and Y.',
    questions: [
      {
        id: 'q1',
        text: 'What is the shortest distance from W to Y?',
        options: ['22 km', '25 km', '28 km', '30 km'],
        correctOptionIndex: 1,
        explanation: 'W-X-Y = 10+15=25 km is shorter than W-Z-Y (28 km) and W-X-Z-Y (30 km).',
      },
      {
        id: 'q2',
        text: 'What is the shortest distance from W to Z?',
        options: ['18 km', '20 km', '22 km', '25 km'],
        correctOptionIndex: 1,
        explanation: 'The direct W-Z road (20 km) is shorter than the route via X (10+12=22 km).',
      },
      {
        id: 'q3',
        text: 'What is the shortest distance from X to Z?',
        options: ['10 km', '12 km', '15 km', '23 km'],
        correctOptionIndex: 1,
        explanation: 'The direct X-Z road (12 km) is shorter than X-Y-Z (15+8=23 km).',
      },
      {
        id: 'q4',
        text: 'Which route from W to Z is the shorter one?',
        options: ['Direct W-Z road', 'Via X (W-X-Z)', 'Via Y (W-... -Y-Z)', 'All are equal'],
        correctOptionIndex: 0,
        explanation: 'Direct W-Z is 20 km, versus 22 km via X, so the direct road is shorter.',
      },
    ],
  },
  {
    id: 'games-02',
    title: 'Circular Card Pass - Four Players',
    topicId: 'games-tournaments',
    difficulty: 'Medium',
    timeLimitMinutes: 10,
    source: 'Original Set',
    directions:
      'Four players W, X, Y and Z sit around a circular table in that clockwise order (so the player immediately clockwise of W is X, of X is Y, of Y is Z, and of Z is W). W and Y sit directly opposite each other, and so do X and Z.\n' +
      'A pile of 12 cards - 4 Blue, 4 Red and 4 Yellow - is drawn one at a time, starting with W. Whenever a card is drawn, the drawer keeps it, and then:\n' +
      '- if the card is Blue, the next draw is made by the player sitting directly opposite the drawer;\n' +
      '- if the card is Red, the next draw is made by the player sitting immediately clockwise of the drawer;\n' +
      '- if the card is Yellow, the next draw is made by the player sitting immediately anticlockwise of the drawer.\n' +
      'The 12 cards were drawn in this exact order: Blue, Red, Yellow, Blue, Red, Yellow, Blue, Red, Yellow, Blue, Red, Yellow.',
    questions: [
      {
        id: 'q1',
        text: 'How many cards in total did W end up with?',
        options: ['2', '3', '4', '5'],
        correctOptionIndex: 2,
        explanation:
          'Tracing the draws: W(Blue)→Y(Red)→Z(Yellow)→Y(Blue)→W(Red)→X(Yellow)→W(Blue)→Y(Red)→Z(Yellow)→Y(Blue)→W(Red)→X(Yellow). W draws on turns 1, 5, 7 and 11 - four cards in total.',
      },
      {
        id: 'q2',
        text: 'Which player drew the last (12th) card?',
        options: ['W', 'X', 'Y', 'Z'],
        correctOptionIndex: 1,
        explanation: 'Following the same trace, the 12th draw is made by X (after Y drew the Blue 10th card and passed Red to W, who passed Yellow to X).',
      },
      {
        id: 'q3',
        text: 'How many Yellow cards did Z end up with?',
        options: ['0', '1', '2', '3'],
        correctOptionIndex: 2,
        explanation: 'Z draws on turns 3 and 9, both of which are Yellow cards - so Z ends up with 2 Yellow cards.',
      },
      {
        id: 'q4',
        text: 'Which pair of players ended up holding only Blue and Red cards, with no Yellow cards at all?',
        options: ['W and Y', 'X and Z', 'W and Z', 'X and Y'],
        correctOptionIndex: 0,
        explanation:
          'W draws on turns 1, 5, 7, 11 (Blue, Red, Blue, Red) and Y draws on turns 2, 4, 8, 10 (Red, Blue, Red, Blue) - neither ever draws a Yellow card, unlike X and Z who only draw Yellow cards.',
      },
    ],
  },
  {
    id: 'venn-02',
    title: 'Badminton, Tennis and Squash Players',
    topicId: 'venn-diagrams',
    difficulty: 'Medium',
    timeLimitMinutes: 9,
    source: 'Original Set',
    directions:
      'In a college of 400 students, every student plays at least one of three sports: Badminton, Tennis and Squash. 220 students play Badminton, 180 play Tennis, and 150 play Squash. Each question below adds an independent additional piece of information; treat each question separately.',
    questions: [
      {
        id: 'q1',
        text: 'If exactly 50 students play all three sports, how many students play exactly two sports?',
        options: ['30', '40', '50', '60'],
        correctOptionIndex: 2,
        explanation:
          'Let a, b, c be the number of students playing exactly one, exactly two, and all three sports. a+b+c=400 and a+2b+3c=220+180+150=550, so b+2c=150. With c=50, b=150-100=50.',
      },
      {
        id: 'q2',
        text: 'If exactly 90 students play exactly two sports, how many play all three sports?',
        options: ['20', '25', '30', '35'],
        correctOptionIndex: 2,
        explanation: 'From b+2c=150, with b=90: 2c=60, so c=30.',
      },
      {
        id: 'q3',
        text: 'If no student plays all three sports, how many students play exactly two sports?',
        options: ['130', '140', '150', '160'],
        correctOptionIndex: 2,
        explanation: 'From b+2c=150, with c=0: b=150.',
      },
      {
        id: 'q4',
        text: 'Continuing from the previous question (no student plays all three sports), how many students play exactly one sport?',
        options: ['220', '240', '250', '260'],
        correctOptionIndex: 2,
        explanation: 'a+b+c=400, with b=150 and c=0: a=400-150-0=250.',
      },
    ],
  },
  {
    id: 'seating-02',
    title: 'City Visit Selection',
    topicId: 'seating-arrangement',
    difficulty: 'Hard',
    timeLimitMinutes: 10,
    source: 'Original Set',
    directions:
      'A trader is planning which cities to visit among six cities - J, K, L, M, N and P. The following conditions apply:\n' +
      '1. If he visits J, he must also visit K.\n' +
      '2. He cannot visit both L and M.\n' +
      '3. If he visits N, he cannot visit P (and vice versa).\n' +
      '4. He must visit at least one of L or N.\n' +
      '5. If he visits K, he cannot visit N.',
    questions: [
      {
        id: 'q1',
        text: 'What is the maximum number of cities the trader can visit?',
        options: ['3', '4', '5', '6'],
        correctOptionIndex: 1,
        explanation:
          'Visiting {J, K, L, P} satisfies every condition and has 4 cities. Checking every way of dropping just one city from all six shows each violates at least one condition, so 5 is not achievable - the maximum is 4.',
      },
      {
        id: 'q2',
        text: 'Which of the following pairs of cities can never be visited together?',
        options: ['J and P', 'K and N', 'L and P', 'J and L'],
        correctOptionIndex: 1,
        explanation:
          'Condition 5 directly forbids visiting K and N together. The other three pairs each appear together in the valid selection {J, K, L, P}.',
      },
      {
        id: 'q3',
        text: 'If the trader decides to visit N, what is the maximum number of cities he can visit?',
        options: ['1', '2', '3', '4'],
        correctOptionIndex: 1,
        explanation:
          'Visiting N forces K out (condition 5), which forces J out (condition 1), and forces P out (condition 3). Between L and M only one can be chosen (condition 2), so the maximum is N plus one of {L, M} = 2 cities.',
      },
      {
        id: 'q4',
        text: 'If the trader visits both L and P, which other city(ies) must he definitely NOT visit?',
        options: ['M only', 'N only', 'M and N', 'K and J'],
        correctOptionIndex: 2,
        explanation:
          'Visiting L forces M out (condition 2). Visiting P forces N out (condition 3). K and J remain optional - they can be included or excluded without breaking any condition.',
      },
    ],
  },
  {
    id: 'seating-03',
    title: 'Circular Seating - Six People',
    topicId: 'seating-arrangement',
    difficulty: 'Easy',
    timeLimitMinutes: 8,
    source: 'Original Set',
    directions:
      'Six people - P, Q, R, S, T and U - sit around a circular table, facing the centre. Answer the questions based on the following information:\n' +
      '1. Q sits immediately clockwise of P.\n' +
      '2. R sits immediately clockwise of Q.\n' +
      '3. S sits exactly opposite P.\n' +
      '4. T sits immediately clockwise of S.\n' +
      '5. U is the only person left, and sits immediately clockwise of T.',
    questions: [
      {
        id: 'q1',
        text: 'Who sits immediately anticlockwise of R?',
        options: ['P', 'Q', 'S', 'T'],
        correctOptionIndex: 1,
        explanation:
          'The clockwise order is P, Q, R, S, T, U. The person immediately anticlockwise of R is the one immediately before R in this order, which is Q.',
      },
      {
        id: 'q2',
        text: 'Who sits exactly opposite Q?',
        options: ['R', 'S', 'T', 'U'],
        correctOptionIndex: 2,
        explanation:
          'With 6 people seated evenly, the person opposite is 3 seats away. Opposite pairs are P-S, Q-T and R-U, so T sits opposite Q.',
      },
      {
        id: 'q3',
        text: 'How many people sit between P and T, counting clockwise from P to T?',
        options: ['2', '3', '4', '5'],
        correctOptionIndex: 1,
        explanation: 'Going clockwise from P: Q, R, S lie between P and T - that is 3 people.',
      },
      {
        id: 'q4',
        text: 'Which of the following pairs sit exactly opposite each other?',
        options: ['P and Q', 'R and U', 'S and T', 'Q and U'],
        correctOptionIndex: 1,
        explanation: 'The opposite pairs in this arrangement are P-S, Q-T and R-U, so R and U sit opposite each other.',
      },
    ],
  },
  {
    id: 'games-03',
    title: 'Knockout Cup - Four Players',
    topicId: 'games-tournaments',
    difficulty: 'Medium',
    timeLimitMinutes: 9,
    source: 'Original Set',
    directions:
      'Four players - A, B, C and D - competed in a knockout cup. In the semi-finals, A played B, and C played D. The winners of the two semi-finals played each other in the Final, while the two semi-final losers played each other in a 3rd-place match.\n' +
      'Points are awarded as follows: a semi-final win is worth 3 points and a semi-final loss is worth 1 point. On top of that, the Final winner earns 5 more points and the Final loser earns 2 more points; the 3rd-place match winner earns 2 more points and the 3rd-place match loser earns 0 more points.\n' +
      'It is known that: A beat B in the semi-final, D beat C in the semi-final, A beat D in the Final, and B beat C in the 3rd-place match.',
    questions: [
      {
        id: 'q1',
        text: 'Who won the tournament?',
        options: ['A', 'B', 'C', 'D'],
        correctOptionIndex: 0,
        explanation: 'A won the semi-final and then won the Final, so A is the champion.',
      },
      {
        id: 'q2',
        text: 'How many total points did D score?',
        options: ['3', '5', '6', '8'],
        correctOptionIndex: 1,
        explanation: 'D won the semi-final (3 points) but lost the Final (+2 points) = 5 points total.',
      },
      {
        id: 'q3',
        text: 'Who finished with the fewest points overall?',
        options: ['A', 'B', 'C', 'D'],
        correctOptionIndex: 2,
        explanation: 'C lost the semi-final (1 point) and lost the 3rd-place match (+0 points) = 1 point total, the lowest of all four.',
      },
      {
        id: 'q4',
        text: 'Which two players played in the 3rd-place match?',
        options: ['A and D', 'B and C', 'A and C', 'B and D'],
        correctOptionIndex: 1,
        explanation: 'The 3rd-place match is between the two semi-final losers, which were B and C.',
      },
    ],
  },
  {
    id: 'venn-03',
    title: 'Tea and Coffee Drinkers',
    topicId: 'venn-diagrams',
    difficulty: 'Easy',
    timeLimitMinutes: 6,
    source: 'Original Set',
    directions:
      'In a survey of 250 people, 60% like Tea, 44% like Coffee, and 20% like both Tea and Coffee. Answer the questions based on the above information.',
    questions: [
      {
        id: 'q1',
        text: 'How many people like only Tea?',
        options: ['80', '90', '100', '110'],
        correctOptionIndex: 2,
        explanation: 'Tea drinkers = 60% of 250 = 150. Both = 20% of 250 = 50. Only Tea = 150 - 50 = 100.',
      },
      {
        id: 'q2',
        text: 'How many people like only Coffee?',
        options: ['40', '50', '60', '70'],
        correctOptionIndex: 2,
        explanation: 'Coffee drinkers = 44% of 250 = 110. Both = 50. Only Coffee = 110 - 50 = 60.',
      },
      {
        id: 'q3',
        text: 'How many people like at least one of Tea or Coffee?',
        options: ['190', '200', '210', '220'],
        correctOptionIndex: 2,
        explanation: 'Using |T ∪ C| = |T| + |C| - |T ∩ C| = 150 + 110 - 50 = 210.',
      },
      {
        id: 'q4',
        text: 'How many people like neither Tea nor Coffee?',
        options: ['30', '40', '50', '60'],
        correctOptionIndex: 1,
        explanation: 'Neither = Total - |T ∪ C| = 250 - 210 = 40.',
      },
    ],
  },
  {
    id: 'ds-02',
    title: 'Data Sufficiency - Practice Set 2',
    topicId: 'data-sufficiency',
    difficulty: 'Medium',
    timeLimitMinutes: 8,
    source: 'Original Set',
    directions:
      'Each question below is followed by two statements, I and II. Decide whether the information in each statement is sufficient to answer the question.',
    questions: [
      {
        id: 'q1',
        text: 'What is the value of y?\nI. y² = 49\nII. y is negative.',
        options: [
          'Statement I alone is sufficient',
          'Statement II alone is sufficient',
          'Both together are sufficient, neither alone',
          'Both together are not sufficient',
        ],
        correctOptionIndex: 2,
        explanation:
          'I alone gives y = 7 or -7. II alone only says y is negative, with no fixed value. Together, y must be negative and satisfy y² = 49, so y = -7 uniquely.',
      },
      {
        id: 'q2',
        text: 'Is integer x an even number?\nI. x/2 is an integer.\nII. x² is an even number.',
        options: [
          'Statement I alone is sufficient',
          'Statement II alone is sufficient',
          'Both together are sufficient, neither alone',
          'Each statement alone is sufficient',
        ],
        correctOptionIndex: 3,
        explanation:
          'I alone: if x/2 is an integer, x must be even. II alone: the square of an odd number is always odd, so if x² is even, x itself must be even. Each statement alone is sufficient.',
      },
      {
        id: 'q3',
        text: 'What is the two-digit number N?\nI. The sum of the digits of N is 9.\nII. N is divisible by 9.',
        options: [
          'Statement I alone is sufficient',
          'Statement II alone is sufficient',
          'Both together are sufficient, neither alone',
          'Both together are not sufficient',
        ],
        correctOptionIndex: 3,
        explanation:
          'Several two-digit numbers (18, 27, 36, ... 90) have digit sum 9, and the same set of numbers (plus 99) are divisible by 9. Even combined, N is not uniquely determined.',
      },
      {
        id: 'q4',
        text: 'Is p > q?\nI. p + 3 = q + 5\nII. p and q are positive integers.',
        options: [
          'Statement I alone is sufficient',
          'Statement II alone is sufficient',
          'Both together are sufficient, neither alone',
          'Both together are not sufficient',
        ],
        correctOptionIndex: 0,
        explanation:
          'I alone simplifies to p = q + 2, so p > q always. II alone gives no relationship between p and q, so it is not sufficient.',
      },
    ],
  },
  {
    id: 'tables-02',
    title: 'Product Revenue by Quarter',
    topicId: 'tables-caselets',
    difficulty: 'Medium',
    timeLimitMinutes: 8,
    source: 'Original Set',
    directions:
      'The table below shows the revenue (in Rs. lakhs) of four products in Q1 and Q2 of a year.\n' +
      'P1: Q1 80, Q2 100\n' +
      'P2: Q1 150, Q2 130\n' +
      'P3: Q1 60, Q2 90\n' +
      'P4: Q1 110, Q2 110',
    questions: [
      {
        id: 'q1',
        text: 'Which product had the highest combined (Q1 + Q2) revenue?',
        options: ['P1', 'P2', 'P3', 'P4'],
        correctOptionIndex: 1,
        explanation: 'Totals: P1=180, P2=280, P3=150, P4=220. P2 is highest at 280.',
      },
      {
        id: 'q2',
        text: 'What is the percentage increase in revenue of P3 from Q1 to Q2?',
        options: ['40%', '45%', '50%', '55%'],
        correctOptionIndex: 2,
        explanation: '(90 - 60) / 60 × 100 = 50%.',
      },
      {
        id: 'q3',
        text: "Which product's revenue remained unchanged between Q1 and Q2?",
        options: ['P1', 'P2', 'P3', 'P4'],
        correctOptionIndex: 3,
        explanation: 'P4 recorded 110 in both Q1 and Q2, an unchanged value.',
      },
      {
        id: 'q4',
        text: 'What was the average Q1 revenue across all four products?',
        options: ['90', '95', '100', '105'],
        correctOptionIndex: 2,
        explanation: '(80 + 150 + 60 + 110) / 4 = 400 / 4 = 100.',
      },
    ],
  },
  {
    id: 'routes-02',
    title: 'One-Way Road Network',
    topicId: 'routes-networks',
    difficulty: 'Hard',
    timeLimitMinutes: 9,
    source: 'Original Set',
    directions:
      'Four towns E, F, G and H are connected by one-way roads only (distances in km): E→F: 5, F→G: 7, G→H: 4, H→E: 6, E→G: 9, F→H: 10. There are no roads other than these six, and none of them can be travelled in the reverse direction.',
    questions: [
      {
        id: 'q1',
        text: 'What is the shortest distance from E to H?',
        options: ['13 km', '15 km', '16 km', '19 km'],
        correctOptionIndex: 0,
        explanation: 'E→G→H = 9+4 = 13 km, shorter than E→F→H (5+10=15) and E→F→G→H (5+7+4=16).',
      },
      {
        id: 'q2',
        text: 'What is the shortest distance from F to E?',
        options: ['15 km', '16 km', '17 km', '21 km'],
        correctOptionIndex: 1,
        explanation: 'F→H→E = 10+6 = 16 km, shorter than F→G→H→E (7+4+6=17 km).',
      },
      {
        id: 'q3',
        text: 'What is the shortest distance from E to F?',
        options: ['4 km', '5 km', '6 km', '9 km'],
        correctOptionIndex: 1,
        explanation: 'The direct E→F road is 5 km, which is necessarily the minimum possible distance.',
      },
      {
        id: 'q4',
        text: 'Which of the following direct roads does NOT exist in this network?',
        options: ['E to G', 'G to E', 'F to H', 'H to E'],
        correctOptionIndex: 1,
        explanation: 'The only roads are E→F, F→G, G→H, H→E, E→G and F→H - there is no direct road from G to E.',
      },
    ],
  },
]

export function getSetsByTopic(topicId: string): DilrSet[] {
  return sets.filter((s) => s.topicId === topicId)
}

export function getSetById(setId: string): DilrSet | undefined {
  return sets.find((s) => s.id === setId)
}
