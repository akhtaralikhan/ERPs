
import React, { useState } from "react";
import { Table, Button, InputGroup, Form, Pagination, Row, Col } from "react-bootstrap";
import { FaPlusSquare, FaHistory } from "react-icons/fa";

const ManageCurrencyPage = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showRowsDropdown, setShowRowsDropdown] = useState(false);
    const showRowsOptions = [10, 15, 20, 25, 50, 100];
    const [items] = useState([
        {
            Id:1,
            Name:"US Dollar",
            Code:USD,
            
        },
        {
            
        }