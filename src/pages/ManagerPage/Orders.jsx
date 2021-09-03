import { statuses } from "../../data";
import { NavLink } from "react-router-dom";
import { getDateValue } from "../../helpers";
import hc from "../../hc";

import Table from "../../components/Table";

const statusClass = {
  new: "badge-primary",
  process: "badge-warning",
  back: "badge-danger",
  archived: "badge-dark"
};

const sendOrderToHistory = (order) => {
  hc.post("/messages", { order });
};

export default function Orders(props) {
  const { orders, products } = props;

  console.log(orders)
  console.log(products)

  const fields = [
    { label: "ID", name: "id" },
    { label: "Full name", name: "fullname" },
    {
      label: "Order",
      render(order) {
        return products.find((x) => x.productId === order.productId)?.productName;
      }
    },
    {
      label: "Status",
      render({ status }) {
        const statusData = statuses.find((x) => x.value === status);

        return (
          <span className={`badge ${statusClass[statusData.value]}`}>
            {statusData.name}
          </span>
        );
      }
    },
    {
      label: "Price",
      render(order) {
        return products.find((x) => x.productId === order.productId)?.productPrice;
      }
    },
    {
      label: "Actions",
      render(order) {
        return (
          <NavLink
            onClick={() => sendOrderToHistory(order.id)}
            to={`/order/${order.id}`}
            className="btn btn-outline-primary btn-sm"
          >
            Edit
          </NavLink>
        );
      }
    },
    {
      label: "Date",
      render(order) {
        return getDateValue(order.createdAt);
      }
    }
  ];

  return (
    <Table className="table table-striped" fields={fields} items={orders} />
  );
}
