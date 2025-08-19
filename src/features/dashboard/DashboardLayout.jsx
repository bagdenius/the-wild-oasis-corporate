import styled from 'styled-components';

import Spinner from '../../ui/Spinner';

import { useRecentStays } from './useRecentStays';
import { useRecentBookings } from './useRecentBookings';
import Stats from './Stats';
import { useFetchCabins } from '../cabins/useFetchCabins';
import SalesChart from './SalesChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    numberOfDays,
    isLoading: isLoadingStays,
  } = useRecentStays();
  const { cabins, isLoadingCabins } = useFetchCabins();

  if (isLoadingBookings || isLoadingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numberOfDays={numberOfDays}
        cabinCount={cabins.length}
      />
      <div>Today's activity</div>
      <div>Chart of stay durations</div>
      <SalesChart bookings={bookings} numberOfDays={numberOfDays} />
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
