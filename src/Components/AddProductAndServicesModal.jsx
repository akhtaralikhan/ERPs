import React, { useEffect } from 'react'
import { useRedux } from '../hooks/useRedux';
import { editBankAccountDetails, getBankAccountAction, getCurrency } from '../redux/bankAccounts/actions';
import { createSelector } from 'reselect';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FormInput from './FormInput';

function BankAccountModal({ selectedBankAccount }) {
    const { dispatch, useAppSelector } = useRedux();

    const userData = createSelector(
        (state) => state.bankAccounts,
        (state) => ({
            currencies: state.currency,
        })
    );

    const { currencies } = useAppSelector(userData);


    useEffect(() => {
        dispatch(getCurrency());
    }, [dispatch]);

    const schema = yup.object().shape({
        bankName: yup.string().required("Bank name is required"),
        bankHolderName: yup.string().required("Account holder name is required"),
        accountNumber: yup.string().required("Account number is required"),
        balance: yup.number().typeError("Balance must be a number").required("Balance is required"),
        pendingBalance: yup.number().typeError("Pending balance must be a number").required("Pending balance is required"),
        currencyId: yup.string().required("Currency is required"),
        phone: yup.string(),
        addressLine1: yup.string(),
        addressLine2: yup.string(),
        zipCode: yup.string(),
        city: yup.string(),
        country: yup.string(),
        createdById: yup.string(),
        id: yup.string()
    });

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            bankName: "",
            bankHolderName: "",
            accountNumber: "",
            balance: "",
            pendingBalance: "",
            currencyId: "",
            phone: "",
            addressLine1: "",
            addressLine2: "",
            zipCode: "",
            city: "",
            country: "",
            createdById: "",
            id: "",
        }
    });

    const { handleSubmit, register, control, reset, formState: { errors } } = methods;

    useEffect(() => {
        if (selectedBankAccount) {
            reset({
                bankName: selectedBankAccount.bankName || "",
                bankHolderName: selectedBankAccount.bankHolderName || "",
                accountNumber: selectedBankAccount.accountNumber || "",
                balance: selectedBankAccount.balance || "",
                pendingBalance: selectedBankAccount.pendingBalance || "",
                currency: selectedBankAccount.currency?.name || "",
                phone: selectedBankAccount.phone || "",
                addressLine1: selectedBankAccount.address?.addressLine1 || "",
                addressLine2: selectedBankAccount.address?.addressLine2 || "",
                zipCode: selectedBankAccount.address?.zipCode || "",
                city: selectedBankAccount.address?.city || "",
                country: selectedBankAccount.address?.country || "",
                createdById: selectedBankAccount.createdById || "",
                id: selectedBankAccount.id || "",
            });
        }
    }, [selectedBankAccount, reset]);

    const handleSaveBankAccount = (data) => {
        dispatch(editBankAccountDetails(data));
        dispatch(getBankAccountAction());
        const modalEl = document.querySelector("#edit-modal");
        if (modalEl) {
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            if (modalInstance) modalInstance.hide();
        }
    }

    const navigate = useNavigate();

    const handleClick = () => {

        const modalEl = document.querySelector("#edit-modal");
        if (modalEl) {
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            if (modalInstance) modalInstance.hide();
        }

        navigate("/Settings");
    };


    return (
        <div
            className="modal fade"
            id="edit-modal"
            tabIndex={-1}
            aria-labelledby="edit-modalModalLabel"
            aria-hidden="true"
            style={{ display: "none" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="edit-modalModalLabel">
                            Edit Bank accounts
                        </h5>
                        <button
                            className="btn p-1"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className='fa fa-xmark fs--1'></i>
                        </button>
                    </div>
                    <form
                        onSubmit={handleSubmit(handleSaveBankAccount)}
                        className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Bank name * :</label>
                            <FormInput className="form-control" {...register("bankName")} errors={errors} placeholder="Enter bank name" />
                            {errors.bankName && <span className="text-danger">{errors.bankName.message}</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Bank holder name :</label>
                            <FormInput className="form-control" {...register("bankHolderName")} errors={errors} placeholder="Enter account holder name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Bank account number :</label>
                            <FormInput className="form-control" {...register("accountNumber")} errors={errors} placeholder="Enter account number" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Balance * :</label>
                            <FormInput className="form-control" {...register("balance")} errors={errors} placeholder="Enter balance" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pending balance * :</label>
                            <FormInput className="form-control" {...register("pendingBalance")} errors={errors} placeholder="Enter pending balance" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Currency * :</label>
                            <select className="form-select" aria-label="Default select example" {...register("currencyId")}>
                                <option value="Select currency">Select currency</option>
                                {currencies?.map((currency, index) => (
                                    <option key={index} value={currency?.id}>{currency?.name}</option>
                                ))}
                            </select>
                            {errors.currencyId && <span className="text-danger">{errors.currencyId.message}</span>}
                            <button
                                type="button"
                                className="btn btn-soft-primary small"
                                onClick={handleClick}
                            >
                                Add New Currency
                            </button>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone :</label>
                            <FormInput className="form-control"  {...register("phone")} errors={errors} placeholder="Enter phone number" />
                        </div>

                        <label className="form-label">Address </label>

                        <div className="mb-3">
                            <label className="form-label">Address line 1 :</label>
                            <FormInput className="form-control"  {...register("addressLine1")} errors={errors} placeholder="Enter address " />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Address line 2 :</label>
                            <FormInput className="form-control"  {...register("addressLine2")} errors={errors} placeholder="Enter address " />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Zip code :</label>
                            <FormInput className="form-control"  {...register("zipCode")} errors={errors} placeholder="Enter zipCode " />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">City :</label>
                            <FormInput className="form-control"  {...register("city")} errors={errors} placeholder="Enter city " />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Country :</label>
                            <FormInput className="form-control"  {...register("country")} errors={errors} placeholder="Enter country " />
                        </div>
                        <div className='d-none'>
                            <FormInput className="d-none" {...register("createdById")} errors={errors} />
                            <FormInput className="d-none" {...register("id")} errors={errors} />
                        </div>

                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
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
    )
}

export default BankAccountModal