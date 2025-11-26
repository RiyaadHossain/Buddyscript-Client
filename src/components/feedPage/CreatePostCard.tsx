'use client';

import { useCreatePostMutation } from "@/redux/features/post/postApi";
import {
  Calendar,
  FileText,
  Image as LucideImage,
  Send,
  Video,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { toast } from "sonner";   // ← only this import added

export default function CreatePostCard() {
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [createPost] = useCreatePostMutation();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image too large. Max 5MB.");   // ← toast instead of alert
      return;
    }

    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handlePost = async () => {
    if (!postContent.trim() && !image) return;

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("text", postContent);
      if (image) formData.append("image", image);
      formData.append("privacy", "public");

      await createPost(formData).unwrap();

      toast.success("Posted successfully!");   // ← toast instead of alert

      setPostContent("");
      removeImage();
    } catch (error: any) {
      console.error("Failed to create post:", error);
      toast.error(error?.data?.message || "Failed to post. Try again.");   // ← toast instead of alert
    } finally {
      setIsLoading(false);
    }
  };

  // … rest of your JSX stays 100% the same
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
      {/* Avatar + Textarea */}
      <div className="flex items-start space-x-4">
        <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden">
          <Image
            src="/assets/images/people2.png"
            alt="You"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <textarea
            rows={3}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Write something..."
            className="w-full resize-none px-4 py-3 bg-gray-50 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />

          {preview && (
            <div className="relative rounded-xl overflow-hidden border-2 border-dashed border-gray-200 max-w-lg">
              <Image
                src={preview}
                alt="Preview"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
              <button
                onClick={removeImage}
                className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition">
            <LucideImage className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <button className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <Video className="w-5 h-5 text-red-600" />
            <span className="text-sm font-medium">Video</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium">Event</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">Article</span>
          </button>
        </div>

        <button
          onClick={handlePost}
          disabled={isLoading || (!postContent.trim() && !image)}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition"
        >
          {isLoading ? "Posting..." : (
            <>
              <Send className="w-4 h-4" />
              <span>Post</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}