import { Button } from "../Button/Button.tsx";

import styles from './Pagination.module.scss'

type PaginationProps = {
  maxPage: number,
  minPage: number,
  currentPage: number,
  onNextPage: () => void,
  onPrevPage: () => void,
  onPageChange: (page: number) => void,
};

export function Pagination({minPage, maxPage, currentPage, onPageChange, onPrevPage, onNextPage}: PaginationProps) {
  return (
    <nav className={styles.pagination}>
      <Button onClick={onPrevPage} disabled={currentPage === minPage}>Назад</Button>
      <div>
        {Array.from({ length: maxPage }).map((_, id) => (
          <Button key={id} isActive={currentPage === id + 1} onClick={() => onPageChange(id + 1)}>{id + 1}</Button>
        ))}
      </div>
      <Button onClick={onNextPage} disabled={currentPage >= maxPage}>Вперёд</Button>
    </nav>
  );
};