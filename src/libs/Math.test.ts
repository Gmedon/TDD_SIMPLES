import { Math } from './Math'

describe('Testing the items Math', () => {

    //beforeeach Serve para ser executado antes de cada teste

    beforeEach(() => {

    })

    //AfterEach serve para ser executado depois de cada teste

    afterEach(() => {

    })

    //beforeAll executa antes de executar todos os meus testes

    beforeAll(() => {

    })

    //executa apos concluir todos os testes

    afterAll(() => {

    })

    it('should sum two number correctly', () => {
        const response = Math.sum(5, 10);
        expect(response).toBe(15);
    })
    
    it('should subtract two number correctly', () => {
        const response = Math.sub(10, 5);
        expect(response).toBe(5);
    })
    
    it('should divide two number correctly', () => {
        const response = Math.div(10, 5);
        expect(response).toBe(2);
    
        const response2 = Math.div(3, 0);
        expect(response2).toBe(false)
    })
    
    it('should multiply two number correctly', () => {
        const response = Math.mul(5, 10);
        expect(response).toBe(50);
    })

    //O Only bloqueia todos os outros tests deixando ele como unico.

    it.only('Count caracter', () => {
        const response = {
            name: 'Guilherme',
            email: 'guilhermememedon@gmail.com'
        }
        expect(response).toHaveProperty('email');
    })

})