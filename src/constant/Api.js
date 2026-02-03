export const bankAccountApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.bankaccount.bankaccount,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
