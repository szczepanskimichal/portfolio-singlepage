export const slideIn = (direction, type, delay, duration) => ({
	hidden: {
		x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
		y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type,
			delay,
			duration,
			ease: "easeOut",
		},
	},
	exit: {
		x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
		y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
		opacity: 0,
	},
});

export const fadeIn = (direction, type, delay, duration) => ({
	hidden: {
		x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
		y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type,
			delay,
			duration,
			ease: "easeOut",
		},
	},
	exit: {
		x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
		y: direction === "up" ? -50 : direction === "down" ? 50 : 0,
		opacity: 0,
	},
});

export const cardVariants = (direction, type, delay, duration) => ({
	hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
	show: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			type,
			delay,
			duration,
			ease: "easeOut",
		},
	},
});
