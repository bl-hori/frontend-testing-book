import { Button } from "@/components/ui/Button/Button";
import { render, screen } from "@testing-library/react";

test("render Button", () => {
  render(<Button label={""} onClick={undefined} />);

  expect(screen.getByRole("button")).toBeInTheDocument();
});
