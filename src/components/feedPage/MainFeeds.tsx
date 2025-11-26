"use client";

import React, { useEffect } from "react";
import CreatePostCard from "./CreatePostCard";
import PostCard from "./PostCard";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useAppDispatch } from "@/redux/hook/hook";
import { setToken } from "@/redux/api/authSlice";
import { useGetPostsQuery } from "@/redux/features/post/postApi";


const Feed = () => {
  const { data: session, status } = useSession
    ();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'loading') return; // wait for session

    if (status === 'unauthenticated') {
      router.push('/login'); // redirect if not logged in
    } else if (status === 'authenticated') {
      // Save token to Redux
      if (session?.user?.accessToken) {
        dispatch(setToken(session.user.accessToken));
      }
    }
  }, [status, session, dispatch, router]);

  // Fetch posts with RTK Query
  const { data, isLoading } = useGetPostsQuery({ page: 1, limit: 10 });
  if(isLoading) return <>Loading... </>; 

  if (status !== 'authenticated') return <div>Loading...</div>;
  

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      {/* Create Post Card */}
      <CreatePostCard/>

      {/* Post Card */}
      {data?.data.map((post) => <PostCard post={post} key={post._id} />)}
    </div>
  );
};

export default Feed;
