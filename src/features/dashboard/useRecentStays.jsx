import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { subDays } from 'date-fns';

import { getStaysAfterDate } from '../../services/apiBookings';

export function useRecentStays() {
  const [searchParams, setSearchParams] = useSearchParams();

  const numberOfDays = Number(searchParams.get('last')) || 7;
  const queryDate = subDays(new Date(), numberOfDays).toISOString();

  const { data: stays, isPending: isLoading } = useQuery({
    queryKey: ['stays', `last-${numberOfDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === 'checked-in' || stay.status === 'checked-out'
  );

  return { stays, confirmedStays, numberOfDays, isLoading };
}
