const tricksDatabase = {
    // ==========================================
    // 1. NUMERICAL TRICKS & MULTIPLICATION
    // ==========================================
    "t_foil": {
        "title": "FOILing / LIOFing",
        "text": "LIOFing (Last-Inner+Outer-First) is the standard method for 2-digit by 2-digit multiplication. 1) Multiply Last digits. 2) Multiply Inner digits + Outer digits (add any carry). 3) Multiply First digits (add carry). Move 'down the line'."
    },
    "t_mult_11": {
        "title": "Multiplying by 11 (or 111)",
        "text": "Write the ones digit. Then add consecutive digits down the line (for 11, add pairs; for 111, add triples). Keep track of carries. The final digit is the leading digit (plus carry)."
    },
    "t_mult_101": {
        "title": "Multiplying by 101",
        "text": "Write down the last two digits (tens and ones). Then sum gap-connected digits (e.g., hundreds + ones, thousands + tens) and move down the line."
    },
    "t_mult_25": {
        "title": "Multiplying by 25",
        "text": "Treat 25 as 100/4. Divide the other number by 4, then multiply by 100 (move the decimal two places right). Example: 84 * 25 = (84/4) * 100 = 2100."
    },
    "t_mult_75": {
        "title": "Multiplying by 75",
        "text": "Treat 75 as (3/4) * 100. Divide the other number by 4, multiply the result by 3, and move the decimal two places right."
    },
    "t_mult_frac_100": {
        "title": "Multiplying by Fractions of 100 or 1000",
        "text": "Convert the number to a recognizable fraction (e.g., 125 = 1/8 of 1000, 33.3 = 1/3 of 100). Divide the target number by the denominator, then multiply by the magnitude."
    },
    "t_double_half": {
        "title": "Double and Half Trick",
        "text": "To multiply two numbers, double one and halve the other. Highly useful when one number ends in 5 or is an even teen. Example: 15 * 78 = 30 * 39 = 1170."
    },
    "t_mult_near_100": {
        "title": "Multiplying Two Numbers Near 100",
        "text": "Find how far each is from 100. Tens/Ones digit: multiply the differences. Rest of answer: add the difference of one number to the other. Be careful of negatives if one is above and one is below 100."
    },
    "t_square_end_5": {
        "title": "Squares Ending in 5",
        "text": "The last two digits are always 25. To find the leading digits, multiply the tens digit by one greater than itself. Example: 85^2 = (8 * 9) and 25 = 7225."
    },
    "t_square_41_59": {
        "title": "Squares from 41 to 59",
        "text": "Find the difference (k) between the number and 50. The last two digits are k^2. The first two digits are 25 + k (or 25 - k if the number is less than 50)."
    },
    "t_mult_equidistant": {
        "title": "Multiplying Numbers Equidistant from a 3rd Number",
        "text": "Find the middle number, square it, and subtract the square of the distance between them. Example: 83 * 87 = 85^2 - 2^2 = 7225 - 4 = 7221."
    },
    "t_mult_reverses": {
        "title": "Multiplying Reverses",
        "text": "For ab * ba: Ones digit is a*b. Tens digit is a^2 + b^2 (plus carry). Hundreds digit is a*b (plus carry)."
    },
    "t_factoring": {
        "title": "Factoring Numerical Problems",
        "text": "If a problem looks calculation-heavy, look for common factors. Example: 48*11 + 44*12 = 11*(48 + 4*12) = 11*96 = 1056."
    },
    "t_sum_sq_special": {
        "title": "Sum of Squares: Special Case",
        "text": "If the units digit of the 1st number is 1 greater than the tens digit of the 2nd, and the remaining digits sum to 10, the answer is the sum of the squares of the 1st number's digits multiplied by 101."
    },
    "t_diff_squares": {
        "title": "Difference of Squares",
        "text": "Use a^2 - b^2 = (a - b)(a + b). Turns difficult squaring into simple multiplication."
    },
    "t_mult_end_5": {
        "title": "Multiplying Two Numbers Ending in 5",
        "text": "If the tens sum is even, it ends in 25; if odd, 75. Leading digits: multiply the tens together, then add half the sum of the tens (drop any remainder)."
    },
    "t_mult_mixed": {
        "title": "Multiplying Mixed Numbers",
        "text": "If the sum of the fractional parts is 1 and the whole numbers are the same, multiply the fractions for the tail, and multiply the whole number by (itself + 1) for the lead."
    },
    "t_mult_a_ab": {
        "title": "a * a/b Trick",
        "text": "Result = [a + (a - b)] + (a - b)^2 / b. For fractions < 1, you subtract the difference. For > 1, you add it."
    },
    "t_mult_3x2": {
        "title": "Multiplying 3-Digit by 2-Digit",
        "text": "Group the digits. Perform FOIL/LIOF on the last two digits of the 3-digit number and the 2-digit number, keep the carry, then multiply the leading digit."
    },
    "t_mult_units_10": {
        "title": "Units Add to 10, Rest is the Same",
        "text": "Multiply the units for the last two digits. Multiply the leading digit by one greater than itself for the front."
    },
    "t_binomial_approx": {
        "title": "Binomial Approximation",
        "text": "For small x, (1 + x)^n is roughly 1 + nx. Example: 1000(1.0002)^50 ≈ 1000[1 + (.0002 * 50)] = 1010."
    },

    // ==========================================
    // 2. DIVISION & REMAINDERS
    // ==========================================
    "t_div_4_8": {
        "title": "Dividing by 4 or 8 (Remainders)",
        "text": "For 4, divide the last two digits by 4. For 8, divide the last three digits by 8 to find the remainder."
    },
    "t_div_3_9": {
        "title": "Dividing by 3 or 9 (Remainders)",
        "text": "Sum all the digits. Divide that sum by 3 or 9 to find the remainder."
    },
    "t_div_11": {
        "title": "Dividing by 11 (Remainders)",
        "text": "Add up alternating digits starting from the ones place, then subtract the sum of the remaining digits."
    },
    "t_div_9_trick": {
        "title": "Dividing by 9 (Finding the Quotient)",
        "text": "Add the digits from left to right. The first digit of the quotient is the first digit. The second is the sum of the first two, etc. The fractional remainder is the sum of all digits over 9."
    },
    "t_conv_40_80": {
        "title": "Converting a/40 and b/80 to Decimals",
        "text": "Divide the numerator by 4 (or 8), then shift the decimal point one place to the left (divide by 10)."
    },

    // ==========================================
    // 3. FRACTION ADDITION & SUBTRACTION
    // ==========================================
    "t_sub_reverses": {
        "title": "Subtracting Reverses",
        "text": "For abc - cba: Find the difference between the outer digits (a - c), multiply by 100, then subtract the difference (a - c) from that."
    },
    "t_sub_switch": {
        "title": "Switching Numbers and Negating on Subtraction",
        "text": "If a subtraction results in a messy negative mixed number, reverse the order of subtraction, solve normally, and slap a negative sign on the final answer."
    },
    "t_series_fract": {
        "title": "Series Fractions: a/[b(b+1)] + ...",
        "text": "Add up all the numerators. Divide that sum by (the smallest factor in the first denominator * the largest factor in the last denominator)."
    },
    "t_frac_ab_ba": {
        "title": "a/b + b/a Trick",
        "text": "The sum of a fraction and its reciprocal is always: 2 + (a - b)^2 / (ab)."
    },
    "t_frac_sub_complex": {
        "title": "a/b - (na-1)/(nb+1)",
        "text": "The numerator is (a + b). The denominator is b * (nb + 1)."
    },

    // ==========================================
    // 4. MEMORIZATION (COMMIT TO MEMORY)
    // ==========================================
    "t_mem_squares": {
        "title": "Squares",
        "text": "Commit these to memory: Squares up to 25 MUST be perfectly memorized. Memorization up to 50 is highly recommended for State Qualifier pace."
    },
    "t_mem_cubes": {
        "title": "Cubes",
        "text": "Commit these to memory: Cubes up to 15^3 (3375) and 20^3 (8000). You should know them instantly without FOILing."
    },
    "t_mem_powers": {
        "title": "Powers of 2, 3, and 5",
        "text": "Commit these to memory: Powers of 2 up to 2^10 (1024), powers of 3 up to 3^7 (2187), and powers of 5 up to 5^5 (3125)."
    },
    "t_mem_fractions": {
        "title": "Important Fractions",
        "text": "Commit these to memory: Fractions up to 1/16. Especially the eighths (1/8 = .125, 3/8 = .375) and ninths/elevenths families."
    },
    "t_mem_special": {
        "title": "Special Integers",
        "text": "Memorize their factorizations: 999 = 27*37. 77 = 1001/13. 3367 = 10101/3. 1430 = 10010/7. 1073 = 29*37."
    },
    "t_roman_num": {
        "title": "Roman Numerals",
        "text": "M=1000, D=500, C=100, L=50, X=10, V=5, I=1. If a smaller numeral is placed before a larger one, subtract it."
    },
    "t_platonic": {
        "title": "Platonic Solids & Euler's Formula",
        "text": "Euler's Formula: Faces + Vertices - Edges = 2. Memorize faces: Tetrahedron(4), Cube(6), Octahedron(8), Dodecahedron(12), Icosahedron(20)."
    },
    "t_pi_e": {
        "title": "Pi and e Approximations",
        "text": "Commit these to memory: pi ≈ 3.1, e ≈ 2.7, e^2 ≈ 7.4. Also: pi^2 ≈ 10, e^3 ≈ 20, and pi*e ≈ 8.5."
    },
    "t_conv_dist": {
        "title": "Distance and Velocity Conversions",
        "text": "1 mile = 5280 ft = 1760 yd. 1 mph = 22/15 ft/sec. 1 mph = 88/5 in/sec. Commit to memory."
    },
    "t_conv_area_vol": {
        "title": "Distance to Area / Volume Conversions",
        "text": "When converting areas or volumes, you must SQUARE or CUBE the linear conversion factor. (e.g., 1 yd = 3 ft, so 1 yd^3 = 27 ft^3)."
    },
    "t_conv_fluid": {
        "title": "Fluid and Weight Conversions",
        "text": "1 gal = 4 qt = 8 pt = 16 cups = 128 oz = 231 in^3. 1 cup = 8 oz. 1 ton = 2000 lbs."
    },
    "t_conv_temp": {
        "title": "Celsius to Fahrenheit",
        "text": "F = (9/5)C + 32. Shortcut: Double the Celsius temp, subtract 10% of that doubled number, then add 32."
    },

    // ==========================================
    // 5. GEOMETRY, TRIGONOMETRY & CALCULUS
    // ==========================================
    "t_diagonals": {
        "title": "Number of Diagonals of a Polygon",
        "text": "Diagonals = n(n - 3) / 2, where n is the number of sides."
    },
    "t_angles": {
        "title": "Exterior / Interior Angles",
        "text": "The sum of exterior angles is always 360. Each exterior = 360/n. Each interior is its supplement: 180 - (360/n)."
    },
    "t_geom_numbers": {
        "title": "Triangular, Pentagonal, etc. Numbers",
        "text": "Triangular (Tn) = n(n+1)/2. Square = n^2. Pentagonal = n(3n-1)/2. Hexagonal = n(4n-2)/2."
    },
    "t_triangle_sides": {
        "title": "Finding Sides of a Triangle",
        "text": "Right: a^2+b^2=c^2. Acute: a^2+b^2 > c^2. Obtuse: a^2+b^2 < c^2. If finding a hypotenuse given an odd leg 'a': find consecutive integers summing to a^2."
    },
    "t_equilateral": {
        "title": "Equilateral Triangle Formulas",
        "text": "Area = (s^2 * sqrt(3)) / 4. Height = (s * sqrt(3)) / 2."
    },
    "t_solids": {
        "title": "Formulas of Solids",
        "text": "Sphere Vol: (4/3)pi*r^3. Sphere SA: 4pi*r^2. Cone Vol: (1/3)pi*r^2*h. Cylinder Vol: pi*r^2*h. Cube body diagonal: s*sqrt(3)."
    },
    "t_combinations": {
        "title": "Combinations & Permutations",
        "text": "nCk = n! / [k! (n-k)!]. nPk = n! / (n-k)!. Also note nCk = nC(n-k), and nPk / nCk = k!."
    },
    "t_trig_values": {
        "title": "Trigonometric Values & ASTC",
        "text": "Memorize the first quadrant unit circle values. Use 'All Students Take Calculus' to remember quadrant signs (I: All, II: Sin, III: Tan, IV: Cos)."
    },
    "t_trig_formulas": {
        "title": "Trigonometric Formulas",
        "text": "sin^2 + cos^2 = 1. sin(2a) = 2sin(a)cos(a). cos(2a) = cos^2(a) - sin^2(a). sin(a+b) = sin(a)cos(b) + sin(b)cos(a)."
    },
    "t_trig_graphs": {
        "title": "Graphs of Sines/Cosines",
        "text": "For y = A sin[B(x-C)] + D: Amplitude = |A|. Period = 2pi / B. Phase shift = C. Vertical shift = D."
    },
    "t_parabola_vertex": {
        "title": "Vertex of a Parabola",
        "text": "For y = Ax^2 + Bx + C, the x-coordinate of the vertex is h = -B / (2A). Plug h back in to find k."
    },
    "t_discriminant": {
        "title": "Discriminant and Roots",
        "text": "If b^2 - 4ac > 0 (Distinct real roots). If = 0 (Equal real roots). If < 0 (Complex conjugate roots)."
    },
    "t_limits": {
        "title": "Calculus Limits & L'Hôpital",
        "text": "If direct substitution yields 0/0 or inf/inf, factor and cancel, or use L'Hôpital's rule: take the derivative of the top and bottom, then pass the limit."
    },
    "t_derivatives": {
        "title": "Calculus Derivatives",
        "text": "Power rule: move the exponent to the front as a coefficient and drop the power by 1. f(x)=cx^n -> f'(x)=cn*x^(n-1). Deriv of sin(x) = cos(x)."
    },
    "t_integration": {
        "title": "Calculus Integration",
        "text": "Reverse the power rule: raise the power by 1, then divide by the new power. Note: integrating an ODD function from -a to a always equals 0."
    },

    // ==========================================
    // 6. MISCELLANEOUS ALGEBRA & MATH
    // ==========================================
    "t_gcd_lcm": {
        "title": "GCD and LCM",
        "text": "Use Euclid's Algorithm for GCD (divide larger by smaller, find remainder, repeat with divisor and remainder). LCM(a,b) = (a * b) / GCD(a,b)."
    },
    "t_perfect_abundant": {
        "title": "Perfect, Abundant, Deficient Numbers",
        "text": "Perfect: sum of proper divisors equals itself (6, 28, 496). Abundant: sum > itself. Deficient: sum < itself (all primes are deficient)."
    },
    "t_binomial_coeff": {
        "title": "Binomial Coefficients",
        "text": "To find the sum of the coefficients of (ax + by)^n, simply plug in x=1 and y=1. E.g., for (5x - 9y)^3, sum = (5 - 9)^3 = -64."
    },
    "t_poly_roots": {
        "title": "Sum/Product of Polynomial Roots",
        "text": "Sum of roots = -b/a (second coeff over first). Product = c/a for quadratics, or -d/a for cubics. (Alternate sign of the constant term over leading term)."
    },
    "t_units_digit": {
        "title": "Units Digit of x^n",
        "text": "Find the cycle of the units digit (most repeat every 4 powers). Divide n by the cycle length to find the remainder r. The answer is the units digit of x^r."
    },
    "t_exponent_rules": {
        "title": "Exponent & Log Rules",
        "text": "x^a * x^b = x^(a+b). log_a(b^n) = n*log_a(b). log(a) + log(b) = log(ab). Change of base: log_a(b) = log(b)/log(a)."
    },
    "t_approx_roots": {
        "title": "Approximating Square/Cubed Roots",
        "text": "Factor out 100s for square roots (pulling out a 10) or 1000s for cubed roots (pulling out a 10). Estimate the remaining small number."
    },
    "t_complex": {
        "title": "Complex Numbers",
        "text": "FOIL normal multiplication but remember i^2 = -1. To rationalize division, multiply top and bottom by the complex conjugate of the denominator."
    },
    "t_inverses": {
        "title": "Function Inverses at a Point",
        "text": "Don't solve for the generic f^-1(x). Set the function equal to the target value and just solve for x. Also: if f(x)=(ax+b)/(cx+d), f^-1(x)=(-dx+b)/(cx-a)."
    },
    "t_probability": {
        "title": "Probability and Odds",
        "text": "Probability = Desired / Total. Odds = Desired / Undesired. If probability is a/b, odds are a/(b-a)."
    },
    "t_sets": {
        "title": "Sets and Subsets",
        "text": "Intersection (∩) = overlap. Union (∪) = all. Subsets = 2^n. Proper Subsets = 2^n - 1 (excludes the set itself)."
    },
    "t_bases_conv": {
        "title": "Changing Bases",
        "text": "Base n to 10: evaluate powers of n. Base 10 to n: divide by highest power of n, log quotient, use remainder for next power. Sum of powers (1+2+4+8) = next power - 1."
    },
    "t_rep_dec": {
        "title": "Repeating Decimals to Fractions",
        "text": ".aaaa... = a/9. .abab... = ab/99. .abbb... = (ab - a)/90. .abcbc... = (abc - a)/990. Always reduce your fractions!"
    },
    "t_mod_arith": {
        "title": "Modular Arithmetic",
        "text": "Remainders follow algebra rules. (A + B) mod n = (A mod n + B mod n) mod n. Same for multiplication."
    },
    "t_wilson": {
        "title": "Wilson's Theorem",
        "text": "For any prime p, (p - 1)! is congruent to (p - 1) mod p. Also: 1*1! + 2*2! + ... + n*n! = (n + 1)! - 1."
    },
    "t_fibonacci_prop": {
        "title": "Fibonacci Sequence Properties",
        "text": "The sum of the first n terms of a sequence is F_(n+2) - 1. Memorize standard numbers: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233."
    },
    
    // ==========================================
    // CATCH-ALL FOR RAW MATH
    // ==========================================
    "t_missing": {
        "title": "Fundamentals & Raw Math",
        "text": "There is no specific 'shortcut' for this. Rely on raw arithmetic calculation, order of operations, or standard algebra."
    }
};
