import React from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data/mockData';

export const NewsTicker: React.FC = () => {
  return (
    <div className="bg-amber-500 text-slate-950 text-xs font-medium py-2 px-4 border-b border-amber-600 flex items-center overflow-hidden">
      <div className="flex items-center gap-2 shrink-0 bg-slate-950 text-amber-400 px-3 py-1 rounded font-bold uppercase tracking-wider mr-4 shadow-sm text-[11px]">
        <Bell className="w-3.5 h-3.5 animate-bounce" />
        <span>Latest Updates</span>
      </div>

      <div className="overflow-hidden whitespace-nowrap flex-1 relative">
        <div className="animate-marquee inline-flex items-center gap-8">
          {ANNOUNCEMENTS.map((item) => (
            <span key={item.id} className="inline-flex items-center gap-2 cursor-pointer hover:underline">
              {item.isNew && (
                <span className="bg-red-700 text-white text-[10px] px-1.5 py-0.2 rounded font-bold">
                  NEW
                </span>
              )}
              <span className="font-semibold">{item.title}</span>
              <span className="text-slate-800 text-[11px]">({item.date})</span>
              <span className="text-amber-800 font-bold mx-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
