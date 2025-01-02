import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "../../components/Footer";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const animationProps = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0,x: -50 },
    transition: { duration: 0.8, ease: "easeInOut" }, // Slower and smoother transition
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
        <AnimatePresence mode="wait">
          {isLogin ? ( 
            <motion.div key="SignIn" {...animationProps}>
              <SignIn onToggle={() => setIsLogin(false)} />
            </motion.div>
          ) : (
            <motion.div key="SignUp" {...animationProps}>
              <SignUp onToggle={() => setIsLogin(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

export default Auth;
