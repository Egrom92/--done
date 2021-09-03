export const orderTableHeaders = [
  {
    label: "",
    field: "ID"
  },
  {
    label: "ИФО",
    field: "client"
  },
  {
    label: "Заказ",
    field: "name"
  },
  {
    label: "Сумма",
    field: "price"
  },
  {
    label: "Статус",
    field: "status"
  },
  {
    label: "Действия123",
    field: "action"
  },
  {
    label: "Дата / Время",
    field: "dateTime"
  }
];
// primary key
export const statuses = [
  {
    value: "new",
    name: "New",
    className: "btn-outline-primary"
  },
  {
    value: "process",
    name: "For execution",
    className: "btn-outline-warning"
  },
  {
    value: "back",
    name: "Return",
    className: "btn-outline-danger"
  },
  {
    value: "archived",
    name: "Archived",
    className: "btn-outline-dark"
  }
];
