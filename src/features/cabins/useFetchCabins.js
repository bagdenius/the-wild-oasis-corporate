import { useQuery } from '@tanstack/react-query';

import { getCabins } from '../../services/apiCabins';

export function useFetchCabins() {
  const {
    data: cabins,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  return { cabins, isLoading, error };
}
