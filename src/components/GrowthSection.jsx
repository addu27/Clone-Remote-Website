import React from 'react';
import { Users, TrendingUp, BarChart3, Clock, ChevronRight, ChevronDown } from 'lucide-react';

const GrowthSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">
              GROWTH AT EVERY LEVEL
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 leading-tight">
              Making yourself<br />
              at home
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Team alignment</h3>
                <p className="text-gray-600 text-sm">
                  Foster collaboration with transparent role-based objectives.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills development</h3>
                <p className="text-gray-600 text-sm">
                  Empower your team with tailored learning pathways.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress tracking</h3>
                <p className="text-gray-600 text-sm">
                  Monitor individual and team advancement effortlessly.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance insights</h3>
                <p className="text-gray-600 text-sm">
                  Gain actionable data to optimize team productivity.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Role cards */}
          <div className="space-y-4 order-1 lg:order-2 bg-gray-100 p-8 rounded-xl shadow-lg">
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-limeSoft rounded-lg flex items-center justify-center">
                  <span className="text-lime-900 text-xs font-bold">💻</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900 text-sm sm:text-base">Software Developer</span>
                  <span className="ml-2 text-sm text-gray-500">6</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-limeSoft rounded-lg flex items-center justify-center">
                  <span className="text-lime-900 text-xs font-bold">👨‍💻</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900 text-sm sm:text-base">Lead Software Developer</span>
                  <span className="ml-2 text-sm text-gray-500">8</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-limeSoft rounded-lg flex items-center justify-center">
                    <span className="text-lime-900 text-xs font-bold">👤</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">Product Owner</span>
                    <span className="ml-2 text-sm text-gray-500">5</span>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-3 pl-8 sm:pl-11">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Office Introduction</span>
                  <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Introduction to Company Culture</span>
                  <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Product Walkthrough Session</span>
                  <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Skill Development Courses</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Optional</span>
                  </div>
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Mentorship Program</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Optional</span>
                  </div>
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Language Courses</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Optional</span>
                  </div>
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;