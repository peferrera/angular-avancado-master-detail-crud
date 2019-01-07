import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';
export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
            { id: 2, name: 'Saúde', description: 'plano de Saúde e Remédios' },
            { id: 3, name: 'Lazer', description: 'Cinema, Parques, Praia, etc..' },
            { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
            { id: 5, name: 'Freelas', description: 'Trabalhos como Freelancer' }
        ];

        const entries: Entry[] = [
            // tslint:disable-next-line:max-line-length
            { id: 0, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: '14/10/2018', amount: '70,50', type: 'expense', description: 'Gas de Cozinha carissimo' } as Entry,
            { id: 1, name: 'Aluguel', categoryId: categories[0].id, category: categories[0], paid: false, date: '14/10/2018', amount: '500,00', type: 'expense', description: 'Aluguel' } as Entry,
            { id: 2, name: 'Uber', categoryId: categories[2].id, category: categories[2], paid: true, date: '14/10/2018', amount: '70,50', type: 'expense', description: 'Uber' } as Entry,
            { id: 3, name: 'Praia', categoryId: categories[2].id, category: categories[2], paid: true, date: '14/10/2018', amount: '50,00', type: 'expense', description: 'Praia' } as Entry,
            { id: 4, name: 'Salário da Empresa', categoryId: categories[3].id, category: categories[3], paid: true, date: '14/10/2018', amount: '3000,00', type: 'revenue', description: 'Salário da Empresa' } as Entry,
            { id: 5, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: false, date: '14/10/2018', amount: '30,00', type: 'expense', description: 'Cinema' } as Entry,
            { id: 6, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false, date: '14/10/2018', amount: '100,00', type: 'expense', description: 'Suplementos' } as Entry,
            { id: 7, name: 'Condomínio', categoryId: categories[0].id, category: categories[0], paid: true, date: '14/10/2018', amount: '50,00', type: 'expense', description: 'Condomínio' } as Entry,
            { id: 8, name: 'Salário da Escola', categoryId: categories[4].id, category: categories[4], paid: true, date: '14/10/2018', amount: '1100,00', type: 'revenue', description: 'Salário da Escola' } as Entry,
            { id: 9, name: 'Festas', categoryId: categories[2].id, category: categories[2], paid: true, date: '14/10/2018', amount: '40,00', type: 'expense', description: 'Festas' } as Entry,
            { id: 10, name: 'Remédios', categoryId: categories[1].id, category: categories[1], paid: false, date: '14/10/2018', amount: '80,00', type: 'expense', description: 'Remédios' } as Entry
        ];
        return { categories, entries };
    }
}

