import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddProductModal = ({ modalOpen, setModalOpen, setProducts }) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    const addProduct = () => {
        if (!name || !desc || !price || !thumbnail) {
            alert('Please fill out all the blanks')
            return;
        }

        setProducts(prev => [
            ...prev,
            { name, desc, price, thumbnail }
          ]);
          setModalOpen(false);
  
          // Reset form
          setName('');
          setDesc('');
          setPrice('');
          setThumbnail('');
    }

    return (
        <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column gap-3'>
                  <div>
                    <h5>Product Name</h5>
                    <input
                      className="form-control mb-2"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <h5>Banner</h5>
                    <input
                      className="form-control"
                      placeholder="Thumbnail URL"
                      value={thumbnail}
                      onChange={(e) => setThumbnail(e.target.value)}
                    />
                  </div>
                  <div>
                    <h5>Product Description</h5>
                    <input
                      className="form-control mb-2"
                      placeholder="Description"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>
                  <div>
                    <h5>Product Price</h5>
                    <input
                      type="number"
                      className="form-control mb-2"
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={addProduct}>Add</Button>
                  <Button variant="secondary" onClick={() => setModalOpen(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
    );
}

export default AddProductModal;