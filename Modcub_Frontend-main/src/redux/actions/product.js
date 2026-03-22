import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct =
    (
        name,
        description,
        category,
        tags,
        originalPrice,
        discountPrice,
        stock,
        shopId,
        images
    ) =>
    async (dispatch) => {
        try {
            dispatch({
                type: "productCreateRequest",
            });

            const { data } = await axios.post(
                `${server}/product/create-product`,
                name,
                description,
                category,
                tags,
                originalPrice,
                discountPrice,
                stock,
                shopId,
                images
            );
            dispatch({
                type: "productCreateSuccess",
                payload: data.product,
            });
        } catch (error) {
            dispatch({
                type: "productCreateFail",
                payload: error.response.data.message,
            });
        }
    };

// get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllProductsShopRequest",
        });

        const { data } = await axios.get(
            `${server}/product/get-all-products-shop/${id}`
        );
        dispatch({
            type: "getAllProductsShopSuccess",
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: "getAllProductsShopFailed",
            payload: error.response.data.message,
        });
    }
};

// delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteProductRequest",
        });

        const { data } = await axios.delete(
            `${server}/product/delete-product/${id}`,
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "deleteProductSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "deleteProductFailed",
            payload: error.response.data.message,
        });
    }
};

// get all products
export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAllProductsRequest",
        });

        const { data } = await axios.get(`${server}/product/get-all-products`);
        dispatch({
            type: "getAllProductsSuccess",
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: "getAllProductsFailed",
            payload: error.response.data.message,
        });
    }
};

//edit product

export const editProduct =
    (
        // name,
        // description,
        // category,
        // tags,
        // originalPrice,
        // discountPrice,
        // stock,
        // shopId,
        // images,
        // id
        newform,
        id
        
    ) =>
        async (dispatch) => {
        console.log("🚀 ~ productIdhbsdfhjbjhbfj:", id)
        try {
            dispatch({
                type: "productEditRequest",
            });
            for (var key of newform.entries()) {
                console.log(key[0] + ', ' + key[1])
            }

            console.log(newform.entries());

            const { data } = await axios.put(
                `${server}/product/update-product/${id}`,
                // name,
                // description,
                // category,
                // tags,
                // originalPrice,
                // discountPrice,
                // stock,
                // shopId,
                // images
                newform,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
                
            );

            dispatch({
                type: "productEditSuccess",
                payload: data.product,
            });
        } catch (error) {
            dispatch({
                type: "productEditFail",
                payload: error.response.data.message,
            });
        }
    };


    // get product by id

    export const getShopProductById = (id) => async (dispatch) => {
        try {
            dispatch({
                type: "getProductById",
            });
    
            const { data } = await axios.get(
                `${server}/product/get-productdetails/${id}`
            );
            dispatch({
                type: "getShopProductByIdSuccess",
                payload: data.product,
            });
        } catch (error) {
            dispatch({
                type: "getShopProductByIdFailed",
                payload: error.response.data.message,
            });
        }
    };
    