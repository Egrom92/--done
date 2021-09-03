import React, {useState, useEffect} from "react";
import {getDateValue} from '../../helpers'


export default function OrderFilter({
                                        query,
                                        products,
                                        statuses,
                                        onFiltersChange
                                    }) {
    const [productId, setProductId] = useState(query.productId || '');
    const [status, setStatus] = useState(query.status || '');
    const [fullname, setFullname] = useState(query.fullname || '');
    const [createdAt, setCreatedAt] = useState(query.createdAt || '');


    useEffect(() => {
        onFiltersChange({
            createdAt,
            status,
            fullname,
            productId
        });
    }, [status, fullname, productId, createdAt, onFiltersChange]);


    return (
        <div className="form-row p-2">
            <div className="form-group col">
                <label>Full name:</label>
                <input
                    value={fullname}
                    onInput={(e) => setFullname(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Full name"
                />
            </div>
            <div className="form-group col">
                <label>Orders:</label>
                <select
                    className="form-control"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                >
                    <option key={0} value="">
                        All
                    </option>
                    {products.map((product, i) => (
                        <option key={i + 1} value={product.productId}>
                            {product.productName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group col">
                <label>Status:</label>
                <select
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option key={0} value="">
                        All
                    </option>
                    {statuses.map((status, i) => (
                        <option key={i + 1} value={status.value}>
                            {status.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group col">
                <label>Price:</label>
                <input className="form-control mb-2" type="number"/>
            </div>
            <div className="form-group col">
                <label>Date:</label>
                <input value={getDateValue(createdAt)} onChange={(e) => setCreatedAt(e.target.valueAsNumber)} className="form-control mb-2" type="date"/>
            </div>
        </div>
    );
}
