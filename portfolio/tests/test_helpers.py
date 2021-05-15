from ..helpers import grouped


def test_grouped_generator(db):
    fruit_list = ['orange', 'apple', 'grape', 'almond', 'mango']
    group = grouped(fruit_list, 2)
    
    assert tuple(group) == (['orange', 'apple'], ['grape', 'almond'], ['mango'])