import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import "./style.css";

const Menu = () => {
  const [meal, setMeal] = useState([]);

  const [foodModal, setFoofModal] = useState([]);

  const [loading, setLoading] = useState(false)

  const getFoodModal = async(idMeal) => {
    
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    // console.log(res.data.meals);
      setFoofModal(res.data.meals[0])
      setTimeout(() => {
        setLoading(false)
      }, 1500);

      setLoading(true)
  }

  const getMeal = async() => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    console.log(res.data.meals.slice(0, 6));
    setMeal(res.data.meals.slice(0, 9));
  };

  useEffect(() => {
    getMeal();
    getFoodModal();
  }, []);

  function truncateString(str, num) {
    if (num > str.lenght) {
      return str;
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  }

  return (
    <section id="menu">
      <div className="bg-menu flex flex-col items-center p-32 max-lg:px-4">
        <h2 className="title -mb-8 max-lg:text-6xl max-lg:text-center" data-aos="fade-right">Discover</h2>
        <h4 className="sub-title text-white z-10 max-lg:text-3xl max-lg:mt-1 max-lg:text-center" data-aos="fade-left">Our Menu</h4>

        <div className="m-10 p-5 bg-white w-full h-full rounded-lg justify-center flex flex-wrap gap-6" >
          {meal.map((m) => (
            <div className="card-shadow w-1/4 h-auto p-2 rounded-md max-lg:w-full">
              <img
                src={m.strMealThumb}
                alt="img"
                className="object-cover rounded-t-md"
              />
              <div className="py-5 px-4">
                <h2 className="font-semibold">
                  {truncateString(`${m.strMeal}`, 30)}
                </h2>
                <h4 className="text-xs font-body mt-1 ">{m.strArea}</h4>

                <div className="btn-more mt-10 flex">
                  <button
                    className="uppercase ml-auto text-sm relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
            before:bottom-0 before:left-0 before:bg-yellow-400
            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
            before:transition before:ease-in-out before:duration-300"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalXl"
                    type="button"
                    value={foodModal}
                    onClick={(e) => getFoodModal(m.idMeal)}
                  >
                    Lee mas
                  </button>
                  
                  <div
                    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModalXl"
                    tabindex="-1"
                    aria-labelledby="exampleModalXlLabel"
                    aria-modal="true"
                    role="dialog"
                  >
                    
                    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                      <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        {loading ? (
                          <div className="flex h-screen justify-center items-center gap-3">
                          <ReactLoading type="spinningBubbles" color="blue"  />
                          Sabar Bang</div>
                        ) : (
                          <>
                          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5
                            class="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalXlLabel"
                          >
                            {foodModal.strMeal} - {foodModal.strArea}
                          </h5>
                          <button
                            type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body relative p-10">
                          <img src={foodModal.strMealThumb} alt="img" />
                          <p className="font-bold mb-2 text-xl">Instructions</p>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strInstructions}
                          </li>
                          <p className="font-bold mb-2 text-xl">Category</p>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strCategory}
                          </li>
                          <p className="font-bold mb-2 text-xl"> Tags</p>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strTags}
                          </li>
                          <p className="font-bold mb-2 text-xl"> Ingredient</p>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient1}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient2}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient3}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient4}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient5}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient6}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient7}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient8}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient9}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient10}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient11}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient12}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient13}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient14}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient15}
                          </li>
                          <li className="font-body mb-4 text-base">
                            <a href={foodModal.strYoutube}>Link Youtube</a>
                          </li>
                        </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
