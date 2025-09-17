import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createSelector } from "reselect";
import { useRedux } from "../hooks/useRedux";
import { createProductData, editProductDataDetails, getCatergory, getTax } from "../redux/productAndServices/actions";

function EditProductAndServicesModal({ mode = "add", initialData = null, onSave, calledFrom }) {

    const { dispatch, useAppSelector } = useRedux();

    const userData = createSelector(
        (state) => state.productAndServices,
        (state) => ({
            category: state.category,
            tax: state.tax,
        })
    );

    const { category, tax } = useAppSelector(userData);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTax, setSelectedTax] = useState("");
    const createdById = initialData?.createdById

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: "",
            sku: "",
            salePrice: "",
            purchasePrice: "",
            categoryId: "Food",
            taxId: "",
            description: "",
            createdById: createdById,
            id: "",
        },
    });

    useEffect(() => {
        if (mode === "edit" && initialData) {
            reset({
                name: initialData.name || "",
                sku: initialData.sku || "",
                salePrice: initialData.salePrice || "",
                purchasePrice: initialData.purchasePrice || "",
                categoryId: category?.[0]?.id || 0,
                taxId: initialData.tax?.id || "", description: initialData.description || "",
                createdById: createdById || "",
                id: initialData.id || "",
            });
            setSelectedCategory(initialData.category.id || "Food");
            setSelectedTax(initialData.tax?.id || "");
        } else {
            reset({
                name: "",
                sku: "",
                salePrice: "",
                purchasePrice: "",
                categoryId: category?.[0]?.id || 0,
                taxId: "",
                description: "",
                createdById: createdById,
                id: "",
            });
            setSelectedCategory("");
            setSelectedTax(")");
        }
    }, [mode, initialData, reset]);



    useEffect(() => {
        if (createdById) {
            reset((prev) => ({
                ...prev,
                createdById: createdById
            }));
        }
    }, [createdById, reset]);


    const handleSave = (data) => {
        data.categoryId = Number(data.categoryId);
        data.createdById = Number(data.createdById);
        if (mode === "edit") {
            dispatch(editProductDataDetails(data));
        } else if (mode === "add") {
            dispatch(createProductData(data));
        }

        onSave(data);
        const modalEl = document.querySelector("#edit-modal");
        if (modalEl) {
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            if (modalInstance) modalInstance.hide();
        }
    }

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
                    <form onSubmit={handleSubmit(handleSave)}>
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
                                    {...register("categoryId", { valueAsNumber: true })}
                                    className="form-select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(Number(e.target.value))}
                                >
                                    {category
                                        ?.filter(cat => {
                                            if (calledFrom === "product") {
                                                return cat.type === "product";
                                            }
                                            if (calledFrom === "service") {
                                                return cat.type === "service";
                                            }
                                            return true;
                                        })
                                        .map(cat => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat?.name}
                                            </option>
                                        ))}
                                </select>

                            </div>

                            <div className="mb-3">
                                <label className="form-label">Tax *</label>
                                <select
                                    {...register("taxId")}
                                    className="form-select"
                                    value={selectedTax}
                                    onChange={(e) => setSelectedTax(e.target.value)}
                                >
                                    {tax && tax.map((taxItem) => (
                                        <option key={taxItem.id} value={taxItem.id}>
                                            {taxItem?.name} ({taxItem?.rate}%)
                                        </option>
                                    ))}
                                </select>

                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea {...register("description")} className="form-control" rows="3" placeholder="Description" />
                                <input type="hidden" {...register("createdById", { valueAsNumber: true })} value={createdById} className="d-none" />
                                <input type="hidden" {...register("id", { valueAsNumber: true })} className="d-none" />
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
