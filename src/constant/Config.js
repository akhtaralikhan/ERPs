export const token = localStorage.getItem('token') || null;

export const userData = JSON.parse(localStorage.getItem("userData"))
export const superAdmin = userData?.data?.role?.name === "SuperAdmin"
