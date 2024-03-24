"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function About() {
    const { ref } = useSectionInView("About");

    return (

        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >

            <p className="mb-3">
                After graduating with a degree in {" "}
                <span className="font-medium">Informatic Engineering</span>, I decided to pursue my passion  for programming.
                I enrolled in a coding and learned
            </p>


        </motion.section>


    );

}