import { useQuery } from '@tanstack/react-query';

import { getBookings } from '../../services/apiBookings';

export function useFetchBookings() {
  const {
    data: bookings,
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings,
  });

  return { bookings, isLoading, error };
}
