import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 0.6px solid var(--lightGray);
  border-radius: 2px;
  background-color: var(--backgroundGrayContent);
  overflow-x: hidden;
  tbody tr:nth-child(odd) {
    background-color: var(--stripeColor);
  }

  tbody tr:hover {
    background-color: var(--hoverColor);
    cursor: pointer;
  }

  th {
    color: var(--darkGray);
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.75rem 1rem;
    text-align: left;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0.6px solid var(--lightGray);
  }

  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--textColor500);
    color: var(--textGray);
    font-size: 0.875rem;
    font-weight: 400;
    text-align: left;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0.6px solid var(--lightGray);
    position: relative;
  }

  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    text-align: left;
    font-weight: 500;
    content: attr(data-title);
  }

  tbody tr:hover {
    background-color: var(--hoverColor);
  }

  thead tr:hover {
    background-color: var(--hoverColor);
  }


`;
