import Dropdown from 'react-bootstrap/Dropdown';
import ItemsRendering from './inventoryRendering/itemsRendering';

function DropdownMove(props) {
  const { title, obj } = props;
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {obj ? obj.displayName: 'Custom Items'}
      </Dropdown.Toggle>
      <div>
        <Dropdown.Menu className='drop-menu'>
          <div>
            {/* <h1>ff</h1> */}
            {obj.displayName === 'Furniture' &&
              <div className='d-flex gap50'>
                <ItemsRendering data={obj.category[0]} />
                <ItemsRendering data={obj.category[1]} />
              </div>
            }
          </div>
        </Dropdown.Menu>

      </div>
    </Dropdown>
  );
}

export default DropdownMove;