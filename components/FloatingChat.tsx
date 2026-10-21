'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Đảm bảo chỉ render sau khi trang đã load xong trên trình duyệt
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const chatContent = (
    <div className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-[999999] pointer-events-auto">
      {/* Popup Menu Trợ Giúp */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 sm:w-80 rounded-2xl border border-amber-400/40 bg-black/95 p-4 text-white shadow-2xl backdrop-blur-md transition-all">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-bold text-amber-400">COSWHEEL Support Hub</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-sm font-bold px-2 py-1"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="py-3 text-xs text-gray-300 leading-relaxed">
            <p>👋 Need assistance with COSWHEEL e-bike fitment, specs, or VIP discount codes?</p>
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <Link
              href="/coswheel-ebike/contact"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-lg bg-amber-400 py-2.5 text-center text-xs font-extrabold uppercase tracking-wide text-black transition hover:bg-amber-300 flex items-center justify-center gap-1.5"
            >
              📩 Contact Support Desk
            </Link>
            <a
              href="#vip"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-lg border border-white/20 py-2.5 text-center text-xs font-semibold text-gray-200 transition hover:bg-white/10 text-center"
            >
              🎁 Claim VIP Price-Drop &amp; Deals
            </a>
          </div>
        </div>
      )}

      {/* Nút Chat tròn hình bong bóng tin nhắn */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '56px', height: '56px' }}
        className="flex shrink-0 items-center justify-center rounded-full bg-[#111] border-2 border-amber-400 text-amber-400 shadow-2xl transition-all duration-200 hover:scale-105 hover:bg-black focus:outline-none"
        aria-label="Open support menu"
      >
        {isOpen ? (
          <span className="text-lg font-bold text-amber-400">✕</span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-amber-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        )}
      </button>
    </div>
  );

  // Ép render trực tiếp vào body tag để không bị che bởi bất kỳ thẻ div nào
  return createPortal(chatContent, document.body);
}
