import React, { useState } from 'react';
import { Plus, Search, BookOpen, Clock, Tag, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { WritingCategory, WritingItem } from '../types';

interface WritingSectionProps {
  writings: WritingItem[];
  onOpenArticle: (item: WritingItem) => void;
  onOpenAddModal: () => void;
}

const CATEGORIES: WritingCategory[] = [
  'All',
  'Articles',
  'Blogs',
  'Marketing Copy',
  'Social Media Copy',
  'Brand Stories',
  'Event Content',
  'Creative Writing',
  'Opinions',
  'Campaign Copy',
];

export const WritingSection: React.FC<WritingSectionProps> = ({
  writings,
  onOpenArticle,
  onOpenAddModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<WritingCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWritings = writings.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredWritings = writings.filter((w) => w.featured);

  return (
    <section id="writing" className="py-24 border-b editorial-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with Action Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs uppercase font-mono tracking-widest text-[#C85A32] font-semibold">
              Core Discipline 04
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141210]">
              Content Writing &amp; Editorial Archive
            </h2>
            <p className="text-base sm:text-lg text-[#3D352E] font-normal leading-relaxed">
              Long-form essays, operational reflections, copywriting frameworks, and cultural stories. A living library expandable directly from your browser.
            </p>
          </div>

          {/* Add New Writing Button */}
          <button
            onClick={onOpenAddModal}
            className="self-start md:self-auto px-5 py-3 rounded-full bg-[#C85A32] hover:bg-[#B04C27] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Writing</span>
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-[#FAF8F5] p-5 rounded-2xl border editorial-border mb-12 space-y-4">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#3D352E]/60 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search essays, headlines, keywords or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white border editorial-border text-xs text-[#141210] placeholder-[#3D352E]/50 focus:outline-none focus:border-[#C85A32] transition"
            />
          </div>

          {/* Category Pills (Horizontal scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-medium tracking-wide whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#231F1C] text-white shadow-xs'
                    : 'bg-white border editorial-border text-[#3D352E] hover:border-[#C85A32]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Featured Section (if All is selected and no active search) */}
        {selectedCategory === 'All' && searchQuery.trim() === '' && (
          <div className="mb-14">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#141210] font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Featured Pieces</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredWritings.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenArticle(item)}
                  className="group bg-[#FAF8F5] rounded-2xl border editorial-border p-6 sm:p-8 flex flex-col justify-between cursor-pointer hover:border-[#C85A32]/50 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#3D352E]/70 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/20">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <Clock className="w-3 h-3 text-[#C85A32]" />
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#141210] group-hover:text-[#C85A32] transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#3D352E] leading-relaxed mb-6 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t editorial-border flex items-center justify-between text-xs">
                    <span className="text-[#3D352E]/70 text-[11px] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                    <span className="font-bold text-[#141210] group-hover:text-[#C85A32] flex items-center gap-1">
                      <span>Read Article</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Archive Grid */}
        <div>
          <div className="flex items-center justify-between border-b editorial-border pb-3 mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#141210] font-bold">
              {selectedCategory === 'All' ? 'Complete Archive' : `${selectedCategory} Archive`} ({filteredWritings.length})
            </h3>
            {searchQuery && (
              <span className="text-xs text-[#C85A32]">Filtered by "{searchQuery}"</span>
            )}
          </div>

          {filteredWritings.length === 0 ? (
            <div className="text-center py-16 bg-[#FAF8F5] rounded-2xl border editorial-border p-8">
              <BookOpen className="w-8 h-8 text-[#3D352E]/40 mx-auto mb-3" />
              <h4 className="text-base font-bold text-[#141210] mb-1">No writing pieces found</h4>
              <p className="text-xs text-[#3D352E] mb-4">
                Try searching for a different keyword or add a new piece to your library.
              </p>
              <button
                onClick={onOpenAddModal}
                className="px-4 py-2 bg-[#231F1C] text-white text-xs font-bold rounded-full hover:bg-[#C85A32] transition"
              >
                + Add Piece to this category
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWritings.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenArticle(item)}
                  className="group bg-[#FAF8F5] p-6 rounded-2xl border editorial-border flex flex-col justify-between cursor-pointer hover:border-[#C85A32]/50 hover:bg-white transition-all shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#3D352E]/70 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C85A32] font-semibold">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-mono">{item.readTime}</span>
                    </div>

                    <h4 className="text-base font-bold text-[#141210] group-hover:text-[#C85A32] transition-colors leading-snug mb-2 line-clamp-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-[#3D352E] leading-relaxed mb-4 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] bg-white border editorial-border text-[#3D352E]/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t editorial-border flex items-center justify-between text-[11px]">
                      <span className="text-[#3D352E]/60">{item.date}</span>
                      <span className="font-bold text-[#C85A32] group-hover:underline flex items-center gap-1">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
