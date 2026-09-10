import React from 'react';

interface HeraldicCrestProps {
  className?: string;
  showText?: boolean;
}

export const HeraldicCrest: React.FC<HeraldicCrestProps> = ({
  className = '',
  showText = true,
}) => {
  return (
    <div
      id="heraldic-banner"
      className={`relative overflow-hidden bg-[#C91524] rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-between shadow-[0_20px_50px_rgba(201,21,36,0.35)] border border-[#ff4757]/20 transition-transform duration-500 hover:scale-[1.01] ${className}`}
    >
      {/* Subtle damask / royal watermark pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Subtle ambient light gradient */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Heraldic Lion Rampant Vector Graphic */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center min-h-[320px] sm:min-h-[420px] py-4">
        <svg
          viewBox="0 0 400 520"
          className="w-full h-auto max-h-[460px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* LION RAMPANT BODY & DETAILS (White #FFFFFF) */}
          <g fill="#FFFFFF">
            {/* Crown / Top tuft */}
            <path d="M210 52 C214 42 225 38 234 44 C243 50 240 62 230 68 C238 68 248 74 246 84 C244 94 232 98 220 94 Z" />
            
            {/* Head and jaws */}
            <path d="M190 70 C198 52 225 45 240 60 C252 72 258 92 250 110 C265 106 282 115 288 128 C294 142 284 156 270 160 C262 162 254 160 248 156 C246 166 238 174 228 178 C218 182 208 178 202 172 C196 182 186 188 174 186 C166 185 158 178 155 170 C146 168 138 160 138 150 C138 138 148 128 160 126 C162 114 170 102 180 94 C182 86 185 78 190 70 Z" />

            {/* Open mouth, sharp teeth, and majestic jaw */}
            <path d="M272 135 C282 135 292 142 290 152 C288 160 278 164 268 162 L260 150 Z" />
            
            {/* Fierce Tongue (Langued - red contrast) */}
            <path
              d="M266 142 C276 138 288 140 292 145 C295 149 292 153 285 152 C278 151 270 150 266 148 Z"
              fill="#A1101D"
            />

            {/* Eye (piercing dark accent) */}
            <circle cx="228" cy="98" r="4" fill="#A1101D" />

            {/* Fore-leg Dexter (Raised, clawing up high) */}
            <path d="M200 160 C215 140 235 125 255 110 C270 98 285 88 302 96 C314 102 322 118 316 130 C310 142 295 144 282 140 C272 148 260 162 250 178 L230 195 Z" />
            
            {/* Dexter Claws (Spurred) */}
            <path d="M305 92 C315 82 326 82 332 90 C336 96 332 105 324 108 C318 110 312 102 308 96 Z" />
            <path d="M318 106 C328 102 338 106 342 114 C344 120 338 128 330 128 C324 128 320 120 318 112 Z" />
            <path d="M312 124 C322 124 330 132 330 140 C330 146 322 150 314 146 C308 142 308 132 312 124 Z" />

            {/* Fore-leg Sinister (Forward reaching) */}
            <path d="M165 210 C150 200 135 195 120 200 C108 204 98 215 95 228 C92 240 102 250 115 250 C125 250 135 242 142 235 C155 242 170 248 185 252 Z" />
            {/* Sinister Claws */}
            <path d="M96 220 C86 215 76 218 72 225 C68 232 74 238 82 238 C88 238 94 232 96 225 Z" />
            <path d="M92 235 C82 234 74 240 72 248 C70 255 78 260 86 258 C92 256 94 248 94 240 Z" />

            {/* Massive Royal Mane and Torso */}
            <path d="M195 170 C175 190 160 220 155 250 C150 280 155 315 170 345 C185 375 210 395 240 405 C250 410 260 412 270 412 C255 385 250 355 255 325 C260 295 270 265 265 235 C260 205 245 180 225 165 Z" />

            {/* Mane ornamental spikes / flames */}
            <path d="M160 175 C145 180 135 192 135 208 C145 208 155 200 162 192 Z" />
            <path d="M142 215 C130 225 125 240 128 255 C138 252 146 242 148 230 Z" />
            <path d="M138 260 C125 272 120 290 126 308 C136 302 144 290 144 278 Z" />
            <path d="M145 310 C135 325 132 345 140 362 C148 355 154 342 152 330 Z" />

            {/* Hind-leg Dexter (Raised, stepping forward high) */}
            <path d="M175 360 C155 370 135 385 125 405 C115 425 120 445 135 455 C148 462 165 455 172 440 C180 425 195 410 215 400 Z" />
            {/* Dexter Foot & Claws */}
            <path d="M124 445 C112 452 105 465 110 475 C115 482 128 480 135 470 C140 462 135 452 128 448 Z" />
            <path d="M136 465 C128 475 126 488 135 495 C142 500 152 494 154 482 C155 472 148 466 140 466 Z" />

            {/* Hind-leg Sinister (Firm planted royal support) */}
            <path d="M230 395 C240 415 250 435 260 458 C268 475 280 492 295 496 C308 500 320 490 318 475 C316 455 305 435 292 415 C280 398 265 385 248 378 Z" />
            {/* Sinister Foot & Claws */}
            <path d="M298 485 C308 495 320 495 328 488 C334 480 328 468 318 468 C310 468 302 476 300 484 Z" />
            <path d="M285 492 C292 502 305 505 312 498 C318 490 312 482 304 482 C296 482 290 488 286 492 Z" />

            {/* Majestic Double-Arched Tail with Royal Tuft */}
            <path d="M250 380 C280 370 315 355 340 330 C365 305 378 265 365 230 C355 200 330 185 305 195 C285 205 280 230 295 245 C310 260 335 255 342 235 C348 255 340 280 320 300 C298 320 268 335 240 345 Z" />
            
            {/* Tail Flame Tuft */}
            <path d="M295 195 C285 180 270 175 255 180 C265 195 280 200 292 198 Z" />
            <path d="M305 185 C305 168 295 155 280 152 C285 168 295 178 305 184 Z" />
            <path d="M320 185 C325 165 320 150 305 142 C308 160 315 175 320 184 Z" />
            <path d="M335 195 C350 180 355 162 345 150 C340 168 335 182 332 195 Z" />
          </g>

          {/* HERALDIC SHIELD / ESCUTCHEON ON THE LION'S CHEST - PARTED PER PALE (EXACT MATCH TO IMAGE) */}
          <g filter="url(#shield-shadow)">
            {/* Shield Outer Outline & Border */}
            <path
              d="M172 215 L248 215 C248 215 250 255 250 275 C250 310 210 340 210 340 C210 340 170 310 170 275 C170 255 172 215 172 215 Z"
              fill="#FFFFFF"
              stroke="#0F1D16"
              strokeWidth="4"
            />

            <clipPath id="shield-clip">
              <path d="M174 217 L246 217 C246 217 248 255 248 273 C248 306 210 336 210 336 C210 336 172 306 172 273 C172 255 174 217 174 217 Z" />
            </clipPath>

            <g clipPath="url(#shield-clip)">
              {/* Left Side: Azure Blue (#1E40AF) */}
              <rect x="170" y="215" width="40" height="130" fill="#1E40AF" />

              {/* Heraldic 6-pointed Golden Star on the Azure field */}
              <g transform="translate(190, 260)">
                <polygon
                  points="0,-13 3.5,-4 13,-4 5,2.5 8,12 0,6 -8,12 -5,2.5 -13,-4 -3.5,-4"
                  fill="#FBBF24"
                  stroke="#D97706"
                  strokeWidth="0.8"
                />
              </g>

              {/* Right Side: Gules Imperial Red (#991B1B) */}
              <rect x="210" y="215" width="45" height="130" fill="#991B1B" />

              {/* Heraldic White Rose / Silver Cross on the Gules field */}
              <g transform="translate(230, 260)">
                {/* Silver cross with floriated ends */}
                <rect x="-2" y="-14" width="4" height="28" fill="#FFFFFF" rx="1" />
                <rect x="-12" y="-6" width="24" height="4" fill="#FFFFFF" rx="1" />
                <circle cx="0" cy="-4" r="5" fill="#FFFFFF" stroke="#991B1B" strokeWidth="1" />
                <circle cx="0" cy="-4" r="2" fill="#FBBF24" />
              </g>

              {/* Vertical partition line down the middle */}
              <line x1="210" y1="215" x2="210" y2="340" stroke="#0F1D16" strokeWidth="2.5" />
            </g>
          </g>

          <defs>
            <filter id="shield-shadow" x="160" y="205" width="100" height="145" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.35" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Classical Valukas Editorial Typography */}
      {showText && (
        <div className="relative z-10 w-full text-center pt-4 border-t border-white/20">
          <span className="font-cinzel text-3xl sm:text-4xl font-bold tracking-[0.25em] text-white uppercase drop-shadow-md block">
            VALUKAS
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.35em] text-white/80 uppercase font-montserrat mt-1 block">
            Liderança & Ghostwriting
          </span>
        </div>
      )}
    </div>
  );
};
