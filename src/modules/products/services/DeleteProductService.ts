import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../repositories/ProductsRepository';

interface IProductRequest {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: IProductRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Produto não encontrado!');
    }

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
