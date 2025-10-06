$(document).ready(function () {
  let id = "";
  let pelanggan = "";
  let alamat = "";
  let telp = "";

  $("#submit").click(function (e) {
    e.preventDefault();
    id = $("#id").val();
    pelanggan = $("#pelanggan").val();
    alamat = $("#alamat").val();
    telp = $("#telp").val();

    if (id == "") {
      insertData();
    } else {
      updateData();
    }

    $("#id").val("");
    $("#pelanggan").val("");
    $("#alamat").val("");
    $("#telp").val("");
  });

  $("#btn-tambah").click(function (e) {
    e.preventDefault();

    $("#titel").html("<p>Tambah Data</p>");

    $("#id").val("");
    $("#pelanggan").val("");
    $("#alamat").val("");
    $("#telp").val("");
  });

  $("tbody").on("click", ".btn-del", function () {
    $(this).attr("data-id");
    if (confirm("Ril kah?")) {
      deleteData(id);
    }
    deleteData(id);
  });

  $("tbody").on("click", ".btn-ubah", function () {
    $(this).attr("data-id");
    $("#titel").html("<p>Ubah Data</p>");
    selectUpdate(id);
  });

  function selectUpdate(id) {
    let idpelanggan = {
      idpelanggan: id,
    };
    $.ajax({
      type: "pos",
      url: "php/selectUpdate.php",
      data: JSON.stringify(idpelanggan),
      // dataType: "dataType",
      success: function (response) {
        let data = JSON.parse(response);
        $("#id").val(data.idpelanggan);
        $("#pelanggan").val(data.pelanggan);
        $("#alamat").val(data.alamat);
        $("#telp").val(data.telp);
      },
    });
  }

  function selectData() {
    $.ajax({
      type: "get",
      url: "php/select.php",
      cache: false,
      dataType: "json",
      success: function (response) {
        let out = "";
        let no = 1;
        $.each(response, function (key, val) {
          out += `<tr>
             <td>${No++}</td>
             <td>${val.pelanggan}</td>
             <td>${val.alamat}</td>
             <td>${val.telp}</td>
             <td><button type="button" class="btn btn-danger btn-del" data-id=${
               val.idpelanggan
             }>DEL</button></td>
             <td><button type="button" class="btn btn-warning btn-ubah" data-id=${
               val.idpelanggan
             }>UBAH</button></td>
             </tr>`;
        });
        $("#isidata").html(out);
      },
    });
  }
  function insertData() {
    let dataPelanggan = {
      pelanggan: pelanggan,
      alamat: alamat,
      telp: telp,
    };
    $.ajax({
      type: "pos",
      url: "php/insert.php",
      cache: false,
      data: JSON.stringify(datapelanggan),
      // dataType: "dataType",
      success: function (response) {
        let out = `<p>${response}</>`;
        $("#msg").html(out);
      },
    });

    selectData();
  }
  function deleteData(id) {
    let idpelanggan = {
      idpelanggan: id,
    };
    $.ajax({
      type: "pos",
      url: "php/delete.php",
      data: JSON.stringify(idpelanggan),
      // dataType: "dataType",
      success: function (response) {
        let out = `<p>${response}</>`;
        $("#msg").html(out);
      },
    });

    selectData();
  }
  function updateData() {
    let dataPelanggan = {
      idpelanggan: id,
      pelanggan: pelanggan,
      alamat: alamat,
      telp: telp,
    };
    $.ajax({
      type: "pos",
      url: "php/update.php",
      cache: false,
      data: JSON.stringify(datapelanggan),
      // dataType: "dataType",
      success: function (response) {
        let out = `<p>${response}</>`;
        $("#msg").html(out);
      },
    });

    selectData();
  }
  selectData();
});
