interface User {
  id: number;
  apikey?: string;
  banned: boolean;
  banned_by_id?: number;
  cooldowns?: string[];
  created_at: string;
  email: string;
  password: string;
  reset_password_expires?: string;
  reset_password_token?: string;
  updated_at: string;
  verification_expires?: string;
  verification_token?: string;
  verified?: boolean;
}

interface UserJoined extends User {
  admin?: boolean;
  homepage?: string;
  domain?: string;
  domain_id?: number;
}

interface Domain {
  id: number;
  address: string;
  banned: boolean;
  banned_by_id?: number;
  created_at: string;
  homepage?: string;
  updated_at: string;
  user_id?: number;
}

interface Host {
  id: number;
  address: string;
  banned: boolean;
  banned_by_id?: number;
  created_at: string;
  updated_at: string;
}

interface IP {
  id: number;
  created_at: string;
  updated_at: string;
  ip: string;
}

interface Link {
  id: number;
  address: string;
  banned: boolean;
  banned_by_id?: number;
  created_at: string;
  domain_id?: number;
  password?: string;
  target: string;
  updated_at: string;
  user_id?: number;
  visit_count: number;
}

interface LinkJoinedDomain extends Link {
  domain?: string;
}

interface Visit {
  id: number;
  countries: Record<string, number>;
  created_at: string;
  link_id: number;
  referrers: Record<string, number>;
  total: number;
  br_chrome: number;
  br_edge: number;
  br_firefox: number;
  br_ie: number;
  br_opera: number;
  br_other: number;
  br_safari: number;
  os_android: number;
  os_ios: number;
  os_linux: number;
  os_macos: number;
  os_other: number;
  os_windows: number;
}

interface Stats {
  browser: Record<
    "chrome" | "edge" | "firefox" | "ie" | "opera" | "other" | "safari",
    number
  >;
  os: Record<
    "android" | "ios" | "linux" | "macos" | "other" | "windows",
    number
  >;
  country: Record<string, number>;
  referrer: Record<string, number>;
}

declare namespace Express {
  export interface Request {
    realIP?: string;
    pageType?: string;
    linkTarget?: string;
    protectedLink?: string;
    token?: string;
    user: UserJoined;
  }
}
