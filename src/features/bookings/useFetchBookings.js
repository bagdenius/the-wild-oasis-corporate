import { useQuery } from '@tanstack/react-query';

import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useFetchBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  const sortByRaw = searchParams.get('sortBy') || 'startDate-descending';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  const {
    data: bookings,
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { bookings, isLoading, error };
}
