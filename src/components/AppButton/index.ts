import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <button>Sign Up</button>
  </div>
`;

export const AppButton = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-button,
  .wrap-ctx {
    display: flex;
    width: 100%;
    padding:1em 0;
    justify-content: center;
    align-items: center;
  }
  .wrap-ctx > button {
    width:100%;
    justify-content: center;
    padding: 1em;
    font-size: 16px;
    font-weight: bold;
    align-items: center;
    background: #344564;
    color: var(--white);
    border-radius: 5px;
  }
`;
