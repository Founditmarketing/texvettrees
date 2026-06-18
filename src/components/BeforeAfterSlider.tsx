import { useState, useRef, type PointerEvent as RPointerEvent, type KeyboardEvent as RKeyboardEvent } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export const SAGE = '#a9bd84'; // legible label color over bright photos

export function BeforeAfterSlider({
  before,
  after,
  title,
  reduce,
}: {
  before: string;
  after: string;
  title: string;
  reduce: boolean | null;
}) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const setFromX = (x: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  };

  const onPointerDown = (e: RPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setTouched(true);
    setFromX(e.clientX);
  };
  const onPointerMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    e.preventDefault();
    setFromX(e.clientX);
  };
  const endDrag = (e: RPointerEvent<HTMLDivElement>) => {
    setDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* pointer already released */
    }
  };

  const onKeyDown = (e: RKeyboardEvent<HTMLButtonElement>) => {
    const big = e.shiftKey ? 10 : 2;
    let next: number | null = null;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = pos - big;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = pos + big;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = 100;
    else if (e.key === 'PageDown') next = pos - 10;
    else if (e.key === 'PageUp') next = pos + 10;
    if (next !== null) {
      e.preventDefault();
      setTouched(true);
      setPos(Math.min(100, Math.max(0, next)));
    }
  };

  const imgClass = `absolute inset-0 w-full h-full object-cover ${
    reduce ? '' : 'transition-transform duration-700 group-hover:scale-[1.03]'
  }`;

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="absolute inset-0 select-none cursor-ew-resize"
      style={{ touchAction: 'none' }}
    >
      {/* AFTER (base) */}
      <img src={after} alt={`${title} — after, completed by Tex Vet Trees`} loading="lazy" decoding="async" className={imgClass} />
      {/* BEFORE (clipped overlay) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, transition: dragging || reduce ? 'none' : 'clip-path 150ms ease' }}
      >
        <img src={before} alt={`${title} — before`} loading="lazy" decoding="async" className={imgClass} />
      </div>

      {/* corner labels */}
      <span
        className="absolute top-3 left-3 bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
        style={{ color: SAGE, opacity: 0.35 + (pos / 100) * 0.65 }}
      >
        Before
      </span>
      <span
        className="absolute top-3 right-3 bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
        style={{ color: SAGE, opacity: 0.35 + ((100 - pos) / 100) * 0.65 }}
      >
        After
      </span>

      {/* seam */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-[#4c5230] pointer-events-none" style={{ left: `${pos}%`, transform: 'translateX(-1px)' }} />

      {/* knob (the focusable slider control) */}
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2" style={{ left: `${pos}%` }}>
        <button
          type="button"
          role="slider"
          tabIndex={0}
          aria-label={`Drag to compare before and after — ${title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% revealing the after photo`}
          onKeyDown={onKeyDown}
          className="grid h-11 w-11 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4c5230] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          <span className={`grid h-9 w-9 place-items-center rounded-full bg-[#4c5230] border border-white/30 shadow-lg ${!touched && !reduce ? 'animate-pulse' : ''}`}>
            <ChevronsLeftRight className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
        </button>
      </div>
    </div>
  );
}
