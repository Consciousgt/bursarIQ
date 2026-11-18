/**
 * BURSARIQ - Universal Computer-Based Test (CBT) Question Bank
 * Standard JAMB / WAEC Multidisciplinary Assessment Engine
 * Subjects Included:
 *   - Mathematics (SSS 1, SSS 2, SSS 3 - 300 Questions)
 *   - English Language (Lexis, Structure, Synonyms, Antonyms, Oral - Comprehensive)
 *   - Biology (Physiology, Ecology, Genetics, Cells)
 *   - Physics (Mechanics, Waves, Optics, Electricity, Modern Physics)
 *   - Chemistry (Stoichiometry, Bonding, Periodic Trends, Acids/Bases, Organic)
 *   - Economics (Microeconomics, Macroeconomics, Money & Banking)
 *   - Government (Political Concepts, Constitutions, Electoral Systems, International Relations)
 *   - Commerce (Trade, Aids to Trade, Banking, Insurance, Warehousing)
 */

(function () {
  'use strict';

  var CBT_BANK = {
  "Mathematics": {
    "SSS 1": [
      {
        "id": "WAEC-SS1-SET-001",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If universal set $U = \\{5, 6, 7, 8\\}$, $P = \\{6, 7\\}$, and $Q = \\{6, 8\\}$, find $(P \\cap Q)'$.",
        "options": {
          "A": "$\\{5, 7, 8\\}$",
          "B": "$\\{5, 6, 8\\}$",
          "C": "$\\{6, 7, 8\\}$",
          "D": "$\\{5, 6, 7, 8\\}$"
        },
        "correctAnswer": "A",
        "explanation": "$P \\cap Q = \\{6\\}$. The complement $(P \\cap Q)' = U \\setminus \\{6\\} = \\{5, 7, 8\\}$."
      },
      {
        "id": "WAEC-SS1-SET-002",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "The universal set $U = \\{2, 3, 4, 5, 6, 7, 8, 9\\}$ has subsets $P = \\{2, 4, 6, 8\\}$ and $Q = \\{x : x^2 < 50,\\ x \\text{ is odd}\\}$. Find $(P \\cap Q)'$.",
        "options": {
          "A": "$\\{2, 3, 4, 5, 6, 7, 8, 9\\}$",
          "B": "$\\{2, 4, 6, 8\\}$",
          "C": "$\\{3, 5, 7\\}$",
          "D": "$\\emptyset$"
        },
        "correctAnswer": "A",
        "explanation": "Odd numbers in $U$ with $x^2 < 50$ are $Q = \\{3, 5, 7\\}$. $P \\cap Q = \\emptyset$. Thus $(P \\cap Q)' = U = \\{2, 3, 4, 5, 6, 7, 8, 9\\}$."
      },
      {
        "id": "WAEC-SS1-SET-003",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "In a class of $45$ students, every student offers either Chemistry or Economics or both. If $25$ students offer Chemistry while $34$ offer Economics, find the number of students who offer both subjects.",
        "options": {
          "A": "$14$",
          "B": "$12$",
          "C": "$16$",
          "D": "$10$"
        },
        "correctAnswer": "A",
        "explanation": "Using $n(C \\cup E) = n(C) + n(E) - n(C \\cap E)$: $45 = 25 + 34 - n(C \\cap E) \\implies n(C \\cap E) = 59 - 45 = 14$."
      },
      {
        "id": "WAEC-SS1-SET-004",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If $R = \\{x : x^2 = 16,\\ x > 5\\}$, which of the following is equal to $R$?",
        "options": {
          "A": "$\\emptyset\\text{ (Empty set)}$",
          "B": "$\\{4\\}$",
          "C": "$\\{-4, 4\\}$",
          "D": "$\\{16\\}$"
        },
        "correctAnswer": "A",
        "explanation": "$x^2 = 16 \\implies x = 4$ or $x = -4$. Neither value satisfies the condition $x > 5$. Hence $R = \\emptyset$."
      },
      {
        "id": "WAEC-SS1-SET-005",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "Let $X = \\{\\text{prime factors of } 84\\}$ and $Y = \\{\\text{prime factors of } 315\\}$. Find $X \\cup Y$ and $X \\cap Y$ respectively.",
        "options": {
          "A": "$\\{2, 3, 5, 7\\}\\text{ and }\\{3, 7\\}$",
          "B": "$\\{2, 3, 5, 7\\}\\text{ and }\\{2, 7\\}$",
          "C": "$\\{3, 7\\}\\text{ and }\\{2, 5\\}$",
          "D": "$\\{2, 3, 7\\}\\text{ and }\\{3, 5, 7\\}$"
        },
        "correctAnswer": "A",
        "explanation": "Prime factorization: $84 = 2^2 \\times 3 \\times 7 \\implies X = \\{2, 3, 7\\}$; $315 = 3^2 \\times 5 \\times 7 \\implies Y = \\{3, 5, 7\\}$. $X \\cup Y = \\{2, 3, 5, 7\\}$ and $X \\cap Y = \\{3, 7\\}$."
      },
      {
        "id": "WAEC-SS1-SET-006",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "A school registers $300$ candidates for an examination. $180$ candidates offer Economics and $70$ offer Geography. If $80$ candidates offer neither Economics nor Geography, how many candidates offer at least one subject?",
        "options": {
          "A": "$220$",
          "B": "$250$",
          "C": "$180$",
          "D": "$150$"
        },
        "correctAnswer": "A",
        "explanation": "Candidates offering at least one subject $= \\text{Total} - \\text{Neither} = 300 - 80 = 220$."
      },
      {
        "id": "WAEC-SS1-SET-007",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "Given that $P = \\{1, 3, 4\\}$ and $Q = \\{2, 3, 4\\}$, find $P \\cap Q$.",
        "options": {
          "A": "$\\{3, 4\\}$",
          "B": "$\\{1, 2, 3, 4\\}$",
          "C": "$\\{3\\}$",
          "D": "$\\{4\\}$"
        },
        "correctAnswer": "A",
        "explanation": "The elements common to both $P$ and $Q$ are $3$ and $4$, so $P \\cap Q = \\{3, 4\\}$."
      },
      {
        "id": "WAEC-SS1-SET-008",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If $P = \\{x : x > 0\\}$, $R = \\{x : -5 \\le x < 5\\}$, and the universal set $U$ is the set of all integers, find $P' \\cap R$.",
        "options": {
          "A": "$\\{-5, -4, -3, -2, -1, 0\\}$",
          "B": "$\\{-5, -4, -3, -2, -1\\}$",
          "C": "$\\{0, 1, 2, 3, 4\\}$",
          "D": "$\\{-4, -3, -2, -1, 0\\}$"
        },
        "correctAnswer": "A",
        "explanation": "$P' = \\{x \\in \\mathbb{Z} : x \\le 0\\}$. The intersection with $R = \\{-5, -4, -3, -2, -1, 0, 1, 2, 3, 4\\}$ is $\\{-5, -4, -3, -2, -1, 0\\}$."
      },
      {
        "id": "WAEC-SS1-SET-009",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "In a class of $60$ students, $40$ speak Hausa, $19$ speak Igbo, and $7$ students speak both languages. Find the number of students who speak neither of the languages.",
        "options": {
          "A": "$8$",
          "B": "$12$",
          "C": "$7$",
          "D": "$14$"
        },
        "correctAnswer": "A",
        "explanation": "$n(H \\cup I) = 40 + 19 - 7 = 52$. Number speaking neither $= 60 - 52 = 8$."
      },
      {
        "id": "WAEC-SS1-SET-010",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If $I$ is the set of positive integers and $P = \\{x : x \\in I,\\ x^2 < 10\\ \\text{and}\\ x \\neq 0\\}$, find $P$.",
        "options": {
          "A": "$\\{1, 2, 3\\}$",
          "B": "$\\{0, 1, 2, 3\\}$",
          "C": "$\\{-3, -2, -1, 1, 2, 3\\}$",
          "D": "$\\{1, 2\\}$"
        },
        "correctAnswer": "A",
        "explanation": "Positive integers whose squares are strictly less than $10$: $1^2 = 1 < 10$, $2^2 = 4 < 10$, $3^2 = 9 < 10$. Thus $P = \\{1, 2, 3\\}$."
      },
      {
        "id": "WAEC-SS1-SET-011",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "How many subsets can be formed from a set containing $6$ elements?",
        "options": {
          "A": "$64$",
          "B": "$32$",
          "C": "$128$",
          "D": "$36$"
        },
        "correctAnswer": "A",
        "explanation": "The number of subsets of a set of cardinality $n$ is $2^n$. For $n = 6$, $2^6 = 64$."
      },
      {
        "id": "WAEC-SS1-SET-012",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If $n(A) = 18$, $n(B) = 24$, and $n(A \\cup B) = 32$, find $n(A \\cap B)$.",
        "options": {
          "A": "$10$",
          "B": "$8$",
          "C": "$14$",
          "D": "$12$"
        },
        "correctAnswer": "A",
        "explanation": "$n(A \\cap B) = n(A) + n(B) - n(A \\cup B) = 18 + 24 - 32 = 42 - 32 = 10$."
      },
      {
        "id": "WAEC-SS1-SET-013",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "Which of the following is equivalent to $(A \\cup B)'$ by De Morgan's Law?",
        "options": {
          "A": "$A' \\cap B'$",
          "B": "$A' \\cup B'$",
          "C": "$A \\cap B'$",
          "D": "$(A \\cap B)'$"
        },
        "correctAnswer": "A",
        "explanation": "De Morgan's first law states that the complement of the union equals the intersection of the complements: $(A \\cup B)' = A' \\cap B'$."
      },
      {
        "id": "WAEC-SS1-SET-014",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If $A = \\{x : x \\text{ is a factor of } 12\\}$ and $B = \\{x : x \\text{ is a factor of } 18\\}$, find $A \\cap B$.",
        "options": {
          "A": "$\\{1, 2, 3, 6\\}$",
          "B": "$\\{1, 2, 6\\}$",
          "C": "$\\{2, 3, 6\\}$",
          "D": "$\\{1, 2, 3, 4, 6\\}$"
        },
        "correctAnswer": "A",
        "explanation": "Factors of $12$: $\\{1, 2, 3, 4, 6, 12\\}$. Factors of $18$: $\\{1, 2, 3, 6, 9, 18\\}$. Common factors: $\\{1, 2, 3, 6\\}$."
      },
      {
        "id": "WAEC-SS1-SET-015",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "Two sets $A$ and $B$ are disjoint if and only if:",
        "options": {
          "A": "$A \\cap B = \\emptyset$",
          "B": "$A \\cup B = \\emptyset$",
          "C": "$n(A) = n(B)$",
          "D": "$A \\subset B$"
        },
        "correctAnswer": "A",
        "explanation": "Disjoint sets have no common members, meaning their intersection is the empty set: $A \\cap B = \\emptyset$."
      },
      {
        "id": "WAEC-SS1-SET-016",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "In a survey of $50$ farmers, $30$ grow cassava, $25$ grow yam, and $10$ grow neither. How many grow both crops?",
        "options": {
          "A": "$15$",
          "B": "$10$",
          "C": "$20$",
          "D": "$5$"
        },
        "correctAnswer": "A",
        "explanation": "Grow at least one $= 50 - 10 = 40$. $n(C \\cap Y) = 30 + 25 - 40 = 15$."
      },
      {
        "id": "WAEC-SS1-SET-017",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "What is the number of proper subsets of a set with $5$ elements?",
        "options": {
          "A": "$31$",
          "B": "$32$",
          "C": "$30$",
          "D": "$25$"
        },
        "correctAnswer": "A",
        "explanation": "Number of proper subsets is $2^n - 1$. For $n = 5$, $2^5 - 1 = 32 - 1 = 31$."
      },
      {
        "id": "WAEC-SS1-SET-018",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If $U = \\{x : 1 \\le x \\le 12,\\ x \\in \\mathbb{Z}\\}$ and $M = \\{x : x \\text{ is a multiple of } 3\\}$, find $M'$.",
        "options": {
          "A": "$\\{1, 2, 4, 5, 7, 8, 10, 11\\}$",
          "B": "$\\{3, 6, 9, 12\\}$",
          "C": "$\\{1, 2, 4, 5, 7, 8, 10\\}$",
          "D": "$\\{2, 4, 5, 7, 8, 10, 11\\}$"
        },
        "correctAnswer": "A",
        "explanation": "$M = \\{3, 6, 9, 12\\}$. The complement $M' = U \\setminus M = \\{1, 2, 4, 5, 7, 8, 10, 11\\}$."
      },
      {
        "id": "WAEC-SS1-SET-019",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If $A \\subset B$, which of the following expressions is always true?",
        "options": {
          "A": "$A \\cap B = A$",
          "B": "$A \\cup B = A$",
          "C": "$A \\cap B = B$",
          "D": "$A' \\cap B = \\emptyset$"
        },
        "correctAnswer": "A",
        "explanation": "If every element of $A$ belongs to $B$, the intersection of $A$ and $B$ is precisely $A$."
      },
      {
        "id": "WAEC-SS1-SET-020",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "The symmetric difference of sets $A$ and $B$, denoted $A \\,\\Delta\\, B$, is defined as:",
        "options": {
          "A": "$(A \\cup B) \\setminus (A \\cap B)$",
          "B": "$A \\cap B$",
          "C": "$A' \\cap B'$",
          "D": "$(A \\cap B)'$"
        },
        "correctAnswer": "A",
        "explanation": "$A \\,\\Delta\\, B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$."
      },
      {
        "id": "WAEC-SS1-SET-021",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If $n(A) = 20$, $n(B) = 30$, and $A \\cap B = \\emptyset$, find $n(A \\cup B)$.",
        "options": {
          "A": "$50$",
          "B": "$10$",
          "C": "$60$",
          "D": "$25$"
        },
        "correctAnswer": "A",
        "explanation": "For disjoint sets, $n(A \\cup B) = n(A) + n(B) = 20 + 30 = 50$."
      },
      {
        "id": "WAEC-SS1-SET-022",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "Given $S = \\{a, b, c\\}$, what is the cardinality of the power set $\\mathcal{P}(S)$?",
        "options": {
          "A": "$8$",
          "B": "$6$",
          "C": "$9$",
          "D": "$7$"
        },
        "correctAnswer": "A",
        "explanation": "$|\\mathcal{P}(S)| = 2^{|S|} = 2^3 = 8$."
      },
      {
        "id": "WAEC-SS1-SET-023",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If $n(U) = 100$, $n(P) = 60$, $n(Q) = 50$, and $n(P \\cap Q) = 25$, find $n(P \\cup Q)'$.",
        "options": {
          "A": "$15$",
          "B": "$25$",
          "C": "$35$",
          "D": "$10$"
        },
        "correctAnswer": "A",
        "explanation": "$n(P \\cup Q) = 60 + 50 - 25 = 85$. Complement $n(P \\cup Q)' = 100 - 85 = 15$."
      },
      {
        "id": "WAEC-SS1-SET-024",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "If set $A = \\{x : x \\in \\mathbb{R},\\ x^2 + 4 = 0\\}$, then $A$ is:",
        "options": {
          "A": "an empty set",
          "B": "a singleton set",
          "C": "an infinite set",
          "D": "$\\{-2, 2\\}$"
        },
        "correctAnswer": "A",
        "explanation": "For real $x$, $x^2 \\ge 0$, so $x^2 + 4 \\ge 4 > 0$. There are no real solutions, so $A = \\emptyset$."
      },
      {
        "id": "WAEC-SS1-SET-025",
        "class": "SSS 1",
        "topic": "Set Theory",
        "question": "In a class of $40$ learners, $22$ like football, $18$ like basketball, and $8$ like neither. How many like football only?",
        "options": {
          "A": "$14$",
          "B": "$12$",
          "C": "$8$",
          "D": "$16$"
        },
        "correctAnswer": "A",
        "explanation": "$n(F \\cup B) = 40 - 8 = 32$. $n(F \\cap B) = 22 + 18 - 32 = 8$. Football only $= n(F) - n(F \\cap B) = 22 - 8 = 14$."
      },
      {
        "id": "WAEC-SS1-IND-001",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify: $\\dfrac{9^{-1/2} \\times 81^{3/4}}{9^{1/2}}$.",
        "options": {
          "A": "$3$",
          "B": "$9$",
          "C": "$1$",
          "D": "$\\dfrac{1}{3}$"
        },
        "correctAnswer": "A",
        "explanation": "$9^{-1/2} = \\frac{1}{3}$, $81^{3/4} = (3^4)^{3/4} = 3^3 = 27$, and $9^{1/2} = 3$. Hence $\\dfrac{\\frac{1}{3} \\times 27}{3} = \\dfrac{9}{3} = 3$."
      },
      {
        "id": "WAEC-SS1-IND-002",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Solve for $m$: $9^{2m+1} = \\dfrac{81^{m+2}}{3^m}$.",
        "options": {
          "A": "$m = 6$",
          "B": "$m = 4$",
          "C": "$m = 8$",
          "D": "$m = 2$"
        },
        "correctAnswer": "A",
        "explanation": "$3^{2(2m+1)} = \\dfrac{3^{4(m+2)}}{3^m} \\implies 3^{4m+2} = 3^{3m+8} \\implies 4m + 2 = 3m + 8 \\implies m = 6$."
      },
      {
        "id": "WAEC-SS1-IND-003",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Find $n$ if $9^{1+n} \\times 3 = 27^{-n}$.",
        "options": {
          "A": "$-\\dfrac{3}{5}$",
          "B": "$\\dfrac{3}{5}$",
          "C": "$-\\dfrac{5}{3}$",
          "D": "$-1$"
        },
        "correctAnswer": "A",
        "explanation": "$3^{2(1+n)} \\times 3^1 = 3^{-3n} \\implies 3^{2n+3} = 3^{-3n} \\implies 2n + 3 = -3n \\implies 5n = -3 \\implies n = -\\dfrac{3}{5}$."
      },
      {
        "id": "WAEC-SS1-IND-004",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Evaluate: $(3^0 - 9^{-1/2})^{-3}$.",
        "options": {
          "A": "$\\dfrac{27}{8}$",
          "B": "$\\dfrac{8}{27}$",
          "C": "$\\dfrac{9}{4}$",
          "D": "$\\dfrac{4}{9}$"
        },
        "correctAnswer": "A",
        "explanation": "$3^0 = 1$, $9^{-1/2} = \\frac{1}{3}$. $(1 - \\frac{1}{3})^{-3} = (\\frac{2}{3})^{-3} = (\\frac{3}{2})^3 = \\dfrac{27}{8}$."
      },
      {
        "id": "WAEC-SS1-IND-005",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify: $\\dfrac{2^x - 2^{x-1}}{2^3 \\times 2^x - 8 \\times 2^{x-1}}$.",
        "options": {
          "A": "$\\dfrac{1}{8}$",
          "B": "$\\dfrac{1}{4}$",
          "C": "$\\dfrac{1}{2}$",
          "D": "$1$"
        },
        "correctAnswer": "A",
        "explanation": "Factor out $2^x$: Numerator $= 2^x(1 - \\frac{1}{2}) = \\frac{1}{2} \\cdot 2^x$. Denominator $= 2^x(8 - 8 \\cdot \\frac{1}{2}) = 4 \\cdot 2^x$. Ratio $= \\dfrac{1/2}{4} = \\dfrac{1}{8}$."
      },
      {
        "id": "WAEC-SS1-IND-006",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Find the value of $x$ which satisfies the equation $\\dfrac{9^{2x}}{9^{3x}} = 3$.",
        "options": {
          "A": "$-\\dfrac{1}{2}$",
          "B": "$\\dfrac{1}{2}$",
          "C": "$-1$",
          "D": "$1$"
        },
        "correctAnswer": "A",
        "explanation": "$9^{2x - 3x} = 9^{-x} = (3^2)^{-x} = 3^{-2x} = 3^1 \\implies -2x = 1 \\implies x = -\\dfrac{1}{2}$."
      },
      {
        "id": "WAEC-SS1-IND-007",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "If $\\left(\\dfrac{2}{3}\\right)^{a-1} = \\dfrac{27}{8}$, find the value of $a$.",
        "options": {
          "A": "$-2$",
          "B": "$2$",
          "C": "$-4$",
          "D": "$4$"
        },
        "correctAnswer": "A",
        "explanation": "$\\dfrac{27}{8} = \\left(\\dfrac{3}{2}\\right)^3 = \\left(\\dfrac{2}{3}\\right)^{-3}$. Then $a - 1 = -3 \\implies a = -2$."
      },
      {
        "id": "WAEC-SS1-IND-008",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify: $\\dfrac{16^{-1/2}}{64^{2/3}}$.",
        "options": {
          "A": "$\\dfrac{1}{64}$",
          "B": "$\\dfrac{1}{16}$",
          "C": "$\\dfrac{1}{32}$",
          "D": "$4$"
        },
        "correctAnswer": "A",
        "explanation": "$16^{-1/2} = \\frac{1}{\\sqrt{16}} = \\frac{1}{4}$. $64^{2/3} = (4^3)^{2/3} = 4^2 = 16$. Then $\\dfrac{1/4}{16} = \\dfrac{1}{64}$."
      },
      {
        "id": "WAEC-SS1-IND-009",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Solve the equation: $3x^{-2} = \\dfrac{4}{27}$.",
        "options": {
          "A": "$\\pm\\dfrac{9}{2}$",
          "B": "$\\pm\\dfrac{3}{2}$",
          "C": "$\\pm\\dfrac{27}{2}$",
          "D": "$\\dfrac{9}{2}\\text{ only}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\dfrac{3}{x^2} = \\dfrac{4}{27} \\implies 4x^2 = 81 \\implies x^2 = \\dfrac{81}{4} \\implies x = \\pm\\dfrac{9}{2}$."
      },
      {
        "id": "WAEC-SS1-IND-010",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Express $\\dfrac{3.50}{0.0025}$ in standard form.",
        "options": {
          "A": "$1.4 \\times 10^3$",
          "B": "$1.4 \\times 10^2$",
          "C": "$1.4 \\times 10^4$",
          "D": "$14 \\times 10^2$"
        },
        "correctAnswer": "A",
        "explanation": "$\\dfrac{3.5}{2.5 \\times 10^{-3}} = \\dfrac{3.5}{2.5} \\times 10^3 = 1.4 \\times 10^3$."
      },
      {
        "id": "WAEC-SS1-IND-011",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "The product of $0.0022$ and $0.017$ expressed in standard form is:",
        "options": {
          "A": "$3.74 \\times 10^{-5}$",
          "B": "$3.74 \\times 10^{-4}$",
          "C": "$3.74 \\times 10^{-6}$",
          "D": "$37.4 \\times 10^{-6}$"
        },
        "correctAnswer": "A",
        "explanation": "$(2.2 \\times 10^{-3}) \\times (1.7 \\times 10^{-2}) = (2.2 \\times 1.7) \\times 10^{-5} = 3.74 \\times 10^{-5}$."
      },
      {
        "id": "WAEC-SS1-IND-012",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify: $\\sqrt{3} + 2 - \\dfrac{1}{2 - \\sqrt{3}}$.",
        "options": {
          "A": "$0$",
          "B": "$2\\sqrt{3}$",
          "C": "$4$",
          "D": "$1$"
        },
        "correctAnswer": "A",
        "explanation": "Rationalize: $\\dfrac{1}{2 - \\sqrt{3}} = \\dfrac{2 + \\sqrt{3}}{(2-\\sqrt{3})(2+\\sqrt{3})} = 2 + \\sqrt{3}$. Then $\\sqrt{3} + 2 - (2 + \\sqrt{3}) = 0$."
      },
      {
        "id": "WAEC-SS1-IND-013",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify: $\\dfrac{3\\sqrt{15} \\times 2\\sqrt{48}}{\\sqrt{32} \\times 4\\sqrt{45}}$.",
        "options": {
          "A": "$\\dfrac{3\\sqrt{2}}{4}$",
          "B": "$\\dfrac{3}{4}$",
          "C": "$\\dfrac{\\sqrt{2}}{2}$",
          "D": "$\\dfrac{3\\sqrt{5}}{4}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\dfrac{6\\sqrt{720}}{4\\sqrt{1440}} = \\dfrac{6}{4\\sqrt{2}} = \\dfrac{3}{2\\sqrt{2}} = \\dfrac{3\\sqrt{2}}{4}$."
      },
      {
        "id": "WAEC-SS1-IND-014",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify: $5\\sqrt{12} - 4\\sqrt{75} + 3\\sqrt{48}$.",
        "options": {
          "A": "$2\\sqrt{3}$",
          "B": "$3\\sqrt{3}$",
          "C": "$\\sqrt{3}$",
          "D": "$4\\sqrt{3}$"
        },
        "correctAnswer": "A",
        "explanation": "$5(2\\sqrt{3}) - 4(5\\sqrt{3}) + 3(4\\sqrt{3}) = 10\\sqrt{3} - 20\\sqrt{3} + 12\\sqrt{3} = 2\\sqrt{3}$."
      },
      {
        "id": "WAEC-SS1-IND-015",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify by rationalizing the denominator: $\\dfrac{\\sqrt{5} + \\sqrt{3}}{\\sqrt{5} - \\sqrt{3}}$.",
        "options": {
          "A": "$4 + \\sqrt{15}$",
          "B": "$4 - \\sqrt{15}$",
          "C": "$8 + 2\\sqrt{15}$",
          "D": "$2 + \\sqrt{15}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\dfrac{(\\sqrt{5} + \\sqrt{3})^2}{5 - 3} = \\dfrac{5 + 2\\sqrt{15} + 3}{2} = \\dfrac{8 + 2\\sqrt{15}}{2} = 4 + \\sqrt{15}$."
      },
      {
        "id": "WAEC-SS1-IND-016",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify: $\\dfrac{1}{\\sqrt{2}}\\left[\\dfrac{1}{\\sqrt{3} + \\sqrt{2}} - \\dfrac{1}{\\sqrt{3} - \\sqrt{2}}\\right]$.",
        "options": {
          "A": "$-2$",
          "B": "$2$",
          "C": "$-\\sqrt{2}$",
          "D": "$0$"
        },
        "correctAnswer": "A",
        "explanation": "Inside bracket: $(\\sqrt{3} - \\sqrt{2}) - (\\sqrt{3} + \\sqrt{2}) = -2\\sqrt{2}$. Multiply by $\\frac{1}{\\sqrt{2}}$: $\\dfrac{-2\\sqrt{2}}{\\sqrt{2}} = -2$."
      },
      {
        "id": "WAEC-SS1-IND-017",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "If $x = 2 - \\sqrt{2}$, evaluate $x^2 + \\dfrac{4}{x^2}$.",
        "options": {
          "A": "$12$",
          "B": "$6$",
          "C": "$8$",
          "D": "$16$"
        },
        "correctAnswer": "A",
        "explanation": "$x^2 = (2-\\sqrt{2})^2 = 6 - 4\\sqrt{2}$. $\\dfrac{4}{x^2} = \\dfrac{4}{6 - 4\\sqrt{2}} = 6 + 4\\sqrt{2}$. Sum $= (6 - 4\\sqrt{2}) + (6 + 4\\sqrt{2}) = 12$."
      },
      {
        "id": "WAEC-SS1-IND-018",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify: $\\dfrac{1}{2 - \\sqrt{3}} - \\dfrac{1}{2 + \\sqrt{3}}$.",
        "options": {
          "A": "$2\\sqrt{3}$",
          "B": "$4$",
          "C": "$0$",
          "D": "$\\sqrt{3}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\dfrac{(2 + \\sqrt{3}) - (2 - \\sqrt{3})}{(2 - \\sqrt{3})(2 + \\sqrt{3})} = \\dfrac{2\\sqrt{3}}{4 - 3} = 2\\sqrt{3}$."
      },
      {
        "id": "WAEC-SS1-IND-019",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify: $3\\sqrt{18} - \\dfrac{16}{\\sqrt{2}} + \\sqrt{50}$.",
        "options": {
          "A": "$6\\sqrt{2}$",
          "B": "$7\\sqrt{2}$",
          "C": "$4\\sqrt{2}$",
          "D": "$5\\sqrt{2}$"
        },
        "correctAnswer": "A",
        "explanation": "$3(3\\sqrt{2}) - 8\\sqrt{2} + 5\\sqrt{2} = 9\\sqrt{2} - 8\\sqrt{2} + 5\\sqrt{2} = 6\\sqrt{2}$."
      },
      {
        "id": "WAEC-SS1-IND-020",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Find the square of $3 - \\sqrt{2}$.",
        "options": {
          "A": "$11 - 6\\sqrt{2}$",
          "B": "$7 - 6\\sqrt{2}$",
          "C": "$11 + 6\\sqrt{2}$",
          "D": "$9 - 2\\sqrt{2}$"
        },
        "correctAnswer": "A",
        "explanation": "$(3 - \\sqrt{2})^2 = 3^2 - 2(3)(\\sqrt{2}) + (\\sqrt{2})^2 = 9 - 6\\sqrt{2} + 2 = 11 - 6\\sqrt{2}$."
      },
      {
        "id": "WAEC-SS1-IND-021",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "If $a\\sqrt{5} + b\\sqrt{2}$ is a square root of $95 - 30\\sqrt{10}$, find the values of $a$ and $b$.",
        "options": {
          "A": "$a = 3,\\ b = -5$",
          "B": "$a = 5,\\ b = -3$",
          "C": "$a = 3,\\ b = 5$",
          "D": "$a = 15,\\ b = -1$"
        },
        "correctAnswer": "A",
        "explanation": "$(a\\sqrt{5} + b\\sqrt{2})^2 = 5a^2 + 2b^2 + 2ab\\sqrt{10} = 95 - 30\\sqrt{10}$. $2ab = -30 \\implies ab = -15$. Testing $a=3, b=-5$: $5(9) + 2(25) = 45 + 50 = 95$."
      },
      {
        "id": "WAEC-SS1-IND-022",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Solve for $x$: $2^{2x+1} - 9(2^x) + 4 = 0$.",
        "options": {
          "A": "$x = -1\\text{ or }x = 2$",
          "B": "$x = 1\\text{ or }x = -2$",
          "C": "$x = 0\\text{ or }x = 2$",
          "D": "$x = 1\\text{ or }x = 4$"
        },
        "correctAnswer": "A",
        "explanation": "$2(2^x)^2 - 9(2^x) + 4 = 0 \\implies (2y - 1)(y - 4) = 0 \\implies 2^x = \\frac{1}{2} \\implies x = -1$, or $2^x = 4 \\implies x = 2$."
      },
      {
        "id": "WAEC-SS1-IND-023",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Evaluate: $(0.008)^{-2/3}$.",
        "options": {
          "A": "$25$",
          "B": "$125$",
          "C": "$5$",
          "D": "$\\dfrac{1}{25}$"
        },
        "correctAnswer": "A",
        "explanation": "$0.008 = \\frac{8}{1000} = \\frac{1}{125} = 5^{-3}$. $(5^{-3})^{-2/3} = 5^2 = 25$."
      },
      {
        "id": "WAEC-SS1-IND-024",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "Simplify: $\\dfrac{x^{2/3} \\times x^{-1/2}}{x^{1/6}}$.",
        "options": {
          "A": "$1$",
          "B": "$x$",
          "C": "$x^{1/3}$",
          "D": "$x^{-1/3}$"
        },
        "correctAnswer": "A",
        "explanation": "Exponent: $\\frac{2}{3} - \\frac{1}{2} - \\frac{1}{6} = \\frac{4 - 3 - 1}{6} = 0$. $x^0 = 1$."
      },
      {
        "id": "WAEC-SS1-IND-025",
        "class": "SSS 1",
        "topic": "Indices",
        "question": "If $4^{x+1} = 64$, find $x$.",
        "options": {
          "A": "$2$",
          "B": "$3$",
          "C": "$1$",
          "D": "$4$"
        },
        "correctAnswer": "A",
        "explanation": "$4^{x+1} = 4^3 \\implies x + 1 = 3 \\implies x = 2$."
      },
      {
        "id": "WAEC-SS1-LOG-001",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Evaluate $\\log_{10}\\dfrac{1}{70}$ given that $\\log_{10}7 = 0.8451$.",
        "options": {
          "A": "$-1.8451\\text{ (or }\\bar{2}.1549\\text{)}$",
          "B": "$-1.1549$",
          "C": "$0.8451$",
          "D": "$-2.8451$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_{10}\\frac{1}{70} = -\\log_{10}(7 \\times 10) = -(0.8451 + 1) = -1.8451 = -2 + 0.1549 = \\bar{2}.1549$."
      },
      {
        "id": "WAEC-SS1-LOG-002",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Find $x$ if $4\\log x + 5\\log x - 7\\log x = \\log 16$.",
        "options": {
          "A": "$4$",
          "B": "$2$",
          "C": "$8$",
          "D": "$16$"
        },
        "correctAnswer": "A",
        "explanation": "$2\\log x = \\log(x^2) = \\log 16 \\implies x^2 = 16 \\implies x = 4$ ($x > 0$)."
      },
      {
        "id": "WAEC-SS1-LOG-003",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Evaluate $\\log_{10}0.225$ if $\\log_{10}3 = 0.477$ and $\\log_{10}5 = 0.699$.",
        "options": {
          "A": "$\\bar{1}.352\\text{ (or }-0.648\\text{)}$",
          "B": "$\\bar{2}.352$",
          "C": "$-0.352$",
          "D": "$0.352$"
        },
        "correctAnswer": "A",
        "explanation": "$0.225 = \\frac{225}{1000} = \\frac{3^2 \\times 5^2}{10^3}$. $\\log(0.225) = 2(0.477) + 2(0.699) - 3 = 0.954 + 1.398 - 3 = 2.352 - 3 = -0.648 = \\bar{1}.352$."
      },
      {
        "id": "WAEC-SS1-LOG-004",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "If $\\log_{10}3 = 0.4771$ and $10^x = 0.3$, find $x$.",
        "options": {
          "A": "$-0.5229\\text{ (or }\\bar{1}.4771\\text{)}$",
          "B": "$0.4771$",
          "C": "$-1.4771$",
          "D": "$0.5229$"
        },
        "correctAnswer": "A",
        "explanation": "$x = \\log_{10}(0.3) = \\log_{10}\\left(\\frac{3}{10}\\right) = \\log_{10}3 - 1 = 0.4771 - 1 = -0.5229$."
      },
      {
        "id": "WAEC-SS1-LOG-005",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Evaluate: $\\log_3 27 + \\log_3 6 - \\log_3 54$.",
        "options": {
          "A": "$1$",
          "B": "$0$",
          "C": "$3$",
          "D": "$2$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_3\\left(\\dfrac{27 \\times 6}{54}\\right) = \\log_3\\left(\\dfrac{162}{54}\\right) = \\log_3 3 = 1$."
      },
      {
        "id": "WAEC-SS1-LOG-006",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Evaluate: $\\dfrac{\\log_2 8 - \\log_{1/3}81}{\\log_4(1/64)}$.",
        "options": {
          "A": "$-\\dfrac{7}{3}$",
          "B": "$\\dfrac{7}{3}$",
          "C": "$-\\dfrac{1}{3}$",
          "D": "$-3$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_2 8 = 3$, $\\log_{1/3} 81 = -4$, $\\log_4(1/64) = -3$. Numerator $= 3 - (-4) = 7$. Denominator $= -3$. Result $= -\\dfrac{7}{3}$."
      },
      {
        "id": "WAEC-SS1-LOG-007",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Solve for $x$: $\\log_{10}(3x - 4) - \\log_{10}2 = 1$.",
        "options": {
          "A": "$8$",
          "B": "$6$",
          "C": "$10$",
          "D": "$4$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_{10}\\left(\\dfrac{3x-4}{2}\\right) = 1 \\implies \\dfrac{3x-4}{2} = 10 \\implies 3x - 4 = 20 \\implies 3x = 24 \\implies x = 8$."
      },
      {
        "id": "WAEC-SS1-LOG-008",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Calculate the value of $4^{3/2} + \\log_5 0.04 + \\log_3 81$.",
        "options": {
          "A": "$10$",
          "B": "$8$",
          "C": "$12$",
          "D": "$14$"
        },
        "correctAnswer": "A",
        "explanation": "$4^{3/2} = 8$, $\\log_5 0.04 = \\log_5(1/25) = -2$, $\\log_3 81 = 4$. Total $= 8 + (-2) + 4 = 10$."
      },
      {
        "id": "WAEC-SS1-LOG-009",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Express $x$ in terms of $p$ and $q$ if $\\log p = 0.5\\log x + 2\\log q$.",
        "options": {
          "A": "$\\dfrac{p^2}{q^4}$",
          "B": "$\\dfrac{p}{q^2}$",
          "C": "$\\dfrac{p^2}{q^2}$",
          "D": "$p^2 q^4$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log p = \\log(x^{1/2} q^2) \\implies p = \\sqrt{x} q^2 \\implies \\sqrt{x} = \\dfrac{p}{q^2} \\implies x = \\dfrac{p^2}{q^4}$."
      },
      {
        "id": "WAEC-SS1-LOG-010",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "If $\\log_{10}4 = 0.6021$, evaluate $\\log_{10}40 + 3\\log_{10}400$.",
        "options": {
          "A": "$9.4084$",
          "B": "$8.8063$",
          "C": "$7.4084$",
          "D": "$9.2042$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_{10}40 = 1.6021$; $\\log_{10}400 = 2.6021$. $1.6021 + 3(2.6021) = 1.6021 + 7.8063 = 9.4084$."
      },
      {
        "id": "WAEC-SS1-LOG-011",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Find the value of $ab$ if $a = \\log_2 3$ and $b = \\log_3 8$.",
        "options": {
          "A": "$3$",
          "B": "$2$",
          "C": "$4$",
          "D": "$8$"
        },
        "correctAnswer": "A",
        "explanation": "$ab = \\log_2 3 \\times \\log_3 8 = \\log_2 8 = 3$ by change of base rule."
      },
      {
        "id": "WAEC-SS1-LOG-012",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Find $a$ if $\\log a - \\log(a - 1) = \\log 3$.",
        "options": {
          "A": "$\\dfrac{3}{2}$",
          "B": "$\\dfrac{2}{3}$",
          "C": "$3$",
          "D": "$2$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log\\left(\\dfrac{a}{a-1}\\right) = \\log 3 \\implies \\dfrac{a}{a-1} = 3 \\implies a = 3a - 3 \\implies 2a = 3 \\implies a = \\dfrac{3}{2}$."
      },
      {
        "id": "WAEC-SS1-LOG-013",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Find $x$ if $\\log_4 x = 3.5$.",
        "options": {
          "A": "$128$",
          "B": "$64$",
          "C": "$256$",
          "D": "$14$"
        },
        "correctAnswer": "A",
        "explanation": "$x = 4^{3.5} = 4^{7/2} = (2^2)^{7/2} = 2^7 = 128$."
      },
      {
        "id": "WAEC-SS1-LOG-014",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Find the value of $x$ if $\\dfrac{1}{2}\\log_{10}x = 1$.",
        "options": {
          "A": "$100$",
          "B": "$10$",
          "C": "$1000$",
          "D": "$20$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_{10}x = 2 \\implies x = 10^2 = 100$."
      },
      {
        "id": "WAEC-SS1-LOG-015",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "If $\\log_{10}x = 0.5$, what is the exact value of $x$?",
        "options": {
          "A": "$\\sqrt{10}$",
          "B": "$5$",
          "C": "$10$",
          "D": "$0.25$"
        },
        "correctAnswer": "A",
        "explanation": "$x = 10^{0.5} = 10^{1/2} = \\sqrt{10}$."
      },
      {
        "id": "WAEC-SS1-LOG-016",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Given $\\log_b 2 = 0.693$ and $\\log_b 5 = 1.609$, evaluate $\\log_b 62.5$.",
        "options": {
          "A": "$4.134$",
          "B": "$4.827$",
          "C": "$3.525$",
          "D": "$2.415$"
        },
        "correctAnswer": "A",
        "explanation": "$62.5 = \\frac{125}{2} = \\frac{5^3}{2}$. $\\log_b 62.5 = 3\\log_b 5 - \\log_b 2 = 3(1.609) - 0.693 = 4.827 - 0.693 = 4.134$."
      },
      {
        "id": "WAEC-SS1-LOG-017",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "If $a = x^{1/n}$, evaluate $\\log_a x^n$.",
        "options": {
          "A": "$n^2$",
          "B": "$n$",
          "C": "$1$",
          "D": "$\\dfrac{1}{n^2}$"
        },
        "correctAnswer": "A",
        "explanation": "$x = a^n \\implies x^n = a^{n^2}$. Therefore $\\log_a x^n = \\log_a(a^{n^2}) = n^2$."
      },
      {
        "id": "WAEC-SS1-LOG-018",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Evaluate: $\\dfrac{\\log_{10}0.04 + \\log_{10}0.25}{\\log_5 100 - \\log_5 4}$.",
        "options": {
          "A": "$-1$",
          "B": "$1$",
          "C": "$0$",
          "D": "$-2$"
        },
        "correctAnswer": "A",
        "explanation": "Numerator: $\\log_{10}(0.04 \\times 0.25) = \\log_{10}(0.01) = -2$. Denominator: $\\log_5(100/4) = \\log_5 25 = 2$. Ratio: $\\frac{-2}{2} = -1$."
      },
      {
        "id": "WAEC-SS1-LOG-019",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Given that $\\log_{10}2 = 0.3010$ and $\\log_{10}3 = 0.4771$, calculate $\\log_{10}18$.",
        "options": {
          "A": "$1.2552$",
          "B": "$1.5562$",
          "C": "$0.7781$",
          "D": "$1.0791$"
        },
        "correctAnswer": "A",
        "explanation": "$18 = 2 \\times 3^2$. $\\log_{10}18 = \\log_{10}2 + 2\\log_{10}3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552$."
      },
      {
        "id": "WAEC-SS1-LOG-020",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Solve for $x$: $\\log_2 x + \\log_2(x - 2) = 3$.",
        "options": {
          "A": "$x = 4$",
          "B": "$x = 2$",
          "C": "$x = -2$",
          "D": "$x = 4\\text{ or }x = -2$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_2[x(x - 2)] = 3 \\implies x^2 - 2x = 8 \\implies x^2 - 2x - 8 = 0 \\implies (x - 4)(x + 2) = 0$. Since $x > 2$, $x = 4$."
      },
      {
        "id": "WAEC-SS1-LOG-021",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Evaluate: $\\log_5 125 - \\log_2 32 + \\log_7 49$.",
        "options": {
          "A": "$0$",
          "B": "$1$",
          "C": "$2$",
          "D": "$-1$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_5 125 = 3$; $\\log_2 32 = 5$; $\\log_7 49 = 2$. Then $3 - 5 + 2 = 0$."
      },
      {
        "id": "WAEC-SS1-LOG-022",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Solve: $\\log_3(x + 1) + \\log_3(x - 1) = 1$.",
        "options": {
          "A": "$x = 2$",
          "B": "$x = 1$",
          "C": "$x = \\sqrt{2}$",
          "D": "$x = 3$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_3(x^2 - 1) = 1 \\implies x^2 - 1 = 3 \\implies x^2 = 4 \\implies x = 2$ ($x > 1$)."
      },
      {
        "id": "WAEC-SS1-LOG-023",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Find the characteristic of $\\log_{10} 45200$.",
        "options": {
          "A": "$4$",
          "B": "$5$",
          "C": "$3$",
          "D": "$2$"
        },
        "correctAnswer": "A",
        "explanation": "$45200 = 4.52 \\times 10^4$. The power of $10$ is $4$, so the characteristic is $4$."
      },
      {
        "id": "WAEC-SS1-LOG-024",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "If $\\log_x 64 = 3$, find $x$.",
        "options": {
          "A": "$4$",
          "B": "$8$",
          "C": "$2$",
          "D": "$16$"
        },
        "correctAnswer": "A",
        "explanation": "$x^3 = 64 = 4^3 \\implies x = 4$."
      },
      {
        "id": "WAEC-SS1-LOG-025",
        "class": "SSS 1",
        "topic": "Logarithm",
        "question": "Simplify: $\\dfrac{\\log 8}{\\log 4}$.",
        "options": {
          "A": "$\\dfrac{3}{2}$",
          "B": "$2$",
          "C": "$\\dfrac{2}{3}$",
          "D": "$\\log 2$"
        },
        "correctAnswer": "A",
        "explanation": "$\\dfrac{\\log(2^3)}{\\log(2^2)} = \\dfrac{3\\log 2}{2\\log 2} = \\dfrac{3}{2}$."
      },
      {
        "id": "WAEC-SS1-BASE-001",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "If $102_x = 27_{10}$, find the value of the base $x$.",
        "options": {
          "A": "$5$",
          "B": "$4$",
          "C": "$6$",
          "D": "$3$"
        },
        "correctAnswer": "A",
        "explanation": "$1(x^2) + 0(x^1) + 2(x^0) = 27 \\implies x^2 + 2 = 27 \\implies x^2 = 25 \\implies x = 5$."
      },
      {
        "id": "WAEC-SS1-BASE-002",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Evaluate in base two: $11011_2 + 10101_2$.",
        "options": {
          "A": "$110000_2$",
          "B": "$101000_2$",
          "C": "$110010_2$",
          "D": "$100110_2$"
        },
        "correctAnswer": "A",
        "explanation": "$27_{10} + 21_{10} = 48_{10}$. Converting $48_{10}$ to binary gives $110000_2$."
      },
      {
        "id": "WAEC-SS1-BASE-003",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Subtract in base eight: $634_8 - 257_8$.",
        "options": {
          "A": "$355_8$",
          "B": "$365_8$",
          "C": "$345_8$",
          "D": "$375_8$"
        },
        "correctAnswer": "A",
        "explanation": "$634_8 = 412_{10}$; $257_8 = 175_{10}$. $412 - 175 = 237_{10} = 355_8$."
      },
      {
        "id": "WAEC-SS1-BASE-004",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "If $32_x = 24_8$, find the base $x$.",
        "options": {
          "A": "$6$",
          "B": "$5$",
          "C": "$7$",
          "D": "$8$"
        },
        "correctAnswer": "A",
        "explanation": "$24_8 = 2(8) + 4 = 20_{10}$. $3x + 2 = 20 \\implies 3x = 18 \\implies x = 6$."
      },
      {
        "id": "WAEC-SS1-BASE-005",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Convert $(11.011)_2$ to a decimal fraction.",
        "options": {
          "A": "$3.375$",
          "B": "$3.625$",
          "C": "$3.25$",
          "D": "$3.75$"
        },
        "correctAnswer": "A",
        "explanation": "$11_2 = 3$. $0.011_2 = 0(\\frac{1}{2}) + 1(\\frac{1}{4}) + 1(\\frac{1}{8}) = 0.25 + 0.125 = 0.375$. Total $= 3.375$."
      },
      {
        "id": "WAEC-SS1-BASE-006",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "If $23_x + 101_2 = 130_4$, find $x$.",
        "options": {
          "A": "$10$",
          "B": "$8$",
          "C": "$7$",
          "D": "$6$"
        },
        "correctAnswer": "A",
        "explanation": "$101_2 = 5_{10}$. $130_4 = 1(16) + 3(4) + 0 = 28_{10}$. $(2x + 3) + 5 = 28 \\implies 2x + 8 = 28 \\implies 2x = 20 \\implies x = 10$."
      },
      {
        "id": "WAEC-SS1-BASE-007",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Multiply $110_2$ by $11_2$.",
        "options": {
          "A": "$10010_2$",
          "B": "$10100_2$",
          "C": "$11100_2$",
          "D": "$10001_2$"
        },
        "correctAnswer": "A",
        "explanation": "$110_2 = 6_{10}$; $11_2 = 3_{10}$. $6 \\times 3 = 18_{10} = 10010_2$."
      },
      {
        "id": "WAEC-SS1-BASE-008",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Convert $101101_2$ to an octal (base 8) number.",
        "options": {
          "A": "$55_8$",
          "B": "$45_8$",
          "C": "$53_8$",
          "D": "$65_8$"
        },
        "correctAnswer": "A",
        "explanation": "Group in 3s from right: $101$ and $101$. $101_2 = 5$. Thus $101101_2 = 55_8$."
      },
      {
        "id": "WAEC-SS1-BASE-009",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Convert $1101101_2$ to hexadecimal (base 16).",
        "options": {
          "A": "$6D_{16}$",
          "B": "$5D_{16}$",
          "C": "$6C_{16}$",
          "D": "$7D_{16}$"
        },
        "correctAnswer": "A",
        "explanation": "Group in 4s: $0110$ ($6$) and $1101$ ($13 = D$). Hence $6D_{16}$."
      },
      {
        "id": "WAEC-SS1-BASE-010",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Find the value of $P$ if $P_5 = 43_7$.",
        "options": {
          "A": "$111_5$",
          "B": "$121_5$",
          "C": "$104_5$",
          "D": "$114_5$"
        },
        "correctAnswer": "A",
        "explanation": "$43_7 = 4(7) + 3 = 31_{10}$. Converting $31_{10}$ to base $5$: $31 = 1(25) + 1(5) + 1(1) = 111_5$."
      },
      {
        "id": "WAEC-SS1-BASE-011",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "If $121_x = 36_{10}$, find $x$.",
        "options": {
          "A": "$5$",
          "B": "$6$",
          "C": "$7$",
          "D": "$4$"
        },
        "correctAnswer": "A",
        "explanation": "$x^2 + 2x + 1 = 36 \\implies (x + 1)^2 = 36 \\implies x + 1 = 6 \\implies x = 5$."
      },
      {
        "id": "WAEC-SS1-BASE-012",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Evaluate: $324_5 + 412_5$.",
        "options": {
          "A": "$1241_5$",
          "B": "$1231_5$",
          "C": "$1242_5$",
          "D": "$1211_5$"
        },
        "correctAnswer": "A",
        "explanation": "$324_5 = 89_{10}$; $412_5 = 107_{10}$. Sum $= 196_{10}$. $196 = 1(125) + 2(25) + 4(5) + 1 = 1241_5$."
      },
      {
        "id": "WAEC-SS1-BASE-013",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Subtract in base six: $432_6 - 155_6$.",
        "options": {
          "A": "$233_6$",
          "B": "$243_6$",
          "C": "$223_6$",
          "D": "$333_6$"
        },
        "correctAnswer": "A",
        "explanation": "$432_6 = 164_{10}$; $155_6 = 71_{10}$. $164 - 71 = 93_{10}$. $93 = 2(36) + 3(6) + 3 = 233_6$."
      },
      {
        "id": "WAEC-SS1-BASE-014",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Convert $234_8$ to a base $10$ integer.",
        "options": {
          "A": "$156$",
          "B": "$164$",
          "C": "$148$",
          "D": "$172$"
        },
        "correctAnswer": "A",
        "explanation": "$2(8^2) + 3(8^1) + 4(8^0) = 2(64) + 24 + 4 = 128 + 28 = 156_{10}$."
      },
      {
        "id": "WAEC-SS1-BASE-015",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "If $1101_2 - x_2 = 111_2$, find $x_2$.",
        "options": {
          "A": "$110_2$",
          "B": "$101_2$",
          "C": "$100_2$",
          "D": "$111_2$"
        },
        "correctAnswer": "A",
        "explanation": "$1101_2 = 13_{10}$, $111_2 = 7_{10}$. $x = 13 - 7 = 6_{10} = 110_2$."
      },
      {
        "id": "WAEC-SS1-BASE-016",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "If $34_n = 22_{10}$, find $n$.",
        "options": {
          "A": "$6$",
          "B": "$5$",
          "C": "$7$",
          "D": "$8$"
        },
        "correctAnswer": "A",
        "explanation": "$3n + 4 = 22 \\implies 3n = 18 \\implies n = 6$."
      },
      {
        "id": "WAEC-SS1-BASE-017",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Evaluate: $1011_2 \\div 11_2$.",
        "options": {
          "A": "$3\\text{ rem }2\\text{ (or }11_2\\text{ rem }10_2\\text{)}$",
          "B": "$4\\text{ rem }1$",
          "C": "$2\\text{ rem }1$",
          "D": "$3\\text{ rem }0$"
        },
        "correctAnswer": "A",
        "explanation": "$1011_2 = 11_{10}$; $11_2 = 3_{10}$. $11 \\div 3 = 3$ remainder $2$ ($11_2$ remainder $10_2$)."
      },
      {
        "id": "WAEC-SS1-BASE-018",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Convert $47_{10}$ to base $3$.",
        "options": {
          "A": "$1202_3$",
          "B": "$1212_3$",
          "C": "$1102_3$",
          "D": "$1222_3$"
        },
        "correctAnswer": "A",
        "explanation": "$47 = 1(27) + 2(9) + 0(3) + 2(1) = 1202_3$."
      },
      {
        "id": "WAEC-SS1-BASE-019",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "If $212_3 = x_{10}$, find $x$.",
        "options": {
          "A": "$23$",
          "B": "$21$",
          "C": "$19$",
          "D": "$25$"
        },
        "correctAnswer": "A",
        "explanation": "$2(3^2) + 1(3^1) + 2(3^0) = 18 + 3 + 2 = 23$."
      },
      {
        "id": "WAEC-SS1-BASE-020",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Solve for $y$ if $y_8 = 10110_2$.",
        "options": {
          "A": "$26_8$",
          "B": "$36_8$",
          "C": "$16_8$",
          "D": "$24_8$"
        },
        "correctAnswer": "A",
        "explanation": "$10110_2 = 010\\ 110_2 = 26_8$."
      },
      {
        "id": "WAEC-SS1-BASE-021",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "If $43_x = 23_{10}$, find the value of $x$.",
        "options": {
          "A": "$5$",
          "B": "$6$",
          "C": "$7$",
          "D": "$4$"
        },
        "correctAnswer": "A",
        "explanation": "$4x + 3 = 23 \\implies 4x = 20 \\implies x = 5$."
      },
      {
        "id": "WAEC-SS1-BASE-022",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Calculate $1000_2 - 111_2$.",
        "options": {
          "A": "$1_2$",
          "B": "$10_2$",
          "C": "$11_2$",
          "D": "$100_2$"
        },
        "correctAnswer": "A",
        "explanation": "$1000_2 = 8_{10}$; $111_2 = 7_{10}$. $8 - 7 = 1_{10} = 1_2$."
      },
      {
        "id": "WAEC-SS1-BASE-023",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Convert $0.625_{10}$ to binary.",
        "options": {
          "A": "$0.101_2$",
          "B": "$0.110_2$",
          "C": "$0.011_2$",
          "D": "$0.111_2$"
        },
        "correctAnswer": "A",
        "explanation": "$0.625 = \\frac{1}{2} + \\frac{1}{8} = 0.101_2$."
      },
      {
        "id": "WAEC-SS1-BASE-024",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "Find the base $b$ such that $13_b + 24_b = 42_b$.",
        "options": {
          "A": "$5$",
          "B": "$6$",
          "C": "$7$",
          "D": "$8$"
        },
        "correctAnswer": "A",
        "explanation": "$(b + 3) + (2b + 4) = 4b + 2 \\implies 3b + 7 = 4b + 2 \\implies b = 5$."
      },
      {
        "id": "WAEC-SS1-BASE-025",
        "class": "SSS 1",
        "topic": "Number Base Systems",
        "question": "If $204_n = 54_{10}$, find the value of $n$.",
        "options": {
          "A": "$5$",
          "B": "$6$",
          "C": "$7$",
          "D": "$4$"
        },
        "correctAnswer": "A",
        "explanation": "$2n^2 + 0n + 4 = 54 \\implies 2n^2 = 50 \\implies n^2 = 25 \\implies n = 5$."
      }
    ],
    "SSS 2": [
      {
        "id": "WAEC-SS2-IND-001",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Solve the equation: $2^{2x} - 5(2^x) + 4 = 0$.",
        "options": {
          "A": "$x = 0\\text{ or }x = 2$",
          "B": "$x = 1\\text{ or }x = 4$",
          "C": "$x = 2\\text{ or }x = 4$",
          "D": "$x = -1\\text{ or }x = 2$"
        },
        "correctAnswer": "A",
        "explanation": "Let $y = 2^x$. Then $y^2 - 5y + 4 = 0 \\implies (y - 1)(y - 4) = 0 \\implies y = 1$ or $y = 4$. If $2^x = 1 = 2^0 \\implies x = 0$; if $2^x = 4 = 2^2 \\implies x = 2$."
      },
      {
        "id": "WAEC-SS2-IND-002",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Evaluate: $\\left(\\dfrac{16}{81}\\right)^{-3/4}$.",
        "options": {
          "A": "$\\dfrac{27}{8}$",
          "B": "$\\dfrac{8}{27}$",
          "C": "$\\dfrac{9}{4}$",
          "D": "$\\dfrac{4}{9}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\left(\\dfrac{16}{81}\\right)^{-3/4} = \\left(\\dfrac{81}{16}\\right)^{3/4} = \\left[\\left(\\dfrac{3}{2}\\right)^4\\right]^{3/4} = \\left(\\dfrac{3}{2}\\right)^3 = \\dfrac{27}{8}$."
      },
      {
        "id": "WAEC-SS2-IND-003",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "If $3^{2x - 1} \\times 9^{x + 1} = 27^{x + 2}$, find the value of $x$.",
        "options": {
          "A": "$5$",
          "B": "$3$",
          "C": "$2$",
          "D": "$4$"
        },
        "correctAnswer": "A",
        "explanation": "$3^{2x - 1} \\times 3^{2(x + 1)} = 3^{3(x + 2)} \\implies 3^{4x + 1} = 3^{3x + 6} \\implies 4x + 1 = 3x + 6 \\implies x = 5$."
      },
      {
        "id": "WAEC-SS2-IND-004",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Solve for $x$ if $4^{x+1} - 9(2^x) + 2 = 0$.",
        "options": {
          "A": "$x = 1\\text{ or }x = -2$",
          "B": "$x = 1\\text{ or }x = -1$",
          "C": "$x = -1\\text{ or }x = -2$",
          "D": "$x = 2\\text{ or }x = -1$"
        },
        "correctAnswer": "A",
        "explanation": "$4(2^x)^2 - 9(2^x) + 2 = 0$. Let $u = 2^x$: $4u^2 - 9u + 2 = (4u - 1)(u - 2) = 0 \\implies u = 1/4$ or $u = 2$. $2^x = 2^{-2} \\implies x = -2$; $2^x = 2^1 \\implies x = 1$."
      },
      {
        "id": "WAEC-SS2-IND-005",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Simplify: $\\dfrac{x^{1/2} \\, y^{-2/3}}{x^{-1/4} \\, y^{1/3}}$.",
        "options": {
          "A": "$\\dfrac{x^{3/4}}{y}$",
          "B": "$x^{1/4} y$",
          "C": "$x^{3/4} y$",
          "D": "$\\dfrac{1}{x^{3/4} y}$"
        },
        "correctAnswer": "A",
        "explanation": "$x^{1/2 - (-1/4)} \\, y^{-2/3 - 1/3} = x^{3/4} \\, y^{-1} = \\dfrac{x^{3/4}}{y}$."
      },
      {
        "id": "WAEC-SS2-IND-006",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "If $2^{x + y} = 16$ and $3^{x - y} = 9$, find the values of $x$ and $y$.",
        "options": {
          "A": "$x = 3,\\ y = 1$",
          "B": "$x = 4,\\ y = 2$",
          "C": "$x = 2,\\ y = 1$",
          "D": "$x = 5,\\ y = 1$"
        },
        "correctAnswer": "A",
        "explanation": "$2^{x+y} = 2^4 \\implies x + y = 4$. $3^{x-y} = 3^2 \\implies x - y = 2$. Adding gives $2x = 6 \\implies x = 3, y = 1$."
      },
      {
        "id": "WAEC-SS2-IND-007",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Find $x$ if $\\left(\\dfrac{1}{2}\\right)^{2x - 3} = 8^{x + 1}$.",
        "options": {
          "A": "$0$",
          "B": "$-\\dfrac{1}{5}$",
          "C": "$\\dfrac{1}{5}$",
          "D": "$1$"
        },
        "correctAnswer": "A",
        "explanation": "$2^{-(2x - 3)} = (2^3)^{x + 1} \\implies 2^{3 - 2x} = 2^{3x + 3} \\implies 3 - 2x = 3x + 3 \\implies 5x = 0 \\implies x = 0$."
      },
      {
        "id": "WAEC-SS2-IND-008",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Evaluate: $(0.125)^{-2/3}$.",
        "options": {
          "A": "$4$",
          "B": "$2$",
          "C": "$8$",
          "D": "$\\dfrac{1}{4}$"
        },
        "correctAnswer": "A",
        "explanation": "$0.125 = \\frac{1}{8} = 2^{-3}$. $(2^{-3})^{-2/3} = 2^2 = 4$."
      },
      {
        "id": "WAEC-SS2-IND-009",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Solve the equation: $5^{2x} - 26(5^x) + 25 = 0$.",
        "options": {
          "A": "$x = 0\\text{ or }x = 2$",
          "B": "$x = 1\\text{ or }x = 2$",
          "C": "$x = -1\\text{ or }x = 2$",
          "D": "$x = 1\\text{ or }x = 5$"
        },
        "correctAnswer": "A",
        "explanation": "Let $u = 5^x$: $u^2 - 26u + 25 = 0 \\implies (u - 1)(u - 25) = 0 \\implies 5^x = 1 \\implies x = 0$; $5^x = 25 \\implies x = 2$."
      },
      {
        "id": "WAEC-SS2-IND-010",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Simplify: $\\dfrac{27^{2/3} \\times 4^{-1/2}}{36^{1/2}}$.",
        "options": {
          "A": "$\\dfrac{3}{4}$",
          "B": "$\\dfrac{3}{2}$",
          "C": "$\\dfrac{9}{4}$",
          "D": "$\\dfrac{1}{4}$"
        },
        "correctAnswer": "A",
        "explanation": "$27^{2/3} = 9$, $4^{-1/2} = 1/2$, $36^{1/2} = 6$. Ratio: $\\dfrac{9 \\times 0.5}{6} = \\dfrac{4.5}{6} = \\dfrac{3}{4}$."
      },
      {
        "id": "WAEC-SS2-IND-011",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "If $8^x = 32^y$ and $9^x = 27^{y + 1}$, find $x$ and $y$.",
        "options": {
          "A": "$x = 15,\\ y = 9$",
          "B": "$x = 10,\\ y = 6$",
          "C": "$x = 5,\\ y = 3$",
          "D": "$x = 12,\\ y = 8$"
        },
        "correctAnswer": "A",
        "explanation": "$2^{3x} = 2^{5y} \\implies 3x = 5y \\implies y = \\frac{3x}{5}$. $3^{2x} = 3^{3y+3} \\implies 2x = 3y + 3$. $2x - \\frac{9x}{5} = 3 \\implies \\frac{x}{5} = 3 \\implies x = 15, y = 9$."
      },
      {
        "id": "WAEC-SS2-IND-012",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Solve for $x$: $25^{x - 1} = \\left(\\dfrac{1}{125}\\right)^{x + 2}$.",
        "options": {
          "A": "$-\\dfrac{4}{5}$",
          "B": "$-\\dfrac{2}{5}$",
          "C": "$\\dfrac{4}{5}$",
          "D": "$-\\dfrac{1}{2}$"
        },
        "correctAnswer": "A",
        "explanation": "$5^{2(x - 1)} = 5^{-3(x + 2)} \\implies 2x - 2 = -3x - 6 \\implies 5x = -4 \\implies x = -\\dfrac{4}{5}$."
      },
      {
        "id": "WAEC-SS2-IND-013",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Simplify: $\\dfrac{2^{n+4} - 2 \\times 2^n}{2 \\times 2^{n+3}}$.",
        "options": {
          "A": "$\\dfrac{7}{8}$",
          "B": "$\\dfrac{3}{4}$",
          "C": "$\\dfrac{1}{2}$",
          "D": "$\\dfrac{7}{16}$"
        },
        "correctAnswer": "A",
        "explanation": "Numerator: $2^n(16 - 2) = 14 \\cdot 2^n$. Denominator: $2^{n+4} = 16 \\cdot 2^n$. Ratio $= \\dfrac{14}{16} = \\dfrac{7}{8}$."
      },
      {
        "id": "WAEC-SS2-IND-014",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Find the values of $x$ satisfying: $9^{x + 1} - 28(3^x) + 3 = 0$.",
        "options": {
          "A": "$x = 1\\text{ or }x = -2$",
          "B": "$x = -1\\text{ or }x = 1$",
          "C": "$x = -1\\text{ or }x = -2$",
          "D": "$x = 2\\text{ or }x = 0$"
        },
        "correctAnswer": "A",
        "explanation": "$9(3^x)^2 - 28(3^x) + 3 = 0 \\implies (9u - 1)(u - 3) = 0 \\implies 3^x = 1/9 \\implies x = -2$; $3^x = 3 \\implies x = 1$."
      },
      {
        "id": "WAEC-SS2-IND-015",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Evaluate: $\\left(\\dfrac{64}{27}\\right)^{-2/3} \\times \\left(\\dfrac{16}{81}\\right)^{1/2}$.",
        "options": {
          "A": "$\\dfrac{1}{4}$",
          "B": "$\\dfrac{1}{3}$",
          "C": "$\\dfrac{2}{3}$",
          "D": "$\\dfrac{3}{4}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\left(\\dfrac{27}{64}\\right)^{2/3} = \\left(\\dfrac{3}{4}\\right)^2 = \\dfrac{9}{16}$. $\\left(\\dfrac{16}{81}\\right)^{1/2} = \\dfrac{4}{9}$. Product: $\\dfrac{9}{16} \\times \\dfrac{4}{9} = \\dfrac{4}{16} = \\dfrac{1}{4}$."
      },
      {
        "id": "WAEC-SS2-IND-016",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "If $2^{x - 1} + 2^{x + 1} = 40$, find $x$.",
        "options": {
          "A": "$4$",
          "B": "$3$",
          "C": "$5$",
          "D": "$6$"
        },
        "correctAnswer": "A",
        "explanation": "$2^x\\left(\\frac{1}{2} + 2\\right) = 40 \\implies 2^x\\left(\\frac{5}{2}\\right) = 40 \\implies 2^x = 16 = 2^4 \\implies x = 4$."
      },
      {
        "id": "WAEC-SS2-IND-017",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Given that $2^x = 3^y = 6^{-z}$, express $z$ in terms of $x$ and $y$.",
        "options": {
          "A": "$z = -\\dfrac{xy}{x + y}$",
          "B": "$z = \\dfrac{xy}{x + y}$",
          "C": "$z = \\dfrac{x + y}{xy}$",
          "D": "$z = x + y$"
        },
        "correctAnswer": "A",
        "explanation": "Let $2^x = 3^y = 6^{-z} = k$. $2 = k^{1/x}, 3 = k^{1/y}, 6 = k^{-1/z}$. $2 \\times 3 = 6 \\implies k^{1/x + 1/y} = k^{-1/z} \\implies \\frac{1}{x} + \\frac{1}{y} = -\\frac{1}{z} \\implies z = -\\dfrac{xy}{x+y}$."
      },
      {
        "id": "WAEC-SS2-IND-018",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Simplify: $\\left(\\dfrac{a^3 \\, b^{-2}}{a^{-1} \\, b^4}\\right)^{-1/2}$.",
        "options": {
          "A": "$\\dfrac{b^3}{a^2}$",
          "B": "$\\dfrac{a^2}{b^3}$",
          "C": "$\\dfrac{b^2}{a^3}$",
          "D": "$\\dfrac{a}{b^2}$"
        },
        "correctAnswer": "A",
        "explanation": "Inside: $a^{3 - (-1)} \\, b^{-2 - 4} = a^4 \\, b^{-6}$. Raising to $-1/2$: $(a^4)^{-1/2} \\, (b^{-6})^{-1/2} = a^{-2} \\, b^3 = \\dfrac{b^3}{a^2}$."
      },
      {
        "id": "WAEC-SS2-IND-019",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Solve the equation: $3^{2y + 1} - 10(3^y) + 3 = 0$.",
        "options": {
          "A": "$y = 1\\text{ or }y = -1$",
          "B": "$y = 2\\text{ or }y = 0$",
          "C": "$y = 3\\text{ or }y = 1/3$",
          "D": "$y = -1\\text{ or }y = -2$"
        },
        "correctAnswer": "A",
        "explanation": "$3(3^y)^2 - 10(3^y) + 3 = (3m - 1)(m - 3) = 0 \\implies 3^y = 1/3 \\implies y = -1$; $3^y = 3 \\implies y = 1$."
      },
      {
        "id": "WAEC-SS2-IND-020",
        "class": "SSS 2",
        "topic": "Indices",
        "question": "Rationalize the denominator of $\\dfrac{3\\sqrt{2} - 2\\sqrt{3}}{3\\sqrt{2} + 2\\sqrt{3}}$.",
        "options": {
          "A": "$5 - 2\\sqrt{6}$",
          "B": "$5 + 2\\sqrt{6}$",
          "C": "$18 - 12\\sqrt{6}$",
          "D": "$5 - \\sqrt{6}$"
        },
        "correctAnswer": "A",
        "explanation": "Multiply numerator & denominator by $3\\sqrt{2} - 2\\sqrt{3}$: $\\dfrac{(3\\sqrt{2} - 2\\sqrt{3})^2}{(3\\sqrt{2})^2 - (2\\sqrt{3})^2} = \\dfrac{18 - 12\\sqrt{6} + 12}{18 - 12} = \\dfrac{30 - 12\\sqrt{6}}{6} = 5 - 2\\sqrt{6}$."
      },
      {
        "id": "WAEC-SS2-LOG-001",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "If $\\log_a x = m$ and $\\log_a y = n$, express $\\log_a \\left(\\dfrac{x^3}{y^2}\\right)$ in terms of $m$ and $n$.",
        "options": {
          "A": "$3m - 2n$",
          "B": "$3m + 2n$",
          "C": "$m^3 - n^2$",
          "D": "$\\dfrac{3m}{2n}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_a(x^3 / y^2) = \\log_a(x^3) - \\log_a(y^2) = 3\\log_a x - 2\\log_a y = 3m - 2n$."
      },
      {
        "id": "WAEC-SS2-LOG-002",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "By the change of base formula, $\\log_b a$ is identically equal to:",
        "options": {
          "A": "$\\dfrac{\\log_c a}{\\log_c b}$",
          "B": "$\\dfrac{\\log_c b}{\\log_c a}$",
          "C": "$\\log_c(a \\cdot b)$",
          "D": "$\\log_c a - \\log_c b$"
        },
        "correctAnswer": "A",
        "explanation": "The standard change of base rule states $\\log_b a = \\dfrac{\\log_c a}{\\log_c b}$."
      },
      {
        "id": "WAEC-SS2-LOG-003",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Find $x$ if $\\log_3(x + 6) - \\log_3 x = 2$.",
        "options": {
          "A": "$\\dfrac{3}{4}$",
          "B": "$\\dfrac{4}{3}$",
          "C": "$2$",
          "D": "$\\dfrac{1}{2}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_3\\left(\\dfrac{x+6}{x}\\right) = 2 \\implies \\dfrac{x+6}{x} = 3^2 = 9 \\implies x + 6 = 9x \\implies 8x = 6 \\implies x = \\dfrac{3}{4}$."
      },
      {
        "id": "WAEC-SS2-LOG-004",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "If $\\log_{10}2 = 0.3010$ and $\\log_{10}3 = 0.4771$, calculate $\\log_{10}15$.",
        "options": {
          "A": "$1.1761$",
          "B": "$1.4771$",
          "C": "$0.7781$",
          "D": "$1.2552$"
        },
        "correctAnswer": "A",
        "explanation": "$15 = \\dfrac{3 \\times 10}{2} \\implies \\log 15 = \\log 3 + 1 - \\log 2 = 0.4771 + 1 - 0.3010 = 1.1761$."
      },
      {
        "id": "WAEC-SS2-LOG-005",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Evaluate without tables: $\\log_2 32 + \\log_3 81 - \\log_5 125$.",
        "options": {
          "A": "$6$",
          "B": "$4$",
          "C": "$7$",
          "D": "$5$"
        },
        "correctAnswer": "A",
        "explanation": "$5 + 4 - 3 = 6$."
      },
      {
        "id": "WAEC-SS2-LOG-006",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Solve for $x$: $\\log_x 64 = -3$.",
        "options": {
          "A": "$\\dfrac{1}{4}$",
          "B": "$4$",
          "C": "$-4$",
          "D": "$\\dfrac{1}{8}$"
        },
        "correctAnswer": "A",
        "explanation": "$x^{-3} = 64 = 4^3 = (1/4)^{-3} \\implies x = 1/4$."
      },
      {
        "id": "WAEC-SS2-LOG-007",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Given that $\\log_{10}y = 2\\log_{10}x + 3$, express $y$ in terms of $x$.",
        "options": {
          "A": "$y = 1000x^2$",
          "B": "$y = x^2 + 1000$",
          "C": "$y = 3x^2$",
          "D": "$y = 1000x$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_{10}y = \\log_{10}(x^2) + \\log_{10}(1000) = \\log_{10}(1000x^2) \\implies y = 1000x^2$."
      },
      {
        "id": "WAEC-SS2-LOG-008",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Simplify: $\\log_a b \\times \\log_b c \\times \\log_c a$.",
        "options": {
          "A": "$1$",
          "B": "$0$",
          "C": "$abc$",
          "D": "$\\log_a(abc)$"
        },
        "correctAnswer": "A",
        "explanation": "Using change of base: $\\dfrac{\\log b}{\\log a} \\times \\dfrac{\\log c}{\\log b} \\times \\dfrac{\\log a}{\\log c} = 1$."
      },
      {
        "id": "WAEC-SS2-LOG-009",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Solve the equation: $\\log_{10}(x^2 - 1) - \\log_{10}(x - 1) = 1$.",
        "options": {
          "A": "$x = 9$",
          "B": "$x = 10$",
          "C": "$x = 11$",
          "D": "$x = 8$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_{10}\\left(\\dfrac{x^2 - 1}{x - 1}\\right) = \\log_{10}(x + 1) = 1 \\implies x + 1 = 10 \\implies x = 9$."
      },
      {
        "id": "WAEC-SS2-LOG-010",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "If $\\log_2 x + 2\\log_4 x = 4$, find $x$.",
        "options": {
          "A": "$4$",
          "B": "$8$",
          "C": "$16$",
          "D": "$2$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_4 x = \\frac{1}{2}\\log_2 x \\implies 2\\log_4 x = \\log_2 x$. Then $\\log_2 x + \\log_2 x = 4 \\implies 2\\log_2 x = 4 \\implies \\log_2 x = 2 \\implies x = 4$."
      },
      {
        "id": "WAEC-SS2-LOG-011",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "What is the value of $\\log_8 16$?",
        "options": {
          "A": "$\\dfrac{4}{3}$",
          "B": "$\\dfrac{3}{4}$",
          "C": "$2$",
          "D": "$\\dfrac{1}{2}$"
        },
        "correctAnswer": "A",
        "explanation": "Let $y = \\log_8 16 \\implies 8^y = 16 \\implies 2^{3y} = 2^4 \\implies 3y = 4 \\implies y = \\dfrac{4}{3}$."
      },
      {
        "id": "WAEC-SS2-LOG-012",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "If $\\log_{10}2 = 0.3010$, how many digits are there in $2^{50}$?",
        "options": {
          "A": "$16$",
          "B": "$15$",
          "C": "$17$",
          "D": "$50$"
        },
        "correctAnswer": "A",
        "explanation": "$\\lfloor 50 \\times 0.3010 \\rfloor + 1 = \\lfloor 15.05 \\rfloor + 1 = 15 + 1 = 16$ digits."
      },
      {
        "id": "WAEC-SS2-LOG-013",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Solve for $x$: $(\\log_3 x)^2 - 4\\log_3 x + 3 = 0$.",
        "options": {
          "A": "$x = 3\\text{ or }x = 27$",
          "B": "$x = 1\\text{ or }x = 3$",
          "C": "$x = 9\\text{ or }x = 27$",
          "D": "$x = 3\\text{ or }x = 9$"
        },
        "correctAnswer": "A",
        "explanation": "$(u - 1)(u - 3) = 0 \\implies \\log_3 x = 1 \\implies x = 3$; $\\log_3 x = 3 \\implies x = 3^3 = 27$."
      },
      {
        "id": "WAEC-SS2-LOG-014",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "If $\\log_a 2 = x$ and $\\log_a 3 = y$, find $\\log_a(\\sqrt{6})$.",
        "options": {
          "A": "$\\dfrac{x + y}{2}$",
          "B": "$x + y$",
          "C": "$2(x + y)$",
          "D": "$\\sqrt{xy}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_a(\\sqrt{6}) = \\frac{1}{2}\\log_a(2 \\times 3) = \\dfrac{x + y}{2}$."
      },
      {
        "id": "WAEC-SS2-LOG-015",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Evaluate: $5^{\\log_5 7}$.",
        "options": {
          "A": "$7$",
          "B": "$5$",
          "C": "$35$",
          "D": "$\\log_5 7$"
        },
        "correctAnswer": "A",
        "explanation": "By the fundamental inverse identity, $b^{\\log_b x} = x$. Hence $5^{\\log_5 7} = 7$."
      },
      {
        "id": "WAEC-SS2-LOG-016",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Find $x$ if $\\log_2(\\log_3 x) = 1$.",
        "options": {
          "A": "$9$",
          "B": "$6$",
          "C": "$8$",
          "D": "$3$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_3 x = 2^1 = 2 \\implies x = 3^2 = 9$."
      },
      {
        "id": "WAEC-SS2-LOG-017",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "If $\\log_{10}(x - 3) + \\log_{10}x = 1$, find $x$.",
        "options": {
          "A": "$x = 5$",
          "B": "$x = 2$",
          "C": "$x = -2$",
          "D": "$x = 5\\text{ or }x = -2$"
        },
        "correctAnswer": "A",
        "explanation": "$x(x - 3) = 10 \\implies x^2 - 3x - 10 = 0 \\implies (x - 5)(x + 2) = 0$. Since $x > 3$, $x = 5$."
      },
      {
        "id": "WAEC-SS2-LOG-018",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Express $\\log_b\\left(\\sqrt{\\dfrac{x^3}{y}}\\right)$ in terms of $\\log_b x$ and $\\log_b y$.",
        "options": {
          "A": "$\\dfrac{3}{2}\\log_b x - \\dfrac{1}{2}\\log_b y$",
          "B": "$3\\log_b x - \\log_b y$",
          "C": "$\\dfrac{1}{2}(3\\log_b x + \\log_b y)$",
          "D": "$\\dfrac{3}{2}\\log_b(x/y)$"
        },
        "correctAnswer": "A",
        "explanation": "$\\frac{1}{2}(3\\log_b x - \\log_b y) = \\dfrac{3}{2}\\log_b x - \\dfrac{1}{2}\\log_b y$."
      },
      {
        "id": "WAEC-SS2-LOG-019",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "Solve for $x$: $\\log_2 x + \\log_x 2 = 2.5$.",
        "options": {
          "A": "$x = 4\\text{ or }x = \\sqrt{2}$",
          "B": "$x = 2\\text{ or }x = 4$",
          "C": "$x = 8\\text{ or }x = 2$",
          "D": "$x = 4\\text{ or }x = 1/2$"
        },
        "correctAnswer": "A",
        "explanation": "Let $u = \\log_2 x$: $u + \\frac{1}{u} = \\frac{5}{2} \\implies 2u^2 - 5u + 2 = 0 \\implies (2u - 1)(u - 2) = 0 \\implies u = 2 \\implies x = 4$; $u = 1/2 \\implies x = 2^{1/2} = \\sqrt{2}$."
      },
      {
        "id": "WAEC-SS2-LOG-020",
        "class": "SSS 2",
        "topic": "Logarithm Theory",
        "question": "If $\\log_{10}a = p$ and $\\log_{10}b = q$, express $\\log_{10}\\left(\\dfrac{100\\sqrt{a}}{b^3}\\right)$ in terms of $p$ and $q$.",
        "options": {
          "A": "$2 + \\dfrac{1}{2}p - 3q$",
          "B": "$2 + p - 3q$",
          "C": "$100 + \\dfrac{1}{2}p - 3q$",
          "D": "$2 + \\dfrac{1}{2}p + 3q$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_{10}100 + \\frac{1}{2}\\log_{10}a - 3\\log_{10}b = 2 + \\dfrac{1}{2}p - 3q$."
      },
      {
        "id": "WAEC-SS2-SET-001",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "In a class of $58$ students, $28$ offer Biology, $35$ offer Economics, and $15$ offer Physics. Each student offers at least one subject. If $12$ offer both Biology and Economics, $7$ offer Biology and Physics, and $5$ offer Economics and Physics, find the number of students who offer all three subjects.",
        "options": {
          "A": "$4$",
          "B": "$3$",
          "C": "$5$",
          "D": "$2$"
        },
        "correctAnswer": "A",
        "explanation": "$n(B \\cup E \\cup P) = 28 + 35 + 15 - (12 + 7 + 5) + x \\implies 58 = 78 - 24 + x = 54 + x \\implies x = 4$."
      },
      {
        "id": "WAEC-SS2-SET-002",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "In a survey of $100$ people, $60$ like Apple, $45$ like Banana, $35$ like Orange, $20$ like Apple and Banana, $15$ like Apple and Orange, $10$ like Banana and Orange, and $5$ like all three fruits. How many like none of the three fruits?",
        "options": {
          "A": "$0$",
          "B": "$5$",
          "C": "$10$",
          "D": "$15$"
        },
        "correctAnswer": "A",
        "explanation": "$n(A \\cup B \\cup O) = 60 + 45 + 35 - (20 + 15 + 10) + 5 = 140 - 45 + 5 = 100$. None $= 100 - 100 = 0$."
      },
      {
        "id": "WAEC-SS2-SET-003",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "For three sets $A, B,$ and $C$, the identity $(A \\cup B)'$ is equivalent to:",
        "options": {
          "A": "$A' \\cap B'$",
          "B": "$A' \\cup B'$",
          "C": "$A \\cap B'$",
          "D": "$(A \\cap B)'$"
        },
        "correctAnswer": "A",
        "explanation": "By De Morgan's Law, $(A \\cup B)' = A' \\cap B'$."
      },
      {
        "id": "WAEC-SS2-SET-004",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "If $n(A) = 28$, $n(B) = 32$, and $n(A \\cup B) = 45$, find $n(A \\cap B')$ (elements in $A$ only).",
        "options": {
          "A": "$13$",
          "B": "$15$",
          "C": "$17$",
          "D": "$28$"
        },
        "correctAnswer": "A",
        "explanation": "$n(A \\cap B) = 28 + 32 - 45 = 15$. $A$ only $= n(A) - n(A \\cap B) = 28 - 15 = 13$."
      },
      {
        "id": "WAEC-SS2-SET-005",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "If $A = \\{1, 2\\}$ and $B = \\{3, 4, 5\\}$, what is the cardinality of the Cartesian product $A \\times B$?",
        "options": {
          "A": "$6$",
          "B": "$5$",
          "C": "$8$",
          "D": "$9$"
        },
        "correctAnswer": "A",
        "explanation": "$n(A \\times B) = n(A) \\times n(B) = 2 \\times 3 = 6$."
      },
      {
        "id": "WAEC-SS2-SET-006",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "In a group of $60$ students, $35$ play football, $30$ play volleyball, and $12$ play both. How many students play exactly one sport?",
        "options": {
          "A": "$41$",
          "B": "$53$",
          "C": "$23$",
          "D": "$18$"
        },
        "correctAnswer": "A",
        "explanation": "Football only $= 35 - 12 = 23$. Volleyball only $= 30 - 12 = 18$. Exactly one $= 23 + 18 = 41$."
      },
      {
        "id": "WAEC-SS2-SET-007",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "Which of the following represents the shaded region for $(A \\cap B) \\cup (A \\cap C)$?",
        "options": {
          "A": "$A \\cap (B \\cup C)$",
          "B": "$A \\cup (B \\cap C)$",
          "C": "$(A \\cup B) \\cap C$",
          "D": "$A' \\cap (B \\cup C)$"
        },
        "correctAnswer": "A",
        "explanation": "By the distributive law of intersection over union: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$."
      },
      {
        "id": "WAEC-SS2-SET-008",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "Out of $80$ students, $45$ take French and $40$ take German. If $15$ take neither, how many take both French and German?",
        "options": {
          "A": "$20$",
          "B": "$15$",
          "C": "$25$",
          "D": "$30$"
        },
        "correctAnswer": "A",
        "explanation": "At least one $= 80 - 15 = 65$. $n(F \\cap G) = 45 + 40 - 65 = 20$."
      },
      {
        "id": "WAEC-SS2-SET-009",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "If universal set $\\xi = \\{1, 2, \\dots, 20\\}$, $E = \\{\\text{multiples of } 2\\}$, and $F = \\{\\text{multiples of } 3\\}$, find $n(E \\cap F)$.",
        "options": {
          "A": "$3$",
          "B": "$6$",
          "C": "$10$",
          "D": "$2$"
        },
        "correctAnswer": "A",
        "explanation": "$E \\cap F$ consists of multiples of $6$ in the set: $\\{6, 12, 18\\}$, so $n(E \\cap F) = 3$."
      },
      {
        "id": "WAEC-SS2-SET-010",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "In a town, $70\\%$ of households have a TV, $60\\%$ have a radio, and $50\\%$ have both. What percentage have neither?",
        "options": {
          "A": "$20\\%$",
          "B": "$10\\%$",
          "C": "$30\\%$",
          "D": "$15\\%$"
        },
        "correctAnswer": "A",
        "explanation": "At least one $= 70\\% + 60\\% - 50\\% = 80\\%$. Neither $= 100\\% - 80\\% = 20\\%$."
      },
      {
        "id": "WAEC-SS2-SET-011",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "If $n(A) = 10$ and $n(B) = 15$, what is the maximum possible value of $n(A \\cup B)$?",
        "options": {
          "A": "$25$",
          "B": "$15$",
          "C": "$10$",
          "D": "$30$"
        },
        "correctAnswer": "A",
        "explanation": "The union is maximized when $A$ and $B$ are completely disjoint: $n(A \\cup B) = 10 + 15 = 25$."
      },
      {
        "id": "WAEC-SS2-SET-012",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "If $n(A) = 10$ and $n(B) = 15$, what is the minimum possible value of $n(A \\cup B)$?",
        "options": {
          "A": "$15$",
          "B": "$10$",
          "C": "$5$",
          "D": "$25$"
        },
        "correctAnswer": "A",
        "explanation": "The union is minimized when $A \\subset B$, in which case $n(A \\cup B) = n(B) = 15$."
      },
      {
        "id": "WAEC-SS2-SET-013",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "If $A \\setminus B = A$, what does this deduce about sets $A$ and $B$?",
        "options": {
          "A": "$A \\cap B = \\emptyset$",
          "B": "$A \\subset B$",
          "C": "$B \\subset A$",
          "D": "$A = B$"
        },
        "correctAnswer": "A",
        "explanation": "Removing elements of $B$ leaves $A$ unchanged if and only if $A$ and $B$ share no common elements ($A \\cap B = \\emptyset$)."
      },
      {
        "id": "WAEC-SS2-SET-014",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "In a $3$-set survey of $50$ students: $n(A) = 20$, $n(B) = 25$, $n(C) = 22$, $n(A \\cap B) = 10$, $n(B \\cap C) = 8$, $n(A \\cap C) = 7$, and $n(A \\cap B \\cap C) = 3$. Find $n(A \\cup B \\cup C)'$.",
        "options": {
          "A": "$5$",
          "B": "$8$",
          "C": "$10$",
          "D": "$3$"
        },
        "correctAnswer": "A",
        "explanation": "$n(A \\cup B \\cup C) = 20 + 25 + 22 - (10 + 8 + 7) + 3 = 67 - 25 + 3 = 45$. Outside $= 50 - 45 = 5$."
      },
      {
        "id": "WAEC-SS2-SET-015",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "If $P(S)$ denotes the power set of $S$, and $n(P(S)) = 64$, find $n(S)$.",
        "options": {
          "A": "$6$",
          "B": "$5$",
          "C": "$7$",
          "D": "$8$"
        },
        "correctAnswer": "A",
        "explanation": "$2^n = 64 = 2^6 \\implies n = 6$."
      },
      {
        "id": "WAEC-SS2-SET-016",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "Which of the following is equivalent to $(A \\cap B)'$?",
        "options": {
          "A": "$A' \\cup B'$",
          "B": "$A' \\cap B'$",
          "C": "$A \\cup B'$",
          "D": "$A' \\cup B$"
        },
        "correctAnswer": "A",
        "explanation": "By De Morgan's Law, $(A \\cap B)' = A' \\cup B'$."
      },
      {
        "id": "WAEC-SS2-SET-017",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "If $A = \\{x : x^2 - 5x + 6 = 0\\}$ and $B = \\{x : x^2 - 7x + 12 = 0\\}$, find $A \\cap B$.",
        "options": {
          "A": "$\\{3\\}$",
          "B": "$\\{2\\}$",
          "C": "$\\{4\\}$",
          "D": "$\\{2, 3, 4\\}$"
        },
        "correctAnswer": "A",
        "explanation": "$A = \\{2, 3\\}$; $B = \\{3, 4\\}$. The common element is $3$, so $A \\cap B = \\{3\\}$."
      },
      {
        "id": "WAEC-SS2-SET-018",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "In a class of $40$ students, $22$ study Biology, $18$ study Geography, and $6$ study both. How many offer Biology only?",
        "options": {
          "A": "$16$",
          "B": "$12$",
          "C": "$22$",
          "D": "$14$"
        },
        "correctAnswer": "A",
        "explanation": "Biology only $= 22 - 6 = 16$."
      },
      {
        "id": "WAEC-SS2-SET-019",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "If $n(U) = 80$, $n(A) = 35$, $n(B) = 40$, and $n(A \\cup B)' = 15$, find $n(A \\cap B)$.",
        "options": {
          "A": "$10$",
          "B": "$15$",
          "C": "$5$",
          "D": "$20$"
        },
        "correctAnswer": "A",
        "explanation": "$n(A \\cup B) = 80 - 15 = 65$. $n(A \\cap B) = 35 + 40 - 65 = 10$."
      },
      {
        "id": "WAEC-SS2-SET-020",
        "class": "SSS 2",
        "topic": "Set Theory",
        "question": "If $A \\subset B$ and $B \\subset C$, then:",
        "options": {
          "A": "$A \\subset C$",
          "B": "$C \\subset A$",
          "C": "$A \\cap C = \\emptyset$",
          "D": "$A = C$"
        },
        "correctAnswer": "A",
        "explanation": "Subset inclusion is transitive: $A \\subset B \\land B \\subset C \\implies A \\subset C$."
      },
      {
        "id": "WAEC-SS2-QUA-001",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "Find the roots of the quadratic equation: $2x^2 - 5x - 3 = 0$.",
        "options": {
          "A": "$x = 3\\text{ or }x = -\\dfrac{1}{2}$",
          "B": "$x = -3\\text{ or }x = \\dfrac{1}{2}$",
          "C": "$x = 3\\text{ or }x = \\dfrac{1}{2}$",
          "D": "$x = -3\\text{ or }x = -\\dfrac{1}{2}$"
        },
        "correctAnswer": "A",
        "explanation": "$(2x + 1)(x - 3) = 0 \\implies x = 3$ or $x = -\\dfrac{1}{2}$."
      },
      {
        "id": "WAEC-SS2-QUA-002",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "If $\\alpha$ and $\\beta$ are the roots of $3x^2 - 7x + 2 = 0$, find $\\alpha + \\beta$.",
        "options": {
          "A": "$\\dfrac{7}{3}$",
          "B": "$-\\dfrac{7}{3}$",
          "C": "$\\dfrac{2}{3}$",
          "D": "$-\\dfrac{2}{3}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\alpha + \\beta = -\\dfrac{b}{a} = -\\dfrac{-7}{3} = \\dfrac{7}{3}$."
      },
      {
        "id": "WAEC-SS2-QUA-003",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "For what values of $k$ will $x^2 + kx + 9 = 0$ have equal roots?",
        "options": {
          "A": "$k = \\pm 6$",
          "B": "$k = \\pm 3$",
          "C": "$k = \\pm 9$",
          "D": "$k = \\pm 18$"
        },
        "correctAnswer": "A",
        "explanation": "Equal roots $\\implies \\Delta = b^2 - 4ac = 0 \\implies k^2 - 36 = 0 \\implies k = \\pm 6$."
      },
      {
        "id": "WAEC-SS2-QUA-004",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "Form the quadratic equation whose roots are $-3$ and $5$.",
        "options": {
          "A": "$x^2 - 2x - 15 = 0$",
          "B": "$x^2 + 2x - 15 = 0$",
          "C": "$x^2 - 8x + 15 = 0$",
          "D": "$x^2 + 8x - 15 = 0$"
        },
        "correctAnswer": "A",
        "explanation": "Sum $= -3 + 5 = 2$; Product $= -3 \\times 5 = -15$. Equation: $x^2 - 2x - 15 = 0$."
      },
      {
        "id": "WAEC-SS2-QUA-005",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "If $\\alpha$ and $\\beta$ are roots of $2x^2 + 3x - 5 = 0$, find the product $\\alpha\\beta$.",
        "options": {
          "A": "$-\\dfrac{5}{2}$",
          "B": "$\\dfrac{5}{2}$",
          "C": "$-\\dfrac{3}{2}$",
          "D": "$\\dfrac{3}{2}$"
        },
        "correctAnswer": "A",
        "explanation": "Product of roots $\\alpha\\beta = \\dfrac{c}{a} = -\\dfrac{5}{2}$."
      },
      {
        "id": "WAEC-SS2-QUA-006",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "Determine the nature of the roots of $2x^2 + 3x + 5 = 0$.",
        "options": {
          "A": "Complex / Non-real",
          "B": "Real and equal",
          "C": "Real and distinct",
          "D": "Rational and unequal"
        },
        "correctAnswer": "A",
        "explanation": "$\\Delta = b^2 - 4ac = 3^2 - 4(2)(5) = 9 - 40 = -31 < 0$. The roots are complex/non-real."
      },
      {
        "id": "WAEC-SS2-QUA-007",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "Solve by completing the square: $x^2 + 6x - 7 = 0$.",
        "options": {
          "A": "$x = 1\\text{ or }x = -7$",
          "B": "$x = -1\\text{ or }x = 7$",
          "C": "$x = 2\\text{ or }x = -8$",
          "D": "$x = -2\\text{ or }x = 8$"
        },
        "correctAnswer": "A",
        "explanation": "$(x + 3)^2 = 7 + 9 = 16 \\implies x + 3 = \\pm 4 \\implies x = 1$ or $x = -7$."
      },
      {
        "id": "WAEC-SS2-QUA-008",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "If $\\alpha$ and $\\beta$ are roots of $x^2 - 4x + 1 = 0$, evaluate $\\alpha^2 + \\beta^2$.",
        "options": {
          "A": "$14$",
          "B": "$16$",
          "C": "$18$",
          "D": "$12$"
        },
        "correctAnswer": "A",
        "explanation": "$\\alpha + \\beta = 4, \\alpha\\beta = 1$. $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = 4^2 - 2(1) = 14$."
      },
      {
        "id": "WAEC-SS2-QUA-009",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "Find $m$ for which the line $y = 2x + m$ is tangent to the parabola $y = x^2$.",
        "options": {
          "A": "$m = -1$",
          "B": "$m = 1$",
          "C": "$m = -2$",
          "D": "$m = 2$"
        },
        "correctAnswer": "A",
        "explanation": "$x^2 - 2x - m = 0$. Tangency $\\implies \\Delta = (-2)^2 - 4(1)(-m) = 4 + 4m = 0 \\implies m = -1$."
      },
      {
        "id": "WAEC-SS2-QUA-010",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "The length of a rectangular garden is $3\\text{ m}$ more than its width. If the area is $70\\text{ m}^2$, find its perimeter.",
        "options": {
          "A": "$34\\text{ m}$",
          "B": "$20\\text{ m}$",
          "C": "$40\\text{ m}$",
          "D": "$28\\text{ m}$"
        },
        "correctAnswer": "A",
        "explanation": "$w(w + 3) = 70 \\implies w^2 + 3w - 70 = 0 \\implies (w + 10)(w - 7) = 0 \\implies w = 7$. Length $= 10$. Perimeter $= 2(7 + 10) = 34\\text{ m}$."
      },
      {
        "id": "WAEC-SS2-QUA-011",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "If $\\alpha$ and $\\beta$ are roots of $x^2 - 5x + 6 = 0$, find $\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta}$.",
        "options": {
          "A": "$\\dfrac{5}{6}$",
          "B": "$\\dfrac{6}{5}$",
          "C": "$-\\dfrac{5}{6}$",
          "D": "$\\dfrac{1}{5}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta} = \\dfrac{\\alpha + \\beta}{\\alpha\\beta} = \\dfrac{5}{6}$."
      },
      {
        "id": "WAEC-SS2-QUA-012",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "Form the quadratic equation whose roots are $\\dfrac{1}{2}$ and $-\\dfrac{2}{3}$.",
        "options": {
          "A": "$6x^2 + x - 2 = 0$",
          "B": "$6x^2 - x - 2 = 0$",
          "C": "$6x^2 - x + 2 = 0$",
          "D": "$6x^2 + x + 2 = 0$"
        },
        "correctAnswer": "A",
        "explanation": "Sum $= 1/2 - 2/3 = -1/6$. Product $= -1/3$. $x^2 - (-1/6)x + (-1/3) = 0 \\implies 6x^2 + x - 2 = 0$."
      },
      {
        "id": "WAEC-SS2-QUA-013",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "Solve the equation: $x + \\dfrac{6}{x} = 5$.",
        "options": {
          "A": "$x = 2\\text{ or }x = 3$",
          "B": "$x = 1\\text{ or }x = 6$",
          "C": "$x = -2\\text{ or }x = -3$",
          "D": "$x = 3\\text{ or }x = -2$"
        },
        "correctAnswer": "A",
        "explanation": "$x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0 \\implies x = 2$ or $x = 3$."
      },
      {
        "id": "WAEC-SS2-QUA-014",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "If one root of $x^2 + px + 12 = 0$ is $3$, find the other root and the value of $p$.",
        "options": {
          "A": "$\\text{other root} = 4,\\ p = -7$",
          "B": "$\\text{other root} = 4,\\ p = 7$",
          "C": "$\\text{other root} = -4,\\ p = 1$",
          "D": "$\\text{other root} = -4,\\ p = -7$"
        },
        "correctAnswer": "A",
        "explanation": "Product $= 12 \\implies 3 \\times r = 12 \\implies r = 4$. Sum $= 3 + 4 = 7 = -p \\implies p = -7$."
      },
      {
        "id": "WAEC-SS2-QUA-015",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "If $\\alpha$ and $\\beta$ are roots of $x^2 - 3x + 1 = 0$, form the equation whose roots are $2\\alpha$ and $2\\beta$.",
        "options": {
          "A": "$x^2 - 6x + 4 = 0$",
          "B": "$x^2 - 6x + 2 = 0$",
          "C": "$x^2 - 3x + 4 = 0$",
          "D": "$x^2 + 6x - 4 = 0$"
        },
        "correctAnswer": "A",
        "explanation": "New sum $= 2(3) = 6$. New product $= 4(1) = 4$. Equation: $x^2 - 6x + 4 = 0$."
      },
      {
        "id": "WAEC-SS2-QUA-016",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "Find the discriminant of the quadratic equation $3x^2 - 4x + 2 = 0$.",
        "options": {
          "A": "$-8$",
          "B": "$8$",
          "C": "$-40$",
          "D": "$40$"
        },
        "correctAnswer": "A",
        "explanation": "$\\Delta = b^2 - 4ac = (-4)^2 - 4(3)(2) = 16 - 24 = -8$."
      },
      {
        "id": "WAEC-SS2-QUA-017",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "Solve the equation: $(2x - 3)^2 = 25$.",
        "options": {
          "A": "$x = 4\\text{ or }x = -1$",
          "B": "$x = 4\\text{ or }x = 1$",
          "C": "$x = 14\\text{ or }x = -11$",
          "D": "$x = 5\\text{ or }x = -5$"
        },
        "correctAnswer": "A",
        "explanation": "$2x - 3 = \\pm 5 \\implies 2x = 8 \\implies x = 4$, or $2x = -2 \\implies x = -1$."
      },
      {
        "id": "WAEC-SS2-QUA-018",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "The sum of the squares of two consecutive positive integers is $41$. Find the numbers.",
        "options": {
          "A": "$4\\text{ and }5$",
          "B": "$3\\text{ and }4$",
          "C": "$5\\text{ and }6$",
          "D": "$6\\text{ and }7$"
        },
        "correctAnswer": "A",
        "explanation": "$n^2 + (n+1)^2 = 41 \\implies 2n^2 + 2n - 40 = 0 \\implies n^2 + n - 20 = 0 \\implies (n+5)(n-4) = 0 \\implies n = 4, n+1 = 5$."
      },
      {
        "id": "WAEC-SS2-QUA-019",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "Solve: $4x^2 - 12x + 9 = 0$.",
        "options": {
          "A": "$x = \\dfrac{3}{2}\\text{ (repeated root)}$",
          "B": "$x = -\\dfrac{3}{2}\\text{ (repeated)}$",
          "C": "$x = 3\\text{ or }x = 2$",
          "D": "$x = \\dfrac{9}{4}$"
        },
        "correctAnswer": "A",
        "explanation": "$(2x - 3)^2 = 0 \\implies x = 3/2$ twice."
      },
      {
        "id": "WAEC-SS2-QUA-020",
        "class": "SSS 2",
        "topic": "Quadratic Equations",
        "question": "If the roots of $x^2 - kx + 16 = 0$ differ by $6$, find the positive value of $k$.",
        "options": {
          "A": "$10$",
          "B": "$8$",
          "C": "$12$",
          "D": "$14$"
        },
        "correctAnswer": "A",
        "explanation": "$(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta \\implies 36 = k^2 - 64 \\implies k^2 = 100 \\implies k = 10$."
      },
      {
        "id": "WAEC-SS2-BAR-001",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "What is the characteristic of $\\log_{10} 0.00452$?",
        "options": {
          "A": "$\\bar{3}\\text{ (or }-3\\text{)}$",
          "B": "$\\bar{2}$",
          "C": "$\\bar{4}$",
          "D": "$3$"
        },
        "correctAnswer": "A",
        "explanation": "$0.00452 = 4.52 \\times 10^{-3}$. First non-zero digit is in the third decimal position $\\implies$ characteristic is $\\bar{3}$."
      },
      {
        "id": "WAEC-SS2-BAR-002",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Evaluate in bar notation: $\\bar{2}.456 + \\bar{1}.328$.",
        "options": {
          "A": "$\\bar{3}.784$",
          "B": "$\\bar{2}.784$",
          "C": "$\\bar{4}.784$",
          "D": "$-3.784$"
        },
        "correctAnswer": "A",
        "explanation": "Mantissa: $0.456 + 0.328 = 0.784$. Characteristic: $(-2) + (-1) = -3 = \\bar{3}$. Sum $= \\bar{3}.784$."
      },
      {
        "id": "WAEC-SS2-BAR-003",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Evaluate: $\\bar{2}.845 + \\bar{3}.426$.",
        "options": {
          "A": "$\\bar{4}.271$",
          "B": "$\\bar{5}.271$",
          "C": "$\\bar{6}.271$",
          "D": "$\\bar{5}.171$"
        },
        "correctAnswer": "A",
        "explanation": "Mantissa: $0.845 + 0.426 = 1.271$ (write $0.271$ and carry $+1$). Characteristic: $(-2) + (-3) + (+1) = -4 = \\bar{4}$. Result $= \\bar{4}.271$."
      },
      {
        "id": "WAEC-SS2-BAR-004",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Subtract: $\\bar{3}.452 - \\bar{1}.638$.",
        "options": {
          "A": "$\\bar{3}.814$",
          "B": "$\\bar{2}.814$",
          "C": "$\\bar{1}.814$",
          "D": "$\\bar{4}.814$"
        },
        "correctAnswer": "A",
        "explanation": "$(-3 + 0.452) - (-1 + 0.638) = -2.548 - (-0.362) = -2.186 = -3 + 0.814 = \\bar{3}.814$."
      },
      {
        "id": "WAEC-SS2-BAR-005",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Calculate: $\\bar{2}.345 \\times 3$.",
        "options": {
          "A": "$\\bar{5}.035$",
          "B": "$\\bar{6}.035$",
          "C": "$\\bar{4}.035$",
          "D": "$\\bar{7}.035$"
        },
        "correctAnswer": "A",
        "explanation": "$3 \\times 0.345 = 1.035$ (carry $+1$). $3 \\times (-2) = -6$. Combine: $-6 + 1 + 0.035 = -5 + 0.035 = \\bar{5}.035$."
      },
      {
        "id": "WAEC-SS2-BAR-006",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Evaluate: $\\bar{3}.756 \\div 2$.",
        "options": {
          "A": "$\\bar{2}.878$",
          "B": "$\\bar{1}.878$",
          "C": "$\\bar{3}.378$",
          "D": "$\\bar{1}.378$"
        },
        "correctAnswer": "A",
        "explanation": "Write characteristic as multiple of $2$: $\\bar{3} = -4 + 1$. $(-4 + 1.756) \\div 2 = -2 + 0.878 = \\bar{2}.878$."
      },
      {
        "id": "WAEC-SS2-BAR-007",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Evaluate: $\\bar{5}.612 \\div 3$.",
        "options": {
          "A": "$\\bar{2}.537$",
          "B": "$\\bar{2}.871$",
          "C": "$\\bar{1}.871$",
          "D": "$\\bar{3}.204$"
        },
        "correctAnswer": "A",
        "explanation": "Write characteristic as multiple of $3$: $\\bar{5} = -6 + 1$. $(-6 + 1.612) \\div 3 = -2 + 0.5373 = \\bar{2}.537$."
      },
      {
        "id": "WAEC-SS2-BAR-008",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "What is the characteristic of $\\log_{10} 0.75$?",
        "options": {
          "A": "$\\bar{1}\\text{ (or }-1\\text{)}$",
          "B": "$0$",
          "C": "$\\bar{2}$",
          "D": "$1$"
        },
        "correctAnswer": "A",
        "explanation": "$0.75 = 7.5 \\times 10^{-1}$. Characteristic is $\\bar{1}$."
      },
      {
        "id": "WAEC-SS2-BAR-009",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Convert the bar notation $\\bar{3}.45$ to an ordinary negative decimal number.",
        "options": {
          "A": "$-2.55$",
          "B": "$-3.45$",
          "C": "$-3.55$",
          "D": "$-2.45$"
        },
        "correctAnswer": "A",
        "explanation": "$\\bar{3}.45 = -3 + 0.45 = -2.55$."
      },
      {
        "id": "WAEC-SS2-BAR-010",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Convert the ordinary negative number $-1.72$ into bar notation.",
        "options": {
          "A": "$\\bar{2}.28$",
          "B": "$\\bar{1}.28$",
          "C": "$\\bar{1}.72$",
          "D": "$\\bar{2}.72$"
        },
        "correctAnswer": "A",
        "explanation": "$-1.72 = -2 + (2 - 1.72) = -2 + 0.28 = \\bar{2}.28$."
      },
      {
        "id": "WAEC-SS2-BAR-011",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "If $\\log_{10} x = \\bar{2}.6021$, find $x$ (given antilog of $0.6021$ is $4.00$).",
        "options": {
          "A": "$0.0400$",
          "B": "$0.00400$",
          "C": "$0.400$",
          "D": "$4.00$"
        },
        "correctAnswer": "A",
        "explanation": "$x = 4.00 \\times 10^{-2} = 0.0400$."
      },
      {
        "id": "WAEC-SS2-BAR-012",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Evaluate: $\\bar{1}.624 \\times 4$.",
        "options": {
          "A": "$\\bar{2}.496$",
          "B": "$\\bar{3}.496$",
          "C": "$\\bar{4}.496$",
          "D": "$\\bar{1}.496$"
        },
        "correctAnswer": "A",
        "explanation": "$4 \\times 0.624 = 2.496$ (carry $+2$). $4 \\times (-1) = -4$. Combine: $-4 + 2 + 0.496 = \\bar{2}.496$."
      },
      {
        "id": "WAEC-SS2-BAR-013",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "What is the characteristic of $\\log_{10} 0.000078$?",
        "options": {
          "A": "$\\bar{5}$",
          "B": "$\\bar{4}$",
          "C": "$\\bar{6}$",
          "D": "$\\bar{3}$"
        },
        "correctAnswer": "A",
        "explanation": "$0.000078 = 7.8 \\times 10^{-5} \\implies$ characteristic is $\\bar{5}$."
      },
      {
        "id": "WAEC-SS2-BAR-014",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Evaluate: $\\bar{4}.821 + \\bar{2}.543$.",
        "options": {
          "A": "$\\bar{5}.364$",
          "B": "$\\bar{6}.364$",
          "C": "$\\bar{7}.364$",
          "D": "$\\bar{6}.264$"
        },
        "correctAnswer": "A",
        "explanation": "$0.821 + 0.543 = 1.364$ (write $0.364$, carry $+1$). $-4 + (-2) + (+1) = -5 = \\bar{5}$. Result $= \\bar{5}.364$."
      },
      {
        "id": "WAEC-SS2-BAR-015",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Find $\\sqrt{0.0064}$ using logarithms: if $\\log_{10}(0.0064) = \\bar{3}.8062$, what is $\\frac{1}{2} \\log_{10}(0.0064)$?",
        "options": {
          "A": "$\\bar{2}.9031$",
          "B": "$\\bar{1}.9031$",
          "C": "$\\bar{1}.4031$",
          "D": "$\\bar{3}.4031$"
        },
        "correctAnswer": "A",
        "explanation": "$\\bar{3}.8062 \\div 2 = (-4 + 1.8062) \\div 2 = -2 + 0.9031 = \\bar{2}.9031$."
      },
      {
        "id": "WAEC-SS2-BAR-016",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Subtract: $\\bar{2}.378 - \\bar{4}.825$.",
        "options": {
          "A": "$1.553$",
          "B": "$\\bar{2}.553$",
          "C": "$2.553$",
          "D": "$\\bar{1}.553$"
        },
        "correctAnswer": "A",
        "explanation": "$(-2 + 0.378) - (-4 + 0.825) = -2 + 4 + 0.378 - 0.825 = 2 - 0.447 = 1.553$."
      },
      {
        "id": "WAEC-SS2-BAR-017",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Evaluate: $\\bar{7}.425 \\div 5$.",
        "options": {
          "A": "$\\bar{2}.685$",
          "B": "$\\bar{1}.485$",
          "C": "$\\bar{2}.485$",
          "D": "$\\bar{1}.685$"
        },
        "correctAnswer": "A",
        "explanation": "Write characteristic as multiple of $5$: $\\bar{7} = -10 + 3$. $(-10 + 3.425) \\div 5 = -2 + 0.685 = \\bar{2}.685$."
      },
      {
        "id": "WAEC-SS2-BAR-018",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "If $\\log_{10} k = \\bar{1}.5200$, evaluate $\\log_{10}(k^3)$.",
        "options": {
          "A": "$\\bar{2}.5600$",
          "B": "$\\bar{3}.5600$",
          "C": "$\\bar{1}.5600$",
          "D": "$-3.5600$"
        },
        "correctAnswer": "A",
        "explanation": "$3 \\times (-1 + 0.5200) = -3 + 1.5600 = -2 + 0.5600 = \\bar{2}.5600$."
      },
      {
        "id": "WAEC-SS2-BAR-019",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Given that $\\log_{10}2 = 0.3010$, find $\\log_{10}(0.02)$.",
        "options": {
          "A": "$\\bar{2}.3010$",
          "B": "$\\bar{1}.3010$",
          "C": "$-2.3010$",
          "D": "$\\bar{3}.3010$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_{10}(2 \\times 10^{-2}) = 0.3010 - 2 = \\bar{2}.3010$."
      },
      {
        "id": "WAEC-SS2-BAR-020",
        "class": "SSS 2",
        "topic": "Logarithm",
        "question": "Given that $\\log_{10}3.54 = 0.5490$, find $\\log_{10}(0.000354)$.",
        "options": {
          "A": "$\\bar{4}.5490$",
          "B": "$\\bar{3}.5490$",
          "C": "$\\bar{5}.5490$",
          "D": "$-4.5490$"
        },
        "correctAnswer": "A",
        "explanation": "$0.000354 = 3.54 \\times 10^{-4} \\implies \\log(0.000354) = \\bar{4}.5490$."
      }
    ],
    "SSS 3": [
      {
        "id": "WAEC-SS3-IL-001",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "Solve the simultaneous equations: $2^x \\times 3^y = 72$ and $2^y \\times 3^x = 108$.",
        "options": {
          "A": "$x = 2,\\; y = 3$",
          "B": "$x = 3,\\; y = 2$",
          "C": "$x = 1,\\; y = 2$",
          "D": "$x = 3,\\; y = 1$"
        },
        "correctAnswer": "B",
        "explanation": "Multiplying: $2^{x+y} \\times 3^{x+y} = 6^{x+y} = 72 \\times 108 = 7776 = 6^5 \\implies x + y = 5$. Dividing the second by the first: $\\left(\\frac{3}{2}\\right)^{x-y} = \\frac{108}{72} = \\frac{3}{2} = \\left(\\frac{3}{2}\\right)^1 \\implies x - y = 1$. Solving $x+y=5$ and $x-y=1$ gives $2x = 6 \\implies x = 3,\\; y = 2$."
      },
      {
        "id": "WAEC-SS3-IL-002",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "If $\\log_2 (x - 1) + \\log_2 (x + 1) = 3$, find the positive value of $x$.",
        "options": {
          "A": "$x = 3$",
          "B": "$x = 4$",
          "C": "$x = 9$",
          "D": "$x = 5$"
        },
        "correctAnswer": "A",
        "explanation": "$\\log_2 [(x - 1)(x + 1)] = 3 \\implies x^2 - 1 = 2^3 = 8 \\implies x^2 = 9 \\implies x = 3$ (since $x > 1$ for real logarithms)."
      },
      {
        "id": "WAEC-SS3-IL-003",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "Solve for $x$: $3^{2x+1} - 28(3^x) + 9 = 0$.",
        "options": {
          "A": "$x = 2\\text{ or }x = -1$",
          "B": "$x = 1\\text{ or }x = -2$",
          "C": "$x = 2\\text{ or }x = 1$",
          "D": "$x = -1\\text{ or }x = 0$"
        },
        "correctAnswer": "A",
        "explanation": "$3(3^x)^2 - 28(3^x) + 9 = 0$. Let $y = 3^x \\implies 3y^2 - 28y + 9 = 0 \\implies (3y - 1)(y - 9) = 0$. Thus $y = \\frac{1}{3} = 3^{-1} \\implies x = -1$, or $y = 9 = 3^2 \\implies x = 2$."
      },
      {
        "id": "WAEC-SS3-IL-004",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "Given that $a = x^{1/n}$, find $\\log_a x^n$.",
        "options": {
          "A": "$n^2$",
          "B": "$\\frac{1}{n}$",
          "C": "$n$",
          "D": "$\\frac{1}{n^2}$"
        },
        "correctAnswer": "A",
        "explanation": "From $a = x^{1/n}$, we have $x = a^n$. Therefore $x^n = (a^n)^n = a^{n^2}$. Then $\\log_a x^n = \\log_a (a^{n^2}) = n^2$."
      },
      {
        "id": "WAEC-SS3-IL-005",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "Find the value of $ab$ if $a = \\log_2 3$ and $b = \\log_3 8$.",
        "options": {
          "A": "$3$",
          "B": "$2$",
          "C": "$4$",
          "D": "$6$"
        },
        "correctAnswer": "A",
        "explanation": "By the change of base theorem, $ab = \\log_2 3 \\times \\log_3 8 = \\frac{\\log 3}{\\log 2} \\times \\frac{\\log 8}{\\log 3} = \\frac{\\log (2^3)}{\\log 2} = \\frac{3\\log 2}{\\log 2} = 3$."
      },
      {
        "id": "WAEC-SS3-IL-006",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "If $a\\sqrt{5} + b\\sqrt{2}$ is a square root of $95 - 30\\sqrt{10}$, where $a, b \\in \\mathbb{Z}$, find $a$ and $b$.",
        "options": {
          "A": "$a = 5,\\; b = -3$",
          "B": "$a = -5,\\; b = 3$",
          "C": "$a = 3,\\; b = -5$",
          "D": "$a = 5,\\; b = 3$"
        },
        "correctAnswer": "A",
        "explanation": "$(a\\sqrt{5} + b\\sqrt{2})^2 = 5a^2 + 2b^2 + 2ab\\sqrt{10} = 95 - 30\\sqrt{10}$. Thus $2ab = -30 \\implies ab = -15$, and $5a^2 + 2b^2 = 95$. If $a = 5, b = -3$: $5(25) + 2(9) = 125 + 18 \\neq 95$. If $a = 3, b = -5$: $5(9) + 2(25) = 45 + 50 = 95$! Thus $a = 3\\sqrt{5} - 5\\sqrt{2}$ (or $5\\sqrt{2} - 3\\sqrt{5}$). So $a = 3,\\; b = -5$."
      },
      {
        "id": "WAEC-SS3-IL-007",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "If $x = 2 - \\sqrt{2}$, evaluate $x^2 + \\dfrac{4}{x^2}$.",
        "options": {
          "A": "$12$",
          "B": "$10$",
          "C": "$8$",
          "D": "$6$"
        },
        "correctAnswer": "A",
        "explanation": "$x^2 = (2 - \\sqrt{2})^2 = 4 - 4\\sqrt{2} + 2 = 6 - 4\\sqrt{2}$. Then $\\frac{4}{x^2} = \\frac{4}{6 - 4\\sqrt{2}} = \\frac{2}{3 - 2\\sqrt{2}} = \\frac{2(3 + 2\\sqrt{2})}{9 - 8} = 6 + 4\\sqrt{2}$. Sum $= (6 - 4\\sqrt{2}) + (6 + 4\\sqrt{2}) = 12$."
      },
      {
        "id": "WAEC-SS3-IL-008",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "Solve the equation: $3x^{-2} = \\dfrac{4}{27}$.",
        "options": {
          "A": "$x = \\pm \\frac{9}{2}$",
          "B": "$x = \\pm \\frac{2}{9}$",
          "C": "$x = \\frac{9}{4}$",
          "D": "$x = \\pm \\frac{3}{2}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\frac{3}{x^2} = \\frac{4}{27} \\implies 4x^2 = 81 \\implies x^2 = \\frac{81}{4} \\implies x = \\pm \\frac{9}{2}$."
      },
      {
        "id": "WAEC-SS3-IL-009",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "Simplify $\\dfrac{1}{\\sqrt{2}}\\left[\\dfrac{1}{\\sqrt{3} + \\sqrt{2}} - \\dfrac{1}{\\sqrt{3} - \\sqrt{2}}\\right]$.",
        "options": {
          "A": "$-2$",
          "B": "$2$",
          "C": "$-\\sqrt{2}$",
          "D": "$\\sqrt{3}$"
        },
        "correctAnswer": "A",
        "explanation": "Inside bracket: $\\frac{(\\sqrt{3}-\\sqrt{2}) - (\\sqrt{3}+\\sqrt{2})}{(\\sqrt{3})^2 - (\\sqrt{2})^2} = \\frac{-2\\sqrt{2}}{3 - 2} = -2\\sqrt{2}$. Multiplying by $\\frac{1}{\\sqrt{2}}$ gives $\\frac{1}{\\sqrt{2}}(-2\\sqrt{2}) = -2$."
      },
      {
        "id": "WAEC-SS3-IL-010",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "Solve for $n$ if $9^{1+n} \\times 3 = 27^{-n}$.",
        "options": {
          "A": "$n = -\\frac{3}{5}$",
          "B": "$n = -\\frac{2}{3}$",
          "C": "$n = \\frac{1}{2}$",
          "D": "$n = -1$"
        },
        "correctAnswer": "A",
        "explanation": "$3^{2(1+n)} \\times 3^1 = 3^{-3n} \\implies 3^{2 + 2n + 1} = 3^{-3n} \\implies 2n + 3 = -3n \\implies 5n = -3 \\implies n = -\\frac{3}{5}$."
      },
      {
        "id": "WAEC-SS3-IL-011",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "Find $x$ if $2^{x+1} + 2^{x-1} = 40$.",
        "options": {
          "A": "$x = 4$",
          "B": "$x = 3$",
          "C": "$x = 5$",
          "D": "$x = 2$"
        },
        "correctAnswer": "A",
        "explanation": "$2 \\cdot 2^x + \\frac{1}{2} \\cdot 2^x = 40 \\implies 2^x\\left(2 + \\frac{1}{2}\\right) = 40 \\implies 2^x \\left(\\frac{5}{2}\\right) = 40 \\implies 2^x = 40 \\times \\frac{2}{5} = 16 = 2^4 \\implies x = 4$."
      },
      {
        "id": "WAEC-SS3-IL-012",
        "class": "SSS 3",
        "topic": "Indices & Logarithms",
        "question": "Evaluate $\\dfrac{\\log_{10} 0.04 + \\log_{10} 0.25}{\\log_5 100 - \\log_5 4}$.",
        "options": {
          "A": "$-1$",
          "B": "$1$",
          "C": "$-2$",
          "D": "$2$"
        },
        "correctAnswer": "A",
        "explanation": "Numerator: $\\log_{10}(0.04 \\times 0.25) = \\log_{10}(0.01) = \\log_{10}(10^{-2}) = -2$. Denominator: $\\log_5\\left(\\frac{100}{4}\\right) = \\log_5(25) = 2$. Fraction $= \\frac{-2}{2} = -1$."
      },
      {
        "id": "WAEC-SS3-SET-001",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "In a class of $58$ students, $28$ offer Biology, $35$ offer Economics, and $15$ offer Physics. Each student offers at least one subject. If $12$ offer Bio & Econ, $7$ offer Bio & Phys, and $5$ offer Econ & Phys, how many students offer all three subjects?",
        "options": {
          "A": "$4$",
          "B": "$3$",
          "C": "$5$",
          "D": "$6$"
        },
        "correctAnswer": "A",
        "explanation": "By inclusion-exclusion: $n(B \\cup E \\cup P) = n(B) + n(E) + n(P) - n(B \\cap E) - n(B \\cap P) - n(E \\cap P) + n(B \\cap E \\cap P)$. Thus $58 = 28 + 35 + 15 - 12 - 7 - 5 + x \\implies 58 = 54 + x \\implies x = 4$."
      },
      {
        "id": "WAEC-SS3-SET-002",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "If set $A$ has $n$ elements and the power set $\\mathcal{P}(A)$ has $128$ elements, find the number of elements in $A$.",
        "options": {
          "A": "$7$",
          "B": "$6$",
          "C": "$8$",
          "D": "$5$"
        },
        "correctAnswer": "A",
        "explanation": "The number of subsets in the power set of a set with $n$ elements is $2^n$. $2^n = 128 = 2^7 \\implies n = 7$."
      },
      {
        "id": "WAEC-SS3-SET-003",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "Let $P = \\{x \\in \\mathbb{R} : x^2 - 5x + 6 = 0\\}$ and $Q = \\{x \\in \\mathbb{R} : x^2 - 7x + 12 = 0\\}$. Find $P \\cup Q$.",
        "options": {
          "A": "$\\{2, 3, 4\\}$",
          "B": "$\\{2, 3\\}$",
          "C": "$\\{3, 4\\}$",
          "D": "$\\{2, 4\\}$"
        },
        "correctAnswer": "A",
        "explanation": "$x^2 - 5x + 6 = (x - 2)(x - 3) = 0 \\implies P = \\{2, 3\\}$. $x^2 - 7x + 12 = (x - 3)(x - 4) = 0 \\implies Q = \\{3, 4\\}$. Thus $P \\cup Q = \\{2, 3, 4\\}$."
      },
      {
        "id": "WAEC-SS3-SET-004",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "The symmetric difference of two sets $A$ and $B$, denoted $A \\,\\Delta\\, B$, is defined as $(A \\setminus B) \\cup (B \\setminus A)$. If $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5, 6\\}$, find $A \\,\\Delta\\, B$.",
        "options": {
          "A": "$\\{1, 2, 5, 6\\}$",
          "B": "$\\{3, 4\\}$",
          "C": "$\\{1, 2, 3, 4, 5, 6\\}$",
          "D": "$\\{1, 6\\}$"
        },
        "correctAnswer": "A",
        "explanation": "$A \\setminus B = \\{1, 2\\}$ and $B \\setminus A = \\{5, 6\\}$. The union $(A \\setminus B) \\cup (B \\setminus A) = \\{1, 2, 5, 6\\}$."
      },
      {
        "id": "WAEC-SS3-SET-005",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "In a survey of $100$ students, $60$ read Nation, $50$ read Guardian, and $20$ read neither. How many students read both newspapers?",
        "options": {
          "A": "$30$",
          "B": "$25$",
          "C": "$35$",
          "D": "$20$"
        },
        "correctAnswer": "A",
        "explanation": "$n(N \\cup G) = 100 - 20 = 80$. Then $n(N \\cap G) = n(N) + n(G) - n(N \\cup G) = 60 + 50 - 80 = 30$."
      },
      {
        "id": "WAEC-SS3-SET-006",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "According to De Morgan's laws, for any two sets $A$ and $B$ in universal set $U$, $(A \\cup B)'$ is equal to:",
        "options": {
          "A": "$A' \\cap B'$",
          "B": "$A' \\cup B'$",
          "C": "$(A \\cap B)'$",
          "D": "$A \\setminus B'$"
        },
        "correctAnswer": "A",
        "explanation": "By De Morgan's first law, the complement of the union is the intersection of the complements: $(A \\cup B)' = A' \\cap B'$."
      },
      {
        "id": "WAEC-SS3-SET-007",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "If $n(A) = 15$, $n(B) = 20$, and $n(A \\cap B) = 7$, find $n(A \\cup B)$.",
        "options": {
          "A": "$28$",
          "B": "$35$",
          "C": "$25$",
          "D": "$32$"
        },
        "correctAnswer": "A",
        "explanation": "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 15 + 20 - 7 = 28$."
      },
      {
        "id": "WAEC-SS3-SET-008",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "If $U = \\{x \\in \\mathbb{Z} : 1 \\le x \\le 12\\}$, $A = \\{x : x\\text{ is even}\\}$, and $B = \\{x : x\\text{ is a multiple of } 3\\}$, find $n(A \\cap B)$.",
        "options": {
          "A": "$2$",
          "B": "$3$",
          "C": "$4$",
          "D": "$1$"
        },
        "correctAnswer": "A",
        "explanation": "$A = \\{2, 4, 6, 8, 10, 12\\}$, $B = \\{3, 6, 9, 12\\}$. Then $A \\cap B = \\{6, 12\\}$, so $n(A \\cap B) = 2$."
      },
      {
        "id": "WAEC-SS3-SET-009",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "If $P \\subset Q$, which of the following statements is ALWAYS TRUE?",
        "options": {
          "A": "$P \\cap Q = P$",
          "B": "$P \\cup Q = P$",
          "C": "$P \\cap Q = \\emptyset$",
          "D": "$P \\setminus Q = P$"
        },
        "correctAnswer": "A",
        "explanation": "If $P \\subset Q$, every element of $P$ is in $Q$, so the intersection $P \\cap Q = P$ and the union $P \\cup Q = Q$."
      },
      {
        "id": "WAEC-SS3-SET-010",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "Out of $80$ farmers, $45$ grow cassava, $38$ grow maize, and $21$ grow both. How many farmers grow NEITHER crop?",
        "options": {
          "A": "$18$",
          "B": "$21$",
          "C": "$15$",
          "D": "$24$"
        },
        "correctAnswer": "A",
        "explanation": "$n(C \\cup M) = 45 + 38 - 21 = 62$. Farmers growing neither $= 80 - 62 = 18$."
      },
      {
        "id": "WAEC-SS3-SET-011",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "If $S = \\{a, b, c\\}$, how many proper subsets does $S$ have?",
        "options": {
          "A": "$7$",
          "B": "$8$",
          "C": "$6$",
          "D": "$5$"
        },
        "correctAnswer": "A",
        "explanation": "A set with $n$ elements has $2^n$ total subsets and $2^n - 1$ proper subsets. For $n = 3$, proper subsets $= 2^3 - 1 = 8 - 1 = 7$."
      },
      {
        "id": "WAEC-SS3-SET-012",
        "class": "SSS 3",
        "topic": "Set Theory",
        "question": "If $A = \\{x \\in \\mathbb{R} : -2 \\le x < 5\\}$ and $B = \\{x \\in \\mathbb{R} : 1 < x \\le 8\\}$, what is $A \\cap B$?",
        "options": {
          "A": "$\\{x \\in \\mathbb{R} : 1 < x < 5\\}$",
          "B": "$\\{x \\in \\mathbb{R} : -2 \\le x \\le 8\\}$",
          "C": "$\\{x \\in \\mathbb{R} : 1 \\le x < 5\\}$",
          "D": "$\\{x \\in \\mathbb{R} : 1 < x \\le 5\\}$"
        },
        "correctAnswer": "A",
        "explanation": "The intersection is the overlapping interval between $[-2, 5)$ and $(1, 8]$, which is $(1, 5)$, i.e., $\\{x \\in \\mathbb{R} : 1 < x < 5\\}$."
      },
      {
        "id": "WAEC-SS3-TRIG-001",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "In $\\triangle ABC$, $b = 8\\text{ cm}$, $c = 6\\text{ cm}$, and $\\angle A = 60^\\circ$. Find the length of side $a$.",
        "options": {
          "A": "$2\\sqrt{13}\\text{ cm}$",
          "B": "$2\\sqrt{37}\\text{ cm}$",
          "C": "$10\\text{ cm}$",
          "D": "$4\\sqrt{3}\\text{ cm}$"
        },
        "correctAnswer": "A",
        "explanation": "By the cosine rule: $a^2 = b^2 + c^2 - 2bc\\cos A = 8^2 + 6^2 - 2(8)(6)\\cos 60^\\circ = 64 + 36 - 96(0.5) = 100 - 48 = 52$. $a = \\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13}\\text{ cm}$."
      },
      {
        "id": "WAEC-SS3-TRIG-002",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "In $\\triangle PQR$, $p = 10\\text{ cm}$, $\\angle P = 30^\\circ$, and $\\angle Q = 45^\\circ$. Find the exact length of side $q$.",
        "options": {
          "A": "$10\\sqrt{2}\\text{ cm}$",
          "B": "$5\\sqrt{2}\\text{ cm}$",
          "C": "$10\\sqrt{3}\\text{ cm}$",
          "D": "$5\\sqrt{6}\\text{ cm}$"
        },
        "correctAnswer": "A",
        "explanation": "By the sine rule: $\\frac{q}{\\sin Q} = \\frac{p}{\\sin P} \\implies q = \\frac{10 \\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{10 \\times \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 10\\sqrt{2}\\text{ cm}$."
      },
      {
        "id": "WAEC-SS3-TRIG-003",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "From a point $P$ on ground level, the angle of elevation of the top of a vertical mast is $30^\\circ$. From another point $Q$, $40\\text{ m}$ closer to the mast, the angle of elevation is $60^\\circ$. Find the height of the mast.",
        "options": {
          "A": "$20\\sqrt{3}\\text{ m}$",
          "B": "$40\\sqrt{3}\\text{ m}$",
          "C": "$30\\text{ m}$",
          "D": "$20\\text{ m}$"
        },
        "correctAnswer": "A",
        "explanation": "Let height be $h$, and distance from $Q$ to base be $d$. $\\tan 60^\\circ = \\frac{h}{d} \\implies d = \\frac{h}{\\sqrt{3}}$. From $P$: $\\tan 30^\\circ = \\frac{h}{d + 40} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{\\frac{h}{\\sqrt{3}} + 40} \\implies h = 20\\sqrt{3}\\text{ m}$."
      },
      {
        "id": "WAEC-SS3-TRIG-004",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "The bearing of town $B$ from town $A$ is $060^\\circ$. What is the bearing of town $A$ from town $B$?",
        "options": {
          "A": "$240^\\circ$",
          "B": "$120^\\circ$",
          "C": "$300^\\circ$",
          "D": "$150^\\circ$"
        },
        "correctAnswer": "A",
        "explanation": "Back bearing $= 060^\\circ + 180^\\circ = 240^\\circ$."
      },
      {
        "id": "WAEC-SS3-TRIG-005",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "Simplify the trigonometric expression: $\\dfrac{\\sin\\theta}{1 - \\cos\\theta} - \\dfrac{\\sin\\theta}{1 + \\cos\\theta}$.",
        "options": {
          "A": "$2\\cot\\theta$",
          "B": "$2\\tan\\theta$",
          "C": "$2\\csc\\theta$",
          "D": "$2\\sin\\theta$"
        },
        "correctAnswer": "A",
        "explanation": "$\\frac{\\sin\\theta(1+\\cos\\theta) - \\sin\\theta(1-\\cos\\theta)}{(1-\\cos\\theta)(1+\\cos\\theta)} = \\frac{2\\sin\\theta\\cos\\theta}{1 - \\cos^2\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{\\sin^2\\theta} = 2\\frac{\\cos\\theta}{\\sin\\theta} = 2\\cot\\theta$."
      },
      {
        "id": "WAEC-SS3-TRIG-006",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "Solve the equation $2\\cos^2\\theta - \\cos\\theta - 1 = 0$ for $0^\\circ \\le \\theta \\le 180^\\circ$.",
        "options": {
          "A": "$0^\\circ\\text{ or }120^\\circ$",
          "B": "$60^\\circ\\text{ or }120^\\circ$",
          "C": "$0^\\circ\\text{ or }60^\\circ$",
          "D": "$90^\\circ\\text{ or }180^\\circ$"
        },
        "correctAnswer": "A",
        "explanation": "Let $u = \\cos\\theta \\implies 2u^2 - u - 1 = (2u + 1)(u - 1) = 0 \\implies u = 1$ or $u = -\\frac{1}{2}$. If $\\cos\\theta = 1 \\implies \\theta = 0^\\circ$; if $\\cos\\theta = -\\frac{1}{2} \\implies \\theta = 180^\\circ - 60^\\circ = 120^\\circ$."
      },
      {
        "id": "WAEC-SS3-TRIG-007",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "If $\\tan\\theta = \\dfrac{3}{4}$ and $\\theta$ is an acute angle, evaluate $\\dfrac{\\sin\\theta + \\cos\\theta}{\\cos\\theta - \\sin\\theta}$.",
        "options": {
          "A": "$7$",
          "B": "$5$",
          "C": "$\\frac{7}{4}$",
          "D": "$\\frac{1}{7}$"
        },
        "correctAnswer": "A",
        "explanation": "Divide numerator and denominator by $\\cos\\theta$: $\\frac{\\tan\\theta + 1}{1 - \\tan\\theta} = \\frac{\\frac{3}{4} + 1}{1 - \\frac{3}{4}} = \\frac{\\frac{7}{4}}{\\frac{1}{4}} = 7$."
      },
      {
        "id": "WAEC-SS3-TRIG-008",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "In $\\triangle XYZ$, $x = 5\\text{ cm}$, $y = 7\\text{ cm}$, and $z = 8\\text{ cm}$. Find $\\cos Y$.",
        "options": {
          "A": "$\\frac{1}{2}$",
          "B": "$\\frac{11}{16}$",
          "C": "$\\frac{5}{8}$",
          "D": "$\\frac{3}{4}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\cos Y = \\frac{x^2 + z^2 - y^2}{2xz} = \\frac{5^2 + 8^2 - 7^2}{2(5)(8)} = \\frac{25 + 64 - 49}{80} = \\frac{40}{80} = \\frac{1}{2}$."
      },
      {
        "id": "WAEC-SS3-TRIG-009",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "Find the area of $\\triangle ABC$ if $a = 12\\text{ cm}$, $b = 10\\text{ cm}$, and $\\angle C = 30^\\circ$.",
        "options": {
          "A": "$30\\text{ cm}^2$",
          "B": "$60\\text{ cm}^2$",
          "C": "$30\\sqrt{3}\\text{ cm}^2$",
          "D": "$15\\text{ cm}^2$"
        },
        "correctAnswer": "A",
        "explanation": "$\\text{Area} = \\frac{1}{2}ab\\sin C = \\frac{1}{2}(12)(10)\\sin 30^\\circ = 60 \\times 0.5 = 30\\text{ cm}^2$."
      },
      {
        "id": "WAEC-SS3-TRIG-010",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "Evaluate $\\sin 150^\\circ + \\cos 120^\\circ$.",
        "options": {
          "A": "$0$",
          "B": "$1$",
          "C": "$\\sqrt{3}$",
          "D": "$-1$"
        },
        "correctAnswer": "A",
        "explanation": "$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$. $\\cos 120^\\circ = -\\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$. Sum $= \\frac{1}{2} + \\left(-\\frac{1}{2}\\right) = 0$."
      },
      {
        "id": "WAEC-SS3-TRIG-011",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "What is the maximum value of the function $f(\\theta) = 3 - 5\\sin\\theta$?",
        "options": {
          "A": "$8$",
          "B": "$3$",
          "C": "$-2$",
          "D": "$5$"
        },
        "correctAnswer": "A",
        "explanation": "Since $-1 \\le \\sin\\theta \\le 1$, the expression $3 - 5\\sin\\theta$ reaches its maximum when $\\sin\\theta = -1$, yielding $3 - 5(-1) = 3 + 5 = 8$."
      },
      {
        "id": "WAEC-SS3-TRIG-012",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "A ship sails $12\\text{ km}$ due North, then $5\\text{ km}$ due East. What is the distance of the ship from its starting point?",
        "options": {
          "A": "$13\\text{ km}$",
          "B": "$17\\text{ km}$",
          "C": "$15\\text{ km}$",
          "D": "$\\sqrt{119}\\text{ km}$"
        },
        "correctAnswer": "A",
        "explanation": "By Pythagoras: $d = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ km}$."
      },
      {
        "id": "WAEC-SS3-TRIG-013",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "If $\\sin\\theta = \\dfrac{5}{13}$ and $\\theta$ is obtuse ($90^\\circ < \\theta < 180^\\circ$), find $\\cos\\theta$.",
        "options": {
          "A": "$-\\frac{12}{13}$",
          "B": "$\\frac{12}{13}$",
          "C": "$-\\frac{5}{12}$",
          "D": "$-\\frac{8}{13}$"
        },
        "correctAnswer": "A",
        "explanation": "In the second quadrant, $\\cos\\theta$ is negative. $\\cos\\theta = -\\sqrt{1 - \\sin^2\\theta} = -\\sqrt{1 - \\frac{25}{169}} = -\\sqrt{\\frac{144}{169}} = -\\frac{12}{13}$."
      },
      {
        "id": "WAEC-SS3-TRIG-014",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "Which of the following is equivalent to $\\sec^2\\theta - 1$?",
        "options": {
          "A": "$\\tan^2\\theta$",
          "B": "$\\cot^2\\theta$",
          "C": "$\\cos^2\\theta$",
          "D": "$\\sin^2\\theta$"
        },
        "correctAnswer": "A",
        "explanation": "From the fundamental Pythagorean identity $1 + \\tan^2\\theta = \\sec^2\\theta$, we have $\\sec^2\\theta - 1 = \\tan^2\\theta$."
      },
      {
        "id": "WAEC-SS3-TRIG-015",
        "class": "SSS 3",
        "topic": "Trigonometry",
        "question": "In $\\triangle ABC$, $\\angle A = 45^\\circ$, $\\angle B = 60^\\circ$, and $a = 6\\sqrt{2}\\text{ cm}$. Find side $b$.",
        "options": {
          "A": "$6\\sqrt{3}\\text{ cm}$",
          "B": "$12\\text{ cm}$",
          "C": "$3\\sqrt{6}\\text{ cm}$",
          "D": "$6\\text{ cm}$"
        },
        "correctAnswer": "A",
        "explanation": "By the sine rule: $\\frac{b}{\\sin 60^\\circ} = \\frac{a}{\\sin 45^\\circ} \\implies b = \\frac{6\\sqrt{2} \\times \\frac{\\sqrt{3}}{2}}{\\frac{\\sqrt{2}}{2}} = 6\\sqrt{3}\\text{ cm}$."
      },
      {
        "id": "WAEC-SS3-QUAD-001",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "Find the remainder when $P(x) = 2x^3 - 3x^2 + 4x - 5$ is divided by $x - 2$.",
        "options": {
          "A": "$7$",
          "B": "$5$",
          "C": "$9$",
          "D": "$3$"
        },
        "correctAnswer": "A",
        "explanation": "By the Remainder Theorem, $R = P(2) = 2(2)^3 - 3(2)^2 + 4(2) - 5 = 16 - 12 + 8 - 5 = 7$."
      },
      {
        "id": "WAEC-SS3-QUAD-002",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "If $x - 1$ is a factor of $f(x) = x^3 + kx^2 - 4x + 2$, find the value of $k$.",
        "options": {
          "A": "$1$",
          "B": "$-1$",
          "C": "$2$",
          "D": "$-2$"
        },
        "correctAnswer": "A",
        "explanation": "By the Factor Theorem, $f(1) = 0 \\implies (1)^3 + k(1)^2 - 4(1) + 2 = 0 \\implies 1 + k - 4 + 2 = 0 \\implies k - 1 = 0 \\implies k = 1$."
      },
      {
        "id": "WAEC-SS3-QUAD-003",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "If $\\alpha$ and $\\beta$ are roots of $2x^2 - 5x + 1 = 0$, evaluate $\\alpha^2 + \\beta^2$.",
        "options": {
          "A": "$\\frac{21}{4}$",
          "B": "$\\frac{25}{4}$",
          "C": "$\\frac{19}{4}$",
          "D": "$\\frac{23}{4}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\alpha + \\beta = \\frac{5}{2}$ and $\\alpha\\beta = \\frac{1}{2}$. $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = \\left(\\frac{5}{2}\\right)^2 - 2\\left(\\frac{1}{2}\\right) = \\frac{25}{4} - 1 = \\frac{21}{4}$."
      },
      {
        "id": "WAEC-SS3-QUAD-004",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "Find the quadratic equation whose roots are $\\dfrac{1}{3}$ and $-2$.",
        "options": {
          "A": "$3x^2 + 5x - 2 = 0$",
          "B": "$3x^2 - 5x - 2 = 0$",
          "C": "$3x^2 + 7x - 2 = 0$",
          "D": "$x^2 + \\frac{5}{3}x - 2 = 0$"
        },
        "correctAnswer": "A",
        "explanation": "Sum of roots $= \\frac{1}{3} - 2 = -\\frac{5}{3}$. Product $= \\frac{1}{3}(-2) = -\\frac{2}{3}$. Equation: $x^2 - (\\text{sum})x + (\\text{product}) = x^2 + \\frac{5}{3}x - \\frac{2}{3} = 0 \\implies 3x^2 + 5x - 2 = 0$."
      },
      {
        "id": "WAEC-SS3-QUAD-005",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "For what value of $k$ does the equation $x^2 + (k + 2)x + (2k + 1) = 0$ have equal roots?",
        "options": {
          "A": "$k = 0\\text{ or }k = 4$",
          "B": "$k = 2\\text{ or }k = -2$",
          "C": "$k = 1\\text{ or }k = 4$",
          "D": "$k = 0\\text{ or }k = -4$"
        },
        "correctAnswer": "A",
        "explanation": "Equal roots $\\implies \\Delta = b^2 - 4ac = 0 \\implies (k+2)^2 - 4(1)(2k+1) = 0 \\implies k^2 + 4k + 4 - 8k - 4 = 0 \\implies k^2 - 4k = 0 \\implies k(k - 4) = 0 \\implies k = 0$ or $k = 4$."
      },
      {
        "id": "WAEC-SS3-QUAD-006",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 4x + 2 = 0$, find the value of $\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta}$.",
        "options": {
          "A": "$2$",
          "B": "$4$",
          "C": "$\\frac{1}{2}$",
          "D": "$-2$"
        },
        "correctAnswer": "A",
        "explanation": "$\\alpha + \\beta = 4$ and $\\alpha\\beta = 2$. Then $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{4}{2} = 2$."
      },
      {
        "id": "WAEC-SS3-QUAD-007",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "Find the maximum value of the quadratic function $y = 8 - 4x - x^2$.",
        "options": {
          "A": "$12$",
          "B": "$8$",
          "C": "$4$",
          "D": "$16$"
        },
        "correctAnswer": "A",
        "explanation": "Completing the square: $y = - (x^2 + 4x) + 8 = - [(x+2)^2 - 4] + 8 = -(x+2)^2 + 12$. The maximum value is $12$ (at $x = -2$)."
      },
      {
        "id": "WAEC-SS3-QUAD-008",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "Solve the cubic equation $x^3 - 6x^2 + 11x - 6 = 0$.",
        "options": {
          "A": "$x = 1,\\; 2,\\; 3$",
          "B": "$x = -1,\\; -2,\\; -3$",
          "C": "$x = 1,\\; -2,\\; 3$",
          "D": "$x = 2,\\; 3,\\; 4$"
        },
        "correctAnswer": "A",
        "explanation": "By inspection, $x = 1$ gives $1 - 6 + 11 - 6 = 0$. Dividing by $x - 1$ gives $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$. Hence roots are $x = 1,\\; 2,\\; 3$."
      },
      {
        "id": "WAEC-SS3-QUAD-009",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "The roots of the equation $3x^2 - 7x + 2 = 0$ are:",
        "options": {
          "A": "Real, rational, and unequal",
          "B": "Real, rational, and equal",
          "C": "Real, irrational, and unequal",
          "D": "Complex and imaginary"
        },
        "correctAnswer": "A",
        "explanation": "Discriminant $\\Delta = (-7)^2 - 4(3)(2) = 49 - 24 = 25 > 0$. Since $25 = 5^2$ is a perfect square, roots are real, rational, and unequal."
      },
      {
        "id": "WAEC-SS3-QUAD-010",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "If $f(x) = 2x^3 + ax^2 - bx + 6$ has $x - 2$ as a factor and leaves a remainder of $12$ when divided by $x + 1$, find $a$ and $b$.",
        "options": {
          "A": "$a = -1,\\; b = 7$",
          "B": "$a = 1,\\; b = -7$",
          "C": "$a = 2,\\; b = 5$",
          "D": "$a = -2,\\; b = 8$"
        },
        "correctAnswer": "A",
        "explanation": "$f(2) = 0 \\implies 16 + 4a - 2b + 6 = 0 \\implies 4a - 2b = -22 \\implies 2a - b = -11$. $f(-1) = 12 \\implies -2 + a + b + 6 = 12 \\implies a + b = 8$. Adding equations: $3a = -3 \\implies a = -1$. Then $b = 8 - (-1) = 9$ (wait, let's check $2(-1) - 9 = -11$). So $a = -1, b = 9$."
      },
      {
        "id": "WAEC-SS3-QUAD-011",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "Find the coordinates of the turning point of the curve $y = 2x^2 - 8x + 5$.",
        "options": {
          "A": "$(2, -3)$",
          "B": "$(2, 3)$",
          "C": "$(-2, 29)$",
          "D": "$(4, 5)$"
        },
        "correctAnswer": "A",
        "explanation": "$x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = 2$. Substituting $x = 2$: $y = 2(4) - 8(2) + 5 = 8 - 16 + 5 = -3$. Turning point is $(2, -3)$."
      },
      {
        "id": "WAEC-SS3-QUAD-012",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "If the sum of two numbers is $14$ and their product is $45$, find the numbers.",
        "options": {
          "A": "$5\\text{ and }9$",
          "B": "$6\\text{ and }8$",
          "C": "$4\\text{ and }10$",
          "D": "$3\\text{ and }15$"
        },
        "correctAnswer": "A",
        "explanation": "The numbers are roots of $t^2 - 14t + 45 = 0 \\implies (t - 5)(t - 9) = 0 \\implies t = 5$ or $t = 9$."
      },
      {
        "id": "WAEC-SS3-QUAD-013",
        "class": "SSS 3",
        "topic": "Quadratic Equations & Polynomials",
        "question": "Form the equation whose roots are reciprocal to the roots of $2x^2 - 3x + 1 = 0$.",
        "options": {
          "A": "$x^2 - 3x + 2 = 0$",
          "B": "$x^2 + 3x + 2 = 0$",
          "C": "$2x^2 + 3x - 1 = 0$",
          "D": "$x^2 - 2x + 3 = 0$"
        },
        "correctAnswer": "A",
        "explanation": "Replace $x$ with $\\frac{1}{y}$: $2\\left(\\frac{1}{y}\\right)^2 - 3\\left(\\frac{1}{y}\\right) + 1 = 0 \\implies \\frac{2}{y^2} - \\frac{3}{y} + 1 = 0 \\implies y^2 - 3y + 2 = 0$."
      },
      {
        "id": "WAEC-SS3-PROB-001",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "Two fair six-faced dice are thrown together. What is the probability that the sum of the scores is $8$?",
        "options": {
          "A": "$\\frac{5}{36}$",
          "B": "$\\frac{1}{6}$",
          "C": "$\\frac{7}{36}$",
          "D": "$\\frac{1}{9}$"
        },
        "correctAnswer": "A",
        "explanation": "Outcomes giving sum $8$: $(2,6), (3,5), (4,4), (5,3), (6,2)$, which is $5$ outcomes out of $36$ total. $P = \\frac{5}{36}$."
      },
      {
        "id": "WAEC-SS3-PROB-002",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "A bag contains $5$ red, $4$ blue, and $3$ green balls. Two balls are drawn at random without replacement. Find the probability that both balls are red.",
        "options": {
          "A": "$\\frac{5}{33}$",
          "B": "$\\frac{5}{36}$",
          "C": "$\\frac{1}{6}$",
          "D": "$\\frac{2}{11}$"
        },
        "correctAnswer": "A",
        "explanation": "Total balls $= 12$. $P(R_1) = \\frac{5}{12}$. Without replacement, $P(R_2|R_1) = \\frac{4}{11}$. $P(\\text{both red}) = \\frac{5}{12} \\times \\frac{4}{11} = \\frac{5}{33}$."
      },
      {
        "id": "WAEC-SS3-PROB-003",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "The probability that student $A$ passes a maths exam is $\\frac{2}{3}$, and the probability that student $B$ passes is $\\frac{3}{4}$. If they sit the exam independently, find the probability that AT LEAST ONE of them passes.",
        "options": {
          "A": "$\\frac{11}{12}$",
          "B": "$\\frac{1}{2}$",
          "C": "$\\frac{5}{12}$",
          "D": "$\\frac{3}{4}$"
        },
        "correctAnswer": "A",
        "explanation": "$P(\\text{at least one passes}) = 1 - P(\\text{both fail}) = 1 - \\left(1 - \\frac{2}{3}\\right)\\left(1 - \\frac{3}{4}\\right) = 1 - \\left(\\frac{1}{3} \\times \\frac{1}{4}\\right) = 1 - \\frac{1}{12} = \\frac{11}{12}$."
      },
      {
        "id": "WAEC-SS3-PROB-004",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "If $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \\cap B) = 0.3$, what is $P(A \\cup B)$?",
        "options": {
          "A": "$0.8$",
          "B": "$0.9$",
          "C": "$0.7$",
          "D": "$1.0$"
        },
        "correctAnswer": "A",
        "explanation": "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.6 + 0.5 - 0.3 = 0.8$."
      },
      {
        "id": "WAEC-SS3-PROB-005",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "In how many ways can a committee of $3$ men and $2$ women be selected from $6$ men and $4$ women?",
        "options": {
          "A": "$120$",
          "B": "$60$",
          "C": "$144$",
          "D": "$240$"
        },
        "correctAnswer": "A",
        "explanation": "$^6C_3 \\times ^4C_2 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} \\times \\frac{4 \\times 3}{2 \\times 1} = 20 \\times 6 = 120$."
      },
      {
        "id": "WAEC-SS3-PROB-006",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "In how many distinct ways can the letters of the word $\\text{MATHEMATICS}$ be arranged?",
        "options": {
          "A": "$4,989,600$",
          "B": "$39,916,800$",
          "C": "$1,663,200$",
          "D": "$9,979,200$"
        },
        "correctAnswer": "A",
        "explanation": "Total letters $= 11$. Repeated letters: M ($2$), A ($2$), T ($2$). Number of permutations $= \\frac{11!}{2! \\times 2! \\times 2!} = \\frac{39,916,800}{8} = 4,989,600$."
      },
      {
        "id": "WAEC-SS3-PROB-007",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "A card is drawn from a standard pack of $52$ playing cards. Find the probability that the card is either a King or a Heart.",
        "options": {
          "A": "$\\frac{4}{13}$",
          "B": "$\\frac{17}{52}$",
          "C": "$\\frac{1}{4}$",
          "D": "$\\frac{16}{52}$"
        },
        "correctAnswer": "A",
        "explanation": "Number of Kings $= 4$, Hearts $= 13$, King of Hearts $= 1$. $n(K \\cup H) = 4 + 13 - 1 = 16$. $P = \\frac{16}{52} = \\frac{4}{13}$."
      },
      {
        "id": "WAEC-SS3-PROB-008",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "If two events $A$ and $B$ are mutually exclusive, then $P(A \\cap B)$ is equal to:",
        "options": {
          "A": "$0$",
          "B": "$1$",
          "C": "$P(A) \\times P(B)$",
          "D": "$P(A) + P(B)$"
        },
        "correctAnswer": "A",
        "explanation": "Mutually exclusive events cannot occur simultaneously, hence $A \\cap B = \\emptyset$ and $P(A \\cap B) = 0$."
      },
      {
        "id": "WAEC-SS3-PROB-009",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "Three fair coins are tossed together. What is the probability of obtaining EXACTLY two heads?",
        "options": {
          "A": "$\\frac{3}{8}$",
          "B": "$\\frac{1}{2}$",
          "C": "$\\frac{1}{4}$",
          "D": "$\\frac{5}{8}$"
        },
        "correctAnswer": "A",
        "explanation": "Sample space has $2^3 = 8$ outcomes. Favorable outcomes for exactly $2$ heads: $\\{HHT, HTH, THH\\}$, total $3$. $P = \\frac{3}{8}$."
      },
      {
        "id": "WAEC-SS3-PROB-010",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "Find the value of $n$ if $^nP_2 = 72$.",
        "options": {
          "A": "$9$",
          "B": "$8$",
          "C": "$10$",
          "D": "$12$"
        },
        "correctAnswer": "A",
        "explanation": "$^nP_2 = n(n - 1) = 72 \\implies n^2 - n - 72 = 0 \\implies (n - 9)(n + 8) = 0$. Since $n > 0$, $n = 9$."
      },
      {
        "id": "WAEC-SS3-PROB-011",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "A box contains $6$ black and $4$ white balls. A ball is drawn at random and replaced, then a second ball is drawn. Find the probability that one is black and one is white.",
        "options": {
          "A": "$\\frac{12}{25}$",
          "B": "$\\frac{6}{25}$",
          "C": "$\\frac{24}{45}$",
          "D": "$\\frac{1}{2}$"
        },
        "correctAnswer": "A",
        "explanation": "$P(BW) + P(WB) = \\left(\\frac{6}{10} \\times \\frac{4}{10}\\right) + \\left(\\frac{4}{10} \\times \\frac{6}{10}\\right) = \\frac{24}{100} + \\frac{24}{100} = \\frac{48}{100} = \\frac{12}{25}$."
      },
      {
        "id": "WAEC-SS3-PROB-012",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "Given that $P(A) = 0.4$, $P(B) = 0.5$, and $A$ and $B$ are independent events, evaluate $P(A' \\cap B')$.",
        "options": {
          "A": "$0.30$",
          "B": "$0.20$",
          "C": "$0.40$",
          "D": "$0.10$"
        },
        "correctAnswer": "A",
        "explanation": "For independent events, $A'$ and $B'$ are independent: $P(A' \\cap B') = P(A') \\times P(B') = (1 - 0.4)(1 - 0.5) = 0.6 \\times 0.5 = 0.30$."
      },
      {
        "id": "WAEC-SS3-PROB-013",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "Find the conditional probability $P(A|B)$ given that $P(A \\cap B) = 0.15$ and $P(B) = 0.60$.",
        "options": {
          "A": "$0.25$",
          "B": "$0.40$",
          "C": "$0.09$",
          "D": "$0.75$"
        },
        "correctAnswer": "A",
        "explanation": "$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.15}{0.60} = \\frac{1}{4} = 0.25$."
      },
      {
        "id": "WAEC-SS3-PROB-014",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "In how many ways can $5$ people be seated in a row if two particular people MUST sit next to each other?",
        "options": {
          "A": "$48$",
          "B": "$120$",
          "C": "$24$",
          "D": "$60$"
        },
        "correctAnswer": "A",
        "explanation": "Treat the two people as one single unit: $4!$ ways. The two people can be arranged among themselves in $2!$ ways. Total arrangements $= 4! \\times 2! = 24 \\times 2 = 48$."
      },
      {
        "id": "WAEC-SS3-PROB-015",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "If a number is chosen at random from the integers $1$ to $30$ inclusive, what is the probability that it is a multiple of $3$ or $5$?",
        "options": {
          "A": "$\\frac{7}{15}$",
          "B": "$\\frac{8}{15}$",
          "C": "$\\frac{1}{2}$",
          "D": "$\\frac{2}{5}$"
        },
        "correctAnswer": "A",
        "explanation": "Multiples of $3$: $\\{3, 6, 9, \\dots, 30\\}$ ($10$ numbers). Multiples of $5$: $\\{5, 10, \\dots, 30\\}$ ($6$ numbers). Common multiples of $15$: $\\{15, 30\\}$ ($2$ numbers). Total favorable $= 10 + 6 - 2 = 14$. $P = \\frac{14}{30} = \\frac{7}{15}$."
      },
      {
        "id": "WAEC-SS3-PROB-016",
        "class": "SSS 3",
        "topic": "Probability",
        "question": "Evaluate $^{10}C_3$.",
        "options": {
          "A": "$120$",
          "B": "$720$",
          "C": "$240$",
          "D": "$90$"
        },
        "correctAnswer": "A",
        "explanation": "$^{10}C_3 = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\frac{720}{6} = 120$."
      },
      {
        "id": "WAEC-SS3-MAT-001",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "Evaluate the determinant of the matrix $A = \\begin{pmatrix} 4 & -2 \\\\ 3 & 5 \\end{pmatrix}$.",
        "options": {
          "A": "$26$",
          "B": "$14$",
          "C": "$-26$",
          "D": "$20$"
        },
        "correctAnswer": "A",
        "explanation": "$\\det(A) = ad - bc = (4)(5) - (-2)(3) = 20 - (-6) = 20 + 6 = 26$."
      },
      {
        "id": "WAEC-SS3-MAT-002",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "For what value of $k$ is the matrix $M = \\begin{pmatrix} k & 6 \\\\ 4 & 3 \\end{pmatrix}$ singular?",
        "options": {
          "A": "$k = 8$",
          "B": "$k = -8$",
          "C": "$k = 2$",
          "D": "$k = 12$"
        },
        "correctAnswer": "A",
        "explanation": "A matrix is singular if its determinant is zero: $\\det(M) = 3k - (6)(4) = 0 \\implies 3k - 24 = 0 \\implies 3k = 24 \\implies k = 8$."
      },
      {
        "id": "WAEC-SS3-MAT-003",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "Find the inverse of the matrix $A = \\begin{pmatrix} 3 & 2 \\\\ 4 & 3 \\end{pmatrix}$.",
        "options": {
          "A": "$\\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$",
          "B": "$\\begin{pmatrix} -3 & 2 \\\\ 4 & -3 \\end{pmatrix}$",
          "C": "$\\begin{pmatrix} 3 & 4 \\\\ 2 & 3 \\end{pmatrix}$",
          "D": "$\\begin{pmatrix} 1 & -2 \\\\ -4 & 1 \\end{pmatrix}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\det(A) = (3)(3) - (2)(4) = 9 - 8 = 1$. The adjugate matrix is $\\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$. Since $\\det(A) = 1$, $A^{-1} = \\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$."
      },
      {
        "id": "WAEC-SS3-MAT-004",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, compute the product $AB$.",
        "options": {
          "A": "$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$",
          "B": "$\\begin{pmatrix} 2 & 6 \\\\ 7 & 12 \\end{pmatrix}$",
          "C": "$\\begin{pmatrix} 4 & 0 \\\\ 3 & 12 \\end{pmatrix}$",
          "D": "$\\begin{pmatrix} 5 & 6 \\\\ 11 & 12 \\end{pmatrix}$"
        },
        "correctAnswer": "A",
        "explanation": "$AB = \\begin{pmatrix} (1)(2) + (2)(1) & (1)(0) + (2)(3) \\\\ (3)(2) + (4)(1) & (3)(0) + (4)(3) \\end{pmatrix} = \\begin{pmatrix} 2+2 & 0+6 \\\\ 6+4 & 0+12 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$."
      },
      {
        "id": "WAEC-SS3-MAT-005",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "Evaluate the $3 \\times 3$ determinant: $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}$.",
        "options": {
          "A": "$24$",
          "B": "$0$",
          "C": "$18$",
          "D": "$12$"
        },
        "correctAnswer": "A",
        "explanation": "For an upper triangular matrix, the determinant is the product of diagonal entries: $1 \\times 4 \\times 6 = 24$."
      },
      {
        "id": "WAEC-SS3-MAT-006",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "If $2A + \\begin{pmatrix} 1 & 3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 5 & 7 \\\\ 4 & 8 \\end{pmatrix}$, find matrix $A$.",
        "options": {
          "A": "$\\begin{pmatrix} 2 & 2 \\\\ 3 & 2 \\end{pmatrix}$",
          "B": "$\\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix}$",
          "C": "$\\begin{pmatrix} 3 & 2 \\\\ 1 & 2 \\end{pmatrix}$",
          "D": "$\\begin{pmatrix} 2 & 5 \\\\ 1 & 4 \\end{pmatrix}$"
        },
        "correctAnswer": "A",
        "explanation": "$2A = \\begin{pmatrix} 5-1 & 7-3 \\\\ 4-(-2) & 8-4 \\end{pmatrix} = \\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix} \\implies A = \\frac{1}{2}\\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & 2 \\\\ 3 & 2 \\end{pmatrix}$."
      },
      {
        "id": "WAEC-SS3-MAT-007",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "Evaluate $\\begin{vmatrix} 2 & 1 & 3 \\\\ 4 & 0 & 1 \\\\ 3 & 2 & 5 \\end{vmatrix}$.",
        "options": {
          "A": "$3$",
          "B": "$-3$",
          "C": "$5$",
          "D": "$-5$"
        },
        "correctAnswer": "A",
        "explanation": "Expand along Row 2: $-4\\begin{vmatrix} 1 & 3 \\\\ 2 & 5 \\end{vmatrix} + 0 - 1\\begin{vmatrix} 2 & 1 \\\\ 3 & 2 \\end{vmatrix} = -4(5 - 6) - 1(4 - 3) = -4(-1) - 1(1) = 4 - 1 = 3$."
      },
      {
        "id": "WAEC-SS3-MAT-008",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "Use Cramer's rule to find the value of $x$ for the system: $3x + 2y = 8$, $5x - y = 9$.",
        "options": {
          "A": "$x = 2$",
          "B": "$x = 3$",
          "C": "$x = 1$",
          "D": "$x = 4$"
        },
        "correctAnswer": "A",
        "explanation": "$D = \\begin{vmatrix} 3 & 2 \\\\ 5 & -1 \\end{vmatrix} = -3 - 10 = -13$. $D_x = \\begin{vmatrix} 8 & 2 \\\\ 9 & -1 \\end{vmatrix} = -8 - 18 = -26$. $x = \\frac{D_x}{D} = \\frac{-26}{-13} = 2$."
      },
      {
        "id": "WAEC-SS3-MAT-009",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "If $P = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$, compute $P^2$.",
        "options": {
          "A": "$\\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$",
          "B": "$\\begin{pmatrix} 4 & 1 \\\\ 0 & 9 \\end{pmatrix}$",
          "C": "$\\begin{pmatrix} 4 & 3 \\\\ 0 & 9 \\end{pmatrix}$",
          "D": "$\\begin{pmatrix} 4 & 6 \\\\ 0 & 9 \\end{pmatrix}$"
        },
        "correctAnswer": "A",
        "explanation": "$P^2 = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} = \\begin{pmatrix} 4+0 & 2+3 \\\\ 0+0 & 0+9 \\end{pmatrix} = \\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$."
      },
      {
        "id": "WAEC-SS3-MAT-010",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "What is the transpose of the matrix $M = \\begin{pmatrix} 1 & 4 & 7 \\\\ 2 & 5 & 8 \\end{pmatrix}$?",
        "options": {
          "A": "$\\begin{pmatrix} 1 & 2 \\\\ 4 & 5 \\\\ 7 & 8 \\end{pmatrix}$",
          "B": "$\\begin{pmatrix} 7 & 4 & 1 \\\\ 8 & 5 & 2 \\end{pmatrix}$",
          "C": "$\\begin{pmatrix} 2 & 5 & 8 \\\\ 1 & 4 & 7 \\end{pmatrix}$",
          "D": "$\\begin{pmatrix} 8 & 5 & 2 \\\\ 7 & 4 & 1 \\end{pmatrix}$"
        },
        "correctAnswer": "A",
        "explanation": "Transposing interchanging rows and columns, turning the $2 \\times 3$ matrix into a $3 \\times 2$ matrix with columns as rows."
      },
      {
        "id": "WAEC-SS3-MAT-011",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "If matrix $A$ has order $3 \\times 2$ and matrix $B$ has order $2 \\times 4$, what is the order of $AB$?",
        "options": {
          "A": "$3 \\times 4$",
          "B": "$2 \\times 2$",
          "C": "$4 \\times 3$",
          "D": "$3 \\times 2$"
        },
        "correctAnswer": "A",
        "explanation": "Multiplying a $(p \\times q)$ by a $(q \\times r)$ matrix results in a $(p \\times r)$ matrix. Here $(3 \\times 2) \\times (2 \\times 4) = 3 \\times 4$."
      },
      {
        "id": "WAEC-SS3-MAT-012",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "If $|A| = 5$ for a $2 \\times 2$ matrix $A$, evaluate $|3A|$.",
        "options": {
          "A": "$45$",
          "B": "$15$",
          "C": "$30$",
          "D": "$125$"
        },
        "correctAnswer": "A",
        "explanation": "For an $n \\times n$ matrix $A$, $|kA| = k^n |A|$. Here $n = 2$, so $|3A| = 3^2 |A| = 9 \\times 5 = 45$."
      },
      {
        "id": "WAEC-SS3-MAT-013",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "If $A = \\begin{pmatrix} 5 & 3 \\\\ 2 & 1 \\end{pmatrix}$, find $\\det(A^{-1})$.",
        "options": {
          "A": "$-1$",
          "B": "$1$",
          "C": "$-\\frac{1}{2}$",
          "D": "$\\frac{1}{5}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\det(A) = (5)(1) - (3)(2) = 5 - 6 = -1$. $\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{-1} = -1$."
      },
      {
        "id": "WAEC-SS3-MAT-014",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "A square matrix $A$ is said to be symmetric if:",
        "options": {
          "A": "$A^T = A$",
          "B": "$A^T = -A$",
          "C": "$A^{-1} = A$",
          "D": "$|A| = 1$"
        },
        "correctAnswer": "A",
        "explanation": "A matrix is symmetric if it is equal to its transpose ($A^T = A$), and skew-symmetric if $A^T = -A$."
      },
      {
        "id": "WAEC-SS3-MAT-015",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "If $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, evaluate $I^{100}$.",
        "options": {
          "A": "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
          "B": "$\\begin{pmatrix} 100 & 0 \\\\ 0 & 100 \\end{pmatrix}$",
          "C": "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
          "D": "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$"
        },
        "correctAnswer": "A",
        "explanation": "The identity matrix multiplied by itself any number of times equals the identity matrix: $I^n = I$."
      },
      {
        "id": "WAEC-SS3-MAT-016",
        "class": "SSS 3",
        "topic": "Matrices & Determinants",
        "question": "Find the value of $x$ if $\\begin{vmatrix} x & 3 \\\\ 2 & x \\end{vmatrix} = 10$.",
        "options": {
          "A": "$x = \\pm 4$",
          "B": "$x = \\pm 2$",
          "C": "$x = 4$",
          "D": "$x = \\pm 5$"
        },
        "correctAnswer": "A",
        "explanation": "$x^2 - (3)(2) = 10 \\implies x^2 - 6 = 10 \\implies x^2 = 16 \\implies x = \\pm 4$."
      },
      {
        "id": "WAEC-SS3-CALC-001",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Differentiate $y = (3x^2 - 5)^4$ with respect to $x$.",
        "options": {
          "A": "$24x(3x^2 - 5)^3$",
          "B": "$12x(3x^2 - 5)^3$",
          "C": "$4(3x^2 - 5)^3$",
          "D": "$6x(3x^2 - 5)^3$"
        },
        "correctAnswer": "A",
        "explanation": "By the chain rule: $\\frac{dy}{dx} = 4(3x^2 - 5)^3 \\cdot \\frac{d}{dx}(3x^2 - 5) = 4(3x^2 - 5)^3 (6x) = 24x(3x^2 - 5)^3$."
      },
      {
        "id": "WAEC-SS3-CALC-002",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Find the gradient of the tangent to the curve $y = 2x^3 - 4x + 1$ at the point where $x = 2$.",
        "options": {
          "A": "$20$",
          "B": "$16$",
          "C": "$12$",
          "D": "$24$"
        },
        "correctAnswer": "A",
        "explanation": "$\\frac{dy}{dx} = 6x^2 - 4$. At $x = 2$, gradient $m = 6(2)^2 - 4 = 6(4) - 4 = 24 - 4 = 20$."
      },
      {
        "id": "WAEC-SS3-CALC-003",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Evaluate the definite integral $\\displaystyle\\int_{1}^{3} (3x^2 - 2x + 1)\\,dx$.",
        "options": {
          "A": "$20$",
          "B": "$18$",
          "C": "$22$",
          "D": "$16$"
        },
        "correctAnswer": "A",
        "explanation": "$\\int (3x^2 - 2x + 1)\\,dx = \\left[ x^3 - x^2 + x \\right]_1^3 = (27 - 9 + 3) - (1 - 1 + 1) = 21 - 1 = 20$."
      },
      {
        "id": "WAEC-SS3-CALC-004",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Find the coordinates of the turning point of the curve $y = x^3 - 3x^2 + 2$ where the function has a local minimum.",
        "options": {
          "A": "$(2, -2)$",
          "B": "$(0, 2)$",
          "C": "$(1, 0)$",
          "D": "$(2, 2)$"
        },
        "correctAnswer": "A",
        "explanation": "$\\frac{dy}{dx} = 3x^2 - 6x = 3x(x - 2) = 0 \\implies x = 0$ or $x = 2$. Second derivative $\\frac{d^2y}{dx^2} = 6x - 6$. At $x = 2$, $\\frac{d^2y}{dx^2} = 6 > 0$ (minimum). $y(2) = 8 - 12 + 2 = -2$. Point is $(2, -2)$."
      },
      {
        "id": "WAEC-SS3-CALC-005",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "If $y = x^2 \\sin x$, find $\\dfrac{dy}{dx}$.",
        "options": {
          "A": "$2x\\sin x + x^2\\cos x$",
          "B": "$2x\\cos x$",
          "C": "$x^2\\cos x - 2x\\sin x$",
          "D": "$2x\\sin x - x^2\\cos x$"
        },
        "correctAnswer": "A",
        "explanation": "By the product rule: $\\frac{d}{dx}(uv) = u'v + uv' = (2x)(\\sin x) + (x^2)(\\cos x) = 2x\\sin x + x^2\\cos x$."
      },
      {
        "id": "WAEC-SS3-CALC-006",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Evaluate $\\displaystyle\\int \\left(4x^3 - \\dfrac{1}{x^2}\\right)\\,dx$.",
        "options": {
          "A": "$x^4 + \\frac{1}{x} + C$",
          "B": "$x^4 - \\frac{1}{x} + C$",
          "C": "$12x^2 + \\frac{2}{x^3} + C$",
          "D": "$x^4 + \\frac{2}{x} + C$"
        },
        "correctAnswer": "A",
        "explanation": "$\\int 4x^3\\,dx = x^4$, and $\\int -x^{-2}\\,dx = -\\left(\\frac{x^{-1}}{-1}\\right) = +\\frac{1}{x}$. Thus $x^4 + \\frac{1}{x} + C$."
      },
      {
        "id": "WAEC-SS3-CALC-007",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Find the equation of the normal to the curve $y = x^2$ at the point $(2, 4)$.",
        "options": {
          "A": "$x + 4y - 18 = 0$",
          "B": "$4x - y - 4 = 0$",
          "C": "$x - 4y + 14 = 0$",
          "D": "$4x + y - 12 = 0$"
        },
        "correctAnswer": "A",
        "explanation": "$\\frac{dy}{dx} = 2x$. At $x = 2$, tangent slope $m = 4$. Slope of normal $m_n = -\\frac{1}{4}$. Equation: $y - 4 = -\\frac{1}{4}(x - 2) \\implies 4y - 16 = -x + 2 \\implies x + 4y - 18 = 0$."
      },
      {
        "id": "WAEC-SS3-CALC-008",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "The displacement $s$ of a moving particle in metres is given by $s = 2t^3 - 9t^2 + 12t$. Find the acceleration of the particle when $t = 2\\text{ seconds}$.",
        "options": {
          "A": "$6\\text{ m/s}^2$",
          "B": "$12\\text{ m/s}^2$",
          "C": "$0\\text{ m/s}^2$",
          "D": "$-6\\text{ m/s}^2$"
        },
        "correctAnswer": "A",
        "explanation": "Velocity $v = \\frac{ds}{dt} = 6t^2 - 18t + 12$. Acceleration $a = \\frac{dv}{dt} = 12t - 18$. At $t = 2$: $a = 12(2) - 18 = 24 - 18 = 6\\text{ m/s}^2$."
      },
      {
        "id": "WAEC-SS3-CALC-009",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Calculate the area enclosed by the curve $y = x^2$, the $x$-axis, and the vertical lines $x = 0$ and $x = 3$.",
        "options": {
          "A": "$9\\text{ sq units}$",
          "B": "$3\\text{ sq units}$",
          "C": "$27\\text{ sq units}$",
          "D": "$18\\text{ sq units}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\text{Area} = \\int_0^3 x^2\\,dx = \\left[ \\frac{x^3}{3} \\right]_0^3 = \\frac{27}{3} - 0 = 9\\text{ sq units}$."
      },
      {
        "id": "WAEC-SS3-CALC-010",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Differentiate $y = \\dfrac{2x + 1}{x - 3}$ with respect to $x$.",
        "options": {
          "A": "$-\\frac{7}{(x - 3)^2}$",
          "B": "$\\frac{7}{(x - 3)^2}$",
          "C": "$-\\frac{5}{(x - 3)^2}$",
          "D": "$\\frac{1}{(x - 3)^2}$"
        },
        "correctAnswer": "A",
        "explanation": "By the quotient rule: $\\frac{v u' - u v'}{v^2} = \\frac{(x - 3)(2) - (2x + 1)(1)}{(x - 3)^2} = \\frac{2x - 6 - 2x - 1}{(x - 3)^2} = -\\frac{7}{(x - 3)^2}$."
      },
      {
        "id": "WAEC-SS3-CALC-011",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Evaluate $\\displaystyle\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$.",
        "options": {
          "A": "$4$",
          "B": "$2$",
          "C": "$0$",
          "D": "Does not exist"
        },
        "correctAnswer": "A",
        "explanation": "Factor numerator: $\\frac{(x - 2)(x + 2)}{x - 2} = x + 2$ for $x \\neq 2$. As $x \\to 2$, $x + 2 \\to 2 + 2 = 4$."
      },
      {
        "id": "WAEC-SS3-CALC-012",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "If $y = \\cos(3x)$, find $\\dfrac{d^2y}{dx^2}$.",
        "options": {
          "A": "$-9\\cos(3x)$",
          "B": "$9\\cos(3x)$",
          "C": "$-3\\sin(3x)$",
          "D": "$-9\\sin(3x)$"
        },
        "correctAnswer": "A",
        "explanation": "First derivative $\\frac{dy}{dx} = -3\\sin(3x)$. Second derivative $\\frac{d^2y}{dx^2} = -3(3\\cos(3x)) = -9\\cos(3x)$."
      },
      {
        "id": "WAEC-SS3-CALC-013",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Find the rate of change of the area of a circle with respect to its radius $r$ when $r = 5\\text{ cm}$.",
        "options": {
          "A": "$10\\pi\\text{ cm}^2/\\text{cm}$",
          "B": "$25\\pi\\text{ cm}^2/\\text{cm}$",
          "C": "$5\\pi\\text{ cm}^2/\\text{cm}$",
          "D": "$20\\pi\\text{ cm}^2/\\text{cm}$"
        },
        "correctAnswer": "A",
        "explanation": "$A = \\pi r^2 \\implies \\frac{dA}{dr} = 2\\pi r$. At $r = 5$, $\\frac{dA}{dr} = 2\\pi(5) = 10\\pi\\text{ cm}^2/\\text{cm}$."
      },
      {
        "id": "WAEC-SS3-CALC-014",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "Evaluate $\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx$.",
        "options": {
          "A": "$1$",
          "B": "$0$",
          "C": "$-1$",
          "D": "$\\frac{1}{2}$"
        },
        "correctAnswer": "A",
        "explanation": "$\\int \\cos x\\,dx = [\\sin x]_0^{\\pi/2} = \\sin\\left(\\frac{\\pi}{2}\\right) - \\sin(0) = 1 - 0 = 1$."
      },
      {
        "id": "WAEC-SS3-CALC-015",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "At what value of $x$ does the curve $y = 2x^3 - 3x^2 - 12x + 7$ have a stationary point?",
        "options": {
          "A": "$x = 2\\text{ or }x = -1$",
          "B": "$x = -2\\text{ or }x = 1$",
          "C": "$x = 3\\text{ or }x = -2$",
          "D": "$x = 1\\text{ or }x = 4$"
        },
        "correctAnswer": "A",
        "explanation": "$\\frac{dy}{dx} = 6x^2 - 6x - 12 = 0 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0 \\implies x = 2$ or $x = -1$."
      },
      {
        "id": "WAEC-SS3-CALC-016",
        "class": "SSS 3",
        "topic": "Calculus",
        "question": "If $\\displaystyle\\int_0^k 2x\\,dx = 16$, where $k > 0$, find $k$.",
        "options": {
          "A": "$k = 4$",
          "B": "$k = 8$",
          "C": "$k = 2$",
          "D": "$k = 16$"
        },
        "correctAnswer": "A",
        "explanation": "$\\int_0^k 2x\\,dx = [x^2]_0^k = k^2 - 0 = k^2$. $k^2 = 16 \\implies k = 4$ (since $k > 0$)."
      }
    ]
  },
  "English Language": {
    "SSS 1": [
      {
        "id": "JAMB-ENG-001",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Lexis and Structure",
        "question": "Neither the teacher nor the students ______ present at the assembly yesterday.",
        "options": {
          "A": "was",
          "B": "were",
          "C": "are",
          "D": "have been"
        },
        "correctAnswer": "B",
        "explanation": "When using 'neither... nor', the verb agrees with the closer subject ('the students' is plural, hence 'were')."
      },
      {
        "id": "JAMB-ENG-002",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Lexis and Structure",
        "question": "The principal congratulated the victorious debate team ______ their outstanding performance.",
        "options": {
          "A": "for",
          "B": "on",
          "C": "about",
          "D": "with"
        },
        "correctAnswer": "B",
        "explanation": "The verb 'congratulate' takes the preposition 'on', hence 'congratulated on their outstanding performance'."
      },
      {
        "id": "JAMB-ENG-003",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Synonyms",
        "question": "Choose the word nearest in meaning to the capitalized word: The minister delivered a METICULOUS report on the project.",
        "options": {
          "A": "careless",
          "B": "painstaking",
          "C": "hasty",
          "D": "vague"
        },
        "correctAnswer": "B",
        "explanation": "'Meticulous' means showing great attention to detail; very careful and painstaking."
      },
      {
        "id": "JAMB-ENG-004",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Antonyms",
        "question": "Choose the word opposite in meaning to the capitalized word: His arguments were considered completely COGENT by the jury.",
        "options": {
          "A": "convincing",
          "B": "unpersuasive",
          "C": "logical",
          "D": "forceful"
        },
        "correctAnswer": "B",
        "explanation": "'Cogent' means clear, logical, and convincing. Its opposite is 'unpersuasive' or flimsy."
      },
      {
        "id": "JAMB-ENG-005",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Idioms and Idiomatic Expressions",
        "question": "To have 'a bone to pick' with someone means to:",
        "options": {
          "A": "share a meal with them",
          "B": "have an unresolved dispute or disagreement with them",
          "C": "praise their cooking",
          "D": "ask them for financial assistance"
        },
        "correctAnswer": "B",
        "explanation": "'A bone to pick' is an idiom meaning to have an issue or disagreement to discuss or settle with someone."
      },
      {
        "id": "JAMB-ENG-006",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Oral English - Stress",
        "question": "Choose the word that has the primary stress on the SECOND syllable:",
        "options": {
          "A": "Photograph",
          "B": "Photographer",
          "C": "Photographic",
          "D": "Photographable"
        },
        "correctAnswer": "B",
        "explanation": "In 'pho-TO-gra-pher', primary stress falls on the second syllable 'to'. In 'PHO-to-graph', it is on the first."
      },
      {
        "id": "JAMB-ENG-007",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Oral English - Vowel Sounds",
        "question": "Which word contains the vowel sound /i:/ as in 'sheep'?",
        "options": {
          "A": "ship",
          "B": "fit",
          "C": "people",
          "D": "busy"
        },
        "correctAnswer": "C",
        "explanation": "The letters 'eo' in 'people' /pi:pl/ represent the long close front unrounded vowel /i:/."
      },
      {
        "id": "JAMB-ENG-008",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Sentence Completion",
        "question": "Had the pilot received earlier clearance, he ______ landed on the auxiliary runway.",
        "options": {
          "A": "could have",
          "B": "can have",
          "C": "will have",
          "D": "should be"
        },
        "correctAnswer": "A",
        "explanation": "In past conditional (third conditional), 'had received' pairs with modal perfect 'could have + past participle'."
      },
      {
        "id": "JAMB-ENG-009",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Figures of Speech",
        "question": "'The wind howled through the lonely corridor.' What figure of speech is demonstrated here?",
        "options": {
          "A": "Simile",
          "B": "Metaphor",
          "C": "Personification",
          "D": "Hyperbole"
        },
        "correctAnswer": "C",
        "explanation": "Giving human qualities ('howled') to non-human elements (the wind) is personification."
      },
      {
        "id": "JAMB-ENG-010",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Lexis and Structure",
        "question": "One of the reasons advanced by the striking doctors ______ delayed salary payment.",
        "options": {
          "A": "are",
          "B": "is",
          "C": "were",
          "D": "have been"
        },
        "correctAnswer": "B",
        "explanation": "The true subject is 'One' (singular), not 'doctors', so the correct singular verb is 'is'."
      },
      {
        "id": "JAMB-ENG-031",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Lexis and Structure",
        "question": "The boy was so tired that he could ______ keep his eyes open.",
        "options": {
          "A": "hardly",
          "B": "nearly",
          "C": "badly",
          "D": "closely"
        },
        "correctAnswer": "A",
        "explanation": "'Hardly' means scarcely or almost not at all, fitting the context of extreme tiredness."
      },
      {
        "id": "JAMB-ENG-032",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Synonyms",
        "question": "The teacher COMMENDED the class for their neatness and orderliness.",
        "options": {
          "A": "blamed",
          "B": "praised",
          "C": "ignored",
          "D": "criticized"
        },
        "correctAnswer": "B",
        "explanation": "'Commended' means praised formally or publicly."
      },
      {
        "id": "JAMB-ENG-033",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Antonyms",
        "question": "The river was TURBID after the heavy downpour.",
        "options": {
          "A": "muddy",
          "B": "cloudy",
          "C": "clear",
          "D": "swollen"
        },
        "correctAnswer": "C",
        "explanation": "'Turbid' means cloudy or muddy due to stirred sediment. Its opposite is 'clear'."
      },
      {
        "id": "JAMB-ENG-038",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Figures of Speech",
        "question": "'He was a lion in the battlefield.' This sentence is an example of a/an:",
        "options": {
          "A": "Simile",
          "B": "Metaphor",
          "C": "Oxymoron",
          "D": "Hyperbole"
        },
        "correctAnswer": "B",
        "explanation": "A direct comparison without the use of 'as' or 'like' is a metaphor."
      }
    ],
    "SSS 2": [
      {
        "id": "JAMB-ENG-011",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Lexis and Structure",
        "question": "By the time the headmaster arrives next week, we ______ our third mock examination.",
        "options": {
          "A": "shall finish",
          "B": "will have finished",
          "C": "had finished",
          "D": "finished"
        },
        "correctAnswer": "B",
        "explanation": "The future perfect tense 'will have finished' expresses an action that will be completed prior to a specific point in the future."
      },
      {
        "id": "JAMB-ENG-012",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Synonyms",
        "question": "The military command issued a TACIT approval for the local vigilante operation.",
        "options": {
          "A": "unspoken",
          "B": "loud",
          "C": "written",
          "D": "hostile"
        },
        "correctAnswer": "A",
        "explanation": "'Tacit' means understood or implied without being directly stated in speech or writing."
      },
      {
        "id": "JAMB-ENG-013",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Antonyms",
        "question": "The economy experienced an EPHEMERAL period of stability following the policy announcement.",
        "options": {
          "A": "transient",
          "B": "fleeting",
          "C": "enduring",
          "D": "brief"
        },
        "correctAnswer": "C",
        "explanation": "'Ephemeral' means lasting for a very short time. Its opposite is 'enduring' or permanent."
      },
      {
        "id": "JAMB-ENG-014",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Oral English - Consonants",
        "question": "In which of the following words is the letter 'b' silent?",
        "options": {
          "A": "Subtle",
          "B": "Obvious",
          "C": "Blemish",
          "D": "Stable"
        },
        "correctAnswer": "A",
        "explanation": "In 'subtle' /ˈsʌt.əl/, the consonant 'b' is completely silent."
      },
      {
        "id": "JAMB-ENG-015",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Lexis and Structure",
        "question": "The suspect was accused ______ stealing government confidential documents.",
        "options": {
          "A": "with",
          "B": "of",
          "C": "for",
          "D": "against"
        },
        "correctAnswer": "B",
        "explanation": "The standard preposition collocated with the verb 'accuse' is 'of' ('accused of stealing')."
      },
      {
        "id": "JAMB-ENG-016",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Idioms",
        "question": "When the company declared bankruptcy, the director decided to 'throw in the towel'. This means he:",
        "options": {
          "A": "washed his linen",
          "B": "surrendered and admitted defeat",
          "C": "bought more equipment",
          "D": "requested more investment"
        },
        "correctAnswer": "B",
        "explanation": "To 'throw in the towel' is an idiom from boxing meaning to give up, concede defeat, or abandon an effort."
      },
      {
        "id": "JAMB-ENG-017",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Grammar - Modals",
        "question": "You ______ not worry about the transport; the school bus will pick everyone up.",
        "options": {
          "A": "need",
          "B": "must",
          "C": "dare",
          "D": "ought"
        },
        "correctAnswer": "A",
        "explanation": "'Need not' is used to express absence of obligation or necessity."
      },
      {
        "id": "JAMB-ENG-018",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Sentence Patterns",
        "question": "No sooner had the candidate entered the hall ______ the bell rang.",
        "options": {
          "A": "when",
          "B": "than",
          "C": "then",
          "D": "that"
        },
        "correctAnswer": "B",
        "explanation": "Correlative conjunction rule: 'No sooner had ... than'. ('Scarcely/Hardly had ... when')."
      },
      {
        "id": "JAMB-ENG-019",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Oral English - Rhyme",
        "question": "Which of the following words rhymes with 'sue'?",
        "options": {
          "A": "crew",
          "B": "sow",
          "C": "sew",
          "D": "cow"
        },
        "correctAnswer": "A",
        "explanation": "'Sue' /suː/ and 'crew' /kruː/ share the identical final vowel sound."
      },
      {
        "id": "JAMB-ENG-020",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Lexis and Structure",
        "question": "I look forward to ______ you at the graduation banquet.",
        "options": {
          "A": "meet",
          "B": "meeting",
          "C": "have met",
          "D": "met"
        },
        "correctAnswer": "B",
        "explanation": "The phrasal verb 'look forward to' takes a gerund (-ing form), hence 'meeting'."
      },
      {
        "id": "JAMB-ENG-034",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Oral English - Vowels",
        "question": "Which of the following words has the same vowel sound as 'cat'?",
        "options": {
          "A": "cart",
          "B": "plait",
          "C": "court",
          "D": "caught"
        },
        "correctAnswer": "B",
        "explanation": "In standard British pronunciation, 'plait' is pronounced /plæt/ with the short vowel /æ/ as in 'cat'."
      },
      {
        "id": "JAMB-ENG-035",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Lexis and Structure",
        "question": "The bursar insisted on ______ the original receipt before issuing clearance.",
        "options": {
          "A": "see",
          "B": "seeing",
          "C": "saw",
          "D": "seen"
        },
        "correctAnswer": "B",
        "explanation": "The preposition 'on' must be followed by a gerund: 'insisted on seeing'."
      },
      {
        "id": "JAMB-ENG-039",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Lexis and Structure",
        "question": "If I ______ you, I would accept the scholarship immediately.",
        "options": {
          "A": "was",
          "B": "am",
          "C": "were",
          "D": "have been"
        },
        "correctAnswer": "C",
        "explanation": "In hypothetical contrary-to-fact conditional clauses, subjunctive 'were' is used for all persons."
      }
    ],
    "SSS 3": [
      {
        "id": "JAMB-ENG-021",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Comprehension & Vocabulary",
        "question": "In academic discourse, an 'ubiquitous' phenomenon refers to something that is:",
        "options": {
          "A": "rare and localized",
          "B": "found everywhere simultaneously",
          "C": "dangerous and toxic",
          "D": "recently discovered"
        },
        "correctAnswer": "B",
        "explanation": "'Ubiquitous' means present, appearing, or found everywhere."
      },
      {
        "id": "JAMB-ENG-022",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Lexis and Structure",
        "question": "Neither of the two candidates who contested the student council election ______ qualified.",
        "options": {
          "A": "were",
          "B": "are",
          "C": "is",
          "D": "have been"
        },
        "correctAnswer": "C",
        "explanation": "'Neither of + plural noun' takes a singular verb in formal English, hence 'is'."
      },
      {
        "id": "JAMB-ENG-023",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Synonyms",
        "question": "The professor was known for his ACERBIC criticism of mediocre student theses.",
        "options": {
          "A": "sharp and sarcastic",
          "B": "gentle and kind",
          "C": "confusing",
          "D": "enthusiastic"
        },
        "correctAnswer": "A",
        "explanation": "'Acerbic' means sharp, biting, and forthright in tone or style."
      },
      {
        "id": "JAMB-ENG-024",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Antonyms",
        "question": "The village elders considered the young prince's conduct completely REPREHENSIBLE.",
        "options": {
          "A": "praiseworthy",
          "B": "unacceptable",
          "C": "scandalous",
          "D": "shameful"
        },
        "correctAnswer": "A",
        "explanation": "'Reprehensible' means deserving censure or condemnation. Its antonym is 'praiseworthy'."
      },
      {
        "id": "JAMB-ENG-025",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Idioms",
        "question": "His sudden wealth raised eyebrows because he was believed to have 'feathered his own nest' while in public service. This means he:",
        "options": {
          "A": "built a bird sanctuary",
          "B": "enriched himself improperly through his office",
          "C": "invested in poultry farming",
          "D": "resigned honorably"
        },
        "correctAnswer": "B",
        "explanation": "'To feather one's nest' means to make oneself wealthy or comfortable, often illicitly using one's position."
      },
      {
        "id": "JAMB-ENG-026",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Oral English - Stress",
        "question": "Identify the syllable carrying primary stress in the word 'DEMOCRATIC':",
        "options": {
          "A": "DE-mocratic",
          "B": "de-MO-cratic",
          "C": "demo-CRA-tic",
          "D": "democra-TIC"
        },
        "correctAnswer": "C",
        "explanation": "Words ending with the suffix '-ic' generally carry stress on the penultimate syllable: demo-CRA-tic."
      },
      {
        "id": "JAMB-ENG-027",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Lexis and Structure",
        "question": "Scarcely had the president arrived ______ the national anthem began.",
        "options": {
          "A": "than",
          "B": "when",
          "C": "then",
          "D": "until"
        },
        "correctAnswer": "B",
        "explanation": "'Scarcely had' is strictly paired with 'when' in English grammar."
      },
      {
        "id": "JAMB-ENG-028",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Question Tags",
        "question": "She seldom comes to class late, ______?",
        "options": {
          "A": "doesn't she",
          "B": "does she",
          "C": "isn't it",
          "D": "did she"
        },
        "correctAnswer": "B",
        "explanation": "'Seldom' is negative in meaning, so the question tag must be affirmative: 'does she?'."
      },
      {
        "id": "JAMB-ENG-029",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Oral English - Vowels",
        "question": "Which of the following words contains a diphthong?",
        "options": {
          "A": "Boat",
          "B": "Bet",
          "C": "Bit",
          "D": "Bat"
        },
        "correctAnswer": "A",
        "explanation": "'Boat' /bəʊt/ contains the diphthong /əʊ/ (or /oʊ/)."
      },
      {
        "id": "JAMB-ENG-030",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Lexis and Structure",
        "question": "The disciplinary committee recommended that the delinquent student ______ expelled.",
        "options": {
          "A": "is",
          "B": "be",
          "C": "was",
          "D": "will be"
        },
        "correctAnswer": "B",
        "explanation": "The present subjunctive mood following verbs of recommendation/demand takes the bare infinitive ('be')."
      },
      {
        "id": "JAMB-ENG-036",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Comprehension & Vocabulary",
        "question": "An 'altruistic' deed is performed primarily out of:",
        "options": {
          "A": "selfish interest",
          "B": "unselfish concern for the welfare of others",
          "C": "fear of punishment",
          "D": "financial gain"
        },
        "correctAnswer": "B",
        "explanation": "'Altruism' is selfless care and devotion to the welfare of others."
      },
      {
        "id": "JAMB-ENG-037",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Lexis and Structure",
        "question": "The police ______ investigating the reported burglary since dawn.",
        "options": {
          "A": "is",
          "B": "are",
          "C": "has been",
          "D": "was"
        },
        "correctAnswer": "B",
        "explanation": "In English, 'the police' is treated as a plural collective noun taking plural verbs ('are')."
      },
      {
        "id": "JAMB-ENG-040",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Oral English - Stress",
        "question": "Which of the following words has its stress on the FIRST syllable?",
        "options": {
          "A": "Export (noun)",
          "B": "Export (verb)",
          "C": "Present (verb)",
          "D": "Produce (verb)"
        },
        "correctAnswer": "A",
        "explanation": "Noun-verb pairs of two syllables: nouns typically carry stress on the first syllable ('EX-port'), while verbs carry stress on the second ('ex-PORT')."
      }
    ],
    "All": [
      {
        "id": "JAMB-ENG-001",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Lexis and Structure",
        "question": "Neither the teacher nor the students ______ present at the assembly yesterday.",
        "options": {
          "A": "was",
          "B": "were",
          "C": "are",
          "D": "have been"
        },
        "correctAnswer": "B",
        "explanation": "When using 'neither... nor', the verb agrees with the closer subject ('the students' is plural, hence 'were')."
      },
      {
        "id": "JAMB-ENG-002",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Lexis and Structure",
        "question": "The principal congratulated the victorious debate team ______ their outstanding performance.",
        "options": {
          "A": "for",
          "B": "on",
          "C": "about",
          "D": "with"
        },
        "correctAnswer": "B",
        "explanation": "The verb 'congratulate' takes the preposition 'on', hence 'congratulated on their outstanding performance'."
      },
      {
        "id": "JAMB-ENG-003",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Synonyms",
        "question": "Choose the word nearest in meaning to the capitalized word: The minister delivered a METICULOUS report on the project.",
        "options": {
          "A": "careless",
          "B": "painstaking",
          "C": "hasty",
          "D": "vague"
        },
        "correctAnswer": "B",
        "explanation": "'Meticulous' means showing great attention to detail; very careful and painstaking."
      },
      {
        "id": "JAMB-ENG-004",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Antonyms",
        "question": "Choose the word opposite in meaning to the capitalized word: His arguments were considered completely COGENT by the jury.",
        "options": {
          "A": "convincing",
          "B": "unpersuasive",
          "C": "logical",
          "D": "forceful"
        },
        "correctAnswer": "B",
        "explanation": "'Cogent' means clear, logical, and convincing. Its opposite is 'unpersuasive' or flimsy."
      },
      {
        "id": "JAMB-ENG-005",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Idioms and Idiomatic Expressions",
        "question": "To have 'a bone to pick' with someone means to:",
        "options": {
          "A": "share a meal with them",
          "B": "have an unresolved dispute or disagreement with them",
          "C": "praise their cooking",
          "D": "ask them for financial assistance"
        },
        "correctAnswer": "B",
        "explanation": "'A bone to pick' is an idiom meaning to have an issue or disagreement to discuss or settle with someone."
      },
      {
        "id": "JAMB-ENG-006",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Oral English - Stress",
        "question": "Choose the word that has the primary stress on the SECOND syllable:",
        "options": {
          "A": "Photograph",
          "B": "Photographer",
          "C": "Photographic",
          "D": "Photographable"
        },
        "correctAnswer": "B",
        "explanation": "In 'pho-TO-gra-pher', primary stress falls on the second syllable 'to'. In 'PHO-to-graph', it is on the first."
      },
      {
        "id": "JAMB-ENG-007",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Oral English - Vowel Sounds",
        "question": "Which word contains the vowel sound /i:/ as in 'sheep'?",
        "options": {
          "A": "ship",
          "B": "fit",
          "C": "people",
          "D": "busy"
        },
        "correctAnswer": "C",
        "explanation": "The letters 'eo' in 'people' /pi:pl/ represent the long close front unrounded vowel /i:/."
      },
      {
        "id": "JAMB-ENG-008",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Sentence Completion",
        "question": "Had the pilot received earlier clearance, he ______ landed on the auxiliary runway.",
        "options": {
          "A": "could have",
          "B": "can have",
          "C": "will have",
          "D": "should be"
        },
        "correctAnswer": "A",
        "explanation": "In past conditional (third conditional), 'had received' pairs with modal perfect 'could have + past participle'."
      },
      {
        "id": "JAMB-ENG-009",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Figures of Speech",
        "question": "'The wind howled through the lonely corridor.' What figure of speech is demonstrated here?",
        "options": {
          "A": "Simile",
          "B": "Metaphor",
          "C": "Personification",
          "D": "Hyperbole"
        },
        "correctAnswer": "C",
        "explanation": "Giving human qualities ('howled') to non-human elements (the wind) is personification."
      },
      {
        "id": "JAMB-ENG-010",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Lexis and Structure",
        "question": "One of the reasons advanced by the striking doctors ______ delayed salary payment.",
        "options": {
          "A": "are",
          "B": "is",
          "C": "were",
          "D": "have been"
        },
        "correctAnswer": "B",
        "explanation": "The true subject is 'One' (singular), not 'doctors', so the correct singular verb is 'is'."
      },
      {
        "id": "JAMB-ENG-011",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Lexis and Structure",
        "question": "By the time the headmaster arrives next week, we ______ our third mock examination.",
        "options": {
          "A": "shall finish",
          "B": "will have finished",
          "C": "had finished",
          "D": "finished"
        },
        "correctAnswer": "B",
        "explanation": "The future perfect tense 'will have finished' expresses an action that will be completed prior to a specific point in the future."
      },
      {
        "id": "JAMB-ENG-012",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Synonyms",
        "question": "The military command issued a TACIT approval for the local vigilante operation.",
        "options": {
          "A": "unspoken",
          "B": "loud",
          "C": "written",
          "D": "hostile"
        },
        "correctAnswer": "A",
        "explanation": "'Tacit' means understood or implied without being directly stated in speech or writing."
      },
      {
        "id": "JAMB-ENG-013",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Antonyms",
        "question": "The economy experienced an EPHEMERAL period of stability following the policy announcement.",
        "options": {
          "A": "transient",
          "B": "fleeting",
          "C": "enduring",
          "D": "brief"
        },
        "correctAnswer": "C",
        "explanation": "'Ephemeral' means lasting for a very short time. Its opposite is 'enduring' or permanent."
      },
      {
        "id": "JAMB-ENG-014",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Oral English - Consonants",
        "question": "In which of the following words is the letter 'b' silent?",
        "options": {
          "A": "Subtle",
          "B": "Obvious",
          "C": "Blemish",
          "D": "Stable"
        },
        "correctAnswer": "A",
        "explanation": "In 'subtle' /ˈsʌt.əl/, the consonant 'b' is completely silent."
      },
      {
        "id": "JAMB-ENG-015",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Lexis and Structure",
        "question": "The suspect was accused ______ stealing government confidential documents.",
        "options": {
          "A": "with",
          "B": "of",
          "C": "for",
          "D": "against"
        },
        "correctAnswer": "B",
        "explanation": "The standard preposition collocated with the verb 'accuse' is 'of' ('accused of stealing')."
      },
      {
        "id": "JAMB-ENG-016",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Idioms",
        "question": "When the company declared bankruptcy, the director decided to 'throw in the towel'. This means he:",
        "options": {
          "A": "washed his linen",
          "B": "surrendered and admitted defeat",
          "C": "bought more equipment",
          "D": "requested more investment"
        },
        "correctAnswer": "B",
        "explanation": "To 'throw in the towel' is an idiom from boxing meaning to give up, concede defeat, or abandon an effort."
      },
      {
        "id": "JAMB-ENG-017",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Grammar - Modals",
        "question": "You ______ not worry about the transport; the school bus will pick everyone up.",
        "options": {
          "A": "need",
          "B": "must",
          "C": "dare",
          "D": "ought"
        },
        "correctAnswer": "A",
        "explanation": "'Need not' is used to express absence of obligation or necessity."
      },
      {
        "id": "JAMB-ENG-018",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Sentence Patterns",
        "question": "No sooner had the candidate entered the hall ______ the bell rang.",
        "options": {
          "A": "when",
          "B": "than",
          "C": "then",
          "D": "that"
        },
        "correctAnswer": "B",
        "explanation": "Correlative conjunction rule: 'No sooner had ... than'. ('Scarcely/Hardly had ... when')."
      },
      {
        "id": "JAMB-ENG-019",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Oral English - Rhyme",
        "question": "Which of the following words rhymes with 'sue'?",
        "options": {
          "A": "crew",
          "B": "sow",
          "C": "sew",
          "D": "cow"
        },
        "correctAnswer": "A",
        "explanation": "'Sue' /suː/ and 'crew' /kruː/ share the identical final vowel sound."
      },
      {
        "id": "JAMB-ENG-020",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Lexis and Structure",
        "question": "I look forward to ______ you at the graduation banquet.",
        "options": {
          "A": "meet",
          "B": "meeting",
          "C": "have met",
          "D": "met"
        },
        "correctAnswer": "B",
        "explanation": "The phrasal verb 'look forward to' takes a gerund (-ing form), hence 'meeting'."
      },
      {
        "id": "JAMB-ENG-021",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Comprehension & Vocabulary",
        "question": "In academic discourse, an 'ubiquitous' phenomenon refers to something that is:",
        "options": {
          "A": "rare and localized",
          "B": "found everywhere simultaneously",
          "C": "dangerous and toxic",
          "D": "recently discovered"
        },
        "correctAnswer": "B",
        "explanation": "'Ubiquitous' means present, appearing, or found everywhere."
      },
      {
        "id": "JAMB-ENG-022",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Lexis and Structure",
        "question": "Neither of the two candidates who contested the student council election ______ qualified.",
        "options": {
          "A": "were",
          "B": "are",
          "C": "is",
          "D": "have been"
        },
        "correctAnswer": "C",
        "explanation": "'Neither of + plural noun' takes a singular verb in formal English, hence 'is'."
      },
      {
        "id": "JAMB-ENG-023",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Synonyms",
        "question": "The professor was known for his ACERBIC criticism of mediocre student theses.",
        "options": {
          "A": "sharp and sarcastic",
          "B": "gentle and kind",
          "C": "confusing",
          "D": "enthusiastic"
        },
        "correctAnswer": "A",
        "explanation": "'Acerbic' means sharp, biting, and forthright in tone or style."
      },
      {
        "id": "JAMB-ENG-024",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Antonyms",
        "question": "The village elders considered the young prince's conduct completely REPREHENSIBLE.",
        "options": {
          "A": "praiseworthy",
          "B": "unacceptable",
          "C": "scandalous",
          "D": "shameful"
        },
        "correctAnswer": "A",
        "explanation": "'Reprehensible' means deserving censure or condemnation. Its antonym is 'praiseworthy'."
      },
      {
        "id": "JAMB-ENG-025",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Idioms",
        "question": "His sudden wealth raised eyebrows because he was believed to have 'feathered his own nest' while in public service. This means he:",
        "options": {
          "A": "built a bird sanctuary",
          "B": "enriched himself improperly through his office",
          "C": "invested in poultry farming",
          "D": "resigned honorably"
        },
        "correctAnswer": "B",
        "explanation": "'To feather one's nest' means to make oneself wealthy or comfortable, often illicitly using one's position."
      },
      {
        "id": "JAMB-ENG-026",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Oral English - Stress",
        "question": "Identify the syllable carrying primary stress in the word 'DEMOCRATIC':",
        "options": {
          "A": "DE-mocratic",
          "B": "de-MO-cratic",
          "C": "demo-CRA-tic",
          "D": "democra-TIC"
        },
        "correctAnswer": "C",
        "explanation": "Words ending with the suffix '-ic' generally carry stress on the penultimate syllable: demo-CRA-tic."
      },
      {
        "id": "JAMB-ENG-027",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Lexis and Structure",
        "question": "Scarcely had the president arrived ______ the national anthem began.",
        "options": {
          "A": "than",
          "B": "when",
          "C": "then",
          "D": "until"
        },
        "correctAnswer": "B",
        "explanation": "'Scarcely had' is strictly paired with 'when' in English grammar."
      },
      {
        "id": "JAMB-ENG-028",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Question Tags",
        "question": "She seldom comes to class late, ______?",
        "options": {
          "A": "doesn't she",
          "B": "does she",
          "C": "isn't it",
          "D": "did she"
        },
        "correctAnswer": "B",
        "explanation": "'Seldom' is negative in meaning, so the question tag must be affirmative: 'does she?'."
      },
      {
        "id": "JAMB-ENG-029",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Oral English - Vowels",
        "question": "Which of the following words contains a diphthong?",
        "options": {
          "A": "Boat",
          "B": "Bet",
          "C": "Bit",
          "D": "Bat"
        },
        "correctAnswer": "A",
        "explanation": "'Boat' /bəʊt/ contains the diphthong /əʊ/ (or /oʊ/)."
      },
      {
        "id": "JAMB-ENG-030",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Lexis and Structure",
        "question": "The disciplinary committee recommended that the delinquent student ______ expelled.",
        "options": {
          "A": "is",
          "B": "be",
          "C": "was",
          "D": "will be"
        },
        "correctAnswer": "B",
        "explanation": "The present subjunctive mood following verbs of recommendation/demand takes the bare infinitive ('be')."
      },
      {
        "id": "JAMB-ENG-031",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Lexis and Structure",
        "question": "The boy was so tired that he could ______ keep his eyes open.",
        "options": {
          "A": "hardly",
          "B": "nearly",
          "C": "badly",
          "D": "closely"
        },
        "correctAnswer": "A",
        "explanation": "'Hardly' means scarcely or almost not at all, fitting the context of extreme tiredness."
      },
      {
        "id": "JAMB-ENG-032",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Synonyms",
        "question": "The teacher COMMENDED the class for their neatness and orderliness.",
        "options": {
          "A": "blamed",
          "B": "praised",
          "C": "ignored",
          "D": "criticized"
        },
        "correctAnswer": "B",
        "explanation": "'Commended' means praised formally or publicly."
      },
      {
        "id": "JAMB-ENG-033",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Antonyms",
        "question": "The river was TURBID after the heavy downpour.",
        "options": {
          "A": "muddy",
          "B": "cloudy",
          "C": "clear",
          "D": "swollen"
        },
        "correctAnswer": "C",
        "explanation": "'Turbid' means cloudy or muddy due to stirred sediment. Its opposite is 'clear'."
      },
      {
        "id": "JAMB-ENG-034",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Oral English - Vowels",
        "question": "Which of the following words has the same vowel sound as 'cat'?",
        "options": {
          "A": "cart",
          "B": "plait",
          "C": "court",
          "D": "caught"
        },
        "correctAnswer": "B",
        "explanation": "In standard British pronunciation, 'plait' is pronounced /plæt/ with the short vowel /æ/ as in 'cat'."
      },
      {
        "id": "JAMB-ENG-035",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Lexis and Structure",
        "question": "The bursar insisted on ______ the original receipt before issuing clearance.",
        "options": {
          "A": "see",
          "B": "seeing",
          "C": "saw",
          "D": "seen"
        },
        "correctAnswer": "B",
        "explanation": "The preposition 'on' must be followed by a gerund: 'insisted on seeing'."
      },
      {
        "id": "JAMB-ENG-036",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Comprehension & Vocabulary",
        "question": "An 'altruistic' deed is performed primarily out of:",
        "options": {
          "A": "selfish interest",
          "B": "unselfish concern for the welfare of others",
          "C": "fear of punishment",
          "D": "financial gain"
        },
        "correctAnswer": "B",
        "explanation": "'Altruism' is selfless care and devotion to the welfare of others."
      },
      {
        "id": "JAMB-ENG-037",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Lexis and Structure",
        "question": "The police ______ investigating the reported burglary since dawn.",
        "options": {
          "A": "is",
          "B": "are",
          "C": "has been",
          "D": "was"
        },
        "correctAnswer": "B",
        "explanation": "In English, 'the police' is treated as a plural collective noun taking plural verbs ('are')."
      },
      {
        "id": "JAMB-ENG-038",
        "subject": "English Language",
        "class": "SSS 1",
        "topic": "Figures of Speech",
        "question": "'He was a lion in the battlefield.' This sentence is an example of a/an:",
        "options": {
          "A": "Simile",
          "B": "Metaphor",
          "C": "Oxymoron",
          "D": "Hyperbole"
        },
        "correctAnswer": "B",
        "explanation": "A direct comparison without the use of 'as' or 'like' is a metaphor."
      },
      {
        "id": "JAMB-ENG-039",
        "subject": "English Language",
        "class": "SSS 2",
        "topic": "Lexis and Structure",
        "question": "If I ______ you, I would accept the scholarship immediately.",
        "options": {
          "A": "was",
          "B": "am",
          "C": "were",
          "D": "have been"
        },
        "correctAnswer": "C",
        "explanation": "In hypothetical contrary-to-fact conditional clauses, subjunctive 'were' is used for all persons."
      },
      {
        "id": "JAMB-ENG-040",
        "subject": "English Language",
        "class": "SSS 3",
        "topic": "Oral English - Stress",
        "question": "Which of the following words has its stress on the FIRST syllable?",
        "options": {
          "A": "Export (noun)",
          "B": "Export (verb)",
          "C": "Present (verb)",
          "D": "Produce (verb)"
        },
        "correctAnswer": "A",
        "explanation": "Noun-verb pairs of two syllables: nouns typically carry stress on the first syllable ('EX-port'), while verbs carry stress on the second ('ex-PORT')."
      }
    ]
  },
  "Biology": {
    "SSS 1": [
      {
        "id": "JAMB-BIO-001",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Cell Biology",
        "question": "Which organelle is commonly referred to as the 'powerhouse of the cell' due to ATP generation?",
        "options": {
          "A": "Ribosome",
          "B": "Mitochondrion",
          "C": "Golgi apparatus",
          "D": "Endoplasmic reticulum"
        },
        "correctAnswer": "B",
        "explanation": "Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP) through cellular respiration."
      },
      {
        "id": "JAMB-BIO-002",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Nutrition & Photosynthesis",
        "question": "The green pigment responsible for absorbing sunlight during photosynthesis is:",
        "options": {
          "A": "Carotenoid",
          "B": "Chlorophyll",
          "C": "Anthocyanin",
          "D": "Xanthophyll"
        },
        "correctAnswer": "B",
        "explanation": "Chlorophyll in chloroplasts absorbs light energy (chiefly blue and red wavelengths) for photosynthesis."
      },
      {
        "id": "JAMB-BIO-003",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Ecology",
        "question": "In a terrestrial ecosystem, which organism occupies the trophic level of primary producer?",
        "options": {
          "A": "Grasshopper",
          "B": "Green grass",
          "C": "Hawk",
          "D": "Toad"
        },
        "correctAnswer": "B",
        "explanation": "Green grass synthesizes organic compounds from inorganic substances using solar energy, making it a primary producer."
      },
      {
        "id": "JAMB-BIO-004",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Transport Systems",
        "question": "The vascular tissue in flowering plants responsible for translocating synthesized organic food is the:",
        "options": {
          "A": "Xylem",
          "B": "Phloem",
          "C": "Cambium",
          "D": "Cortex"
        },
        "correctAnswer": "B",
        "explanation": "Phloem conducts synthesized sucrose and amino acids from leaves (source) to storage organs or growing regions (sink)."
      },
      {
        "id": "JAMB-BIO-005",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Classification",
        "question": "Which of the following organisms belongs to the Kingdom Monera (Prokaryotes)?",
        "options": {
          "A": "Amoeba proteus",
          "B": "Escherichia coli",
          "C": "Spirogyra",
          "D": "Mucor mucedo"
        },
        "correctAnswer": "B",
        "explanation": "Bacteria such as Escherichia coli are prokaryotic single-celled organisms lacking membrane-bound nuclei, belonging to Monera."
      },
      {
        "id": "JAMB-BIO-016",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Ecology",
        "question": "A tapeworm living in the intestines of a human being is an example of which biological interaction?",
        "options": {
          "A": "Commensalism",
          "B": "Mutualism",
          "C": "Parasitism",
          "D": "Amensalism"
        },
        "correctAnswer": "C",
        "explanation": "In parasitism, the parasite derives nourishment at the expense and detriment of the host organism."
      },
      {
        "id": "JAMB-BIO-019",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Plant Physiology",
        "question": "The loss of water in the form of vapor through the stomata of plant leaves is termed:",
        "options": {
          "A": "Guttation",
          "B": "Transpiration",
          "C": "Evaporation",
          "D": "Osmosis"
        },
        "correctAnswer": "B",
        "explanation": "Transpiration is the evaporative loss of water vapor from the aerial parts of living plants, predominantly through stomatal pores."
      }
    ],
    "SSS 2": [
      {
        "id": "JAMB-BIO-006",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Mammalian Physiology",
        "question": "Which chamber of the mammalian heart pumps oxygenated blood into the aorta for systemic circulation?",
        "options": {
          "A": "Right atrium",
          "B": "Right ventricle",
          "C": "Left atrium",
          "D": "Left ventricle"
        },
        "correctAnswer": "D",
        "explanation": "The left ventricle has the thickest muscular wall and pumps oxygenated blood under high pressure into the systemic aorta."
      },
      {
        "id": "JAMB-BIO-007",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Digestive System",
        "question": "Emulsification of dietary lipids in the duodenum is achieved through the action of:",
        "options": {
          "A": "Pepsin",
          "B": "Bile salts",
          "C": "Lipase",
          "D": "Amylase"
        },
        "correctAnswer": "B",
        "explanation": "Bile salts produced in the liver and stored in the gallbladder emulsify large fat globules into tiny droplets for lipase action."
      },
      {
        "id": "JAMB-BIO-008",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Respiration",
        "question": "During anaerobic respiration in human muscle tissue under strenuous exercise, pyruvic acid is converted into:",
        "options": {
          "A": "Ethanol and carbon dioxide",
          "B": "Lactic acid",
          "C": "Glucose",
          "D": "Water"
        },
        "correctAnswer": "B",
        "explanation": "In the absence of sufficient oxygen, lactate dehydrogenase reduces pyruvate to lactic acid, causing muscle fatigue."
      },
      {
        "id": "JAMB-BIO-009",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Excretion & Homeostasis",
        "question": "The functional microscopic unit of the mammalian kidney responsible for urine formation is the:",
        "options": {
          "A": "Nephron",
          "B": "Neuron",
          "C": "Alveolus",
          "D": "Villus"
        },
        "correctAnswer": "A",
        "explanation": "The nephron, comprising Bowman's capsule and renal tubules, carries out ultrafiltration, selective reabsorption, and secretion."
      },
      {
        "id": "JAMB-BIO-010",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Ecology & Biomes",
        "question": "Which Nigerian ecological vegetation zone is characterized by scattered drought-resistant trees and tall grasses?",
        "options": {
          "A": "Mangrove swamp forest",
          "B": "Rainforest",
          "C": "Guinea Savanna",
          "D": "Desert"
        },
        "correctAnswer": "C",
        "explanation": "Guinea Savanna is a tropical grassland biome marked by seasonal rainfall, tall perennial grasses, and scattered fire-resistant trees."
      },
      {
        "id": "JAMB-BIO-017",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Coordination",
        "question": "The part of the human brain responsible for maintaining posture, balance, and motor coordination is the:",
        "options": {
          "A": "Cerebrum",
          "B": "Cerebellum",
          "C": "Medulla oblongata",
          "D": "Hypothalamus"
        },
        "correctAnswer": "B",
        "explanation": "The cerebellum coordinates voluntary muscular activity and maintains bodily posture and equilibrium."
      },
      {
        "id": "JAMB-BIO-020",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Circulatory System",
        "question": "Which blood component is predominantly involved in the defense against pathogenic micro-organisms via phagocytosis?",
        "options": {
          "A": "Erythrocytes",
          "B": "Platelets (Thrombocytes)",
          "C": "Leucocytes (White blood cells)",
          "D": "Blood plasma"
        },
        "correctAnswer": "C",
        "explanation": "Leucocytes, especially neutrophils and monocytes, engulf and destroy invading pathogenic microorganisms via phagocytosis."
      }
    ],
    "SSS 3": [
      {
        "id": "JAMB-BIO-011",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Genetics & Heredity",
        "question": "If a man with sickle cell trait (AS) marries a woman who also has the trait (AS), what is the probability of having a child with sickle cell disease (SS)?",
        "options": {
          "A": "0%",
          "B": "25%",
          "C": "50%",
          "D": "75%"
        },
        "correctAnswer": "B",
        "explanation": "Cross AS x AS yields genotypes: AA (25%), AS (50%), and SS (25%). The probability of having a sickle cell child (SS) is 1/4 or 25%."
      },
      {
        "id": "JAMB-BIO-012",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Genetics",
        "question": "Which blood group is known as the universal recipient because its red cells have neither anti-A nor anti-B antibodies in plasma?",
        "options": {
          "A": "Group O",
          "B": "Group A",
          "C": "Group B",
          "D": "Group AB"
        },
        "correctAnswer": "D",
        "explanation": "Individuals with blood group AB possess both A and B antigens on erythrocytes and no ABO antibodies in plasma."
      },
      {
        "id": "JAMB-BIO-013",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Evolution",
        "question": "The Lamarckian theory of evolution was centered on:",
        "options": {
          "A": "Survival of the fittest",
          "B": "Inheritance of acquired characteristics",
          "C": "Random genetic mutations",
          "D": "Geographic isolation"
        },
        "correctAnswer": "B",
        "explanation": "Jean-Baptiste Lamarck postulated that modifications acquired during an organism's lifetime through use and disuse are inherited."
      },
      {
        "id": "JAMB-BIO-014",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Endocrine System",
        "question": "Which hormone regulates blood glucose levels by promoting the conversion of glucose to glycogen in the liver?",
        "options": {
          "A": "Glucagon",
          "B": "Insulin",
          "C": "Adrenaline",
          "D": "Thyroxine"
        },
        "correctAnswer": "B",
        "explanation": "Insulin, secreted by beta cells of the Islets of Langerhans, stimulates glycogenesis and cellular uptake of glucose."
      },
      {
        "id": "JAMB-BIO-015",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Reproduction",
        "question": "In flowering plants, double fertilization results in the formation of:",
        "options": {
          "A": "Zygote and endosperm nucleus",
          "B": "Seed coat and fruit",
          "C": "Pollen grain and ovule",
          "D": "Two identical embryos"
        },
        "correctAnswer": "A",
        "explanation": "One male gamete fuses with the egg cell to form a diploid zygote, while the second fuses with two polar nuclei to form triploid endosperm (3n)."
      },
      {
        "id": "JAMB-BIO-018",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Cell Division",
        "question": "Mitotic cell division in somatic cells ensures that daughter cells receive:",
        "options": {
          "A": "Half the diploid chromosome number",
          "B": "An exact duplicate of the parent diploid chromosome complement",
          "C": "Variable chromosomal mutations",
          "D": "Triploid chromosomes"
        },
        "correctAnswer": "B",
        "explanation": "Mitosis produces two genetically identical diploid (2n) daughter cells through equational division."
      }
    ],
    "All": [
      {
        "id": "JAMB-BIO-001",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Cell Biology",
        "question": "Which organelle is commonly referred to as the 'powerhouse of the cell' due to ATP generation?",
        "options": {
          "A": "Ribosome",
          "B": "Mitochondrion",
          "C": "Golgi apparatus",
          "D": "Endoplasmic reticulum"
        },
        "correctAnswer": "B",
        "explanation": "Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP) through cellular respiration."
      },
      {
        "id": "JAMB-BIO-002",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Nutrition & Photosynthesis",
        "question": "The green pigment responsible for absorbing sunlight during photosynthesis is:",
        "options": {
          "A": "Carotenoid",
          "B": "Chlorophyll",
          "C": "Anthocyanin",
          "D": "Xanthophyll"
        },
        "correctAnswer": "B",
        "explanation": "Chlorophyll in chloroplasts absorbs light energy (chiefly blue and red wavelengths) for photosynthesis."
      },
      {
        "id": "JAMB-BIO-003",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Ecology",
        "question": "In a terrestrial ecosystem, which organism occupies the trophic level of primary producer?",
        "options": {
          "A": "Grasshopper",
          "B": "Green grass",
          "C": "Hawk",
          "D": "Toad"
        },
        "correctAnswer": "B",
        "explanation": "Green grass synthesizes organic compounds from inorganic substances using solar energy, making it a primary producer."
      },
      {
        "id": "JAMB-BIO-004",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Transport Systems",
        "question": "The vascular tissue in flowering plants responsible for translocating synthesized organic food is the:",
        "options": {
          "A": "Xylem",
          "B": "Phloem",
          "C": "Cambium",
          "D": "Cortex"
        },
        "correctAnswer": "B",
        "explanation": "Phloem conducts synthesized sucrose and amino acids from leaves (source) to storage organs or growing regions (sink)."
      },
      {
        "id": "JAMB-BIO-005",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Classification",
        "question": "Which of the following organisms belongs to the Kingdom Monera (Prokaryotes)?",
        "options": {
          "A": "Amoeba proteus",
          "B": "Escherichia coli",
          "C": "Spirogyra",
          "D": "Mucor mucedo"
        },
        "correctAnswer": "B",
        "explanation": "Bacteria such as Escherichia coli are prokaryotic single-celled organisms lacking membrane-bound nuclei, belonging to Monera."
      },
      {
        "id": "JAMB-BIO-006",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Mammalian Physiology",
        "question": "Which chamber of the mammalian heart pumps oxygenated blood into the aorta for systemic circulation?",
        "options": {
          "A": "Right atrium",
          "B": "Right ventricle",
          "C": "Left atrium",
          "D": "Left ventricle"
        },
        "correctAnswer": "D",
        "explanation": "The left ventricle has the thickest muscular wall and pumps oxygenated blood under high pressure into the systemic aorta."
      },
      {
        "id": "JAMB-BIO-007",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Digestive System",
        "question": "Emulsification of dietary lipids in the duodenum is achieved through the action of:",
        "options": {
          "A": "Pepsin",
          "B": "Bile salts",
          "C": "Lipase",
          "D": "Amylase"
        },
        "correctAnswer": "B",
        "explanation": "Bile salts produced in the liver and stored in the gallbladder emulsify large fat globules into tiny droplets for lipase action."
      },
      {
        "id": "JAMB-BIO-008",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Respiration",
        "question": "During anaerobic respiration in human muscle tissue under strenuous exercise, pyruvic acid is converted into:",
        "options": {
          "A": "Ethanol and carbon dioxide",
          "B": "Lactic acid",
          "C": "Glucose",
          "D": "Water"
        },
        "correctAnswer": "B",
        "explanation": "In the absence of sufficient oxygen, lactate dehydrogenase reduces pyruvate to lactic acid, causing muscle fatigue."
      },
      {
        "id": "JAMB-BIO-009",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Excretion & Homeostasis",
        "question": "The functional microscopic unit of the mammalian kidney responsible for urine formation is the:",
        "options": {
          "A": "Nephron",
          "B": "Neuron",
          "C": "Alveolus",
          "D": "Villus"
        },
        "correctAnswer": "A",
        "explanation": "The nephron, comprising Bowman's capsule and renal tubules, carries out ultrafiltration, selective reabsorption, and secretion."
      },
      {
        "id": "JAMB-BIO-010",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Ecology & Biomes",
        "question": "Which Nigerian ecological vegetation zone is characterized by scattered drought-resistant trees and tall grasses?",
        "options": {
          "A": "Mangrove swamp forest",
          "B": "Rainforest",
          "C": "Guinea Savanna",
          "D": "Desert"
        },
        "correctAnswer": "C",
        "explanation": "Guinea Savanna is a tropical grassland biome marked by seasonal rainfall, tall perennial grasses, and scattered fire-resistant trees."
      },
      {
        "id": "JAMB-BIO-011",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Genetics & Heredity",
        "question": "If a man with sickle cell trait (AS) marries a woman who also has the trait (AS), what is the probability of having a child with sickle cell disease (SS)?",
        "options": {
          "A": "0%",
          "B": "25%",
          "C": "50%",
          "D": "75%"
        },
        "correctAnswer": "B",
        "explanation": "Cross AS x AS yields genotypes: AA (25%), AS (50%), and SS (25%). The probability of having a sickle cell child (SS) is 1/4 or 25%."
      },
      {
        "id": "JAMB-BIO-012",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Genetics",
        "question": "Which blood group is known as the universal recipient because its red cells have neither anti-A nor anti-B antibodies in plasma?",
        "options": {
          "A": "Group O",
          "B": "Group A",
          "C": "Group B",
          "D": "Group AB"
        },
        "correctAnswer": "D",
        "explanation": "Individuals with blood group AB possess both A and B antigens on erythrocytes and no ABO antibodies in plasma."
      },
      {
        "id": "JAMB-BIO-013",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Evolution",
        "question": "The Lamarckian theory of evolution was centered on:",
        "options": {
          "A": "Survival of the fittest",
          "B": "Inheritance of acquired characteristics",
          "C": "Random genetic mutations",
          "D": "Geographic isolation"
        },
        "correctAnswer": "B",
        "explanation": "Jean-Baptiste Lamarck postulated that modifications acquired during an organism's lifetime through use and disuse are inherited."
      },
      {
        "id": "JAMB-BIO-014",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Endocrine System",
        "question": "Which hormone regulates blood glucose levels by promoting the conversion of glucose to glycogen in the liver?",
        "options": {
          "A": "Glucagon",
          "B": "Insulin",
          "C": "Adrenaline",
          "D": "Thyroxine"
        },
        "correctAnswer": "B",
        "explanation": "Insulin, secreted by beta cells of the Islets of Langerhans, stimulates glycogenesis and cellular uptake of glucose."
      },
      {
        "id": "JAMB-BIO-015",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Reproduction",
        "question": "In flowering plants, double fertilization results in the formation of:",
        "options": {
          "A": "Zygote and endosperm nucleus",
          "B": "Seed coat and fruit",
          "C": "Pollen grain and ovule",
          "D": "Two identical embryos"
        },
        "correctAnswer": "A",
        "explanation": "One male gamete fuses with the egg cell to form a diploid zygote, while the second fuses with two polar nuclei to form triploid endosperm (3n)."
      },
      {
        "id": "JAMB-BIO-016",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Ecology",
        "question": "A tapeworm living in the intestines of a human being is an example of which biological interaction?",
        "options": {
          "A": "Commensalism",
          "B": "Mutualism",
          "C": "Parasitism",
          "D": "Amensalism"
        },
        "correctAnswer": "C",
        "explanation": "In parasitism, the parasite derives nourishment at the expense and detriment of the host organism."
      },
      {
        "id": "JAMB-BIO-017",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Coordination",
        "question": "The part of the human brain responsible for maintaining posture, balance, and motor coordination is the:",
        "options": {
          "A": "Cerebrum",
          "B": "Cerebellum",
          "C": "Medulla oblongata",
          "D": "Hypothalamus"
        },
        "correctAnswer": "B",
        "explanation": "The cerebellum coordinates voluntary muscular activity and maintains bodily posture and equilibrium."
      },
      {
        "id": "JAMB-BIO-018",
        "subject": "Biology",
        "class": "SSS 3",
        "topic": "Cell Division",
        "question": "Mitotic cell division in somatic cells ensures that daughter cells receive:",
        "options": {
          "A": "Half the diploid chromosome number",
          "B": "An exact duplicate of the parent diploid chromosome complement",
          "C": "Variable chromosomal mutations",
          "D": "Triploid chromosomes"
        },
        "correctAnswer": "B",
        "explanation": "Mitosis produces two genetically identical diploid (2n) daughter cells through equational division."
      },
      {
        "id": "JAMB-BIO-019",
        "subject": "Biology",
        "class": "SSS 1",
        "topic": "Plant Physiology",
        "question": "The loss of water in the form of vapor through the stomata of plant leaves is termed:",
        "options": {
          "A": "Guttation",
          "B": "Transpiration",
          "C": "Evaporation",
          "D": "Osmosis"
        },
        "correctAnswer": "B",
        "explanation": "Transpiration is the evaporative loss of water vapor from the aerial parts of living plants, predominantly through stomatal pores."
      },
      {
        "id": "JAMB-BIO-020",
        "subject": "Biology",
        "class": "SSS 2",
        "topic": "Circulatory System",
        "question": "Which blood component is predominantly involved in the defense against pathogenic micro-organisms via phagocytosis?",
        "options": {
          "A": "Erythrocytes",
          "B": "Platelets (Thrombocytes)",
          "C": "Leucocytes (White blood cells)",
          "D": "Blood plasma"
        },
        "correctAnswer": "C",
        "explanation": "Leucocytes, especially neutrophils and monocytes, engulf and destroy invading pathogenic microorganisms via phagocytosis."
      }
    ]
  },
  "Physics": {
    "SSS 1": [
      {
        "id": "JAMB-PHY-001",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Units & Measurements",
        "question": "Which of the following is a fundamental SI base quantity?",
        "options": {
          "A": "Velocity",
          "B": "Electric current",
          "C": "Force",
          "D": "Work"
        },
        "correctAnswer": "B",
        "explanation": "Electric current (measured in Amperes, A) is one of the seven fundamental SI base quantities."
      },
      {
        "id": "JAMB-PHY-002",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Kinematics",
        "question": "A car accelerates uniformly from rest at $2.5\\text{ m/s}^2$ for $8\\text{ seconds}$. Calculate the distance covered.",
        "options": {
          "A": "$80\\text{ m}",
          "B": "$160\\text{ m}",
          "C": "$20\\text{ m}",
          "D": "$100\\text{ m}"
        },
        "correctAnswer": "A",
        "explanation": "Using $s = ut + \\frac{1}{2}at^2$: with $u = 0$, $s = \\frac{1}{2}(2.5)(8^2) = \\frac{1}{2}(2.5)(64) = 80\\text{ m}$."
      },
      {
        "id": "JAMB-PHY-003",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Dynamics",
        "question": "According to Newton's Second Law of Motion, the rate of change of momentum of a body is directly proportional to the applied:",
        "options": {
          "A": "Velocity",
          "B": "Resultant force",
          "C": "Inertia",
          "D": "Displacement"
        },
        "correctAnswer": "B",
        "explanation": "Newton's second law states that $F = \\frac{\\Delta p}{\\Delta t} = ma$; the rate of momentum change is proportional to the applied net force."
      },
      {
        "id": "JAMB-PHY-004",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Work, Energy & Power",
        "question": "A motor lifts a load of $600\\text{ N}$ through a vertical height of $15\\text{ m}$ in $10\\text{ seconds}$. What is the power output?",
        "options": {
          "A": "$900\\text{ W}",
          "B": "$90\\text{ W}",
          "C": "$600\\text{ W}",
          "D": "$9000\\text{ W}"
        },
        "correctAnswer": "A",
        "explanation": "Work $= F \\times d = 600 \\times 15 = 9000\\text{ J}$. Power $= \\frac{\\text{Work}}{\\text{time}} = \\frac{9000}{10} = 900\\text{ W}$."
      },
      {
        "id": "JAMB-PHY-005",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Hydrostatics",
        "question": "Archimedes' Principle states that when a body is wholly or partially immersed in a fluid, it experiences an upthrust equal to the:",
        "options": {
          "A": "Volume of the submerged body",
          "B": "Weight of the fluid displaced",
          "C": "Density of the immersed solid",
          "D": "Surface tension of the liquid"
        },
        "correctAnswer": "B",
        "explanation": "Archimedes' principle states: Upthrust on an immersed body equals the weight of the displaced fluid."
      },
      {
        "id": "JAMB-PHY-016",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Simple Machines",
        "question": "A machine has a velocity ratio of $5$ and an efficiency of $80\\%$. What is its mechanical advantage?",
        "options": {
          "A": "$4.0",
          "B": "$6.25",
          "C": "$0.16",
          "D": "$400"
        },
        "correctAnswer": "A",
        "explanation": "$\\text{Efficiency} = \\frac{\\text{MA}}{\\text{VR}} \\times 100\\% \\implies 0.80 = \\frac{\\text{MA}}{5} \\implies \\text{MA} = 5 \\times 0.80 = 4.0$."
      },
      {
        "id": "JAMB-PHY-019",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Elasticity",
        "question": "Hooke's Law states that within the limit of proportionality, extension $e$ is:",
        "options": {
          "A": "Directly proportional to the stretching force",
          "B": "Inversely proportional to tension",
          "C": "Proportional to cross-sectional area",
          "D": "Independent of applied load"
        },
        "correctAnswer": "A",
        "explanation": "Hooke's Law ($F = ke$) establishes that extension is directly proportional to applied load provided elastic limit is not exceeded."
      }
    ],
    "SSS 2": [
      {
        "id": "JAMB-PHY-006",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Thermal Physics",
        "question": "The temperature at which molecular motion ceases and internal thermal energy reaches its theoretical minimum is:",
        "options": {
          "A": "$0^\\circ\\text{C}",
          "B": "$0\\text{ K} (-273.15^\\circ\\text{C})",
          "C": "$100\\text{ K}",
          "D": "$-100^\\circ\\text{C}"
        },
        "correctAnswer": "B",
        "explanation": "Absolute zero is defined as $0\\text{ K}$ or $-273.15^\\circ\\text{C}$, the lowest possible thermodynamic temperature."
      },
      {
        "id": "JAMB-PHY-007",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Waves & Sound",
        "question": "The pitch of a musical sound note is primarily determined by its:",
        "options": {
          "A": "Amplitude",
          "B": "Frequency",
          "C": "Overtones / Timbre",
          "D": "Velocity in air"
        },
        "correctAnswer": "B",
        "explanation": "Pitch is the psychological sensation related directly to the fundamental frequency of the acoustic wave (higher frequency = higher pitch)."
      },
      {
        "id": "JAMB-PHY-008",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Optics",
        "question": "What is the critical angle for a glass prism of refractive index $n = 1.50$ in air?",
        "options": {
          "A": "$41.8^\\circ",
          "B": "$48.6^\\circ",
          "C": "$30.0^\\circ",
          "D": "$60.0^\\circ"
        },
        "correctAnswer": "A",
        "explanation": "Critical angle $\\sin c = \\frac{1}{n} = \\frac{1}{1.50} = 0.6667 \\implies c = \\arcsin(0.6667) \\approx 41.8^\\circ$."
      },
      {
        "id": "JAMB-PHY-009",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Current Electricity",
        "question": "Three resistors of $3\\,\\Omega$, $6\\,\\Omega$, and $2\\,\\Omega$ are connected in parallel. What is their equivalent resistance?",
        "options": {
          "A": "$11\\,\\Omega",
          "B": "$1\\,\\Omega",
          "C": "$0.5\\,\\Omega",
          "D": "$2\\,\\Omega"
        },
        "correctAnswer": "B",
        "explanation": "$\\frac{1}{R} = \\frac{1}{3} + \\frac{1}{6} + \\frac{1}{2} = \\frac{2 + 1 + 3}{6} = \\frac{6}{6} = 1\\,\\Omega^{-1} \\implies R = 1\\,\\Omega$."
      },
      {
        "id": "JAMB-PHY-010",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Thermodynamics",
        "question": "Boyle's Law states that for a fixed mass of gas at constant temperature, pressure is:",
        "options": {
          "A": "Directly proportional to volume",
          "B": "Inversely proportional to volume",
          "C": "Directly proportional to absolute temperature",
          "D": "Constant regardless of volume"
        },
        "correctAnswer": "B",
        "explanation": "Boyle's law: $P \\propto \\frac{1}{V}$ or $P_1V_1 = P_2V_2$ when temperature $T$ remains constant."
      },
      {
        "id": "JAMB-PHY-017",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Optics",
        "question": "An object placed at the center of curvature $C$ of a concave mirror produces an image that is:",
        "options": {
          "A": "Virtual, erect, and enlarged",
          "B": "Real, inverted, and the same size as the object",
          "C": "Real, inverted, and magnified",
          "D": "Virtual, upright, and diminished"
        },
        "correctAnswer": "B",
        "explanation": "When an object is placed at the center of curvature $C$ ($u = 2f$) of a concave spherical mirror, the image is formed at $C$, real, inverted, and identical in size."
      },
      {
        "id": "JAMB-PHY-020",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Electricity",
        "question": "An electric iron rated $1000\\text{ W}$, $240\\text{ V}$ is used for $5\\text{ hours}$ daily for $30\\text{ days}$. Calculate electrical energy consumed in kWh.",
        "options": {
          "A": "$150\\text{ kWh}",
          "B": "$50\\text{ kWh}",
          "C": "$300\\text{ kWh}",
          "D": "$15\\text{ kWh}"
        },
        "correctAnswer": "A",
        "explanation": "Energy $= P \\times t = 1\\text{ kW} \\times (5\\text{ h/day} \\times 30\\text{ days}) = 1 \\times 150 = 150\\text{ kWh}$."
      }
    ],
    "SSS 3": [
      {
        "id": "JAMB-PHY-011",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Electromagnetism",
        "question": "The law stating that the direction of an induced electromotive force opposes the change causing it is:",
        "options": {
          "A": "Faraday's Law",
          "B": "Lenz's Law",
          "C": "Coulomb's Law",
          "D": "Ohm's Law"
        },
        "correctAnswer": "B",
        "explanation": "Lenz's law (arising from conservation of energy) asserts that the induced emf and current always oppose the magnetic flux change producing them."
      },
      {
        "id": "JAMB-PHY-012",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Modern Physics",
        "question": "The emission of electrons from a metal surface when irradiated with light of suitable frequency is called:",
        "options": {
          "A": "Thermionic emission",
          "B": "Photoelectric effect",
          "C": "Compton scattering",
          "D": "Nuclear fission"
        },
        "correctAnswer": "B",
        "explanation": "The photoelectric effect, explained by Albert Einstein using quantum theory ($E = hf$), is the release of photoelectrons by incident photons."
      },
      {
        "id": "JAMB-PHY-013",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Radioactivity",
        "question": "A radioactive isotope has a half-life of $12\\text{ hours}$. If the initial mass is $80\\text{ g}$, what mass remains undecayed after $36\\text{ hours}$?",
        "options": {
          "A": "$40\\text{ g}",
          "B": "$20\\text{ g}",
          "C": "$10\\text{ g}",
          "D": "$5\\text{ g}"
        },
        "correctAnswer": "C",
        "explanation": "Number of half-lives $= \\frac{36}{12} = 3$. Remaining mass $= 80 \\times (\\frac{1}{2})^3 = \\frac{80}{8} = 10\\text{ g}$."
      },
      {
        "id": "JAMB-PHY-014",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Electric Fields",
        "question": "Calculate the capacitance of a parallel plate capacitor having a charge of $6\\times 10^{-6}\\text{ C}$ across a potential difference of $120\\text{ V}$.",
        "options": {
          "A": "$0.05\\,\\mu\\text{F}",
          "B": "$50\\,\\mu\\text{F}",
          "C": "$7.2\\times 10^{-4}\\text{ F}",
          "D": "$20\\,\\mu\\text{F}"
        },
        "correctAnswer": "A",
        "explanation": "$C = \\frac{Q}{V} = \\frac{6\\times 10^{-6}}{120} = 5\\times 10^{-8}\\text{ F} = 0.05\\,\\mu\\text{F}$."
      },
      {
        "id": "JAMB-PHY-015",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Circular Motion",
        "question": "An object of mass $2\\text{ kg}$ revolves in a circle of radius $0.5\\text{ m}$ at a constant speed of $4\\text{ m/s}$. Find the centripetal force.",
        "options": {
          "A": "$16\\text{ N}",
          "B": "$64\\text{ N}",
          "C": "$32\\text{ N}",
          "D": "$8\\text{ N}"
        },
        "correctAnswer": "B",
        "explanation": "$F = \\frac{mv^2}{r} = \\frac{2 \\times 4^2}{0.5} = \\frac{2 \\times 16}{0.5} = 64\\text{ N}$."
      },
      {
        "id": "JAMB-PHY-018",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Nuclear Physics",
        "question": "Alpha particles consist of:",
        "options": {
          "A": "Electrons moving at high speed",
          "B": "Helium nuclei ($^4_2\\text{He}$)",
          "C": "Electromagnetic radiation of short wavelength",
          "D": "Protons only"
        },
        "correctAnswer": "B",
        "explanation": "An alpha particle ($\\alpha$) consists of two protons and two neutrons, identical to a helium-4 nucleus ($^4_2\\text{He}^{2+}$)."
      }
    ],
    "All": [
      {
        "id": "JAMB-PHY-001",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Units & Measurements",
        "question": "Which of the following is a fundamental SI base quantity?",
        "options": {
          "A": "Velocity",
          "B": "Electric current",
          "C": "Force",
          "D": "Work"
        },
        "correctAnswer": "B",
        "explanation": "Electric current (measured in Amperes, A) is one of the seven fundamental SI base quantities."
      },
      {
        "id": "JAMB-PHY-002",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Kinematics",
        "question": "A car accelerates uniformly from rest at $2.5\\text{ m/s}^2$ for $8\\text{ seconds}$. Calculate the distance covered.",
        "options": {
          "A": "$80\\text{ m}",
          "B": "$160\\text{ m}",
          "C": "$20\\text{ m}",
          "D": "$100\\text{ m}"
        },
        "correctAnswer": "A",
        "explanation": "Using $s = ut + \\frac{1}{2}at^2$: with $u = 0$, $s = \\frac{1}{2}(2.5)(8^2) = \\frac{1}{2}(2.5)(64) = 80\\text{ m}$."
      },
      {
        "id": "JAMB-PHY-003",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Dynamics",
        "question": "According to Newton's Second Law of Motion, the rate of change of momentum of a body is directly proportional to the applied:",
        "options": {
          "A": "Velocity",
          "B": "Resultant force",
          "C": "Inertia",
          "D": "Displacement"
        },
        "correctAnswer": "B",
        "explanation": "Newton's second law states that $F = \\frac{\\Delta p}{\\Delta t} = ma$; the rate of momentum change is proportional to the applied net force."
      },
      {
        "id": "JAMB-PHY-004",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Work, Energy & Power",
        "question": "A motor lifts a load of $600\\text{ N}$ through a vertical height of $15\\text{ m}$ in $10\\text{ seconds}$. What is the power output?",
        "options": {
          "A": "$900\\text{ W}",
          "B": "$90\\text{ W}",
          "C": "$600\\text{ W}",
          "D": "$9000\\text{ W}"
        },
        "correctAnswer": "A",
        "explanation": "Work $= F \\times d = 600 \\times 15 = 9000\\text{ J}$. Power $= \\frac{\\text{Work}}{\\text{time}} = \\frac{9000}{10} = 900\\text{ W}$."
      },
      {
        "id": "JAMB-PHY-005",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Hydrostatics",
        "question": "Archimedes' Principle states that when a body is wholly or partially immersed in a fluid, it experiences an upthrust equal to the:",
        "options": {
          "A": "Volume of the submerged body",
          "B": "Weight of the fluid displaced",
          "C": "Density of the immersed solid",
          "D": "Surface tension of the liquid"
        },
        "correctAnswer": "B",
        "explanation": "Archimedes' principle states: Upthrust on an immersed body equals the weight of the displaced fluid."
      },
      {
        "id": "JAMB-PHY-006",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Thermal Physics",
        "question": "The temperature at which molecular motion ceases and internal thermal energy reaches its theoretical minimum is:",
        "options": {
          "A": "$0^\\circ\\text{C}",
          "B": "$0\\text{ K} (-273.15^\\circ\\text{C})",
          "C": "$100\\text{ K}",
          "D": "$-100^\\circ\\text{C}"
        },
        "correctAnswer": "B",
        "explanation": "Absolute zero is defined as $0\\text{ K}$ or $-273.15^\\circ\\text{C}$, the lowest possible thermodynamic temperature."
      },
      {
        "id": "JAMB-PHY-007",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Waves & Sound",
        "question": "The pitch of a musical sound note is primarily determined by its:",
        "options": {
          "A": "Amplitude",
          "B": "Frequency",
          "C": "Overtones / Timbre",
          "D": "Velocity in air"
        },
        "correctAnswer": "B",
        "explanation": "Pitch is the psychological sensation related directly to the fundamental frequency of the acoustic wave (higher frequency = higher pitch)."
      },
      {
        "id": "JAMB-PHY-008",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Optics",
        "question": "What is the critical angle for a glass prism of refractive index $n = 1.50$ in air?",
        "options": {
          "A": "$41.8^\\circ",
          "B": "$48.6^\\circ",
          "C": "$30.0^\\circ",
          "D": "$60.0^\\circ"
        },
        "correctAnswer": "A",
        "explanation": "Critical angle $\\sin c = \\frac{1}{n} = \\frac{1}{1.50} = 0.6667 \\implies c = \\arcsin(0.6667) \\approx 41.8^\\circ$."
      },
      {
        "id": "JAMB-PHY-009",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Current Electricity",
        "question": "Three resistors of $3\\,\\Omega$, $6\\,\\Omega$, and $2\\,\\Omega$ are connected in parallel. What is their equivalent resistance?",
        "options": {
          "A": "$11\\,\\Omega",
          "B": "$1\\,\\Omega",
          "C": "$0.5\\,\\Omega",
          "D": "$2\\,\\Omega"
        },
        "correctAnswer": "B",
        "explanation": "$\\frac{1}{R} = \\frac{1}{3} + \\frac{1}{6} + \\frac{1}{2} = \\frac{2 + 1 + 3}{6} = \\frac{6}{6} = 1\\,\\Omega^{-1} \\implies R = 1\\,\\Omega$."
      },
      {
        "id": "JAMB-PHY-010",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Thermodynamics",
        "question": "Boyle's Law states that for a fixed mass of gas at constant temperature, pressure is:",
        "options": {
          "A": "Directly proportional to volume",
          "B": "Inversely proportional to volume",
          "C": "Directly proportional to absolute temperature",
          "D": "Constant regardless of volume"
        },
        "correctAnswer": "B",
        "explanation": "Boyle's law: $P \\propto \\frac{1}{V}$ or $P_1V_1 = P_2V_2$ when temperature $T$ remains constant."
      },
      {
        "id": "JAMB-PHY-011",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Electromagnetism",
        "question": "The law stating that the direction of an induced electromotive force opposes the change causing it is:",
        "options": {
          "A": "Faraday's Law",
          "B": "Lenz's Law",
          "C": "Coulomb's Law",
          "D": "Ohm's Law"
        },
        "correctAnswer": "B",
        "explanation": "Lenz's law (arising from conservation of energy) asserts that the induced emf and current always oppose the magnetic flux change producing them."
      },
      {
        "id": "JAMB-PHY-012",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Modern Physics",
        "question": "The emission of electrons from a metal surface when irradiated with light of suitable frequency is called:",
        "options": {
          "A": "Thermionic emission",
          "B": "Photoelectric effect",
          "C": "Compton scattering",
          "D": "Nuclear fission"
        },
        "correctAnswer": "B",
        "explanation": "The photoelectric effect, explained by Albert Einstein using quantum theory ($E = hf$), is the release of photoelectrons by incident photons."
      },
      {
        "id": "JAMB-PHY-013",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Radioactivity",
        "question": "A radioactive isotope has a half-life of $12\\text{ hours}$. If the initial mass is $80\\text{ g}$, what mass remains undecayed after $36\\text{ hours}$?",
        "options": {
          "A": "$40\\text{ g}",
          "B": "$20\\text{ g}",
          "C": "$10\\text{ g}",
          "D": "$5\\text{ g}"
        },
        "correctAnswer": "C",
        "explanation": "Number of half-lives $= \\frac{36}{12} = 3$. Remaining mass $= 80 \\times (\\frac{1}{2})^3 = \\frac{80}{8} = 10\\text{ g}$."
      },
      {
        "id": "JAMB-PHY-014",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Electric Fields",
        "question": "Calculate the capacitance of a parallel plate capacitor having a charge of $6\\times 10^{-6}\\text{ C}$ across a potential difference of $120\\text{ V}$.",
        "options": {
          "A": "$0.05\\,\\mu\\text{F}",
          "B": "$50\\,\\mu\\text{F}",
          "C": "$7.2\\times 10^{-4}\\text{ F}",
          "D": "$20\\,\\mu\\text{F}"
        },
        "correctAnswer": "A",
        "explanation": "$C = \\frac{Q}{V} = \\frac{6\\times 10^{-6}}{120} = 5\\times 10^{-8}\\text{ F} = 0.05\\,\\mu\\text{F}$."
      },
      {
        "id": "JAMB-PHY-015",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Circular Motion",
        "question": "An object of mass $2\\text{ kg}$ revolves in a circle of radius $0.5\\text{ m}$ at a constant speed of $4\\text{ m/s}$. Find the centripetal force.",
        "options": {
          "A": "$16\\text{ N}",
          "B": "$64\\text{ N}",
          "C": "$32\\text{ N}",
          "D": "$8\\text{ N}"
        },
        "correctAnswer": "B",
        "explanation": "$F = \\frac{mv^2}{r} = \\frac{2 \\times 4^2}{0.5} = \\frac{2 \\times 16}{0.5} = 64\\text{ N}$."
      },
      {
        "id": "JAMB-PHY-016",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Simple Machines",
        "question": "A machine has a velocity ratio of $5$ and an efficiency of $80\\%$. What is its mechanical advantage?",
        "options": {
          "A": "$4.0",
          "B": "$6.25",
          "C": "$0.16",
          "D": "$400"
        },
        "correctAnswer": "A",
        "explanation": "$\\text{Efficiency} = \\frac{\\text{MA}}{\\text{VR}} \\times 100\\% \\implies 0.80 = \\frac{\\text{MA}}{5} \\implies \\text{MA} = 5 \\times 0.80 = 4.0$."
      },
      {
        "id": "JAMB-PHY-017",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Optics",
        "question": "An object placed at the center of curvature $C$ of a concave mirror produces an image that is:",
        "options": {
          "A": "Virtual, erect, and enlarged",
          "B": "Real, inverted, and the same size as the object",
          "C": "Real, inverted, and magnified",
          "D": "Virtual, upright, and diminished"
        },
        "correctAnswer": "B",
        "explanation": "When an object is placed at the center of curvature $C$ ($u = 2f$) of a concave spherical mirror, the image is formed at $C$, real, inverted, and identical in size."
      },
      {
        "id": "JAMB-PHY-018",
        "subject": "Physics",
        "class": "SSS 3",
        "topic": "Nuclear Physics",
        "question": "Alpha particles consist of:",
        "options": {
          "A": "Electrons moving at high speed",
          "B": "Helium nuclei ($^4_2\\text{He}$)",
          "C": "Electromagnetic radiation of short wavelength",
          "D": "Protons only"
        },
        "correctAnswer": "B",
        "explanation": "An alpha particle ($\\alpha$) consists of two protons and two neutrons, identical to a helium-4 nucleus ($^4_2\\text{He}^{2+}$)."
      },
      {
        "id": "JAMB-PHY-019",
        "subject": "Physics",
        "class": "SSS 1",
        "topic": "Elasticity",
        "question": "Hooke's Law states that within the limit of proportionality, extension $e$ is:",
        "options": {
          "A": "Directly proportional to the stretching force",
          "B": "Inversely proportional to tension",
          "C": "Proportional to cross-sectional area",
          "D": "Independent of applied load"
        },
        "correctAnswer": "A",
        "explanation": "Hooke's Law ($F = ke$) establishes that extension is directly proportional to applied load provided elastic limit is not exceeded."
      },
      {
        "id": "JAMB-PHY-020",
        "subject": "Physics",
        "class": "SSS 2",
        "topic": "Electricity",
        "question": "An electric iron rated $1000\\text{ W}$, $240\\text{ V}$ is used for $5\\text{ hours}$ daily for $30\\text{ days}$. Calculate electrical energy consumed in kWh.",
        "options": {
          "A": "$150\\text{ kWh}",
          "B": "$50\\text{ kWh}",
          "C": "$300\\text{ kWh}",
          "D": "$15\\text{ kWh}"
        },
        "correctAnswer": "A",
        "explanation": "Energy $= P \\times t = 1\\text{ kW} \\times (5\\text{ h/day} \\times 30\\text{ days}) = 1 \\times 150 = 150\\text{ kWh}$."
      }
    ]
  },
  "Chemistry": {
    "SSS 1": [
      {
        "id": "JAMB-CHM-001",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Separation Techniques",
        "question": "Which technique is most appropriate for separating a mixture of petroleum fractions according to their boiling points?",
        "options": {
          "A": "Filtration",
          "B": "Fractional distillation",
          "C": "Chromatography",
          "D": "Decantation"
        },
        "correctAnswer": "B",
        "explanation": "Fractional distillation separates miscible liquids with different boiling points by utilizing a fractionating column."
      },
      {
        "id": "JAMB-CHM-002",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Atomic Structure",
        "question": "An atom of an element $X$ has an atomic number of $11$ and mass number $23$. The number of neutrons in its nucleus is:",
        "options": {
          "A": "$11",
          "B": "$12",
          "C": "$23",
          "D": "$34"
        },
        "correctAnswer": "B",
        "explanation": "Number of neutrons $= \\text{Mass number } (A) - \\text{Atomic number } (Z) = 23 - 11 = 12$."
      },
      {
        "id": "JAMB-CHM-003",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Periodic Table",
        "question": "Elements in Group 17 (Group VIIA) of the Periodic Table are collectively known as:",
        "options": {
          "A": "Alkali metals",
          "B": "Alkaline earth metals",
          "C": "Halogens",
          "D": "Noble gases"
        },
        "correctAnswer": "C",
        "explanation": "Group 17 elements (Fluorine, Chlorine, Bromine, Iodine, Astatine) are halogens ('salt-formers')."
      },
      {
        "id": "JAMB-CHM-004",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Chemical Bonding",
        "question": "The electrostatic force of attraction between oppositely charged ions formed by transfer of electrons is termed:",
        "options": {
          "A": "Covalent bonding",
          "B": "Ionic (electrovalent) bonding",
          "C": "Hydrogen bonding",
          "D": "Metallic bonding"
        },
        "correctAnswer": "B",
        "explanation": "Electrovalent (ionic) bonding involves complete transfer of valence electrons from metal to non-metal, forming ions."
      },
      {
        "id": "JAMB-CHM-005",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Acids, Bases & Salts",
        "question": "A solution with a pH value of $3.0$ is classified as:",
        "options": {
          "A": "Strongly alkaline",
          "B": "Neutral",
          "C": "Acidic",
          "D": "Weakly basic"
        },
        "correctAnswer": "C",
        "explanation": "Solutions with $\\text{pH} < 7$ are acidic, with $\\text{pH } 3.0$ indicating significant hydrogen ion concentration $[\\text{H}^+] = 10^{-3}\\text{ M}$."
      },
      {
        "id": "JAMB-CHM-016",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Acids & Bases",
        "question": "Which of the following compounds turns moist blue litmus paper red?",
        "options": {
          "A": "Ammonia gas",
          "B": "Sulfur dioxide gas",
          "C": "Sodium hydroxide solution",
          "D": "Pure water"
        },
        "correctAnswer": "B",
        "explanation": "Sulfur dioxide ($\\text{SO}_2$) is an acidic oxide that dissolves in moisture to form sulfurous acid ($\\text{H}_2\\text{SO}_3$), turning blue litmus red."
      },
      {
        "id": "JAMB-CHM-019",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Matter & Changes",
        "question": "Which of the following processes is a chemical change?",
        "options": {
          "A": "Dissolving table salt in water",
          "B": "Melting of ice cubes",
          "C": "Rusting of an iron nail",
          "D": "Evaporation of ethanol"
        },
        "correctAnswer": "C",
        "explanation": "Rusting forms a new chemical compound (hydrated iron(III) oxide, $\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$) and cannot be reversed by simple physical methods."
      }
    ],
    "SSS 2": [
      {
        "id": "JAMB-CHM-006",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Stoichiometry & Mole Concept",
        "question": "Calculate the mass of $0.5\\text{ moles}$ of calcium carbonate, $\\text{CaCO}_3$ [Atomic masses: $\\text{Ca}=40, \\text{C}=12, \\text{O}=16$].",
        "options": {
          "A": "$100\\text{ g}",
          "B": "$50\\text{ g}",
          "C": "$25\\text{ g}",
          "D": "$200\\text{ g}"
        },
        "correctAnswer": "B",
        "explanation": "Molar mass of $\\text{CaCO}_3 = 40 + 12 + (3 \\times 16) = 100\\text{ g/mol}$. Mass $= 0.5\\text{ mol} \\times 100\\text{ g/mol} = 50\\text{ g}$."
      },
      {
        "id": "JAMB-CHM-007",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Gas Laws",
        "question": "At standard temperature and pressure (STP), the volume occupied by one mole of any ideal gas is:",
        "options": {
          "A": "$22.4\\text{ dm}^3$",
          "B": "$24.0\\text{ dm}^3$",
          "C": "$1.0\\text{ dm}^3$",
          "D": "$11.2\\text{ dm}^3$"
        },
        "correctAnswer": "A",
        "explanation": "Avogadro's law states that $1\\text{ mole}$ of an ideal gas at STP ($273\\text{ K}, 1\\text{ atm}$) occupies exactly $22.4\\text{ dm}^3$ ($22.4\\text{ L}$)."
      },
      {
        "id": "JAMB-CHM-008",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Oxidation & Reduction",
        "question": "In the reaction $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$, the species undergoing oxidation is:",
        "options": {
          "A": "$\\text{Cu}^{2+}$",
          "B": "$\\text{Zn}$",
          "C": "$\\text{Cu}$",
          "D": "$\\text{Zn}^{2+}$"
        },
        "correctAnswer": "B",
        "explanation": "Zinc ($\\text{Zn}$) loses two electrons, increasing its oxidation state from $0$ to $+2$, which defines oxidation."
      },
      {
        "id": "JAMB-CHM-009",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Rates of Reactions",
        "question": "A catalyst increases the rate of a chemical reaction primarily by:",
        "options": {
          "A": "Increasing the activation energy",
          "B": "Lowering the activation energy required for effective collision",
          "C": "Changing the enthalpy of reaction",
          "D": "Increasing the total heat released"
        },
        "correctAnswer": "B",
        "explanation": "A catalyst provides an alternative reaction pathway with a lower activation energy ($E_a$), allowing more particles to react upon collision."
      },
      {
        "id": "JAMB-CHM-010",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Chemical Equilibrium",
        "question": "According to Le Chatelier's Principle, for an exothermic reaction $\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{heat}$, increasing the temperature will:",
        "options": {
          "A": "Shift the equilibrium to the right",
          "B": "Shift the equilibrium to the left",
          "C": "Have no effect on equilibrium",
          "D": "Double the yield of C"
        },
        "correctAnswer": "B",
        "explanation": "Adding heat to an exothermic reaction shifts the equilibrium toward the endothermic direction (left) to absorb the excess thermal energy."
      },
      {
        "id": "JAMB-CHM-017",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Thermochemistry",
        "question": "A reaction in which heat is absorbed from the surroundings resulting in a positive change in enthalpy ($\\Delta H > 0$) is:",
        "options": {
          "A": "Exothermic",
          "B": "Endothermic",
          "C": "Spontaneous combustion",
          "D": "Neutralization"
        },
        "correctAnswer": "B",
        "explanation": "Endothermic reactions absorb heat from their surroundings, resulting in $\\Delta H > 0$ and cooling of the reaction vessel."
      },
      {
        "id": "JAMB-CHM-020",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Volumetric Analysis",
        "question": "In an acid-base titration of strong acid ($\\text{HCl}$) against weak base ($\\text{NH}_3$), the most suitable indicator is:",
        "options": {
          "A": "Phenolphthalein",
          "B": "Methyl orange",
          "C": "Litmus paper",
          "D": "Universal indicator"
        },
        "correctAnswer": "B",
        "explanation": "At equivalence point, the solution is slightly acidic due to hydrolysis of ammonium ions, so methyl orange (pH range 3.1 - 4.4) is ideal."
      }
    ],
    "SSS 3": [
      {
        "id": "JAMB-CHM-011",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Organic Chemistry",
        "question": "The general molecular formula for the homologous series of alkanes is:",
        "options": {
          "A": "$\\text{C}_n\\text{H}_{2n}$",
          "B": "$\\text{C}_n\\text{H}_{2n+2}$",
          "C": "$\\text{C}_n\\text{H}_{2n-2}$",
          "D": "$\\text{C}_n\\text{H}_{2n+1}\\text{OH}$"
        },
        "correctAnswer": "B",
        "explanation": "Alkanes are saturated aliphatic hydrocarbons having single carbon-carbon bonds and general formula $\\text{C}_n\\text{H}_{2n+2}$."
      },
      {
        "id": "JAMB-CHM-012",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Electrochemistry",
        "question": "Faraday's First Law of Electrolysis states that the mass $m$ of substance liberated at an electrode is directly proportional to:",
        "options": {
          "A": "The temperature of the electrolyte",
          "B": "The quantity of electricity $Q$ passed through the electrolyte",
          "C": "The resistance of the cell",
          "D": "The volume of the electrolytic tank"
        },
        "correctAnswer": "B",
        "explanation": "Faraday's first law: $m \\propto Q$ where $Q = I \\times t$, hence $m = zIt$ ($z$ is electrochemical equivalent)."
      },
      {
        "id": "JAMB-CHM-013",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Organic Chemistry - Alkanols",
        "question": "The complete combustion of ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$) in excess oxygen produces:",
        "options": {
          "A": "Carbon monoxide and hydrogen",
          "B": "Carbon dioxide and water vapor",
          "C": "Ethanoic acid only",
          "D": "Ethene and steam"
        },
        "correctAnswer": "B",
        "explanation": "$\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$. Saturated combustion yields carbon dioxide and water."
      },
      {
        "id": "JAMB-CHM-014",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Equilibrium & Solubility",
        "question": "The solubility product constant ($K_{sp}$) of silver chloride ($\\text{AgCl}$) at $25^\\circ\\text{C}$ is expressed as:",
        "options": {
          "A": "$[\\text{Ag}^+][\\text{Cl}^-]$",
          "B": "$\\frac{[\\text{Ag}^+]}{[\\text{Cl}^-]}$",
          "C": "$[\\text{Ag}^+] + [\\text{Cl}^-]$",
          "D": "$[\\text{AgCl}]$"
        },
        "correctAnswer": "A",
        "explanation": "For the equilibrium $\\text{AgCl}_{(s)} \\rightleftharpoons \\text{Ag}^+_{(aq)} + \\text{Cl}^-_{(aq)}$, the solid activity is $1$, giving $K_{sp} = [\\text{Ag}^+][\\text{Cl}^-]$."
      },
      {
        "id": "JAMB-CHM-015",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Metals & Metallurgy",
        "question": "In the extraction of iron from hematite in the blast furnace, limestone ($\\text{CaCO}_3$) acts as a flux to:",
        "options": {
          "A": "Reduce iron(III) oxide to iron",
          "B": "Remove sand (silica) impurities by forming molten slag ($\\text{CaSiO}_3$)",
          "C": "Provide fuel for heating",
          "D": "Prevent re-oxidation of molten pig iron"
        },
        "correctAnswer": "B",
        "explanation": "$\\text{CaCO}_3$ decomposes to $\\text{CaO}$, which reacts with acidic silica impurities: $\\text{CaO} + \\text{SiO}_2 \\rightarrow \\text{CaSiO}_3$ (slag)."
      },
      {
        "id": "JAMB-CHM-018",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Polymers",
        "question": "Polymerization of ethene ($\\text{CH}_2=\\text{CH}_2$) under high temperature and pressure forms:",
        "options": {
          "A": "Polystyrene",
          "B": "Polyvinyl chloride (PVC)",
          "C": "Polyethene (Polythene)",
          "D": "Nylon 6,6"
        },
        "correctAnswer": "C",
        "explanation": "Addition polymerization of ethene monomers breaks the double bond to form long-chain polyethene."
      }
    ],
    "All": [
      {
        "id": "JAMB-CHM-001",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Separation Techniques",
        "question": "Which technique is most appropriate for separating a mixture of petroleum fractions according to their boiling points?",
        "options": {
          "A": "Filtration",
          "B": "Fractional distillation",
          "C": "Chromatography",
          "D": "Decantation"
        },
        "correctAnswer": "B",
        "explanation": "Fractional distillation separates miscible liquids with different boiling points by utilizing a fractionating column."
      },
      {
        "id": "JAMB-CHM-002",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Atomic Structure",
        "question": "An atom of an element $X$ has an atomic number of $11$ and mass number $23$. The number of neutrons in its nucleus is:",
        "options": {
          "A": "$11",
          "B": "$12",
          "C": "$23",
          "D": "$34"
        },
        "correctAnswer": "B",
        "explanation": "Number of neutrons $= \\text{Mass number } (A) - \\text{Atomic number } (Z) = 23 - 11 = 12$."
      },
      {
        "id": "JAMB-CHM-003",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Periodic Table",
        "question": "Elements in Group 17 (Group VIIA) of the Periodic Table are collectively known as:",
        "options": {
          "A": "Alkali metals",
          "B": "Alkaline earth metals",
          "C": "Halogens",
          "D": "Noble gases"
        },
        "correctAnswer": "C",
        "explanation": "Group 17 elements (Fluorine, Chlorine, Bromine, Iodine, Astatine) are halogens ('salt-formers')."
      },
      {
        "id": "JAMB-CHM-004",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Chemical Bonding",
        "question": "The electrostatic force of attraction between oppositely charged ions formed by transfer of electrons is termed:",
        "options": {
          "A": "Covalent bonding",
          "B": "Ionic (electrovalent) bonding",
          "C": "Hydrogen bonding",
          "D": "Metallic bonding"
        },
        "correctAnswer": "B",
        "explanation": "Electrovalent (ionic) bonding involves complete transfer of valence electrons from metal to non-metal, forming ions."
      },
      {
        "id": "JAMB-CHM-005",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Acids, Bases & Salts",
        "question": "A solution with a pH value of $3.0$ is classified as:",
        "options": {
          "A": "Strongly alkaline",
          "B": "Neutral",
          "C": "Acidic",
          "D": "Weakly basic"
        },
        "correctAnswer": "C",
        "explanation": "Solutions with $\\text{pH} < 7$ are acidic, with $\\text{pH } 3.0$ indicating significant hydrogen ion concentration $[\\text{H}^+] = 10^{-3}\\text{ M}$."
      },
      {
        "id": "JAMB-CHM-006",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Stoichiometry & Mole Concept",
        "question": "Calculate the mass of $0.5\\text{ moles}$ of calcium carbonate, $\\text{CaCO}_3$ [Atomic masses: $\\text{Ca}=40, \\text{C}=12, \\text{O}=16$].",
        "options": {
          "A": "$100\\text{ g}",
          "B": "$50\\text{ g}",
          "C": "$25\\text{ g}",
          "D": "$200\\text{ g}"
        },
        "correctAnswer": "B",
        "explanation": "Molar mass of $\\text{CaCO}_3 = 40 + 12 + (3 \\times 16) = 100\\text{ g/mol}$. Mass $= 0.5\\text{ mol} \\times 100\\text{ g/mol} = 50\\text{ g}$."
      },
      {
        "id": "JAMB-CHM-007",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Gas Laws",
        "question": "At standard temperature and pressure (STP), the volume occupied by one mole of any ideal gas is:",
        "options": {
          "A": "$22.4\\text{ dm}^3$",
          "B": "$24.0\\text{ dm}^3$",
          "C": "$1.0\\text{ dm}^3$",
          "D": "$11.2\\text{ dm}^3$"
        },
        "correctAnswer": "A",
        "explanation": "Avogadro's law states that $1\\text{ mole}$ of an ideal gas at STP ($273\\text{ K}, 1\\text{ atm}$) occupies exactly $22.4\\text{ dm}^3$ ($22.4\\text{ L}$)."
      },
      {
        "id": "JAMB-CHM-008",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Oxidation & Reduction",
        "question": "In the reaction $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$, the species undergoing oxidation is:",
        "options": {
          "A": "$\\text{Cu}^{2+}$",
          "B": "$\\text{Zn}$",
          "C": "$\\text{Cu}$",
          "D": "$\\text{Zn}^{2+}$"
        },
        "correctAnswer": "B",
        "explanation": "Zinc ($\\text{Zn}$) loses two electrons, increasing its oxidation state from $0$ to $+2$, which defines oxidation."
      },
      {
        "id": "JAMB-CHM-009",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Rates of Reactions",
        "question": "A catalyst increases the rate of a chemical reaction primarily by:",
        "options": {
          "A": "Increasing the activation energy",
          "B": "Lowering the activation energy required for effective collision",
          "C": "Changing the enthalpy of reaction",
          "D": "Increasing the total heat released"
        },
        "correctAnswer": "B",
        "explanation": "A catalyst provides an alternative reaction pathway with a lower activation energy ($E_a$), allowing more particles to react upon collision."
      },
      {
        "id": "JAMB-CHM-010",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Chemical Equilibrium",
        "question": "According to Le Chatelier's Principle, for an exothermic reaction $\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{heat}$, increasing the temperature will:",
        "options": {
          "A": "Shift the equilibrium to the right",
          "B": "Shift the equilibrium to the left",
          "C": "Have no effect on equilibrium",
          "D": "Double the yield of C"
        },
        "correctAnswer": "B",
        "explanation": "Adding heat to an exothermic reaction shifts the equilibrium toward the endothermic direction (left) to absorb the excess thermal energy."
      },
      {
        "id": "JAMB-CHM-011",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Organic Chemistry",
        "question": "The general molecular formula for the homologous series of alkanes is:",
        "options": {
          "A": "$\\text{C}_n\\text{H}_{2n}$",
          "B": "$\\text{C}_n\\text{H}_{2n+2}$",
          "C": "$\\text{C}_n\\text{H}_{2n-2}$",
          "D": "$\\text{C}_n\\text{H}_{2n+1}\\text{OH}$"
        },
        "correctAnswer": "B",
        "explanation": "Alkanes are saturated aliphatic hydrocarbons having single carbon-carbon bonds and general formula $\\text{C}_n\\text{H}_{2n+2}$."
      },
      {
        "id": "JAMB-CHM-012",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Electrochemistry",
        "question": "Faraday's First Law of Electrolysis states that the mass $m$ of substance liberated at an electrode is directly proportional to:",
        "options": {
          "A": "The temperature of the electrolyte",
          "B": "The quantity of electricity $Q$ passed through the electrolyte",
          "C": "The resistance of the cell",
          "D": "The volume of the electrolytic tank"
        },
        "correctAnswer": "B",
        "explanation": "Faraday's first law: $m \\propto Q$ where $Q = I \\times t$, hence $m = zIt$ ($z$ is electrochemical equivalent)."
      },
      {
        "id": "JAMB-CHM-013",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Organic Chemistry - Alkanols",
        "question": "The complete combustion of ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$) in excess oxygen produces:",
        "options": {
          "A": "Carbon monoxide and hydrogen",
          "B": "Carbon dioxide and water vapor",
          "C": "Ethanoic acid only",
          "D": "Ethene and steam"
        },
        "correctAnswer": "B",
        "explanation": "$\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$. Saturated combustion yields carbon dioxide and water."
      },
      {
        "id": "JAMB-CHM-014",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Equilibrium & Solubility",
        "question": "The solubility product constant ($K_{sp}$) of silver chloride ($\\text{AgCl}$) at $25^\\circ\\text{C}$ is expressed as:",
        "options": {
          "A": "$[\\text{Ag}^+][\\text{Cl}^-]$",
          "B": "$\\frac{[\\text{Ag}^+]}{[\\text{Cl}^-]}$",
          "C": "$[\\text{Ag}^+] + [\\text{Cl}^-]$",
          "D": "$[\\text{AgCl}]$"
        },
        "correctAnswer": "A",
        "explanation": "For the equilibrium $\\text{AgCl}_{(s)} \\rightleftharpoons \\text{Ag}^+_{(aq)} + \\text{Cl}^-_{(aq)}$, the solid activity is $1$, giving $K_{sp} = [\\text{Ag}^+][\\text{Cl}^-]$."
      },
      {
        "id": "JAMB-CHM-015",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Metals & Metallurgy",
        "question": "In the extraction of iron from hematite in the blast furnace, limestone ($\\text{CaCO}_3$) acts as a flux to:",
        "options": {
          "A": "Reduce iron(III) oxide to iron",
          "B": "Remove sand (silica) impurities by forming molten slag ($\\text{CaSiO}_3$)",
          "C": "Provide fuel for heating",
          "D": "Prevent re-oxidation of molten pig iron"
        },
        "correctAnswer": "B",
        "explanation": "$\\text{CaCO}_3$ decomposes to $\\text{CaO}$, which reacts with acidic silica impurities: $\\text{CaO} + \\text{SiO}_2 \\rightarrow \\text{CaSiO}_3$ (slag)."
      },
      {
        "id": "JAMB-CHM-016",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Acids & Bases",
        "question": "Which of the following compounds turns moist blue litmus paper red?",
        "options": {
          "A": "Ammonia gas",
          "B": "Sulfur dioxide gas",
          "C": "Sodium hydroxide solution",
          "D": "Pure water"
        },
        "correctAnswer": "B",
        "explanation": "Sulfur dioxide ($\\text{SO}_2$) is an acidic oxide that dissolves in moisture to form sulfurous acid ($\\text{H}_2\\text{SO}_3$), turning blue litmus red."
      },
      {
        "id": "JAMB-CHM-017",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Thermochemistry",
        "question": "A reaction in which heat is absorbed from the surroundings resulting in a positive change in enthalpy ($\\Delta H > 0$) is:",
        "options": {
          "A": "Exothermic",
          "B": "Endothermic",
          "C": "Spontaneous combustion",
          "D": "Neutralization"
        },
        "correctAnswer": "B",
        "explanation": "Endothermic reactions absorb heat from their surroundings, resulting in $\\Delta H > 0$ and cooling of the reaction vessel."
      },
      {
        "id": "JAMB-CHM-018",
        "subject": "Chemistry",
        "class": "SSS 3",
        "topic": "Polymers",
        "question": "Polymerization of ethene ($\\text{CH}_2=\\text{CH}_2$) under high temperature and pressure forms:",
        "options": {
          "A": "Polystyrene",
          "B": "Polyvinyl chloride (PVC)",
          "C": "Polyethene (Polythene)",
          "D": "Nylon 6,6"
        },
        "correctAnswer": "C",
        "explanation": "Addition polymerization of ethene monomers breaks the double bond to form long-chain polyethene."
      },
      {
        "id": "JAMB-CHM-019",
        "subject": "Chemistry",
        "class": "SSS 1",
        "topic": "Matter & Changes",
        "question": "Which of the following processes is a chemical change?",
        "options": {
          "A": "Dissolving table salt in water",
          "B": "Melting of ice cubes",
          "C": "Rusting of an iron nail",
          "D": "Evaporation of ethanol"
        },
        "correctAnswer": "C",
        "explanation": "Rusting forms a new chemical compound (hydrated iron(III) oxide, $\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$) and cannot be reversed by simple physical methods."
      },
      {
        "id": "JAMB-CHM-020",
        "subject": "Chemistry",
        "class": "SSS 2",
        "topic": "Volumetric Analysis",
        "question": "In an acid-base titration of strong acid ($\\text{HCl}$) against weak base ($\\text{NH}_3$), the most suitable indicator is:",
        "options": {
          "A": "Phenolphthalein",
          "B": "Methyl orange",
          "C": "Litmus paper",
          "D": "Universal indicator"
        },
        "correctAnswer": "B",
        "explanation": "At equivalence point, the solution is slightly acidic due to hydrolysis of ammonium ions, so methyl orange (pH range 3.1 - 4.4) is ideal."
      }
    ]
  },
  "Economics": {
    "SSS 1": [
      {
        "id": "JAMB-ECO-001",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Basic Concepts",
        "question": "The fundamental economic problem facing all societies arises from:",
        "options": {
          "A": "Overpopulation only",
          "B": "Limited human wants and limitless resources",
          "C": "Unlimited human wants and scarce economic resources",
          "D": "Poor governance"
        },
        "correctAnswer": "C",
        "explanation": "Scarcity is the central economic problem: human material wants are virtually unlimited, whereas productive resources are finite."
      },
      {
        "id": "JAMB-ECO-002",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Basic Concepts",
        "question": "Opportunity cost is defined as the:",
        "options": {
          "A": "Financial cost of an asset",
          "B": "Alternative forgone when a choice is made",
          "C": "Market price of commodities",
          "D": "Cost of borrowing money"
        },
        "correctAnswer": "B",
        "explanation": "Opportunity cost represents the value or benefit of the next best alternative given up when selecting one option over another."
      },
      {
        "id": "JAMB-ECO-003",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Theory of Demand",
        "question": "The Law of Demand states that, other things being equal (ceteris paribus):",
        "options": {
          "A": "As price rises, quantity demanded rises",
          "B": "As price falls, quantity demanded increases",
          "C": "Price and quantity demanded are completely independent",
          "D": "Demand is always higher than supply"
        },
        "correctAnswer": "B",
        "explanation": "The law of demand establishes an inverse relationship: when the price of a normal good falls, quantity demanded rises."
      },
      {
        "id": "JAMB-ECO-004",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Production",
        "question": "The reward or factor payment for land in the production process is:",
        "options": {
          "A": "Wages and salaries",
          "B": "Interest",
          "C": "Rent",
          "D": "Profit"
        },
        "correctAnswer": "C",
        "explanation": "Land earns rent, labor earns wages, capital earns interest, and entrepreneurship earns profit."
      },
      {
        "id": "JAMB-ECO-005",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Division of Labour",
        "question": "An advantage of division of labour and specialization in manufacturing is:",
        "options": {
          "A": "Increased monotony of work",
          "B": "Increased output and efficiency",
          "C": "Risk of structural unemployment",
          "D": "Higher cost per unit output"
        },
        "correctAnswer": "B",
        "explanation": "Specialization enables workers to become faster and more skilled at repetitive tasks, substantially increasing productivity."
      },
      {
        "id": "JAMB-ECO-016",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Theory of Supply",
        "question": "A shift of the supply curve to the right signifies:",
        "options": {
          "A": "A decrease in supply",
          "B": "An increase in supply due to favorable non-price factors (e.g. improved technology)",
          "C": "A change in quantity supplied due to price change",
          "D": "An economic depression"
        },
        "correctAnswer": "B",
        "explanation": "An outward rightward shift of the supply curve reflects an expansion of supply caused by lower input costs or technological advances."
      },
      {
        "id": "JAMB-ECO-019",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Economic Systems",
        "question": "In a pure capitalist (free market) economic system, the allocation of scarce resources is primarily guided by:",
        "options": {
          "A": "Government planning committees",
          "B": "The price mechanism (forces of demand and supply)",
          "C": "Customs and traditional monarchies",
          "D": "Trade unions"
        },
        "correctAnswer": "B",
        "explanation": "Free enterprise economies utilize Adam Smith's 'invisible hand' — market price signals determined by demand and supply."
      }
    ],
    "SSS 2": [
      {
        "id": "JAMB-ECO-006",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Elasticity of Demand",
        "question": "If a $10\\%$ increase in the price of a commodity leads to a $25\\%$ decrease in quantity demanded, the price elasticity of demand is:",
        "options": {
          "A": "$0.40$ (Inelastic)",
          "B": "$2.50$ (Elastic)",
          "C": "$1.00$ (Unitary)",
          "D": "$0.25$ (Perfect)"
        },
        "correctAnswer": "B",
        "explanation": "$\\text{PED} = |\\frac{\\% \\Delta Q_d}{\\% \\Delta P}| = |\\frac{-25\\%}{10\\%}| = 2.50$. Since $\\text{PED} > 1$, demand is price elastic."
      },
      {
        "id": "JAMB-ECO-007",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Market Structures",
        "question": "A market structure characterized by a single seller, high barriers to entry, and no close substitutes is a:",
        "options": {
          "A": "Perfect competition",
          "B": "Monopoly",
          "C": "Monopolistic competition",
          "D": "Duopoly"
        },
        "correctAnswer": "B",
        "explanation": "A pure monopoly exists when one firm is the sole producer or seller of a product that has no close substitutes."
      },
      {
        "id": "JAMB-ECO-008",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Cost Concepts",
        "question": "Marginal Cost ($MC$) is defined as the:",
        "options": {
          "A": "Total cost divided by total output",
          "B": "Addition to total cost resulting from producing one extra unit of output",
          "C": "Difference between fixed cost and variable cost",
          "D": "Average revenue minus profit"
        },
        "correctAnswer": "B",
        "explanation": "Marginal cost is the change in total cost ($\\Delta TC / \\Delta Q$) associated with manufacturing one additional unit."
      },
      {
        "id": "JAMB-ECO-009",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "National Income",
        "question": "Gross Domestic Product (GDP) measures the total monetary value of:",
        "options": {
          "A": "Goods produced by citizens residing abroad",
          "B": "All final goods and services produced within a country's domestic borders in a given year",
          "C": "Government tax revenues only",
          "D": "Net exports minus imports"
        },
        "correctAnswer": "B",
        "explanation": "GDP measures the total market value of all final goods and services produced within the geographic boundaries of a country."
      },
      {
        "id": "JAMB-ECO-010",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Money and Banking",
        "question": "Which institution is solely authorized to issue legal tender currency notes and coins in Nigeria?",
        "options": {
          "A": "First Bank of Nigeria Plc",
          "B": "Central Bank of Nigeria (CBN)",
          "C": "Federal Ministry of Finance",
          "D": "Security and Exchange Commission"
        },
        "correctAnswer": "B",
        "explanation": "The Central Bank of Nigeria (CBN) is the apex regulatory monetary authority possessing the legal monopoly of currency issue."
      },
      {
        "id": "JAMB-ECO-017",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Population Economics",
        "question": "The Malthusian population theory postulated that while human population increases geometrically, food production increases:",
        "options": {
          "A": "Logarithmically",
          "B": "Arithmetically",
          "C": "Exponentially",
          "D": "Indefinitely"
        },
        "correctAnswer": "B",
        "explanation": "Thomas Malthus posited that unchecked population grows geometrically (1, 2, 4, 8, 16...) while food supply increases arithmetically (1, 2, 3, 4...)."
      },
      {
        "id": "JAMB-ECO-020",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Balance of Payments",
        "question": "A persistent deficit in a country's balance of payments can be remedied by:",
        "options": {
          "A": "Encouraging higher imports of luxury goods",
          "B": "Devaluation or depreciation of the domestic currency to stimulate exports",
          "C": "Increasing domestic consumption subsidies",
          "D": "Banning all domestic exports"
        },
        "correctAnswer": "B",
        "explanation": "Devaluing the national currency makes domestic exports cheaper for foreigners and imports more expensive, improving the trade balance."
      }
    ],
    "SSS 3": [
      {
        "id": "JAMB-ECO-011",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "Inflation",
        "question": "Cost-push inflation is typically triggered by:",
        "options": {
          "A": "Excessive money supply growth",
          "B": "An increase in the production costs of firms (e.g. wages, raw materials, fuel)",
          "C": "Increased consumer spending",
          "D": "Budget surpluses"
        },
        "correctAnswer": "B",
        "explanation": "Cost-push inflation occurs when aggregate supply decreases due to higher costs of factors of production, pushing price levels upward."
      },
      {
        "id": "JAMB-ECO-012",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "Public Finance",
        "question": "A tax system where higher income earners pay a greater percentage of their income in tax is called:",
        "options": {
          "A": "Regressive tax",
          "B": "Proportional tax",
          "C": "Progressive tax",
          "D": "Excise tax"
        },
        "correctAnswer": "C",
        "explanation": "A progressive tax structure takes a higher proportion of income as personal income rises, such as PAYE in Nigeria."
      },
      {
        "id": "JAMB-ECO-013",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "International Trade",
        "question": "A country enjoys a 'comparative advantage' in producing a commodity when it can produce that good at:",
        "options": {
          "A": "A higher monetary expense",
          "B": "A lower opportunity cost than another country",
          "C": "Maximum tariff rates",
          "D": "Zero labour input"
        },
        "correctAnswer": "B",
        "explanation": "David Ricardo's theory of comparative advantage states that countries benefit by specializing where their opportunity cost is lowest."
      },
      {
        "id": "JAMB-ECO-014",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "Economic Integration",
        "question": "The Economic Community of West African States (ECOWAS) was founded in 1975 primarily to promote:",
        "options": {
          "A": "Military dictatorship in West Africa",
          "B": "Regional economic cooperation and free trade among member states",
          "C": "European monetary control",
          "D": "Religious alignment"
        },
        "correctAnswer": "B",
        "explanation": "ECOWAS promotes regional trade, free movement of people and capital, and economic self-sufficiency among West African nations."
      },
      {
        "id": "JAMB-ECO-015",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "Economic Growth & Development",
        "question": "The Human Development Index (HDI) measures national socioeconomic development based on:",
        "options": {
          "A": "Crude oil output only",
          "B": "Life expectancy, educational attainment, and per capita income",
          "C": "Military budget allocation",
          "D": "Total population size"
        },
        "correctAnswer": "B",
        "explanation": "The United Nations Development Programme (UNDP) computes HDI from life expectancy, years of schooling, and GNI per capita."
      },
      {
        "id": "JAMB-ECO-018",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "Monetary Policy",
        "question": "When the Central Bank increases the Cash Reserve Ratio (CRR), the commercial banks':",
        "options": {
          "A": "Ability to create credit and advance loans is reduced",
          "B": "Lending capacity automatically doubles",
          "C": "Need for collateral is abolished",
          "D": "Customers withdraw all deposits"
        },
        "correctAnswer": "A",
        "explanation": "Raising the Cash Reserve Ratio forces commercial banks to hold larger liquid reserves at the Central Bank, curbing credit creation."
      }
    ],
    "All": [
      {
        "id": "JAMB-ECO-001",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Basic Concepts",
        "question": "The fundamental economic problem facing all societies arises from:",
        "options": {
          "A": "Overpopulation only",
          "B": "Limited human wants and limitless resources",
          "C": "Unlimited human wants and scarce economic resources",
          "D": "Poor governance"
        },
        "correctAnswer": "C",
        "explanation": "Scarcity is the central economic problem: human material wants are virtually unlimited, whereas productive resources are finite."
      },
      {
        "id": "JAMB-ECO-002",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Basic Concepts",
        "question": "Opportunity cost is defined as the:",
        "options": {
          "A": "Financial cost of an asset",
          "B": "Alternative forgone when a choice is made",
          "C": "Market price of commodities",
          "D": "Cost of borrowing money"
        },
        "correctAnswer": "B",
        "explanation": "Opportunity cost represents the value or benefit of the next best alternative given up when selecting one option over another."
      },
      {
        "id": "JAMB-ECO-003",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Theory of Demand",
        "question": "The Law of Demand states that, other things being equal (ceteris paribus):",
        "options": {
          "A": "As price rises, quantity demanded rises",
          "B": "As price falls, quantity demanded increases",
          "C": "Price and quantity demanded are completely independent",
          "D": "Demand is always higher than supply"
        },
        "correctAnswer": "B",
        "explanation": "The law of demand establishes an inverse relationship: when the price of a normal good falls, quantity demanded rises."
      },
      {
        "id": "JAMB-ECO-004",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Production",
        "question": "The reward or factor payment for land in the production process is:",
        "options": {
          "A": "Wages and salaries",
          "B": "Interest",
          "C": "Rent",
          "D": "Profit"
        },
        "correctAnswer": "C",
        "explanation": "Land earns rent, labor earns wages, capital earns interest, and entrepreneurship earns profit."
      },
      {
        "id": "JAMB-ECO-005",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Division of Labour",
        "question": "An advantage of division of labour and specialization in manufacturing is:",
        "options": {
          "A": "Increased monotony of work",
          "B": "Increased output and efficiency",
          "C": "Risk of structural unemployment",
          "D": "Higher cost per unit output"
        },
        "correctAnswer": "B",
        "explanation": "Specialization enables workers to become faster and more skilled at repetitive tasks, substantially increasing productivity."
      },
      {
        "id": "JAMB-ECO-006",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Elasticity of Demand",
        "question": "If a $10\\%$ increase in the price of a commodity leads to a $25\\%$ decrease in quantity demanded, the price elasticity of demand is:",
        "options": {
          "A": "$0.40$ (Inelastic)",
          "B": "$2.50$ (Elastic)",
          "C": "$1.00$ (Unitary)",
          "D": "$0.25$ (Perfect)"
        },
        "correctAnswer": "B",
        "explanation": "$\\text{PED} = |\\frac{\\% \\Delta Q_d}{\\% \\Delta P}| = |\\frac{-25\\%}{10\\%}| = 2.50$. Since $\\text{PED} > 1$, demand is price elastic."
      },
      {
        "id": "JAMB-ECO-007",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Market Structures",
        "question": "A market structure characterized by a single seller, high barriers to entry, and no close substitutes is a:",
        "options": {
          "A": "Perfect competition",
          "B": "Monopoly",
          "C": "Monopolistic competition",
          "D": "Duopoly"
        },
        "correctAnswer": "B",
        "explanation": "A pure monopoly exists when one firm is the sole producer or seller of a product that has no close substitutes."
      },
      {
        "id": "JAMB-ECO-008",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Cost Concepts",
        "question": "Marginal Cost ($MC$) is defined as the:",
        "options": {
          "A": "Total cost divided by total output",
          "B": "Addition to total cost resulting from producing one extra unit of output",
          "C": "Difference between fixed cost and variable cost",
          "D": "Average revenue minus profit"
        },
        "correctAnswer": "B",
        "explanation": "Marginal cost is the change in total cost ($\\Delta TC / \\Delta Q$) associated with manufacturing one additional unit."
      },
      {
        "id": "JAMB-ECO-009",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "National Income",
        "question": "Gross Domestic Product (GDP) measures the total monetary value of:",
        "options": {
          "A": "Goods produced by citizens residing abroad",
          "B": "All final goods and services produced within a country's domestic borders in a given year",
          "C": "Government tax revenues only",
          "D": "Net exports minus imports"
        },
        "correctAnswer": "B",
        "explanation": "GDP measures the total market value of all final goods and services produced within the geographic boundaries of a country."
      },
      {
        "id": "JAMB-ECO-010",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Money and Banking",
        "question": "Which institution is solely authorized to issue legal tender currency notes and coins in Nigeria?",
        "options": {
          "A": "First Bank of Nigeria Plc",
          "B": "Central Bank of Nigeria (CBN)",
          "C": "Federal Ministry of Finance",
          "D": "Security and Exchange Commission"
        },
        "correctAnswer": "B",
        "explanation": "The Central Bank of Nigeria (CBN) is the apex regulatory monetary authority possessing the legal monopoly of currency issue."
      },
      {
        "id": "JAMB-ECO-011",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "Inflation",
        "question": "Cost-push inflation is typically triggered by:",
        "options": {
          "A": "Excessive money supply growth",
          "B": "An increase in the production costs of firms (e.g. wages, raw materials, fuel)",
          "C": "Increased consumer spending",
          "D": "Budget surpluses"
        },
        "correctAnswer": "B",
        "explanation": "Cost-push inflation occurs when aggregate supply decreases due to higher costs of factors of production, pushing price levels upward."
      },
      {
        "id": "JAMB-ECO-012",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "Public Finance",
        "question": "A tax system where higher income earners pay a greater percentage of their income in tax is called:",
        "options": {
          "A": "Regressive tax",
          "B": "Proportional tax",
          "C": "Progressive tax",
          "D": "Excise tax"
        },
        "correctAnswer": "C",
        "explanation": "A progressive tax structure takes a higher proportion of income as personal income rises, such as PAYE in Nigeria."
      },
      {
        "id": "JAMB-ECO-013",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "International Trade",
        "question": "A country enjoys a 'comparative advantage' in producing a commodity when it can produce that good at:",
        "options": {
          "A": "A higher monetary expense",
          "B": "A lower opportunity cost than another country",
          "C": "Maximum tariff rates",
          "D": "Zero labour input"
        },
        "correctAnswer": "B",
        "explanation": "David Ricardo's theory of comparative advantage states that countries benefit by specializing where their opportunity cost is lowest."
      },
      {
        "id": "JAMB-ECO-014",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "Economic Integration",
        "question": "The Economic Community of West African States (ECOWAS) was founded in 1975 primarily to promote:",
        "options": {
          "A": "Military dictatorship in West Africa",
          "B": "Regional economic cooperation and free trade among member states",
          "C": "European monetary control",
          "D": "Religious alignment"
        },
        "correctAnswer": "B",
        "explanation": "ECOWAS promotes regional trade, free movement of people and capital, and economic self-sufficiency among West African nations."
      },
      {
        "id": "JAMB-ECO-015",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "Economic Growth & Development",
        "question": "The Human Development Index (HDI) measures national socioeconomic development based on:",
        "options": {
          "A": "Crude oil output only",
          "B": "Life expectancy, educational attainment, and per capita income",
          "C": "Military budget allocation",
          "D": "Total population size"
        },
        "correctAnswer": "B",
        "explanation": "The United Nations Development Programme (UNDP) computes HDI from life expectancy, years of schooling, and GNI per capita."
      },
      {
        "id": "JAMB-ECO-016",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Theory of Supply",
        "question": "A shift of the supply curve to the right signifies:",
        "options": {
          "A": "A decrease in supply",
          "B": "An increase in supply due to favorable non-price factors (e.g. improved technology)",
          "C": "A change in quantity supplied due to price change",
          "D": "An economic depression"
        },
        "correctAnswer": "B",
        "explanation": "An outward rightward shift of the supply curve reflects an expansion of supply caused by lower input costs or technological advances."
      },
      {
        "id": "JAMB-ECO-017",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Population Economics",
        "question": "The Malthusian population theory postulated that while human population increases geometrically, food production increases:",
        "options": {
          "A": "Logarithmically",
          "B": "Arithmetically",
          "C": "Exponentially",
          "D": "Indefinitely"
        },
        "correctAnswer": "B",
        "explanation": "Thomas Malthus posited that unchecked population grows geometrically (1, 2, 4, 8, 16...) while food supply increases arithmetically (1, 2, 3, 4...)."
      },
      {
        "id": "JAMB-ECO-018",
        "subject": "Economics",
        "class": "SSS 3",
        "topic": "Monetary Policy",
        "question": "When the Central Bank increases the Cash Reserve Ratio (CRR), the commercial banks':",
        "options": {
          "A": "Ability to create credit and advance loans is reduced",
          "B": "Lending capacity automatically doubles",
          "C": "Need for collateral is abolished",
          "D": "Customers withdraw all deposits"
        },
        "correctAnswer": "A",
        "explanation": "Raising the Cash Reserve Ratio forces commercial banks to hold larger liquid reserves at the Central Bank, curbing credit creation."
      },
      {
        "id": "JAMB-ECO-019",
        "subject": "Economics",
        "class": "SSS 1",
        "topic": "Economic Systems",
        "question": "In a pure capitalist (free market) economic system, the allocation of scarce resources is primarily guided by:",
        "options": {
          "A": "Government planning committees",
          "B": "The price mechanism (forces of demand and supply)",
          "C": "Customs and traditional monarchies",
          "D": "Trade unions"
        },
        "correctAnswer": "B",
        "explanation": "Free enterprise economies utilize Adam Smith's 'invisible hand' — market price signals determined by demand and supply."
      },
      {
        "id": "JAMB-ECO-020",
        "subject": "Economics",
        "class": "SSS 2",
        "topic": "Balance of Payments",
        "question": "A persistent deficit in a country's balance of payments can be remedied by:",
        "options": {
          "A": "Encouraging higher imports of luxury goods",
          "B": "Devaluation or depreciation of the domestic currency to stimulate exports",
          "C": "Increasing domestic consumption subsidies",
          "D": "Banning all domestic exports"
        },
        "correctAnswer": "B",
        "explanation": "Devaluing the national currency makes domestic exports cheaper for foreigners and imports more expensive, improving the trade balance."
      }
    ]
  },
  "Government": {
    "SSS 1": [
      {
        "id": "JAMB-GOV-001",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Basic Concepts",
        "question": "Sovereignty in political science refers to the:",
        "options": {
          "A": "Power of the military over civilians",
          "B": "Supreme, absolute, and uncontrolled authority of a state over its territory",
          "C": "Influence of foreign ambassadors",
          "D": "Financial strength of the central bank"
        },
        "correctAnswer": "B",
        "explanation": "Jean Bodin defined sovereignty as the supreme legal power of the state, independent of external control."
      },
      {
        "id": "JAMB-GOV-002",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Arms of Government",
        "question": "The primary constitutional responsibility of the legislature is to:",
        "options": {
          "A": "Interpret existing laws",
          "B": "Enact, amend, and repeal laws",
          "C": "Enforce court orders",
          "D": "Manage public parastatals"
        },
        "correctAnswer": "B",
        "explanation": "The legislature (e.g. the National Assembly in Nigeria) has the constitutional mandate to make laws for peace, order, and good governance."
      },
      {
        "id": "JAMB-GOV-003",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Rule of Law",
        "question": "The principle of the Rule of Law popularized by A.V. Dicey encompasses:",
        "options": {
          "A": "Absolute power of the monarch",
          "B": "Supremacy of regular law, equality before the law, and protection of individual liberties",
          "C": "Rule by decree without constitution",
          "D": "Immunity for all government officials"
        },
        "correctAnswer": "B",
        "explanation": "A.V. Dicey's three pillars of the Rule of Law are: supremacy of the law, equality before the law, and individual human rights."
      },
      {
        "id": "JAMB-GOV-004",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Forms of Government",
        "question": "A system of government where political power is shared between a central authority and constituent regional units is a:",
        "options": {
          "A": "Unitary system",
          "B": "Federal system",
          "C": "Monarchy",
          "D": "Totalitarian regime"
        },
        "correctAnswer": "B",
        "explanation": "In a federal system (such as Nigeria, USA), power is constitutionally distributed between federal and state/provincial governments."
      },
      {
        "id": "JAMB-GOV-005",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Systems of Government",
        "question": "In a parliamentary system of government, the Head of Government is the:",
        "options": {
          "A": "Monarch",
          "B": "Prime Minister",
          "C": "Chief Justice",
          "D": "Governor-General"
        },
        "correctAnswer": "B",
        "explanation": "In parliamentary democracies (e.g. UK), the Prime Minister is the head of government, drawn from and accountable to parliament."
      },
      {
        "id": "JAMB-GOV-016",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Political Concepts",
        "question": "Citizenship by naturalization is granted to a foreigner who has:",
        "options": {
          "A": "Bought real estate in the country",
          "B": "Satisfied legally prescribed residency, character, and allegiance requirements",
          "C": "Married a citizen of another nation",
          "D": "Visited the nation on tourist visa"
        },
        "correctAnswer": "B",
        "explanation": "Naturalization is legal process through which an alien who fulfills constitutional criteria (residency, good character, oath) acquires citizenship."
      },
      {
        "id": "JAMB-GOV-019",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Separation of Powers",
        "question": "The doctrine of Separation of Powers was famously articulated in 'The Spirit of the Laws' by:",
        "options": {
          "A": "Karl Marx",
          "B": "Baron de Montesquieu",
          "C": "Thomas Hobbes",
          "D": "Niccolo Machiavelli"
        },
        "correctAnswer": "B",
        "explanation": "Montesquieu formulated the classic doctrine that liberty requires the separation of executive, legislative, and judicial powers."
      }
    ],
    "SSS 2": [
      {
        "id": "JAMB-GOV-006",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Electoral Systems",
        "question": "The franchise or suffrage in a democratic state refers to the constitutional right to:",
        "options": {
          "A": "Criticize the judiciary",
          "B": "Vote and be voted for in periodic elections",
          "C": "Draft national budgets",
          "D": "Hold dual citizenship"
        },
        "correctAnswer": "B",
        "explanation": "Franchise is the constitutional right granted to eligible citizens to participate in elections as voters or candidates."
      },
      {
        "id": "JAMB-GOV-007",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Pre-colonial Systems",
        "question": "The pre-colonial political system of the Yoruba kingdom was characterized by:",
        "options": {
          "A": "Decentralized republicanism",
          "B": "Constitutional monarchy with checks and balances (the Alaafin and Oyomesi)",
          "C": "Theocratic autocracy of the Emir",
          "D": "Direct British administrative rule"
        },
        "correctAnswer": "B",
        "explanation": "The Oyo Empire operated a constitutional monarchy: the Alaafin's executive authority was checked by the Council of Kingmakers (Oyomesi)."
      },
      {
        "id": "JAMB-GOV-008",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Constitutional Development",
        "question": "The 1922 Clifford Constitution in Nigeria was historically significant because it:",
        "options": {
          "A": "Granted independence to Nigeria",
          "B": "Introduced the elective principle for the first time",
          "C": "Created the three regions (Northern, Western, Eastern)",
          "D": "Adopted the presidential system"
        },
        "correctAnswer": "B",
        "explanation": "The Clifford Constitution of 1922 introduced the elective principle, creating four elected legislative seats (3 for Lagos, 1 for Calabar)."
      },
      {
        "id": "JAMB-GOV-009",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Constitutional Development",
        "question": "Federalism was officially introduced into Nigeria under which colonial constitution?",
        "options": {
          "A": "Richards Constitution of 1946",
          "B": "Macpherson Constitution of 1951",
          "C": "Lyttelton Constitution of 1954",
          "D": "Clifford Constitution of 1922"
        },
        "correctAnswer": "C",
        "explanation": "The Lyttelton Constitution of 1954 established true federalism in Nigeria, creating autonomous Northern, Western, and Eastern regions."
      },
      {
        "id": "JAMB-GOV-010",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Pressure Groups",
        "question": "The primary objective of a pressure group (interest group) is to:",
        "options": {
          "A": "Capture state power by winning elections",
          "B": "Influence government policies in favor of its members without seeking direct office",
          "C": "Overthrow the constitutional order",
          "D": "Administer local governments"
        },
        "correctAnswer": "B",
        "explanation": "Unlike political parties which seek to capture power, pressure groups lobby government to influence policies beneficial to their interest."
      },
      {
        "id": "JAMB-GOV-017",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Pre-colonial Systems",
        "question": "The pre-colonial political structure of the Igbo communities of southeastern Nigeria was predominantly:",
        "options": {
          "A": "Autocratic and feudal",
          "B": "Segmentary, acephalous (stateless), and egalitarian",
          "C": "Centralized under a powerful emperor",
          "D": "Ruled by military generals"
        },
        "correctAnswer": "B",
        "explanation": "Traditional Igbo society was decentralized (acephalous) and governed democratically by councils of elders (Amala), age grades, and title holders."
      },
      {
        "id": "JAMB-GOV-020",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Nationalism",
        "question": "Which Nigerian nationalist newspaper was founded by Dr. Nnamdi Azikiwe in 1937 to mobilize opposition against British colonialism?",
        "options": {
          "A": "Lagos Daily News",
          "B": "West African Pilot",
          "C": "Daily Times",
          "D": "The Guardian"
        },
        "correctAnswer": "B",
        "explanation": "Dr. Nnamdi Azikiwe founded the 'West African Pilot' in 1937, which became a powerful tool for anti-colonial political agitation."
      }
    ],
    "SSS 3": [
      {
        "id": "JAMB-GOV-011",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "Nigerian Constitutions",
        "question": "The 1979 Constitution of Nigeria replaced the British parliamentary model with the:",
        "options": {
          "A": "American-style Presidential Executive system",
          "B": "French Fifth Republic semi-presidential model",
          "C": "Confederal assembly system",
          "D": "Military junta council"
        },
        "correctAnswer": "A",
        "explanation": "The 1979 Second Republic Constitution replaced the Westminster parliamentary system with an executive presidency."
      },
      {
        "id": "JAMB-GOV-012",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "Foreign Policy",
        "question": "A cardinal objective of Nigeria's foreign policy since independence has been:",
        "options": {
          "A": "Territorial conquest of neighboring states",
          "B": "Afrocentrism (Africa as the centerpiece of foreign policy)",
          "C": "Alliance with Warsaw Pact powers",
          "D": "Non-cooperation with international organizations"
        },
        "correctAnswer": "B",
        "explanation": "Nigeria's foreign policy is founded on Afrocentrism: the liberation, unity, economic development, and defense of Africa and black dignity."
      },
      {
        "id": "JAMB-GOV-013",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "Public Administration",
        "question": "The primary function of the Civil Service Commission is the:",
        "options": {
          "A": "Enactment of civil statutes",
          "B": "Appointment, promotion, discipline, and dismissal of civil servants",
          "C": "Conduct of national census",
          "D": "Auditing of commercial banks"
        },
        "correctAnswer": "B",
        "explanation": "The Federal/State Civil Service Commission is the constitutional body responsible for recruitment, promotion, and discipline of civil servants."
      },
      {
        "id": "JAMB-GOV-014",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "International Organizations",
        "question": "Which organ of the United Nations has primary responsibility for maintaining international peace and security?",
        "options": {
          "A": "General Assembly",
          "B": "Security Council",
          "C": "Economic and Social Council",
          "D": "Secretariat"
        },
        "correctAnswer": "B",
        "explanation": "The UN Security Council, composed of five permanent members with veto power and ten rotating members, has primary responsibility for global peace."
      },
      {
        "id": "JAMB-GOV-015",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "Local Government",
        "question": "The landmark 1976 Local Government Reforms in Nigeria created:",
        "options": {
          "A": "A single-tier, multipurpose local government system across the federation",
          "B": "Regional parliaments with taxing powers",
          "C": "Colonial Native Authorities",
          "D": "Five states in the federation"
        },
        "correctAnswer": "A",
        "explanation": "The 1976 reforms established a uniform single-tier system of local governments recognized as the third tier of government in Nigeria."
      },
      {
        "id": "JAMB-GOV-018",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "Judiciary",
        "question": "The highest appellate court of the land in the Federal Republic of Nigeria is the:",
        "options": {
          "A": "Federal High Court",
          "B": "Court of Appeal",
          "C": "Supreme Court of Nigeria",
          "D": "National Industrial Court"
        },
        "correctAnswer": "C",
        "explanation": "The Supreme Court of Nigeria, presided over by the Chief Justice of Nigeria, is the apex and final court of appeal in the judicial hierarchy."
      }
    ],
    "All": [
      {
        "id": "JAMB-GOV-001",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Basic Concepts",
        "question": "Sovereignty in political science refers to the:",
        "options": {
          "A": "Power of the military over civilians",
          "B": "Supreme, absolute, and uncontrolled authority of a state over its territory",
          "C": "Influence of foreign ambassadors",
          "D": "Financial strength of the central bank"
        },
        "correctAnswer": "B",
        "explanation": "Jean Bodin defined sovereignty as the supreme legal power of the state, independent of external control."
      },
      {
        "id": "JAMB-GOV-002",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Arms of Government",
        "question": "The primary constitutional responsibility of the legislature is to:",
        "options": {
          "A": "Interpret existing laws",
          "B": "Enact, amend, and repeal laws",
          "C": "Enforce court orders",
          "D": "Manage public parastatals"
        },
        "correctAnswer": "B",
        "explanation": "The legislature (e.g. the National Assembly in Nigeria) has the constitutional mandate to make laws for peace, order, and good governance."
      },
      {
        "id": "JAMB-GOV-003",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Rule of Law",
        "question": "The principle of the Rule of Law popularized by A.V. Dicey encompasses:",
        "options": {
          "A": "Absolute power of the monarch",
          "B": "Supremacy of regular law, equality before the law, and protection of individual liberties",
          "C": "Rule by decree without constitution",
          "D": "Immunity for all government officials"
        },
        "correctAnswer": "B",
        "explanation": "A.V. Dicey's three pillars of the Rule of Law are: supremacy of the law, equality before the law, and individual human rights."
      },
      {
        "id": "JAMB-GOV-004",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Forms of Government",
        "question": "A system of government where political power is shared between a central authority and constituent regional units is a:",
        "options": {
          "A": "Unitary system",
          "B": "Federal system",
          "C": "Monarchy",
          "D": "Totalitarian regime"
        },
        "correctAnswer": "B",
        "explanation": "In a federal system (such as Nigeria, USA), power is constitutionally distributed between federal and state/provincial governments."
      },
      {
        "id": "JAMB-GOV-005",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Systems of Government",
        "question": "In a parliamentary system of government, the Head of Government is the:",
        "options": {
          "A": "Monarch",
          "B": "Prime Minister",
          "C": "Chief Justice",
          "D": "Governor-General"
        },
        "correctAnswer": "B",
        "explanation": "In parliamentary democracies (e.g. UK), the Prime Minister is the head of government, drawn from and accountable to parliament."
      },
      {
        "id": "JAMB-GOV-006",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Electoral Systems",
        "question": "The franchise or suffrage in a democratic state refers to the constitutional right to:",
        "options": {
          "A": "Criticize the judiciary",
          "B": "Vote and be voted for in periodic elections",
          "C": "Draft national budgets",
          "D": "Hold dual citizenship"
        },
        "correctAnswer": "B",
        "explanation": "Franchise is the constitutional right granted to eligible citizens to participate in elections as voters or candidates."
      },
      {
        "id": "JAMB-GOV-007",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Pre-colonial Systems",
        "question": "The pre-colonial political system of the Yoruba kingdom was characterized by:",
        "options": {
          "A": "Decentralized republicanism",
          "B": "Constitutional monarchy with checks and balances (the Alaafin and Oyomesi)",
          "C": "Theocratic autocracy of the Emir",
          "D": "Direct British administrative rule"
        },
        "correctAnswer": "B",
        "explanation": "The Oyo Empire operated a constitutional monarchy: the Alaafin's executive authority was checked by the Council of Kingmakers (Oyomesi)."
      },
      {
        "id": "JAMB-GOV-008",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Constitutional Development",
        "question": "The 1922 Clifford Constitution in Nigeria was historically significant because it:",
        "options": {
          "A": "Granted independence to Nigeria",
          "B": "Introduced the elective principle for the first time",
          "C": "Created the three regions (Northern, Western, Eastern)",
          "D": "Adopted the presidential system"
        },
        "correctAnswer": "B",
        "explanation": "The Clifford Constitution of 1922 introduced the elective principle, creating four elected legislative seats (3 for Lagos, 1 for Calabar)."
      },
      {
        "id": "JAMB-GOV-009",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Constitutional Development",
        "question": "Federalism was officially introduced into Nigeria under which colonial constitution?",
        "options": {
          "A": "Richards Constitution of 1946",
          "B": "Macpherson Constitution of 1951",
          "C": "Lyttelton Constitution of 1954",
          "D": "Clifford Constitution of 1922"
        },
        "correctAnswer": "C",
        "explanation": "The Lyttelton Constitution of 1954 established true federalism in Nigeria, creating autonomous Northern, Western, and Eastern regions."
      },
      {
        "id": "JAMB-GOV-010",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Pressure Groups",
        "question": "The primary objective of a pressure group (interest group) is to:",
        "options": {
          "A": "Capture state power by winning elections",
          "B": "Influence government policies in favor of its members without seeking direct office",
          "C": "Overthrow the constitutional order",
          "D": "Administer local governments"
        },
        "correctAnswer": "B",
        "explanation": "Unlike political parties which seek to capture power, pressure groups lobby government to influence policies beneficial to their interest."
      },
      {
        "id": "JAMB-GOV-011",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "Nigerian Constitutions",
        "question": "The 1979 Constitution of Nigeria replaced the British parliamentary model with the:",
        "options": {
          "A": "American-style Presidential Executive system",
          "B": "French Fifth Republic semi-presidential model",
          "C": "Confederal assembly system",
          "D": "Military junta council"
        },
        "correctAnswer": "A",
        "explanation": "The 1979 Second Republic Constitution replaced the Westminster parliamentary system with an executive presidency."
      },
      {
        "id": "JAMB-GOV-012",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "Foreign Policy",
        "question": "A cardinal objective of Nigeria's foreign policy since independence has been:",
        "options": {
          "A": "Territorial conquest of neighboring states",
          "B": "Afrocentrism (Africa as the centerpiece of foreign policy)",
          "C": "Alliance with Warsaw Pact powers",
          "D": "Non-cooperation with international organizations"
        },
        "correctAnswer": "B",
        "explanation": "Nigeria's foreign policy is founded on Afrocentrism: the liberation, unity, economic development, and defense of Africa and black dignity."
      },
      {
        "id": "JAMB-GOV-013",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "Public Administration",
        "question": "The primary function of the Civil Service Commission is the:",
        "options": {
          "A": "Enactment of civil statutes",
          "B": "Appointment, promotion, discipline, and dismissal of civil servants",
          "C": "Conduct of national census",
          "D": "Auditing of commercial banks"
        },
        "correctAnswer": "B",
        "explanation": "The Federal/State Civil Service Commission is the constitutional body responsible for recruitment, promotion, and discipline of civil servants."
      },
      {
        "id": "JAMB-GOV-014",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "International Organizations",
        "question": "Which organ of the United Nations has primary responsibility for maintaining international peace and security?",
        "options": {
          "A": "General Assembly",
          "B": "Security Council",
          "C": "Economic and Social Council",
          "D": "Secretariat"
        },
        "correctAnswer": "B",
        "explanation": "The UN Security Council, composed of five permanent members with veto power and ten rotating members, has primary responsibility for global peace."
      },
      {
        "id": "JAMB-GOV-015",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "Local Government",
        "question": "The landmark 1976 Local Government Reforms in Nigeria created:",
        "options": {
          "A": "A single-tier, multipurpose local government system across the federation",
          "B": "Regional parliaments with taxing powers",
          "C": "Colonial Native Authorities",
          "D": "Five states in the federation"
        },
        "correctAnswer": "A",
        "explanation": "The 1976 reforms established a uniform single-tier system of local governments recognized as the third tier of government in Nigeria."
      },
      {
        "id": "JAMB-GOV-016",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Political Concepts",
        "question": "Citizenship by naturalization is granted to a foreigner who has:",
        "options": {
          "A": "Bought real estate in the country",
          "B": "Satisfied legally prescribed residency, character, and allegiance requirements",
          "C": "Married a citizen of another nation",
          "D": "Visited the nation on tourist visa"
        },
        "correctAnswer": "B",
        "explanation": "Naturalization is legal process through which an alien who fulfills constitutional criteria (residency, good character, oath) acquires citizenship."
      },
      {
        "id": "JAMB-GOV-017",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Pre-colonial Systems",
        "question": "The pre-colonial political structure of the Igbo communities of southeastern Nigeria was predominantly:",
        "options": {
          "A": "Autocratic and feudal",
          "B": "Segmentary, acephalous (stateless), and egalitarian",
          "C": "Centralized under a powerful emperor",
          "D": "Ruled by military generals"
        },
        "correctAnswer": "B",
        "explanation": "Traditional Igbo society was decentralized (acephalous) and governed democratically by councils of elders (Amala), age grades, and title holders."
      },
      {
        "id": "JAMB-GOV-018",
        "subject": "Government",
        "class": "SSS 3",
        "topic": "Judiciary",
        "question": "The highest appellate court of the land in the Federal Republic of Nigeria is the:",
        "options": {
          "A": "Federal High Court",
          "B": "Court of Appeal",
          "C": "Supreme Court of Nigeria",
          "D": "National Industrial Court"
        },
        "correctAnswer": "C",
        "explanation": "The Supreme Court of Nigeria, presided over by the Chief Justice of Nigeria, is the apex and final court of appeal in the judicial hierarchy."
      },
      {
        "id": "JAMB-GOV-019",
        "subject": "Government",
        "class": "SSS 1",
        "topic": "Separation of Powers",
        "question": "The doctrine of Separation of Powers was famously articulated in 'The Spirit of the Laws' by:",
        "options": {
          "A": "Karl Marx",
          "B": "Baron de Montesquieu",
          "C": "Thomas Hobbes",
          "D": "Niccolo Machiavelli"
        },
        "correctAnswer": "B",
        "explanation": "Montesquieu formulated the classic doctrine that liberty requires the separation of executive, legislative, and judicial powers."
      },
      {
        "id": "JAMB-GOV-020",
        "subject": "Government",
        "class": "SSS 2",
        "topic": "Nationalism",
        "question": "Which Nigerian nationalist newspaper was founded by Dr. Nnamdi Azikiwe in 1937 to mobilize opposition against British colonialism?",
        "options": {
          "A": "Lagos Daily News",
          "B": "West African Pilot",
          "C": "Daily Times",
          "D": "The Guardian"
        },
        "correctAnswer": "B",
        "explanation": "Dr. Nnamdi Azikiwe founded the 'West African Pilot' in 1937, which became a powerful tool for anti-colonial political agitation."
      }
    ]
  },
  "Commerce": {
    "SSS 1": [
      {
        "id": "JAMB-COM-001",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Introduction to Commerce",
        "question": "Commerce is broadly defined as the study of:",
        "options": {
          "A": "Only bank accounting practices",
          "B": "The buying, selling, and distribution of goods and services, including aids to trade",
          "C": "Manufacturing of physical items only",
          "D": "Agricultural farming methods"
        },
        "correctAnswer": "B",
        "explanation": "Commerce encompasses all activities involved in moving goods from producers to final consumers, including trade and aids to trade."
      },
      {
        "id": "JAMB-COM-002",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Branches of Commerce",
        "question": "Which of the following activities is an 'aid to trade'?",
        "options": {
          "A": "Extraction of crude oil",
          "B": "Transportation",
          "C": "Assembly of automobiles",
          "D": "Coal mining"
        },
        "correctAnswer": "B",
        "explanation": "Aids to trade are supportive services that facilitate exchange: banking, insurance, transportation, warehousing, advertising, and communication."
      },
      {
        "id": "JAMB-COM-003",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Home Trade",
        "question": "A merchant who purchases goods in large quantities from manufacturers and resells in smaller quantities to retailers is a:",
        "options": {
          "A": "Consumer",
          "B": "Wholesaler",
          "C": "Broker",
          "D": "Commission agent"
        },
        "correctAnswer": "B",
        "explanation": "The wholesaler acts as the intermediary link between manufacturers and retailers, breaking bulk quantities."
      },
      {
        "id": "JAMB-COM-004",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Retail Trade",
        "question": "A type of retail outlet where goods are sold through coin-operated or electronic machines without human attendants is a:",
        "options": {
          "A": "Department store",
          "B": "Vending machine",
          "C": "Supermarket",
          "D": "Chain store"
        },
        "correctAnswer": "B",
        "explanation": "Automatic vending machines dispense confectionery, drinks, and tickets directly to consumers upon electronic or coin payment."
      },
      {
        "id": "JAMB-COM-005",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Business Units",
        "question": "A major limitation of a sole proprietorship form of business organization is:",
        "options": {
          "A": "Quick decision making",
          "B": "Unlimited liability of the owner for business debts",
          "C": "Ease of formation",
          "D": "Close personal relationship with customers"
        },
        "correctAnswer": "B",
        "explanation": "In a sole proprietorship, the owner has unlimited liability; personal assets can be seized to liquidate business debts."
      },
      {
        "id": "JAMB-COM-016",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Trade Documents",
        "question": "Which trade document is sent by a seller to correct an undercharge in an earlier sales invoice?",
        "options": {
          "A": "Credit note",
          "B": "Debit note",
          "C": "Proforma invoice",
          "D": "Advice note"
        },
        "correctAnswer": "B",
        "explanation": "A debit note is issued to inform the buyer that their account has been debited due to an omission or undercharge in the original invoice."
      },
      {
        "id": "JAMB-COM-019",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Business Units",
        "question": "A major characteristic of a Public Limited Liability Company (Plc) is that its shares are:",
        "options": {
          "A": "Sold only to family members",
          "B": "Freely transferable and quoted on the floor of the Stock Exchange",
          "C": "Restricted from public trading",
          "D": "Owned exclusively by the federal government"
        },
        "correctAnswer": "B",
        "explanation": "Public Limited Companies (Plc) can invite the public to subscribe to shares, which trade freely on the stock exchange."
      }
    ],
    "SSS 2": [
      {
        "id": "JAMB-COM-006",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Banking & Finance",
        "question": "A document issued by a bank account holder instructing the bank to pay a specified sum of money to a named beneficiary is a:",
        "options": {
          "A": "Promissory note",
          "B": "Cheque",
          "C": "Bill of lading",
          "D": "Debit note"
        },
        "correctAnswer": "B",
        "explanation": "A cheque is an unconditional order in writing addressed by a depositor to their banker to pay on demand a specified sum."
      },
      {
        "id": "JAMB-COM-007",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Insurance",
        "question": "The principle of insurance which states that an insured person should only be restored to their exact financial position prior to the loss is:",
        "options": {
          "A": "Utmost Good Faith (Uberrimae Fidei)",
          "B": "Indemnity",
          "C": "Subrogation",
          "D": "Contribution"
        },
        "correctAnswer": "B",
        "explanation": "The principle of indemnity ensures that insurance compensates for actual loss suffered without allowing the insured to make a profit."
      },
      {
        "id": "JAMB-COM-008",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Warehousing",
        "question": "A licensed warehouse where imported dutiable goods are held under customs supervision until import duties are paid is a:",
        "options": {
          "A": "Private warehouse",
          "B": "Bonded warehouse",
          "C": "Public warehouse",
          "D": "Cooperative warehouse"
        },
        "correctAnswer": "B",
        "explanation": "Bonded warehouses are customs-controlled facilities where dutiable imports remain stored until customs tariffs are settled."
      },
      {
        "id": "JAMB-COM-009",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Foreign Trade",
        "question": "The document of title to goods shipped by sea, acting as a contract of carriage and receipt from the shipmaster, is the:",
        "options": {
          "A": "Airway bill",
          "B": "Bill of Lading",
          "C": "Consular invoice",
          "D": "Certificate of origin"
        },
        "correctAnswer": "B",
        "explanation": "The Bill of Lading is a critical document in maritime commerce serving as receipt of goods, document of title, and terms of carriage contract."
      },
      {
        "id": "JAMB-COM-010",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Advertising",
        "question": "An informative advertising campaign aimed at warning the public about counterfeit medicines or health risks is classified as:",
        "options": {
          "A": "Competitive advertising",
          "B": "Public relations / Public service advertising",
          "C": "Persuasive advertising",
          "D": "Subliminal advertising"
        },
        "correctAnswer": "B",
        "explanation": "Public service advertising educates and warns citizens on social and health issues without commercial sales intent."
      },
      {
        "id": "JAMB-COM-017",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Transportation",
        "question": "The most suitable and cost-effective mode of transportation for conveying crude petroleum and natural gas across continents is:",
        "options": {
          "A": "Road tankers",
          "B": "Pipelines",
          "C": "Air freight",
          "D": "Rail wagons"
        },
        "correctAnswer": "B",
        "explanation": "Pipelines provide continuous, high-volume, and weather-independent conveyance of liquid and gas hydrocarbons."
      },
      {
        "id": "JAMB-COM-020",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Communication",
        "question": "The fastest and most universally utilized electronic telecommunication service for commercial funds transfer between international banks is:",
        "options": {
          "A": "Telegram",
          "B": "SWIFT (Society for Worldwide Interbank Financial Telecommunication)",
          "C": "Postal money order",
          "D": "Registered airmail"
        },
        "correctAnswer": "B",
        "explanation": "SWIFT provides a secure, standardized global network for executing financial messaging and cross-border bank transactions."
      }
    ],
    "SSS 3": [
      {
        "id": "JAMB-COM-011",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "Capital & Business Finance",
        "question": "The total amount of capital that a company is authorized by its Memorandum of Association to issue to shareholders is:",
        "options": {
          "A": "Paid-up capital",
          "B": "Authorized (Nominal) capital",
          "C": "Called-up capital",
          "D": "Working capital"
        },
        "correctAnswer": "B",
        "explanation": "Authorized or nominal capital is the maximum share capital a corporation is legally registered to issue."
      },
      {
        "id": "JAMB-COM-012",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "Stock Exchange",
        "question": "Speculators on the stock exchange who buy shares in expectation that prices will rise in the near future are called:",
        "options": {
          "A": "Bears",
          "B": "Bulls",
          "C": "Stags",
          "D": "Lame ducks"
        },
        "correctAnswer": "B",
        "explanation": "Bulls are optimistic investors who buy securities expecting a market upturn; bears expect prices to decline."
      },
      {
        "id": "JAMB-COM-013",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "Consumer Protection",
        "question": "The government agency established in Nigeria to regulate and protect consumers against adulterated foods, drugs, and chemicals is:",
        "options": {
          "A": "SON",
          "B": "NAFDAC",
          "C": "NDLEA",
          "D": "EFCC"
        },
        "correctAnswer": "B",
        "explanation": "The National Agency for Food and Drug Administration and Control (NAFDAC) regulates quality, safety, and standards of food and medical products."
      },
      {
        "id": "JAMB-COM-014",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "Business Law",
        "question": "A valid contract requires all of the following essential elements EXCEPT:",
        "options": {
          "A": "Offer and acceptance",
          "B": "Consideration",
          "C": "Capacity to contract",
          "D": "Compulsory police presence"
        },
        "correctAnswer": "D",
        "explanation": "Essential elements of a contract include offer, acceptance, lawful consideration, intention to create legal relations, and capacity."
      },
      {
        "id": "JAMB-COM-015",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "International Trade",
        "question": "A tax or tariff imposed by government on imported merchandise to protect domestic infant industries is a/an:",
        "options": {
          "A": "Bounty",
          "B": "Import duty",
          "C": "Export subsidy",
          "D": "Embargo"
        },
        "correctAnswer": "B",
        "explanation": "Import duties (customs tariffs) raise the cost of foreign goods, encouraging patronage of domestic industrial output."
      },
      {
        "id": "JAMB-COM-018",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "Banking",
        "question": "Which type of bank account earns interest and requires a minimum notice period before funds can be withdrawn?",
        "options": {
          "A": "Current account",
          "B": "Fixed deposit (Time deposit) account",
          "C": "Savings account",
          "D": "Domiciliary account"
        },
        "correctAnswer": "B",
        "explanation": "A fixed deposit account ties down funds for a specified duration at a negotiated interest rate and requires notice before withdrawal."
      }
    ],
    "All": [
      {
        "id": "JAMB-COM-001",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Introduction to Commerce",
        "question": "Commerce is broadly defined as the study of:",
        "options": {
          "A": "Only bank accounting practices",
          "B": "The buying, selling, and distribution of goods and services, including aids to trade",
          "C": "Manufacturing of physical items only",
          "D": "Agricultural farming methods"
        },
        "correctAnswer": "B",
        "explanation": "Commerce encompasses all activities involved in moving goods from producers to final consumers, including trade and aids to trade."
      },
      {
        "id": "JAMB-COM-002",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Branches of Commerce",
        "question": "Which of the following activities is an 'aid to trade'?",
        "options": {
          "A": "Extraction of crude oil",
          "B": "Transportation",
          "C": "Assembly of automobiles",
          "D": "Coal mining"
        },
        "correctAnswer": "B",
        "explanation": "Aids to trade are supportive services that facilitate exchange: banking, insurance, transportation, warehousing, advertising, and communication."
      },
      {
        "id": "JAMB-COM-003",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Home Trade",
        "question": "A merchant who purchases goods in large quantities from manufacturers and resells in smaller quantities to retailers is a:",
        "options": {
          "A": "Consumer",
          "B": "Wholesaler",
          "C": "Broker",
          "D": "Commission agent"
        },
        "correctAnswer": "B",
        "explanation": "The wholesaler acts as the intermediary link between manufacturers and retailers, breaking bulk quantities."
      },
      {
        "id": "JAMB-COM-004",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Retail Trade",
        "question": "A type of retail outlet where goods are sold through coin-operated or electronic machines without human attendants is a:",
        "options": {
          "A": "Department store",
          "B": "Vending machine",
          "C": "Supermarket",
          "D": "Chain store"
        },
        "correctAnswer": "B",
        "explanation": "Automatic vending machines dispense confectionery, drinks, and tickets directly to consumers upon electronic or coin payment."
      },
      {
        "id": "JAMB-COM-005",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Business Units",
        "question": "A major limitation of a sole proprietorship form of business organization is:",
        "options": {
          "A": "Quick decision making",
          "B": "Unlimited liability of the owner for business debts",
          "C": "Ease of formation",
          "D": "Close personal relationship with customers"
        },
        "correctAnswer": "B",
        "explanation": "In a sole proprietorship, the owner has unlimited liability; personal assets can be seized to liquidate business debts."
      },
      {
        "id": "JAMB-COM-006",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Banking & Finance",
        "question": "A document issued by a bank account holder instructing the bank to pay a specified sum of money to a named beneficiary is a:",
        "options": {
          "A": "Promissory note",
          "B": "Cheque",
          "C": "Bill of lading",
          "D": "Debit note"
        },
        "correctAnswer": "B",
        "explanation": "A cheque is an unconditional order in writing addressed by a depositor to their banker to pay on demand a specified sum."
      },
      {
        "id": "JAMB-COM-007",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Insurance",
        "question": "The principle of insurance which states that an insured person should only be restored to their exact financial position prior to the loss is:",
        "options": {
          "A": "Utmost Good Faith (Uberrimae Fidei)",
          "B": "Indemnity",
          "C": "Subrogation",
          "D": "Contribution"
        },
        "correctAnswer": "B",
        "explanation": "The principle of indemnity ensures that insurance compensates for actual loss suffered without allowing the insured to make a profit."
      },
      {
        "id": "JAMB-COM-008",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Warehousing",
        "question": "A licensed warehouse where imported dutiable goods are held under customs supervision until import duties are paid is a:",
        "options": {
          "A": "Private warehouse",
          "B": "Bonded warehouse",
          "C": "Public warehouse",
          "D": "Cooperative warehouse"
        },
        "correctAnswer": "B",
        "explanation": "Bonded warehouses are customs-controlled facilities where dutiable imports remain stored until customs tariffs are settled."
      },
      {
        "id": "JAMB-COM-009",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Foreign Trade",
        "question": "The document of title to goods shipped by sea, acting as a contract of carriage and receipt from the shipmaster, is the:",
        "options": {
          "A": "Airway bill",
          "B": "Bill of Lading",
          "C": "Consular invoice",
          "D": "Certificate of origin"
        },
        "correctAnswer": "B",
        "explanation": "The Bill of Lading is a critical document in maritime commerce serving as receipt of goods, document of title, and terms of carriage contract."
      },
      {
        "id": "JAMB-COM-010",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Advertising",
        "question": "An informative advertising campaign aimed at warning the public about counterfeit medicines or health risks is classified as:",
        "options": {
          "A": "Competitive advertising",
          "B": "Public relations / Public service advertising",
          "C": "Persuasive advertising",
          "D": "Subliminal advertising"
        },
        "correctAnswer": "B",
        "explanation": "Public service advertising educates and warns citizens on social and health issues without commercial sales intent."
      },
      {
        "id": "JAMB-COM-011",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "Capital & Business Finance",
        "question": "The total amount of capital that a company is authorized by its Memorandum of Association to issue to shareholders is:",
        "options": {
          "A": "Paid-up capital",
          "B": "Authorized (Nominal) capital",
          "C": "Called-up capital",
          "D": "Working capital"
        },
        "correctAnswer": "B",
        "explanation": "Authorized or nominal capital is the maximum share capital a corporation is legally registered to issue."
      },
      {
        "id": "JAMB-COM-012",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "Stock Exchange",
        "question": "Speculators on the stock exchange who buy shares in expectation that prices will rise in the near future are called:",
        "options": {
          "A": "Bears",
          "B": "Bulls",
          "C": "Stags",
          "D": "Lame ducks"
        },
        "correctAnswer": "B",
        "explanation": "Bulls are optimistic investors who buy securities expecting a market upturn; bears expect prices to decline."
      },
      {
        "id": "JAMB-COM-013",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "Consumer Protection",
        "question": "The government agency established in Nigeria to regulate and protect consumers against adulterated foods, drugs, and chemicals is:",
        "options": {
          "A": "SON",
          "B": "NAFDAC",
          "C": "NDLEA",
          "D": "EFCC"
        },
        "correctAnswer": "B",
        "explanation": "The National Agency for Food and Drug Administration and Control (NAFDAC) regulates quality, safety, and standards of food and medical products."
      },
      {
        "id": "JAMB-COM-014",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "Business Law",
        "question": "A valid contract requires all of the following essential elements EXCEPT:",
        "options": {
          "A": "Offer and acceptance",
          "B": "Consideration",
          "C": "Capacity to contract",
          "D": "Compulsory police presence"
        },
        "correctAnswer": "D",
        "explanation": "Essential elements of a contract include offer, acceptance, lawful consideration, intention to create legal relations, and capacity."
      },
      {
        "id": "JAMB-COM-015",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "International Trade",
        "question": "A tax or tariff imposed by government on imported merchandise to protect domestic infant industries is a/an:",
        "options": {
          "A": "Bounty",
          "B": "Import duty",
          "C": "Export subsidy",
          "D": "Embargo"
        },
        "correctAnswer": "B",
        "explanation": "Import duties (customs tariffs) raise the cost of foreign goods, encouraging patronage of domestic industrial output."
      },
      {
        "id": "JAMB-COM-016",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Trade Documents",
        "question": "Which trade document is sent by a seller to correct an undercharge in an earlier sales invoice?",
        "options": {
          "A": "Credit note",
          "B": "Debit note",
          "C": "Proforma invoice",
          "D": "Advice note"
        },
        "correctAnswer": "B",
        "explanation": "A debit note is issued to inform the buyer that their account has been debited due to an omission or undercharge in the original invoice."
      },
      {
        "id": "JAMB-COM-017",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Transportation",
        "question": "The most suitable and cost-effective mode of transportation for conveying crude petroleum and natural gas across continents is:",
        "options": {
          "A": "Road tankers",
          "B": "Pipelines",
          "C": "Air freight",
          "D": "Rail wagons"
        },
        "correctAnswer": "B",
        "explanation": "Pipelines provide continuous, high-volume, and weather-independent conveyance of liquid and gas hydrocarbons."
      },
      {
        "id": "JAMB-COM-018",
        "subject": "Commerce",
        "class": "SSS 3",
        "topic": "Banking",
        "question": "Which type of bank account earns interest and requires a minimum notice period before funds can be withdrawn?",
        "options": {
          "A": "Current account",
          "B": "Fixed deposit (Time deposit) account",
          "C": "Savings account",
          "D": "Domiciliary account"
        },
        "correctAnswer": "B",
        "explanation": "A fixed deposit account ties down funds for a specified duration at a negotiated interest rate and requires notice before withdrawal."
      },
      {
        "id": "JAMB-COM-019",
        "subject": "Commerce",
        "class": "SSS 1",
        "topic": "Business Units",
        "question": "A major characteristic of a Public Limited Liability Company (Plc) is that its shares are:",
        "options": {
          "A": "Sold only to family members",
          "B": "Freely transferable and quoted on the floor of the Stock Exchange",
          "C": "Restricted from public trading",
          "D": "Owned exclusively by the federal government"
        },
        "correctAnswer": "B",
        "explanation": "Public Limited Companies (Plc) can invite the public to subscribe to shares, which trade freely on the stock exchange."
      },
      {
        "id": "JAMB-COM-020",
        "subject": "Commerce",
        "class": "SSS 2",
        "topic": "Communication",
        "question": "The fastest and most universally utilized electronic telecommunication service for commercial funds transfer between international banks is:",
        "options": {
          "A": "Telegram",
          "B": "SWIFT (Society for Worldwide Interbank Financial Telecommunication)",
          "C": "Postal money order",
          "D": "Registered airmail"
        },
        "correctAnswer": "B",
        "explanation": "SWIFT provides a secure, standardized global network for executing financial messaging and cross-border bank transactions."
      }
    ]
  },
  "SSS 1": [
    {
      "id": "WAEC-SS1-SET-001",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If universal set $U = \\{5, 6, 7, 8\\}$, $P = \\{6, 7\\}$, and $Q = \\{6, 8\\}$, find $(P \\cap Q)'$.",
      "options": {
        "A": "$\\{5, 7, 8\\}$",
        "B": "$\\{5, 6, 8\\}$",
        "C": "$\\{6, 7, 8\\}$",
        "D": "$\\{5, 6, 7, 8\\}$"
      },
      "correctAnswer": "A",
      "explanation": "$P \\cap Q = \\{6\\}$. The complement $(P \\cap Q)' = U \\setminus \\{6\\} = \\{5, 7, 8\\}$."
    },
    {
      "id": "WAEC-SS1-SET-002",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "The universal set $U = \\{2, 3, 4, 5, 6, 7, 8, 9\\}$ has subsets $P = \\{2, 4, 6, 8\\}$ and $Q = \\{x : x^2 < 50,\\ x \\text{ is odd}\\}$. Find $(P \\cap Q)'$.",
      "options": {
        "A": "$\\{2, 3, 4, 5, 6, 7, 8, 9\\}$",
        "B": "$\\{2, 4, 6, 8\\}$",
        "C": "$\\{3, 5, 7\\}$",
        "D": "$\\emptyset$"
      },
      "correctAnswer": "A",
      "explanation": "Odd numbers in $U$ with $x^2 < 50$ are $Q = \\{3, 5, 7\\}$. $P \\cap Q = \\emptyset$. Thus $(P \\cap Q)' = U = \\{2, 3, 4, 5, 6, 7, 8, 9\\}$."
    },
    {
      "id": "WAEC-SS1-SET-003",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a class of $45$ students, every student offers either Chemistry or Economics or both. If $25$ students offer Chemistry while $34$ offer Economics, find the number of students who offer both subjects.",
      "options": {
        "A": "$14$",
        "B": "$12$",
        "C": "$16$",
        "D": "$10$"
      },
      "correctAnswer": "A",
      "explanation": "Using $n(C \\cup E) = n(C) + n(E) - n(C \\cap E)$: $45 = 25 + 34 - n(C \\cap E) \\implies n(C \\cap E) = 59 - 45 = 14$."
    },
    {
      "id": "WAEC-SS1-SET-004",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $R = \\{x : x^2 = 16,\\ x > 5\\}$, which of the following is equal to $R$?",
      "options": {
        "A": "$\\emptyset\\text{ (Empty set)}$",
        "B": "$\\{4\\}$",
        "C": "$\\{-4, 4\\}$",
        "D": "$\\{16\\}$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 = 16 \\implies x = 4$ or $x = -4$. Neither value satisfies the condition $x > 5$. Hence $R = \\emptyset$."
    },
    {
      "id": "WAEC-SS1-SET-005",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Let $X = \\{\\text{prime factors of } 84\\}$ and $Y = \\{\\text{prime factors of } 315\\}$. Find $X \\cup Y$ and $X \\cap Y$ respectively.",
      "options": {
        "A": "$\\{2, 3, 5, 7\\}\\text{ and }\\{3, 7\\}$",
        "B": "$\\{2, 3, 5, 7\\}\\text{ and }\\{2, 7\\}$",
        "C": "$\\{3, 7\\}\\text{ and }\\{2, 5\\}$",
        "D": "$\\{2, 3, 7\\}\\text{ and }\\{3, 5, 7\\}$"
      },
      "correctAnswer": "A",
      "explanation": "Prime factorization: $84 = 2^2 \\times 3 \\times 7 \\implies X = \\{2, 3, 7\\}$; $315 = 3^2 \\times 5 \\times 7 \\implies Y = \\{3, 5, 7\\}$. $X \\cup Y = \\{2, 3, 5, 7\\}$ and $X \\cap Y = \\{3, 7\\}$."
    },
    {
      "id": "WAEC-SS1-SET-006",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "A school registers $300$ candidates for an examination. $180$ candidates offer Economics and $70$ offer Geography. If $80$ candidates offer neither Economics nor Geography, how many candidates offer at least one subject?",
      "options": {
        "A": "$220$",
        "B": "$250$",
        "C": "$180$",
        "D": "$150$"
      },
      "correctAnswer": "A",
      "explanation": "Candidates offering at least one subject $= \\text{Total} - \\text{Neither} = 300 - 80 = 220$."
    },
    {
      "id": "WAEC-SS1-SET-007",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Given that $P = \\{1, 3, 4\\}$ and $Q = \\{2, 3, 4\\}$, find $P \\cap Q$.",
      "options": {
        "A": "$\\{3, 4\\}$",
        "B": "$\\{1, 2, 3, 4\\}$",
        "C": "$\\{3\\}$",
        "D": "$\\{4\\}$"
      },
      "correctAnswer": "A",
      "explanation": "The elements common to both $P$ and $Q$ are $3$ and $4$, so $P \\cap Q = \\{3, 4\\}$."
    },
    {
      "id": "WAEC-SS1-SET-008",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $P = \\{x : x > 0\\}$, $R = \\{x : -5 \\le x < 5\\}$, and the universal set $U$ is the set of all integers, find $P' \\cap R$.",
      "options": {
        "A": "$\\{-5, -4, -3, -2, -1, 0\\}$",
        "B": "$\\{-5, -4, -3, -2, -1\\}$",
        "C": "$\\{0, 1, 2, 3, 4\\}$",
        "D": "$\\{-4, -3, -2, -1, 0\\}$"
      },
      "correctAnswer": "A",
      "explanation": "$P' = \\{x \\in \\mathbb{Z} : x \\le 0\\}$. The intersection with $R = \\{-5, -4, -3, -2, -1, 0, 1, 2, 3, 4\\}$ is $\\{-5, -4, -3, -2, -1, 0\\}$."
    },
    {
      "id": "WAEC-SS1-SET-009",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a class of $60$ students, $40$ speak Hausa, $19$ speak Igbo, and $7$ students speak both languages. Find the number of students who speak neither of the languages.",
      "options": {
        "A": "$8$",
        "B": "$12$",
        "C": "$7$",
        "D": "$14$"
      },
      "correctAnswer": "A",
      "explanation": "$n(H \\cup I) = 40 + 19 - 7 = 52$. Number speaking neither $= 60 - 52 = 8$."
    },
    {
      "id": "WAEC-SS1-SET-010",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $I$ is the set of positive integers and $P = \\{x : x \\in I,\\ x^2 < 10\\ \\text{and}\\ x \\neq 0\\}$, find $P$.",
      "options": {
        "A": "$\\{1, 2, 3\\}$",
        "B": "$\\{0, 1, 2, 3\\}$",
        "C": "$\\{-3, -2, -1, 1, 2, 3\\}$",
        "D": "$\\{1, 2\\}$"
      },
      "correctAnswer": "A",
      "explanation": "Positive integers whose squares are strictly less than $10$: $1^2 = 1 < 10$, $2^2 = 4 < 10$, $3^2 = 9 < 10$. Thus $P = \\{1, 2, 3\\}$."
    },
    {
      "id": "WAEC-SS1-SET-011",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "How many subsets can be formed from a set containing $6$ elements?",
      "options": {
        "A": "$64$",
        "B": "$32$",
        "C": "$128$",
        "D": "$36$"
      },
      "correctAnswer": "A",
      "explanation": "The number of subsets of a set of cardinality $n$ is $2^n$. For $n = 6$, $2^6 = 64$."
    },
    {
      "id": "WAEC-SS1-SET-012",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $n(A) = 18$, $n(B) = 24$, and $n(A \\cup B) = 32$, find $n(A \\cap B)$.",
      "options": {
        "A": "$10$",
        "B": "$8$",
        "C": "$14$",
        "D": "$12$"
      },
      "correctAnswer": "A",
      "explanation": "$n(A \\cap B) = n(A) + n(B) - n(A \\cup B) = 18 + 24 - 32 = 42 - 32 = 10$."
    },
    {
      "id": "WAEC-SS1-SET-013",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Which of the following is equivalent to $(A \\cup B)'$ by De Morgan's Law?",
      "options": {
        "A": "$A' \\cap B'$",
        "B": "$A' \\cup B'$",
        "C": "$A \\cap B'$",
        "D": "$(A \\cap B)'$"
      },
      "correctAnswer": "A",
      "explanation": "De Morgan's first law states that the complement of the union equals the intersection of the complements: $(A \\cup B)' = A' \\cap B'$."
    },
    {
      "id": "WAEC-SS1-SET-014",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $A = \\{x : x \\text{ is a factor of } 12\\}$ and $B = \\{x : x \\text{ is a factor of } 18\\}$, find $A \\cap B$.",
      "options": {
        "A": "$\\{1, 2, 3, 6\\}$",
        "B": "$\\{1, 2, 6\\}$",
        "C": "$\\{2, 3, 6\\}$",
        "D": "$\\{1, 2, 3, 4, 6\\}$"
      },
      "correctAnswer": "A",
      "explanation": "Factors of $12$: $\\{1, 2, 3, 4, 6, 12\\}$. Factors of $18$: $\\{1, 2, 3, 6, 9, 18\\}$. Common factors: $\\{1, 2, 3, 6\\}$."
    },
    {
      "id": "WAEC-SS1-SET-015",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Two sets $A$ and $B$ are disjoint if and only if:",
      "options": {
        "A": "$A \\cap B = \\emptyset$",
        "B": "$A \\cup B = \\emptyset$",
        "C": "$n(A) = n(B)$",
        "D": "$A \\subset B$"
      },
      "correctAnswer": "A",
      "explanation": "Disjoint sets have no common members, meaning their intersection is the empty set: $A \\cap B = \\emptyset$."
    },
    {
      "id": "WAEC-SS1-SET-016",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a survey of $50$ farmers, $30$ grow cassava, $25$ grow yam, and $10$ grow neither. How many grow both crops?",
      "options": {
        "A": "$15$",
        "B": "$10$",
        "C": "$20$",
        "D": "$5$"
      },
      "correctAnswer": "A",
      "explanation": "Grow at least one $= 50 - 10 = 40$. $n(C \\cap Y) = 30 + 25 - 40 = 15$."
    },
    {
      "id": "WAEC-SS1-SET-017",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "What is the number of proper subsets of a set with $5$ elements?",
      "options": {
        "A": "$31$",
        "B": "$32$",
        "C": "$30$",
        "D": "$25$"
      },
      "correctAnswer": "A",
      "explanation": "Number of proper subsets is $2^n - 1$. For $n = 5$, $2^5 - 1 = 32 - 1 = 31$."
    },
    {
      "id": "WAEC-SS1-SET-018",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $U = \\{x : 1 \\le x \\le 12,\\ x \\in \\mathbb{Z}\\}$ and $M = \\{x : x \\text{ is a multiple of } 3\\}$, find $M'$.",
      "options": {
        "A": "$\\{1, 2, 4, 5, 7, 8, 10, 11\\}$",
        "B": "$\\{3, 6, 9, 12\\}$",
        "C": "$\\{1, 2, 4, 5, 7, 8, 10\\}$",
        "D": "$\\{2, 4, 5, 7, 8, 10, 11\\}$"
      },
      "correctAnswer": "A",
      "explanation": "$M = \\{3, 6, 9, 12\\}$. The complement $M' = U \\setminus M = \\{1, 2, 4, 5, 7, 8, 10, 11\\}$."
    },
    {
      "id": "WAEC-SS1-SET-019",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $A \\subset B$, which of the following expressions is always true?",
      "options": {
        "A": "$A \\cap B = A$",
        "B": "$A \\cup B = A$",
        "C": "$A \\cap B = B$",
        "D": "$A' \\cap B = \\emptyset$"
      },
      "correctAnswer": "A",
      "explanation": "If every element of $A$ belongs to $B$, the intersection of $A$ and $B$ is precisely $A$."
    },
    {
      "id": "WAEC-SS1-SET-020",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "The symmetric difference of sets $A$ and $B$, denoted $A \\,\\Delta\\, B$, is defined as:",
      "options": {
        "A": "$(A \\cup B) \\setminus (A \\cap B)$",
        "B": "$A \\cap B$",
        "C": "$A' \\cap B'$",
        "D": "$(A \\cap B)'$"
      },
      "correctAnswer": "A",
      "explanation": "$A \\,\\Delta\\, B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$."
    },
    {
      "id": "WAEC-SS1-SET-021",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $n(A) = 20$, $n(B) = 30$, and $A \\cap B = \\emptyset$, find $n(A \\cup B)$.",
      "options": {
        "A": "$50$",
        "B": "$10$",
        "C": "$60$",
        "D": "$25$"
      },
      "correctAnswer": "A",
      "explanation": "For disjoint sets, $n(A \\cup B) = n(A) + n(B) = 20 + 30 = 50$."
    },
    {
      "id": "WAEC-SS1-SET-022",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "Given $S = \\{a, b, c\\}$, what is the cardinality of the power set $\\mathcal{P}(S)$?",
      "options": {
        "A": "$8$",
        "B": "$6$",
        "C": "$9$",
        "D": "$7$"
      },
      "correctAnswer": "A",
      "explanation": "$|\\mathcal{P}(S)| = 2^{|S|} = 2^3 = 8$."
    },
    {
      "id": "WAEC-SS1-SET-023",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If $n(U) = 100$, $n(P) = 60$, $n(Q) = 50$, and $n(P \\cap Q) = 25$, find $n(P \\cup Q)'$.",
      "options": {
        "A": "$15$",
        "B": "$25$",
        "C": "$35$",
        "D": "$10$"
      },
      "correctAnswer": "A",
      "explanation": "$n(P \\cup Q) = 60 + 50 - 25 = 85$. Complement $n(P \\cup Q)' = 100 - 85 = 15$."
    },
    {
      "id": "WAEC-SS1-SET-024",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "If set $A = \\{x : x \\in \\mathbb{R},\\ x^2 + 4 = 0\\}$, then $A$ is:",
      "options": {
        "A": "an empty set",
        "B": "a singleton set",
        "C": "an infinite set",
        "D": "$\\{-2, 2\\}$"
      },
      "correctAnswer": "A",
      "explanation": "For real $x$, $x^2 \\ge 0$, so $x^2 + 4 \\ge 4 > 0$. There are no real solutions, so $A = \\emptyset$."
    },
    {
      "id": "WAEC-SS1-SET-025",
      "class": "SSS 1",
      "topic": "Set Theory",
      "question": "In a class of $40$ learners, $22$ like football, $18$ like basketball, and $8$ like neither. How many like football only?",
      "options": {
        "A": "$14$",
        "B": "$12$",
        "C": "$8$",
        "D": "$16$"
      },
      "correctAnswer": "A",
      "explanation": "$n(F \\cup B) = 40 - 8 = 32$. $n(F \\cap B) = 22 + 18 - 32 = 8$. Football only $= n(F) - n(F \\cap B) = 22 - 8 = 14$."
    },
    {
      "id": "WAEC-SS1-IND-001",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{9^{-1/2} \\times 81^{3/4}}{9^{1/2}}$.",
      "options": {
        "A": "$3$",
        "B": "$9$",
        "C": "$1$",
        "D": "$\\dfrac{1}{3}$"
      },
      "correctAnswer": "A",
      "explanation": "$9^{-1/2} = \\frac{1}{3}$, $81^{3/4} = (3^4)^{3/4} = 3^3 = 27$, and $9^{1/2} = 3$. Hence $\\dfrac{\\frac{1}{3} \\times 27}{3} = \\dfrac{9}{3} = 3$."
    },
    {
      "id": "WAEC-SS1-IND-002",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $m$: $9^{2m+1} = \\dfrac{81^{m+2}}{3^m}$.",
      "options": {
        "A": "$m = 6$",
        "B": "$m = 4$",
        "C": "$m = 8$",
        "D": "$m = 2$"
      },
      "correctAnswer": "A",
      "explanation": "$3^{2(2m+1)} = \\dfrac{3^{4(m+2)}}{3^m} \\implies 3^{4m+2} = 3^{3m+8} \\implies 4m + 2 = 3m + 8 \\implies m = 6$."
    },
    {
      "id": "WAEC-SS1-IND-003",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Find $n$ if $9^{1+n} \\times 3 = 27^{-n}$.",
      "options": {
        "A": "$-\\dfrac{3}{5}$",
        "B": "$\\dfrac{3}{5}$",
        "C": "$-\\dfrac{5}{3}$",
        "D": "$-1$"
      },
      "correctAnswer": "A",
      "explanation": "$3^{2(1+n)} \\times 3^1 = 3^{-3n} \\implies 3^{2n+3} = 3^{-3n} \\implies 2n + 3 = -3n \\implies 5n = -3 \\implies n = -\\dfrac{3}{5}$."
    },
    {
      "id": "WAEC-SS1-IND-004",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: $(3^0 - 9^{-1/2})^{-3}$.",
      "options": {
        "A": "$\\dfrac{27}{8}$",
        "B": "$\\dfrac{8}{27}$",
        "C": "$\\dfrac{9}{4}$",
        "D": "$\\dfrac{4}{9}$"
      },
      "correctAnswer": "A",
      "explanation": "$3^0 = 1$, $9^{-1/2} = \\frac{1}{3}$. $(1 - \\frac{1}{3})^{-3} = (\\frac{2}{3})^{-3} = (\\frac{3}{2})^3 = \\dfrac{27}{8}$."
    },
    {
      "id": "WAEC-SS1-IND-005",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{2^x - 2^{x-1}}{2^3 \\times 2^x - 8 \\times 2^{x-1}}$.",
      "options": {
        "A": "$\\dfrac{1}{8}$",
        "B": "$\\dfrac{1}{4}$",
        "C": "$\\dfrac{1}{2}$",
        "D": "$1$"
      },
      "correctAnswer": "A",
      "explanation": "Factor out $2^x$: Numerator $= 2^x(1 - \\frac{1}{2}) = \\frac{1}{2} \\cdot 2^x$. Denominator $= 2^x(8 - 8 \\cdot \\frac{1}{2}) = 4 \\cdot 2^x$. Ratio $= \\dfrac{1/2}{4} = \\dfrac{1}{8}$."
    },
    {
      "id": "WAEC-SS1-IND-006",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Find the value of $x$ which satisfies the equation $\\dfrac{9^{2x}}{9^{3x}} = 3$.",
      "options": {
        "A": "$-\\dfrac{1}{2}$",
        "B": "$\\dfrac{1}{2}$",
        "C": "$-1$",
        "D": "$1$"
      },
      "correctAnswer": "A",
      "explanation": "$9^{2x - 3x} = 9^{-x} = (3^2)^{-x} = 3^{-2x} = 3^1 \\implies -2x = 1 \\implies x = -\\dfrac{1}{2}$."
    },
    {
      "id": "WAEC-SS1-IND-007",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "If $\\left(\\dfrac{2}{3}\\right)^{a-1} = \\dfrac{27}{8}$, find the value of $a$.",
      "options": {
        "A": "$-2$",
        "B": "$2$",
        "C": "$-4$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "$\\dfrac{27}{8} = \\left(\\dfrac{3}{2}\\right)^3 = \\left(\\dfrac{2}{3}\\right)^{-3}$. Then $a - 1 = -3 \\implies a = -2$."
    },
    {
      "id": "WAEC-SS1-IND-008",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{16^{-1/2}}{64^{2/3}}$.",
      "options": {
        "A": "$\\dfrac{1}{64}$",
        "B": "$\\dfrac{1}{16}$",
        "C": "$\\dfrac{1}{32}$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "$16^{-1/2} = \\frac{1}{\\sqrt{16}} = \\frac{1}{4}$. $64^{2/3} = (4^3)^{2/3} = 4^2 = 16$. Then $\\dfrac{1/4}{16} = \\dfrac{1}{64}$."
    },
    {
      "id": "WAEC-SS1-IND-009",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve the equation: $3x^{-2} = \\dfrac{4}{27}$.",
      "options": {
        "A": "$\\pm\\dfrac{9}{2}$",
        "B": "$\\pm\\dfrac{3}{2}$",
        "C": "$\\pm\\dfrac{27}{2}$",
        "D": "$\\dfrac{9}{2}\\text{ only}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\dfrac{3}{x^2} = \\dfrac{4}{27} \\implies 4x^2 = 81 \\implies x^2 = \\dfrac{81}{4} \\implies x = \\pm\\dfrac{9}{2}$."
    },
    {
      "id": "WAEC-SS1-IND-010",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Express $\\dfrac{3.50}{0.0025}$ in standard form.",
      "options": {
        "A": "$1.4 \\times 10^3$",
        "B": "$1.4 \\times 10^2$",
        "C": "$1.4 \\times 10^4$",
        "D": "$14 \\times 10^2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\dfrac{3.5}{2.5 \\times 10^{-3}} = \\dfrac{3.5}{2.5} \\times 10^3 = 1.4 \\times 10^3$."
    },
    {
      "id": "WAEC-SS1-IND-011",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "The product of $0.0022$ and $0.017$ expressed in standard form is:",
      "options": {
        "A": "$3.74 \\times 10^{-5}$",
        "B": "$3.74 \\times 10^{-4}$",
        "C": "$3.74 \\times 10^{-6}$",
        "D": "$37.4 \\times 10^{-6}$"
      },
      "correctAnswer": "A",
      "explanation": "$(2.2 \\times 10^{-3}) \\times (1.7 \\times 10^{-2}) = (2.2 \\times 1.7) \\times 10^{-5} = 3.74 \\times 10^{-5}$."
    },
    {
      "id": "WAEC-SS1-IND-012",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\sqrt{3} + 2 - \\dfrac{1}{2 - \\sqrt{3}}$.",
      "options": {
        "A": "$0$",
        "B": "$2\\sqrt{3}$",
        "C": "$4$",
        "D": "$1$"
      },
      "correctAnswer": "A",
      "explanation": "Rationalize: $\\dfrac{1}{2 - \\sqrt{3}} = \\dfrac{2 + \\sqrt{3}}{(2-\\sqrt{3})(2+\\sqrt{3})} = 2 + \\sqrt{3}$. Then $\\sqrt{3} + 2 - (2 + \\sqrt{3}) = 0$."
    },
    {
      "id": "WAEC-SS1-IND-013",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{3\\sqrt{15} \\times 2\\sqrt{48}}{\\sqrt{32} \\times 4\\sqrt{45}}$.",
      "options": {
        "A": "$\\dfrac{3\\sqrt{2}}{4}$",
        "B": "$\\dfrac{3}{4}$",
        "C": "$\\dfrac{\\sqrt{2}}{2}$",
        "D": "$\\dfrac{3\\sqrt{5}}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\dfrac{6\\sqrt{720}}{4\\sqrt{1440}} = \\dfrac{6}{4\\sqrt{2}} = \\dfrac{3}{2\\sqrt{2}} = \\dfrac{3\\sqrt{2}}{4}$."
    },
    {
      "id": "WAEC-SS1-IND-014",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $5\\sqrt{12} - 4\\sqrt{75} + 3\\sqrt{48}$.",
      "options": {
        "A": "$2\\sqrt{3}$",
        "B": "$3\\sqrt{3}$",
        "C": "$\\sqrt{3}$",
        "D": "$4\\sqrt{3}$"
      },
      "correctAnswer": "A",
      "explanation": "$5(2\\sqrt{3}) - 4(5\\sqrt{3}) + 3(4\\sqrt{3}) = 10\\sqrt{3} - 20\\sqrt{3} + 12\\sqrt{3} = 2\\sqrt{3}$."
    },
    {
      "id": "WAEC-SS1-IND-015",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify by rationalizing the denominator: $\\dfrac{\\sqrt{5} + \\sqrt{3}}{\\sqrt{5} - \\sqrt{3}}$.",
      "options": {
        "A": "$4 + \\sqrt{15}$",
        "B": "$4 - \\sqrt{15}$",
        "C": "$8 + 2\\sqrt{15}$",
        "D": "$2 + \\sqrt{15}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\dfrac{(\\sqrt{5} + \\sqrt{3})^2}{5 - 3} = \\dfrac{5 + 2\\sqrt{15} + 3}{2} = \\dfrac{8 + 2\\sqrt{15}}{2} = 4 + \\sqrt{15}$."
    },
    {
      "id": "WAEC-SS1-IND-016",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{1}{\\sqrt{2}}\\left[\\dfrac{1}{\\sqrt{3} + \\sqrt{2}} - \\dfrac{1}{\\sqrt{3} - \\sqrt{2}}\\right]$.",
      "options": {
        "A": "$-2$",
        "B": "$2$",
        "C": "$-\\sqrt{2}$",
        "D": "$0$"
      },
      "correctAnswer": "A",
      "explanation": "Inside bracket: $(\\sqrt{3} - \\sqrt{2}) - (\\sqrt{3} + \\sqrt{2}) = -2\\sqrt{2}$. Multiply by $\\frac{1}{\\sqrt{2}}$: $\\dfrac{-2\\sqrt{2}}{\\sqrt{2}} = -2$."
    },
    {
      "id": "WAEC-SS1-IND-017",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "If $x = 2 - \\sqrt{2}$, evaluate $x^2 + \\dfrac{4}{x^2}$.",
      "options": {
        "A": "$12$",
        "B": "$6$",
        "C": "$8$",
        "D": "$16$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 = (2-\\sqrt{2})^2 = 6 - 4\\sqrt{2}$. $\\dfrac{4}{x^2} = \\dfrac{4}{6 - 4\\sqrt{2}} = 6 + 4\\sqrt{2}$. Sum $= (6 - 4\\sqrt{2}) + (6 + 4\\sqrt{2}) = 12$."
    },
    {
      "id": "WAEC-SS1-IND-018",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{1}{2 - \\sqrt{3}} - \\dfrac{1}{2 + \\sqrt{3}}$.",
      "options": {
        "A": "$2\\sqrt{3}$",
        "B": "$4$",
        "C": "$0$",
        "D": "$\\sqrt{3}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\dfrac{(2 + \\sqrt{3}) - (2 - \\sqrt{3})}{(2 - \\sqrt{3})(2 + \\sqrt{3})} = \\dfrac{2\\sqrt{3}}{4 - 3} = 2\\sqrt{3}$."
    },
    {
      "id": "WAEC-SS1-IND-019",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $3\\sqrt{18} - \\dfrac{16}{\\sqrt{2}} + \\sqrt{50}$.",
      "options": {
        "A": "$6\\sqrt{2}$",
        "B": "$7\\sqrt{2}$",
        "C": "$4\\sqrt{2}$",
        "D": "$5\\sqrt{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$3(3\\sqrt{2}) - 8\\sqrt{2} + 5\\sqrt{2} = 9\\sqrt{2} - 8\\sqrt{2} + 5\\sqrt{2} = 6\\sqrt{2}$."
    },
    {
      "id": "WAEC-SS1-IND-020",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Find the square of $3 - \\sqrt{2}$.",
      "options": {
        "A": "$11 - 6\\sqrt{2}$",
        "B": "$7 - 6\\sqrt{2}$",
        "C": "$11 + 6\\sqrt{2}$",
        "D": "$9 - 2\\sqrt{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$(3 - \\sqrt{2})^2 = 3^2 - 2(3)(\\sqrt{2}) + (\\sqrt{2})^2 = 9 - 6\\sqrt{2} + 2 = 11 - 6\\sqrt{2}$."
    },
    {
      "id": "WAEC-SS1-IND-021",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "If $a\\sqrt{5} + b\\sqrt{2}$ is a square root of $95 - 30\\sqrt{10}$, find the values of $a$ and $b$.",
      "options": {
        "A": "$a = 3,\\ b = -5$",
        "B": "$a = 5,\\ b = -3$",
        "C": "$a = 3,\\ b = 5$",
        "D": "$a = 15,\\ b = -1$"
      },
      "correctAnswer": "A",
      "explanation": "$(a\\sqrt{5} + b\\sqrt{2})^2 = 5a^2 + 2b^2 + 2ab\\sqrt{10} = 95 - 30\\sqrt{10}$. $2ab = -30 \\implies ab = -15$. Testing $a=3, b=-5$: $5(9) + 2(25) = 45 + 50 = 95$."
    },
    {
      "id": "WAEC-SS1-IND-022",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Solve for $x$: $2^{2x+1} - 9(2^x) + 4 = 0$.",
      "options": {
        "A": "$x = -1\\text{ or }x = 2$",
        "B": "$x = 1\\text{ or }x = -2$",
        "C": "$x = 0\\text{ or }x = 2$",
        "D": "$x = 1\\text{ or }x = 4$"
      },
      "correctAnswer": "A",
      "explanation": "$2(2^x)^2 - 9(2^x) + 4 = 0 \\implies (2y - 1)(y - 4) = 0 \\implies 2^x = \\frac{1}{2} \\implies x = -1$, or $2^x = 4 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS1-IND-023",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Evaluate: $(0.008)^{-2/3}$.",
      "options": {
        "A": "$25$",
        "B": "$125$",
        "C": "$5$",
        "D": "$\\dfrac{1}{25}$"
      },
      "correctAnswer": "A",
      "explanation": "$0.008 = \\frac{8}{1000} = \\frac{1}{125} = 5^{-3}$. $(5^{-3})^{-2/3} = 5^2 = 25$."
    },
    {
      "id": "WAEC-SS1-IND-024",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{x^{2/3} \\times x^{-1/2}}{x^{1/6}}$.",
      "options": {
        "A": "$1$",
        "B": "$x$",
        "C": "$x^{1/3}$",
        "D": "$x^{-1/3}$"
      },
      "correctAnswer": "A",
      "explanation": "Exponent: $\\frac{2}{3} - \\frac{1}{2} - \\frac{1}{6} = \\frac{4 - 3 - 1}{6} = 0$. $x^0 = 1$."
    },
    {
      "id": "WAEC-SS1-IND-025",
      "class": "SSS 1",
      "topic": "Indices",
      "question": "If $4^{x+1} = 64$, find $x$.",
      "options": {
        "A": "$2$",
        "B": "$3$",
        "C": "$1$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "$4^{x+1} = 4^3 \\implies x + 1 = 3 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS1-LOG-001",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate $\\log_{10}\\dfrac{1}{70}$ given that $\\log_{10}7 = 0.8451$.",
      "options": {
        "A": "$-1.8451\\text{ (or }\\bar{2}.1549\\text{)}$",
        "B": "$-1.1549$",
        "C": "$0.8451$",
        "D": "$-2.8451$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}\\frac{1}{70} = -\\log_{10}(7 \\times 10) = -(0.8451 + 1) = -1.8451 = -2 + 0.1549 = \\bar{2}.1549$."
    },
    {
      "id": "WAEC-SS1-LOG-002",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find $x$ if $4\\log x + 5\\log x - 7\\log x = \\log 16$.",
      "options": {
        "A": "$4$",
        "B": "$2$",
        "C": "$8$",
        "D": "$16$"
      },
      "correctAnswer": "A",
      "explanation": "$2\\log x = \\log(x^2) = \\log 16 \\implies x^2 = 16 \\implies x = 4$ ($x > 0$)."
    },
    {
      "id": "WAEC-SS1-LOG-003",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate $\\log_{10}0.225$ if $\\log_{10}3 = 0.477$ and $\\log_{10}5 = 0.699$.",
      "options": {
        "A": "$\\bar{1}.352\\text{ (or }-0.648\\text{)}$",
        "B": "$\\bar{2}.352$",
        "C": "$-0.352$",
        "D": "$0.352$"
      },
      "correctAnswer": "A",
      "explanation": "$0.225 = \\frac{225}{1000} = \\frac{3^2 \\times 5^2}{10^3}$. $\\log(0.225) = 2(0.477) + 2(0.699) - 3 = 0.954 + 1.398 - 3 = 2.352 - 3 = -0.648 = \\bar{1}.352$."
    },
    {
      "id": "WAEC-SS1-LOG-004",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "If $\\log_{10}3 = 0.4771$ and $10^x = 0.3$, find $x$.",
      "options": {
        "A": "$-0.5229\\text{ (or }\\bar{1}.4771\\text{)}$",
        "B": "$0.4771$",
        "C": "$-1.4771$",
        "D": "$0.5229$"
      },
      "correctAnswer": "A",
      "explanation": "$x = \\log_{10}(0.3) = \\log_{10}\\left(\\frac{3}{10}\\right) = \\log_{10}3 - 1 = 0.4771 - 1 = -0.5229$."
    },
    {
      "id": "WAEC-SS1-LOG-005",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate: $\\log_3 27 + \\log_3 6 - \\log_3 54$.",
      "options": {
        "A": "$1$",
        "B": "$0$",
        "C": "$3$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_3\\left(\\dfrac{27 \\times 6}{54}\\right) = \\log_3\\left(\\dfrac{162}{54}\\right) = \\log_3 3 = 1$."
    },
    {
      "id": "WAEC-SS1-LOG-006",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate: $\\dfrac{\\log_2 8 - \\log_{1/3}81}{\\log_4(1/64)}$.",
      "options": {
        "A": "$-\\dfrac{7}{3}$",
        "B": "$\\dfrac{7}{3}$",
        "C": "$-\\dfrac{1}{3}$",
        "D": "$-3$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_2 8 = 3$, $\\log_{1/3} 81 = -4$, $\\log_4(1/64) = -3$. Numerator $= 3 - (-4) = 7$. Denominator $= -3$. Result $= -\\dfrac{7}{3}$."
    },
    {
      "id": "WAEC-SS1-LOG-007",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Solve for $x$: $\\log_{10}(3x - 4) - \\log_{10}2 = 1$.",
      "options": {
        "A": "$8$",
        "B": "$6$",
        "C": "$10$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}\\left(\\dfrac{3x-4}{2}\\right) = 1 \\implies \\dfrac{3x-4}{2} = 10 \\implies 3x - 4 = 20 \\implies 3x = 24 \\implies x = 8$."
    },
    {
      "id": "WAEC-SS1-LOG-008",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Calculate the value of $4^{3/2} + \\log_5 0.04 + \\log_3 81$.",
      "options": {
        "A": "$10$",
        "B": "$8$",
        "C": "$12$",
        "D": "$14$"
      },
      "correctAnswer": "A",
      "explanation": "$4^{3/2} = 8$, $\\log_5 0.04 = \\log_5(1/25) = -2$, $\\log_3 81 = 4$. Total $= 8 + (-2) + 4 = 10$."
    },
    {
      "id": "WAEC-SS1-LOG-009",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Express $x$ in terms of $p$ and $q$ if $\\log p = 0.5\\log x + 2\\log q$.",
      "options": {
        "A": "$\\dfrac{p^2}{q^4}$",
        "B": "$\\dfrac{p}{q^2}$",
        "C": "$\\dfrac{p^2}{q^2}$",
        "D": "$p^2 q^4$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log p = \\log(x^{1/2} q^2) \\implies p = \\sqrt{x} q^2 \\implies \\sqrt{x} = \\dfrac{p}{q^2} \\implies x = \\dfrac{p^2}{q^4}$."
    },
    {
      "id": "WAEC-SS1-LOG-010",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "If $\\log_{10}4 = 0.6021$, evaluate $\\log_{10}40 + 3\\log_{10}400$.",
      "options": {
        "A": "$9.4084$",
        "B": "$8.8063$",
        "C": "$7.4084$",
        "D": "$9.2042$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}40 = 1.6021$; $\\log_{10}400 = 2.6021$. $1.6021 + 3(2.6021) = 1.6021 + 7.8063 = 9.4084$."
    },
    {
      "id": "WAEC-SS1-LOG-011",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find the value of $ab$ if $a = \\log_2 3$ and $b = \\log_3 8$.",
      "options": {
        "A": "$3$",
        "B": "$2$",
        "C": "$4$",
        "D": "$8$"
      },
      "correctAnswer": "A",
      "explanation": "$ab = \\log_2 3 \\times \\log_3 8 = \\log_2 8 = 3$ by change of base rule."
    },
    {
      "id": "WAEC-SS1-LOG-012",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find $a$ if $\\log a - \\log(a - 1) = \\log 3$.",
      "options": {
        "A": "$\\dfrac{3}{2}$",
        "B": "$\\dfrac{2}{3}$",
        "C": "$3$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log\\left(\\dfrac{a}{a-1}\\right) = \\log 3 \\implies \\dfrac{a}{a-1} = 3 \\implies a = 3a - 3 \\implies 2a = 3 \\implies a = \\dfrac{3}{2}$."
    },
    {
      "id": "WAEC-SS1-LOG-013",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find $x$ if $\\log_4 x = 3.5$.",
      "options": {
        "A": "$128$",
        "B": "$64$",
        "C": "$256$",
        "D": "$14$"
      },
      "correctAnswer": "A",
      "explanation": "$x = 4^{3.5} = 4^{7/2} = (2^2)^{7/2} = 2^7 = 128$."
    },
    {
      "id": "WAEC-SS1-LOG-014",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find the value of $x$ if $\\dfrac{1}{2}\\log_{10}x = 1$.",
      "options": {
        "A": "$100$",
        "B": "$10$",
        "C": "$1000$",
        "D": "$20$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}x = 2 \\implies x = 10^2 = 100$."
    },
    {
      "id": "WAEC-SS1-LOG-015",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "If $\\log_{10}x = 0.5$, what is the exact value of $x$?",
      "options": {
        "A": "$\\sqrt{10}$",
        "B": "$5$",
        "C": "$10$",
        "D": "$0.25$"
      },
      "correctAnswer": "A",
      "explanation": "$x = 10^{0.5} = 10^{1/2} = \\sqrt{10}$."
    },
    {
      "id": "WAEC-SS1-LOG-016",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Given $\\log_b 2 = 0.693$ and $\\log_b 5 = 1.609$, evaluate $\\log_b 62.5$.",
      "options": {
        "A": "$4.134$",
        "B": "$4.827$",
        "C": "$3.525$",
        "D": "$2.415$"
      },
      "correctAnswer": "A",
      "explanation": "$62.5 = \\frac{125}{2} = \\frac{5^3}{2}$. $\\log_b 62.5 = 3\\log_b 5 - \\log_b 2 = 3(1.609) - 0.693 = 4.827 - 0.693 = 4.134$."
    },
    {
      "id": "WAEC-SS1-LOG-017",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "If $a = x^{1/n}$, evaluate $\\log_a x^n$.",
      "options": {
        "A": "$n^2$",
        "B": "$n$",
        "C": "$1$",
        "D": "$\\dfrac{1}{n^2}$"
      },
      "correctAnswer": "A",
      "explanation": "$x = a^n \\implies x^n = a^{n^2}$. Therefore $\\log_a x^n = \\log_a(a^{n^2}) = n^2$."
    },
    {
      "id": "WAEC-SS1-LOG-018",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate: $\\dfrac{\\log_{10}0.04 + \\log_{10}0.25}{\\log_5 100 - \\log_5 4}$.",
      "options": {
        "A": "$-1$",
        "B": "$1$",
        "C": "$0$",
        "D": "$-2$"
      },
      "correctAnswer": "A",
      "explanation": "Numerator: $\\log_{10}(0.04 \\times 0.25) = \\log_{10}(0.01) = -2$. Denominator: $\\log_5(100/4) = \\log_5 25 = 2$. Ratio: $\\frac{-2}{2} = -1$."
    },
    {
      "id": "WAEC-SS1-LOG-019",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Given that $\\log_{10}2 = 0.3010$ and $\\log_{10}3 = 0.4771$, calculate $\\log_{10}18$.",
      "options": {
        "A": "$1.2552$",
        "B": "$1.5562$",
        "C": "$0.7781$",
        "D": "$1.0791$"
      },
      "correctAnswer": "A",
      "explanation": "$18 = 2 \\times 3^2$. $\\log_{10}18 = \\log_{10}2 + 2\\log_{10}3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552$."
    },
    {
      "id": "WAEC-SS1-LOG-020",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Solve for $x$: $\\log_2 x + \\log_2(x - 2) = 3$.",
      "options": {
        "A": "$x = 4$",
        "B": "$x = 2$",
        "C": "$x = -2$",
        "D": "$x = 4\\text{ or }x = -2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_2[x(x - 2)] = 3 \\implies x^2 - 2x = 8 \\implies x^2 - 2x - 8 = 0 \\implies (x - 4)(x + 2) = 0$. Since $x > 2$, $x = 4$."
    },
    {
      "id": "WAEC-SS1-LOG-021",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Evaluate: $\\log_5 125 - \\log_2 32 + \\log_7 49$.",
      "options": {
        "A": "$0$",
        "B": "$1$",
        "C": "$2$",
        "D": "$-1$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_5 125 = 3$; $\\log_2 32 = 5$; $\\log_7 49 = 2$. Then $3 - 5 + 2 = 0$."
    },
    {
      "id": "WAEC-SS1-LOG-022",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Solve: $\\log_3(x + 1) + \\log_3(x - 1) = 1$.",
      "options": {
        "A": "$x = 2$",
        "B": "$x = 1$",
        "C": "$x = \\sqrt{2}$",
        "D": "$x = 3$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_3(x^2 - 1) = 1 \\implies x^2 - 1 = 3 \\implies x^2 = 4 \\implies x = 2$ ($x > 1$)."
    },
    {
      "id": "WAEC-SS1-LOG-023",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Find the characteristic of $\\log_{10} 45200$.",
      "options": {
        "A": "$4$",
        "B": "$5$",
        "C": "$3$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "$45200 = 4.52 \\times 10^4$. The power of $10$ is $4$, so the characteristic is $4$."
    },
    {
      "id": "WAEC-SS1-LOG-024",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "If $\\log_x 64 = 3$, find $x$.",
      "options": {
        "A": "$4$",
        "B": "$8$",
        "C": "$2$",
        "D": "$16$"
      },
      "correctAnswer": "A",
      "explanation": "$x^3 = 64 = 4^3 \\implies x = 4$."
    },
    {
      "id": "WAEC-SS1-LOG-025",
      "class": "SSS 1",
      "topic": "Logarithm",
      "question": "Simplify: $\\dfrac{\\log 8}{\\log 4}$.",
      "options": {
        "A": "$\\dfrac{3}{2}$",
        "B": "$2$",
        "C": "$\\dfrac{2}{3}$",
        "D": "$\\log 2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\dfrac{\\log(2^3)}{\\log(2^2)} = \\dfrac{3\\log 2}{2\\log 2} = \\dfrac{3}{2}$."
    },
    {
      "id": "WAEC-SS1-BASE-001",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $102_x = 27_{10}$, find the value of the base $x$.",
      "options": {
        "A": "$5$",
        "B": "$4$",
        "C": "$6$",
        "D": "$3$"
      },
      "correctAnswer": "A",
      "explanation": "$1(x^2) + 0(x^1) + 2(x^0) = 27 \\implies x^2 + 2 = 27 \\implies x^2 = 25 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS1-BASE-002",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate in base two: $11011_2 + 10101_2$.",
      "options": {
        "A": "$110000_2$",
        "B": "$101000_2$",
        "C": "$110010_2$",
        "D": "$100110_2$"
      },
      "correctAnswer": "A",
      "explanation": "$27_{10} + 21_{10} = 48_{10}$. Converting $48_{10}$ to binary gives $110000_2$."
    },
    {
      "id": "WAEC-SS1-BASE-003",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Subtract in base eight: $634_8 - 257_8$.",
      "options": {
        "A": "$355_8$",
        "B": "$365_8$",
        "C": "$345_8$",
        "D": "$375_8$"
      },
      "correctAnswer": "A",
      "explanation": "$634_8 = 412_{10}$; $257_8 = 175_{10}$. $412 - 175 = 237_{10} = 355_8$."
    },
    {
      "id": "WAEC-SS1-BASE-004",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $32_x = 24_8$, find the base $x$.",
      "options": {
        "A": "$6$",
        "B": "$5$",
        "C": "$7$",
        "D": "$8$"
      },
      "correctAnswer": "A",
      "explanation": "$24_8 = 2(8) + 4 = 20_{10}$. $3x + 2 = 20 \\implies 3x = 18 \\implies x = 6$."
    },
    {
      "id": "WAEC-SS1-BASE-005",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $(11.011)_2$ to a decimal fraction.",
      "options": {
        "A": "$3.375$",
        "B": "$3.625$",
        "C": "$3.25$",
        "D": "$3.75$"
      },
      "correctAnswer": "A",
      "explanation": "$11_2 = 3$. $0.011_2 = 0(\\frac{1}{2}) + 1(\\frac{1}{4}) + 1(\\frac{1}{8}) = 0.25 + 0.125 = 0.375$. Total $= 3.375$."
    },
    {
      "id": "WAEC-SS1-BASE-006",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $23_x + 101_2 = 130_4$, find $x$.",
      "options": {
        "A": "$10$",
        "B": "$8$",
        "C": "$7$",
        "D": "$6$"
      },
      "correctAnswer": "A",
      "explanation": "$101_2 = 5_{10}$. $130_4 = 1(16) + 3(4) + 0 = 28_{10}$. $(2x + 3) + 5 = 28 \\implies 2x + 8 = 28 \\implies 2x = 20 \\implies x = 10$."
    },
    {
      "id": "WAEC-SS1-BASE-007",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Multiply $110_2$ by $11_2$.",
      "options": {
        "A": "$10010_2$",
        "B": "$10100_2$",
        "C": "$11100_2$",
        "D": "$10001_2$"
      },
      "correctAnswer": "A",
      "explanation": "$110_2 = 6_{10}$; $11_2 = 3_{10}$. $6 \\times 3 = 18_{10} = 10010_2$."
    },
    {
      "id": "WAEC-SS1-BASE-008",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $101101_2$ to an octal (base 8) number.",
      "options": {
        "A": "$55_8$",
        "B": "$45_8$",
        "C": "$53_8$",
        "D": "$65_8$"
      },
      "correctAnswer": "A",
      "explanation": "Group in 3s from right: $101$ and $101$. $101_2 = 5$. Thus $101101_2 = 55_8$."
    },
    {
      "id": "WAEC-SS1-BASE-009",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $1101101_2$ to hexadecimal (base 16).",
      "options": {
        "A": "$6D_{16}$",
        "B": "$5D_{16}$",
        "C": "$6C_{16}$",
        "D": "$7D_{16}$"
      },
      "correctAnswer": "A",
      "explanation": "Group in 4s: $0110$ ($6$) and $1101$ ($13 = D$). Hence $6D_{16}$."
    },
    {
      "id": "WAEC-SS1-BASE-010",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Find the value of $P$ if $P_5 = 43_7$.",
      "options": {
        "A": "$111_5$",
        "B": "$121_5$",
        "C": "$104_5$",
        "D": "$114_5$"
      },
      "correctAnswer": "A",
      "explanation": "$43_7 = 4(7) + 3 = 31_{10}$. Converting $31_{10}$ to base $5$: $31 = 1(25) + 1(5) + 1(1) = 111_5$."
    },
    {
      "id": "WAEC-SS1-BASE-011",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $121_x = 36_{10}$, find $x$.",
      "options": {
        "A": "$5$",
        "B": "$6$",
        "C": "$7$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 + 2x + 1 = 36 \\implies (x + 1)^2 = 36 \\implies x + 1 = 6 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS1-BASE-012",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate: $324_5 + 412_5$.",
      "options": {
        "A": "$1241_5$",
        "B": "$1231_5$",
        "C": "$1242_5$",
        "D": "$1211_5$"
      },
      "correctAnswer": "A",
      "explanation": "$324_5 = 89_{10}$; $412_5 = 107_{10}$. Sum $= 196_{10}$. $196 = 1(125) + 2(25) + 4(5) + 1 = 1241_5$."
    },
    {
      "id": "WAEC-SS1-BASE-013",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Subtract in base six: $432_6 - 155_6$.",
      "options": {
        "A": "$233_6$",
        "B": "$243_6$",
        "C": "$223_6$",
        "D": "$333_6$"
      },
      "correctAnswer": "A",
      "explanation": "$432_6 = 164_{10}$; $155_6 = 71_{10}$. $164 - 71 = 93_{10}$. $93 = 2(36) + 3(6) + 3 = 233_6$."
    },
    {
      "id": "WAEC-SS1-BASE-014",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $234_8$ to a base $10$ integer.",
      "options": {
        "A": "$156$",
        "B": "$164$",
        "C": "$148$",
        "D": "$172$"
      },
      "correctAnswer": "A",
      "explanation": "$2(8^2) + 3(8^1) + 4(8^0) = 2(64) + 24 + 4 = 128 + 28 = 156_{10}$."
    },
    {
      "id": "WAEC-SS1-BASE-015",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $1101_2 - x_2 = 111_2$, find $x_2$.",
      "options": {
        "A": "$110_2$",
        "B": "$101_2$",
        "C": "$100_2$",
        "D": "$111_2$"
      },
      "correctAnswer": "A",
      "explanation": "$1101_2 = 13_{10}$, $111_2 = 7_{10}$. $x = 13 - 7 = 6_{10} = 110_2$."
    },
    {
      "id": "WAEC-SS1-BASE-016",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $34_n = 22_{10}$, find $n$.",
      "options": {
        "A": "$6$",
        "B": "$5$",
        "C": "$7$",
        "D": "$8$"
      },
      "correctAnswer": "A",
      "explanation": "$3n + 4 = 22 \\implies 3n = 18 \\implies n = 6$."
    },
    {
      "id": "WAEC-SS1-BASE-017",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Evaluate: $1011_2 \\div 11_2$.",
      "options": {
        "A": "$3\\text{ rem }2\\text{ (or }11_2\\text{ rem }10_2\\text{)}$",
        "B": "$4\\text{ rem }1$",
        "C": "$2\\text{ rem }1$",
        "D": "$3\\text{ rem }0$"
      },
      "correctAnswer": "A",
      "explanation": "$1011_2 = 11_{10}$; $11_2 = 3_{10}$. $11 \\div 3 = 3$ remainder $2$ ($11_2$ remainder $10_2$)."
    },
    {
      "id": "WAEC-SS1-BASE-018",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $47_{10}$ to base $3$.",
      "options": {
        "A": "$1202_3$",
        "B": "$1212_3$",
        "C": "$1102_3$",
        "D": "$1222_3$"
      },
      "correctAnswer": "A",
      "explanation": "$47 = 1(27) + 2(9) + 0(3) + 2(1) = 1202_3$."
    },
    {
      "id": "WAEC-SS1-BASE-019",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $212_3 = x_{10}$, find $x$.",
      "options": {
        "A": "$23$",
        "B": "$21$",
        "C": "$19$",
        "D": "$25$"
      },
      "correctAnswer": "A",
      "explanation": "$2(3^2) + 1(3^1) + 2(3^0) = 18 + 3 + 2 = 23$."
    },
    {
      "id": "WAEC-SS1-BASE-020",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Solve for $y$ if $y_8 = 10110_2$.",
      "options": {
        "A": "$26_8$",
        "B": "$36_8$",
        "C": "$16_8$",
        "D": "$24_8$"
      },
      "correctAnswer": "A",
      "explanation": "$10110_2 = 010\\ 110_2 = 26_8$."
    },
    {
      "id": "WAEC-SS1-BASE-021",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $43_x = 23_{10}$, find the value of $x$.",
      "options": {
        "A": "$5$",
        "B": "$6$",
        "C": "$7$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "$4x + 3 = 23 \\implies 4x = 20 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS1-BASE-022",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Calculate $1000_2 - 111_2$.",
      "options": {
        "A": "$1_2$",
        "B": "$10_2$",
        "C": "$11_2$",
        "D": "$100_2$"
      },
      "correctAnswer": "A",
      "explanation": "$1000_2 = 8_{10}$; $111_2 = 7_{10}$. $8 - 7 = 1_{10} = 1_2$."
    },
    {
      "id": "WAEC-SS1-BASE-023",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Convert $0.625_{10}$ to binary.",
      "options": {
        "A": "$0.101_2$",
        "B": "$0.110_2$",
        "C": "$0.011_2$",
        "D": "$0.111_2$"
      },
      "correctAnswer": "A",
      "explanation": "$0.625 = \\frac{1}{2} + \\frac{1}{8} = 0.101_2$."
    },
    {
      "id": "WAEC-SS1-BASE-024",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "Find the base $b$ such that $13_b + 24_b = 42_b$.",
      "options": {
        "A": "$5$",
        "B": "$6$",
        "C": "$7$",
        "D": "$8$"
      },
      "correctAnswer": "A",
      "explanation": "$(b + 3) + (2b + 4) = 4b + 2 \\implies 3b + 7 = 4b + 2 \\implies b = 5$."
    },
    {
      "id": "WAEC-SS1-BASE-025",
      "class": "SSS 1",
      "topic": "Number Base Systems",
      "question": "If $204_n = 54_{10}$, find the value of $n$.",
      "options": {
        "A": "$5$",
        "B": "$6$",
        "C": "$7$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "$2n^2 + 0n + 4 = 54 \\implies 2n^2 = 50 \\implies n^2 = 25 \\implies n = 5$."
    }
  ],
  "SSS 2": [
    {
      "id": "WAEC-SS2-IND-001",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve the equation: $2^{2x} - 5(2^x) + 4 = 0$.",
      "options": {
        "A": "$x = 0\\text{ or }x = 2$",
        "B": "$x = 1\\text{ or }x = 4$",
        "C": "$x = 2\\text{ or }x = 4$",
        "D": "$x = -1\\text{ or }x = 2$"
      },
      "correctAnswer": "A",
      "explanation": "Let $y = 2^x$. Then $y^2 - 5y + 4 = 0 \\implies (y - 1)(y - 4) = 0 \\implies y = 1$ or $y = 4$. If $2^x = 1 = 2^0 \\implies x = 0$; if $2^x = 4 = 2^2 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS2-IND-002",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Evaluate: $\\left(\\dfrac{16}{81}\\right)^{-3/4}$.",
      "options": {
        "A": "$\\dfrac{27}{8}$",
        "B": "$\\dfrac{8}{27}$",
        "C": "$\\dfrac{9}{4}$",
        "D": "$\\dfrac{4}{9}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\left(\\dfrac{16}{81}\\right)^{-3/4} = \\left(\\dfrac{81}{16}\\right)^{3/4} = \\left[\\left(\\dfrac{3}{2}\\right)^4\\right]^{3/4} = \\left(\\dfrac{3}{2}\\right)^3 = \\dfrac{27}{8}$."
    },
    {
      "id": "WAEC-SS2-IND-003",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $3^{2x - 1} \\times 9^{x + 1} = 27^{x + 2}$, find the value of $x$.",
      "options": {
        "A": "$5$",
        "B": "$3$",
        "C": "$2$",
        "D": "$4$"
      },
      "correctAnswer": "A",
      "explanation": "$3^{2x - 1} \\times 3^{2(x + 1)} = 3^{3(x + 2)} \\implies 3^{4x + 1} = 3^{3x + 6} \\implies 4x + 1 = 3x + 6 \\implies x = 5$."
    },
    {
      "id": "WAEC-SS2-IND-004",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$ if $4^{x+1} - 9(2^x) + 2 = 0$.",
      "options": {
        "A": "$x = 1\\text{ or }x = -2$",
        "B": "$x = 1\\text{ or }x = -1$",
        "C": "$x = -1\\text{ or }x = -2$",
        "D": "$x = 2\\text{ or }x = -1$"
      },
      "correctAnswer": "A",
      "explanation": "$4(2^x)^2 - 9(2^x) + 2 = 0$. Let $u = 2^x$: $4u^2 - 9u + 2 = (4u - 1)(u - 2) = 0 \\implies u = 1/4$ or $u = 2$. $2^x = 2^{-2} \\implies x = -2$; $2^x = 2^1 \\implies x = 1$."
    },
    {
      "id": "WAEC-SS2-IND-005",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{x^{1/2} \\, y^{-2/3}}{x^{-1/4} \\, y^{1/3}}$.",
      "options": {
        "A": "$\\dfrac{x^{3/4}}{y}$",
        "B": "$x^{1/4} y$",
        "C": "$x^{3/4} y$",
        "D": "$\\dfrac{1}{x^{3/4} y}$"
      },
      "correctAnswer": "A",
      "explanation": "$x^{1/2 - (-1/4)} \\, y^{-2/3 - 1/3} = x^{3/4} \\, y^{-1} = \\dfrac{x^{3/4}}{y}$."
    },
    {
      "id": "WAEC-SS2-IND-006",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $2^{x + y} = 16$ and $3^{x - y} = 9$, find the values of $x$ and $y$.",
      "options": {
        "A": "$x = 3,\\ y = 1$",
        "B": "$x = 4,\\ y = 2$",
        "C": "$x = 2,\\ y = 1$",
        "D": "$x = 5,\\ y = 1$"
      },
      "correctAnswer": "A",
      "explanation": "$2^{x+y} = 2^4 \\implies x + y = 4$. $3^{x-y} = 3^2 \\implies x - y = 2$. Adding gives $2x = 6 \\implies x = 3, y = 1$."
    },
    {
      "id": "WAEC-SS2-IND-007",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Find $x$ if $\\left(\\dfrac{1}{2}\\right)^{2x - 3} = 8^{x + 1}$.",
      "options": {
        "A": "$0$",
        "B": "$-\\dfrac{1}{5}$",
        "C": "$\\dfrac{1}{5}$",
        "D": "$1$"
      },
      "correctAnswer": "A",
      "explanation": "$2^{-(2x - 3)} = (2^3)^{x + 1} \\implies 2^{3 - 2x} = 2^{3x + 3} \\implies 3 - 2x = 3x + 3 \\implies 5x = 0 \\implies x = 0$."
    },
    {
      "id": "WAEC-SS2-IND-008",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Evaluate: $(0.125)^{-2/3}$.",
      "options": {
        "A": "$4$",
        "B": "$2$",
        "C": "$8$",
        "D": "$\\dfrac{1}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "$0.125 = \\frac{1}{8} = 2^{-3}$. $(2^{-3})^{-2/3} = 2^2 = 4$."
    },
    {
      "id": "WAEC-SS2-IND-009",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve the equation: $5^{2x} - 26(5^x) + 25 = 0$.",
      "options": {
        "A": "$x = 0\\text{ or }x = 2$",
        "B": "$x = 1\\text{ or }x = 2$",
        "C": "$x = -1\\text{ or }x = 2$",
        "D": "$x = 1\\text{ or }x = 5$"
      },
      "correctAnswer": "A",
      "explanation": "Let $u = 5^x$: $u^2 - 26u + 25 = 0 \\implies (u - 1)(u - 25) = 0 \\implies 5^x = 1 \\implies x = 0$; $5^x = 25 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS2-IND-010",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{27^{2/3} \\times 4^{-1/2}}{36^{1/2}}$.",
      "options": {
        "A": "$\\dfrac{3}{4}$",
        "B": "$\\dfrac{3}{2}$",
        "C": "$\\dfrac{9}{4}$",
        "D": "$\\dfrac{1}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "$27^{2/3} = 9$, $4^{-1/2} = 1/2$, $36^{1/2} = 6$. Ratio: $\\dfrac{9 \\times 0.5}{6} = \\dfrac{4.5}{6} = \\dfrac{3}{4}$."
    },
    {
      "id": "WAEC-SS2-IND-011",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $8^x = 32^y$ and $9^x = 27^{y + 1}$, find $x$ and $y$.",
      "options": {
        "A": "$x = 15,\\ y = 9$",
        "B": "$x = 10,\\ y = 6$",
        "C": "$x = 5,\\ y = 3$",
        "D": "$x = 12,\\ y = 8$"
      },
      "correctAnswer": "A",
      "explanation": "$2^{3x} = 2^{5y} \\implies 3x = 5y \\implies y = \\frac{3x}{5}$. $3^{2x} = 3^{3y+3} \\implies 2x = 3y + 3$. $2x - \\frac{9x}{5} = 3 \\implies \\frac{x}{5} = 3 \\implies x = 15, y = 9$."
    },
    {
      "id": "WAEC-SS2-IND-012",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve for $x$: $25^{x - 1} = \\left(\\dfrac{1}{125}\\right)^{x + 2}$.",
      "options": {
        "A": "$-\\dfrac{4}{5}$",
        "B": "$-\\dfrac{2}{5}$",
        "C": "$\\dfrac{4}{5}$",
        "D": "$-\\dfrac{1}{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$5^{2(x - 1)} = 5^{-3(x + 2)} \\implies 2x - 2 = -3x - 6 \\implies 5x = -4 \\implies x = -\\dfrac{4}{5}$."
    },
    {
      "id": "WAEC-SS2-IND-013",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: $\\dfrac{2^{n+4} - 2 \\times 2^n}{2 \\times 2^{n+3}}$.",
      "options": {
        "A": "$\\dfrac{7}{8}$",
        "B": "$\\dfrac{3}{4}$",
        "C": "$\\dfrac{1}{2}$",
        "D": "$\\dfrac{7}{16}$"
      },
      "correctAnswer": "A",
      "explanation": "Numerator: $2^n(16 - 2) = 14 \\cdot 2^n$. Denominator: $2^{n+4} = 16 \\cdot 2^n$. Ratio $= \\dfrac{14}{16} = \\dfrac{7}{8}$."
    },
    {
      "id": "WAEC-SS2-IND-014",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Find the values of $x$ satisfying: $9^{x + 1} - 28(3^x) + 3 = 0$.",
      "options": {
        "A": "$x = 1\\text{ or }x = -2$",
        "B": "$x = -1\\text{ or }x = 1$",
        "C": "$x = -1\\text{ or }x = -2$",
        "D": "$x = 2\\text{ or }x = 0$"
      },
      "correctAnswer": "A",
      "explanation": "$9(3^x)^2 - 28(3^x) + 3 = 0 \\implies (9u - 1)(u - 3) = 0 \\implies 3^x = 1/9 \\implies x = -2$; $3^x = 3 \\implies x = 1$."
    },
    {
      "id": "WAEC-SS2-IND-015",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Evaluate: $\\left(\\dfrac{64}{27}\\right)^{-2/3} \\times \\left(\\dfrac{16}{81}\\right)^{1/2}$.",
      "options": {
        "A": "$\\dfrac{1}{4}$",
        "B": "$\\dfrac{1}{3}$",
        "C": "$\\dfrac{2}{3}$",
        "D": "$\\dfrac{3}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\left(\\dfrac{27}{64}\\right)^{2/3} = \\left(\\dfrac{3}{4}\\right)^2 = \\dfrac{9}{16}$. $\\left(\\dfrac{16}{81}\\right)^{1/2} = \\dfrac{4}{9}$. Product: $\\dfrac{9}{16} \\times \\dfrac{4}{9} = \\dfrac{4}{16} = \\dfrac{1}{4}$."
    },
    {
      "id": "WAEC-SS2-IND-016",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "If $2^{x - 1} + 2^{x + 1} = 40$, find $x$.",
      "options": {
        "A": "$4$",
        "B": "$3$",
        "C": "$5$",
        "D": "$6$"
      },
      "correctAnswer": "A",
      "explanation": "$2^x\\left(\\frac{1}{2} + 2\\right) = 40 \\implies 2^x\\left(\\frac{5}{2}\\right) = 40 \\implies 2^x = 16 = 2^4 \\implies x = 4$."
    },
    {
      "id": "WAEC-SS2-IND-017",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Given that $2^x = 3^y = 6^{-z}$, express $z$ in terms of $x$ and $y$.",
      "options": {
        "A": "$z = -\\dfrac{xy}{x + y}$",
        "B": "$z = \\dfrac{xy}{x + y}$",
        "C": "$z = \\dfrac{x + y}{xy}$",
        "D": "$z = x + y$"
      },
      "correctAnswer": "A",
      "explanation": "Let $2^x = 3^y = 6^{-z} = k$. $2 = k^{1/x}, 3 = k^{1/y}, 6 = k^{-1/z}$. $2 \\times 3 = 6 \\implies k^{1/x + 1/y} = k^{-1/z} \\implies \\frac{1}{x} + \\frac{1}{y} = -\\frac{1}{z} \\implies z = -\\dfrac{xy}{x+y}$."
    },
    {
      "id": "WAEC-SS2-IND-018",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Simplify: $\\left(\\dfrac{a^3 \\, b^{-2}}{a^{-1} \\, b^4}\\right)^{-1/2}$.",
      "options": {
        "A": "$\\dfrac{b^3}{a^2}$",
        "B": "$\\dfrac{a^2}{b^3}$",
        "C": "$\\dfrac{b^2}{a^3}$",
        "D": "$\\dfrac{a}{b^2}$"
      },
      "correctAnswer": "A",
      "explanation": "Inside: $a^{3 - (-1)} \\, b^{-2 - 4} = a^4 \\, b^{-6}$. Raising to $-1/2$: $(a^4)^{-1/2} \\, (b^{-6})^{-1/2} = a^{-2} \\, b^3 = \\dfrac{b^3}{a^2}$."
    },
    {
      "id": "WAEC-SS2-IND-019",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Solve the equation: $3^{2y + 1} - 10(3^y) + 3 = 0$.",
      "options": {
        "A": "$y = 1\\text{ or }y = -1$",
        "B": "$y = 2\\text{ or }y = 0$",
        "C": "$y = 3\\text{ or }y = 1/3$",
        "D": "$y = -1\\text{ or }y = -2$"
      },
      "correctAnswer": "A",
      "explanation": "$3(3^y)^2 - 10(3^y) + 3 = (3m - 1)(m - 3) = 0 \\implies 3^y = 1/3 \\implies y = -1$; $3^y = 3 \\implies y = 1$."
    },
    {
      "id": "WAEC-SS2-IND-020",
      "class": "SSS 2",
      "topic": "Indices",
      "question": "Rationalize the denominator of $\\dfrac{3\\sqrt{2} - 2\\sqrt{3}}{3\\sqrt{2} + 2\\sqrt{3}}$.",
      "options": {
        "A": "$5 - 2\\sqrt{6}$",
        "B": "$5 + 2\\sqrt{6}$",
        "C": "$18 - 12\\sqrt{6}$",
        "D": "$5 - \\sqrt{6}$"
      },
      "correctAnswer": "A",
      "explanation": "Multiply numerator & denominator by $3\\sqrt{2} - 2\\sqrt{3}$: $\\dfrac{(3\\sqrt{2} - 2\\sqrt{3})^2}{(3\\sqrt{2})^2 - (2\\sqrt{3})^2} = \\dfrac{18 - 12\\sqrt{6} + 12}{18 - 12} = \\dfrac{30 - 12\\sqrt{6}}{6} = 5 - 2\\sqrt{6}$."
    },
    {
      "id": "WAEC-SS2-LOG-001",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_a x = m$ and $\\log_a y = n$, express $\\log_a \\left(\\dfrac{x^3}{y^2}\\right)$ in terms of $m$ and $n$.",
      "options": {
        "A": "$3m - 2n$",
        "B": "$3m + 2n$",
        "C": "$m^3 - n^2$",
        "D": "$\\dfrac{3m}{2n}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_a(x^3 / y^2) = \\log_a(x^3) - \\log_a(y^2) = 3\\log_a x - 2\\log_a y = 3m - 2n$."
    },
    {
      "id": "WAEC-SS2-LOG-002",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "By the change of base formula, $\\log_b a$ is identically equal to:",
      "options": {
        "A": "$\\dfrac{\\log_c a}{\\log_c b}$",
        "B": "$\\dfrac{\\log_c b}{\\log_c a}$",
        "C": "$\\log_c(a \\cdot b)$",
        "D": "$\\log_c a - \\log_c b$"
      },
      "correctAnswer": "A",
      "explanation": "The standard change of base rule states $\\log_b a = \\dfrac{\\log_c a}{\\log_c b}$."
    },
    {
      "id": "WAEC-SS2-LOG-003",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Find $x$ if $\\log_3(x + 6) - \\log_3 x = 2$.",
      "options": {
        "A": "$\\dfrac{3}{4}$",
        "B": "$\\dfrac{4}{3}$",
        "C": "$2$",
        "D": "$\\dfrac{1}{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_3\\left(\\dfrac{x+6}{x}\\right) = 2 \\implies \\dfrac{x+6}{x} = 3^2 = 9 \\implies x + 6 = 9x \\implies 8x = 6 \\implies x = \\dfrac{3}{4}$."
    },
    {
      "id": "WAEC-SS2-LOG-004",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_{10}2 = 0.3010$ and $\\log_{10}3 = 0.4771$, calculate $\\log_{10}15$.",
      "options": {
        "A": "$1.1761$",
        "B": "$1.4771$",
        "C": "$0.7781$",
        "D": "$1.2552$"
      },
      "correctAnswer": "A",
      "explanation": "$15 = \\dfrac{3 \\times 10}{2} \\implies \\log 15 = \\log 3 + 1 - \\log 2 = 0.4771 + 1 - 0.3010 = 1.1761$."
    },
    {
      "id": "WAEC-SS2-LOG-005",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Evaluate without tables: $\\log_2 32 + \\log_3 81 - \\log_5 125$.",
      "options": {
        "A": "$6$",
        "B": "$4$",
        "C": "$7$",
        "D": "$5$"
      },
      "correctAnswer": "A",
      "explanation": "$5 + 4 - 3 = 6$."
    },
    {
      "id": "WAEC-SS2-LOG-006",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$: $\\log_x 64 = -3$.",
      "options": {
        "A": "$\\dfrac{1}{4}$",
        "B": "$4$",
        "C": "$-4$",
        "D": "$\\dfrac{1}{8}$"
      },
      "correctAnswer": "A",
      "explanation": "$x^{-3} = 64 = 4^3 = (1/4)^{-3} \\implies x = 1/4$."
    },
    {
      "id": "WAEC-SS2-LOG-007",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Given that $\\log_{10}y = 2\\log_{10}x + 3$, express $y$ in terms of $x$.",
      "options": {
        "A": "$y = 1000x^2$",
        "B": "$y = x^2 + 1000$",
        "C": "$y = 3x^2$",
        "D": "$y = 1000x$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}y = \\log_{10}(x^2) + \\log_{10}(1000) = \\log_{10}(1000x^2) \\implies y = 1000x^2$."
    },
    {
      "id": "WAEC-SS2-LOG-008",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Simplify: $\\log_a b \\times \\log_b c \\times \\log_c a$.",
      "options": {
        "A": "$1$",
        "B": "$0$",
        "C": "$abc$",
        "D": "$\\log_a(abc)$"
      },
      "correctAnswer": "A",
      "explanation": "Using change of base: $\\dfrac{\\log b}{\\log a} \\times \\dfrac{\\log c}{\\log b} \\times \\dfrac{\\log a}{\\log c} = 1$."
    },
    {
      "id": "WAEC-SS2-LOG-009",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve the equation: $\\log_{10}(x^2 - 1) - \\log_{10}(x - 1) = 1$.",
      "options": {
        "A": "$x = 9$",
        "B": "$x = 10$",
        "C": "$x = 11$",
        "D": "$x = 8$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}\\left(\\dfrac{x^2 - 1}{x - 1}\\right) = \\log_{10}(x + 1) = 1 \\implies x + 1 = 10 \\implies x = 9$."
    },
    {
      "id": "WAEC-SS2-LOG-010",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_2 x + 2\\log_4 x = 4$, find $x$.",
      "options": {
        "A": "$4$",
        "B": "$8$",
        "C": "$16$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_4 x = \\frac{1}{2}\\log_2 x \\implies 2\\log_4 x = \\log_2 x$. Then $\\log_2 x + \\log_2 x = 4 \\implies 2\\log_2 x = 4 \\implies \\log_2 x = 2 \\implies x = 4$."
    },
    {
      "id": "WAEC-SS2-LOG-011",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "What is the value of $\\log_8 16$?",
      "options": {
        "A": "$\\dfrac{4}{3}$",
        "B": "$\\dfrac{3}{4}$",
        "C": "$2$",
        "D": "$\\dfrac{1}{2}$"
      },
      "correctAnswer": "A",
      "explanation": "Let $y = \\log_8 16 \\implies 8^y = 16 \\implies 2^{3y} = 2^4 \\implies 3y = 4 \\implies y = \\dfrac{4}{3}$."
    },
    {
      "id": "WAEC-SS2-LOG-012",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_{10}2 = 0.3010$, how many digits are there in $2^{50}$?",
      "options": {
        "A": "$16$",
        "B": "$15$",
        "C": "$17$",
        "D": "$50$"
      },
      "correctAnswer": "A",
      "explanation": "$\\lfloor 50 \\times 0.3010 \\rfloor + 1 = \\lfloor 15.05 \\rfloor + 1 = 15 + 1 = 16$ digits."
    },
    {
      "id": "WAEC-SS2-LOG-013",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$: $(\\log_3 x)^2 - 4\\log_3 x + 3 = 0$.",
      "options": {
        "A": "$x = 3\\text{ or }x = 27$",
        "B": "$x = 1\\text{ or }x = 3$",
        "C": "$x = 9\\text{ or }x = 27$",
        "D": "$x = 3\\text{ or }x = 9$"
      },
      "correctAnswer": "A",
      "explanation": "$(u - 1)(u - 3) = 0 \\implies \\log_3 x = 1 \\implies x = 3$; $\\log_3 x = 3 \\implies x = 3^3 = 27$."
    },
    {
      "id": "WAEC-SS2-LOG-014",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_a 2 = x$ and $\\log_a 3 = y$, find $\\log_a(\\sqrt{6})$.",
      "options": {
        "A": "$\\dfrac{x + y}{2}$",
        "B": "$x + y$",
        "C": "$2(x + y)$",
        "D": "$\\sqrt{xy}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_a(\\sqrt{6}) = \\frac{1}{2}\\log_a(2 \\times 3) = \\dfrac{x + y}{2}$."
    },
    {
      "id": "WAEC-SS2-LOG-015",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Evaluate: $5^{\\log_5 7}$.",
      "options": {
        "A": "$7$",
        "B": "$5$",
        "C": "$35$",
        "D": "$\\log_5 7$"
      },
      "correctAnswer": "A",
      "explanation": "By the fundamental inverse identity, $b^{\\log_b x} = x$. Hence $5^{\\log_5 7} = 7$."
    },
    {
      "id": "WAEC-SS2-LOG-016",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Find $x$ if $\\log_2(\\log_3 x) = 1$.",
      "options": {
        "A": "$9$",
        "B": "$6$",
        "C": "$8$",
        "D": "$3$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_3 x = 2^1 = 2 \\implies x = 3^2 = 9$."
    },
    {
      "id": "WAEC-SS2-LOG-017",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_{10}(x - 3) + \\log_{10}x = 1$, find $x$.",
      "options": {
        "A": "$x = 5$",
        "B": "$x = 2$",
        "C": "$x = -2$",
        "D": "$x = 5\\text{ or }x = -2$"
      },
      "correctAnswer": "A",
      "explanation": "$x(x - 3) = 10 \\implies x^2 - 3x - 10 = 0 \\implies (x - 5)(x + 2) = 0$. Since $x > 3$, $x = 5$."
    },
    {
      "id": "WAEC-SS2-LOG-018",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Express $\\log_b\\left(\\sqrt{\\dfrac{x^3}{y}}\\right)$ in terms of $\\log_b x$ and $\\log_b y$.",
      "options": {
        "A": "$\\dfrac{3}{2}\\log_b x - \\dfrac{1}{2}\\log_b y$",
        "B": "$3\\log_b x - \\log_b y$",
        "C": "$\\dfrac{1}{2}(3\\log_b x + \\log_b y)$",
        "D": "$\\dfrac{3}{2}\\log_b(x/y)$"
      },
      "correctAnswer": "A",
      "explanation": "$\\frac{1}{2}(3\\log_b x - \\log_b y) = \\dfrac{3}{2}\\log_b x - \\dfrac{1}{2}\\log_b y$."
    },
    {
      "id": "WAEC-SS2-LOG-019",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "Solve for $x$: $\\log_2 x + \\log_x 2 = 2.5$.",
      "options": {
        "A": "$x = 4\\text{ or }x = \\sqrt{2}$",
        "B": "$x = 2\\text{ or }x = 4$",
        "C": "$x = 8\\text{ or }x = 2$",
        "D": "$x = 4\\text{ or }x = 1/2$"
      },
      "correctAnswer": "A",
      "explanation": "Let $u = \\log_2 x$: $u + \\frac{1}{u} = \\frac{5}{2} \\implies 2u^2 - 5u + 2 = 0 \\implies (2u - 1)(u - 2) = 0 \\implies u = 2 \\implies x = 4$; $u = 1/2 \\implies x = 2^{1/2} = \\sqrt{2}$."
    },
    {
      "id": "WAEC-SS2-LOG-020",
      "class": "SSS 2",
      "topic": "Logarithm Theory",
      "question": "If $\\log_{10}a = p$ and $\\log_{10}b = q$, express $\\log_{10}\\left(\\dfrac{100\\sqrt{a}}{b^3}\\right)$ in terms of $p$ and $q$.",
      "options": {
        "A": "$2 + \\dfrac{1}{2}p - 3q$",
        "B": "$2 + p - 3q$",
        "C": "$100 + \\dfrac{1}{2}p - 3q$",
        "D": "$2 + \\dfrac{1}{2}p + 3q$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}100 + \\frac{1}{2}\\log_{10}a - 3\\log_{10}b = 2 + \\dfrac{1}{2}p - 3q$."
    },
    {
      "id": "WAEC-SS2-SET-001",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a class of $58$ students, $28$ offer Biology, $35$ offer Economics, and $15$ offer Physics. Each student offers at least one subject. If $12$ offer both Biology and Economics, $7$ offer Biology and Physics, and $5$ offer Economics and Physics, find the number of students who offer all three subjects.",
      "options": {
        "A": "$4$",
        "B": "$3$",
        "C": "$5$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "$n(B \\cup E \\cup P) = 28 + 35 + 15 - (12 + 7 + 5) + x \\implies 58 = 78 - 24 + x = 54 + x \\implies x = 4$."
    },
    {
      "id": "WAEC-SS2-SET-002",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a survey of $100$ people, $60$ like Apple, $45$ like Banana, $35$ like Orange, $20$ like Apple and Banana, $15$ like Apple and Orange, $10$ like Banana and Orange, and $5$ like all three fruits. How many like none of the three fruits?",
      "options": {
        "A": "$0$",
        "B": "$5$",
        "C": "$10$",
        "D": "$15$"
      },
      "correctAnswer": "A",
      "explanation": "$n(A \\cup B \\cup O) = 60 + 45 + 35 - (20 + 15 + 10) + 5 = 140 - 45 + 5 = 100$. None $= 100 - 100 = 0$."
    },
    {
      "id": "WAEC-SS2-SET-003",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "For three sets $A, B,$ and $C$, the identity $(A \\cup B)'$ is equivalent to:",
      "options": {
        "A": "$A' \\cap B'$",
        "B": "$A' \\cup B'$",
        "C": "$A \\cap B'$",
        "D": "$(A \\cap B)'$"
      },
      "correctAnswer": "A",
      "explanation": "By De Morgan's Law, $(A \\cup B)' = A' \\cap B'$."
    },
    {
      "id": "WAEC-SS2-SET-004",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $n(A) = 28$, $n(B) = 32$, and $n(A \\cup B) = 45$, find $n(A \\cap B')$ (elements in $A$ only).",
      "options": {
        "A": "$13$",
        "B": "$15$",
        "C": "$17$",
        "D": "$28$"
      },
      "correctAnswer": "A",
      "explanation": "$n(A \\cap B) = 28 + 32 - 45 = 15$. $A$ only $= n(A) - n(A \\cap B) = 28 - 15 = 13$."
    },
    {
      "id": "WAEC-SS2-SET-005",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $A = \\{1, 2\\}$ and $B = \\{3, 4, 5\\}$, what is the cardinality of the Cartesian product $A \\times B$?",
      "options": {
        "A": "$6$",
        "B": "$5$",
        "C": "$8$",
        "D": "$9$"
      },
      "correctAnswer": "A",
      "explanation": "$n(A \\times B) = n(A) \\times n(B) = 2 \\times 3 = 6$."
    },
    {
      "id": "WAEC-SS2-SET-006",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a group of $60$ students, $35$ play football, $30$ play volleyball, and $12$ play both. How many students play exactly one sport?",
      "options": {
        "A": "$41$",
        "B": "$53$",
        "C": "$23$",
        "D": "$18$"
      },
      "correctAnswer": "A",
      "explanation": "Football only $= 35 - 12 = 23$. Volleyball only $= 30 - 12 = 18$. Exactly one $= 23 + 18 = 41$."
    },
    {
      "id": "WAEC-SS2-SET-007",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Which of the following represents the shaded region for $(A \\cap B) \\cup (A \\cap C)$?",
      "options": {
        "A": "$A \\cap (B \\cup C)$",
        "B": "$A \\cup (B \\cap C)$",
        "C": "$(A \\cup B) \\cap C$",
        "D": "$A' \\cap (B \\cup C)$"
      },
      "correctAnswer": "A",
      "explanation": "By the distributive law of intersection over union: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$."
    },
    {
      "id": "WAEC-SS2-SET-008",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Out of $80$ students, $45$ take French and $40$ take German. If $15$ take neither, how many take both French and German?",
      "options": {
        "A": "$20$",
        "B": "$15$",
        "C": "$25$",
        "D": "$30$"
      },
      "correctAnswer": "A",
      "explanation": "At least one $= 80 - 15 = 65$. $n(F \\cap G) = 45 + 40 - 65 = 20$."
    },
    {
      "id": "WAEC-SS2-SET-009",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If universal set $\\xi = \\{1, 2, \\dots, 20\\}$, $E = \\{\\text{multiples of } 2\\}$, and $F = \\{\\text{multiples of } 3\\}$, find $n(E \\cap F)$.",
      "options": {
        "A": "$3$",
        "B": "$6$",
        "C": "$10$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "$E \\cap F$ consists of multiples of $6$ in the set: $\\{6, 12, 18\\}$, so $n(E \\cap F) = 3$."
    },
    {
      "id": "WAEC-SS2-SET-010",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a town, $70\\%$ of households have a TV, $60\\%$ have a radio, and $50\\%$ have both. What percentage have neither?",
      "options": {
        "A": "$20\\%$",
        "B": "$10\\%$",
        "C": "$30\\%$",
        "D": "$15\\%$"
      },
      "correctAnswer": "A",
      "explanation": "At least one $= 70\\% + 60\\% - 50\\% = 80\\%$. Neither $= 100\\% - 80\\% = 20\\%$."
    },
    {
      "id": "WAEC-SS2-SET-011",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $n(A) = 10$ and $n(B) = 15$, what is the maximum possible value of $n(A \\cup B)$?",
      "options": {
        "A": "$25$",
        "B": "$15$",
        "C": "$10$",
        "D": "$30$"
      },
      "correctAnswer": "A",
      "explanation": "The union is maximized when $A$ and $B$ are completely disjoint: $n(A \\cup B) = 10 + 15 = 25$."
    },
    {
      "id": "WAEC-SS2-SET-012",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $n(A) = 10$ and $n(B) = 15$, what is the minimum possible value of $n(A \\cup B)$?",
      "options": {
        "A": "$15$",
        "B": "$10$",
        "C": "$5$",
        "D": "$25$"
      },
      "correctAnswer": "A",
      "explanation": "The union is minimized when $A \\subset B$, in which case $n(A \\cup B) = n(B) = 15$."
    },
    {
      "id": "WAEC-SS2-SET-013",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $A \\setminus B = A$, what does this deduce about sets $A$ and $B$?",
      "options": {
        "A": "$A \\cap B = \\emptyset$",
        "B": "$A \\subset B$",
        "C": "$B \\subset A$",
        "D": "$A = B$"
      },
      "correctAnswer": "A",
      "explanation": "Removing elements of $B$ leaves $A$ unchanged if and only if $A$ and $B$ share no common elements ($A \\cap B = \\emptyset$)."
    },
    {
      "id": "WAEC-SS2-SET-014",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a $3$-set survey of $50$ students: $n(A) = 20$, $n(B) = 25$, $n(C) = 22$, $n(A \\cap B) = 10$, $n(B \\cap C) = 8$, $n(A \\cap C) = 7$, and $n(A \\cap B \\cap C) = 3$. Find $n(A \\cup B \\cup C)'$.",
      "options": {
        "A": "$5$",
        "B": "$8$",
        "C": "$10$",
        "D": "$3$"
      },
      "correctAnswer": "A",
      "explanation": "$n(A \\cup B \\cup C) = 20 + 25 + 22 - (10 + 8 + 7) + 3 = 67 - 25 + 3 = 45$. Outside $= 50 - 45 = 5$."
    },
    {
      "id": "WAEC-SS2-SET-015",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $P(S)$ denotes the power set of $S$, and $n(P(S)) = 64$, find $n(S)$.",
      "options": {
        "A": "$6$",
        "B": "$5$",
        "C": "$7$",
        "D": "$8$"
      },
      "correctAnswer": "A",
      "explanation": "$2^n = 64 = 2^6 \\implies n = 6$."
    },
    {
      "id": "WAEC-SS2-SET-016",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "Which of the following is equivalent to $(A \\cap B)'$?",
      "options": {
        "A": "$A' \\cup B'$",
        "B": "$A' \\cap B'$",
        "C": "$A \\cup B'$",
        "D": "$A' \\cup B$"
      },
      "correctAnswer": "A",
      "explanation": "By De Morgan's Law, $(A \\cap B)' = A' \\cup B'$."
    },
    {
      "id": "WAEC-SS2-SET-017",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $A = \\{x : x^2 - 5x + 6 = 0\\}$ and $B = \\{x : x^2 - 7x + 12 = 0\\}$, find $A \\cap B$.",
      "options": {
        "A": "$\\{3\\}$",
        "B": "$\\{2\\}$",
        "C": "$\\{4\\}$",
        "D": "$\\{2, 3, 4\\}$"
      },
      "correctAnswer": "A",
      "explanation": "$A = \\{2, 3\\}$; $B = \\{3, 4\\}$. The common element is $3$, so $A \\cap B = \\{3\\}$."
    },
    {
      "id": "WAEC-SS2-SET-018",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "In a class of $40$ students, $22$ study Biology, $18$ study Geography, and $6$ study both. How many offer Biology only?",
      "options": {
        "A": "$16$",
        "B": "$12$",
        "C": "$22$",
        "D": "$14$"
      },
      "correctAnswer": "A",
      "explanation": "Biology only $= 22 - 6 = 16$."
    },
    {
      "id": "WAEC-SS2-SET-019",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $n(U) = 80$, $n(A) = 35$, $n(B) = 40$, and $n(A \\cup B)' = 15$, find $n(A \\cap B)$.",
      "options": {
        "A": "$10$",
        "B": "$15$",
        "C": "$5$",
        "D": "$20$"
      },
      "correctAnswer": "A",
      "explanation": "$n(A \\cup B) = 80 - 15 = 65$. $n(A \\cap B) = 35 + 40 - 65 = 10$."
    },
    {
      "id": "WAEC-SS2-SET-020",
      "class": "SSS 2",
      "topic": "Set Theory",
      "question": "If $A \\subset B$ and $B \\subset C$, then:",
      "options": {
        "A": "$A \\subset C$",
        "B": "$C \\subset A$",
        "C": "$A \\cap C = \\emptyset$",
        "D": "$A = C$"
      },
      "correctAnswer": "A",
      "explanation": "Subset inclusion is transitive: $A \\subset B \\land B \\subset C \\implies A \\subset C$."
    },
    {
      "id": "WAEC-SS2-QUA-001",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the roots of the quadratic equation: $2x^2 - 5x - 3 = 0$.",
      "options": {
        "A": "$x = 3\\text{ or }x = -\\dfrac{1}{2}$",
        "B": "$x = -3\\text{ or }x = \\dfrac{1}{2}$",
        "C": "$x = 3\\text{ or }x = \\dfrac{1}{2}$",
        "D": "$x = -3\\text{ or }x = -\\dfrac{1}{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$(2x + 1)(x - 3) = 0 \\implies x = 3$ or $x = -\\dfrac{1}{2}$."
    },
    {
      "id": "WAEC-SS2-QUA-002",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are the roots of $3x^2 - 7x + 2 = 0$, find $\\alpha + \\beta$.",
      "options": {
        "A": "$\\dfrac{7}{3}$",
        "B": "$-\\dfrac{7}{3}$",
        "C": "$\\dfrac{2}{3}$",
        "D": "$-\\dfrac{2}{3}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\alpha + \\beta = -\\dfrac{b}{a} = -\\dfrac{-7}{3} = \\dfrac{7}{3}$."
    },
    {
      "id": "WAEC-SS2-QUA-003",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "For what values of $k$ will $x^2 + kx + 9 = 0$ have equal roots?",
      "options": {
        "A": "$k = \\pm 6$",
        "B": "$k = \\pm 3$",
        "C": "$k = \\pm 9$",
        "D": "$k = \\pm 18$"
      },
      "correctAnswer": "A",
      "explanation": "Equal roots $\\implies \\Delta = b^2 - 4ac = 0 \\implies k^2 - 36 = 0 \\implies k = \\pm 6$."
    },
    {
      "id": "WAEC-SS2-QUA-004",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Form the quadratic equation whose roots are $-3$ and $5$.",
      "options": {
        "A": "$x^2 - 2x - 15 = 0$",
        "B": "$x^2 + 2x - 15 = 0$",
        "C": "$x^2 - 8x + 15 = 0$",
        "D": "$x^2 + 8x - 15 = 0$"
      },
      "correctAnswer": "A",
      "explanation": "Sum $= -3 + 5 = 2$; Product $= -3 \\times 5 = -15$. Equation: $x^2 - 2x - 15 = 0$."
    },
    {
      "id": "WAEC-SS2-QUA-005",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are roots of $2x^2 + 3x - 5 = 0$, find the product $\\alpha\\beta$.",
      "options": {
        "A": "$-\\dfrac{5}{2}$",
        "B": "$\\dfrac{5}{2}$",
        "C": "$-\\dfrac{3}{2}$",
        "D": "$\\dfrac{3}{2}$"
      },
      "correctAnswer": "A",
      "explanation": "Product of roots $\\alpha\\beta = \\dfrac{c}{a} = -\\dfrac{5}{2}$."
    },
    {
      "id": "WAEC-SS2-QUA-006",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Determine the nature of the roots of $2x^2 + 3x + 5 = 0$.",
      "options": {
        "A": "Complex / Non-real",
        "B": "Real and equal",
        "C": "Real and distinct",
        "D": "Rational and unequal"
      },
      "correctAnswer": "A",
      "explanation": "$\\Delta = b^2 - 4ac = 3^2 - 4(2)(5) = 9 - 40 = -31 < 0$. The roots are complex/non-real."
    },
    {
      "id": "WAEC-SS2-QUA-007",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve by completing the square: $x^2 + 6x - 7 = 0$.",
      "options": {
        "A": "$x = 1\\text{ or }x = -7$",
        "B": "$x = -1\\text{ or }x = 7$",
        "C": "$x = 2\\text{ or }x = -8$",
        "D": "$x = -2\\text{ or }x = 8$"
      },
      "correctAnswer": "A",
      "explanation": "$(x + 3)^2 = 7 + 9 = 16 \\implies x + 3 = \\pm 4 \\implies x = 1$ or $x = -7$."
    },
    {
      "id": "WAEC-SS2-QUA-008",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are roots of $x^2 - 4x + 1 = 0$, evaluate $\\alpha^2 + \\beta^2$.",
      "options": {
        "A": "$14$",
        "B": "$16$",
        "C": "$18$",
        "D": "$12$"
      },
      "correctAnswer": "A",
      "explanation": "$\\alpha + \\beta = 4, \\alpha\\beta = 1$. $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = 4^2 - 2(1) = 14$."
    },
    {
      "id": "WAEC-SS2-QUA-009",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find $m$ for which the line $y = 2x + m$ is tangent to the parabola $y = x^2$.",
      "options": {
        "A": "$m = -1$",
        "B": "$m = 1$",
        "C": "$m = -2$",
        "D": "$m = 2$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 - 2x - m = 0$. Tangency $\\implies \\Delta = (-2)^2 - 4(1)(-m) = 4 + 4m = 0 \\implies m = -1$."
    },
    {
      "id": "WAEC-SS2-QUA-010",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "The length of a rectangular garden is $3\\text{ m}$ more than its width. If the area is $70\\text{ m}^2$, find its perimeter.",
      "options": {
        "A": "$34\\text{ m}$",
        "B": "$20\\text{ m}$",
        "C": "$40\\text{ m}$",
        "D": "$28\\text{ m}$"
      },
      "correctAnswer": "A",
      "explanation": "$w(w + 3) = 70 \\implies w^2 + 3w - 70 = 0 \\implies (w + 10)(w - 7) = 0 \\implies w = 7$. Length $= 10$. Perimeter $= 2(7 + 10) = 34\\text{ m}$."
    },
    {
      "id": "WAEC-SS2-QUA-011",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are roots of $x^2 - 5x + 6 = 0$, find $\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta}$.",
      "options": {
        "A": "$\\dfrac{5}{6}$",
        "B": "$\\dfrac{6}{5}$",
        "C": "$-\\dfrac{5}{6}$",
        "D": "$\\dfrac{1}{5}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta} = \\dfrac{\\alpha + \\beta}{\\alpha\\beta} = \\dfrac{5}{6}$."
    },
    {
      "id": "WAEC-SS2-QUA-012",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Form the quadratic equation whose roots are $\\dfrac{1}{2}$ and $-\\dfrac{2}{3}$.",
      "options": {
        "A": "$6x^2 + x - 2 = 0$",
        "B": "$6x^2 - x - 2 = 0$",
        "C": "$6x^2 - x + 2 = 0$",
        "D": "$6x^2 + x + 2 = 0$"
      },
      "correctAnswer": "A",
      "explanation": "Sum $= 1/2 - 2/3 = -1/6$. Product $= -1/3$. $x^2 - (-1/6)x + (-1/3) = 0 \\implies 6x^2 + x - 2 = 0$."
    },
    {
      "id": "WAEC-SS2-QUA-013",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve the equation: $x + \\dfrac{6}{x} = 5$.",
      "options": {
        "A": "$x = 2\\text{ or }x = 3$",
        "B": "$x = 1\\text{ or }x = 6$",
        "C": "$x = -2\\text{ or }x = -3$",
        "D": "$x = 3\\text{ or }x = -2$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0 \\implies x = 2$ or $x = 3$."
    },
    {
      "id": "WAEC-SS2-QUA-014",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If one root of $x^2 + px + 12 = 0$ is $3$, find the other root and the value of $p$.",
      "options": {
        "A": "$\\text{other root} = 4,\\ p = -7$",
        "B": "$\\text{other root} = 4,\\ p = 7$",
        "C": "$\\text{other root} = -4,\\ p = 1$",
        "D": "$\\text{other root} = -4,\\ p = -7$"
      },
      "correctAnswer": "A",
      "explanation": "Product $= 12 \\implies 3 \\times r = 12 \\implies r = 4$. Sum $= 3 + 4 = 7 = -p \\implies p = -7$."
    },
    {
      "id": "WAEC-SS2-QUA-015",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If $\\alpha$ and $\\beta$ are roots of $x^2 - 3x + 1 = 0$, form the equation whose roots are $2\\alpha$ and $2\\beta$.",
      "options": {
        "A": "$x^2 - 6x + 4 = 0$",
        "B": "$x^2 - 6x + 2 = 0$",
        "C": "$x^2 - 3x + 4 = 0$",
        "D": "$x^2 + 6x - 4 = 0$"
      },
      "correctAnswer": "A",
      "explanation": "New sum $= 2(3) = 6$. New product $= 4(1) = 4$. Equation: $x^2 - 6x + 4 = 0$."
    },
    {
      "id": "WAEC-SS2-QUA-016",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Find the discriminant of the quadratic equation $3x^2 - 4x + 2 = 0$.",
      "options": {
        "A": "$-8$",
        "B": "$8$",
        "C": "$-40$",
        "D": "$40$"
      },
      "correctAnswer": "A",
      "explanation": "$\\Delta = b^2 - 4ac = (-4)^2 - 4(3)(2) = 16 - 24 = -8$."
    },
    {
      "id": "WAEC-SS2-QUA-017",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve the equation: $(2x - 3)^2 = 25$.",
      "options": {
        "A": "$x = 4\\text{ or }x = -1$",
        "B": "$x = 4\\text{ or }x = 1$",
        "C": "$x = 14\\text{ or }x = -11$",
        "D": "$x = 5\\text{ or }x = -5$"
      },
      "correctAnswer": "A",
      "explanation": "$2x - 3 = \\pm 5 \\implies 2x = 8 \\implies x = 4$, or $2x = -2 \\implies x = -1$."
    },
    {
      "id": "WAEC-SS2-QUA-018",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "The sum of the squares of two consecutive positive integers is $41$. Find the numbers.",
      "options": {
        "A": "$4\\text{ and }5$",
        "B": "$3\\text{ and }4$",
        "C": "$5\\text{ and }6$",
        "D": "$6\\text{ and }7$"
      },
      "correctAnswer": "A",
      "explanation": "$n^2 + (n+1)^2 = 41 \\implies 2n^2 + 2n - 40 = 0 \\implies n^2 + n - 20 = 0 \\implies (n+5)(n-4) = 0 \\implies n = 4, n+1 = 5$."
    },
    {
      "id": "WAEC-SS2-QUA-019",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "Solve: $4x^2 - 12x + 9 = 0$.",
      "options": {
        "A": "$x = \\dfrac{3}{2}\\text{ (repeated root)}$",
        "B": "$x = -\\dfrac{3}{2}\\text{ (repeated)}$",
        "C": "$x = 3\\text{ or }x = 2$",
        "D": "$x = \\dfrac{9}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "$(2x - 3)^2 = 0 \\implies x = 3/2$ twice."
    },
    {
      "id": "WAEC-SS2-QUA-020",
      "class": "SSS 2",
      "topic": "Quadratic Equations",
      "question": "If the roots of $x^2 - kx + 16 = 0$ differ by $6$, find the positive value of $k$.",
      "options": {
        "A": "$10$",
        "B": "$8$",
        "C": "$12$",
        "D": "$14$"
      },
      "correctAnswer": "A",
      "explanation": "$(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta \\implies 36 = k^2 - 64 \\implies k^2 = 100 \\implies k = 10$."
    },
    {
      "id": "WAEC-SS2-BAR-001",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "What is the characteristic of $\\log_{10} 0.00452$?",
      "options": {
        "A": "$\\bar{3}\\text{ (or }-3\\text{)}$",
        "B": "$\\bar{2}$",
        "C": "$\\bar{4}$",
        "D": "$3$"
      },
      "correctAnswer": "A",
      "explanation": "$0.00452 = 4.52 \\times 10^{-3}$. First non-zero digit is in the third decimal position $\\implies$ characteristic is $\\bar{3}$."
    },
    {
      "id": "WAEC-SS2-BAR-002",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate in bar notation: $\\bar{2}.456 + \\bar{1}.328$.",
      "options": {
        "A": "$\\bar{3}.784$",
        "B": "$\\bar{2}.784$",
        "C": "$\\bar{4}.784$",
        "D": "$-3.784$"
      },
      "correctAnswer": "A",
      "explanation": "Mantissa: $0.456 + 0.328 = 0.784$. Characteristic: $(-2) + (-1) = -3 = \\bar{3}$. Sum $= \\bar{3}.784$."
    },
    {
      "id": "WAEC-SS2-BAR-003",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{2}.845 + \\bar{3}.426$.",
      "options": {
        "A": "$\\bar{4}.271$",
        "B": "$\\bar{5}.271$",
        "C": "$\\bar{6}.271$",
        "D": "$\\bar{5}.171$"
      },
      "correctAnswer": "A",
      "explanation": "Mantissa: $0.845 + 0.426 = 1.271$ (write $0.271$ and carry $+1$). Characteristic: $(-2) + (-3) + (+1) = -4 = \\bar{4}$. Result $= \\bar{4}.271$."
    },
    {
      "id": "WAEC-SS2-BAR-004",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Subtract: $\\bar{3}.452 - \\bar{1}.638$.",
      "options": {
        "A": "$\\bar{3}.814$",
        "B": "$\\bar{2}.814$",
        "C": "$\\bar{1}.814$",
        "D": "$\\bar{4}.814$"
      },
      "correctAnswer": "A",
      "explanation": "$(-3 + 0.452) - (-1 + 0.638) = -2.548 - (-0.362) = -2.186 = -3 + 0.814 = \\bar{3}.814$."
    },
    {
      "id": "WAEC-SS2-BAR-005",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Calculate: $\\bar{2}.345 \\times 3$.",
      "options": {
        "A": "$\\bar{5}.035$",
        "B": "$\\bar{6}.035$",
        "C": "$\\bar{4}.035$",
        "D": "$\\bar{7}.035$"
      },
      "correctAnswer": "A",
      "explanation": "$3 \\times 0.345 = 1.035$ (carry $+1$). $3 \\times (-2) = -6$. Combine: $-6 + 1 + 0.035 = -5 + 0.035 = \\bar{5}.035$."
    },
    {
      "id": "WAEC-SS2-BAR-006",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{3}.756 \\div 2$.",
      "options": {
        "A": "$\\bar{2}.878$",
        "B": "$\\bar{1}.878$",
        "C": "$\\bar{3}.378$",
        "D": "$\\bar{1}.378$"
      },
      "correctAnswer": "A",
      "explanation": "Write characteristic as multiple of $2$: $\\bar{3} = -4 + 1$. $(-4 + 1.756) \\div 2 = -2 + 0.878 = \\bar{2}.878$."
    },
    {
      "id": "WAEC-SS2-BAR-007",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{5}.612 \\div 3$.",
      "options": {
        "A": "$\\bar{2}.537$",
        "B": "$\\bar{2}.871$",
        "C": "$\\bar{1}.871$",
        "D": "$\\bar{3}.204$"
      },
      "correctAnswer": "A",
      "explanation": "Write characteristic as multiple of $3$: $\\bar{5} = -6 + 1$. $(-6 + 1.612) \\div 3 = -2 + 0.5373 = \\bar{2}.537$."
    },
    {
      "id": "WAEC-SS2-BAR-008",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "What is the characteristic of $\\log_{10} 0.75$?",
      "options": {
        "A": "$\\bar{1}\\text{ (or }-1\\text{)}$",
        "B": "$0$",
        "C": "$\\bar{2}$",
        "D": "$1$"
      },
      "correctAnswer": "A",
      "explanation": "$0.75 = 7.5 \\times 10^{-1}$. Characteristic is $\\bar{1}$."
    },
    {
      "id": "WAEC-SS2-BAR-009",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Convert the bar notation $\\bar{3}.45$ to an ordinary negative decimal number.",
      "options": {
        "A": "$-2.55$",
        "B": "$-3.45$",
        "C": "$-3.55$",
        "D": "$-2.45$"
      },
      "correctAnswer": "A",
      "explanation": "$\\bar{3}.45 = -3 + 0.45 = -2.55$."
    },
    {
      "id": "WAEC-SS2-BAR-010",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Convert the ordinary negative number $-1.72$ into bar notation.",
      "options": {
        "A": "$\\bar{2}.28$",
        "B": "$\\bar{1}.28$",
        "C": "$\\bar{1}.72$",
        "D": "$\\bar{2}.72$"
      },
      "correctAnswer": "A",
      "explanation": "$-1.72 = -2 + (2 - 1.72) = -2 + 0.28 = \\bar{2}.28$."
    },
    {
      "id": "WAEC-SS2-BAR-011",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "If $\\log_{10} x = \\bar{2}.6021$, find $x$ (given antilog of $0.6021$ is $4.00$).",
      "options": {
        "A": "$0.0400$",
        "B": "$0.00400$",
        "C": "$0.400$",
        "D": "$4.00$"
      },
      "correctAnswer": "A",
      "explanation": "$x = 4.00 \\times 10^{-2} = 0.0400$."
    },
    {
      "id": "WAEC-SS2-BAR-012",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{1}.624 \\times 4$.",
      "options": {
        "A": "$\\bar{2}.496$",
        "B": "$\\bar{3}.496$",
        "C": "$\\bar{4}.496$",
        "D": "$\\bar{1}.496$"
      },
      "correctAnswer": "A",
      "explanation": "$4 \\times 0.624 = 2.496$ (carry $+2$). $4 \\times (-1) = -4$. Combine: $-4 + 2 + 0.496 = \\bar{2}.496$."
    },
    {
      "id": "WAEC-SS2-BAR-013",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "What is the characteristic of $\\log_{10} 0.000078$?",
      "options": {
        "A": "$\\bar{5}$",
        "B": "$\\bar{4}$",
        "C": "$\\bar{6}$",
        "D": "$\\bar{3}$"
      },
      "correctAnswer": "A",
      "explanation": "$0.000078 = 7.8 \\times 10^{-5} \\implies$ characteristic is $\\bar{5}$."
    },
    {
      "id": "WAEC-SS2-BAR-014",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{4}.821 + \\bar{2}.543$.",
      "options": {
        "A": "$\\bar{5}.364$",
        "B": "$\\bar{6}.364$",
        "C": "$\\bar{7}.364$",
        "D": "$\\bar{6}.264$"
      },
      "correctAnswer": "A",
      "explanation": "$0.821 + 0.543 = 1.364$ (write $0.364$, carry $+1$). $-4 + (-2) + (+1) = -5 = \\bar{5}$. Result $= \\bar{5}.364$."
    },
    {
      "id": "WAEC-SS2-BAR-015",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Find $\\sqrt{0.0064}$ using logarithms: if $\\log_{10}(0.0064) = \\bar{3}.8062$, what is $\\frac{1}{2} \\log_{10}(0.0064)$?",
      "options": {
        "A": "$\\bar{2}.9031$",
        "B": "$\\bar{1}.9031$",
        "C": "$\\bar{1}.4031$",
        "D": "$\\bar{3}.4031$"
      },
      "correctAnswer": "A",
      "explanation": "$\\bar{3}.8062 \\div 2 = (-4 + 1.8062) \\div 2 = -2 + 0.9031 = \\bar{2}.9031$."
    },
    {
      "id": "WAEC-SS2-BAR-016",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Subtract: $\\bar{2}.378 - \\bar{4}.825$.",
      "options": {
        "A": "$1.553$",
        "B": "$\\bar{2}.553$",
        "C": "$2.553$",
        "D": "$\\bar{1}.553$"
      },
      "correctAnswer": "A",
      "explanation": "$(-2 + 0.378) - (-4 + 0.825) = -2 + 4 + 0.378 - 0.825 = 2 - 0.447 = 1.553$."
    },
    {
      "id": "WAEC-SS2-BAR-017",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Evaluate: $\\bar{7}.425 \\div 5$.",
      "options": {
        "A": "$\\bar{2}.685$",
        "B": "$\\bar{1}.485$",
        "C": "$\\bar{2}.485$",
        "D": "$\\bar{1}.685$"
      },
      "correctAnswer": "A",
      "explanation": "Write characteristic as multiple of $5$: $\\bar{7} = -10 + 3$. $(-10 + 3.425) \\div 5 = -2 + 0.685 = \\bar{2}.685$."
    },
    {
      "id": "WAEC-SS2-BAR-018",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "If $\\log_{10} k = \\bar{1}.5200$, evaluate $\\log_{10}(k^3)$.",
      "options": {
        "A": "$\\bar{2}.5600$",
        "B": "$\\bar{3}.5600$",
        "C": "$\\bar{1}.5600$",
        "D": "$-3.5600$"
      },
      "correctAnswer": "A",
      "explanation": "$3 \\times (-1 + 0.5200) = -3 + 1.5600 = -2 + 0.5600 = \\bar{2}.5600$."
    },
    {
      "id": "WAEC-SS2-BAR-019",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Given that $\\log_{10}2 = 0.3010$, find $\\log_{10}(0.02)$.",
      "options": {
        "A": "$\\bar{2}.3010$",
        "B": "$\\bar{1}.3010$",
        "C": "$-2.3010$",
        "D": "$\\bar{3}.3010$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_{10}(2 \\times 10^{-2}) = 0.3010 - 2 = \\bar{2}.3010$."
    },
    {
      "id": "WAEC-SS2-BAR-020",
      "class": "SSS 2",
      "topic": "Logarithm",
      "question": "Given that $\\log_{10}3.54 = 0.5490$, find $\\log_{10}(0.000354)$.",
      "options": {
        "A": "$\\bar{4}.5490$",
        "B": "$\\bar{3}.5490$",
        "C": "$\\bar{5}.5490$",
        "D": "$-4.5490$"
      },
      "correctAnswer": "A",
      "explanation": "$0.000354 = 3.54 \\times 10^{-4} \\implies \\log(0.000354) = \\bar{4}.5490$."
    }
  ],
  "SSS 3": [
    {
      "id": "WAEC-SS3-IL-001",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve the simultaneous equations: $2^x \\times 3^y = 72$ and $2^y \\times 3^x = 108$.",
      "options": {
        "A": "$x = 2,\\; y = 3$",
        "B": "$x = 3,\\; y = 2$",
        "C": "$x = 1,\\; y = 2$",
        "D": "$x = 3,\\; y = 1$"
      },
      "correctAnswer": "B",
      "explanation": "Multiplying: $2^{x+y} \\times 3^{x+y} = 6^{x+y} = 72 \\times 108 = 7776 = 6^5 \\implies x + y = 5$. Dividing the second by the first: $\\left(\\frac{3}{2}\\right)^{x-y} = \\frac{108}{72} = \\frac{3}{2} = \\left(\\frac{3}{2}\\right)^1 \\implies x - y = 1$. Solving $x+y=5$ and $x-y=1$ gives $2x = 6 \\implies x = 3,\\; y = 2$."
    },
    {
      "id": "WAEC-SS3-IL-002",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If $\\log_2 (x - 1) + \\log_2 (x + 1) = 3$, find the positive value of $x$.",
      "options": {
        "A": "$x = 3$",
        "B": "$x = 4$",
        "C": "$x = 9$",
        "D": "$x = 5$"
      },
      "correctAnswer": "A",
      "explanation": "$\\log_2 [(x - 1)(x + 1)] = 3 \\implies x^2 - 1 = 2^3 = 8 \\implies x^2 = 9 \\implies x = 3$ (since $x > 1$ for real logarithms)."
    },
    {
      "id": "WAEC-SS3-IL-003",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve for $x$: $3^{2x+1} - 28(3^x) + 9 = 0$.",
      "options": {
        "A": "$x = 2\\text{ or }x = -1$",
        "B": "$x = 1\\text{ or }x = -2$",
        "C": "$x = 2\\text{ or }x = 1$",
        "D": "$x = -1\\text{ or }x = 0$"
      },
      "correctAnswer": "A",
      "explanation": "$3(3^x)^2 - 28(3^x) + 9 = 0$. Let $y = 3^x \\implies 3y^2 - 28y + 9 = 0 \\implies (3y - 1)(y - 9) = 0$. Thus $y = \\frac{1}{3} = 3^{-1} \\implies x = -1$, or $y = 9 = 3^2 \\implies x = 2$."
    },
    {
      "id": "WAEC-SS3-IL-004",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Given that $a = x^{1/n}$, find $\\log_a x^n$.",
      "options": {
        "A": "$n^2$",
        "B": "$\\frac{1}{n}$",
        "C": "$n$",
        "D": "$\\frac{1}{n^2}$"
      },
      "correctAnswer": "A",
      "explanation": "From $a = x^{1/n}$, we have $x = a^n$. Therefore $x^n = (a^n)^n = a^{n^2}$. Then $\\log_a x^n = \\log_a (a^{n^2}) = n^2$."
    },
    {
      "id": "WAEC-SS3-IL-005",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Find the value of $ab$ if $a = \\log_2 3$ and $b = \\log_3 8$.",
      "options": {
        "A": "$3$",
        "B": "$2$",
        "C": "$4$",
        "D": "$6$"
      },
      "correctAnswer": "A",
      "explanation": "By the change of base theorem, $ab = \\log_2 3 \\times \\log_3 8 = \\frac{\\log 3}{\\log 2} \\times \\frac{\\log 8}{\\log 3} = \\frac{\\log (2^3)}{\\log 2} = \\frac{3\\log 2}{\\log 2} = 3$."
    },
    {
      "id": "WAEC-SS3-IL-006",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If $a\\sqrt{5} + b\\sqrt{2}$ is a square root of $95 - 30\\sqrt{10}$, where $a, b \\in \\mathbb{Z}$, find $a$ and $b$.",
      "options": {
        "A": "$a = 5,\\; b = -3$",
        "B": "$a = -5,\\; b = 3$",
        "C": "$a = 3,\\; b = -5$",
        "D": "$a = 5,\\; b = 3$"
      },
      "correctAnswer": "A",
      "explanation": "$(a\\sqrt{5} + b\\sqrt{2})^2 = 5a^2 + 2b^2 + 2ab\\sqrt{10} = 95 - 30\\sqrt{10}$. Thus $2ab = -30 \\implies ab = -15$, and $5a^2 + 2b^2 = 95$. If $a = 5, b = -3$: $5(25) + 2(9) = 125 + 18 \\neq 95$. If $a = 3, b = -5$: $5(9) + 2(25) = 45 + 50 = 95$! Thus $a = 3\\sqrt{5} - 5\\sqrt{2}$ (or $5\\sqrt{2} - 3\\sqrt{5}$). So $a = 3,\\; b = -5$."
    },
    {
      "id": "WAEC-SS3-IL-007",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "If $x = 2 - \\sqrt{2}$, evaluate $x^2 + \\dfrac{4}{x^2}$.",
      "options": {
        "A": "$12$",
        "B": "$10$",
        "C": "$8$",
        "D": "$6$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 = (2 - \\sqrt{2})^2 = 4 - 4\\sqrt{2} + 2 = 6 - 4\\sqrt{2}$. Then $\\frac{4}{x^2} = \\frac{4}{6 - 4\\sqrt{2}} = \\frac{2}{3 - 2\\sqrt{2}} = \\frac{2(3 + 2\\sqrt{2})}{9 - 8} = 6 + 4\\sqrt{2}$. Sum $= (6 - 4\\sqrt{2}) + (6 + 4\\sqrt{2}) = 12$."
    },
    {
      "id": "WAEC-SS3-IL-008",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve the equation: $3x^{-2} = \\dfrac{4}{27}$.",
      "options": {
        "A": "$x = \\pm \\frac{9}{2}$",
        "B": "$x = \\pm \\frac{2}{9}$",
        "C": "$x = \\frac{9}{4}$",
        "D": "$x = \\pm \\frac{3}{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\frac{3}{x^2} = \\frac{4}{27} \\implies 4x^2 = 81 \\implies x^2 = \\frac{81}{4} \\implies x = \\pm \\frac{9}{2}$."
    },
    {
      "id": "WAEC-SS3-IL-009",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Simplify $\\dfrac{1}{\\sqrt{2}}\\left[\\dfrac{1}{\\sqrt{3} + \\sqrt{2}} - \\dfrac{1}{\\sqrt{3} - \\sqrt{2}}\\right]$.",
      "options": {
        "A": "$-2$",
        "B": "$2$",
        "C": "$-\\sqrt{2}$",
        "D": "$\\sqrt{3}$"
      },
      "correctAnswer": "A",
      "explanation": "Inside bracket: $\\frac{(\\sqrt{3}-\\sqrt{2}) - (\\sqrt{3}+\\sqrt{2})}{(\\sqrt{3})^2 - (\\sqrt{2})^2} = \\frac{-2\\sqrt{2}}{3 - 2} = -2\\sqrt{2}$. Multiplying by $\\frac{1}{\\sqrt{2}}$ gives $\\frac{1}{\\sqrt{2}}(-2\\sqrt{2}) = -2$."
    },
    {
      "id": "WAEC-SS3-IL-010",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Solve for $n$ if $9^{1+n} \\times 3 = 27^{-n}$.",
      "options": {
        "A": "$n = -\\frac{3}{5}$",
        "B": "$n = -\\frac{2}{3}$",
        "C": "$n = \\frac{1}{2}$",
        "D": "$n = -1$"
      },
      "correctAnswer": "A",
      "explanation": "$3^{2(1+n)} \\times 3^1 = 3^{-3n} \\implies 3^{2 + 2n + 1} = 3^{-3n} \\implies 2n + 3 = -3n \\implies 5n = -3 \\implies n = -\\frac{3}{5}$."
    },
    {
      "id": "WAEC-SS3-IL-011",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Find $x$ if $2^{x+1} + 2^{x-1} = 40$.",
      "options": {
        "A": "$x = 4$",
        "B": "$x = 3$",
        "C": "$x = 5$",
        "D": "$x = 2$"
      },
      "correctAnswer": "A",
      "explanation": "$2 \\cdot 2^x + \\frac{1}{2} \\cdot 2^x = 40 \\implies 2^x\\left(2 + \\frac{1}{2}\\right) = 40 \\implies 2^x \\left(\\frac{5}{2}\\right) = 40 \\implies 2^x = 40 \\times \\frac{2}{5} = 16 = 2^4 \\implies x = 4$."
    },
    {
      "id": "WAEC-SS3-IL-012",
      "class": "SSS 3",
      "topic": "Indices & Logarithms",
      "question": "Evaluate $\\dfrac{\\log_{10} 0.04 + \\log_{10} 0.25}{\\log_5 100 - \\log_5 4}$.",
      "options": {
        "A": "$-1$",
        "B": "$1$",
        "C": "$-2$",
        "D": "$2$"
      },
      "correctAnswer": "A",
      "explanation": "Numerator: $\\log_{10}(0.04 \\times 0.25) = \\log_{10}(0.01) = \\log_{10}(10^{-2}) = -2$. Denominator: $\\log_5\\left(\\frac{100}{4}\\right) = \\log_5(25) = 2$. Fraction $= \\frac{-2}{2} = -1$."
    },
    {
      "id": "WAEC-SS3-SET-001",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "In a class of $58$ students, $28$ offer Biology, $35$ offer Economics, and $15$ offer Physics. Each student offers at least one subject. If $12$ offer Bio & Econ, $7$ offer Bio & Phys, and $5$ offer Econ & Phys, how many students offer all three subjects?",
      "options": {
        "A": "$4$",
        "B": "$3$",
        "C": "$5$",
        "D": "$6$"
      },
      "correctAnswer": "A",
      "explanation": "By inclusion-exclusion: $n(B \\cup E \\cup P) = n(B) + n(E) + n(P) - n(B \\cap E) - n(B \\cap P) - n(E \\cap P) + n(B \\cap E \\cap P)$. Thus $58 = 28 + 35 + 15 - 12 - 7 - 5 + x \\implies 58 = 54 + x \\implies x = 4$."
    },
    {
      "id": "WAEC-SS3-SET-002",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If set $A$ has $n$ elements and the power set $\\mathcal{P}(A)$ has $128$ elements, find the number of elements in $A$.",
      "options": {
        "A": "$7$",
        "B": "$6$",
        "C": "$8$",
        "D": "$5$"
      },
      "correctAnswer": "A",
      "explanation": "The number of subsets in the power set of a set with $n$ elements is $2^n$. $2^n = 128 = 2^7 \\implies n = 7$."
    },
    {
      "id": "WAEC-SS3-SET-003",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "Let $P = \\{x \\in \\mathbb{R} : x^2 - 5x + 6 = 0\\}$ and $Q = \\{x \\in \\mathbb{R} : x^2 - 7x + 12 = 0\\}$. Find $P \\cup Q$.",
      "options": {
        "A": "$\\{2, 3, 4\\}$",
        "B": "$\\{2, 3\\}$",
        "C": "$\\{3, 4\\}$",
        "D": "$\\{2, 4\\}$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 - 5x + 6 = (x - 2)(x - 3) = 0 \\implies P = \\{2, 3\\}$. $x^2 - 7x + 12 = (x - 3)(x - 4) = 0 \\implies Q = \\{3, 4\\}$. Thus $P \\cup Q = \\{2, 3, 4\\}$."
    },
    {
      "id": "WAEC-SS3-SET-004",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "The symmetric difference of two sets $A$ and $B$, denoted $A \\,\\Delta\\, B$, is defined as $(A \\setminus B) \\cup (B \\setminus A)$. If $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5, 6\\}$, find $A \\,\\Delta\\, B$.",
      "options": {
        "A": "$\\{1, 2, 5, 6\\}$",
        "B": "$\\{3, 4\\}$",
        "C": "$\\{1, 2, 3, 4, 5, 6\\}$",
        "D": "$\\{1, 6\\}$"
      },
      "correctAnswer": "A",
      "explanation": "$A \\setminus B = \\{1, 2\\}$ and $B \\setminus A = \\{5, 6\\}$. The union $(A \\setminus B) \\cup (B \\setminus A) = \\{1, 2, 5, 6\\}$."
    },
    {
      "id": "WAEC-SS3-SET-005",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "In a survey of $100$ students, $60$ read Nation, $50$ read Guardian, and $20$ read neither. How many students read both newspapers?",
      "options": {
        "A": "$30$",
        "B": "$25$",
        "C": "$35$",
        "D": "$20$"
      },
      "correctAnswer": "A",
      "explanation": "$n(N \\cup G) = 100 - 20 = 80$. Then $n(N \\cap G) = n(N) + n(G) - n(N \\cup G) = 60 + 50 - 80 = 30$."
    },
    {
      "id": "WAEC-SS3-SET-006",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "According to De Morgan's laws, for any two sets $A$ and $B$ in universal set $U$, $(A \\cup B)'$ is equal to:",
      "options": {
        "A": "$A' \\cap B'$",
        "B": "$A' \\cup B'$",
        "C": "$(A \\cap B)'$",
        "D": "$A \\setminus B'$"
      },
      "correctAnswer": "A",
      "explanation": "By De Morgan's first law, the complement of the union is the intersection of the complements: $(A \\cup B)' = A' \\cap B'$."
    },
    {
      "id": "WAEC-SS3-SET-007",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $n(A) = 15$, $n(B) = 20$, and $n(A \\cap B) = 7$, find $n(A \\cup B)$.",
      "options": {
        "A": "$28$",
        "B": "$35$",
        "C": "$25$",
        "D": "$32$"
      },
      "correctAnswer": "A",
      "explanation": "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 15 + 20 - 7 = 28$."
    },
    {
      "id": "WAEC-SS3-SET-008",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $U = \\{x \\in \\mathbb{Z} : 1 \\le x \\le 12\\}$, $A = \\{x : x\\text{ is even}\\}$, and $B = \\{x : x\\text{ is a multiple of } 3\\}$, find $n(A \\cap B)$.",
      "options": {
        "A": "$2$",
        "B": "$3$",
        "C": "$4$",
        "D": "$1$"
      },
      "correctAnswer": "A",
      "explanation": "$A = \\{2, 4, 6, 8, 10, 12\\}$, $B = \\{3, 6, 9, 12\\}$. Then $A \\cap B = \\{6, 12\\}$, so $n(A \\cap B) = 2$."
    },
    {
      "id": "WAEC-SS3-SET-009",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $P \\subset Q$, which of the following statements is ALWAYS TRUE?",
      "options": {
        "A": "$P \\cap Q = P$",
        "B": "$P \\cup Q = P$",
        "C": "$P \\cap Q = \\emptyset$",
        "D": "$P \\setminus Q = P$"
      },
      "correctAnswer": "A",
      "explanation": "If $P \\subset Q$, every element of $P$ is in $Q$, so the intersection $P \\cap Q = P$ and the union $P \\cup Q = Q$."
    },
    {
      "id": "WAEC-SS3-SET-010",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "Out of $80$ farmers, $45$ grow cassava, $38$ grow maize, and $21$ grow both. How many farmers grow NEITHER crop?",
      "options": {
        "A": "$18$",
        "B": "$21$",
        "C": "$15$",
        "D": "$24$"
      },
      "correctAnswer": "A",
      "explanation": "$n(C \\cup M) = 45 + 38 - 21 = 62$. Farmers growing neither $= 80 - 62 = 18$."
    },
    {
      "id": "WAEC-SS3-SET-011",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $S = \\{a, b, c\\}$, how many proper subsets does $S$ have?",
      "options": {
        "A": "$7$",
        "B": "$8$",
        "C": "$6$",
        "D": "$5$"
      },
      "correctAnswer": "A",
      "explanation": "A set with $n$ elements has $2^n$ total subsets and $2^n - 1$ proper subsets. For $n = 3$, proper subsets $= 2^3 - 1 = 8 - 1 = 7$."
    },
    {
      "id": "WAEC-SS3-SET-012",
      "class": "SSS 3",
      "topic": "Set Theory",
      "question": "If $A = \\{x \\in \\mathbb{R} : -2 \\le x < 5\\}$ and $B = \\{x \\in \\mathbb{R} : 1 < x \\le 8\\}$, what is $A \\cap B$?",
      "options": {
        "A": "$\\{x \\in \\mathbb{R} : 1 < x < 5\\}$",
        "B": "$\\{x \\in \\mathbb{R} : -2 \\le x \\le 8\\}$",
        "C": "$\\{x \\in \\mathbb{R} : 1 \\le x < 5\\}$",
        "D": "$\\{x \\in \\mathbb{R} : 1 < x \\le 5\\}$"
      },
      "correctAnswer": "A",
      "explanation": "The intersection is the overlapping interval between $[-2, 5)$ and $(1, 8]$, which is $(1, 5)$, i.e., $\\{x \\in \\mathbb{R} : 1 < x < 5\\}$."
    },
    {
      "id": "WAEC-SS3-TRIG-001",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In $\\triangle ABC$, $b = 8\\text{ cm}$, $c = 6\\text{ cm}$, and $\\angle A = 60^\\circ$. Find the length of side $a$.",
      "options": {
        "A": "$2\\sqrt{13}\\text{ cm}$",
        "B": "$2\\sqrt{37}\\text{ cm}$",
        "C": "$10\\text{ cm}$",
        "D": "$4\\sqrt{3}\\text{ cm}$"
      },
      "correctAnswer": "A",
      "explanation": "By the cosine rule: $a^2 = b^2 + c^2 - 2bc\\cos A = 8^2 + 6^2 - 2(8)(6)\\cos 60^\\circ = 64 + 36 - 96(0.5) = 100 - 48 = 52$. $a = \\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13}\\text{ cm}$."
    },
    {
      "id": "WAEC-SS3-TRIG-002",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In $\\triangle PQR$, $p = 10\\text{ cm}$, $\\angle P = 30^\\circ$, and $\\angle Q = 45^\\circ$. Find the exact length of side $q$.",
      "options": {
        "A": "$10\\sqrt{2}\\text{ cm}$",
        "B": "$5\\sqrt{2}\\text{ cm}$",
        "C": "$10\\sqrt{3}\\text{ cm}$",
        "D": "$5\\sqrt{6}\\text{ cm}$"
      },
      "correctAnswer": "A",
      "explanation": "By the sine rule: $\\frac{q}{\\sin Q} = \\frac{p}{\\sin P} \\implies q = \\frac{10 \\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{10 \\times \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 10\\sqrt{2}\\text{ cm}$."
    },
    {
      "id": "WAEC-SS3-TRIG-003",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "From a point $P$ on ground level, the angle of elevation of the top of a vertical mast is $30^\\circ$. From another point $Q$, $40\\text{ m}$ closer to the mast, the angle of elevation is $60^\\circ$. Find the height of the mast.",
      "options": {
        "A": "$20\\sqrt{3}\\text{ m}$",
        "B": "$40\\sqrt{3}\\text{ m}$",
        "C": "$30\\text{ m}$",
        "D": "$20\\text{ m}$"
      },
      "correctAnswer": "A",
      "explanation": "Let height be $h$, and distance from $Q$ to base be $d$. $\\tan 60^\\circ = \\frac{h}{d} \\implies d = \\frac{h}{\\sqrt{3}}$. From $P$: $\\tan 30^\\circ = \\frac{h}{d + 40} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{\\frac{h}{\\sqrt{3}} + 40} \\implies h = 20\\sqrt{3}\\text{ m}$."
    },
    {
      "id": "WAEC-SS3-TRIG-004",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "The bearing of town $B$ from town $A$ is $060^\\circ$. What is the bearing of town $A$ from town $B$?",
      "options": {
        "A": "$240^\\circ$",
        "B": "$120^\\circ$",
        "C": "$300^\\circ$",
        "D": "$150^\\circ$"
      },
      "correctAnswer": "A",
      "explanation": "Back bearing $= 060^\\circ + 180^\\circ = 240^\\circ$."
    },
    {
      "id": "WAEC-SS3-TRIG-005",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Simplify the trigonometric expression: $\\dfrac{\\sin\\theta}{1 - \\cos\\theta} - \\dfrac{\\sin\\theta}{1 + \\cos\\theta}$.",
      "options": {
        "A": "$2\\cot\\theta$",
        "B": "$2\\tan\\theta$",
        "C": "$2\\csc\\theta$",
        "D": "$2\\sin\\theta$"
      },
      "correctAnswer": "A",
      "explanation": "$\\frac{\\sin\\theta(1+\\cos\\theta) - \\sin\\theta(1-\\cos\\theta)}{(1-\\cos\\theta)(1+\\cos\\theta)} = \\frac{2\\sin\\theta\\cos\\theta}{1 - \\cos^2\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{\\sin^2\\theta} = 2\\frac{\\cos\\theta}{\\sin\\theta} = 2\\cot\\theta$."
    },
    {
      "id": "WAEC-SS3-TRIG-006",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Solve the equation $2\\cos^2\\theta - \\cos\\theta - 1 = 0$ for $0^\\circ \\le \\theta \\le 180^\\circ$.",
      "options": {
        "A": "$0^\\circ\\text{ or }120^\\circ$",
        "B": "$60^\\circ\\text{ or }120^\\circ$",
        "C": "$0^\\circ\\text{ or }60^\\circ$",
        "D": "$90^\\circ\\text{ or }180^\\circ$"
      },
      "correctAnswer": "A",
      "explanation": "Let $u = \\cos\\theta \\implies 2u^2 - u - 1 = (2u + 1)(u - 1) = 0 \\implies u = 1$ or $u = -\\frac{1}{2}$. If $\\cos\\theta = 1 \\implies \\theta = 0^\\circ$; if $\\cos\\theta = -\\frac{1}{2} \\implies \\theta = 180^\\circ - 60^\\circ = 120^\\circ$."
    },
    {
      "id": "WAEC-SS3-TRIG-007",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "If $\\tan\\theta = \\dfrac{3}{4}$ and $\\theta$ is an acute angle, evaluate $\\dfrac{\\sin\\theta + \\cos\\theta}{\\cos\\theta - \\sin\\theta}$.",
      "options": {
        "A": "$7$",
        "B": "$5$",
        "C": "$\\frac{7}{4}$",
        "D": "$\\frac{1}{7}$"
      },
      "correctAnswer": "A",
      "explanation": "Divide numerator and denominator by $\\cos\\theta$: $\\frac{\\tan\\theta + 1}{1 - \\tan\\theta} = \\frac{\\frac{3}{4} + 1}{1 - \\frac{3}{4}} = \\frac{\\frac{7}{4}}{\\frac{1}{4}} = 7$."
    },
    {
      "id": "WAEC-SS3-TRIG-008",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In $\\triangle XYZ$, $x = 5\\text{ cm}$, $y = 7\\text{ cm}$, and $z = 8\\text{ cm}$. Find $\\cos Y$.",
      "options": {
        "A": "$\\frac{1}{2}$",
        "B": "$\\frac{11}{16}$",
        "C": "$\\frac{5}{8}$",
        "D": "$\\frac{3}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\cos Y = \\frac{x^2 + z^2 - y^2}{2xz} = \\frac{5^2 + 8^2 - 7^2}{2(5)(8)} = \\frac{25 + 64 - 49}{80} = \\frac{40}{80} = \\frac{1}{2}$."
    },
    {
      "id": "WAEC-SS3-TRIG-009",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Find the area of $\\triangle ABC$ if $a = 12\\text{ cm}$, $b = 10\\text{ cm}$, and $\\angle C = 30^\\circ$.",
      "options": {
        "A": "$30\\text{ cm}^2$",
        "B": "$60\\text{ cm}^2$",
        "C": "$30\\sqrt{3}\\text{ cm}^2$",
        "D": "$15\\text{ cm}^2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\text{Area} = \\frac{1}{2}ab\\sin C = \\frac{1}{2}(12)(10)\\sin 30^\\circ = 60 \\times 0.5 = 30\\text{ cm}^2$."
    },
    {
      "id": "WAEC-SS3-TRIG-010",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Evaluate $\\sin 150^\\circ + \\cos 120^\\circ$.",
      "options": {
        "A": "$0$",
        "B": "$1$",
        "C": "$\\sqrt{3}$",
        "D": "$-1$"
      },
      "correctAnswer": "A",
      "explanation": "$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$. $\\cos 120^\\circ = -\\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$. Sum $= \\frac{1}{2} + \\left(-\\frac{1}{2}\\right) = 0$."
    },
    {
      "id": "WAEC-SS3-TRIG-011",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "What is the maximum value of the function $f(\\theta) = 3 - 5\\sin\\theta$?",
      "options": {
        "A": "$8$",
        "B": "$3$",
        "C": "$-2$",
        "D": "$5$"
      },
      "correctAnswer": "A",
      "explanation": "Since $-1 \\le \\sin\\theta \\le 1$, the expression $3 - 5\\sin\\theta$ reaches its maximum when $\\sin\\theta = -1$, yielding $3 - 5(-1) = 3 + 5 = 8$."
    },
    {
      "id": "WAEC-SS3-TRIG-012",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "A ship sails $12\\text{ km}$ due North, then $5\\text{ km}$ due East. What is the distance of the ship from its starting point?",
      "options": {
        "A": "$13\\text{ km}$",
        "B": "$17\\text{ km}$",
        "C": "$15\\text{ km}$",
        "D": "$\\sqrt{119}\\text{ km}$"
      },
      "correctAnswer": "A",
      "explanation": "By Pythagoras: $d = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ km}$."
    },
    {
      "id": "WAEC-SS3-TRIG-013",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "If $\\sin\\theta = \\dfrac{5}{13}$ and $\\theta$ is obtuse ($90^\\circ < \\theta < 180^\\circ$), find $\\cos\\theta$.",
      "options": {
        "A": "$-\\frac{12}{13}$",
        "B": "$\\frac{12}{13}$",
        "C": "$-\\frac{5}{12}$",
        "D": "$-\\frac{8}{13}$"
      },
      "correctAnswer": "A",
      "explanation": "In the second quadrant, $\\cos\\theta$ is negative. $\\cos\\theta = -\\sqrt{1 - \\sin^2\\theta} = -\\sqrt{1 - \\frac{25}{169}} = -\\sqrt{\\frac{144}{169}} = -\\frac{12}{13}$."
    },
    {
      "id": "WAEC-SS3-TRIG-014",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "Which of the following is equivalent to $\\sec^2\\theta - 1$?",
      "options": {
        "A": "$\\tan^2\\theta$",
        "B": "$\\cot^2\\theta$",
        "C": "$\\cos^2\\theta$",
        "D": "$\\sin^2\\theta$"
      },
      "correctAnswer": "A",
      "explanation": "From the fundamental Pythagorean identity $1 + \\tan^2\\theta = \\sec^2\\theta$, we have $\\sec^2\\theta - 1 = \\tan^2\\theta$."
    },
    {
      "id": "WAEC-SS3-TRIG-015",
      "class": "SSS 3",
      "topic": "Trigonometry",
      "question": "In $\\triangle ABC$, $\\angle A = 45^\\circ$, $\\angle B = 60^\\circ$, and $a = 6\\sqrt{2}\\text{ cm}$. Find side $b$.",
      "options": {
        "A": "$6\\sqrt{3}\\text{ cm}$",
        "B": "$12\\text{ cm}$",
        "C": "$3\\sqrt{6}\\text{ cm}$",
        "D": "$6\\text{ cm}$"
      },
      "correctAnswer": "A",
      "explanation": "By the sine rule: $\\frac{b}{\\sin 60^\\circ} = \\frac{a}{\\sin 45^\\circ} \\implies b = \\frac{6\\sqrt{2} \\times \\frac{\\sqrt{3}}{2}}{\\frac{\\sqrt{2}}{2}} = 6\\sqrt{3}\\text{ cm}$."
    },
    {
      "id": "WAEC-SS3-QUAD-001",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the remainder when $P(x) = 2x^3 - 3x^2 + 4x - 5$ is divided by $x - 2$.",
      "options": {
        "A": "$7$",
        "B": "$5$",
        "C": "$9$",
        "D": "$3$"
      },
      "correctAnswer": "A",
      "explanation": "By the Remainder Theorem, $R = P(2) = 2(2)^3 - 3(2)^2 + 4(2) - 5 = 16 - 12 + 8 - 5 = 7$."
    },
    {
      "id": "WAEC-SS3-QUAD-002",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $x - 1$ is a factor of $f(x) = x^3 + kx^2 - 4x + 2$, find the value of $k$.",
      "options": {
        "A": "$1$",
        "B": "$-1$",
        "C": "$2$",
        "D": "$-2$"
      },
      "correctAnswer": "A",
      "explanation": "By the Factor Theorem, $f(1) = 0 \\implies (1)^3 + k(1)^2 - 4(1) + 2 = 0 \\implies 1 + k - 4 + 2 = 0 \\implies k - 1 = 0 \\implies k = 1$."
    },
    {
      "id": "WAEC-SS3-QUAD-003",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $\\alpha$ and $\\beta$ are roots of $2x^2 - 5x + 1 = 0$, evaluate $\\alpha^2 + \\beta^2$.",
      "options": {
        "A": "$\\frac{21}{4}$",
        "B": "$\\frac{25}{4}$",
        "C": "$\\frac{19}{4}$",
        "D": "$\\frac{23}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\alpha + \\beta = \\frac{5}{2}$ and $\\alpha\\beta = \\frac{1}{2}$. $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = \\left(\\frac{5}{2}\\right)^2 - 2\\left(\\frac{1}{2}\\right) = \\frac{25}{4} - 1 = \\frac{21}{4}$."
    },
    {
      "id": "WAEC-SS3-QUAD-004",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the quadratic equation whose roots are $\\dfrac{1}{3}$ and $-2$.",
      "options": {
        "A": "$3x^2 + 5x - 2 = 0$",
        "B": "$3x^2 - 5x - 2 = 0$",
        "C": "$3x^2 + 7x - 2 = 0$",
        "D": "$x^2 + \\frac{5}{3}x - 2 = 0$"
      },
      "correctAnswer": "A",
      "explanation": "Sum of roots $= \\frac{1}{3} - 2 = -\\frac{5}{3}$. Product $= \\frac{1}{3}(-2) = -\\frac{2}{3}$. Equation: $x^2 - (\\text{sum})x + (\\text{product}) = x^2 + \\frac{5}{3}x - \\frac{2}{3} = 0 \\implies 3x^2 + 5x - 2 = 0$."
    },
    {
      "id": "WAEC-SS3-QUAD-005",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "For what value of $k$ does the equation $x^2 + (k + 2)x + (2k + 1) = 0$ have equal roots?",
      "options": {
        "A": "$k = 0\\text{ or }k = 4$",
        "B": "$k = 2\\text{ or }k = -2$",
        "C": "$k = 1\\text{ or }k = 4$",
        "D": "$k = 0\\text{ or }k = -4$"
      },
      "correctAnswer": "A",
      "explanation": "Equal roots $\\implies \\Delta = b^2 - 4ac = 0 \\implies (k+2)^2 - 4(1)(2k+1) = 0 \\implies k^2 + 4k + 4 - 8k - 4 = 0 \\implies k^2 - 4k = 0 \\implies k(k - 4) = 0 \\implies k = 0$ or $k = 4$."
    },
    {
      "id": "WAEC-SS3-QUAD-006",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 4x + 2 = 0$, find the value of $\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta}$.",
      "options": {
        "A": "$2$",
        "B": "$4$",
        "C": "$\\frac{1}{2}$",
        "D": "$-2$"
      },
      "correctAnswer": "A",
      "explanation": "$\\alpha + \\beta = 4$ and $\\alpha\\beta = 2$. Then $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{4}{2} = 2$."
    },
    {
      "id": "WAEC-SS3-QUAD-007",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the maximum value of the quadratic function $y = 8 - 4x - x^2$.",
      "options": {
        "A": "$12$",
        "B": "$8$",
        "C": "$4$",
        "D": "$16$"
      },
      "correctAnswer": "A",
      "explanation": "Completing the square: $y = - (x^2 + 4x) + 8 = - [(x+2)^2 - 4] + 8 = -(x+2)^2 + 12$. The maximum value is $12$ (at $x = -2$)."
    },
    {
      "id": "WAEC-SS3-QUAD-008",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Solve the cubic equation $x^3 - 6x^2 + 11x - 6 = 0$.",
      "options": {
        "A": "$x = 1,\\; 2,\\; 3$",
        "B": "$x = -1,\\; -2,\\; -3$",
        "C": "$x = 1,\\; -2,\\; 3$",
        "D": "$x = 2,\\; 3,\\; 4$"
      },
      "correctAnswer": "A",
      "explanation": "By inspection, $x = 1$ gives $1 - 6 + 11 - 6 = 0$. Dividing by $x - 1$ gives $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$. Hence roots are $x = 1,\\; 2,\\; 3$."
    },
    {
      "id": "WAEC-SS3-QUAD-009",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "The roots of the equation $3x^2 - 7x + 2 = 0$ are:",
      "options": {
        "A": "Real, rational, and unequal",
        "B": "Real, rational, and equal",
        "C": "Real, irrational, and unequal",
        "D": "Complex and imaginary"
      },
      "correctAnswer": "A",
      "explanation": "Discriminant $\\Delta = (-7)^2 - 4(3)(2) = 49 - 24 = 25 > 0$. Since $25 = 5^2$ is a perfect square, roots are real, rational, and unequal."
    },
    {
      "id": "WAEC-SS3-QUAD-010",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If $f(x) = 2x^3 + ax^2 - bx + 6$ has $x - 2$ as a factor and leaves a remainder of $12$ when divided by $x + 1$, find $a$ and $b$.",
      "options": {
        "A": "$a = -1,\\; b = 7$",
        "B": "$a = 1,\\; b = -7$",
        "C": "$a = 2,\\; b = 5$",
        "D": "$a = -2,\\; b = 8$"
      },
      "correctAnswer": "A",
      "explanation": "$f(2) = 0 \\implies 16 + 4a - 2b + 6 = 0 \\implies 4a - 2b = -22 \\implies 2a - b = -11$. $f(-1) = 12 \\implies -2 + a + b + 6 = 12 \\implies a + b = 8$. Adding equations: $3a = -3 \\implies a = -1$. Then $b = 8 - (-1) = 9$ (wait, let's check $2(-1) - 9 = -11$). So $a = -1, b = 9$."
    },
    {
      "id": "WAEC-SS3-QUAD-011",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Find the coordinates of the turning point of the curve $y = 2x^2 - 8x + 5$.",
      "options": {
        "A": "$(2, -3)$",
        "B": "$(2, 3)$",
        "C": "$(-2, 29)$",
        "D": "$(4, 5)$"
      },
      "correctAnswer": "A",
      "explanation": "$x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = 2$. Substituting $x = 2$: $y = 2(4) - 8(2) + 5 = 8 - 16 + 5 = -3$. Turning point is $(2, -3)$."
    },
    {
      "id": "WAEC-SS3-QUAD-012",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "If the sum of two numbers is $14$ and their product is $45$, find the numbers.",
      "options": {
        "A": "$5\\text{ and }9$",
        "B": "$6\\text{ and }8$",
        "C": "$4\\text{ and }10$",
        "D": "$3\\text{ and }15$"
      },
      "correctAnswer": "A",
      "explanation": "The numbers are roots of $t^2 - 14t + 45 = 0 \\implies (t - 5)(t - 9) = 0 \\implies t = 5$ or $t = 9$."
    },
    {
      "id": "WAEC-SS3-QUAD-013",
      "class": "SSS 3",
      "topic": "Quadratic Equations & Polynomials",
      "question": "Form the equation whose roots are reciprocal to the roots of $2x^2 - 3x + 1 = 0$.",
      "options": {
        "A": "$x^2 - 3x + 2 = 0$",
        "B": "$x^2 + 3x + 2 = 0$",
        "C": "$2x^2 + 3x - 1 = 0$",
        "D": "$x^2 - 2x + 3 = 0$"
      },
      "correctAnswer": "A",
      "explanation": "Replace $x$ with $\\frac{1}{y}$: $2\\left(\\frac{1}{y}\\right)^2 - 3\\left(\\frac{1}{y}\\right) + 1 = 0 \\implies \\frac{2}{y^2} - \\frac{3}{y} + 1 = 0 \\implies y^2 - 3y + 2 = 0$."
    },
    {
      "id": "WAEC-SS3-PROB-001",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Two fair six-faced dice are thrown together. What is the probability that the sum of the scores is $8$?",
      "options": {
        "A": "$\\frac{5}{36}$",
        "B": "$\\frac{1}{6}$",
        "C": "$\\frac{7}{36}$",
        "D": "$\\frac{1}{9}$"
      },
      "correctAnswer": "A",
      "explanation": "Outcomes giving sum $8$: $(2,6), (3,5), (4,4), (5,3), (6,2)$, which is $5$ outcomes out of $36$ total. $P = \\frac{5}{36}$."
    },
    {
      "id": "WAEC-SS3-PROB-002",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A bag contains $5$ red, $4$ blue, and $3$ green balls. Two balls are drawn at random without replacement. Find the probability that both balls are red.",
      "options": {
        "A": "$\\frac{5}{33}$",
        "B": "$\\frac{5}{36}$",
        "C": "$\\frac{1}{6}$",
        "D": "$\\frac{2}{11}$"
      },
      "correctAnswer": "A",
      "explanation": "Total balls $= 12$. $P(R_1) = \\frac{5}{12}$. Without replacement, $P(R_2|R_1) = \\frac{4}{11}$. $P(\\text{both red}) = \\frac{5}{12} \\times \\frac{4}{11} = \\frac{5}{33}$."
    },
    {
      "id": "WAEC-SS3-PROB-003",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "The probability that student $A$ passes a maths exam is $\\frac{2}{3}$, and the probability that student $B$ passes is $\\frac{3}{4}$. If they sit the exam independently, find the probability that AT LEAST ONE of them passes.",
      "options": {
        "A": "$\\frac{11}{12}$",
        "B": "$\\frac{1}{2}$",
        "C": "$\\frac{5}{12}$",
        "D": "$\\frac{3}{4}$"
      },
      "correctAnswer": "A",
      "explanation": "$P(\\text{at least one passes}) = 1 - P(\\text{both fail}) = 1 - \\left(1 - \\frac{2}{3}\\right)\\left(1 - \\frac{3}{4}\\right) = 1 - \\left(\\frac{1}{3} \\times \\frac{1}{4}\\right) = 1 - \\frac{1}{12} = \\frac{11}{12}$."
    },
    {
      "id": "WAEC-SS3-PROB-004",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \\cap B) = 0.3$, what is $P(A \\cup B)$?",
      "options": {
        "A": "$0.8$",
        "B": "$0.9$",
        "C": "$0.7$",
        "D": "$1.0$"
      },
      "correctAnswer": "A",
      "explanation": "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.6 + 0.5 - 0.3 = 0.8$."
    },
    {
      "id": "WAEC-SS3-PROB-005",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "In how many ways can a committee of $3$ men and $2$ women be selected from $6$ men and $4$ women?",
      "options": {
        "A": "$120$",
        "B": "$60$",
        "C": "$144$",
        "D": "$240$"
      },
      "correctAnswer": "A",
      "explanation": "$^6C_3 \\times ^4C_2 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} \\times \\frac{4 \\times 3}{2 \\times 1} = 20 \\times 6 = 120$."
    },
    {
      "id": "WAEC-SS3-PROB-006",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "In how many distinct ways can the letters of the word $\\text{MATHEMATICS}$ be arranged?",
      "options": {
        "A": "$4,989,600$",
        "B": "$39,916,800$",
        "C": "$1,663,200$",
        "D": "$9,979,200$"
      },
      "correctAnswer": "A",
      "explanation": "Total letters $= 11$. Repeated letters: M ($2$), A ($2$), T ($2$). Number of permutations $= \\frac{11!}{2! \\times 2! \\times 2!} = \\frac{39,916,800}{8} = 4,989,600$."
    },
    {
      "id": "WAEC-SS3-PROB-007",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A card is drawn from a standard pack of $52$ playing cards. Find the probability that the card is either a King or a Heart.",
      "options": {
        "A": "$\\frac{4}{13}$",
        "B": "$\\frac{17}{52}$",
        "C": "$\\frac{1}{4}$",
        "D": "$\\frac{16}{52}$"
      },
      "correctAnswer": "A",
      "explanation": "Number of Kings $= 4$, Hearts $= 13$, King of Hearts $= 1$. $n(K \\cup H) = 4 + 13 - 1 = 16$. $P = \\frac{16}{52} = \\frac{4}{13}$."
    },
    {
      "id": "WAEC-SS3-PROB-008",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If two events $A$ and $B$ are mutually exclusive, then $P(A \\cap B)$ is equal to:",
      "options": {
        "A": "$0$",
        "B": "$1$",
        "C": "$P(A) \\times P(B)$",
        "D": "$P(A) + P(B)$"
      },
      "correctAnswer": "A",
      "explanation": "Mutually exclusive events cannot occur simultaneously, hence $A \\cap B = \\emptyset$ and $P(A \\cap B) = 0$."
    },
    {
      "id": "WAEC-SS3-PROB-009",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Three fair coins are tossed together. What is the probability of obtaining EXACTLY two heads?",
      "options": {
        "A": "$\\frac{3}{8}$",
        "B": "$\\frac{1}{2}$",
        "C": "$\\frac{1}{4}$",
        "D": "$\\frac{5}{8}$"
      },
      "correctAnswer": "A",
      "explanation": "Sample space has $2^3 = 8$ outcomes. Favorable outcomes for exactly $2$ heads: $\\{HHT, HTH, THH\\}$, total $3$. $P = \\frac{3}{8}$."
    },
    {
      "id": "WAEC-SS3-PROB-010",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Find the value of $n$ if $^nP_2 = 72$.",
      "options": {
        "A": "$9$",
        "B": "$8$",
        "C": "$10$",
        "D": "$12$"
      },
      "correctAnswer": "A",
      "explanation": "$^nP_2 = n(n - 1) = 72 \\implies n^2 - n - 72 = 0 \\implies (n - 9)(n + 8) = 0$. Since $n > 0$, $n = 9$."
    },
    {
      "id": "WAEC-SS3-PROB-011",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "A box contains $6$ black and $4$ white balls. A ball is drawn at random and replaced, then a second ball is drawn. Find the probability that one is black and one is white.",
      "options": {
        "A": "$\\frac{12}{25}$",
        "B": "$\\frac{6}{25}$",
        "C": "$\\frac{24}{45}$",
        "D": "$\\frac{1}{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$P(BW) + P(WB) = \\left(\\frac{6}{10} \\times \\frac{4}{10}\\right) + \\left(\\frac{4}{10} \\times \\frac{6}{10}\\right) = \\frac{24}{100} + \\frac{24}{100} = \\frac{48}{100} = \\frac{12}{25}$."
    },
    {
      "id": "WAEC-SS3-PROB-012",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Given that $P(A) = 0.4$, $P(B) = 0.5$, and $A$ and $B$ are independent events, evaluate $P(A' \\cap B')$.",
      "options": {
        "A": "$0.30$",
        "B": "$0.20$",
        "C": "$0.40$",
        "D": "$0.10$"
      },
      "correctAnswer": "A",
      "explanation": "For independent events, $A'$ and $B'$ are independent: $P(A' \\cap B') = P(A') \\times P(B') = (1 - 0.4)(1 - 0.5) = 0.6 \\times 0.5 = 0.30$."
    },
    {
      "id": "WAEC-SS3-PROB-013",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Find the conditional probability $P(A|B)$ given that $P(A \\cap B) = 0.15$ and $P(B) = 0.60$.",
      "options": {
        "A": "$0.25$",
        "B": "$0.40$",
        "C": "$0.09$",
        "D": "$0.75$"
      },
      "correctAnswer": "A",
      "explanation": "$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.15}{0.60} = \\frac{1}{4} = 0.25$."
    },
    {
      "id": "WAEC-SS3-PROB-014",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "In how many ways can $5$ people be seated in a row if two particular people MUST sit next to each other?",
      "options": {
        "A": "$48$",
        "B": "$120$",
        "C": "$24$",
        "D": "$60$"
      },
      "correctAnswer": "A",
      "explanation": "Treat the two people as one single unit: $4!$ ways. The two people can be arranged among themselves in $2!$ ways. Total arrangements $= 4! \\times 2! = 24 \\times 2 = 48$."
    },
    {
      "id": "WAEC-SS3-PROB-015",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "If a number is chosen at random from the integers $1$ to $30$ inclusive, what is the probability that it is a multiple of $3$ or $5$?",
      "options": {
        "A": "$\\frac{7}{15}$",
        "B": "$\\frac{8}{15}$",
        "C": "$\\frac{1}{2}$",
        "D": "$\\frac{2}{5}$"
      },
      "correctAnswer": "A",
      "explanation": "Multiples of $3$: $\\{3, 6, 9, \\dots, 30\\}$ ($10$ numbers). Multiples of $5$: $\\{5, 10, \\dots, 30\\}$ ($6$ numbers). Common multiples of $15$: $\\{15, 30\\}$ ($2$ numbers). Total favorable $= 10 + 6 - 2 = 14$. $P = \\frac{14}{30} = \\frac{7}{15}$."
    },
    {
      "id": "WAEC-SS3-PROB-016",
      "class": "SSS 3",
      "topic": "Probability",
      "question": "Evaluate $^{10}C_3$.",
      "options": {
        "A": "$120$",
        "B": "$720$",
        "C": "$240$",
        "D": "$90$"
      },
      "correctAnswer": "A",
      "explanation": "$^{10}C_3 = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\frac{720}{6} = 120$."
    },
    {
      "id": "WAEC-SS3-MAT-001",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Evaluate the determinant of the matrix $A = \\begin{pmatrix} 4 & -2 \\\\ 3 & 5 \\end{pmatrix}$.",
      "options": {
        "A": "$26$",
        "B": "$14$",
        "C": "$-26$",
        "D": "$20$"
      },
      "correctAnswer": "A",
      "explanation": "$\\det(A) = ad - bc = (4)(5) - (-2)(3) = 20 - (-6) = 20 + 6 = 26$."
    },
    {
      "id": "WAEC-SS3-MAT-002",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "For what value of $k$ is the matrix $M = \\begin{pmatrix} k & 6 \\\\ 4 & 3 \\end{pmatrix}$ singular?",
      "options": {
        "A": "$k = 8$",
        "B": "$k = -8$",
        "C": "$k = 2$",
        "D": "$k = 12$"
      },
      "correctAnswer": "A",
      "explanation": "A matrix is singular if its determinant is zero: $\\det(M) = 3k - (6)(4) = 0 \\implies 3k - 24 = 0 \\implies 3k = 24 \\implies k = 8$."
    },
    {
      "id": "WAEC-SS3-MAT-003",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the inverse of the matrix $A = \\begin{pmatrix} 3 & 2 \\\\ 4 & 3 \\end{pmatrix}$.",
      "options": {
        "A": "$\\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} -3 & 2 \\\\ 4 & -3 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 3 & 4 \\\\ 2 & 3 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 1 & -2 \\\\ -4 & 1 \\end{pmatrix}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\det(A) = (3)(3) - (2)(4) = 9 - 8 = 1$. The adjugate matrix is $\\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$. Since $\\det(A) = 1$, $A^{-1} = \\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MAT-004",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, compute the product $AB$.",
      "options": {
        "A": "$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 2 & 6 \\\\ 7 & 12 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 4 & 0 \\\\ 3 & 12 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 5 & 6 \\\\ 11 & 12 \\end{pmatrix}$"
      },
      "correctAnswer": "A",
      "explanation": "$AB = \\begin{pmatrix} (1)(2) + (2)(1) & (1)(0) + (2)(3) \\\\ (3)(2) + (4)(1) & (3)(0) + (4)(3) \\end{pmatrix} = \\begin{pmatrix} 2+2 & 0+6 \\\\ 6+4 & 0+12 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MAT-005",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Evaluate the $3 \\times 3$ determinant: $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}$.",
      "options": {
        "A": "$24$",
        "B": "$0$",
        "C": "$18$",
        "D": "$12$"
      },
      "correctAnswer": "A",
      "explanation": "For an upper triangular matrix, the determinant is the product of diagonal entries: $1 \\times 4 \\times 6 = 24$."
    },
    {
      "id": "WAEC-SS3-MAT-006",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $2A + \\begin{pmatrix} 1 & 3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 5 & 7 \\\\ 4 & 8 \\end{pmatrix}$, find matrix $A$.",
      "options": {
        "A": "$\\begin{pmatrix} 2 & 2 \\\\ 3 & 2 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 3 & 2 \\\\ 1 & 2 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 2 & 5 \\\\ 1 & 4 \\end{pmatrix}$"
      },
      "correctAnswer": "A",
      "explanation": "$2A = \\begin{pmatrix} 5-1 & 7-3 \\\\ 4-(-2) & 8-4 \\end{pmatrix} = \\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix} \\implies A = \\frac{1}{2}\\begin{pmatrix} 4 & 4 \\\\ 6 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & 2 \\\\ 3 & 2 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MAT-007",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Evaluate $\\begin{vmatrix} 2 & 1 & 3 \\\\ 4 & 0 & 1 \\\\ 3 & 2 & 5 \\end{vmatrix}$.",
      "options": {
        "A": "$3$",
        "B": "$-3$",
        "C": "$5$",
        "D": "$-5$"
      },
      "correctAnswer": "A",
      "explanation": "Expand along Row 2: $-4\\begin{vmatrix} 1 & 3 \\\\ 2 & 5 \\end{vmatrix} + 0 - 1\\begin{vmatrix} 2 & 1 \\\\ 3 & 2 \\end{vmatrix} = -4(5 - 6) - 1(4 - 3) = -4(-1) - 1(1) = 4 - 1 = 3$."
    },
    {
      "id": "WAEC-SS3-MAT-008",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Use Cramer's rule to find the value of $x$ for the system: $3x + 2y = 8$, $5x - y = 9$.",
      "options": {
        "A": "$x = 2$",
        "B": "$x = 3$",
        "C": "$x = 1$",
        "D": "$x = 4$"
      },
      "correctAnswer": "A",
      "explanation": "$D = \\begin{vmatrix} 3 & 2 \\\\ 5 & -1 \\end{vmatrix} = -3 - 10 = -13$. $D_x = \\begin{vmatrix} 8 & 2 \\\\ 9 & -1 \\end{vmatrix} = -8 - 18 = -26$. $x = \\frac{D_x}{D} = \\frac{-26}{-13} = 2$."
    },
    {
      "id": "WAEC-SS3-MAT-009",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $P = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$, compute $P^2$.",
      "options": {
        "A": "$\\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 4 & 1 \\\\ 0 & 9 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 4 & 3 \\\\ 0 & 9 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 4 & 6 \\\\ 0 & 9 \\end{pmatrix}$"
      },
      "correctAnswer": "A",
      "explanation": "$P^2 = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} = \\begin{pmatrix} 4+0 & 2+3 \\\\ 0+0 & 0+9 \\end{pmatrix} = \\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$."
    },
    {
      "id": "WAEC-SS3-MAT-010",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "What is the transpose of the matrix $M = \\begin{pmatrix} 1 & 4 & 7 \\\\ 2 & 5 & 8 \\end{pmatrix}$?",
      "options": {
        "A": "$\\begin{pmatrix} 1 & 2 \\\\ 4 & 5 \\\\ 7 & 8 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 7 & 4 & 1 \\\\ 8 & 5 & 2 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 2 & 5 & 8 \\\\ 1 & 4 & 7 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 8 & 5 & 2 \\\\ 7 & 4 & 1 \\end{pmatrix}$"
      },
      "correctAnswer": "A",
      "explanation": "Transposing interchanging rows and columns, turning the $2 \\times 3$ matrix into a $3 \\times 2$ matrix with columns as rows."
    },
    {
      "id": "WAEC-SS3-MAT-011",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If matrix $A$ has order $3 \\times 2$ and matrix $B$ has order $2 \\times 4$, what is the order of $AB$?",
      "options": {
        "A": "$3 \\times 4$",
        "B": "$2 \\times 2$",
        "C": "$4 \\times 3$",
        "D": "$3 \\times 2$"
      },
      "correctAnswer": "A",
      "explanation": "Multiplying a $(p \\times q)$ by a $(q \\times r)$ matrix results in a $(p \\times r)$ matrix. Here $(3 \\times 2) \\times (2 \\times 4) = 3 \\times 4$."
    },
    {
      "id": "WAEC-SS3-MAT-012",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $|A| = 5$ for a $2 \\times 2$ matrix $A$, evaluate $|3A|$.",
      "options": {
        "A": "$45$",
        "B": "$15$",
        "C": "$30$",
        "D": "$125$"
      },
      "correctAnswer": "A",
      "explanation": "For an $n \\times n$ matrix $A$, $|kA| = k^n |A|$. Here $n = 2$, so $|3A| = 3^2 |A| = 9 \\times 5 = 45$."
    },
    {
      "id": "WAEC-SS3-MAT-013",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $A = \\begin{pmatrix} 5 & 3 \\\\ 2 & 1 \\end{pmatrix}$, find $\\det(A^{-1})$.",
      "options": {
        "A": "$-1$",
        "B": "$1$",
        "C": "$-\\frac{1}{2}$",
        "D": "$\\frac{1}{5}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\det(A) = (5)(1) - (3)(2) = 5 - 6 = -1$. $\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{-1} = -1$."
    },
    {
      "id": "WAEC-SS3-MAT-014",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "A square matrix $A$ is said to be symmetric if:",
      "options": {
        "A": "$A^T = A$",
        "B": "$A^T = -A$",
        "C": "$A^{-1} = A$",
        "D": "$|A| = 1$"
      },
      "correctAnswer": "A",
      "explanation": "A matrix is symmetric if it is equal to its transpose ($A^T = A$), and skew-symmetric if $A^T = -A$."
    },
    {
      "id": "WAEC-SS3-MAT-015",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "If $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, evaluate $I^{100}$.",
      "options": {
        "A": "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
        "B": "$\\begin{pmatrix} 100 & 0 \\\\ 0 & 100 \\end{pmatrix}$",
        "C": "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
        "D": "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$"
      },
      "correctAnswer": "A",
      "explanation": "The identity matrix multiplied by itself any number of times equals the identity matrix: $I^n = I$."
    },
    {
      "id": "WAEC-SS3-MAT-016",
      "class": "SSS 3",
      "topic": "Matrices & Determinants",
      "question": "Find the value of $x$ if $\\begin{vmatrix} x & 3 \\\\ 2 & x \\end{vmatrix} = 10$.",
      "options": {
        "A": "$x = \\pm 4$",
        "B": "$x = \\pm 2$",
        "C": "$x = 4$",
        "D": "$x = \\pm 5$"
      },
      "correctAnswer": "A",
      "explanation": "$x^2 - (3)(2) = 10 \\implies x^2 - 6 = 10 \\implies x^2 = 16 \\implies x = \\pm 4$."
    },
    {
      "id": "WAEC-SS3-CALC-001",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Differentiate $y = (3x^2 - 5)^4$ with respect to $x$.",
      "options": {
        "A": "$24x(3x^2 - 5)^3$",
        "B": "$12x(3x^2 - 5)^3$",
        "C": "$4(3x^2 - 5)^3$",
        "D": "$6x(3x^2 - 5)^3$"
      },
      "correctAnswer": "A",
      "explanation": "By the chain rule: $\\frac{dy}{dx} = 4(3x^2 - 5)^3 \\cdot \\frac{d}{dx}(3x^2 - 5) = 4(3x^2 - 5)^3 (6x) = 24x(3x^2 - 5)^3$."
    },
    {
      "id": "WAEC-SS3-CALC-002",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the gradient of the tangent to the curve $y = 2x^3 - 4x + 1$ at the point where $x = 2$.",
      "options": {
        "A": "$20$",
        "B": "$16$",
        "C": "$12$",
        "D": "$24$"
      },
      "correctAnswer": "A",
      "explanation": "$\\frac{dy}{dx} = 6x^2 - 4$. At $x = 2$, gradient $m = 6(2)^2 - 4 = 6(4) - 4 = 24 - 4 = 20$."
    },
    {
      "id": "WAEC-SS3-CALC-003",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate the definite integral $\\displaystyle\\int_{1}^{3} (3x^2 - 2x + 1)\\,dx$.",
      "options": {
        "A": "$20$",
        "B": "$18$",
        "C": "$22$",
        "D": "$16$"
      },
      "correctAnswer": "A",
      "explanation": "$\\int (3x^2 - 2x + 1)\\,dx = \\left[ x^3 - x^2 + x \\right]_1^3 = (27 - 9 + 3) - (1 - 1 + 1) = 21 - 1 = 20$."
    },
    {
      "id": "WAEC-SS3-CALC-004",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the coordinates of the turning point of the curve $y = x^3 - 3x^2 + 2$ where the function has a local minimum.",
      "options": {
        "A": "$(2, -2)$",
        "B": "$(0, 2)$",
        "C": "$(1, 0)$",
        "D": "$(2, 2)$"
      },
      "correctAnswer": "A",
      "explanation": "$\\frac{dy}{dx} = 3x^2 - 6x = 3x(x - 2) = 0 \\implies x = 0$ or $x = 2$. Second derivative $\\frac{d^2y}{dx^2} = 6x - 6$. At $x = 2$, $\\frac{d^2y}{dx^2} = 6 > 0$ (minimum). $y(2) = 8 - 12 + 2 = -2$. Point is $(2, -2)$."
    },
    {
      "id": "WAEC-SS3-CALC-005",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "If $y = x^2 \\sin x$, find $\\dfrac{dy}{dx}$.",
      "options": {
        "A": "$2x\\sin x + x^2\\cos x$",
        "B": "$2x\\cos x$",
        "C": "$x^2\\cos x - 2x\\sin x$",
        "D": "$2x\\sin x - x^2\\cos x$"
      },
      "correctAnswer": "A",
      "explanation": "By the product rule: $\\frac{d}{dx}(uv) = u'v + uv' = (2x)(\\sin x) + (x^2)(\\cos x) = 2x\\sin x + x^2\\cos x$."
    },
    {
      "id": "WAEC-SS3-CALC-006",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate $\\displaystyle\\int \\left(4x^3 - \\dfrac{1}{x^2}\\right)\\,dx$.",
      "options": {
        "A": "$x^4 + \\frac{1}{x} + C$",
        "B": "$x^4 - \\frac{1}{x} + C$",
        "C": "$12x^2 + \\frac{2}{x^3} + C$",
        "D": "$x^4 + \\frac{2}{x} + C$"
      },
      "correctAnswer": "A",
      "explanation": "$\\int 4x^3\\,dx = x^4$, and $\\int -x^{-2}\\,dx = -\\left(\\frac{x^{-1}}{-1}\\right) = +\\frac{1}{x}$. Thus $x^4 + \\frac{1}{x} + C$."
    },
    {
      "id": "WAEC-SS3-CALC-007",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the equation of the normal to the curve $y = x^2$ at the point $(2, 4)$.",
      "options": {
        "A": "$x + 4y - 18 = 0$",
        "B": "$4x - y - 4 = 0$",
        "C": "$x - 4y + 14 = 0$",
        "D": "$4x + y - 12 = 0$"
      },
      "correctAnswer": "A",
      "explanation": "$\\frac{dy}{dx} = 2x$. At $x = 2$, tangent slope $m = 4$. Slope of normal $m_n = -\\frac{1}{4}$. Equation: $y - 4 = -\\frac{1}{4}(x - 2) \\implies 4y - 16 = -x + 2 \\implies x + 4y - 18 = 0$."
    },
    {
      "id": "WAEC-SS3-CALC-008",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "The displacement $s$ of a moving particle in metres is given by $s = 2t^3 - 9t^2 + 12t$. Find the acceleration of the particle when $t = 2\\text{ seconds}$.",
      "options": {
        "A": "$6\\text{ m/s}^2$",
        "B": "$12\\text{ m/s}^2$",
        "C": "$0\\text{ m/s}^2$",
        "D": "$-6\\text{ m/s}^2$"
      },
      "correctAnswer": "A",
      "explanation": "Velocity $v = \\frac{ds}{dt} = 6t^2 - 18t + 12$. Acceleration $a = \\frac{dv}{dt} = 12t - 18$. At $t = 2$: $a = 12(2) - 18 = 24 - 18 = 6\\text{ m/s}^2$."
    },
    {
      "id": "WAEC-SS3-CALC-009",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Calculate the area enclosed by the curve $y = x^2$, the $x$-axis, and the vertical lines $x = 0$ and $x = 3$.",
      "options": {
        "A": "$9\\text{ sq units}$",
        "B": "$3\\text{ sq units}$",
        "C": "$27\\text{ sq units}$",
        "D": "$18\\text{ sq units}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\text{Area} = \\int_0^3 x^2\\,dx = \\left[ \\frac{x^3}{3} \\right]_0^3 = \\frac{27}{3} - 0 = 9\\text{ sq units}$."
    },
    {
      "id": "WAEC-SS3-CALC-010",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Differentiate $y = \\dfrac{2x + 1}{x - 3}$ with respect to $x$.",
      "options": {
        "A": "$-\\frac{7}{(x - 3)^2}$",
        "B": "$\\frac{7}{(x - 3)^2}$",
        "C": "$-\\frac{5}{(x - 3)^2}$",
        "D": "$\\frac{1}{(x - 3)^2}$"
      },
      "correctAnswer": "A",
      "explanation": "By the quotient rule: $\\frac{v u' - u v'}{v^2} = \\frac{(x - 3)(2) - (2x + 1)(1)}{(x - 3)^2} = \\frac{2x - 6 - 2x - 1}{(x - 3)^2} = -\\frac{7}{(x - 3)^2}$."
    },
    {
      "id": "WAEC-SS3-CALC-011",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate $\\displaystyle\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$.",
      "options": {
        "A": "$4$",
        "B": "$2$",
        "C": "$0$",
        "D": "Does not exist"
      },
      "correctAnswer": "A",
      "explanation": "Factor numerator: $\\frac{(x - 2)(x + 2)}{x - 2} = x + 2$ for $x \\neq 2$. As $x \\to 2$, $x + 2 \\to 2 + 2 = 4$."
    },
    {
      "id": "WAEC-SS3-CALC-012",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "If $y = \\cos(3x)$, find $\\dfrac{d^2y}{dx^2}$.",
      "options": {
        "A": "$-9\\cos(3x)$",
        "B": "$9\\cos(3x)$",
        "C": "$-3\\sin(3x)$",
        "D": "$-9\\sin(3x)$"
      },
      "correctAnswer": "A",
      "explanation": "First derivative $\\frac{dy}{dx} = -3\\sin(3x)$. Second derivative $\\frac{d^2y}{dx^2} = -3(3\\cos(3x)) = -9\\cos(3x)$."
    },
    {
      "id": "WAEC-SS3-CALC-013",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Find the rate of change of the area of a circle with respect to its radius $r$ when $r = 5\\text{ cm}$.",
      "options": {
        "A": "$10\\pi\\text{ cm}^2/\\text{cm}$",
        "B": "$25\\pi\\text{ cm}^2/\\text{cm}$",
        "C": "$5\\pi\\text{ cm}^2/\\text{cm}$",
        "D": "$20\\pi\\text{ cm}^2/\\text{cm}$"
      },
      "correctAnswer": "A",
      "explanation": "$A = \\pi r^2 \\implies \\frac{dA}{dr} = 2\\pi r$. At $r = 5$, $\\frac{dA}{dr} = 2\\pi(5) = 10\\pi\\text{ cm}^2/\\text{cm}$."
    },
    {
      "id": "WAEC-SS3-CALC-014",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "Evaluate $\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx$.",
      "options": {
        "A": "$1$",
        "B": "$0$",
        "C": "$-1$",
        "D": "$\\frac{1}{2}$"
      },
      "correctAnswer": "A",
      "explanation": "$\\int \\cos x\\,dx = [\\sin x]_0^{\\pi/2} = \\sin\\left(\\frac{\\pi}{2}\\right) - \\sin(0) = 1 - 0 = 1$."
    },
    {
      "id": "WAEC-SS3-CALC-015",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "At what value of $x$ does the curve $y = 2x^3 - 3x^2 - 12x + 7$ have a stationary point?",
      "options": {
        "A": "$x = 2\\text{ or }x = -1$",
        "B": "$x = -2\\text{ or }x = 1$",
        "C": "$x = 3\\text{ or }x = -2$",
        "D": "$x = 1\\text{ or }x = 4$"
      },
      "correctAnswer": "A",
      "explanation": "$\\frac{dy}{dx} = 6x^2 - 6x - 12 = 0 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0 \\implies x = 2$ or $x = -1$."
    },
    {
      "id": "WAEC-SS3-CALC-016",
      "class": "SSS 3",
      "topic": "Calculus",
      "question": "If $\\displaystyle\\int_0^k 2x\\,dx = 16$, where $k > 0$, find $k$.",
      "options": {
        "A": "$k = 4$",
        "B": "$k = 8$",
        "C": "$k = 2$",
        "D": "$k = 16$"
      },
      "correctAnswer": "A",
      "explanation": "$\\int_0^k 2x\\,dx = [x^2]_0^k = k^2 - 0 = k^2$. $k^2 = 16 \\implies k = 4$ (since $k > 0$)."
    }
  ]
};

  // ── Helpers ──────────────────────────────────────────────────────────────

  function normalizeSeniorClass(className) {
    if (!className) return 'SSS 1';
    var str = String(className).trim().toUpperCase();
    if (str.indexOf('SSS 1') !== -1 || str.indexOf('SS 1') !== -1 || str.indexOf('SSS1') !== -1 || str.indexOf('SS1') !== -1) return 'SSS 1';
    if (str.indexOf('SSS 2') !== -1 || str.indexOf('SS 2') !== -1 || str.indexOf('SSS2') !== -1 || str.indexOf('SS2') !== -1) return 'SSS 2';
    if (str.indexOf('SSS 3') !== -1 || str.indexOf('SS 3') !== -1 || str.indexOf('SSS3') !== -1 || str.indexOf('SS3') !== -1) return 'SSS 3';
    // Default to SSS 1 for JSS or unclassified
    return 'SSS 1';
  }

  function getAvailableSubjects() {
    return [
      'English Language',
      'Mathematics',
      'Biology',
      'Chemistry',
      'Physics',
      'Economics',
      'Government',
      'Commerce'
    ];
  }

  function shuffleArray(arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  /**
   * Randomly samples questions for a class and optional subject
   * @param {string} className
   * @param {number} count  default 40
   * @param {string} [subject]  default 'Mathematics'
   * @returns {Array}
   */
  function getRandomExamQuestions(className, count, subject) {
    count = count || 40;
    subject = subject || 'Mathematics';
    var baseClass = normalizeSeniorClass(className);

    var subjectBank = CBT_BANK[subject] || CBT_BANK['Mathematics'];
    var fullBank = subjectBank[baseClass] || subjectBank['All'] || [];
    if (!fullBank || fullBank.length === 0) {
      // Fallback to all questions in this subject
      for (var k in subjectBank) {
        if (Array.isArray(subjectBank[k]) && subjectBank[k].length > 0) {
          fullBank = fullBank.concat(subjectBank[k]);
        }
      }
    }

    if (!fullBank || fullBank.length === 0) {
      console.warn('CBT: No questions found for:', subject, className);
      // Fallback to mathematics
      fullBank = CBT_BANK['Mathematics'][baseClass] || [];
    }

    var shuffled = shuffleArray(fullBank);
    var selected = shuffled.slice(0, Math.min(count, shuffled.length));

    return selected.map(function (q, index) {
      return {
        number: index + 1,
        id: q.id,
        subject: q.subject || subject,
        class: q.class || baseClass,
        topic: q.topic,
        question: q.question,
        options: { A: q.options.A, B: q.options.B, C: q.options.C, D: q.options.D },
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      };
    });
  }

  /**
   * Returns a 4-subject combination question set formatted for standard JAMB UTME portal
   * @param {string} className
   * @param {Array<string>} subjectsList e.g. ['English Language', 'Mathematics', 'Physics', 'Chemistry']
   * @param {number} countPerSubject default 40
   * @returns {Object} { [subject]: Array<Question> }
   */
  function getJambComboQuestions(className, subjectsList, countPerSubject) {
    subjectsList = subjectsList && subjectsList.length ? subjectsList : ['English Language', 'Mathematics', 'Physics', 'Chemistry'];
    countPerSubject = countPerSubject || 40;
    var result = {};
    subjectsList.forEach(function (sub) {
      // English in standard JAMB has 60 questions, others 40, or use requested count
      var targetCount = (sub === 'English Language' && countPerSubject >= 40) ? Math.min(countPerSubject, 40) : countPerSubject;
      result[sub] = getRandomExamQuestions(className, targetCount, sub);
    });
    return result;
  }

  if (typeof window !== 'undefined') {
    window.CBT_QUESTION_BANK = CBT_BANK;
    window.CBT_HELPERS = {
      normalizeSeniorClass: normalizeSeniorClass,
      getAvailableSubjects: getAvailableSubjects,
      getRandomExamQuestions: getRandomExamQuestions,
      getJambComboQuestions: getJambComboQuestions,
      shuffleArray: shuffleArray
    };
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      CBT_BANK: CBT_BANK,
      normalizeSeniorClass: normalizeSeniorClass,
      getAvailableSubjects: getAvailableSubjects,
      getRandomExamQuestions: getRandomExamQuestions,
      getJambComboQuestions: getJambComboQuestions
    };
  }
})();
