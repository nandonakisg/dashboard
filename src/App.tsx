import React from 'react';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { DashboardHeader } from './components/DashboardHeader';
import { KPICard } from './components/KPICard';
import { Chart } from './components/Chart';
import { revenueData, userActivityData, kpiData } from './data/mockData';

function App() {
  const icons = {
    DollarSign: <DollarSign className="h-6 w-6 text-indigo-600" />,
    Users: <Users className="h-6 w-6 text-indigo-600" />,
    ShoppingCart: <ShoppingCart className="h-6 w-6 text-indigo-600" />,
    TrendingUp: <TrendingUp className="h-6 w-6 text-indigo-600" />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <KPICard
              key={index}
              title={kpi.title}
              value={kpi.value}
              change={kpi.change}
              icon={icons[kpi.icon as keyof typeof icons]}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart data={revenueData} title="Revenue Trend" />
          <Chart data={userActivityData} title="User Activity" />
        </div>
      </main>
    </div>
  );
}

export default App;