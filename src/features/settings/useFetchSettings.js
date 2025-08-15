import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

export function useFetchSettings() {
  const {
    data: settings,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  return { settings, isLoading, error };
}
