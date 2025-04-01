"use client";

import React, { useState, useRef, useEffect } from "react";
import { Home, TaskAlt, Person, Settings } from "@mui/icons-material";
import { motion, Variants } from "framer-motion";

const Dashboard: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("Home");
    const containerRef = useRef<HTMLDivElement>(null);
    const { height } = useDimensions(containerRef);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavigation = (page: string) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex h-screen">
            <motion.aside
                initial={false}
                animate={isSidebarOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white p-4"
                variants={sidebarVariants}
            >
                <motion.div className="absolute top-0 left-0 bottom-0 w-64 bg-gray-700" variants={sidebarVariants} />
                <div className="flex items-center gap-1 font-bold">
                    <TaskAlt /> TaskWise
                </div>
                <Navigation handleNavigation={handleNavigation} />
                <MenuToggle toggle={toggleSidebar} />
            </motion.aside>

            <main className="flex-1 ml-64 overflow-y-auto p-6">
                <div className="flex justify-between">
                    <nav className="text-gray-600 text-sm mb-4">
                        <span>Dashboard &gt; {currentPage}</span>
                    </nav>
                    <button onClick={toggleSidebar} className="md:hidden bg-blue-500 px-3 py-2 rounded">
                        ☰
                    </button>
                </div>
                <h2 className="text-2xl font-semibold mb-4">{currentPage}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.from({ length: 9 }, (_, i) => (
                        <div key={i} className="bg-white p-4 shadow rounded">
                            Card {i + 1}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

const sidebarVariants: Variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Navigation = ({ handleNavigation }: { handleNavigation: (page: string) => void }) => (
    <motion.ul className="list-none p-4">
        {['Home', 'Profile', 'Settings'].map((item, index) => (
            <motion.li key={index} className="p-2 text-white hover:bg-gray-600 cursor-pointer" onClick={() => handleNavigation(item)}>
                {item}
            </motion.li>
        ))}
    </motion.ul>
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button className="absolute top-5 left-5 bg-transparent border-none cursor-pointer" onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                variants={{ closed: { d: "M 2 2.5 L 20 2.5" }, open: { d: "M 3 16.5 L 17 2.5" } }}
            />
            <motion.path
                d="M 2 9.423 L 20 9.423"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                transition={{ duration: 0.1 }}
            />
            <motion.path
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                variants={{ closed: { d: "M 2 16.346 L 20 16.346" }, open: { d: "M 3 2.5 L 17 16.346" } }}
            />
        </svg>
    </button>
);

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
    }, [ref]);

    return dimensions.current;
};

export default Dashboard;