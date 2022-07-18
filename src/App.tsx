import { FaClipboard } from "react-icons/fa";
import { ComponentWrapper, VariantWrapper } from "./App.styled";
import { Avatar } from "./components/Avatar";
import { Button } from "./components/Button";
import { Pagination } from "./components/Pagination";

function App() {
  return (
    <div className="App">
      {/* Different Buttons */}
      <Pagination count={10} currentPage={5} updateCurrentPage={3} />

      <ComponentWrapper>
        <h3>Buttons</h3>

        <VariantWrapper>
          <h4>Variants</h4>
          <Button data-testid="pri1" variant="primary">
            Hello
          </Button>
          <Button data-testid="sec1" variant="secondary">
            Hello
          </Button>
        </VariantWrapper>

        <br />

        <VariantWrapper>
          <h4>Disabled</h4>
          <Button data-testid="pri2" variant="primary" disabled={true}>
            Hello
          </Button>
          <Button data-testid="sec2" variant="secondary" disabled={true}>
            Hello
          </Button>
        </VariantWrapper>

        <br />

        <VariantWrapper>
          <h4>Sizes</h4>
          <Button data-testid="xs" size="xs">
            Hello
          </Button>
          <Button data-testid="sm" size="sm">
            Hello
          </Button>
          <Button data-testid="md" size="md">
            Hello
          </Button>
          <Button data-testid="lg" size="lg">
            Hello
          </Button>
        </VariantWrapper>

        <VariantWrapper>
          <h4>Icons</h4>
          <Button data-testid="ric" rightIcon={<FaClipboard />}>
            Copy
          </Button>
          <Button data-testid="lic" leftIcon={<FaClipboard />}>
            Copy
          </Button>
          <Button data-testid="" size="lg" rightIcon={<FaClipboard />}>
            Copy
          </Button>
          <Button data-testid="lg" size="lg" leftIcon={<FaClipboard />}>
            Copy
          </Button>
        </VariantWrapper>

        <VariantWrapper>
          <Button
            data-testid="click"
            onClick={() => console.log("button Clicked")}
          >
            Click me!
          </Button>
        </VariantWrapper>
      </ComponentWrapper>

      <ComponentWrapper>
        <h3>Avatars</h3>

        <VariantWrapper>
          <h4>Variants</h4>
          <Avatar name="Kola Tioluwani" />
          <Avatar name="Kola Tioluwani" src="https://bit.ly/sage-adebayo" />
        </VariantWrapper>

        <VariantWrapper>
          <h4>Sizes</h4>
          <Avatar size="xs" name="Anand Kulkarni" />
          <Avatar size="sm" name="Baburoa" />
          <Avatar size="md" name="Albert S" />
          <Avatar size="lg" name="Ritesh Firodiya" />
        </VariantWrapper>
      </ComponentWrapper>
    </div>
  );
}

export default App;
