export interface LoadMoreButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export interface BackButtonProps {
  onClick: () => void;
}

export interface FinalizeButtonProps {
  purchaseCompleted: boolean;
  onClick: () => void;
}
