"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Transition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.25 }}
            key={pathname}
        >
            {children}
        </motion.div>
    );
}