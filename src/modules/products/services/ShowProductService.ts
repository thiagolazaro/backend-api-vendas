import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';
import { ProductRepository } from '../repositories/ProductsRepository';

interface IProductRequest {
  id: string;
}

class ShowProductService {
  public async execute({ id }: IProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Produto não encontrado!');
    }

    return product;
  }
}

export default ShowProductService;
