firebase.auth().onAuthStateChanged((user)=> {
    if(user){
        
        document.querySelector('#user')
            .innerHTML = `${user.displayName}`
        // console.log('User:', user)

    }  else {
        // user doesn't exit
        window.location.href = 'index.html'
    }
})