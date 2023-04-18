import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <div class="trace-ctx"></div>
  </div>
`;

export const AppDivider = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
app-divider
 .wrap-ctx {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: center
}
.trace-ctx {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background:var(--green-moss);
  border: 1px solid var(--green-moss);
  border-radius:24px;
  margin:1em 0;
}
`;
