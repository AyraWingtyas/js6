function startlog() 
    {
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let internet1 = ('rizi') + ('12345');
        

         if (username === 'rizi' && password === '12345') {
            let konfirmasi = document.getElementById('akses').innerHTML = 'Login Success'
            window.alert ('Selamat anda berhasil login!')
            
        }
        else {
            let konfirmasi = document.getElementById('akses').innerHTML = 'Gagal Login'
        }
    }