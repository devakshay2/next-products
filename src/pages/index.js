import PrimaryButton from "@/Components/PrimaryButton/PrimaryButton";

export default function Home() {  
  const clickHandler = async () => {
    const response = await fetch('/api/fetch-initial-data');
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
     <h1>All Products</h1>
     <PrimaryButton value="A buttonp9" path="/products"/>
     <button onClick={clickHandler}>click to add</button>
    </>
  )
}
