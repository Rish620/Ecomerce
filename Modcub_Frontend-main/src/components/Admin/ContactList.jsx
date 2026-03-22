import { DataGrid } from '@material-ui/data-grid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllContact } from '../../redux/actions/contact';

const ContactList = () => {
    const dispatch = useDispatch();

  const {contactList,isLoading } = useSelector((state) => state.contact);
  console.log("🚀 ~ ContactList ~ contactList:", contactList)

  useEffect(() => {
    dispatch(getAllContact());    
           }, [ dispatch]);


  const columns = [
    {
        field: "id",
        headerName: "ID",
        minWidth: 50,
        flex: 0.8,
    },
    {
        field: "name",
        headerName: "Name",
        minWidth: 30,
        flex: 0.5,
    },
    {
        field: "email",
        headerName: "Email",
        minWidth: 70,
        flex: 0.8,
    },
    {
        field: "message",
        headerName: "Message",
        minWidth: 200,
        flex: 1.5,
    },
    
];

const rows = contactList.map((item) => ({
    id: item._id,
    name: item.name,
    email: item.email,
    message: item.message,
    
}));
  return (
    <div className="w-full mx-8 pt-1 mt-10 bg-white">
    {contactList.length === 0 ? (
        <p>Loading contact...</p>
    ) : (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
        />
    )}
</div>
  )
}

export default ContactList
