import React, { useState } from 'react'
import { TabContainer, Tab, TabContent } from './styles'
import type { TabsProps } from './types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div>
      <TabContainer>
        {tabs.map((tab, index) => (
          <Tab key={index} active={index === activeTab} onClick={() => { handleTabClick(index) }}>
            {tab.label}
          </Tab>
        ))}
      </TabContainer>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </div>
  )
}
export default Tabs
