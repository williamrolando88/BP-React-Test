import { BPProduct } from "../src/types/parsers/product";

export const _mockProductsArray: BPProduct[] = [
  {
    id: "id-1",
    name: "product-name-1",
    description: "description-1",
    logo: "https://www.logo.com/1",
    date_release: "2023-02-01T00:00:00.000+00:00",
    date_revision: "2024-02-01T00:00:00.000+00:00",
  },
  {
    id: "id-2",
    name: "product-name-2",
    description: "description-2",
    logo: "https://www.logo.com/2",
    date_release: "2023-02-01T00:00:00.000+00:00",
    date_revision: "2024-02-01T00:00:00.000+00:00",
  },
  {
    id: "id-3",
    name: "product-name-3",
    description: "description-3",
    logo: "https://www.logo.com/3",
    date_release: "2023-02-01T00:00:00.000+00:00",
    date_revision: "2024-02-01T00:00:00.000+00:00",
  },
];

export const _mockCreateProduct = {
  formData: {
    date_release: "2023-10-17",
    date_revision: "2024-10-17",
    description: "1234567897",
    id: "123",
    logo: "https://picsum.photos/200",
    name: "Personal",
  },
  expectedResponse: {
    date_release: "2023-10-17T00:00:00.000+00:00",
    date_revision: "2024-10-17T00:00:00.000+00:00",
    description: "1234567897",
    id: "123",
    logo: "https://picsum.photos/200",
    name: "Personal",
  },
};
