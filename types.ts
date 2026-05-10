interface UserProfile {
  id: string;
  name: string;
  rank: string;
  email: string;
  createdAt: Date;
  avatar?: string;
}

interface AppInstallConfig {
  appId: string;
  appVersion: string;
  userProfile: UserProfile;
  installDate: Date;
  permissions: string[];
}

class AppInstaller {
  private config: AppInstallConfig;

  constructor(profile: UserProfile) {
    this.config = {
      appId: `app_${Date.now()}`,
      appVersion: "1.0.0",
      userProfile: profile,
      installDate: new Date(),
      permissions: ["read", "write", "execute"]
    };
  }

  getInstallCode(): string {
    return btoa(JSON.stringify(this.config));
  }

  getConfig(): AppInstallConfig {
    return this.config;
  }
}

// Usage
const userProfile: UserProfile = {
  id: "user_001",
  name: "Rahis Sarkar",
  rank: "Developer",
  email: "rahis@example.com",
  createdAt: new Date(),
  avatar: "https://avatars.githubusercontent.com/u/xxxxx"
};

const installer = new AppInstaller(userProfile);
console.log("Install Code:", installer.getInstallCode());
console.log("Config:", installer.getConfig());
