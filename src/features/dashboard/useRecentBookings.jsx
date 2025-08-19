import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { subDays } from 'date-fns';

import { getBookingsAfterDate } from '../../services/apiBookings';

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numberOfDays = Number(searchParams.get('last')) || 7;
  const queryDate = subDays(new Date(), numberOfDays).toISOString();

  const { data: bookings, isPending: isLoading } = useQuery({
    queryKey: ['bookings', `last-${numberOfDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { bookings, isLoading };
}
