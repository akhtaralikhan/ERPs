import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

function AddItemModal({ showModal, setShowModal, onAdd, onUpdate, editingItem, clearEditing }) {
  const [formData, setFormData] = useState({
    Name: "",
    Vat: "VAT: 0%",
    Cost: 0,
    SellPrice: 0,
    TradePrice: 0,
    PremiumPrice: 0,
    OtherPrice: 0,
    Quantity: 0,
    Category: "",
    Supplier: "",
    Code: "",
    Barcode: "",
    Warehouse: "",
    Measure: "",
    Value: "",
    Manufacture: "",
    Expiration: "",
    SKU: "",
    ProductLevel: "",
    Note: "",
    Image: "https://businesserp.microhind.com/upload/DefaultItem/s2ultra.jpg",
  });

  // ✅ Load data if editing
  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    }
  }, [editingItem]);

  const handleClose = () => {
    setShowModal(false);
    clearEditing?.(); // ✅ reset edit mode
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editingItem) {
      onUpdate({ ...formData, Id: editingItem.Id });
    } else {
      onAdd(formData);
    }
    handleClose();
  };
  
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      size="xl"
      centered
      backdrop={true}
      keyboard={true}
      animation={true}
      enforceFocus={false}
      restoreFocus={false}
    >
      <div className="modal-header">
        <Modal.Title>{editingItem ? "Edit Item" : "Add Item"}</Modal.Title>
        <i className="fa-solid fa-xmark text-danger pointer" onClick={handleClose}></i>
      </div>
      <Modal.Body>
        <Form>
          <Row>
            {/* Left Column */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="Enter item name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Vat Percentage</Form.Label>
                <Form.Select name="Vat" value={formData.Vat} onChange={handleChange}>
                  <option>VAT: 0%</option>
                  <option>VAT: 5%</option>
                  <option>VAT: 10%</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cost Price</Form.Label>
                <Form.Control
                  type="number"
                  name="Cost"
                  value={formData.Cost}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Normal Price</Form.Label>
                <Form.Control
                  type="number"
                  name="SellPrice"
                  value={formData.SellPrice}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Trade Price</Form.Label>
                <Form.Control
                  type="number"
                  name="TradePrice"
                  value={formData.TradePrice}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Premium Price</Form.Label>
                <Form.Control
                  type="number"
                  name="PremiumPrice"
                  value={formData.PremiumPrice}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Other Price</Form.Label>
                <Form.Control
                  type="number"
                  name="OtherPrice"
                  value={formData.OtherPrice}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="Quantity"
                  value={formData.Quantity}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Categories</Form.Label>
                <Form.Select name="Category" value={formData.Category} onChange={handleChange}>
                  <option>--- SELECT ---</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Supplier Name</Form.Label>
                <Form.Select name="Supplier" value={formData.Supplier} onChange={handleChange}>
                  <option>--- SELECT ---</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Right Column */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Row>
                  <Col md={8}>
                    <Form.Label>Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="Code"
                      value={formData.Code}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={4} className="d-flex align-items-end">
                    <Button variant="info" className="w-100">
                      Update Barcode
                    </Button>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Barcode</Form.Label>
                <div className="border p-2 text-center">
                  <div
                    style={{ height: 60, background: "#eee", marginBottom: 4 }}
                  ></div>
                  <div>{formData.Barcode || "441349"}</div>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Change Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      Image: URL.createObjectURL(e.target.files[0]),
                    }))
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <img src={formData.Image} alt="item" width={50} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Warehouse</Form.Label>
                <Form.Select
                  name="Warehouse"
                  value={formData.Warehouse}
                  onChange={handleChange}
                >
                  <option>--- SELECT ---</option>
                </Form.Select>
              </Form.Group>

              <Row>
                <Col md={8}>
                  <Form.Group className="mb-3">
                    <Form.Label>Measure</Form.Label>
                    <Form.Select
                      name="Measure"
                      value={formData.Measure}
                      onChange={handleChange}
                    >
                      <option>--- SELECT ---</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Value</Form.Label>
                    <Form.Control
                      type="text"
                      name="Value"
                      value={formData.Value}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Manufacture</Form.Label>
                <Form.Control
                  type="date"
                  name="Manufacture"
                  value={formData.Manufacture}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Expiration</Form.Label>
                <Form.Control
                  type="date"
                  name="Expiration"
                  value={formData.Expiration}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>SKU</Form.Label>
                <Form.Control
                  type="text"
                  name="SKU"
                  value={formData.SKU}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Product Level</Form.Label>
                <Form.Control
                  type="text"
                  name="ProductLevel"
                  value={formData.ProductLevel}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Note</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="Note"
                  value={formData.Note}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          <small>{editingItem ? "Update" : "Save"}</small>
        </Button>
        <Button variant="outline-danger" onClick={handleClose}>
          <small>Close</small>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddItemModal;