import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

const Stats = ({ bookings, confirmedStays, numberOfDays, cabinCount }) => {
  const numberOfBookings = bookings.length;
  const totalSales = bookings.reduce(
    (sum, { totalPrice }) => sum + totalPrice,
    0
  );
  const checkins = confirmedStays.length;
  const occupation =
    confirmedStays.reduce(
      (sum, { numberOfNights }) => sum + numberOfNights,
      0
    ) /
    (numberOfDays * cabinCount);

  return (
    <>
      <Stat
        title='Bookings'
        value={numberOfBookings}
        color='blue'
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title='Sales'
        value={formatCurrency(totalSales)}
        color='green'
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title='Check ins'
        value={checkins}
        color='indigo'
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title='Occupancy rate'
        value={`${Math.round(occupation * 100)}%`}
        color='yellow'
        icon={<HiOutlineChartBar />}
      />
    </>
  );
};

export default Stats;
