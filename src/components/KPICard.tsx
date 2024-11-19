import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export function KPICard({ title, value, change, icon }: KPICardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        <div className="p-2 bg-indigo-50 rounded-lg">{icon}</div>
      </div>
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? (
            <ArrowUpIcon className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 mr-1" />
          )}
          <span className="text-sm font-medium">{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  );
}