class SearchStore {
  savedSearchTerms = $state<string[]>([]);
  isSearchEnabled = $state(false);
  preventRaceConditionSearchBar = $state(false);

  /**
   * Reset the search terms and state.
   */
  reset() {
    this.savedSearchTerms = [];
    this.isSearchEnabled = false;
    this.preventRaceConditionSearchBar = false;
  }
}

export const searchStore = new SearchStore();
