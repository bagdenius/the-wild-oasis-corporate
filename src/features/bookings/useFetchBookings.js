import { useQuery } from '@tanstack/react-query';

import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useFetchBookings() {
  const [searchParams] = useSearchParams();

  // filtering
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  // sorting
  const sortByRaw = searchParams.get('sortBy') || 'startDate-descending';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  // pagination
  const page = +searchParams.get('page') || 1;

  const {
    data: { data: bookings, count } = {},
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  console.log(bookings);

  return { bookings, count, isLoading, error };
}
