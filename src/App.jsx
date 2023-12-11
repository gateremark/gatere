import AnimatedCursor from "react-animated-cursor";
import { Toaster, toast } from "sonner";
import Home from "./sections/Home";
import BlogsPage from "./sections/BlogsPage";
import ErrorPage from "./sections/ErrorPage";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
    toast.info("Work Experience Section - Incomplete!");
    const firebaseConfig = {
        apiKey: "AIzaSyAuAKF6IQdM5s_fp8c4qp2fDfwRTe8GHeo",
        authDomain: "gateremark.firebaseapp.com",
        projectId: "gateremark",
        storageBucket: "gateremark.appspot.com",
        messagingSenderId: "651139787571",
        appId: "1:651139787571:web:1c2d9ec540da30bff3ac46",
        measurementId: "G-N9EJ1HXKXQ",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // ----------------------------------------------------
    return (
        <div className=" transition-all ease-in-out duration-500">
            <Toaster richColors position="top-right" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <AnimatedCursor
                innerSize={20}
                outerSize={20}
                color="4, 180, 224"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    "a",
                    "Link",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'div[className="projects"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "Particles",
                    "button",
                    ".link",
                    ".customize",
                    ".achCard",
                    ".have__cursor",
                ]}
            />
        </div>
    );
}

export default App;
