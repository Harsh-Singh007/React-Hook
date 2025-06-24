import React, {  useMemo, useState } from "react";
import Header from "./header";

const Usememo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setdark] = useState(false);

const products = [
  { id: 1, name: "iPhone 14", category: "Mobile", price: 799, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSq_LfXVoGQCgW2_XY549gWj9EvzKxR8x2nYHPm-oYmanQ5upi0YoBQdllzzcKtQjnXzLHJMm-4wv-zvV9lvyd7EYUScLP_8lQ298JwESe_ODXlHCNcAMOEdA" },
  { id: 2, name: "Samsung Galaxy S21", category: "Mobile", price: 699, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQU7YX3FfqKJN4I2a3YecDM3w87IAGQOoBV8lyUp3nFX0zydAR3dV9SV42yTEQdDsAuagx_gj42nwv0Zh02nUOPq23isNd" },
  { id: 3, name: "MacBook Air", category: "Laptop", price: 1199, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKjMCfo0XSjwyLR-GotGToFtLi5KfdsZpEV6HLlB3nbdiDVxsGlMEE1OmNGXpsP24xexfwAiJXGc4qPrD2Y-bskzzJMg7LkOqmNtjNNQn4BeRPUyOkEIyICw" },
  { id: 4, name: "HP Pavilion", category: "Laptop", price: 899, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeGFZx01mO6LdSPk5fefh7e8vuF0jN-H9C1213OHmqLV_BUWRdHv2u9XB_DM1j5IFShdZBXZ1zNsL0Pa0UkgGUeyqrIacRxAMVvo6GO0U" },
  { id: 5, name: "Lenovo ThinkPad", category: "Laptop", price: 849, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2XSHf7GTgu9bCuHRwVxoOJ7h-Y4fwDaKBCpMbLp_j6zpg6uDyjNkoS9WH5stl14JH0JIurFmVHdC8tK1fNxt7zxrXP1rz86N4uME21dlKdOu9IGc81gV8bQ" },
  { id: 6, name: "Apple Charger", category: "Acessory", price: 29, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnz9UGhbPmNgWP_H4MraLSlM8Os5TgGbAFA8JQpKLwJG3grPFdCjWpgcqzi1Fnq1ghz24u70gi0hFDn5PMV9ku8a0lpYdnVWAOw7jNIEUqj4UGQFFl3tUQ" },
  { id: 7, name: "AirPods Pro", category: "Acessory", price: 199, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7YIfbaBOX6nXXuKJhQ0qij-vwtPow-lPFBJv-R_5EKKWaGX0jkvm3VJ3YGnKEraRguMdo4GdSc9yjMLqQMTq7Q65mKvgYtoJCDSuGaE26" },
  { id: 8, name: "Vivo V21", category: "Mobile", price: 299, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqqWfC2tnl3jpXDEsC5RyoyS7tgF1F_5TRh3foeY2U-YWbJPCmczayierMnRQVTP9QVUI9_c1MITUM6THfHMEZMZFO2YwFRmc-mdKXHpw" },
  { id: 9, name: "OnePlus 9", category: "Mobile", price: 549, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQoc5C4SeSRDafLmjoVRw49iuzsM9LwJpDN14opklJRAOotpih7nQ3PeJeIyY2DgH0UXnchz2bDFeeCDZcrutRI0WmwkD2YICoiidmcpclqrO2OouJfIB_qkg" },
  { id: 10, name: "Google Pixel 6", category: "Mobile", price: 599, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8kKGTOFme6Jb4O7XFzJbD1DWkhk_NrQjP1W5BXjlpG3leIxYjSnm4Zh5hn9iW_CVRXBQ-dWd47VbN8qlX8aUEw_eEXStUBr8ggEoCSeI" },
  { id: 11, name: "Asus Zenbook", category: "Laptop", price: 1099, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqug2u4nFbAZFr15mgUliqc0yZUjgUYdCL6gYyKzdkShJY9uQLY7XiZ2iz05a5RG1Mc_0QdEMq0XBQo2noli0f11uzHsLQhYZqHb9Jfjct2r2MkOzGiIj4tQ" },
  { id: 12, name: "Dell XPS 13", category: "Laptop", price: 1299, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT8qV7zGCfHt0UZ4XwujgBCE1Bjp19HWp5a2GbkC68OZhr0ftzWChzUZz99ukTo77dqG_6IKT7DPsZxLf7b4sP-BVzotQ7OCcQRUo52qgT1OdmiqPBLlk8N" },

];



  const sqaure = useMemo(() => {
    return number * number;
  }, [number]);

  const style = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

const filterproduct=useMemo(()=>{
    return products.filter((p)=>{
     const matchsearch=   p.name.toLowerCase().includes(search.toLowerCase());
     const matchcategory= category==="All" || p.category===category;
      return matchsearch && matchcategory
    })
    
},[search,category])


  return (
    <>
      <Header />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="m-3 border-2 border-black p-1"
      />
      <p style={style}>{sqaure}</p>
      <button
        className="m-3 p-2 bg-blue-600 text-white rounded"
        onClick={() => setdark(!dark)}
      >
        dark
      </button>
      <p>-------------------------------------------------</p>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="  m-3 border-2 border-black p-1"
        placeholder="Search Product"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Category</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Acessory">Acessory</option>
      </select>

      {filterproduct.length===0?(<p>No Product</p>):(
       
         <div className="flex flex-wrap gap-4 p-3">
       { filterproduct.map((p) => (
           <div
              key={p.id}
              className="border rounded p-3 w-[180px] flex flex-col items-center justify-center shadow"
            >
              <img
                src={p.image}
                alt={p.name}
                className="rounded"
                style={{ height: "100px", objectFit: "cover" }}
              />
              <h3 className="font-bold mt-2 text-center">{p.name}</h3>
              <p>{p.category}</p>
              <p className="font-bold">💸{p.price}</p>
            </div>
          ))}
          </div>
    
    

      )}
    </>
  );
};

export default Usememo;

