import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';
import { ProductRepository } from '../repositories/ProductsRepository';

interface IProductRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute(data: IProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productExists = await productsRepository.findByName(data.name);

    if (productExists) {
      throw new AppError('Já existe um produto com esse nome!');
    }

    const product = productsRepository.create(data);
    await productsRepository.save(product);
    return product;
  }
}

export default CreateProductService;
