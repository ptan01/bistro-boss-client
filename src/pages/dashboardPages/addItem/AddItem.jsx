import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';





const AddItem = () => {

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Img_Hosting_Token}`

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.photo[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData 
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const {category, name, recipe, price} = data ;
                const newItem = {category, name , price : parseFloat(price), recipe, image : imgResponse.data.display_url}
                console.log(newItem)

            }
            console.log(imgResponse)
        })
        console.log(data)
    };
  


    return (
        <div className="w-full ">
            <Helmet>
                <title>Bistro Boss || ADD Item</title>
            </Helmet>
            <SectionTitle subHeading="what's new" heading="add an item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5 w-[992px] border mx-auto bg-[#F3F3F3]">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="flex items-center gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue='Pick One' {...register("category", { required: true })} className="select select-bordered w-full">
                            <option disabled>Pick One</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soups</option>
                            <option>Desserts</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered  h-24" placeholder="Bio"></textarea>
                </div>
                <input type="file" {...register("photo", { required: true })} className="mt-3 file-input file-input-bordered file-input-sm w-full max-w-xs" />
                <br />
                <div className="text-center">
                    <input className="btn btn-sm" type="submit" value="Add item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;