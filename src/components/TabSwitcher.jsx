
function TabSwitcher({ selectedTab, onSelectTab, tabs }) {

    return (
        <div className='flex justify-between items-center relative text-center'>
            {tabs.map((tab, index) => (
                <div key={index} className='flex-1 relative'>
                    <button
                        className={`cursor-pointer h-12 w-72 bg-transparent border-none gap-3 px-3 transition font-medium text-lg relative justify-center ${selectedTab === index ? 'text-primary' : 'text-gray-400'}`}
                        onClick={() => onSelectTab(index)}
                    >
                        {tab.label}
                    </button>
                    <div className={`absolute h-[6px] ${selectedTab === index ? 'bg-primary rounded-full w-full bottom-[-3.5px]' : ''}`} />
                </div>
            ))}
        </div>
    );
}

export default TabSwitcher;
