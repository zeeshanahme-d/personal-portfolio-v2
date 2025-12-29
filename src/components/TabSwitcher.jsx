
function TabSwitcher({ selectedTab, onSelectTab, tabs }) {

    return (
        <div className="w-full overflow-hidden overflow-x-auto">
            <div className="flex relative min-w-96">
                {tabs.map((tab, index) => {
                    const totalTabs = tabs.length;

                    // Determine width based on number of tabs
                    const widthClass =
                        totalTabs === 2
                            ? "w-1/2"
                            : totalTabs === 3
                                ? "w-1/3"
                                : totalTabs === 4
                                    ? "w-1/4"
                                    : totalTabs === 5 || totalTabs === 6
                                        ? "w-1/5"
                                        : "w-auto";

                    return (
                        <div key={index} className={`${widthClass} relative`}>
                            <button
                                className={`w-full h-10 md:h-12 flex justify-center items-center gap-3 px-0 md:px-3 font-medium text-lg transition ${selectedTab === index ? "text-primary" : "text-gray-400"
                                    } ${tab?.className}`}
                                onClick={() => onSelectTab(index)}
                            >
                                {tab.label}
                            </button>

                            {selectedTab === index && (
                                <div className="absolute bottom-0 md:-bottom-[3.5px] h-0.5 md:h-1.5 w-full bg-primary rounded-full" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>

    );
}

export default TabSwitcher;
