export interface Product {
    Id: number;
    Name: string;
    Description: string | null;
    Price: number;
    Stock: number;
    CreatedAt: string;
    UpdatedAt: string | null;
}

export interface CreateProductDto {
    Name: string;
    Description?: string;
    Price: number;
    Stock: number;
}

export interface UpdateProductDto extends CreateProductDto {
    Id: number;
}