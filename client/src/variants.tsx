export const fadeIn = (
    direction: "up" | "down" | "left" | "right",
    delay: number
) => {
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
            opacity: 0, // Add opacity for smooth transition
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.6,
                delay: delay, // Corrected to use the passed delay value
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const popUp = (
    direction: "up" | "down" | "left" | "right",
    delay: number
) => {
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
            opacity: 0, // Add opacity for smooth transition
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.2,
                delay: delay, // Corrected to use the passed delay value
                ease: [0.15, 0.15, 0.15, 0.50],
            },
        },
    };
};

export const slideIn = () => {
    return {
        hidden: {
            x: 200,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
}

export const hoverListEffect = () => {
    return {
        hover: {
            scale: 1.01,
            cursor: "pointer",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            transition: {
                type: "spring",
                // stiffness: 300,
                // damping: 20,
            },
        },
        tap: {
            scale: 0.97,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
    };
}