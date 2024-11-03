import { useAccount, useReadContract } from 'wagmi';
import ethenaEagerContracts from '../contracts/ethenaEagerToken';

export function useLRTVaultBalance() {
  const { address } = useAccount();

  const { data, error, isLoading, refetch } = useReadContract({
    address: ethenaEagerContracts.lrtVault.address,
    abi: ethenaEagerContracts.lrtVault.abi,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
  });

  const formattedAmount = data ? (Number(data) / 1e18).toFixed(2) : '0';

  return { 
    amount: formattedAmount, 
    isLoading: !!address && isLoading,
    isError: !!error,
    refetch: async () => {
      if (!address) return Promise.resolve();
      await refetch();
      return Promise.resolve();
    }
  };
}