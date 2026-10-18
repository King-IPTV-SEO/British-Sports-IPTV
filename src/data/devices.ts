export interface DeviceSetup {
  id: string;
  name: string;
  category: 'Streaming Sticks' | 'Smart TVs' | 'TV Boxes' | 'Mobile & Tablet' | 'PC & Mac' | 'Specialist';
  popularBadge?: string;
  iconName: string;
  summary: string;
  setupTime: string;
  difficulty: 'Very Easy' | 'Easy' | 'Moderate';
  recommendedApps: {
    name: string;
    isPrimary?: boolean;
    rating: string;
    description: string;
  }[];
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    tip?: string;
  }[];
  downloaderCode?: string;
}

export const DEVICES: DeviceSetup[] = [
  {
    id: 'firestick',
    name: 'Amazon Firestick / Fire TV',
    category: 'Streaming Sticks',
    popularBadge: 'Most Popular UK Device',
    iconName: 'Tv',
    summary: 'The UK\'s favorite streaming stick. Smooth 4K HDR playback, seamless voice remote search, and lightning-fast installation in under 3 minutes.',
    setupTime: '3 Minutes',
    difficulty: 'Very Easy',
    downloaderCode: '790143',
    recommendedApps: [
      { name: 'IPTV Smarters Pro', isPrimary: true, rating: '4.9/5', description: 'Clean interface with EPG guide, multi-screen, and parental control.' },
      { name: 'TiviMate IPTV Player', rating: '4.9/5', description: 'Award-winning premium player with fluid channel navigation.' },
      { name: 'XCIPTV Player', rating: '4.7/5', description: 'Modern dashboard with built-in player and VOD trailers.' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Install the Downloader App',
        description: 'From your Firestick home screen, navigate to Find > Search, type "Downloader", and click Download/Get to install.',
        tip: 'Ensure "Apps from Unknown Sources" is enabled in Fire TV Settings > My Fire TV > Developer Options.',
      },
      {
        stepNumber: 2,
        title: 'Download IPTV Smarters Pro or TiviMate',
        description: 'Open Downloader, enter the quick code (or download URL provided in your activation message), and click Go to download.',
      },
      {
        stepNumber: 3,
        title: 'Enter Your Xtream Codes / M3U Login',
        description: 'Launch the app, choose "Login with Xtream Codes API", and type in the Server URL, Username, and Password sent to your WhatsApp or Email.',
        tip: 'Tap "Add User" and allow 10-15 seconds for your 20,000+ UK channels and EPG guide to populate.',
      },
      {
        stepNumber: 4,
        title: 'Enjoy Buffer-Free 4K UK Sports',
        description: 'Browse the categorized Sky Sports, TNT Sports, Premier League, and Movie sections in 4K 60fps.',
      },
    ],
  },
  {
    id: 'smart-tv',
    name: 'Samsung & LG Smart TVs',
    category: 'Smart TVs',
    popularBadge: 'Direct App Install',
    iconName: 'Monitor',
    summary: 'Stream directly on your Samsung (Tizen OS) or LG (webOS) Smart TV without needing any extra external HDMI sticks or cables.',
    setupTime: '4 Minutes',
    difficulty: 'Easy',
    recommendedApps: [
      { name: 'IBO Player', isPrimary: true, rating: '4.8/5', description: 'Available directly in Samsung Galaxy Store and LG Content Store.' },
      { name: 'Smart IPTV (SIPTV)', rating: '4.6/5', description: 'Classic lightweight Smart TV app with MAC address activation.' },
      { name: 'Nanomid Player', rating: '4.7/5', description: 'Smooth 4K playback and fast EPG caching on modern TVs.' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Open Your TV App Store',
        description: 'On your Samsung or LG TV remote, press the Home button and open the Samsung App Store or LG Content Store.',
      },
      {
        stepNumber: 2,
        title: 'Search and Install IBO Player',
        description: 'Type "IBO Player" in the search bar and click install. The app will generate a Device ID and Device Key on first launch.',
      },
      {
        stepNumber: 3,
        title: 'Link Your British Sports IPTV Playlist',
        description: 'Visit iboplayer.com/upload on your phone or PC, enter your TV Device ID/Key, and paste your M3U link or Xtream details.',
      },
      {
        stepNumber: 4,
        title: 'Restart App & Start Streaming',
        description: 'Click reload on your TV. All UK sports channels, movies, and series are now accessible with your TV remote.',
      },
    ],
  },
  {
    id: 'android-box',
    name: 'Android TV / Google TV / Nvidia Shield',
    category: 'TV Boxes',
    popularBadge: 'Maximum 4K Bitrate',
    iconName: 'Cpu',
    summary: 'Ultimate power for high-bitrate 4K sports streaming. Compatible with Google TV, Nvidia Shield Pro, Xiaomi Mi Box, and Formuler.',
    setupTime: '2 Minutes',
    difficulty: 'Very Easy',
    recommendedApps: [
      { name: 'TiviMate IPTV Player', isPrimary: true, rating: '5.0/5', description: 'The absolute gold standard for Android TV with split-screen multiview.' },
      { name: 'IPTV Smarters Pro', rating: '4.8/5', description: 'Direct install from Google Play Store.' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Install App from Google Play Store',
        description: 'Open the Google Play Store on your Android TV, search for "TiviMate" or "IPTV Smarters Pro", and install.',
      },
      {
        stepNumber: 2,
        title: 'Add Playlist via Xtream Codes',
        description: 'Choose "Add Playlist" > "Xtream Codes". Input the Server Portal URL, Username, and Password provided in your order.',
      },
      {
        stepNumber: 3,
        title: 'Configure Multiview & EPG',
        description: 'Set your EPG update interval to daily. Use TiviMate\'s multiview to watch up to 4 live Premier League matches simultaneously.',
      },
    ],
  },
  {
    id: 'apple-devices',
    name: 'Apple TV & iOS (iPhone / iPad)',
    category: 'Mobile & Tablet',
    iconName: 'Apple',
    summary: 'Pristine AirPlay support, fluid gestures, and 4K HDR playback across iPhone, iPad, Mac, and Apple TV 4K.',
    setupTime: '3 Minutes',
    difficulty: 'Easy',
    recommendedApps: [
      { name: 'IPTV Smarters Player', isPrimary: true, rating: '4.7/5', description: 'Available directly on official Apple App Store.' },
      { name: 'GSE Smart IPTV', rating: '4.5/5', description: 'Advanced playlist and EPG support for iOS & tvOS.' },
      { name: 'UHF - IPTV Player', rating: '4.8/5', description: 'Modern SwiftUI design built natively for Apple ecosystem.' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Download from Apple App Store',
        description: 'Open the App Store on your iPhone, iPad, or Apple TV 4K and download "IPTV Smarters Player".',
      },
      {
        stepNumber: 2,
        title: 'Log In with Xtream Credentials',
        description: 'Select Xtream Codes API. Enter your British Sports IPTV login credentials and save.',
      },
      {
        stepNumber: 3,
        title: 'Cast to TV via AirPlay',
        description: 'Stream on the go on your phone or tap the AirPlay icon to cast seamlessly to any Apple TV or compatible smart display.',
      },
    ],
  },
  {
    id: 'pc-mac',
    name: 'Windows PC & Mac',
    category: 'PC & Mac',
    iconName: 'Laptop',
    summary: 'Watch at your desk with high-performance desktop applications or directly through any standard web browser.',
    setupTime: '2 Minutes',
    difficulty: 'Very Easy',
    recommendedApps: [
      { name: 'VLC Media Player', isPrimary: true, rating: '4.9/5', description: 'Universal free player that reads M3U playlists directly.' },
      { name: 'IPTV Smarters Windows / Mac', rating: '4.7/5', description: 'Dedicated desktop app with TV guide and on-demand search.' },
      { name: 'Web Player Portal', rating: '4.6/5', description: 'Instant browser access without downloading software.' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Download Desktop App or Open VLC',
        description: 'Download the official IPTV Smarters application for Windows/macOS or launch VLC Media Player.',
      },
      {
        stepNumber: 2,
        title: 'Open Network Stream (VLC) or Log In',
        description: 'In VLC, click Media > Open Network Stream and paste your M3U URL. In Smarters, log in using your Xtream Codes.',
      },
    ],
  },
  {
    id: 'mag-stb',
    name: 'MAG Box & Formuler Set-Top Box',
    category: 'Specialist',
    iconName: 'HardDrive',
    summary: 'Hardware set-top box configuration with dedicated hardware decoder, MAC address portal binding, and fast channel switching.',
    setupTime: '3 Minutes',
    difficulty: 'Easy',
    recommendedApps: [
      { name: 'Stalker Portal (Built-in)', isPrimary: true, rating: '4.9/5', description: 'Native portal integration for MAG 254, 322, 420, 520, and Formuler Z series.' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Locate Your MAG MAC Address',
        description: 'Find your MAC address (e.g., 00:1A:79:XX:XX:XX) on the bottom sticker of your MAG box.',
      },
      {
        stepNumber: 2,
        title: 'Provide MAC during Trial/Order',
        description: 'Send your MAC address to our WhatsApp team so our engineers can bind your subscription to our high-speed UK portal.',
      },
      {
        stepNumber: 3,
        title: 'Enter Portal URL in Settings',
        description: 'Go to Settings > System Settings > Servers > Portals. Enter our Portal URL as Portal 1 and reboot the MAG box.',
      },
    ],
  },
];
