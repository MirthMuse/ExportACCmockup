import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(
  /import HomeScreen from "\.\/screens\/HomeScreen";\nimport MenuScreen from "\.\/screens\/MenuScreen";\nimport AboutScreen from "\.\/screens\/AboutScreen";\nimport ContactScreen from "\.\/screens\/ContactScreen";\nimport CateringScreen from "\.\/screens\/CateringScreen";\nimport PrivacyPolicyScreen from "\.\/screens\/PrivacyPolicyScreen";\nimport NotFoundScreen from "\.\/screens\/NotFoundScreen";/,
  `import { Suspense, lazy } from 'react';
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const MenuScreen = lazy(() => import("./screens/MenuScreen"));
const AboutScreen = lazy(() => import("./screens/AboutScreen"));
const ContactScreen = lazy(() => import("./screens/ContactScreen"));
const CateringScreen = lazy(() => import("./screens/CateringScreen"));
const PrivacyPolicyScreen = lazy(() => import("./screens/PrivacyPolicyScreen"));
const NotFoundScreen = lazy(() => import("./screens/NotFoundScreen"));`
);

code = code.replace(
  /<Routes>/,
  '<Suspense fallback={<div className="flex-1 flex items-center justify-center min-h-[50vh]"><div className="w-12 h-12 border-4 border-black border-t-primary rounded-full animate-spin"></div></div>}>\n          <Routes>'
);

code = code.replace(
  /<\/Routes>/,
  '</Routes>\n        </Suspense>'
);

fs.writeFileSync('src/App.tsx', code);
