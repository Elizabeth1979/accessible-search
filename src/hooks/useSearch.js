import { useState, useCallback } from 'react';

export function useSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const clearSearch = useCallback((inputRef) => {
    setSearchValue("");
    requestAnimationFrame(() => {
      inputRef?.current?.focus();
    });
  }, []);

  const handleOpenChange = useCallback((open) => {
    if (!open) {
      setSearchValue("");
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, []);

  return {
    searchValue,
    isOpen,
    handleSearchChange,
    clearSearch,
    handleOpenChange,
    setIsOpen
  };
}
