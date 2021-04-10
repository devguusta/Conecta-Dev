import mock from '../utils/mock';


    mock.onPost('/api/home/me').reply(200, {
        user: {

        'id': 1,
        'username': 'guusta',
        'email': 'gustavocsil60@gmail.com',
        avatar: '/images/avatars/avatar_1.jpg'
        }
        
    }) 

    mock.onPost('/api/home/login').reply((config) => {
         const { email, password } = JSON.parse(config.data);

        

        if(email !== 'gustavocsil60@gmail.com' || password !== 'admin') {
            return [400,   { message: 'Seu email ou senha estão incorretos'}]
        }
            const user = {
                id: 1,
                name: 'Gustavo Silva',
                username: 'guusta',
                email: 'gustavocsil60@gmail.com',
                avatar: '/images/avatars/avatar_1.jpg'
                
            }



        return[ 200, {user}]
    });