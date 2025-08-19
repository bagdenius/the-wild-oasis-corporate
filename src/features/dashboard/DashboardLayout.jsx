import styled from 'styled-components';

import Spinner from '../../ui/Spinner';

import { useRecentStays } from './useRecentStays';
import { useRecentBookings } from './useRecentBookings';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoadingStays } = useRecentStays();

  if (isLoadingBookings || isLoadingStays) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>Statisctics</div>
      <div>Today's activity</div>
      <div>Chart of stay durations</div>
      <div>Chart of sales</div>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
