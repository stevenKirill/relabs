import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {
    field: 'rowId',
    headerName: '№',
    sortable: true,
    width: 20,
    pinnable: true,
  },
  {
    field: 'id',
    headerName: 'id',
    sortable: true,
    width: 300,
  },
  {
    field: 'event',
    headerName: 'Событие',
    sortable: true,
    width: 250,
  },
  {
    field: 'name',
    headerName: 'Имя',
    sortable: true,
    width: 200,
  },
  {
    field: 'role',
    headerName: 'Роль',
    sortable: true,
    width: 150,
  },
  {
    field: 'ctime',
    headerName: 'Время',
    sortable: true,
    width: 150,
  },
  {
    field: 'deleteIcon',
    headerName: '',
    sortable: false,
    maxWidth: 50,
    renderCell: () => (
      <svg style={{ cursor: 'pointer' }} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="close_snackbar_icon">
        <g clipPath="url(#clip0_2_1860)">
          <path d="M0.775484 11.7867C0.772591 11.9432 0.800806 12.0987 0.858474 12.2444C0.916143 12.39 1.00213 12.5231 1.11158 12.6357C1.22102 12.7484 1.35174 12.8386 1.49629 12.9011C1.64085 12.9636 1.79636 12.9972 1.95401 13H9.02555C9.18319 12.9972 9.33871 12.9636 9.48326 12.9011C9.62782 12.8386 9.75853 12.7484 9.86798 12.6357C9.97742 12.5231 10.0634 12.39 10.1211 12.2444C10.1787 12.0987 10.207 11.9432 10.2041 11.7867V3.25H0.775484V11.7867ZM7.45405 5.28667C7.4539 5.18114 7.49457 5.07955 7.56768 5.00294C7.64079 4.92634 7.74074 4.88055 7.84689 4.875C7.89992 4.8764 7.95217 4.8882 8.00062 4.90965C8.04906 4.9311 8.09281 4.9618 8.1293 5.00004C8.16578 5.03827 8.19426 5.08323 8.21322 5.13241C8.23218 5.1816 8.24118 5.23403 8.23973 5.28667V10.9633C8.24118 11.016 8.23218 11.0684 8.21322 11.1176C8.19426 11.1668 8.16578 11.2117 8.1293 11.25C8.09281 11.2882 8.04906 11.3189 8.00062 11.3404C7.95217 11.3618 7.89992 11.3736 7.84689 11.375C7.74074 11.3694 7.64079 11.3237 7.56768 11.2471C7.49457 11.1704 7.4539 11.0689 7.45405 10.9633V5.28667ZM5.09687 5.28667C5.09687 5.18324 5.13829 5.08402 5.21196 5.01088C5.28564 4.93774 5.38552 4.89669 5.48971 4.89669C5.5939 4.89669 5.69391 4.93774 5.76759 5.01088C5.84126 5.08402 5.88268 5.18324 5.88268 5.28667V10.9633C5.88268 11.0668 5.84126 11.166 5.76759 11.2391C5.69391 11.3123 5.5939 11.3533 5.48971 11.3533C5.38552 11.3533 5.28564 11.3123 5.21196 11.2391C5.13829 11.166 5.09687 11.0668 5.09687 10.9633V5.28667ZM2.73982 5.28667C2.73982 5.18324 2.78111 5.08402 2.85478 5.01088C2.92846 4.93774 3.02847 4.89669 3.13266 4.89669C3.23686 4.89669 3.33673 4.93774 3.41041 5.01088C3.48408 5.08402 3.5255 5.18324 3.5255 5.28667V10.9633C3.5255 11.0668 3.48408 11.166 3.41041 11.2391C3.33673 11.3123 3.23686 11.3533 3.13266 11.3533C3.02847 11.3533 2.92846 11.3123 2.85478 11.2391C2.78111 11.166 2.73982 11.0668 2.73982 10.9633V5.28667ZM10.5969 0.8125H7.65054L7.42128 0.335831C7.36977 0.240391 7.2947 0.159511 7.20308 0.100769C7.11146 0.0420271 7.00631 0.00735137 6.89749 0H4.04929C3.94074 0.00833034 3.83597 0.0433864 3.7445 0.102025C3.65304 0.160664 3.5778 0.241032 3.5255 0.335831L3.29638 0.8125H0.349872C0.244689 0.815323 0.144837 0.858767 0.0714601 0.933634C-0.00191716 1.0085 -0.0430072 1.10887 -0.0429687 1.21333V2.03667C-0.0430072 2.14113 -0.00191716 2.2415 0.0714601 2.31637C0.144837 2.39123 0.244689 2.43468 0.349872 2.4375H10.5969C10.7021 2.43468 10.8021 2.39123 10.8755 2.31637C10.9488 2.2415 10.9898 2.14113 10.9898 2.03667V1.21333C10.9898 1.10887 10.9488 1.0085 10.8755 0.933634C10.8021 0.858767 10.7021 0.815323 10.5969 0.8125Z" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_2_1860">
            <rect width="11" height="13" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
