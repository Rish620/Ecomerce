import axios from "axios";
import { server } from "../../server";
import Cosmetics from "../../components/All-Products/Cosmetics";

// create contact
export const createContact =
    (
        name,
        email,
        message
    ) =>
    async (dispatch) => {
        try {
            dispatch({
                type: "contactCreateRequest",
            });

            const { data } = await axios.post(
                `${server}/contact/create-new-contact`,
                name,
                email,
                message
            );
            dispatch({
                type: "contactCreateSuccess",
                payload: data.contacts,
            });
        } catch (error) {
            dispatch({
                type: "contactCreateFail",
                payload: error.response.data.message,
            });
        }
    };


// get all contact
export const getAllContact = () => async (dispatch) => {
    console.log("getAllContact")
    try {
        dispatch({
            type: "getAllContactRequest",
        });

        const { data } = await axios.get(`${server}/contact/get-all-contacts`);
        console.log("🚀 ~ getAllContact ~ payload:", data)
        dispatch({
            type: "getAllContactSuccess",
            payload: data.contacts,
        });
    } catch (error) {
        dispatch({
            type: "getAllContactFailed",
            payload: error.response.data.message,
        });
    }
};

