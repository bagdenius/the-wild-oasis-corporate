import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { BOOKINGS_PAGE_SIZE } from '../../utils/constants';

export function useFetchBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

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

  // query
  const {
    data: { data: bookings, count } = {},
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // pre-fetching next and previous pages
  const pageCount = Math.ceil(count / BOOKINGS_PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { bookings, count, isLoading, error };
}
