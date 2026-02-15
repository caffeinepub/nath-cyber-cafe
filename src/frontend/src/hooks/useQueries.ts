import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Contact } from '../backend';

export function useGetCafeInfo() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['cafeInfo'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCafeInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; phone: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      const timestamp = BigInt(Date.now());
      await actor.submitContact(data.name, data.phone, data.message, timestamp);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      queryClient.invalidateQueries({ queryKey: ['isContacted'] });
    },
  });
}

export function useIsContacted() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['isContacted'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isContacted();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllContacts() {
  const { actor, isFetching } = useActor();

  return useQuery<Contact[]>({
    queryKey: ['contacts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContacts();
    },
    enabled: !!actor && !isFetching,
  });
}
