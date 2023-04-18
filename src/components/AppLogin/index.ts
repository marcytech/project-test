import { html, css } from "iares";
import { AppButton } from "@/components/AppButton";

const template = () => html`
  <div class="wrap-ctx">
      <h1>Sign Up</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    <div class="container-ctx">
    <label>
      <input type="text"/>
      <span>Name</span>
    </label>
    <label>
      <input type="text"/>
      <span>Email</span>
    </label>
    <label>
      <input type="text"/>
      <span>Password</span>
      <i class="material-symbols-rounded">
      visibility
      </i>
    </label>
    <${AppButton}/>
        <div class="footer-ctx">
          <h3>Already have an account? <a href="#/login"> Log In</a></h3>
        </div>
    </div>
  </div>
`;

export const AppLogin = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-signin,
  .wrap-ctx {
    display: flex;
    width:100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .wrap-ctx > h1 {
    display: flex;
    font-size: 24px;
    color: #344564;
    font-weight: bold
  }
  .wrap-ctx > p {
    display: flex;
    width: 100%;
    color: var(black-soft);
    padding:3em
  }
  .container-ctx > label {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding:1em 0;
    position: relative;
  }
  .container-ctx > label > input {
    width: 100%;
    padding: 1em;
    border: 2px var(--green-moss) solid;
    border-radius: 5px;
    outline-color: #78d8fd;
    transition: all ease-in-out 0.5s
  }

  .container-ctx > label > input:focus + span {
    color:#78d8fd;
  }

  .container-ctx > label > span {
    padding: 3px 5px;
    position: absolute;
    background: var(--white);
    top: 0.3em;
    left: 2em;
    transition: all ease-in-out 0.2s
  }
  
  .container-ctx > label > i {
    position: absolute;
    top: 1em;
    right: 1em;
  }
   .footer-ctx h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 0.5em;
    color: var(black-soft);
  }
  .footer-ctx a {
    display: flex;
    font-weight: bold;
    color:#344564;
  }
`;
