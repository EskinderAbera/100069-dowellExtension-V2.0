import "./favourites.css"
import Products from "../products/favproducts";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import { hover } from "@testing-library/user-event/dist/hover";


function Favourites () {
  const { show, handleShow} = useStateContext();

  return (
        <div>
        <div className="item">
          <div className="{ props.text }" >
              <button className="logout" style={{width:270,marginLeft:14}}>
                <i className="button-text" style={{fontSize:20,}}>
                  Favourites
                </i>
              </button>
          </div>
        </div>
            <div className="columns" >
                <a href="/#" class="elementor-button-link elementor-button elementor-size-xs" role="button">
                                <span class="elementor-button">
                        <i aria-hidden="true" class="fas fa-bars new"></i>			</span>
                            <span  class="elementor-button-text"></span>
				</a>
                </div>    

        <div className="all">
            <div class="elementor-form-fields-wrapper elementor-labels-above">
            <div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label for="form-field-level3name" class="elementor-field-label">Select Product</label>
              <div class="elementor-field elementor-select-wrapper ">
                <select style={{width:350,marginTop:2,}} name="form_fields[level3name]" id="form-field-level3name" class="elementor-field-textual elementor-size-sm">
                  <option value="Product 01">Product 01</option>
                  <option value="Product 02">Product 02</option>
                  <option value="Product 03">Product 03</option>
                </select>
              </div>
            </div>
            <div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label for="form-field-level3name" class="elementor-field-label">Select Product</label>
              <div class="elementor-field elementor-select-wrapper ">
                <select style={{width:270, marginTop:2}} name="form_fields[level3name]" id="form-field-level3name" class="elementor-field-textual elementor-size-sm">
                  <option value="Product 01">Product 01</option>
                  <option value="Product 02">Product 02</option>
                  <option value="Product 03">Product 03</option>
                </select>
              </div>
            </div>
            <div class="image">
												<label for="form-field-field_a91fc81" class="elementor-field-label">
								Upload Image 							</label>
								<input type="file" style={{marginTop:7}} name="form_fields[field_a91fc81]" id="form-field-field_a91fc81" class="elementor-field elementor-size-sm  elementor-upload-field"/>

						</div>

            <div class="button-div">
              <button type="submit" 
              style={{width:270,cursor:"pointer",fontSize:15,height: "13px",borderWidth:"1px",backgroundColor:"#7a7a7a",marginBottom:80,color:"#ffffff"}}
              class="elementor-field-textual bt" id="connectwebsite">
                Save / Remove Favourites
                </button>
            </div>
        </div>

        </div>
        <div>
          <Products />
        </div>


        {/* <div
    style={{height:"40px"}}></div> */}
            <div style={{ display: "flex"}}>
          <RxCross2
            size={22}
            color="white"
            className="close"
            style={{
              backgroundColor: "red",
              borderRadius: 20,
              marginTop: 30,
              marginBottom:3,
              marginLeft: 5,
              left: 0,
            }}
            onClick={() => handleShow(!show)}
          />
          </div>


        </div>
    );
}

export default Favourites;