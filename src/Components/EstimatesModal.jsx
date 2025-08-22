import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRedux } from "../hooks/useRedux";
import { createSelector } from "reselect";
import { Link } from "react-router-dom";

const EstimatesModal = ({ mode = "add", initialData = null, onSave }) => {
    const { dispatch, useAppSelector } = useRedux();

    const userData = createSelector(
        (state) => state.sales,
        (state) => ({
            customers: state.customers,
            currency: state.currency,
        })
    );

    const { customers, currency } = useAppSelector(userData);

    const createdById = initialData?.createdById;

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            customer: "",
            date: "",
            expireAt: "",
            currency: "",
            reference: "",
            number: "",
        },
    });

    useEffect(() => {
        console.log(initialData);

        if (mode === "edit" && initialData) {
            reset({
                customer: initialData.customer || "",
                date: formatDateForInput(initialData.issueDate),
                expireAt: formatDateForInput(initialData.issueDate),
                currency: initialData.currency.name || "",
                reference: initialData.totalAmount || "",
                number: initialData.customer.phone || "",
            });
        } else {
            reset({
                customer: "",
                date: "",
                expireAt: "",
                currency: "",
                reference: "",
                number: "",
            });
        }
    }, [mode, initialData, reset]);
    useEffect(() => {
        if (mode === "edit" && initialData) {
            reset({
                customer: initialData.customer || "",
                date: initialData.issueDate?.split("T")[0] || "",
                expireAt: initialData.expireAt?.split("T")[0] || "",
                currency: initialData.currency?.name || "",
                reference: initialData.totalAmount || "",
                number: initialData.customer?.phone || "",
            });
        } else {
            reset({
                customer: "",
                date: "",
                expireAt: "",
                currency: "",
                reference: "",
                number: "",
            });
        }
    }, [mode, initialData, reset]);


    const formatDateForInput = (dateString) => {
        if (!dateString) return "";
        return dateString.split("T")[0];
    };

    const submitHandler = (data) => {
        onSave(data);
        const modalEl = document.getElementById("edit-modal");
        if (modalEl) {
            const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
            modalInstance?.hide();
        }
    };

    return (
        <div
            className="modal fade"
            id="edit-modal"
            tabIndex="-1"
            aria-labelledby="edit-modalModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {/* Header */}
                    <div className="modal-header">
                        <h5 className="modal-title" id="edit-modalModalLabel">
                            {mode === "edit" ? "Edit Estimate" : "New Estimate"}
                        </h5>
                        <button
                            className="btn p-1"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="fa fa-xmark fs--1"></i>
                        </button>
                    </div>

                    {/* Body */}
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="modal-body">
                            {/* Customer */}
                            <div className="mb-3">
                                <label className="form-label">Customer *</label>
                                <select
                                    className="form-select"
                                    {...register("customer", { required: true })}
                                >
                                    {customers.map((customer, idx) => (
                                        <option value={customer.id} key={idx}>{customer.name}</option>
                                    ))}
                                </select>
                                <button className="btn btn-soft-primary small mt-2" type="button">
                                    <Link className="fa fa-solid fa-plus me-2"></Link> New Category
                                </button>
                            </div>

                            {/* Date */}
                            <div className="mb-3">
                                <label className="form-label">Date *</label>
                                <input
                                    className="form-control"
                                    type="date"
                                    {...register("date", { required: true })}
                                />
                            </div>

                            {/* Expire At */}
                            <div className="mb-3">
                                <label className="form-label">Expire at</label>
                                <input
                                    className="form-control"
                                    type="date"
                                    {...register("expireAt")}
                                />
                            </div>

                            {/* Currency */}
                            <div className="mb-3">
                                <label className="form-label">Currency *</label>
                                <select
                                    className="form-select"
                                    {...register("currency", { required: true })}
                                >
                                    {currency.map((curr, idx) => (
                                        <option value={curr.id} key={idx}>{curr.name} ({curr.symbol})</option>
                                    ))}

                                </select>
                            </div>

                            {/* Reference */}
                            <div className="mb-3">
                                <label className="form-label">Reference</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Purchase price ($)"
                                    {...register("reference")}
                                />
                            </div>

                            {/* Status */}
                            <div className="mb-3">
                                <label className="form-label">Status</label>
                                <span className="badge badge-phoenix fs--2 badge-phoenix-secondary">
                                    <span className="badge-label">Draft</span>
                                </span>
                            </div>

                            {/* Number */}
                            <div className="mb-3">
                                <label className="form-label">Number *</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Order Number"
                                    {...register("number", { required: true })}
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="modal-footer">
                            <button className="btn btn-primary" type="submit">
                                Save
                            </button>
                            <button
                                className="btn btn-outline-danger"
                                type="button"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EstimatesModal;
