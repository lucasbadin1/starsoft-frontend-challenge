export interface LoadMoreButtonProps {
  isLoading: boolean;
  onClick: () => void;
  currentCount: number;
  totalCount: number;
}

export interface BackButtonProps {
  onClick: () => void;
}

export interface FinalizeButtonProps {
  purchaseCompleted: boolean;
  onClick: () => void;
  hasItems: boolean;
}
