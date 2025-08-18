import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success('User account was successfully updated');
      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => toast.error(error.message),
  });

  return { updateUser, isUpdating };
}
