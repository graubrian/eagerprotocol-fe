import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  Theme,
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { arbitrumSepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    arbitrumSepolia,
    ...(import.meta.env.VITE_ENABLE_TESTNETS === 'true' ? [
      {
        id: 31337,
        name: 'Local',
        network: 'localhost',
        nativeCurrency: {
          decimals: 18,
          name: 'Ether',
          symbol: 'ETH',
        },
        rpcUrls: {
          default: { http: ['http://localhost:8545'] },
          public: { http: ['http://localhost:8545'] },
        },
      }
    ] : [])
  ],
});

const queryClient = new QueryClient();

// Custom theme extending the dark theme
const customTheme = {
  ...darkTheme(),
  colors: {
    ...darkTheme().colors,
    accentColor: '#6366f1', // Matches your purple gradient
    accentColorForeground: '#ffffff',
    connectButtonBackground: 'rgba(37, 99, 235, 0.5)', // bg-blue-800/50
    connectButtonBackgroundError: 'rgba(239, 68, 68, 0.5)', // red with opacity
    connectButtonInnerBackground: 'rgba(30, 58, 138, 0.5)', // darker blue
    connectButtonText: 'rgb(219, 234, 254)', // text-blue-100
    connectButtonTextError: '#fff',
  },
  fonts: {
    body: 'inherit', // Uses your app's font
  },
  radii: {
    ...darkTheme().radii,
    connectButton: '0.5rem', // rounded-lg
  },
  shadows: {
    ...darkTheme().shadows,
    connectButton: 'none',
  },
} as Theme;

export function Web3Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider 
          theme={customTheme}
          modalSize="compact"
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 