import React from "react";

const FirstIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
  version="1.0"
  xmlns="http://www.w3.org/2000/svg"
  width="32px"
  height="32px"
  viewBox="0 0 512 512"
  preserveAspectRatio="xMidYMid meet"
  {...props} // Allows passing additional props like className, style, etc.
>
  <g
    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    fill="#004c4c"
    stroke="#004c4c" 
    stroke-width="150"
  >
    <path
      d="M3546 5024 c-222 -54 -379 -257 -379 -489 2 -449 537 -672 854 -356
103 103 149 212 149 356 0 144 -46 253 -149 356 -128 127 -300 175 -475 133z
m266 -176 c68 -31 128 -89 165 -160 25 -48 28 -63 28 -153 0 -90 -3 -105 -28
-153 -37 -70 -97 -128 -166 -161 -47 -22 -70 -26 -141 -26 -76 0 -93 4 -152
33 -281 138 -247 540 55 638 64 21 171 13 239 -18z"
    />
    <path
      d="M2366 4805 c-136 -37 -269 -138 -339 -256 -56 -96 -79 -177 -80 -289
-1 -164 50 -287 168 -405 256 -256 677 -210 874 95 143 221 112 518 -73 703
-70 70 -170 128 -262 152 -71 18 -220 18 -288 0z m316 -179 c87 -42 152 -105
195 -194 36 -73 38 -80 38 -176 0 -92 -3 -107 -31 -166 -46 -95 -101 -153
-192 -197 -73 -37 -80 -38 -181 -38 -94 0 -112 3 -164 27 -119 56 -214 179
-237 310 -29 154 56 332 197 415 73 43 120 53 223 50 79 -3 105 -8 152 -31z"
    />
        <path
          d="M3335 3975 c-178 -39 -334 -153 -411 -299 l-27 -51 -366 0 c-412 0
    -423 -1 -566 -70 -162 -77 -290 -223 -350 -395 l-30 -85 -3 -309 c-2 -170 -1
    -320 3 -333 14 -56 249 -189 419 -238 48 -14 140 -32 203 -40 132 -17 438 -20
    563 -5 202 25 392 89 545 185 136 84 129 74 133 217 l4 123 167 -3 c189 -4
    332 12 479 54 107 30 293 121 351 170 l42 37 -3 286 c-3 282 -3 287 -30 361
    -34 91 -104 196 -172 256 -66 58 -192 120 -281 139 -93 20 -581 20 -670 0z
    m637 -156 c159 -34 291 -153 338 -307 15 -48 20 -93 20 -178 l0 -114 -104 0
    -104 0 -4 131 c-3 123 -4 132 -27 150 -32 26 -82 25 -109 -4 -21 -22 -22 -31
    -24 -332 l-3 -309 -35 -9 c-48 -11 -367 -21 -422 -13 l-45 7 -6 103 c-7 126
    -27 207 -74 300 -63 126 -154 223 -278 296 -22 13 -42 25 -44 26 -9 7 51 93
    94 136 56 54 121 92 196 112 68 18 549 22 631 5z m-1038 -381 c179 -69 303
    -211 341 -393 8 -38 15 -123 15 -187 l0 -118 -110 0 -110 0 0 104 c0 121 -3
    132 -41 151 -39 20 -53 19 -86 -9 l-28 -24 -5 -314 -5 -313 -60 -14 c-84 -19
    -562 -21 -662 -3 l-73 14 0 308 c0 170 -3 316 -6 325 -7 18 -55 45 -79 45 -9
    0 -30 -13 -46 -29 -28 -29 -29 -32 -29 -135 l0 -106 -106 0 -106 0 4 158 c3
    131 8 167 26 217 46 124 138 230 255 291 112 59 151 63 517 61 325 -3 325 -3
    394 -29z m1396 -407 c0 -26 -8 -33 -78 -69 -43 -23 -90 -46 -105 -51 l-27 -11
    0 80 0 80 105 0 105 0 0 -29z m-2380 -550 l0 -100 -37 15 c-21 9 -68 34 -105
    57 -67 41 -68 42 -68 84 l0 43 105 0 105 0 0 -99z m1340 66 c0 -20 -7 -41 -17
    -50 -19 -17 -183 -107 -195 -107 -5 0 -8 43 -8 95 l0 95 110 0 110 0 0 -33z"
        />
        <path
          d="M4116 2075 c-74 -19 -71 -17 -590 -309 -241 -135 -442 -246 -446
    -246 -5 0 -27 16 -50 35 -152 127 -524 267 -993 374 -377 86 -561 49 -808
    -163 l-67 -57 -53 33 c-44 28 -62 33 -113 33 -54 0 -77 -8 -209 -69 -111 -52
    -155 -78 -177 -104 -37 -45 -56 -124 -42 -172 16 -58 553 -1243 578 -1276 28
    -38 84 -66 146 -72 40 -4 64 3 175 53 70 31 147 67 170 81 47 27 87 87 97 147
    l7 38 222 -7 c250 -8 402 3 595 42 217 43 431 120 650 235 166 86 273 156 677
    440 176 124 377 265 448 313 131 90 174 135 201 213 60 172 -8 351 -159 422
    -63 30 -176 37 -259 16z m212 -172 c66 -49 89 -160 47 -232 -15 -25 -127 -110
    -410 -309 -555 -390 -699 -484 -875 -571 -262 -130 -479 -196 -744 -227 -114
    -13 -190 -15 -401 -9 -143 3 -263 10 -267 13 -3 4 -105 227 -227 496 l-220
    488 61 57 c258 239 377 254 908 115 253 -66 523 -164 639 -231 188 -107 221
    -228 79 -288 -76 -31 -150 -21 -481 66 -169 45 -310 79 -313 77 -7 -8 -44
    -141 -40 -146 2 -2 138 -40 303 -84 295 -80 299 -81 423 -82 122 -1 127 0 192
    32 114 56 179 162 164 267 l-7 42 158 88 c87 49 296 166 466 261 169 96 329
    180 355 189 64 20 154 15 190 -12z m-3301 -295 c6 -7 132 -284 282 -616 213
    -475 269 -607 261 -621 -9 -18 -246 -131 -273 -131 -8 0 -19 6 -25 13 -12 15
    -552 1213 -552 1226 0 16 32 35 149 88 122 56 142 61 158 41z"
        />
      </g>
    </svg>
  );
};

export default FirstIcon;
