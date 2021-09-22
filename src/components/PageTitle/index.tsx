import { Container, Content } from './styles';

interface PageTitleProps {
  path: string;
  showProductName?: boolean;
  productName?: string;
  pageName?: string;
}

export function PageTitle({ 
  path,
  showProductName,
  productName,
  pageName,
}: PageTitleProps) {
  return (
    <Container>
      <Content>
        <h3>{pageName || productName}</h3>

        <nav>

          <span>
            <a href="/">Home</a>
            
            /
          </span>

          <span>
            <a href={path}>
              {path}
            </a>
            
            / 
          </span>

          {showProductName && (
            <>
              <span>
                {productName}
              </span>
            </>
          )}
        </nav>
      </Content>
    </Container>
  );
}