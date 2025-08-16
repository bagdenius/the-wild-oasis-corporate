import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';
import CabinTable from './CabinTable';

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open windowName='cabin-form'>
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open windowName='table'>
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name='table'>
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
};

export default AddCabin;
