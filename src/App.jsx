import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";
import { useState } from "react";
function App() {
  const [state, setState] = useState(true);
  return (
    <>
      <div className="flex  flex-col justify-center items-center h-screen w-full bg-black ">
        <AnimatePresence>
          {state && (
            <motion.div
              onClick={() => setState(!state)}
              initial={{opacity:0 , filter:"blur(50px)" , y:-500}}
              whileInView={{opacity:1 , filter:"blur(0px)" , y:0 }}
              transition={{ duration: 0.5 }}
              exit={{
                scale: 0,
                rotate: 360,
                x: [0, 400, -400 ,600],
                y: [0, -10, -100 , -700],
              }}
              className=" bg-[#333233] absolute p-6 flex flex-col justify-center items-center 
              select-none text-white font-medium text-2xl  rounded-xl
               cursor-pointer gap-4 border-2"
            >
              {/* <div className="relative top-0 left-0 w-full border "></div> */}
              <motion.div
                // initial={{ opacity: 0, y: 1 }}
                // whileHover={{
                //   opacity: 1,
                //   y: 0,
                //   // boxShadow: "0px 0px 10px 5px #000",
                // }}
                // transition={{ duration: 1 }}
                className="bg-[#212121] flex justify-center items-center- h-full w-full rounded-xl  text-white"
              >
                <img
                  src="https://i.pinimg.com/736x/e8/f7/4a/e8f74a514ce4af5045e708922bbad2e0.jpg"
                  className="h-[350px] w-[250px] rounded-md  contrast-75"
                  alt=""
                />
              </motion.div>
              <div className="flex flex-row text-xs w-full justify-between select-none">
                <span className="font-mono">Comet Invitation</span>
                <span className="text-neutral-500">#AP27</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button className="">Send</button>
        {!state && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className=" font-mono text-green-600"
          >
            {" "}
            Invitation sent!{" "}
          </motion.div>
        )}
      </div>
    </>
  );
}

export default App;
