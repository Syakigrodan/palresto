/*<?php
// Pastikan $conn sudah terhubung ke database sebelumnya

// Periksa apakah parameter 'konten' diset
if(isset($_REQUEST['konten'])) {
    // Mendapatkan id_order dari konten
    $id_order = $_REQUEST['konten'];

    // Pastikan $id_order memiliki nilai yang valid
    if (!empty($id_order)) {
        // Lakukan kueri SQL
        $query_order = "SELECT * FROM tb_order LEFT JOIN tb_user ON tb_order.id_pengunjung = tb_user.id_user WHERE id_order = $id_order";
        $sql_order = mysqli_query($conn, $query_order);

        // Periksa apakah kueri berhasil dieksekusi
        if ($sql_order) {
            // Periksa apakah ada hasil dari kueri
            if(mysqli_num_rows($sql_order) > 0) {
                $result_order = mysqli_fetch_array($sql_order);
                // Lakukan sesuatu dengan $result_order
            } else {
                echo "Tidak ada hasil untuk id_order $id_order.";
            }
        } else {
            echo "Query failed: " . mysqli_error($conn);
        }
    } else {
        echo "Nilai parameter 'konten' tidak valid.";
    }
} else {
    echo "Parameter 'konten' tidak diset.";
}

// Pastikan $result_order memiliki nilai sebelum mengaksesnya
if(isset($result_order)) {
    // Gunakan nilai dari $result_order untuk mencetak informasi
    echo "Nama Kasir: " . $nama_user . "<br>";
    echo "Waktu Pesan: " . $result_order['waktu_pesan'] . "<br>";
    echo "No Meja: " . $result_order['no_meja'] . "<br>";

    // Lanjutkan dengan bagian berikutnya dari kode Anda
} else {
    echo "Informasi pesanan tidak ditemukan.";
}
?>
<div class="row">

<div class="col-md-12">

<div class="card mt-4">

<div class="card-header">

ch4>How to make Search box & filter data in HTML Table from Database in PHP MySQL </h4>

</div>

<div class="card-body">

<div class="row">

<div class="col-md-7">

<form action="" method="GET">

<div class="input-group mb-3">

<input type="text" name="search" value="" class="form-control" placeholder-"Search data">

button type="submit" class="btn btn-primarySearch</button>

</div>*/
