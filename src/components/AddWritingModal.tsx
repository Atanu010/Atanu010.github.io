import React, { useState } from 'react';
import { X, Plus, Sparkles, CheckCircle } from 'lucide-react';
import { WritingItem } from '../types';

interface AddWritingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWriting: (item: WritingItem) => void;
}

const CATEGORIES = [
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

export const AddWritingModal: React.FC<AddWritingModalProps> = ({
  isOpen,
  onClose,
  onAddWriting,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [readTime, setReadTime] = useState('4 min read');
  const [desc, setDesc] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('Operations, Strategy');
  const [coverImage, setCoverImage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPiece: WritingItem = {
      id: Date.now(),
      title: title.trim(),
      category,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      readTime: readTime.trim() || '3 min read',
      desc: desc.trim(),
      content: content.trim(),
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t.length > 0),
      coverImage: coverImage.trim() || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
      featured: false,
    };

    onAddWriting(newPiece);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setTitle('');
      setDesc('');
      setContent('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto modal-backdrop">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl border editorial-border shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#FAF8F5] px-6 py-4 border-b editorial-border flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C85A32] font-bold">
              Editorial Studio
            </span>
            <h3 className="text-lg font-bold text-[#141210]">Add New Writing Piece</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#141210] hover:bg-[#E6DDD5] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold text-[#141210]">Piece Published to Archive!</h4>
              <p className="text-xs text-[#3D352E]">
                Saved locally to your browser archive. Readers can explore it immediately.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., The Hidden Economics of Festival Logistics"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1">
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 4 min read"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1">
                  Brief Summary / Subtitle *
                </label>
                <input
                  type="text"
                  required
                  placeholder="A concise 1-2 sentence preview hook..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1">
                  Full Article Body (Markdown or Text) *
                </label>
                <textarea
                  required
                  rows={8}
                  placeholder="Write your piece here. You can separate paragraphs with double line breaks..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1">
                    Tags (Comma Separated)
                  </label>
                  <input
                    type="text"
                    placeholder="Events, Strategy, Operations"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-bold mb-1">
                    Cover Image URL (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border editorial-border text-xs text-[#141210] focus:outline-none focus:border-[#C85A32] transition"
                  />
                </div>
              </div>

              <div className="pt-4 border-t editorial-border flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#3D352E] hover:text-[#141210]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#C85A32] hover:bg-[#B04C27] text-white text-xs font-bold uppercase tracking-wider transition shadow"
                >
                  Publish Piece
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
