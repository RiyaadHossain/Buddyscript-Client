"use client";
import React from "react";
import {
  PlayCircle,
  BarChart3,
  UserPlus,
  Bookmark,
  Users,
  Gamepad2,
  Settings,
  Save,
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const menuItems = [
    { icon: PlayCircle, label: "Learning", badge: "New" },
    { icon: BarChart3, label: "Insights" },
    { icon: UserPlus, label: "Find friends" },
    { icon: Bookmark, label: "Bookmarks" },
    { icon: Users, label: "Group" },
    { icon: Gamepad2, label: "Gaming", badge: "New" },
    { icon: Settings, label: "Settings" },
    { icon: Save, label: "Save post" },
  ];

  const suggestedPeople = [
    {
      name: "Steve Jobs",
      role: "CEO of Apple",
      avatar: "SJ",
      avatarBg: "from-gray-700 to-gray-900",
      imageUrl: "/assets/images/card_ppl1.png",
    },
    {
      name: "Ryan Roslansky",
      role: "CEO of Linkedin",
      avatar: "RR",
      avatarBg: "from-blue-500 to-blue-700",
      imageUrl: "/assets/images/card_ppl2.png",
    },
    {
      name: "Dylan Field",
      role: "CEO of Figma",
      avatar: "DF",
      avatarBg: "from-purple-500 to-pink-500",
      imageUrl: "/assets/images/card_ppl3.png",
    },
  ];

  return (
    <div className="w-[350px] min-h-screen p-4 space-y-4">
      {/* Explore Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Explore</h2>

        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="h-5 w-5 text-gray-600 group-hover:text-blue-500 transition-colors duration-200" />
                  <span className="text-base font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold text-white bg-linear-to-r from-emerald-400 to-emerald-500 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Suggested People Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Suggested People</h2>
          <button className="text-blue-500 hover:text-blue-600 text-sm transition-colors duration-200">
            See All
          </button>
        </div>

        <div className="space-y-4">
          {suggestedPeople.map((person, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center relative justify-center `}
                >
                  <Image
                    src={person.imageUrl}
                    alt=""
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-sm text-gray-900">{person.name}</h3>
                  <p className="text-xs font-light text-gray-500">
                    {person.role}
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Events</h2>
          <button className="text-blue-500 hover:text-blue-600 text-sm transition-colors duration-200">
            See all
          </button>
        </div>

        <div className="space-y-4">
          {/* Event Card 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
            {/* Event Image */}
            <div className="relative h-40 bg-gray-200 overflow-hidden">
              <Image src="/assets/images/feed_event1.png" alt="Event" fill />
            </div>

            {/* Event Details */}
            <div className="p-4">
              <div className="flex items-start space-x-3 mb-3">
                {/* Date Badge */}
                <div className="shrink-0 w-12 h-14 bg-linear-to-br from-emerald-400 to-emerald-500 rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-lg font-bold">10</span>
                  <span className="text-xs font-semibold">Jul</span>
                </div>

                {/* Event Title */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    No more terrorism no more cry
                  </h3>
                </div>
              </div>

              {/* Event Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-500">17 People Going</span>
                <button className="px-4 py-1.5 text-sm font-medium text-blue-500 bg-white border border-blue-500 rounded-md hover:bg-blue-50 transition-all duration-200">
                  Going
                </button>
              </div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
            {/* Event Image */}
            <div className="relative h-40 bg-gray-200 overflow-hidden">
              <Image src="/assets/images/feed_event1.png" alt="Event" fill />
            </div>

            {/* Event Details */}
            <div className="p-4">
              <div className="flex items-start space-x-3 mb-3">
                {/* Date Badge */}
                <div className="shrink-0 w-12 h-14 bg-linear-to-br from-emerald-400 to-emerald-500 rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-lg font-bold">10</span>
                  <span className="text-xs font-semibold">Jul</span>
                </div>

                {/* Event Title */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    No more terrorism no more cry
                  </h3>
                </div>
              </div>

              {/* Event Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-500">17 People Going</span>
                <button className="px-4 py-1.5 text-sm font-medium text-blue-500 bg-white border border-blue-500 rounded-md hover:bg-blue-50 transition-all duration-200">
                  Going
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
