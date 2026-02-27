import * as Fi from "react-icons/fi";

export type IconKey =
  | "FiTrendingUp"
  | "FiCpu"
  | "FiCheckCircle"
  | "FiHeadphones"
  | "FiZap"
  | "FiLink"
  | "FiUser"
  | "FiCloud"
  | "FiUsers"
  | "FiCode"
  | "FiCreditCard"
  | "FiRocket"
  | "FiLayers"
  | "FiBarChart"
  | "FiSearch"
  | "FiSmartphone"
  | "FiTarget"
  | "FiGlobe"
  | "FiLayout"
  | "FiShoppingCart"
  | "FiDatabase"
  | "FiGitMerge"
  | "FiTool"
  | "FiPackage"
  | "FiUpload"
  | "FiShield"
  | "FiBox"
  | "FiActivity"
  | "FiGitBranch"
  | "FiMessageCircle"
  | "FiImage"
  | "FiSettings"
  | "FiCheckSquare"
  | "FiRepeat"
  | "FiFileText"
  | "FiClock"
  | "FiDollarSign";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FiTrendingUp: Fi.FiTrendingUp,
  FiCpu: Fi.FiCpu,
  FiCheckCircle: Fi.FiCheckCircle,
  FiHeadphones: Fi.FiHeadphones,
  FiZap: Fi.FiZap,
  FiLink: Fi.FiLink,
  FiUser: Fi.FiUser,
  FiCloud: Fi.FiCloud,
  FiUsers: Fi.FiUsers,
  FiCode: Fi.FiCode,
  FiCreditCard: Fi.FiCreditCard,
  FiRocket: Fi.FiSend,
  FiSend: Fi.FiSend,
  FiLayers: Fi.FiLayers,
  FiBarChart: Fi.FiBarChart,
  FiSearch: Fi.FiSearch,
  FiSmartphone: Fi.FiSmartphone,
  FiTarget: Fi.FiTarget,
  FiGlobe: Fi.FiGlobe,
  FiDatabase: Fi.FiDatabase,
  FiGitMerge: Fi.FiGitMerge,
  FiTool: Fi.FiTool,
  FiPackage: Fi.FiPackage,
  FiUpload: Fi.FiUpload,
  FiShield: Fi.FiShield,
  FiBox: Fi.FiBox,
  FiActivity: Fi.FiActivity,
  FiGitBranch: Fi.FiGitBranch,
  FiMessageCircle: Fi.FiMessageCircle,
  FiImage: Fi.FiImage,
  FiSettings: Fi.FiSettings,
  FiCheckSquare: Fi.FiCheckSquare,
  FiRepeat: Fi.FiRepeat,
  FiFileText: Fi.FiFileText,
  FiClock: Fi.FiClock,
  FiDollarSign: Fi.FiDollarSign,
  FiLayout: Fi.FiLayout,
};

export function getServiceIcon(iconKey: string): React.ComponentType<{ size?: number; className?: string }> {
  return iconMap[iconKey] || Fi.FiZap;
}
