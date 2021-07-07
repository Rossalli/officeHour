import './Home.css';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

const Home = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <>
      <header className="header">
        <span>MEU TICKET</span>
      </header>
      <body className="body">
        <span>About you</span>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />
            <input {...register("exampleRequired", { required: true })} />
            <input defaultValue="test 2" {...register("example")}/>
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit"/>
        </form>
      </body>
    </>
  );
};

export default Home;
