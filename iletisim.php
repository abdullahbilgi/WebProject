
    <br>


        <div class="t">
                <h1><span class="blue">&lt;</span>İletişim Bİlgileri<span class="blue">&gt;</span>
                <table class="container">
                    <thead>
                        <tr>
                            <th><h1>Kategori</h1></th>
                            <th><h1>Yanıtlar</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ad</td>
                            <td>
                            <?php
                            echo $_POST['username'];
                            ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Soyad</td>
                            <td>
                            <?php
                            echo $_POST['lastname'];
                            ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Şifre</td>
                            <td>
                            <?php
                            echo $_POST['password'];
                            ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Cinsiyet</td>
                            <td>
                            <?php
                            echo $_POST['gender'];
                            ?>
                            </td>
                        </tr>
                        <tr>
                            <td>e-Mail</td>
                            <td>
                            <?php
                            echo $_POST['email'];
                            ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Doğum Tarihi</td>
                            <td>
                            <?php
                            echo $_POST['borndate'];
                            ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Beğenilen Sayfa</td>
                            <td><?php
                            echo $_POST['likepage'];
                            ?>
                            </td>
                        </tr>
                        <tr>
                            <td>İletişim Nedeni</td>
                            <td>
                            <?php
                            echo $_POST['info'];
                            ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Mesaj</td>
                            <td><?php
                            echo $_POST['message'];
                            ?>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
        </div>
    




   