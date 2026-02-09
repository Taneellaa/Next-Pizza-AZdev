import { Container, SortPopup, Title, Filters } from '@/src/components/shared';
import { Categories } from '@/src/components/shared/categories';
import { TopBar } from '@/src/components/shared/top-bar';
import { ProductsGroupList } from '../components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019ac604bad37209b1ec496bbdd98560.avif',
                    items: [{ price: 500 }],
                    count: 1,
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019ac604bad37209b1ec496bbdd98560.avif',
                    items: [{ price: 500 }],
                    count: 1,
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019ac604bad37209b1ec496bbdd98560.avif',
                    items: [{ price: 500 }],
                    count: 1,
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019ac604bad37209b1ec496bbdd98560.avif',
                    items: [{ price: 500 }],
                    count: 1,
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019ac604bad37209b1ec496bbdd98560.avif',
                    items: [{ price: 500 }],
                    count: 1,
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019ac604bad37209b1ec496bbdd98560.avif',
                    items: [{ price: 500 }],
                    count: 1,
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019ac604bad37209b1ec496bbdd98560.avif',
                    items: [{ price: 500 }],
                    count: 1,
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
