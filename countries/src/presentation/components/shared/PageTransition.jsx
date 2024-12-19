import { motion, AnimatePresence } from 'motion/react'

export const PageTransition = ({ children, transitionKey }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={transitionKey}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)
