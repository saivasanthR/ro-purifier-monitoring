import React from 'react';
import Dashboard from './Dashboard';
import SystemStatus from './SystemStatus';
import Maintenance from './Maintenance';
import Reports from './Reports';
import Notifications from './Notifications';
import KnowledgeTips from './KnowledgeTips';

function MainContent({ activePage }) {
  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'SystemStatus':
        return <SystemStatus />;
      case 'Maintenance':
        return <Maintenance />;
      case 'Reports':
        return <Reports />;
      case 'Notifications':
        return <Notifications />;
      case 'KnowledgeTips':
        return <KnowledgeTips />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="main-content">
      <div id={`${activePage.toLowerCase()}-content`} className="content-page">
        {renderContent()}
      </div>
    </div>
  );
}

export default MainContent;