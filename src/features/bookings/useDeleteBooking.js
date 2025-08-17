import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success('Booking was successfully deleted');
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error('There was an error while deleting a booking');
    },
  });

  return { deleteBooking, isDeleting };
}
