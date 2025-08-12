import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createSelector } from "reselect";
import { useRedux } from "../hooks/useRedux";
import { getCatergory, getTax } from "../redux/productAndServices/actions";

function EditProductAndServicesModal({ mode = "add", initialData = null, onSave }) {

    const { dispatch, useAppSelector } = useRedux();

    const userData = createSelector(
        (state) => state.bankAccounts,
        (state) => ({
            currencies: state.currency,
        })
    );

    const { currencies } = useAppSelector(userData);

    const [selectedCategory, setSelectedCategory] = useState("Food");
    const [selectedTax, setSelectedTax] = useState("IVA1 (12%)");

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: "",
            sku: "",
            salePrice: "",
            purchasePrice: "",
            category: "Food",
            tax: "IVA1 (12%)",
            description: "",
        },
    });

    useEffect(() => {
        if (mode === "edit" && initialData) {
            reset({
                name: initialData.name || "",
                sku: initialData.sku || "",
                salePrice: initialData.salePrice || "",
                purchasePrice: initialData.purchasePrice || "",
                category: initialData.category || "Food",
                tax: initialData.tax || "IVA1 (12%)",
                description: initialData.description || "",
            });
            setSelectedCategory(initialData.category || "Food");
            setSelectedTax(initialData.tax || "IVA1 (12%)");
        } else {
            reset({
                name: "",
                sku: "",
                salePrice: "",
                purchasePrice: "",
                category: "Food",
                tax: "IVA1 (12%)",
                description: "",
            });
            setSelectedCategory("Food");
            setSelectedTax("IVA1 (12%)");
        }
    }, [mode, initialData, reset]);

    useEffect(() => {
        dispatch(getCatergory());
        dispatch(getTax());
    }, [])


    const onSubmit = (data) => {
        onSave(data);
    };

    return (
        <div
            className="modal fade"
            id="edit-modal"
            tabIndex={-1}
            aria-labelledby="edit-modalModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {mode === "edit" ? "Edit Product" : "Add Product"}
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

                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Name *</label>
                                <input {...register("name")} className="form-control" placeholder="Name" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Sku</label>
                                <input {...register("sku")} className="form-control" placeholder="Sku" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Sale price ($)</label>
                                <input {...register("salePrice")} className="form-control" placeholder="Sale price" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Purchase price ($) *</label>
                                <input {...register("purchasePrice")} className="form-control" placeholder="Purchase price" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Category *</label>
                                <select
                                    {...register("category")}
                                    className="form-select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value="Food">Food</option>
                                    <option value="Test Product">Test Product</option>
                                    <option value="cate2">cate2</option>
                                    <option value="sale1">sale1</option>
                                    <option value="chocolate">chocolate</option>
                                    <option value="Godex">Godex</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Tax *</label>
                                <select
                                    {...register("tax")}
                                    className="form-select"
                                    value={selectedTax}
                                    onChange={(e) => setSelectedTax(e.target.value)}
                                >
                                    <option value="IVA1 (12%)">IVA1 (12%)</option>
                                    <option value="Consumption Tax (5%)">Consumption Tax (5%)</option>
                                    <option value="Service Charge (5%)">Service Charge (5%)</option>
                                    <option value="tax2 (5%)">tax2 (5%)</option>
                                    <option value="bahrain tax (10%)">bahrain tax (10%)</option>
                                    <option value="VAT7 (7%)">VAT7 (7%)</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea {...register("description")} className="form-control" rows="3" placeholder="Description" />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProductAndServicesModal;
