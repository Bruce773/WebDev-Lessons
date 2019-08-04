export interface CurrentUserTypes {
  currentUser: {
    email: string;
    created_at: string;
    id: string;
    user_metadata: { full_name: string };
  } | null;
}
