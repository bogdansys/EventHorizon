import { Home, Book, Cloud as CloudIcon, Shield, Terminal, BugPlay } from "lucide-react";
import Index from "./pages/Index.jsx";
import General from "./pages/General.jsx";
import Mobile from "./pages/Mobile.jsx";
import CloudPage from "./pages/Cloud.jsx";
import ActiveDirectory from "./pages/ActiveDirectory.jsx";
import WebPentesting from "./pages/WebPentesting.jsx";
import BinaryExploitation from "./pages/BinaryExploitation.jsx";
import Acknowledgments from "./pages/Acknowledgments.jsx";
import HackersChoice from "./pages/general/HackersChoice.jsx";
import Docker from "./pages/general/Docker.jsx";
import PowerShell from "./pages/general/PowerShell.jsx";
import SecurityTalks from "./pages/general/SecurityTalks.jsx";
import ADExploitationCheatSheet from "./pages/active-directory/ADExploitationCheatSheet.jsx";
import OSCPADCheatSheet from "./pages/active-directory/OSCPADCheatSheet";
import WADComs from "./pages/active-directory/WADComs";
import OWASPTestingGuide from "./pages/web-pentesting/OWASPTestingGuide";
import WebPentestChecklist from "./pages/web-pentesting/WebPentestChecklist";
import SQLInjectionCheatsheet from "./pages/web-pentesting/SQLInjectionCheatsheet";
import XSSCheatSheet from "./pages/web-pentesting/XSSCheatSheet";
import BinaryExploitationRedTeamNotes from "./pages/binary-exploitation/BinaryExploitationRedTeamNotes";
import Ir0nstoneBinaryExploitationNotes from "./pages/binary-exploitation/Ir0nstoneBinaryExploitationNotes";
import StickyNotesBinaryExploitation from "./pages/binary-exploitation/StickyNotesBinaryExploitation";
import LiveOverflowBinaryExploitation from "./pages/binary-exploitation/LiveOverflowBinaryExploitation";
import MobileAppPentestCheatSheet from "./pages/mobile/MobileAppPentestCheatSheet";
import AndroidPentestChecklist from "./pages/mobile/AndroidPentestChecklist";
import MASTG from "./pages/mobile/MASTG";
import IOSPentestChecklist from "./pages/mobile/IOSPentestChecklist";
import AwesomeK8sSecurity from "./pages/cloud/AwesomeK8sSecurity.jsx";
import Kubetools from "./pages/cloud/Kubetools.jsx";
// import KubernetesGoat from "./pages/cloud/KubernetesGoat.jsx";
// import AwesomeAzurePentest from "./pages/cloud/AwesomeAzurePentest.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "General",
    to: "/general",
    icon: <Book className="h-4 w-4" />,
    page: <General />,
  },
  {
    title: "Mobile",
    to: "/mobile",
    icon: <Terminal className="h-4 w-4" />,
    page: <Mobile />,
  },
  {
    title: "Cloud",
    to: "/cloud",
    icon: <CloudIcon className="h-4 w-4" />,
    page: <CloudPage />,
  },
  {
    title: "Active Directory",
    to: "/active-directory",
    icon: <Shield className="h-4 w-4" />,
    page: <ActiveDirectory />,
  },
  {
    title: "Web Pentesting",
    to: "/web-pentesting",
    icon: <BugPlay className="h-4 w-4" />,
    page: <WebPentesting />,
  },
  {
    title: "Binary Exploitation",
    to: "/binary-exploitation",
    icon: <Terminal className="h-4 w-4" />,
    page: <BinaryExploitation />,
  },
];

export const hiddenRoutes = [
  {
    to: "/acknowledgments",
    page: <Acknowledgments />,
  },
  {
    to: "/general/hackers-choice",
    page: <HackersChoice />,
  },
  {
    to: "/general/docker",
    page: <Docker />,
  },
  {
    to: "/general/powershell",
    page: <PowerShell />,
  },
  {
    to: "/general/security-talks",
    page: <SecurityTalks />,
  },
  {
    to: "/active-directory/ad-exploitation-cheat-sheet",
    page: <ADExploitationCheatSheet />,
  },
  {
    to: "/active-directory/oscp-ad-cheat-sheet",
    page: <OSCPADCheatSheet />,
  },
  {
    to: "/active-directory/wadcoms",
    page: <WADComs />,
  },
  {
    to: "/web-pentesting/owasp-testing-guide",
    page: <OWASPTestingGuide />,
  },
  {
    to: "/web-pentesting/web-pentest-checklist",
    page: <WebPentestChecklist />,
  },
  {
    to: "/web-pentesting/sql-injection-cheatsheet",
    page: <SQLInjectionCheatsheet />,
  },
  {
    to: "/web-pentesting/xss-cheat-sheet",
    page: <XSSCheatSheet />,
  },
  {
    to: "/binary-exploitation/red-team-notes",
    page: <BinaryExploitationRedTeamNotes />,
  },
  {
    to: "/binary-exploitation/ir0nstone-notes",
    page: <Ir0nstoneBinaryExploitationNotes />,
  },
  {
    to: "/binary-exploitation/sticky-notes",
    page: <div>Sticky Notes Binary Exploitation (Under Construction)</div>,
  },
  {
    to: "/binary-exploitation/liveoverflow-playlist",
    page: <div>LiveOverflow Binary Exploitation (Under Construction)</div>,
  },
  {
    to: "/mobile/app-pentest-cheat-sheet",
    page: <MobileAppPentestCheatSheet />,
  },
  {
    to: "/mobile/android-pentest-checklist",
    page: <AndroidPentestChecklist />,
  },
  {
    to: "/mobile/mastg",
    page: <MASTG />,
  },
  {
    to: "/mobile/ios-pentest-checklist",
    page: <IOSPentestChecklist />,
  },
  {
    to: "/cloud/awesome-k8s-security",
    page: <AwesomeK8sSecurity />,
  },
  {
    to: "/cloud/kubetools",
    page: <Kubetools />,
  },
  {
    to: "/cloud/kubernetes-goat",
    page: <div>Kubernetes Goat (Under Construction)</div>,
  },
  {
    to: "/cloud/awesome-azure-pentest",
    page: <div>Awesome Azure Pentest (Under Construction)</div>,
  },
];
