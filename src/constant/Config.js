export const token = localStorage.getItem('token') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwibmJmIjoxNzU0NTUyNDQyLCJleHAiOjE3NTUxNTcyNDIsImlhdCI6MTc1NDU1MjQ0Mn0.l1OvqXsxsuNHi1HNVTGYIfIJuP7WlwqKAGMClUO-VbE";

export const userData = JSON.parse(localStorage.getItem("userData"))
export const superAdmin = userData?.data?.role?.name === "SuperAdmin"
