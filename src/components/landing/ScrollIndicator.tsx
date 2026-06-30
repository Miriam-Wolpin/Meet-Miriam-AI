import { motion } from "framer-motion";

export default function ScrollIndicator() {

    return (

        <motion.div

            initial={{ opacity: 0 }}

            animate={{
                opacity: 1,
                y: [0, 8, 0]
            }}

            transition={{
                delay: 1,
                duration: 2,
                repeat: Infinity
            }}

            className="
                mt-10
                flex
                flex-col
                items-center
                text-slate-400
            "

        >

            <span
                className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                "
            >

                Scroll

            </span>

            <span className="mt-3 text-3xl">

                ↓

            </span>

        </motion.div>

    );

}