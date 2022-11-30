import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "./formSchema";
import Input from "../Input";

const Form = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(registerSchema),
   });
   /* Condensar todos os campos do formulário em um objeto */

   const submit = (data) => {
      //setState([...list, data])
      alert("Seja feliz com o Molejão!");
      console.log(data);
      /* Lógica de envio do formulário */
   };
   return (
      <form onSubmit={handleSubmit(submit)} noValidate>
         <Input type="text" placeholder="Digite o seu nome" register={register("name")} />
         {errors.name?.message && <p>{errors.name.message}</p>}

         <input type="email" placeholder="Digite seu e-mail" {...register("email")} />
         {errors.email?.message && <p aria-label="error">{errors.email.message}</p>}

         <input type="password" placeholder="Crie uma senha" {...register("password")} />
         {errors.password?.message && <p>{errors.password.message}</p>}

         <select {...register("userType")}>
            <option value="">Tipo de usuário</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
         </select>
         {errors.userType?.message && <p>{errors.userType.message}</p>}

         <button type="submit">Enviar</button>
      </form>
   );
};

export default Form;
