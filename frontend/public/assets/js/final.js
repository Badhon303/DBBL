$(document).ready(function () {
  if (sessionStorage.getItem("accessToken") === null) {
    window.location.href = "login.html"
  } else {
    var pdfData
    var bPdf = ""
    var qrImg
    $("#o").hide()
    $("#signImg").hide()
    $("#signImg2").hide()
    $("#signImg3").hide()
    $("#signImg4").hide()
    $("#insReg").hide()
    //Student list ajax call
    $.ajax({
      url: "http://115.127.24.188:59311/api/Students",
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      dataType: "json",
      error: function (response) {
        console.log(response)
        $("#regModalError").modal("show")
        if (response.status === 401) {
          var message =
            response.responseJSON.Message +
            " Your log in session has expired! Please login again to access the documents."
          $("#errorText").text(message)
        } else {
          $("#errorText").text(message)
        }
        $("#closeErrorButton").click(function () {
          window.location.href = "login.html"
        })
        $("#xErrorButton").click(function () {
          window.location.href = "login.html"
        })
      },
    })
    //Institue DropDown Load
    $.ajax({
      url: "http://115.127.24.188:59311/api/Institues",
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      dataType: "json",
      success: function (response) {
        $.each(response, function (i, value) {
          var list = $(
            '<option value="' +
              value.InstitueName +
              '">' +
              value.InstitueName +
              "</option>"
          )
          $("#insNameDrop").append(list)
        })
      },
      error: function (response) {
        $("#regModalError").modal("show")
        if (response.status === 401) {
          var message =
            response.responseJSON.Message +
            " Your log in session has expired! Please login again to access the documents."
          $("#errorText").text(message)
        } else {
          $("#errorText").text(message)
        }
        $("#closeErrorButton").click(function () {
          window.location.href = "login.html"
        })
        $("#xErrorButton").click(function () {
          window.location.href = "login.html"
        })
      },
    })
    //Institur Reg NO DropDown Load
    $.ajax({
      url: "http://115.127.24.188:59311/api/Institues",
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      dataType: "json",
      success: function (response) {
        $.each(response, function (i, value) {
          var list = $(
            '<option value="' +
              value.InstitueRegistrationNumber +
              '">' +
              value.InstitueRegistrationNumber +
              "</option>"
          )
          $("#insRegNoDrop").append(list)
        })
      },
      error: function (response) {
        $("#regModalError").modal("show")
        if (response.status === 401) {
          var message =
            response.responseJSON.Message +
            " Your log in session has expired! Please login again to access the documents."
          $("#errorText").text(message)
        } else {
          $("#errorText").text(message)
        }
        $("#closeErrorButton").click(function () {
          window.location.href = "login.html"
        })
        $("#xErrorButton").click(function () {
          window.location.href = "login.html"
        })
      },
    })
    //Subject DropDown Load
    $.ajax({
      url: "http://115.127.24.188:59311/api/Subjects",
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      dataType: "json",
      success: function (response) {
        $.each(response, function (i, value) {
          var list = $(
            '<option value="' + value.Name + '">' + value.Name + "</option>"
          )
          $("#subNameDrop").append(list)
        })
      },
      error: function (response) {
        $("#regModalError").modal("show")
        if (response.status === 401) {
          var message =
            response.responseJSON.Message +
            " Your log in session has expired! Please login again to access the documents."
          $("#errorText").text(message)
        } else {
          $("#errorText").text(message)
        }
        $("#closeErrorButton").click(function () {
          window.location.href = "login.html"
        })
        $("#xErrorButton").click(function () {
          window.location.href = "login.html"
        })
      },
    })

    //Semester Dropdown load
    $.ajax({
      url: "http://115.127.24.188:59311/api/Semesters",
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      dataType: "json",
      success: function (response) {
        $.each(response, function (i, value) {
          var list = $(
            '<option value="' +
              value.SemesterName +
              '">' +
              value.SemesterName +
              "</option>"
          )
          $("#semesterNameDrop").append(list)
        })
      },
      error: function (response) {
        $("#regModalError").modal("show")
        if (response.status === 401) {
          var message =
            response.responseJSON.Message +
            " Your log in session has expired! Please login again to access the documents."
          $("#errorText").text(message)
        } else {
          $("#errorText").text(message)
        }
        $("#closeErrorButton").click(function () {
          window.location.href = "login.html"
        })
        $("#xErrorButton").click(function () {
          window.location.href = "login.html"
        })
      },
    })

    $("#datepicker-autoclose").change(function () {
      //Date to word Convertion Test START******************
      var wDays = [
        "Zeroth",
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
        "Sixth",
        "Seventh",
        "Eighth",
        "Ninth",
        "Tenth",
        "Eleventh",
        "Twelfth",
        "Thirteenth",
        "Fourteenth",
        "Fifteenth",
        "Sixteenth",
        "Seventeenth",
        "Eighteenth",
        "Nineteenth",
        "Twentieth",
        "Twenty-first",
        "Twenty-second",
        "Twenty-third",
        "Twenty-fourth",
        "Twenty-fifth",
        "Twenty-sixth",
        "Twenty-seventh",
        "Twenty-eighth",
        "Twenty-ninth",
        "Thirtieth",
        "Thirty-first",
      ]

      var wMonths = [
        "Zeroth",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
      var wNumbers = [
        "One",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twentyone",
      ]

      var fullDate = $("#datepicker-autoclose").val().split("-")

      var date = new Date()
      var day = parseInt(date.getUTCDate())
      var month = parseInt(date.getUTCMonth())
      //var year = date.getUTCFullYear().toString();
      var year = fullDate[2]
      var yearText = toWords(year)

      var x = year.charAt(0)
      var xx = year.charAt(1)
      var xxx = year.charAt(2)
      var xxxx = year.charAt(3)

      var a = parseInt(x + xx) - 1
      var b = parseInt(xxx) - 1
      var c = parseInt(xxxx) - 1
      console.log(
        wDays[parseInt(fullDate[0])] +
          " " +
          wMonths[parseInt(fullDate[1])] +
          " " +
          wNumbers[a] +
          " " +
          wNumbers[b] +
          " " +
          wNumbers[c]
      )

      //Date to word Convertion Test ENDS*******************
      $("#datepicker-autoclosePra").text(
        wDays[parseInt(fullDate[0])] +
          " " +
          wMonths[parseInt(fullDate[1])] +
          " " +
          yearText
      )
    })

    $("#name").keyup(function () {
      var data = $(this).val()
      var arr = data.split(",")
      $("#namePra").text(arr[0])
      $("#regNoPra").text(arr[1])
    })
    /*$("#cgpa").keyup(function () {
            $("#cgpaPra").text($(this).val());
        });*/
    /* $("#issuerName").keyup(function () {
             $("#issuerNamePra").text($(this).val());
         });
         $("#issuerName2").keyup(function () {
             $("#issuerNamePra2").text($(this).val());
         });
         $("#issuerDesignation").keyup(function () {
             $("#issuerDesignationPra").text($(this).val());
         });
         $("#issuerDesignation2").keyup(function () {
             $("#issuerDesignationPra2").text($(this).val());
         });
         $("#issuerDesignation3").keyup(function () {
             $("#issuerDesignationPra3").text($(this).val());
         });*/

    $("#insNameDrop").change(function () {
      $("#insRegNoDrop option")
        .eq($(this).prop("selectedIndex"))
        .prop("selected", "selected")
      $("#insPra").text($(this).val())
      $("#insRegNo").text($("#insRegNoDrop").val())
    })
    $("#insRegNoDrop").change(function () {
      //$("#insNameDrop option").eq($(this).prop("selectedIndex")).prop("selected", "selected");
      //$("#insRegNo").text($(this).val());
    })
    $("#subNameDrop").change(function () {
      $("#subPra").text($(this).val())
    })

    $("#semesterNameDrop").change(function () {
      $("#semesterPra").text($(this).val())
    })
    //for semester
    $("#issuerSign").change(function () {
      var val = $(this).val()
      switch (val.substring(val.lastIndexOf(".") + 1).toLowerCase()) {
        case "gif":
        case "jpg":
          alert("This format is not suppoorted")
          window.location.reload()
        case "png":
          break
        default:
          $(this).val("")
          // error message here
          alert("not an image")
          break
      }
      readURL(this)
    })
    $("#issuerSign2").change(function () {
      var val = $(this).val()
      switch (val.substring(val.lastIndexOf(".") + 1).toLowerCase()) {
        case "gif":
        case "jpg":
          alert("This format is not suppoorted")
          window.location.reload()
        case "png":
          break
        default:
          $(this).val("")
          // error message here
          alert("not an image")
          break
      }
      readURL2(this)
    })

    $("#issuerSign3").change(function () {
      var val = $(this).val()
      switch (val.substring(val.lastIndexOf(".") + 1).toLowerCase()) {
        case "gif":
        case "jpg":
          alert("This format is not suppoorted")
          window.location.reload()
        case "png":
          break
        default:
          $(this).val("")
          // error message here
          alert("not an image")
          break
      }
      readURL3(this)
    })

    $("#issuerSign4").change(function () {
      var val = $(this).val()
      switch (val.substring(val.lastIndexOf(".") + 1).toLowerCase()) {
        case "gif":
        case "jpg":
          alert("This format is not suppoorted")
          window.location.reload()
        case "png":
          break
        default:
          $(this).val("")
          // error message here
          alert("not an image")
          break
      }
      readURL4(this)
    })
    console.log($(window).width())

    $("#issueButton").hide()
    $(window).resize(function () {
      if ($(window).width() <= 900) {
        $("#certficateViewDiv").hide()
      } else {
        $("#certficateViewDiv").show()
      }
    })
    $("#regButton").click(function (e) {
      var preventDefaults = e.preventDefault()
      if (!$("form").parsley().validate()) return false
      App.setResultInfo()
      $("#txSpan").hide()
      $("#txhashModal").modal("show")
      $("#verifyIconSuccess").hide()
      //$("#successMsg").hide();
      $("#verifyIconFail").hide()
      $("#one").hide()
      $("#two").hide()
      $("#three").hide()
      $("#four").hide()
      $("#five").hide()
      $("#six").hide()
      $("#iconOne").hide()
      $("#iconTwo").hide()
      $("#iconThree").hide()
      $("#iconFour").hide()
      $("#iconFive").hide()
      $("#iconSix").hide()
      $("#verifyIconFail").hide()
      $("#one").fadeIn(4837, function () {
        $("#iconOne").fadeIn(600).css("color", "green")
        $("#progressBar").prop("style", "width: 10%")
        $("#two").fadeIn(4252, function () {
          $("#iconTwo").fadeIn(350).css("color", "green")
          $("#progressBar").prop("style", "width: 20%")
          $("#three").fadeIn(4546, function () {
            $("#iconThree").fadeIn(323).css("color", "green")
            $("#progressBar").prop("style", "width: 50%")
            $("#four").fadeIn(4890, function () {
              $("#iconFour").fadeIn(312).css("color", "green")
              $("#progressBar").prop("style", "width: 80%")
              $("#five").fadeIn(4258, function () {
                $("#iconFive").fadeIn(320).css("color", "green")
                $("#progressBar").prop("style", "width: 99%")
                $("#six").fadeIn(20000, function () {
                  $("#iconSix").fadeIn(10).css("color", "green")
                  $("#pBarDiv").hide()
                  //$("#successMsg").show();
                  $("#verifyIconSuccess").fadeIn()
                  $("#txhashModal").modal("hide")
                  $("#txSpan").show()
                })
              })
            })
          })
        })
      })
      $("#issueButton").show()
      $("#regButton").hide()
      $("#issueButton").prop("disabled", true)
      setTimeout(function () {
        qrCode()
        $("#issueButton").prop("disabled", false)
      }, 20100)
    })

    $("#issueButton").click(function (e) {
      var preventDefaults = e.preventDefault()
      if (!$("form").parsley().validate()) return false
      ajaxCall()
      qrImg = $("#qrImg").prop("src")
      pdfData = demoPDF()
      //qrImg = $("#qrImg").prop('src');
    })

    $("#txHashLink").click(function () {
      //var preventDefaults = e.preventDefault();
      var tx = $("#txSpan").text()
      if (tx != "") {
        $("#txHashLink").attr(
          "href",
          "http://115.127.24.188:8000/#/transaction/" + tx
        )
      }
    })

    function displayModelStateErrors(modelState) {
      var message = ""
      var propStrings = Object.keys(modelState)

      $.each(propStrings, function (i, propString) {
        var propErrors = modelState[propString]
        $.each(propErrors, function (j, propError) {
          message += propError
        })
        message += "\n"
      })

      $("#errorText").text(message)
    }

    var subName = ""
    var insName = ""
    var insRegNo = ""
    var semesterName = ""
    $("#insNameDrop").change(function () {
      insName = $("#insNameDrop").val()
      console.log(insName)
    })
    $("#insRegNoDrop").change(function () {
      insRegNo = $("#insRegNoDrop").val()
      console.log(insRegNo)
    })
    $("#subNameDrop").change(function () {
      subName = $("#subNameDrop").val()
      console.log(subName)
    })

    $("#semesterNameDrop").change(function () {
      semesterName = $("#semesterNameDrop").val()
      console.log(semesterName)
    })
    //for semester

    function sendPdfMail() {
      var emailTo = $("#email").val()
      var pdfData = demoPDF()
      console.log(pdfData)
      if (!pdfData) return
      //progress.start();

      var reqData = {
        emailTo: emailTo,
        attachment: pdfData,
      }
      $.ajax({
        url: "http://115.127.24.188:59311/api/Mail/PostEmailWithPdf",
        method: "POST",
        //cache: false,
        contentType: "application/x-www-form-urlencoded",
        data: reqData,
        success: function (response) {
          //progress.done();
          alertify.success("Mail Send Successfully!")
        },
        error: function (response) {
          alertify.error("There seems to be problem, Please try Aagain!")
        },
        async: false,
      })
    }

    function ajaxCall() {
      $.ajax({
        url: "http://115.127.24.188:59311/api/Students/PostStudent",
        method: "POST",
        //cache: false,
        contentType: "application/x-www-form-urlencoded",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
        data: {
          Name: $("#name").val(),
          Email: $("#email").val(),
          IssueDate: $("#datepicker-autoclose").val(),
          //IssuarName: $("#issuerName").val(),
          //IssuarDsegnation: $("#issuerDesignation").val(),
          //Cgpa: $("#cgpa").val(),
          TransactionHash: $("#txSpan").text(),
          InstitueName: insName,
          SubjectName: subName,
          Semester: semesterName,
        },
        success: function () {
          $("#regModal").modal("show")
          $("#closeButton").hide()
          $("#xButton").hide()
        },
        error: function (response) {
          $("#regModalError").modal("show")
          console.log(response)
          if (response.status === 400) {
            displayModelStateErrors(response.responseJSON.ModelState)
            $("#closeErrorButton").click(function () {
              location.reload()
            })
            $("#xErrorButton").click(function () {
              location.reload()
            })
          }
          if (response.status === 500) {
            $("#errorText").text(response.responseJSON.Message)
            $("#closeErrorButton").click(function () {
              location.reload()
            })
            $("#xErrorButton").click(function () {
              location.reload()
            })
          }
          if (response.status === 401) {
            var message =
              response.responseJSON.Message +
              " Your log in session has expired! Please login again to access the documents."
            $("#errorText").text(message)
            $("#closeErrorButton").click(function () {
              window.location.href = "login.html"
            })
            $("#xErrorButton").click(function () {
              window.location.href = "login.html"
            })
          }
        },
        async: false,
      })
      $("#closeButton").click(function () {
        location.reload()
      })
      $("#xButton").click(function () {
        location.reload()
      })
    }

    var signImage = ""
    //Signature Image
    function readURL(input) {
      $("#signImg").show()
      if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = function (e) {
          $("#signImg").attr("src", e.target.result)
          signImage = e.target.result
        }

        reader.readAsDataURL(input.files[0])
      }
    }

    var signImage2 = ""
    //Signature Image
    function readURL2(input) {
      $("#signImg2").show()
      /*var ext = $('#signImg2').val().split('.').pop().toLowerCase();
            if($.inArray(ext, ['.png']) == -1) {
                alert('invalid extension!');
            }*/
      if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = function (e) {
          $("#signImg2").attr("src", e.target.result)
          signImage2 = e.target.result
        }

        reader.readAsDataURL(input.files[0])
      }
    }

    var signImage3 = ""
    //Signature Image
    function readURL3(input) {
      $("#signImg3").show()
      if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = function (e) {
          $("#signImg3").attr("src", e.target.result)
          signImage3 = e.target.result
        }

        reader.readAsDataURL(input.files[0])
      }
    }

    var signImage4 = ""
    //Signature Image
    function readURL4(input) {
      $("#signImg4").show()
      if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = function (e) {
          $("#signImg4").attr("src", e.target.result)
          signImage4 = e.target.result
        }

        reader.readAsDataURL(input.files[0])
      }
    }

    // PDF Mail Sending
    $("#pdfBtn").click(function (e) {
      var preventDefaults = e.preventDefault()
      var reqData = {
        To: $("#email").val(),
        Attachment: bPdf,
      }
      console.log(bPdf)
      $.ajax({
        url: "http://115.127.24.188:59311/api/PdfMail/PostEmailWithPdf",
        data: JSON.stringify(reqData),
        dataType: "json",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
          //progress.done();
          //console.log(response);
          alertify.set("notifier", "position", "top-right")
          alertify.success("Mail send succesfully!")
          $("#pdfBtn").hide()
          $("#closeButton").show()
          $("#xButton").show()
          $("#modalHead").text("Mail Send....!!!")
          $("#modalText").text(
            "A mail has been send to the recipient address with Blockchain Varified Certificate as an attachment."
          )
        },
        error: function () {
          //progress.done();
          $("#pdfBtn").show()
          $("#closeButton").show()
          $("#xButton").show()
          alertify.set("notifier", "position", "top-center")
          alertify.error("Error in communicating with server!")
          $("#modalHead").css("color", "red")
          $("#modalText").css("color", "red")
          $("#modalHead").text("Somethings Went Wrong")
          $("#modalText").text(
            "It seems like there is some error executing this request. Please check your internet connection."
          )
        },
      })
    })
    /*$("#pdfBtn").click(function () {
            var test =  $("#qrImg");
            qrImg = $("#qrImg").prop('src');
            //qrImg = $("#qrImg").attr("href");
            console.log(test);
            console.log(qrImg);
        });*/

    function demoPDF() {
      html2canvas(document.getElementById("pdfDiv"), {
        onrendered: function (canvas) {
          var doc = new jsPDF("landscape")
          var img =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAOWBKQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z"
          doc.addImage(img, "PNG", 0, 0, 297, 210)

          var img2 = qrImg
          doc.addImage(img2, "PNG", 128, 120, 45, 45)

          var img4 = signImage2
          console.log(signImage2)
          doc.addImage(img4, "PNG", 25, 135, 45, 10)

          var img7 = signImage4
          console.log(signImage2)
          doc.addImage(img7, "PNG", 25, 170, 45, 10)

          var img3 = signImage
          console.log(signImage)
          doc.addImage(img3, "PNG", 220, 135, 45, 10)
          debugger

          var img6 = signImage3
          console.log(signImage2)
          doc.addImage(img6, "PNG", 220, 170, 45, 10)

          var img5 =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADCCAYAAAAMw434AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QcVEjEIEw/hpAAAgABJREFUeNrs/XeUZVd23gn+9jnn3vtcvPARGZHeZyKR8KZgqgrlWSSLpEgWRyLlqFYvzZLr7lmjGa3WzLS6l6S11FpjNE2ZkaFci6IoimKRLMNiGRRMoeBNwqRDJtJEmvDmuWvO2fPHfRGZiQKQQBVIgYW8az0gIuPFfTfuPfvsvb/97W/DjePGceN420M+LH/orx17+prvf3H/3Tee/ns4/slXvsqv/5N/x8TmKXn1mRdMZ3ZBhqaGmT0wpflEXd1IBRNbxBhEymWlhUeGYswXtmoxkVBgKLAUCBEBgDUSGjR0jp8qF6R8sJak+yBcxK/8T/+O2qYhmX/+9OG8E27uWQHQt/+NABLe9qcKJB6MinYjQiUTc/zvPGzzqfpR7trxPCdnw40l/96O/EjGi7/3DD/181/cN7zW/L9tSt2O5kx1bXKlOhdVq+1KFKdGJFz90FQR6ySv/KeVFWNMISIIEkREVYMAGGN9w0XZ30/+4XJvIH3xb/7P//DVgTQKf+vv/eUbBrJ+fOdbD6NWJpLF4m822tWfS6gKch0DIX9H/2cDeBF6kRDlQlt6xdwY/7yyPH/UrebtG0v+vR1Zt2ApHOMv/ezfvb2xVvv8pm5ttLli6S1UsM6pNaD6/fuOSqF5vKoqpXfoewhFdd1ANHdwxizq/Gj7G70z/AUTuHTDg1x98+d6YKVZzOebN625eKor6DvZBwEorhs7ZsbQjYSogAXbizvqbh7vxTUb7A0DeY+HLQzLYAdsfcewrzW3+JgtGuFyRXMvqjleA30vsfEMPEiq/pqnuf5shdJgChHOuJxO2trc6+mIwdwwkKuPSh6jHmOLyE6GOnuI3znCQvtG8vY/NUCBoRcEB1wiJi8K08yti725seLf42HyQDsDW6ipe8tEqDLhIfFdlFCahAioEq7yJAqomH7IpShaGoYpjUODkokhM4MskIvPO9Z8gFLjD4aBaAVVJPYiSSF4bb0LbMG8o4HECHUPFe+IMbS8x+WFFQ1W9MaCf69HTCCKIdGgVe9ppDk1FTqmNJC3hX70qiclVxmNXtkDrVao9hKSiqNKhRsG8n0r2gCKUQOqeJtdx4MYUPeOBpKpUABeQIIlM4GuC7m3eZ7csJD3fAgFAgh5/+sCxZJJQpC3TgcVMFrmg/IOT0tJcGoxCIEPFrT6gTAQlTIq1Y2HodcxkHcGuQTwouT9fNADHiEXCYVoULmx4N/zMyL0wyVFRQmiBAWj0UbO8ZbPou9B3tFANAIpTUVRPkjP5wNhIN4oagnehIBYosJdx0DkXZwTMqMYFcACFiUI4rjhP977Efr1iRIeETJjKIKQBPvOBvJuzo0liOIlEEzQdwqfP5QGEiT0dyWjhTFkpv7uUKx3uPtGlUqhOAwNLPUQU8/FRXnVVfwNE3nvIZYjKpeMerGkxpCJwWjvHQ1EBYK8k6UoqjEeizeq3qi+EwDzoTSQzClq0USCmqCUKcJ1FrHIO77FqMFoGRL0TAZaIFZksNE0lehGnfA9G0hhMZfAq408AadZueqln3C/3fLXvnG84+P0IIFCauTU+SA9nQ+EgaQOvCM0RH0UPFbD9cOg67zBYABDITkrJsP7gsxGNQo7zMTU/C/9N/9vk7SrsrM9JSbNJLeetG4DvVyGMyNRraIrI3HoqUdyL6hsFLuiKIKgSIAQPB2f0RGPNwYvgjURibVERtRULGObxsOwSSDNUSNgBBtFxLEj7fSwwYBXfKWnoS4anMFFEXMzF2X58qwZGmropp1ToYhhojJE3TsiNfjMU2kOamNihIWFRdYuzYktlIHhEaJKRYOWftgYgzMGLSDkhQSv9IoOwwMNHRxuYgTeOHeJIiibNm8CaxieRuvTMDyAnllAJsfQ9AiCS5x1hqToggZg4B0DKeEdSQ/9NwXEBHIdkDzURD9AQbD7wOxQiryLdf9eMps+4hIQDELC3Ep+y+yTR/9xVn/l+GJttVLvNau61k5iH+LUeN9N6Fgf4rXcxGpterFSrGUSiNRYVPrJo6Kq3iDijEUQSU2gZ3zIjdGAYMQGp4JoCMGGIqklK021REFcEDSIhqCoBo+z1sQSKyGYnmvlHdfLC1NmwpFSiaFy9kyeP/3iU50iRgdIikZwxGpF1JjMSJGVgJ1NgsQ1cRTG5EV/la2jQgYQNWIQEUU8uThjCuesRyQg1qkImXofVLVw6lfdUmgUqe8m1lmt5JXVJJ99/eJnGq3gjFaIUPz7ijl98EJfx4/soaXrRgGLkZhOJ08uzyx9tLlz/KPVwe1oI2apWqdaKJlVehXB+YBJFS/KYl0JVojzqw3Z4BCMV0IQIrHEYrAiFMYQjOA1UKgnmEBuckLFUfg+/cUIXsoQMVJDgiXLFesVcYNE0sCIgAguBIwouRS0pUsvDuRU6BaOCIOokAukqjhjqBRCp5ASBTdXkgC5KgZaTwciDFkQxAvGWYKx9NTTw5MbyFTREKMe2sEihaV19jLLZ+c47BNiidHQ69/fH11Y8EfUQKT06+r7z84Q1JLmQjI8zr0f+zxbH9jLxaVFLhw9Q9TOqEQW5wIUniQNaCTs3reJia1bSPr1GaOCxWAyz/wbMyycu0wUhCh3GLV4I+RGKayy7cAOmpuG6ZmUQvIyzBbTNxBBFZJgMWspc6+fpTO3RBQcgsWbPjzqPVFsGNs9TbxjkNXYo5khKiLifmpcCORAxRjyuRaXTpyh01vFGBCVEsULfXci65VsiH2ZwxlnSWpVpBYzUHVEg3WS4QEksSSaU+9lrFahu5ry+Jmvs9w+iw8VTHBEJGT4H2lU0P3oeo/SMFAwss4LEjJR6hNNpvaPsXZsmUunnqF3cRETJ7RdQIqCaupxjYRDBz/B9M0HyUzpiYxChQjX9Rw/e57nTjxGkluqeUJVE4IouQl0opxNt9WZPLyFnrMUZARxqBgKgSAGS0TdG04/8zIvn3qc7sVFkryOIQEFq4pVJao5qlsidu7fw0Dd0fUQicWhIIoXCCo0jGXmxQ6vPv4qKxeXiU1SGnQoDUFFKUzAG4+K4gqLDWU+lSQREhtMNSYabjC+bTP7Du1manIzw5FjpSasLrQYmHwJl5zG9gzr4O6POh74oxtiaRlICIoGwaAYU6C2R257tGzB6sIqi8/PsnZhFusSelJWS7p5jgzGZLd1SNZAY0sIHovgVJCVQOv1RS49e5ZGHkFIyjAOyMjp1OGWT7XpFtBRQTHEXpACImsQsSRq6Jxf5JnffJwT33qJJAsUzlL0vZT1AaNKsIGFbJlo+yiTd+xFfI4YBYEiFATThySkil+eZ/bEMRZfa1FloO/xpB9sBnqS0ZOMYMBIghRK1F8ERgLGGII1NIYGObdvF7s/eQt33HGQsGWQtgY6vkfhexgMIgWqGeWdvRFi/TH0IaafmmoZhxMQMlR6FLZHnhSICJV8gCL0cHmCRbBAojmhcERFncTHhEIpgukbiCMqhHpRp5HVGcxiCluhEEOkEGmGqmA0IRAT+oic8RbrDRIskTiiXuDki2e59OI5Gu0agxKxLClppJhgSIzBek/hAxdfv8gLjz7Hg9ObGNzURH2K4jEE0BLxdhqIA1S80Cwi6sQYNVgMAcVbZWxwiFAXeuTkxIQ0x3RSXB5ICkXyklUVOm3OL7zMG63zCD0ObXkQjQALRhSDBwoCBRDf8CB/HM0jYBAcaLmQypcHyQk2o7Bd2nFgMXZ0iYhMQuYEo4EoF4J1zNcsHQdByrzAiyIqqDV4E6EkKAmiEU6VShAcltwLdj1LVoNByIzgogjjlSrCpTdmeerhp1m+vErTVFB1gCVyMT4tIFgiLCYUdJe7nPruWQ4eXGB4fBOpicl8Cq6sPguOnCo5A3jqqFkCAuItisPjsbWY2z96G1tu2UlbUjoYeitdVt64wNmXjrJ29hIV46gYhwaFvOD80VleHR9gx0cPI3GEtSUNyGhZt1DCO9ZAbhjIBzlJB1T6CKYKBosJDtG4DIlCBSOBSFYoWCEmB7UYVRw5XgxO2uSuIHOenIJglBxHlClrlR7tJCXGYMRjfFEm1pqXNG7TQ00O0sOElG5kEBeoFZb2Wsozz3+PV46+SGQ8RWJZ6XXoWcvk1BjOxlw+NYPJFIelbipkF1c49cRr1PZvobmjiSehsAWZBKw4uiqkxpGamG7cw5gM6yOMOtKQkwwOMn77Fg5+5jZaLsWrxaZKcXmJ79Qyvrd4lrzXI5KoD5IbGrmhd2mZ7tIKzfFxTDDYYDBqCGLw2B/5AumPbmOEBFQ867QFwWDUISHpG0gMahDJMeQYLTBaYNVjyBHJQQoMitWSlWo22JSCiO3XVxxBSj4ZXHltfCVsUDECig3wxmuv8+pTz8NaSgWHFlpSOWqWQ/cc4KHPf4zhLUO0dY0gGYkB0+3x2vee4qXvPklodakJuBCueilRUCKvJYEwJIgmQIxIFZUKK52Ui8urzK61WV1rs7bSYm21R2cto8gE1QjvHUFraKiQZDBoq1RtjAmghSBqEHUoliCWH3VZgw+SB9H392ShxEoVwCJqgAi0hoQKeAuhgqpBsSV9Xm35di0IWLwYKrmlmsak4gk24MQRpdDoVWlkdQayOu04J8XgVVAcqkLQGE+EKmgok3KTOSodOP3oUbpHFxnrNKhqUoaCCH7Us+f2TWyd2sKzLzS4eGYNMR4JkIinvbTGheeexX3kJka2jBOHlNwpQsFQcHTSlOEsxfeGqdLAUsLGCUq66Hj1sfOcutShHfWoFw7byuhcWGL59TkG0imsF0RiICEjI5LA5qFxhmvD9ArK8wWHEvVf/p07o28YyPvkxowpC1sbPf8/PIAo6iA4ytZcBcmx0sXRIqJHRCDynmAi0ijBqiHBUWhBOxHSJBAFxUtGp+7JJeCN4LwjEiVzHYJ0EJTUGtKKo6MZ4lOyCPIoQ11AQo6GlMg4jPecP3aW1556AV3zRCSoU9p+DVOP2PvpBxi6+xB1rXLg4EFmnjuOLGcYHJE6GiGh9fx5jn7nRaIvfpTFYYOPoJoK1UxYqSRcqsSsVTyp7ZUolhpEwXvP2Rdm0VcCajyBBArFpAVRKAuTIQKNUjJpUVSF6fv3sf3n7seNxOTLHWzfw3ajotxgNC8z9x/Wi6y72usQ4z/UHkTk/W4DkKteYeOlUiaYAiRRhLURnvXeBrBiQAUtlDhVqlpiNqEIqAYqxpIYiLFYETwFiY9xuVIzhoCQW6FiLCb3RKLEWGomYnlhmRcfe4bFmTmGqWIR8iIjmMDEplH23XwTNqnjU8eegwc5uvMlTr14lET6oRyCrGac+d7L7Lz7IM3BadppiivA9F+RGipBqaCIKkYVEcFrThFyfJ6Th5ycLqgQIRgxiC2BCK1ETG3ZzPbD+9jymQOM7d1Krr5sow2lxygbpMJ60Pg+Lmm5YSB/lBGb9Fmi9AnUXiAgeDGoCEm1QpTEKIKzFgrFBUNiHL6bs3p2iexyj4HpQepSJfeeikSkK226821CAYij4Q3S8cRakGnBcGWY4aReGlewRB5cTzn2+Eu88J2nidKyQmMR1DpyCaS9lBe/+zQvn3iNSs9gV3Pme116SUTqQTQgYhjMLKvHL/L6N57hvk2fo9KwYAwVL1QzZTgVapmhelUCXUigiAwTu3Yxum2CwimFBFDFqWBFSOKY6kCD2tgwk9umGNk2Sm+6Ca6vRmLMuhDJB3AZ3zCQH2AvKmPz0jRM31xKHpRKSfeIBhtEk4OsnT5FpDF1G2M8GImQ3PP6S69T+eYzjN+8g4FGA3wg72ScO3aGl06dYbkSkUlEkhXUFNrAsgbGdk2Q7xxnriHkhVCvOsxrSxx/6hit2RbDpk7ulWAgjwwdUZZW54i/Pos1BvVKIjEhVVymRBhiEyMFdCJlOc9Ze/J5hm/fzbaPH6YTWzIVFmrKWhRIrcEb0+/OU7ri8cMx+x+6hf2fvI28ohSao8FjA2Wm4iLiepVkoI4mlkUCkkEUBGNLz6hi+pILHx4j+RE2kIDQx+r7PQuBsjNORfCqDI/UuefuW+lcnGf1jXlU07ItyCuIoXVujue+9G1qTwzTrNcxQUnbPZbml8gW1hgKFg0FhJxeyPEENu3Zwj2ffIBNmybJuwUxStHucOLhp1g8fo5hYpJcqWDxeDLvaQxWqNUMDo96D5HFiEMj0LhK6OSY3JfXZS2SBXrnFzj6racY27MZu3UMseBUiQpPVz2FFiVJURRPTsDQHG8yvXuKTqUMFwmKDYrVUmEkJ9DzBQUBcY4oOMgDhVe8X1c9lA2w7gbV5I99iHUlTg5yxThKVQ0lShy33X0r2sl44ZtPsnx2Fu3m+FDgsKgPdN+YpffGHKsorp/PCJYmEbkoOYpEgqs7tmzbzM0fu4db7r4VHzs6WU7NGU68coIXH36clfOXSIixKuTSpRcyqoNDHLz7MGPbpvA+R4yg1pIVBS6qsDa/ytGnX2Dp7CUiDLmPsN5D3uH8s69y8snd7Bu+H9eo44oCV+RkoQcacP3GM5WiZAMUXXLv6aUFtm9AIegGEO5RjC3pND7LCR4QQxTZPvmRq1Ar6TMUbhjIH1sD2djf+nwoKKnfhgLnC5Zsj2hvnW1j91LsHOTkM6+ycmGR9tIanTQlCwXxakatVaBFGY5Ya5DIoklEtRFjGxWikRpDU6McvOMWdt92EB1MKMhIrGK6GfNnzrKYFIQDm8jF4NUQjJJJYHjfDnb/7ENM795Gmmclb8qURP0kiunOLbHQzFl8skAKpRYi4lSp+5wiKXj9jWOMre6lPlJF6oaBLYMsRznWVYhDSbGPtSA0LbYhFNLDmAA5mHA1vl4m86JgQgmPWzxWfNkYpUWZ062/70MSZP0IG0j5EEsEsXzwBMWikOeYNKWIM7o2Ixmx7P7oQfbdvp/W/Aorc8ssLiwxtzBPd34ZWeviswKLIXIxca1CdbRBc3KExuggg5PDNEeHcPUKbRvIaGMsuKB4MqYPbOMTg0MYknUzxRPIjTKyeZLmnjHW4gyJCqwpIVerBiSjOZZw3yfv4vC+7Ugvp2OiEqkqMjLp0RqLKCJPy3dobB/m3p/7BHuyHojFeXBB8METEpjct5nUpuTiscahGKTfmyJAUF13DKgoURGwwaPicBKwUoatV1STzA0D+ePtRExfUqgkLooITqAeGQYrjiIqSI0nVk8UWZKKZXR0HLNnAoKQZTlp3iPkBVooRi3WOiQySM1gKhHqhCJkWGcJTlAPiXUlxOvBRhEjh/dgbknKLqZ+7B6E8v3OkhLI1SNR6O/L0g+RhKqLGN03TWXnFIkKS1ZALIkG1BasuYJ2BDZWKpsG2DJ8mK4ttQ5dv7krhJLmXthAYQNeBCPSZ+VKv7VcNnpF1j1K4sD6soZaOMXKOvjxZhj9hoH8MTz6cpcoaL+YpUokyvRIlT3bKuz1FQZzsEawCuLBSRlrr0do3WSQLCq/9v1oQyxIVH5EAIyvQyibl1QpKeS+DGGCQDBQDRD15YT1SuRH6IMHaqAdQ26u0FpEwa6/KPta1nE5ShyhzA2A4Mvrcxas7V8v/fP3vULwYIyWuYVSdi5eqUOVy73/uUGglfT/wQlzsz2eb1QxVwIyNtjSNwzkj2+aXpYfyxDC9JuQTFCiEMissiqB4BUxgnFC8B6MQSgTU8WjRYEYC8aCEYwpz0Eom6iC0NcaLBcsHny/Op1ayCLB+ECpgK7lXAAEEdNfcCVKhC8NQ8OVDCoF1AneCIWWIZMaKPrM2mquVIrSiDKrdCKlWpSs49yURcsc8Cq4SHChDJ/EsAFWaD/nEFm/T30Dy8pwyiQOKUpWwBVJnvWq9w0D+cNfyKqoyvsuCLpemi/DAsUaSxHg8kKbk2fbLLNKEN3YncsWVYexDgIEDVRVcbmn0+mRpoEiC3TbHXyaEfIcEzyFzylEwRqMsSRRRDWp4Sox2u/Sk4oj9JUppG8kwXsMgukX+5WipJP3uwCN2LJ2YyAYixqhrpbgPe28R2etjaz2iDqeopezlmf0pKDuM5wRQpxApYLGMS6OaTYaVOOEalIBEQrxeBsoCH3DLd2bsVpy2ULpBW1SZWW5YLXd7d9NvRYEuWEgfwQGElQ2SrXvw41XEUJZ3uqzhQwahJSIZY25HBIW7BAqlohAogbbM/gWhF4gXVslz1bpza7SvdRhcXGJ1tIavbUePg2EnuIzDyoYv4qGFmoMRBZJIkwS4yoJzZEhprZsRnaNk0wOMzw4RL2WkESCakZRdEFTjDH0KhG5GKw6RC3WO2ywOAx5t6Cz1oa5JdYuz3N55hJzFy/TXmmjvYDvZWgRSn4VGdaBGlv2cVQSXK1CtdFgeGycic1TDA6O44ZjdNRAs0ocJ0RWKLSgGzpkpkfkK6VyYuZo5SkdYoqN2VBlb81G+HrDQH7EyogC9VyJ2z2684tcOjXD2swaq3MdOq2M1toy7dYi3W6HPC1otVp022208Jh1jlMo4yEXEgwJKqUaSjBCsELmC+JqlaGRYWoDluZIg6GJUSa2b2Hbob2Mbp8iGmzQCQm9ELC+VBtxaqjgkAK6C6ucfv0Mbxw7yeLcHK1LLbrLbZaXlum1u1AEbBBMUCwW9QraK0ND0/dAIqgx2DhhYHCIxuAA9WpENGxxIzGDEyOMj0+xeXobE1umiBpVsiSmMKXnNcZcM1rtw3R8SA2khJISsTR94PhTL/Ps7z9GvpjRWUvppjlZkVP4lCAFEgvOGqoWmiNVRkaaDDSqNBs1KpUYRwNLDbHgVcm9J/U53bTHWrvFxcuXWXt9gbWjBW84Q21qnOlj+9l5563svP1mmptH8cZjMqhbiwtCurLGpVNnee2pZzn16jHmzl0g67QhCCNDw+yYHmN0cAu1Sg1nhMRGRNaViFXokWcpmfd0uhkrrRaLy6usrLVoL6+wMJvhFEJcIBWh2qgz0tzE+NhWxndsZ8fte9l881bsoCsJOkY2pIhuGMiHxINoXzmkWOsy8/IpFl85Q5IZGrU640NNkkadgWaDxkiVgZGYgWadZrPK2ESTTVMjNAerDDQTKpUY0RhDhLEl/8kHJS9y0ixjZXWVs+fPsXZ8ibVLLc4uzHPs0gWOf+9Jjh87zt6TZ7j9Y/exbe8umkmMXyu4cOYsR558iqPPPsPapQuM1+rct2cHkyNDDG9usGXHFFu3bGaw2aRaqRDHjshaImfwPuDJ8UVBL8vpdDJWV1tcujzP5ctzrKyssrrWpbvgWV5dZq29Qmu5w9qpi5x6dY4Tzx5nZWGVTVs24UYSitCXhvuQKuJ/SA2kRC+7ztAbqJAPDNCLDCODA9x57yF23LKFxuQgQ6PDbBoaYGywxsBgncGhAarNqIR5118EVH0f2Ll6QkyZ8KpOkec76a0Y5i6tce78RV5/4zxHXj7Jk0+/xqk/eBh/6hKjn/sJxg/t4shrx/jud77J+VPHqNmCTz1wiNsP7eHArt1s27KZ4S0J9aEKLinFEkqFk5KGLgIaPEiCWFdCE6HMvUKuZD1Pp91hcXGFpdmU5aVllucXWL64wplX5nn6qVMcXSxDNw2h/CNU+yCK8mGUxf/gGIisFyDeT5BXuHoi3rU+BAor+MSRiqOtOXtv3sNf+j//IrvuGsfHZRgWayDSK+qBaoqyaGHKImQAEIuqbtjHBpGvz1VKkiq2bqhsqrL9tgk+6m9l4VKbxx4+yu//3iM8+d3neXilxfZbbubI8dc498ZRbrttLz/+uY/y+c/fy9ZtQ+X5VZBS26Gvi1vWKHRd3EcU9YCxJWCg/bvgbAnxJjHVZpWxqVH0UNl1KQEkF15/5jJrf+83efGxR8htQS4lTUX7+r68G0HxGwbyh2Ub7z/pTfuFNHmLNqxSmUMpDKRmXXzA4RKIBiHUIBePKMTq+wqN6xULU3Z3oSXxsdxk0XXtXhVEylpC0Cu6uIVRvO1rUFkYm67x+Z+8lT1bxhivJjz8zSd49Mun0Mjw0D238ad/+cf5yIMHqDRiiPvaVlpCwAYpESq5UorQdYqI7Yuuhj5nyvQdm14FexsItlRZtKFUfIwaDqkGcpNSuALvdIMFvT5/UG94kA9Lii6oEVxQbC40MkPdC0lQnOY4OljtYrzFWYdKKPtJVBATlyR67dO+pV/EkECuASsGI6YU5LTgQ8AaQykS1A+B+rt6MuQ4/LHtDGz+BfIh5cu/8W0+/pH7+e/+5i+x++AEUhHSkJUKWKbU16rYCFUlUAq9qZZl97JyUX5+KXIkGx7N9+Ul13lX2qfAewq8LTW4irig61JyySlMjpfAhzj1uIFiKYKhwIaC2AecGiQI3mupdqIxrnAUWcmujeO4HC4ZbJ/HdHXU4TFSEERRXy5kZ/u3VjyCYENctjRi+ne9X822wtTOYT7yidt45bnTHL7tJrbvG0ONknYybNXgpBSEKEIAlyL94uYV90H/mkqKvwbB+DLRMq4/+09LEQvT934Wg2hJq49sCU37Pks3CoYofDj6PW4YyNsDvQgFVnqlEJoKKhacY7HdYXV2ka21LVy8PEuoGbZv24Ixghgtm6/U45xhve9EQikVury8gnGWer1OCAHnLKiystAiZMLAcA1CQI2W0kRahkwjo3UqjYSBkSHynvDM069w5vxJ7n3wTrbv2Nr3TBZCjqrvX0NZo7Bi8Hk5ozyg+FSZm1ug8DljY6N4DVgH1WpCEcpkPnI12p0uFy5dZnRwEkI5ps6oJS4sSVGKPXzYXYj7MP/xwRRkUY88KugZoW0dnShiYbnFa88d53DdcG7mApv3b6URZ2jIGR6p0Om2aXdWGRsfwljF+Qqa1umlGTNnUgYGGxRNS7udsmlznV7H88JrZzCx4UCylbWVWQYH6jQbA8yev0w1ajCQlX3xPkp49fgsrx0/Q5F1eOrhZ6g/VMOIoVKJqQzVWVxZw+flVOA4NjSqVZYW2mW4F0qZ0+X5iDNnZ7DRPO1ui9GxIQ7dvJ/cBwYGE2wFLrw+w7MvH+HwwdupyyhRiIjUUSkc1aLkfn3YfcgHJknfgGGuDh1+GA/Rz0xjlFQgD6VQs6GcaCWqxHkFX+QUJsVLwKilkgVkzfLyI2c4unKeT3z6XtJWh9/6D78Hqhw4uJ/lpRVmZ+cYHR1h2/Zt+DRieXGZIC2M9UyMT/P8U2dZXFzhllv3ML84w7Mvvsj27fvI5x0vv/wKjVrC7bffxPFjx2g0mog6EiqkKy1ee/ElBgYN997/cVbnu7z62hyvHDnGQL3B6OAEZ8+fY3V1gSSJqdUHaTSGuHxpjqAZNhKalSZDAyOcPTdHu9NhaWmRkdFhzp/skuU9JjeNEiUJR55/iYWli+zZfoj6SIEVpaIJ3ghL1ZSaGSgpOrrePXi1LI+A3miY+qNEed+3271uXiKlKiKyLt3QH4PQ7/OxwaHBEUxBkIBFSIBIElrzGauXlqlUKxRpr9SWKuC1I6fYsnkrQwOTvPjMMc6/sUY1GeLs2dNs3l7nwMGdHDv2OhdnWjhb4cXnT1Cpd7nlpkOsLBa8cewiE81tXLp8mZdfOsPS0ipLcUYIhsQl+G6Ple4c45sn2bpjinPFGs89e4TJyW30Ol0ef/gFpiYncaGKz5RWkXPy+HGGh0eJkhhjhdXVDquLKUUhjI9sIXGDLC4t8OpLrzM1PcGLM8foeGXflu1ERBhjKfoqkpE6vAhdV1C5ShXyyp2Va43kR/z40W8Je7sE5Or6S79dKKgn9zm9vMvWHZN86nMPML88y8XLl7np5p1s2T7GWmeJxlDM1JZhkpphYWmGk2+8ytzyZSr1hNGJMeYW54mrETv2bCOIxyURO3Zuw9hAN11l6/ZRGs0KadpifGKYsfFhVHOyrEdSSRgZGybtpVw8P8f3nnyKmZnT7Ng1weCQZa09y7bdk+w7tJ1Nm4cYGo1Ji2V27B1lz8FN7N4/xehknbXeLERdBoYto5NVCl0jDx2mt45iE0+ar7JtxzjVhiMr0hINu6piZG4MAv4Q5yAbenJvDh3K7qS4Khy+fQ+3HtjN8y88x8r8AnsGt+JNwfjmIWaXLlLkgT2HtpLnOefOzLF19wQ7925lcLTBvkO7uHxhjV6xxtZdUyyvXuSV116mMdik1mhy/uIF2t0Fdu/ZwlprkWq9wdTmCXx4mXq9yu6bNvHyied49NHv0suUyelBjh57hZB7brv3AFM7Bsh9m3igSpp7tndHGJ2qklTBOg/EdIsBkrgKcYcoCoxtrmGd0A3LbN0zQW25xqk3TpAWLRrNCsZeFeFuqBzeONyH/QZIX/ZSN74JjI0PcehwlfGxJrdFNzG7OMn05kmMmWbrzq19TtMaBw/sxljH8lJKc6DBQDMmTiz3DN/CsaNnWFxY4qZbdjI/X2Hm/Bl2bNnM2mrg6aefJ6lZ9h/awblzQqPRoNtRxBjykLFtzybW/BZmLszw4IMfoVYZ5OnvPcfYyATbtu0gThxF6ICZwHtl575tNAcHsZHHmJzetGf3vq0Y4+h1M6yNuDnfTbfbZm11lcnpCaKkxuWTF6nWptg0Pc7SYrvPORD4UClf3TCQdxFjKmBKJXarDAxWqVfrGK9saW5ievck1paSpJMMsWvfFCEozgmFVzZvA+fkSt1Q4d7RvX0GLExv28vtd+4j7eV879EjxFU4cNMOtu4eYdfBTYgqTzz6Mr2slAMdHm7y0CfupwgBYxyiwk9PfQpj+xdsAKkBAVXLNrVlTUVzkKyv6l6KFPkSisJYQVXxXhEpSZWH9m8puxwrsLjYQkU3ZjreOD5ABlKS4dh4PO9Lw9RV01dLioRcPy9RLQtqBExkEAlYa7DWbpxn/Szro82sCKoFmJL7VXL6AiYKJeqqihiHBkOUOA7cvIuB4Tpbtk2Q1OKSYKiUrXtGNkiQxhli+iRBZGPNltGPL8czqKfsgO/zvkQJWpQLvD+w00ambBwTU46AcKWhBJHS4JSruhz7Iade0cAKqlex3P9wEpNrBJrkg+W3PjgeRNcl+/4rX0JZISlr7Sb0F6a5ks+/ea2YUpQ+z3OsjdCgKB7rQjkeQAzGuH4fuDI+NcTQyABx1ZZM3PWkqFS3L1tdy6HmV1pbtay6X0FXy1BwA65bb8Y0BtGIoKWHsLbsqjTragxaTk2XPjFURTZUTa5N0d9uI/ujTBJvoFgfiFx94yvpc7TWGcACKuuq8Ffvc+uLM/RV4pUsy1icX6YoFGtinI37/qXASNnvLX2pEuMgaVhU/JUZJmhJU1k/99WDeCRcdaHh2v0WAzhCQdn+WxjwDtEIKzGCJYSrrr9/zaV/9Vzts8ONnONGDvJ2eG+pQ7UR3KPleMy+uVydsL6VUIGSdQOXzrUweZMoUqKKUB2IsE7REKGFA1eAeIKWelTGAFJAn0lcxhd+gxip/dm04K4Sn1h3IaavO1R+ffzVs1w4O8edd91Uyvq4jHqjhnEG6+L+oJu3CGnkzU776kLgDZz3hoG8ec/sSwStexIV+X5P86Z4Q0TI0oLTJy9z+niLtbUWm6Yb3PvRfQwOx+XUqtBXdjTlovQhYGxYz5BgQ7LtWk/15p+sW4rIugCdEAq4dH6RIy8eR3zEyuoChQ088LG72Lx1qG9M/RzjGpRq/W+Qt/Cn+iM/OeqGgbwXH6JXvEM5qq2fKepbhR1X77rlAuv1PGdPzdFuXabd7hDCFO21lOZgtWQG9xe6hn4eY66c91qfZDbMYn1wdfmm0Pc0Vz5f+tGxEaFWrZH3lKOvnmJ68wSh6HH29GUmJpslutbXFOYq4OL7+8uvvhK9KrS86i//EEZgP7o5iJYxva7//+odsd/LEUzAS0TQWolYSRfRclq6oR/+qLsyoOpKbNKXES0lb4rMs7LSYnSsyZZtY8zOXmZpcaVsslJFrMeIwxKXY9EQBIcS9/EwcMFDUStzBJuVhhXivpmkyHqCvb7E1zukDNQalqQqLK+sMjw8xujwIN73NtplZUNwwfD2dY6+tCRFORlY+pmJ9MXuNvKlcG0udsOD/OjnIO+YvPPmKCS86fcMLjI0hyvYxNNeWSYrWmVyLOs9433Xse6R1lGljQUmV4zuGg/1Fp2WcjWAXf43rlgGhhJsFHHuwjmCa3PbloMlFd722xslvMko3nnAh76bpP1D0DDyoQ+xrpudiL6pV75vIHIlHGkO1rn3/ltZWV1mcUEZGd3J1ObxfkTTR7A2jMu86VxylTFcxZC95mP1qoW7jm71tesVRsab3HHPYXwmnD1zgbg+yOatE9iEclCOKiL9HmRd/yy9NuS6lqD24YynbhjIe/UufaFd/JvCkqsT6UBtIOKu+/aWrOGgaAhEsUW1QGwJ55Z93e6qRalXfYb0uxjNVcirXGElX2O34RoVdhUYnxpibGIUPNx61x68FNi4HNwJAWvshuQ0Vxf9lGsS82u82Y3jhoFcN/DSq8OqdTkR088BrsTh1pbNV6r9YaDST4jX177qWwRL4YrhqXnb3grBbgwivVKruTpv6EtJOAUrUChBfN+IynMGDWU34lWLfyPKuzqY0yv1oA9Dr8cfKwPRt4Jd/+sGV1xLVTGoN2RpIM8L4ricJ1IyNDxiSgRMtRzRti4jEq6e/61ljV42Vqde85cLZgPCzVMl7RUE26aSWFw5zLasmK9LJOnGxaEKPleCD9ikHIwT1pVNpGx6CoGybVj6tJLQp8/Y9QBvHebWD8oWdcNAyoer1yJE//WArz5i009TTRnD+CBYY0l7gZPHLrK83GJ0tMHO3VPEicXY/piEwFXGICCl2nvQAg0lHwrAB49KgbXX7uBCKRyhmXL+/AJnzs5hq0ts2zrJluntGGf645hLyDgELQf6YGivdVmcX8X7wNjUALWBKsaUSouqgjFy1d9ZDi3p6ziUxqWCiO2LfAeChD+yhSpXZ3wfMH26GyHWu3h8FgeFMH9xhd/97W/SaacMDja578FbuPXOXRRpSqUWY105wlnE0x8zQtbLiWLBRob2WpsoiakOVPo0Fn/NnqnBY6yh3enx2GNPcezYOSamDVaE0eYmKjFkWpT6v5mnVovIfAZBmL2wzMPf/C7dbo+f/LlPQii9WxxH+FCQZwUuShCUXq9LUomJgiPtdEmGY8wGTfjGccNA3rO7D2UYYjw+h9tuuYvllQWOv3aalZVlVpYW2LlzF6Mj4xS5ErxSqVbodLqcOnWCsbERhkdrvHb0ZXbu2c2hWw8SVwzlvKirAGMjWDF0Wh3Sbs6+vTdx211b8UWXb3/jOUaHBki9stbqMDd/mUMHD7K0uETWy6lVB1hZyMjzwNJcxoljL9Na67Bjx07m5ha4dOki+w/sIYoNL730Art27WPQDHLq1Am2HJqmVh3CiL2KkHijkn7DQN6VAwn9AhqEIKS9jNNvnGVsrMng0BBxFNGojfLUY68wOjpOt5OR5zk7dmzn9OnTXLp8galNk4xPD6DGMT46XtYmNoILvQInqxKCJ45inESsLLVZWmyzY9skLy+d5aXnX2bLlp0glomhLRw7cprTp98gslVEHZGp4qI6rx+7yPmZN+i0U86dXmSw2SSK67z03GuMTwwyOTZFd63g2KsvsrBwmQurl7j77vuw4q5KvW4YCB9In/qHkYLo9T9T0bfQBi4Jg0oGtsSPqtWEnTumeeD+W9m1c5qJ8WH2795H1nacPnaJ1146zdGXznDhzBKzF1aoRSNU4yGyLmzZvJktWycwRvq6vVdqLQKYfu9JkXniuMb2rdvZs2MnI0MjBO+4fHEJfMRAdZj9ew6xupTSa8Ho4DRO64Q8wWmT1bkemsUMNzbhu5aR5ib2797H2mKbkMJNew9hpcLqSpfBgVFiVyOEK1V2XWcR3zg+ULI/VzLG9+ucfdx/ff73971HFRsUVyS4UC8H4agglAofBFNSTfqtgsHn1CoFt9w8xb6Do5w42uPISy/T7Qq79m7l3NmztHu+pJbYjEOH9nD+/Dnq1ZjhCUdSLU+5XjwMfSh2vdGqCAViIlzsyLJVzp5p41yX2oBhZe0SQ2MN5ldXWO70WFhbJbOCqcV0Qpeh6UHWVtsE12Z4cpJOsUgwPTZtGWN4rEGUGKr1OnkhPPLoU3gTMzBSJ09XGZ+YphJHSGhjWcWRYkPEjXrIB0n2532PfGWju+P7i8K6wXA1qhgfY7WK07iv5tHPDQIoEahDPQwM1rjj7n0MT9YhgvFNw8THK6y1V7jtnt3s2DvK0tIiPvdMTY4yPj7JM08FRkeG2bS9jq0r4sBfVcm2Vy1CJZAVSmNggB07x3ntyAqzl3PGFPbsn+b2Ow+x2nK0ezmLCwvcevdhVleW6bRabNk2jWogFDnbt22iOhTodTO2b9/B0NAQzimH7zoMQTh69Bhbd0zT2OW5fOENtmzfRJIYNHQwrPYlWeM+9eWGcNyHNPcWgvHkcU4ap6SmS8+meOcJeAoCmITCBHLxGCxmU5UDn7oN66qsWNDJKjd99jZcXjA1NMgWHSTPpkEV5yzGWO4buRlrDfVahRD8hqavD2WnIf0JiqXASmk2US3ino/ezs23gAZHXPXYOCeuVNBcKLKcXi+lOVQn60yRpRmNwQZGQH0gVA0Dm/aiCs2BgX5tRRmc3kLwsOPmEWrNKjbP2N0eojrY5Pwbq/SMkkpEzyakxlG/kYd8iAfoAEGUwhR9NfMM31c1LwkkJX8pohwZXfJIPDWXlKm1L6vb9Wazn8RnWBFMtC4QXaAUDI6X9BIHaJEQvPb717XP6r3aq61XBApqA4ZaNSo5jrbvBtUilQxCoK4RmIy4ZkCrQN7XFxaC9Ywl9bKCbjxBy59FogSFaj0hmECkQrVeQ2yCFyhEKMRSSITH3IiwbqBY6wvT9xe071eRy6oAChH9/CVcRTRUvYadG/qDdMrpTus1z7K9Vfstt6rlnPUNRpdstGX1AYKAV4/Xfiuv9QQtZ5Fg8vKMajFSoK4/QoGrxClCvzreV2iXdSRKAwbFiCFoOQmlnPVRim4bU7b7BoHQr4UorpyDcgPw/XCru9tgiAtH7EtDcMFhfYSljlVFfCkFpCYq159CkXt88IT+7L5yPIfinMO6siCofR6Wao5YQwhFSfcQJfhSgqcsbPcVSBAwBWLAayBQoNrr22MEkpdGZRJyEgKhb8Z9H6QlEOGD4rMCegG871fd+8osxuLiZCMfc45+IxYY44iCJfYRkVriAhJ/hXYvNwzkv/Ji1SuNpfJH8Tj6iJkNhmqRUNOEWA2JryDtiGw1J6hHM8UX5R6dpUq7HVhby1lb6ZDl+QbgFmEYatYZGo6o1g22Ql82CJxzGOeQimCcYI2gfn3cnBC07DsPWpTd8GKhP94AdX2vEa+PhcLkgeCVUHi8eoIGil4g60GaBdZWCtqXe/g0K+eBGCVOIur1KoODMZWqYGMwscUYEGugqkjPEhUxsUIt5CQ+R6j8kbRE3ZD9eXdW8hbc7j88C1HAqMUUgmYeEwzzs8v8wdeehe/2WFiYozW/yupSj1Y3o9Pp0mp16HUzisITQhk6BQ0IEZVKlWo1Io4d1VrM0EiT0ZFhxidG2bp1C2M7Iqa2j7JpYopKFOFUEGs2Znoo5XwPLQLqHYKlyMrW2iK3ZLmyONfi0ustLpy7xMzMDLOz8ywsLrG22mJtrU2r06XTSgk9ICiqHhHFWFNeVzUmqURUa1WagwOMDCQ0B+tUpybodiMuzswRqyNWjxR5H93+r7Fc5YaBvON28kdhjBtD+8ohfpaYU2cvM/OfvkLHtAjBQy/H9Bxa2H4oYjDGlKQ+caWBhEBHhQvLXQgtnCnDp8hdplqJcc4wUG/QmOyxbc84d916H3feepjd+0bK+YO27Do0EiMqxCbGSoIEg/GWtKvMzrZ56pnnef7pE1w60mJ1boXV1hpZVtDNc1Kfk+eevMhBhMxYVMxGfqMoRlLEdDDG4GzZaZiIxyUB36wAVbjURVXIQxclv5GA8CGeky4IuVM6cc5aNSMfcbQTS9qIkcEpBhp1BmxMbWwCNzzIQKNBvV4nihwigjHrzNyAyZR0pcvy0hJry8u0VpbprLVYnl9gdnmJ7vIC9myLF154g8f/4CzbNj/CLbfs4OOfvINb793D0FgVfA0JDryHYFmdLzjx0gp/8PUneP6FZ7lw6RwLc13aS4qxDnFCXK1RHxtkcGiASr1GlERUajWSkQGiSoK1JYK2XhEq8pxur0ev2yXr9qDXppOtMJ93aK/l1BoxaRaz6DydilK5gWJ9WNXdy0WTmoJOxbPp0HaGmwNMjE0QBmJkqEKtWqHpEsxAA19PSOIY51zZS8F68bHEkUyu0CvIs4ys26W31iZtdUjbXZYXlzh5/ATtM/OsXlhh9kKLxQtnmHnjEsePneTOF27mcz/xKYqsgjURVhyzp5f4xjee4Ntff4NXjpzj8vxZlIxKMkxt6yDD02NMbp5iYvMmmmPDmGpMUq/iqhFRHOEqtqzDWMcG9X4dcVMlTVN8t4dJU1LfZi7vknaUgSVh5exF8qmEohb3w8cbBvLBK1D8YURssp7m6LqNkFHgG8LBB2+m1hGqyQC+kdCLy9+rBoOXQCYe1dCHgelDrmUdRAxoFKAOTmIaWmEoDGODIB7yTsquO/YSThWsne4xe+kyZ06e4I0zL/HYIy9w7PjrvPLqGcbGJlleWOHJx5/i2ed/n6eefoUzJy3OjbFl80F27d7K1Oad5LsrxNMNhsfHqA3WMZUIHwmFU4gEY4Uoz5Hgy9HUWjZMlQKLQmQcEQ0ihajwYD2j1lD0LMNrgllNuZykdIYiClViZF0E5g8/NVgXBL7RMPWm+9KHLsSU45nV//BGYcoplxRAHCyJGNoRtJzHikcjTxQyouCxQwY/CGu6hrK2gdy0Dai6soaxceYrHK9rDFCh0EDR9y7iBHEgiWFgZBMDuwTWUqaXhxk+mVB5znP2SMTyG5d5+svPMVEdIcliXju9ysVsgdmQ0ti5ha2Hd7Hn8D52HdzF2MQY2YCniEI/eU7xdEuB6aCQlau40PjKSId1ZLC/QXifUQLMGV3Th6qDILHQGhFkpMSurASKoonD0o0tKZ5AjBLRyCNKuSL3vixlA1jJsUk3NwNxZm8YyPfDvFfvG++fmkyZppb8QMX3Ba6s9zjviYJDQ7ze8bHxqeZN2co7kp71ygJ8s0jI1U21a1hso05lcID90xNsOXiA08+f5sjDzzJ7/Cwzsy1c2kESg4xNsHfPFnbeezO77zrA+PYJXD0mK3IKn0J/1PT6vTLXCEFcafGVNxHcrv3+yvvXN+2r9yUjgqjHqccQEUlApBSwEPyVvvv3o3e9Tyh1zuZxNSoivWEgb+VBdF3o7A8nVisVdyMUWxTYLMcEh/e1d6y9iCkQ498FQq1vgZRduZKuCMFYCGBNRHVinIMfH2d0015efuw5nnvkSeZnZxidHGbv3bdw6MG7mDq0BW1GrOApeh2cs1SKCtabN4v0XGuxJu/rYL3dBQto0icjXgvsXXkmHuvWsEWOy2PwGSb0gIwgrkz9pUDV/dCx1/rkBRs576LIR+GGgbxpERqMFVUTQngfd48rCiCKkUBEoBKgKZZRiWm5HB+1ruOu+lQQfVvr7nsQeTv7AKBj2nhXCsiFUPZ/u0TYc3eNHXtvpzG1wEtPzXP73fv56OcfpDI+yIpfoScFdSsbPSM1reKCu96O8y7uTvZ9f5Ne45cCMRkV9bStIbWeCilGUlSSPlstvE/PSfH6wRRSua6BPKxKD2iCjAFx/98XgWWuCFD2W/z1x36AwpJEDnESMLkP75emhn6/GLRoIDGGTc0GeyerdE1MEH8dP2S5oov7djvg9bWk1DjEejCWgBB8QAJUTYSbGGDP6EMsfvIw4xOTDE6MkFol1YRg2UCTLAJekeuupKup6vI2cWH2JpfxZiFSwYQGlVToNAxt6TKY1EsW9HoIp++fxLUHQklnljdvLn/pKyew1iQu5M2XHn688/LL383qQ5vMtqn9dvnigl+YmwljU6N2ZHLCnD170a+1l1VsDvRQzVG1ONMg9zWqXWVQV7Vrl2VqdJu57ad/vjaxaTIdHZ/odDsd/Rt3D769gfziH7yMRHZ/75nLN4cT53vEXfn//Lf/OjfV0bobCZtF1HKFHycbMh0g5KHDbHbuF/7yr0mItaLORt4brz7TelJcmJ4YeG5hpdX5V3/nz33/InQGiUQxEoK8vx0hV3xAqXHjVKiq0CSlSolOXR8G0+vu2NdbslEBpqDkWSEUWureWglYPEMDMVviSaIoQvMOvujPei8EDbqhyJWZwJvvkbyVd3jX8N5bf19ufIaaEZICrM9JiBB1KBZVh/ywaMrVuaIYVEQR+T4H+OhXn0Th7s7swt8NJ87Vxrr1lTTuVU69fKxWSc3qiI97nZnZ6mJyqWGzuNsgVtFIDU7F5KomGO+DJBgT55IptkNcrVyca+ezteea+27b+yu/91enf/1/Oer0HT3I0dlVJHE/u/LK+f97+uyrLsRrmCxRdERG0q6RPrSpb1axUqUQJUts8LYgkxy1TryPNIRcNk2416p37/5rx1479523dPZ5TlCMF7Uq71+TznonoSfg1WDE0Vtu8/X/8jAvvHAE7zOu40AQk4HJfug4u9qr4oqEYKRMc6XUo1JyrA0URReCw9qIoi/0JpQC2VZNCRsD3SijMP4drkcR2+tT8OUKCHItxgehek0O8uYjoBRxoJ4F2rEl7cDp509jqBBMBfUxbMww+eFRxwJQI8Fap+ZNoVtjboCgajunFra647qznlqsBWcNcaYlfdNkmFgRbyFE2FAKhRurqMn7HiqgAYpIKWJLJzK4mwd9UZ24598qX/JI+x0NZK1tEW8b6awmxam2CdEyUVYl14RW1urvGNJHOcyVuLUfP+aRWJWUQA+RCoYame+RdZLNYVtvOj3TeZtoSNaniL2vKfq6Ptr6sBhrInrtgiPPvErxUoHxFhcq1zGyguta0buBMn0FCTFBSr12FcgkxdiCYDIGBircd9/tZKHgySefYWV5DasOJ1HJGQulNGkQ28fl9G3+agXJuUZ5Xd7ifRq9Q8egECTQi7rUi5xuZBCtYFYNhgQvpT8z74t59A2yHAsRjLXBvBl2MDlBEdUcKTrY3OO8xduAw4BvY1kjzdq4qErEONY3wOcYzcjCEt4qha4RywDSFWxqiBsNvBmwIa5u6ngiH9l3zkE0ahAiJwkD1PMK3kOSO1ISTOhiMH2lPrkqeZW+RL5gMk9syxFgwRuMqdAJlrgb8J3c2M7b3B1rwKIqPpR9Cu+PD5Gr1wMCxkHh6bUKcpMTYSgKf50+eGF9UOYPFWNLQMlQNQSRsuZjwUtGXFXuvuc+br3rIC5SmiPDfPXLX2f2wiyOCkYtEiyiBhMq/Rkm77Qjf7/GlXzfjCn/Dsu7byCxEhWQmhzBUPVVYH1/D8j7xvUtNw0xxrvYBVu8yYNsqlOEIPMXRLAl4GINqM1Ii5yCFuJ6bNnd5K5776Jp9vKdr77E5YuXEHqMTddpjA1w9uIsnYUlGjKCqiNogpoK4mK1Dkxs3tlAehWHVmy1ESWmFgyF5jSKwKqBbpyVCoFXzZxYZ3pKv3nIejAhJwkFVh2hUAIWC5KtM/7eEiqw4Mr0TOX9q4AIARXdiKcDplRJtBHG0p8Bkn9/hnoN/liFkPzwO6TrEKQHakp1X0OZKOsat95+mI9+4maefP5x8iLj0x//HJdnZ/jaly+WtQc1Gy0BtvCYd8ybBPX1UmyCN9NirgRQmPZ1PaPVCkm/Rz+owarpj4jzCEU/13kfYN71Dk5riiiOfPSm62q7HB/C0GpUDLiooGk9qVM6iWKSgNOCvTdv42f+/Ce45/59rMzEfO0732OZLmLXOHR4Dz/+cw/x4vETfO3Xv0s6s4oQIyHHGIgjGxIIUXQdFGut7gkVmkkNUucpQo9YUgoyXL6CSDkIppw7YYnjiKRSoVapYqtVutU6y5ffYPXyRRoYPIGehVaSJ5eTzvBCkr6NAzGIlSBSBL126Nj7EN1e1W9gHNYIQR0+9wRrwZp3/DQlA3o/vMGqJw7myui2EPCakyRw1/59JFmPx7/xBIvLPW6Z/iiHNt/Lk3KCtOfLfhCNy93bdClM8ba1njKea19/zap9RxAzIIi6susQi0WwouQUqFXwAaMZgn1fnpciiLXeuii4cO1OPj0yQZYXydnOG66eNhjySlsDqS/AeHZs3s6f+RM/w0///N3UGoHvvXGe0OpR9RbjLPunt/ETn76PBx+8DZaEr//np8hXU6xV1AUiq506+LdwINfeoUSqKC4t6kqW5NhujdzGBOkwNDzAnr3jTG5u0GgkVKsNKpUBBgYaNAZqxPU6vajOt770Nb779YtkasizAlWPzQoTejjbe+udb9hZxIkW1obUfD+kou+iDPiWPxfITSntY/DEeUFhXYkK9XV0/Xpz0tuWeEMfEg1Xwpf1gZ+i/R2+hDxF5ErNpD/CTde904ZxFEDZ7yHA8FCd5mCTIy+eojUnZC3H00+9wN133c6WrROcPDZL0FrZO2jaBDKCXlUB74Ps5fkSVC1qekBxRYz6+zzO1UNL344eUPK6QqFIEDID6jwueCrBYDaGj8oP6ekhiJAZg5EQEufV+ms9SMNWSIsc2xW8ltw4q0JNEzKfs++mfXz004dJey0e/cYRvv07r1OsGRIGIQi9pYilS1123TbG575wHy89d4KzL85CZMhcvhRC/sTPQfcfXM9AhlcamCRZnk96IcQdM9geo+2F+mjO53728/zkz93C9K6C5oihkgziZBDjDLh+TNtzpGeP8OTvQ6oOZyOahSfpWI0WXBhrOY6/xU3aVasSx1KcqLi0E/XQNL12XuZbGIvVd/YbBsEbpWs9DQ+RBoaKgjQJiFGqWfng3/n59msOIqjpj09Wg4YIJC7DM/E4tRhvN8TnrmB8Du2PHQgqZYhlUoQEr1Wy0GZy2xiVZpPnvn2MtXaMIeL4qZPc94n97L51iOOnZrB5FWd6eJkBIkRrGDEYCYjJEfGEwiI+wWitbzJXIW/vsRGtnI+oZKTkYnDB0EmUrguM9zyDRYKl1q8R/fBpeiGGjgEjPtRtJ4i99pxrZ9Yoch+qmWjb5SyFNg2fYApLZaDO3rv2Mbgz4aknjvCP/v5XOPr8LDXdimMIzQd4+rsXmfrt7/Lnd3yc7YdG2XHTFBdfmsdHCWmDrnXFhc/9m2Nh//7R6xQK1aHBYnAY4yh8hoti7rxnLz/5fzjI7fdsIWhGkad01xSfrpFnBUWR47UgbwmtpYjYjdFJI1x/6H0v77pKpAP/+sL/U770xP+of+P+sWs+NmnWSaqSVQbyFi5bl0R4e3TqB6yJmP7oy/UPeFdlLrVAUsIsoqAxQpWyTVYhWEQSkKgUbVjXUAihDFPEXEGNNqbjWEIoG6U2b5siimFx+SL4DCuW1uoSqh127JqC+AhZlhNLDNIojVMbG8mySodC21iivhhEge2PRvD9ndgY855amb9/FEUZRFmFSNf9xvuVK5bnLxQwUrg4ChTXXmu9USNPCzGFERNcf8yEB7o0Ggk7d00gFBw/9hqnzpwDp3g9j+gFxGScX5znd7/6Cnd/epqtB/cx3BzBmghcBKpqrSkGR6qsLqTXq6SXVWNrE0QMeWgz2mzymR/7CLffu4O1xR6vvnyak8fO0F7NaK32WFpYZnl5hVa7x9qKsvzGKlpUiG1C4T1GPYUvXGbZ+h++tzCQtjqrb76IxtAgjQGTJo1uK5ildzSQHwju7QcTtlRS2FBZfHePuB9Sras+aoQQbfy7IuTelyjTumyPgojtCzNIvw5hWB/AA0IIgagas2fvLsQpK8sLOCzOWFpra6y1Fth/cCebJoc5t5bTKwKmr7UVvOJD6dFMJFQqCWMTwziXMDu7TG8lx4rF9Ecl/MBts3plEq+UakXEKqXSSz+xfj/MRPson3E2rzfqRV5031SLEoyIlSKIU1NW8DUAOXEcGB6qlT4zzfEhwZNREIgN4JTCK5cur3LujWV27Csjm1zBxxbEBGed16Akb5Glv8mDmP4oMFfOYRWh3nCMTTQQI7z22kn+6f/2JV59fgb1Uu6YRUCDIxBRBMV1AY3JJceaEq1RayRYu2l5cbXhs+L7DKQ2UGdqc5y/dpR2LutzaeVd5xtvd9PfPFTMikHUb/Rav7vHuzEm6oqXvZoxu7GXhg1vETT0B+mUnYfWGIKXqyYSliHMQHOAzVs2sbi4RLfXIbYDOGvppqvMXV7i9rtuptoATw+VWll/CD2MARPF4CCuwN792/jUjz1IrV7l4W8/wtPfOoXvleJ1UHqSH8RIrjARpJRpVSURQ1zi+u/boB1F8QR1UdQbGhvP5xdnNn72t39/jRd+5wVCCAl5YWwAo6bvPwtUc9JeC2vGGB0ZI6k3STtrqDq6RcCZhKxIGK2PMTqynbQVSFtZWU+qxBBUxasSAvL9hfRrDWQ9CLE26TvRgigqiBJPq9XiP/36N3n4G+eIwiZsUKxpIaFAQwWPEuLVK9btDMZFEDwBIfNJI5DU1LxFMaZe4fN//Sv5/+VPfrxbONXrUY3eKxK8zmNyGNC+dpUI754Yqde8NIRSzFpysCkusWjIyPK8rHxbt6GrFVTLz5FKyTUxab9QGDE4OMJgc5STx2foZYaa1iBYgm9x7uwliqKgMWRRt4Y4S1QVmnVh+7Zpdu68ibFNY4xvrnLbvdvZffM4JoZb7mvyP1/8z7z8zLnSkIz9gbd14Qrh0wAuBKoeaiqYdWj2fahZqUIhqnEcpSNTE2H++KUr+Unh+e1/9Kv8+C//QkWylnGhKOWOxGIwrK51OfHaWR74xB4e+thHmfmzlq9+6TFmz6dExQCFejaNjPKFL9zDXfdv5fzMArMXlsjF4mtVJA9ClokGLak972QgodQvM8ZYcc71O+ZkAxIq8oD3ASflhKRAh8jlaJHhVVGzgkQOggPjKHyORQjekKbUup2iGvKC/9dR5f904MrFmNjy3//CJ1GnWbG+bDfEza7kmKLX1IvfUyxdNuUIdr2S/W6zVyn6q+UKtCpGwAS8dqhVA9t2TyAGFmaXgJgkqpGnOb1ejyLPybKUoshRCoJkfQVEqNfrQIX5pRapWmriyD0oCfMLKyytrODigI17bN46zL4D+zm4bws7tu3E+5j55XlWVhbIi3GiBEwkTEyPMthsIhhCUMwPod8vehWLsa9jXEGoiAEt8HiuR+R8F3ygchqcEUxsi6GRQaLqlbpTt9vihP6q/JU//Z8SfFsklOhcUEGNpd3qcuzl8yxezNm8d5yf/6W72Ly1xlOPHGN13oMIh2/byxe+eB/D4wkvvXSJ2YvzFOoI1QQKVYqir/Pn39lAvFfEqA3B91UwhZWVVebnFkiS/Tz4sY/wzHfnuDizTBJZItejWvFMjI2yZdsuJneNMl4d4pWXTvCdp54l6+QYkxByJU11x9Jce8/rJ2aOHDi465qL+LN/82f5H//ir5HlxVqhPg+i0TpF5M2jKn6wBL1MamzfR6pcPWX2emf0/YJa2KjIF8EjhWfT5mH+/F/8CR76wn4U5eIbbc6dWabTymhUB6jECa21Fq3WGrOzK7zy6kucPnOCdlvJOxn1Zp1Op8fMzCzGxxR4Kq6KDxVW11JUDT/7cz/FZz9ZwWiVmZnjzJy/yHPPvMLCUovV1hKFLNMuHmLXwT9JVIVnnnqRmZmLXDNN/QfOQa699zYoVTVUShFggvh+VV9+oLDKiOkjZgEv6rGmPT41pi65siznF+f5le8kcdpbHRTtGsSDOgqFIAZMxGOPPcvUvxjjT/03D7HtQJPpLQ/wqc/cStYOiBEGBxs0h+u8+tIr/Odf/03On7mIxFOEagXNMtUsU1XFF9fxIIXPERGTF12JgcjEdNvKxfOLiAQefGg/l2YucPbUJYaG6oyNJYyO1BkdHWRkcoLmyCYG7QDRb8B3nnkKDQbrLU4h5FS7y73mc/+/3+DnfvrT318sdBaf588En18MsFuvg2DpezCO9U3UmD5/6D3TWcJGA5IRiKyQ+ZzmYIWbbt/Gzpu3lJ9lZ3niyed48ZlXqFeHmByfolGrMTjYZPeeHew9sJ1Otsr5My2OvHiGkZEmre4y84uXKEJKIZ5OvsamzVt58IGb2LN/N7OXFjl36iInj77IubOvMn8xsLrkSfMMT4pJUr78pe9x86HbufmW3Xznq28wM7OANRZj5IfIPyjHUku/AqRCpIYahljLLkbfF794zzHWNTe/ZGZ4ZbXVS5+5767h4pH/nFyTFufdzAbNaoTUGEJJuRfBSyCXnMtzy/zul75JIOPHvngnNx/eyfT2xpUp3gHOHV/id/7DyzzxB+forRaYTQOEegXjMyHk/aHD+fU8SA+MN4VPSZKYIJY0hScef5n7Pn0Tt92zj1/8c59jbblDpRIzUK9SqyW4yKAOigLyRU8lrlOLhyk0wwaHE0+rvWZW5i41tf3PzP/wa5e+v2IYIoLP2mjIQl/vdl3aU/r1CHmX4ZW8pZGUoIOR9emu77Zi358Rss47kj6CRUoISp4WaA+owHJrhce/+zTPP3WUim0Q2QqNWo2hoSHqjUG27phky/ZxxsYmeOih7YxNR2zZaTl4aDPtTmB0IGHHtj1s3XqY4YmIpcUOTz35Il/70vNcPr9Ili5iZQJrmlhbjnBLkgpbNu2ktWD5tX/5ON/+yhFCaohdVA4L/SFQLPMm6o5FqYgl6sMMP2gCIlezjEUICsa4rEhZEBH+/v/19zbem3tPd61Ty73fFAq1jrKfxovHVIWxsTpiIxbnzvFbv/Ulnn/1KIdu3s62nSM06gkilvlLXV5+5hJPP3GC1nKNxGakkaMnAZvnSFE2oUjQ6+UgGaiK9ylxHJEaC8Fy5IXT/N5vPcXYyBSbdw4wsaWJ5tBdhYVFz9raInNLs5w+c5H540u8+NQZuu2A+giDIzKBotsy7ZXZ+nfbWLKF7zOQJK5ge2kvaCj8xuSlK+jRD1L/0Dc9bCd9HpS+B/xlo2peMpmDtxhxOJNw7twM3/zak5iaUhuu4bMGe/cd5uXnLtDrGiSqsNQtmJu9BDLLi0eOMDpRY3p6N8PDk9xd28WBwR38+Bce5MEHhcFBS9qFh791jEeeeo2HOvdw5vQ8587OYYsqtWSUoFWyIieEjCgJ3H3XrXzuxx7i3KmLfPm3HmZlLicxUV8/OPSF7uSHamVez9csUDGWKPTFvQ1o0B9KLrbkYQUil6SpN4sP1H6ZSmXgSg2kXqVSSQaKoJt9oSbqG0ihOfVGzGc+/wC79mxi5tQpTh4/y4XLHR59+DnMIymqBYSIlQXP4uUCG0aJTBUNKa5aIzNC3OmqKUp9WSmuk4OUiaggJhDHjmArKEK3bfnKfzlCa6XLbfeP0RhMWJz1zF1wLC1mLC7PM3P5BBcvniG77KHbJAsDOCql3iyBorMa22xlz8svnKvZsLTy5guJowgxJg8agvL2ca38QObRzzWN6fOq1yH+d3M2VxpJfwSCaISqYF2FNF3jS7/9FZ4//hT10Sa3HrqPu+58iPZCg6cfP8LiwiqxSahYKZXbwwoLcy1mL7+EcTGD410+81O72F4fYvZiC5O08MsZLklJ8za9XkqtMkwtHqPILcbn5HQwLjDUrPCRB27lYx+7heXlGb76ld/l8sU2FTtWIkx6xThCCD+wF9H+vVr3wlG/viP6g7Pmrr6WUk5JMdZkRRFaW/ft5K//7Y/x3/3P5c9XV1fphTzu9tJ6CBaI+lzknPGpUX7yT3yEO+/eSXf1Xs6dusjMhWXmZpeZOb/E5Qstzp2ZxxU9qtKls9Ym73XIVXCVClpkaJoGhxQqUsLX72Qgoys5xunC+dQV57dscvbiGsNzLaw4li6s8uX/+DiP/L4lTmp01hytFUPQnFojZ2Ai0BxvMLptgtHKJt44Mcf512fp+JgcobIc2aHZxm0nnu9Mtk7kK3/1fz/Dr/zp7VfRwWMwlbAcV/Siybk5OCCnZQJOA9YbMlPWHVy4vm8vBAqU2Bsi9VjNGcs9Ay5l1RjqYQBLSls6eO+ABCEiqGIFnAkQUgIGcYJqF0KVSDwqS0hwOB0jX17m+JMLdP08Z5+FH//8IA985BDDwynfe+YZzpyexffqRDKI0kBDytiY5dCtu7j3I7ewOm/5znde4anvvYbFcPNNB9m7az+jY3V2751gYOASg5Mtzp+GPIwS7CLbt49y3333cOjQXmYuXOTrX/0WZ0+vYBiA4BFyDAExrtTv6vfChMJjKYuH3pTz1RWPMaUCPVJ6BNVy4q7RAtFQJl7kNBAmgjAQwEuF1BRUrrPNqJRcq0ooAeOOCxRGiQuhEiyKo0WKr7jl5ngj01Z6jQG1Zru4ljpt5XHsAzZEqPP40IFQsHwhcPl1z9BolcN37eawLT+z11MuXZ7n5InTXDy/wOUzXY48M8NzT7wGeZWhwjOw9AaprWq7jS85dNfxIHGaY71mmgbNajWimsMRKCiLh0XWI+0VRFVlYtMQe3aNUa1bdu0ZYudNY4zvn2DL5DYakvDr//Ir/NobXybzSpCE2Fv8mh86e2FucuA/v3H8wuZrG5WCGDIfOpkzWRvFaolw6HqUJVr2UbxriFc3KsDaJ2YMqNAU5aKWiZ4vPMEFojhCQ0RQi2hROn3tUzaAQnOMyYmliagSJENwiK+j/Th/wFa5dH6J3/6tr3DvfQe5/6Gb2X1gK1/+8mMce/Uy3aUetSRm267d3P+xvey7eTObpsd49pmX+LV//ztUkzE2jQ/z6KOP0ct67Du4mztuv5Wt9+5keaHgkUdf5fLllC3Tm/nc5z7Gpolpvvv4kzzy8HdZWeoS0UC97RMoS8aAqqKieA0YDSRRQpHnpaYwSuwMPgR8yDGmvNFi+kJCZfJX1nEoSYpNSairwahSyDrhMVw34wj9aNloOYukEO3nMWV8kTtDXKueG9u+uZ3NXgku/tffu8C//c1vs33HdLXophUbCgyOLAhRHFEUHf7Tr/8Wj23axsFDm9m9f5jmeINKo0ZzcIDJqWGmtw1gxNBeCvz6v/gerzx/ktV2OSvF9dZIKxX93uOnVbUcfPSOBpKLEow6soKaWPxAFQNkPlAbbrJz92Z27q9y4OZpNm+eYmpqirHxQUYnI6Iq5LaC8xG2gN17N1GvJ/TSHlYiVHPW2ssDncszk987/8vc+j/85jUXcvLYC8x0222xvhsoK9FmA5q9Fr16NwYi2gcxBDIpeURVLEMaEasnCx5jLcbGhABFSMvJrhIIISOoYF20oZ6IKN2sWw6kseXOKkHBRBjnUemQxEOsrRb8/tef4OLCJT77Yw/yxS/+FI899jQvfO8Eu3fs5KFP3UZ9KOPRR79JtV7Fmiabpzfz5/7MX2DPTQnPPvcs/+qff5WvffUZmpW93P/AbRzcf4g9e7ZwfuYsO3dtJUsD/+W3fpPnnj6GLypYhrASYZyQFxkEwbkKQQKhr/Ceh5SiyHDGEiUOY5RetgL9qr8zrj9M1JUFRjEohkJKAxkAxompiCMnpVCPe4/SpHrNV9L39EpuQkDCzNZ9B9tz3WMb75qbPc8z/+oXzc/9ra8ezkM6ntDDmAj1MSMjUzz40E1kec5jDz/M177aYWxiiMnpTUxMbmLPwV3cdMtWNm9rMNhsEHqwMH+OXm8BbydoOcV3U3A+HNi3zTsrFIXn7DsaiA0ULkRxJzMuktJA+q2hhw/X+Gv//c9w6K5pkko5ECb48qb2ioys52k0A9bW6bQ8eTcjjmw/dg2Y4Om0lyuDyc6hvwfyjYnxa9b5mXMnWZ0a8KOxXl4fg2a0jHuNygbPL7wHBMYqpKZ8OQ81NWwOMae1x6zLscZggi3P6QKFrqL0qFQjYqlS9AqCFuS+RZRkVAaahCAUPpRIWG4R48oWb80ptWtixAxy5MXTnJs5zWd//AE+9/l7+PxP7KbZqDNzJuff/eq3OH7yIg899FG27axz7wMVPv5TkwyOVBjf9nFefukyr594mG7Pc+TIayytHOUX/tQnuefBrawu9/j3/+63ee34y6hWiMwAoYjwCjYWXFQO/sFYCt9FbcBFEEWOIivwaUrwPfLQxSaGSpyUxMYip8gUZ0tlSx8gRIaeCbhCGS0sW62jGgIpBYGCyCui9rpG8ebNbZ3XpUAqSteEkIf2+b/81w52/unffnTjdxcXF/lHX3sx7qys3Fz0esMV8hKNxTA2Mcbnfuo+JsfHuHhulUe+dZRe2mF28Rj+uVN86w+eZ3R8kKnNQ2zfNsloc5AjT5/E55DXE1argi7k2KrKrp2TIiiNeoU/eMc6iAmIVWe7mWjqoRqXpEX19Lor1BsRzVqTtdUWl+bmOH9unvPnZllaXmPv/q186nP7ccHzvW+/yu9/9RGWF9s4iftNUUq3264MEY1PgTQqI9cYyNTOTez4xft96x/83lF/rpcHNFIUQthoIH0vu9V6/UOBXMr+t0hhIkSMaMolUxBMRFWjvi5ThriMoWHHHbffCkWF5596nVYrZ3ikwk2H9zE1cYA0TTl24gnOnFwmzzIiUSACtQRVtF9593nBwtwyJ44f5667b2FycoJuq0MIMDQ0SL222PdMQhI74kgw1hDFCZVaRG3AE1Xb3Hb7IVbXEp5/6lVmLpyjMdRk7+7DjH/xAI8/8hInTl5Ec3A2IivKSVTOGHp5j0J67Nixmf0HdzE0NMDq0jJHXnyZSxcuUmkIBw7uZvfOXRgxnDh2mmOvnSLtdEhcE8Tg+xVuK8KYWCbU4LSgMB4l4ELZMfqeyh5XeXeh3LwyR5r73sVf2v2X+eX/6UH+j3+7fN/MuUv0sjW3Mr84oVlwIjE+5BTSY3x6jImpYfCWxcU1hJi77rydm28b47lnT/Hkd19labbN2ROXeM4dpeIiQhZwYQAZrJFVHVEeEEzck1DXoMhbiO1dC/MaBaM2TgsxRRfGHKHfoH/5/CyPffMVjr5wkVdefY1TZ86ytLzKaqvN3ffey6c/uR+ngzz+rWf41//8d3j5+XP4oortjwwTUfJuFnVWu5PHn8HdMjWZ/c41BjLBP/jix/yf+5XfP1UYyQuRKFItSX/rNRB99+0Nsk7JltJAMoFqCIwhjGAwJicXixDjfUZSj9l1cC933LOTn/zpj3Pq2BIvv3QW7XT5xOc+yi/8yY+TpaWxX7y8jV/9J7/H0Rda5fLwUdmwJKDSI/ddqgPC4Vvv5Ke/8GnOn7nAv/9XDxO7Ovfccx9f/IXPcdupM8QVx+raLM8/d4TnnriF3Qf289xzR3nt+Kvcc98ePvv5mxgaCDzxxIs88ejLrCwU2Erg4E37eeihT/BLv7SbP/j6Ezzz9Iusra3iTAUfDFoUFCFnctsYv/BLD3HvA/tYW1XqNXjskUn+93/zG+zev42/+Be/SDVp4JxhdfkO/sO//jqPPfIMeZH2yZwWRIhRxoJhlFJDt2c8gpKEdy8dt8Fk03XvXtJ9ekZJI0019t2yae/Kk708M8/yynKyOt8a8Z0C1QoqBZHpsnVbk0atxtGXL3PmjVlcFPPxT93OJ35iKxqUZ773KlLUMVlM3g2oESwRhc/QRoyvOAZy6IHtWo1LJO06dZDIWjRymXofzErLmtFhsigm9g3Sy47f+dXXCDgWlxdpZ/MQL3PXfbv44s/fw4H9ozz18Ov8i3/8+zz/1Gk0rRNRRY3BmajkIqVB0oXWns6RE+NVKzPXLOhMOSD7ue2un5lJI3q9LNQq6ygLikHecy3EaBlm5Qa8MYgXGkHZbBwDocOKGHxhCKpU6g3uvPtOPvXZmzh4eAfLCx7rDNt3TvOpz95FpWn557/yL2kMNPjLf+UXuf/VWzj68jcICmgdK3XULOJliaSS8+nPfJJPf+azHD16kq9+9RucObGKsx1mzjzM/pumuf3u/dx21wHmF4Y5fupV/uk/+o80hjdRrTe4/7772bq1SXNYeOHZJ3nkO09y4VSECdME0+Pp5QvMX/4aH/34YX78C/cwvTXmq19+hIWFNpFtlIGoZtx8eBef+bG7eer5J/jKV7/JT37hM3z803cwc/ksd9x5iInpcX7nd75MJUrYt+sglbpFbECLMmE16qkWOeMepinHQufiKUy5cGy/P1LfZYx1dbOb7Vfo18RT1G2rOZ2siAKvXLVhd5TNu7ZUFo4eaeiaYhki1za14WVuvmOMapJw5uQK7TXP5s0D7D88zvD4AFnWAi1w1iGFK4HhUK4jIsE2ayTWQi9DEFFrTAgeNdcRbbClyGzhtdDQ7uLzJu2aJVoBq10W5mYofEIhHufggY/ew5/7S5/jtrt28Morr/JvfvUrHHnpBFkeSJzBWUtReLIiw2GJvCGbW9u/urS0uxfZmf/t26/z1z6xG4BzL5zh8M7PUCAtrSXtbsePDODA2nIgpb434wh9j+NCiaIEKRPCSJVRDOMF9CRFJCIiIu8EnnnyeVwyz7YdwxiREr2JDPVGRCBjaXkeEyvxgGFyehjjFM08Ig5MTJCc+iD85E9+lpsP3cqLLxzhm3/wPc6fX8S5QYo8cObMJeYWLnHh8gwqsP/gDh544H6SSoSNHIWvcPLEKV59+UVuPXyA82/MsrqSEcdNNLc4M0jWXeH40VO0OueYW7iJW28/zC8MfoHf+I9/wNzlFnXXIFdPHIOLodVZYXbuPF5TRieb3Hn3rezat4WRiTq33nETFkfeUVbby+Qho2LKPn2nnmrh2aYx4+IQLQiUU3MlvLftav0ZbOhVqBIM9Aj4qmuPTNZX32xpL377GQ4eunmqWMvGbA4hWLxJ2b1vnAM3b6Od9jh+4ixp6LHrwDC79o3SXi04d26BPBUiK0RGEVKCdgCP1mvE9RpFOy/H3YFKUDXK9SvpLigStFBFQ7eHhkBvsEp9cQ0xq1ip4hJLV7scvmU3f/4vfp77P7mPZ556nn/2z/4Djz92ltHhSe6+8yA7tu5moDrEt7/1GK+feKPsMckD+cLa5tlLFx+649P7nz55cWmjM2Zg6yaSoVFCszpv26dm2gsrW/P1m3oVzeTdPpZ1lx6FktruBXICCYFRcUyrZSH0yExAcKRtz3PPvESwM/z0z3wSaw0ihgszM3z30e/ykz//CX75L/xZ1Ar1ao1aPcJZg6fAGEMWehiX8/GH7uWhh+7nOw8/xZd/9zFWFz1GKiWdQixiE9bWlnj+xZfZsn2aO+68ndtuu4ss79LqrFGrjpF1lItnLpF1qgTfICugW6xiNUJ8ndjGiEuYOT/D0uoMC4uz/NRPfZE/+Sd/ml//9d9l+UIXK4bTr5/kqSePcNtttzEyNsyO7VuJnGV8cox6s8Jya4WTp08xPjLGPXd8hDuO38KLzxzHd8uOyIiMEa/sdAnDWLzPCBJK8CQI7xbDWn8W4ap/MH2WcEdyijieG5senufNC7T7H+mu/uLWdLk7XumTIqNYuOPOm9i+czOX5tqcOXeGWt1y9/17GJuu88S3T/L6qUulaolC0B7W9rC2Q/BdQiMmqVbRs/Nk3hMEtV69BnD+OjlI7APiQ54bNOl6el7JJgeJzs0RpIM3PTI/z/bdm/iZP3Mzt3x0K8udFi+9MkOQYX7653ezb9829uzdwY5t27Ea085nef3scUKvRkJC3korc5fmD75+ujGQdrINA7nvgfuZeeMc4/fdfv7VE//sqy3nb+kWvhb60j1chWS9m6Sw6I8Yr/TJuC0HqRESD00VdkrMBelwUbsYGjiqJKZJLR4ishGELk4svbWCE6+e4czJGbpeMLHF54HlxQ7eC1YTrElJtcfBm7Zwx213cOSlU3zj68+wtFQQuwoh7yHUca7CyIRj884mI5OWjzy4jVrd8MTjb/DMkydo986yZdsk27fcxD13foqDB6c5fuI1FhaXuHhhjsX5Fq35FnkvJ4QcLwmrSznfe/I4YxPP8dAnHuTOe3bx6JeP4zPL5YsLvPj8q8S1gwQPWeZprfV4/eQMScPSaq/yrYcfYev0NJ/97IMcPLyTKKqQtTzOGJIQ2IZlV2Gp4ukYT45ivRAFi3+vjbfrDCJVLKVKYJeQh6T62Pa7dp7tXrjSS/cPf/cs+z+y1f6Dv/obe2xHmol6CpYYHmxy8OAtDAwNkxWGT372ENt3DHHHXXvxGnj12OtcnL1YSpmanDzvYUyBGIsWDl8tsbBkdo0eSqahSHK6KFQKrudBQIL6oKq2CLg84McGqLgGnd5ecpMyPu34M//tT/CFP3UXteGUS7Or7LttF7fcfQ97to0wMp6gpCwvrHD+zEVspYuJC4qOkogjZLlcvnR5a360aPo8zK5/9l/4a7fz//27j/CNX/wrvfGbDxxLXZHmuamtt7GaN3kQve6upYgobmMHK0UcfAhEqmyShJGkwmUPIe0PkTEJRQp5z5euS5XIJQwPbMJKleWleQaGB3jjjQu89OKrhMzgNMKHDtVGxqc/+yATExP8+3/7e1y+0KPiRqlUhMHJAcanhti+fRvbt2+hOdxgYWkezUe5cL7FN77xdR599FFEDY3aCNu2nWLP3p3sOzDE+FSVex+4Ce+F1eUeSzOzXDw/x/Kyp9OGTi+nk7c4+tpZPvmpHvtumuKJb54hS3OajQGmJrfgC1hdaRMmY159+Sxf+8q3WOndxn0P3MWnP/NphhoNlue7HHnhON1eB6UOIlScZSrUGM0FQ05hA4UolaJsVvKsFwr1ui3PepUW/Pqz9OUsiHR4bOT4v/+Ff1R8iW9t/F6v1eKlbx8fXFlp3aSZxM4UeNo0GptwdoisDaNjTX7xz3+OtSVPo6mI9Wza2uSe+w5y7liLdNnQWXKEPCfkIMUQmHF63S6VtS4q4NUXGMlQvUpq+m0MRANIEPEETCiwvZxqvY6vD5C3DXlY5sCBfXzsk/fSGDF46TC5aYih4a1oGpGuZbx+7BKn3zjN6dNnOHHsPM999wS+5zEmQgqQtEtn3o6NNA5MvfR3fu7kX35pjX98S0lO++t/62P8hbv+Bj2000LzlJiKheB7EKSUmhHB92sk180L9cqIGNOX4PGi2FAwiGHK1TgfunTJycSBWtaWA08+dpyV5Yy8myPBsLiQkfUSdmy5iU7W5cv/5WFeeOo1Ih3AEdHJl6iaQL1epVpNmJiYol7ZzMDAKJsmG0xO1RiZsDSbTbody8njF3niye+xfecWPvdjY6S9LmICdTuG9hKOHT3BwtIl7rh7D2fOHWN+YZbdu/ayaXyKXdOTdG9K6bQjlpeg3SnwIafWDGQZzM8tlROnxNFre5Yudzl4YD8jjWkWLnT4yu89wsvPnaTT7TBUH2f/3juxGH7/q8/yB197HM2kLBoWOVOJYcrGJD6Qa7gyy17XMUJ5F+GV9MUDcyx5OcROHN5EtMmgFq0k9dqZRjIFfc2Eu/7eV/nxmRn+H7m/Z6279pDJCrEaUPW01lp897HXkKTHrgMjjI6OMzpaJ6pkaASf/MwdbJ/ewitPn+fMsUWee/okp149i3YdwQ5ANETRaaFFq1TkwVC4QkShiIp3NpC0rDjUsM7mFNilNYbShJObB2ksvU5cLJAuObpzC0hvO700sLyyyuKFGc6fXOXVI8qRI6d56chxVldXqQ3EjDS3MjSQsTyXkWuBy9oML9e3jjRHf/Z/UX3u9JOL1wgGry53UEgJg3lLNhHLMu1olmqoUgkNutbTMzmN/J37EGw/I2z3DaV0n+tTLQJxUA70qnTUcZoVFk2PHMeF08o//l+/AT6nKDK8ge888grPPneKwZEBsixlcXYByR2xeCK1FKZJe7XNw988QhIP8oU/8TGyrEtSiRGxLM6vcvbUZV567klOHlskyzzdcJGxMWgOBEYHx7B+C5EfgP6ws6GBAQbrk8ycPM7D33qdmp0hcZbh6So3376fzVsmqA3D5LY6xtRIe4HHHz7CY4++Qq/TI4oqLM71+I1f/Tbf+v+3995xkhz13f+7qrp74uZwYS/nHHSKp5wDAoQQElGkB0yyHwdsbAxOZGMwxphokpCQhEAR5aw7SafLOd9tuN3bHCbPdHdV/f7o2b0TCCRAtvHzo/Sa153utTszPVPfrm/4hLt3EI/HyYyNMZoZw6GenhcKfH3fPSRaJxNoS6Z/EFnQJGwDWhoaXMMFFWizZXJSYlA4oZw4kcMJ04tfl1FZLAqfehKM4JkMOIKK20QxrKFb5Ci1iF2qVe1ouGAxPDzOIizxXhtL9A6NnuMXslNbdBHHxki5LeiK5b67nuDBB2LMXzCflacs4JRT65g5TzN1ZgPJmkZWnlnH6tPrKfoeX/l2wP5Pb6au1MBAXRO2po7k8BFyspe4P5mKSLgWGx/3vP/1cxAxTrCMhNCKhSJeJkc8FkM6AmskHV3DbNtwlGRtLR19Y+zac4TtG3ZycO8RMrkyyoFYCpbMS7Nw0WTmz5nLkT39PHD3Jig6COtQqATJcufQlMrWsgr2vKjbS31NCisYNGN2NO+X2xqDAK+qZKGrWsDqleJNXoYHndKW2SpOWfpkdBnrxgikQPsGFepI3s0IjA4pBwX8bAFLBDERQqCFwDrRsMwRSXZs3cvxnmO0TWtCuTA6MkYuW6BY8PGLRYKyIgzqgKj1XSn5CCFobWlCSYvRJ0Qf6uvT1NYkCMMy0lqstvhhwPHuIv1Dz6GUxnENsZiDVA5+xVIqaHzfoqQX2VQrhyAI6R8aiph7RmMsuK5LYDW2EGA7+qhgKUsDMZC+T5uBZTpNnQ0iKrUxvzVcXmBxTIRv00KhtESGkhIhGVmhrMVgytMVLU6QlabkBS3xFJnubpUfyWOFB7ZITUuFZWvmMJQr0dl9nIPtgxw8vI1HHkqy5tR5nHvOGcyYn2byLI+mmhh+6FAa9Aj8OD4g0xo3aTB9IepETSskSGPtS8roOb8M8LPCVn84KJcpjGaIxVOEwuIIj0JW871v3c0PbrmXnrEhtFUk3DTpRIzTz5rBmWetZvnqeUydUUdtYww35rDpiQPs3HKIrn2DOE6KUqHM6J72lsymvS03f+At2U/tzPDJFZFxydpLzsFJuPtf+Mnm54u5wlJHSJEIXKyV6Kq7imNeDalLiBvDNFeR95L0VQJyOkDLKghPqInhZFzGohZhEIKM7M8iRpuN0Ac4SKMoFwp0d/TT23McbUN0aJC4gIu0EbQl6shF6NpstogxFSZPbkaoEB2EkZqhNUyZ0kxdfYJCMYuNhAJQKLQWBKWQgBCDj7WlCDdlHKx1cVW8qpU8LjFt0TqMPAeFRCgVKcwLhdASEYY4jsBxLL71SQnLApIstQkSAqwNJu6svynvw44HCD5aGBAKaRw8ESMrYcwrGytjvUqXQ1OJ5F2/vD/Pjnt3MmPl7MTuhze3hQNZL5QuhpBVpy/kr/7xPXg1LkeP9LJl41Gee/oARw708cSTe3nokR0k02lap6Y4e/lSps2Yzb6tPWg/RiAlMi1wPUOpHOBUhSeEjWZsIF4erFgVEcRYG2lJG42fz5OKpZDxJMYP0YGlb7CAGdPYuMvM2dNZe9ZaVi2fzYKlikltzaTr0qhYVJqVxirkxopECJ4KjqiB0OJ0ZxcNdfSc+b4jT3Ts2rRnAmf8ni++jtdyQ2nm2lN3FLpHKn4piMe1g0YSoBFG4LwKolkWQdIGpCswJaaYnoiT8UtkwhAh3KouWCRb6lal/rEWoW3UMhYR8iCUGhUopJa4KgkotO8jRAzXRnYB4CJkvnoXjjaqtZJMJs/oSIbauhSuYwgIcJA4rmDy1FqMKVMoZqoiQYCQCB3DlXEsPtq4SBkx86RwkSqONRJrKxiro1pERbJD4xDy8VRC4EYa1lIghEYEZRK2wnTrsVQ4TNMBZVnVcPutT+toEyoqBFJjcEmYOBKXggwpp2VHzazGR9d//Qf+OX/0DngS+vsH+OFfvY53fufny71SeHqqJPAdS108wbSZs6ltrCPdGKO2Mcbs+ZM47YyV7Nw8wpYXDrNx4zaGMsNk8zlGDg9Rk9pFf15jbQzfk+i0oFIpQLGCa6JaSpmoUBW/IitxfnHTAEJIIbAWpcEWS8SaJaaunlyugG8CalMxzr/8NC655ixmLWqkaXINqTi4jo9fceg8mGPf3n4O7j/KgX376eseIPBd0jV1+EVJUlvEcHFyf2//OZWd3fdZY16kldW2fAG1M5sfzhzve2Ohs3KhIk4oDIEwKCtwxtOt33FJDI4tUa9jzHNiGGnpCQMy1lBUhpIjkVZFXuPG4hhVVVY/MR6OxAcsrpRVwTgHVzoYC8ZYrFVVmRoPxoWztUYIRS6bp729n+nTp1Nb4zJQiCSBkimXppY6jvd2MTY6MnFnC7VB4UJoorkKDo6USCnRmkio3oJSEWc7kkyNPquIehvx8q0BpQWBtJSlRlqf5jBkhpUsFy5NNgpWbezEyfHbamAJNI6Igs3iETdxQisYkxVUXfLnF19/+fq58+fz5199VwTj6TrOd+2gc/Pf3XlaMVuY1SBdQhFSKiueenwYLZ5j0Yomlp3SxqQpaVad3sSiZdO4/HXzONq5nB37dtO+9xDtm4/S036USrEGbVOUEjFUPEFxJEuy5ONNpOxV4uqvGLC9WBdLSYSSNqJhRHfPsFQhjsCviaOdCOlZCUtMaW3lrLPnUdvmgDAURobZt7OfDc8dYsumbrqPZRkYGMIPCrzmqkuYNX0699z+IEf3jxA3iiBfliOd/fPnl1dN3vjQ5uzndgzwNytbAZi8ciqL3nhh12PbN24btvkLK7RghI7g6FZUW4y/+4oKdk1Mh7SGCqHipLSk01TosT5CeWghKQUhUhg8AY44QTEVWJSNAs3ayCZZAEZrQKJkJOVaxVyCtRFPXIDjxAgCQVfncaZPn0ZdY4JjfYNYA821SdLpOjrau8mOZZAiFZ06gCWMrOSUqrIFQ7S1RAYrpiqpyoQ9hcFEQnYQoaJl9P61spGzrAlJEzIDxSI8pkkP1xoCqyOz0ep/v+0JEhlPBFXwo4svFAVCxlRppLatbf333v0f5ffc/1fw1eg3jh0b4vavPjRztHvoitLIWKwWg3QsgfY5ePAwvYOdND/lMndBM+desIrVpy5k7vypTJ9Xy6RZKeataKYwfCr7nzvK9//9HjL7clhHESYitc8gm0GGtir/dBIExv5KPulJd1QlEUqFxlorhcAVAlsOwPdRNS42KdFZQ1AJaT/SwdH9A3j9Pjv2bGDn5u2071R0dmTpHygRakPr5HrecO0VvO3dFxBzYxw6eIgjhzcR0xAajd8/tqL7QPtlH/3mhzv2PH90wljPnaq44ZqZwQOf9LuzjqWgVWRZL0KUcJD21fA2EgTVqssxIbVlSVK61Mk4SliKxierKwSuQcQUVguCMBKvllZUg8MgNUgbEHGUTJTWVNMeO85VRU+IsEXaZBJtQBuHI0e7WLl6CYuWzCVRNwmLpKlR4QeWvXsPo32LI1TVviFivUVU/QjIGVWa1UGqjPpL47bUUUVZdRGuBog0YDBUHIGympowZJqBudJlunBIWYsWmpAQR7i/YLn323LZLUZbAiUpS4dhW6SYMF2zl03fPHvtIjLtgyduWj74NpzXu6djVX3BEpOWbJgl1hRjwcxWmpqmks0V2bahnf27jjFpxiOsPHUGZ569gsUr5tPQWM/UhmZGj+aid6AN1lM4jfW4Ko5TsTgvmqRViWW8tAW584udnQl/TmtwTaR/lB8dxbZ56ISNYAiVGFs3dRD/xvOYmGHHnm0c6xwgyE1GyTRWlZg2W/Kmt6/gDdedysw59fQcHUSrPEKBFxi0IzG9hebsoeELnn1y7z353syxd/34eX7w1rPwi0XOFmfa5RedvS3XGxw9nldzpmiLYw2OeHVsvwQWX0oqQuEaQdxqHBOpBloRI1ACowv0GR8jHRASKxUahbEwIYFpq/YvL4JKi5PE5sxJ4l4iGutbW7UriDPQP0apWOa6667CVxakwAEO7eni8P5OhE6AjFePBV2FB76EcJUwJ6ECf5kcIC1IbZGmqhHgBjSGhuVGsIwEzSKishakIRZYPKP4Xb2MJtTHhMK1DoFwGJAVDpIJVVv94yot+iuVAu/+yA0AfPSh41x8+RT5mY/dNYOuXBy/TMnkmL9kOudfv5rVq+upic9i18YC3/vOEAf3HqPjSI49O4bY8EwfK1b1snjRYua0TmLd0930HLcoahFenNSkZkSYJ1aoTNjyVZstQkdjMvTLpVg2ylsFQghRnV47oSE/OoZsm4RTU0swXKHWiVPKhjz0wDOUdYg2IGU9cSdOYMaYNa+Jt777PK667lRaWmo4dKCdO256lGef3UZgHWJCIoXCLYUid3jw9O71+xfd97n3HvvgDx8BIJcd46xrXo/T4O7I9Kj1gxXmNBpBgwVtQsKqt8bvXqlH4tMai67my8r6NEqP+U4Mz0JtWGQkDCkBZeESuCrKXaWNrEMmfBDHYRcTQPsTCKQJ2jBV3nPUzZLSY3RslKNHOrnhxvOYsrAGayE3GLJx/U4G+7NI6qpi2XqCa3LC4vrlkWnjsSmqniiuESghmRz4zLMei0SM6Ti4wlIQkdCgshLPSsLx5sDvpFkiCKxCEZmojrhFdF1ie/Oklpue+vxtxQerw4/vbM3x9/90N6WB06aO7etd6+b8uBQBMxdO5r0fuoYzXr+Uya1QGouzbf1GyrkynvBIuA7zZs2kWMxx280P09Z4gLbGOroG+igUwZEe8VQCN+VRaB9BFssYGUkNaVu1bYmmGrxUc1S+eA4iOEEbiVTQpbHoio/xktRPbsMqFz/UaK0xoSAmaoiLBmI2BQwza04N737X67nhrZcxpa2B9iNd3HbTfdx5xzP091ZARkc41hDXDn7HWGvh+NjSf7WjXubRXXykZPnyTf9A6/IV/Mn3Pjpau2j+fb3CH8rpANdW83+pXo3wqJ4ADqGQEXGnai+WND5TQs0S67BCJpiLR6uGWBhg/QpGGLQ42b9KVhOJ6E8z8XdZDZ7xNklVgE5YLBIl4jgkOHyonSMHeyMNMA8yhQI93X2EoQAbR9iq6rjQ1TufnHitqN940uv9YjffnmT9ULUuSCJZZFyWyTgzHI8UIUr7qFDjavCsg4uDeBWUdy0QWPDwCIOAfvImaE08vvBNZx087d2vnfi5F/qPceNdr3eO9HafU+nNXZAqC5WOu1xy8TlcfPVpOPGQjc9u5Z7bnuDpxzeRyYwRcyyzprfwnne/mXe8/QYmt06j+3CGbZsP0nV8kIo1aBEQT8YoVooEo2PEdVXqVEwgjIWpBoh92SJ9QooqwmlKW7VX1JJiyWNKczOVuh50+RhCWGKuIjQZQiOQqsycJZob3nIBr7tuDZ6r2P5CO3fc+gL33XWQwuA0EA6B24+UkBQOGEF8LIz1ZTPvf+Kup/ee9eFTHu168jkL8LFPXU1MPoPXNvm5jLO/q2QqzZIIdBaK391W0xK1b7EOBWmpKI3EkNAhcS2oDxzqhSQtHVIqRa2MAQGBEOStwFSPZGciy1YTd8xx7BETeu7jhpd2QupPVhVUjBB09XTz1FPriU8tEK9x2fTMEfbu34/BxRKLvEUoY4VBCIW17ksIIdmXeFRPt6r9sScd0k6cVsfjnEqJxsASKp+8MsSNoS60SBw0An/ColP8TimWAbSQJFFUTB6Rcne5k+vu/fj7/rL80Y//1cTPPrt3Lw3Hutp6eo+/2xkuzEpoy8xpk1l77nJko2Hdo7u57SvraN87hp+P4eFhnH5mL5jMeVc04pOivWMud3VvIqyMEUuB9gu4Io2bgoH8CLFCQMw6BCIamJ4UFL+qy/uL9gchWCUie0s3ujxpSQdl0se6GZiahJY6vIExPB0SuIacU0CKgIVza3n7R07jisvPw1Uezz99nB/94Ak2PLeZYr5I3NV4SQFJH1lJ4I/aiIdgKuT3H5puN8baJl1zjSyMtU+UGBmTpRgvj9pp3tM9YWnh/HwylTCCsihgpY7ska1C4UVizRg0Gi2D6rmpfq26nyHymHCMjRx8q7lQOKGoKEhYmGmhUTi0CEmvDekLfUbR5G1k/FJyPHzhVJvk43dxEZnv2Ag/5mgfYcNqUqSR+CgBcZUkyIY8eNtGDu/vwU24tB/ooe9YliQpBIVI/9YEKCvRE56Atqqpd+J0qjIDKDpRgMa0Ia0taaupt9AqoUVqGgmpt6CMxlaLfmMlQfWZTeQs/7Knh62q0UgiawQ5AeaBUAhCaRE4xG2ablVmt8oUa2bP/s8r3nPjpksvvZQ3/fnZJ57sniFmr53iDm0YTed6B3EdzerTVrDkzNkM9Rf4+W1b2L5hH0rHcUQ82qFCUSrC8ECZaQtrmbN0LjTtwnQrGvMxikJSaGqiMjVNrGeQlkKIFiHSaDCxams3tMoKbW3kpPUyAWLAahG1Bx2MiPSVYsbHHe6nr1BPPB0nLlI4JsC3ZSrSsGDuVN705vO47PWLSaQSbHrmEDfddD979/TSXN9E05w2Gpsc0k0O9VMasYVann5gF33dY5FqRk8mNbjh8AXdM/rvq4z5Qz94IuBdF7k8ffA+7O35UtP1i28eyhQuPFbUq+ZbB9eW0SIgcsqr+uXZ8WbkuNC0fNnswFTvkcpGcwFOeobx7aFMQNJAHEmtkEySDgNC0Cs0vTZg2AaExieUmkg5x4l42iI6VayQCKEQKrplWTN+rwqidmsIwqTIjznseHYIi8UPfEITwxMWofwJSzlwIrdeEfH0xYSgWxQg45pWSkWkploELUIwWbhMQdIiBI06IBH6YKIzbhy2Y06EGL+J8rEVJ7to26qxThXjK0BjKUpBO3mGG9XO6cubHr3zB98Lvn7/pyee5e+/t45/ePc54to337+8dHB0pvItJgYtM+pJtnh0Hx6h71iRoCJIeG4E90EQBpL9+47xzFNbuX7uBdS1NGCTUWu9VqcIXUl+8mSKtQnqD5SJByE5aZEGhPWqp4c20kpjrUHZlwuQXzhSx7dMKATaD0m3j1KeMQUaEpQHfULfkPIEK5ev4vLXXkZjY4Kh4Tz9o10sO6ORS65eyvS2qbRNbaamJkY85aHcOJm+IqJS4a7b1yHCFJVKs+g+LM/cs6N9yU++9cZnvnp31PZ74vZv8eX3/ohJi6bsf6Tz6bufyRyfnyglU9ODWoq6hBWKQDmE1amxtCaqAIya0GP6XbswBvCFQAqJIxQpqZjkxEgqQb0JGAmKjAIFHam++zakbEMCnMhkWgiskJTcyAgTecI+m6purlECa8PIkUtJpBPpAIRKRbvPnCDjWxVWwZgWxxiUtghj8Kqqh64QTClbaoGUVDRJl3oEtdaQ0pq4CRBofFzM72zAGVkijMv3VGGi0ZzGCuKhIpQOhxIlRpJmqHVa67dnrZl/+Njgjonn+NCXbmXTY4O8r+eOeV3HB/5PqZJtS3oaqSyJWhfpgUhmSTdYHDmJUKcQ1kFJiRUZhkf76DnejTE+OswRR+FbQxZN4HnY1lpqB4uUxwpkhCGOqmqj/OKGty8/B/mVd1phUUZRM1DAznPR05soj2ZxtCLmC0b7hxnMlWipJEkn4qw9exVrTl1GzPNIxD1cx5koHXUY4Hia6bPqSNdZ+vvLKFVPkFezew9kr//0V3p2PnvbtrHx14431PCtb99XPHXlwjt2jw2v2dyVf01tUCvjONFGtAbtRFBoZS1Cg1Mdi74aNvdGKawUkdeGCXGNIW0kMalIS8kUmaKMpGQMJUKKQpMjIGc1JQwlawmsJRd4VKrzDKWq/khVbS4hIrddg4DQYkyIREROvFXLuHGvFKEDFBbPQsxCzFpiVlAjXFLCI6UUs40mbQ3KKpJG4AmLawyOMUhn65svAABUWklEQVTCan1k4VXoBQrCqp3EuJCcQkgQRiKR5G3ATjPgq7qamy896+x7nvryo/qP/umP+fzdnwSgzmnh/lsulue97j8uGTjWf5ajNDb0KYeaY8dHKGQCJk1q4OwL59O9Ywt9xwdxiIIkMCVamxtZuHg+0hGMDg2hMyVcHErCkq2P4UtNbdcQxg8JPIdkKH6jnfHKAsRaHGuJ58sUCmWY2khw5BhqrICLw9F9h3n4kW248TMplfJkc0MUS1kymVEKuSLZjE8xH5DPBWSyRfJjxxnt7SW0JWLxRggF2jduf0f7a/bvXH/fbbde/8gHb7b2AkfwoX+5hi/+62MsX7ti39HPZr88WOicd7S3tHieqSUUAt+WEFYjRVhtKshq0vHquBwaiJQJjUVagYvF1RpXazxBxFRTkhCJr1wq0qNAjIwJKFhDyRp8YcjgUDSC0IRoHWCo1jraIIWswscjkpexFkcKpDEYbaJZoIiGfZ4ATwiS1WBIC0VaOiSNJC4VcQQtYRnPWIzV1VRuvLYw1a6a5GVtvF6peqXQUY/MnpDVsEISKEHJaI6rgtVTkutmnLn4O+u69o6c+tZLWPbmBQB86aYD3PUv6/i03jNp6Gj2osJgtiEpQlwJVit2bDvC/p1drDpvOm+6/jKa1Ux+dvuDHDrQjTUeqbjD2nNXc855p1DO+xze10lptIgnXcqeIphcC+UKzmCGmI7sGoLfsCv3igJEiGh4pSohqmuI4VPTpJuSuNkcWEk+U+C++x7j0J7d6CCgWChSLJbwfUNQEVQqDmHgUiiXKYaj1NXkOfeM+Vx03mzWPX2EPXtHkKGhPJqfeeRI6f0f/nH94dFk75F/uPkg//D2Bfzln13Ce6/7vF22cs6GbT3Hbt2ZLX68tpiOp10X6VeI6QDXGkSVfx5Uv6hXw4k1Ggsx0UCN/tQ4WFwL6BBV9ZUIEQRSUiOhUSnKQuFj0RJCE0MbSWDDKCWsdsFCG9VLodEYqyNN3KoMqDUWJVUULEIhhSBmQzxr8VDErCBhIOaDaywuQVUHJkLP2mojYnxOYxAgJcIqlBG/8yAQAVpaPGPwrMKJ5vgULWRdGNBlujz/gJ3R+KVVbzrnQOXgEO/8y9cA8MEfr+Ppdc+x+u8anPU/2vIaMyzPTQQQcwI84YCJcWhnP089tJ85S9qYMqWBK2+Yz+TZJbZs3E12LKC1dSbnnHsqjU1xnnn6EFufPQJljcUhSLqU2lK09AV4uQpCRTTsyoRaqv3tA8RyQtsWEUEUrLFoBG5/hsroKMkpdaiuEawOKQpB9nAPA3sOgXHBJjHGA+mgq5pYFk28xmHNGQu44vKVnHvOQprqG6mrf5Zj3XcxnM2DXxbDx4au2vvYsW0f+vC7v7hr174JX95EPMZD37mlPG3p/O/F5qdmHzqQfcdU7TqTPEHSB89ELcq8FQRONKTwXoWRuzT2pHFcRLYy1aI4KkQNxkbphAWkgZgVeEaSEFGXJ5KWCxA2khiKhpPjvXgZwc9t1QHXUm3MR+mVRESjk2rOHyGEx3l61cm4tRP+HRYoqsh7XFTdGSeuwIqqSSuolxfseUUnSMRLk7gIPBRaWMrK0iFyHG/SPanpU7/Ykkg89tzn79Ffff6zE7/7jbeey/zLPk28tXbpwY7Oj8iRcFLK+jgmQJkY1niUMnD/T7fhKMk1bzmVGQubOP/S8zjltOVUyhXi8TrSqRq2bejmx//5DEf3ZYjJGMJAuSUNjoLePnSVIIeAkoIYckLBxP7uJ4iY6Og7AMUS7kgBZ1ILsq6G8miZQDrEQktcuGjrYG0cZBwtQoTNo7wys+Y2c/6lZ3H6haew+pSZ1DcphBWcfvZinnhiI89u2EmMBJVBGx/aPfj62+9/4emf/t1Z60ZaBvmPq1v42s1/xkc++U0++amZPd98Z/e3u49tWtqdz5+eEmlqAAevSucEq6p2Ba9CgAgToXXhJEaiqE45RIR1MlX9LTsxgLQIa6ozknFPXD2h9HhiGsIJ2IMQJ4HmbBXucyIwx/0C3Qnw4InbWPQ+LOEEA0NMtKmjIWFEOJPVfzvxfL/rARIFnZIuxkLZagLPYVAUaTdDZbd56q3zLzvj3r2bDgdfe+6v+Ko4ESD/9J2d1NamEnf9/MnzMyNjCxq1wFU5rC4RaosjY2ij6Wg/zs9+PMjwSCcXX3ERi5fPprG1hdragHw2YMuGw9xxyzPs2noY48cjyVUXwqYUyUwFmy1MmDGJkzpPrxSC6bzSo9Q4AkKD1JZEXx7bNhkzuZ5yZoiygJrQRWiFJ2MEFkJbRqgyU9sUa9Yu4eIrV3LGuatpmjaJ3EiWA7t7qa2tY97KSVz5urPp6BhgsC8g4ScpHs6sOXDw0J9++N6pnXu3HZrQE/7apz7A0o/fz7y6ZZsKncc+NXqk49NH+4dW1shmEtaL3GeJpvzy1XEoniDVjO9dLaKUKSIdVVuZRqCqOb00J9zQ5UnbNZot2BeP8U5Ciox/eePateND24kplhivB53qzCcK1kge1KCFxVYv2tEubrVtraqnm5rwMI7CtHyCZfI7pJ8REkEbSwWFcFz6KdPpjAVmUvIx2+R+Z9v6dUM/eOYrfEt8bOL3vvjjnfzlW1dwzQd/eGbHno73+CP5xJTWBk47fQ3GQHdXjrFsjkLBUMoreo91c8ctj7Bze5Hlq2YzeZrAjQcMDY6yb3sHOzYeIyjU4MkkoQlwalPQXEvq8DCmFImSGxN5UzriN1F4fsVdrKpur7YkiCEHC+SHMmSa4vjpFPFiBWkFIQIhfAInT22Lw8Llkzn17IWcf+lpLF41B8ezaJ3n0P4Obrv9EaZNmcFb3noVF71mNfv2dvDT2zfiVBxEIRQju7ou2Z58/oqr33XWd5fO2aT/48bTotz1s6/hC2/4sv7Ax//ooa9//iuJrDP0D9sHS0umVgSTnASe0Xi6/GqhtSbwVOM5vK0qX0hLNXDG7QJklSty4uPXJyt4CIup1gX2VzQWjRAT/IRfhbYy1ZNm/HnGTzErRCSPBDg2AnaOE5ZOOLSLk3k/r8rpGscjEJKxmGTA9TlkRrSdXvPAstMXf/Jvf/AXhzY9foAfXPKVkwCxljOv/Vc+8tl7mp95YNv7wq78yuleLWuvmMtb3nkuVifobB9maPQYAwOD9HYG5HL15ApDFHPDPPN0F/lShjD0CSsGXRII3yNmJSb0KTsSf0YTaeGQHshS0hotBQXX4AhBXAuCV7tIR0AgLUpYaqzEVgIqPYMEi6eTbmshfqA3AvxJCG2BmfMbuOrac7nqDecwZ1ELWkLvUAETBExqUPR2F7n/vi04cgstLfW84foLef2bzuXwvkF2belGGkh2DdeOKf/dOya5e2781Bs3NE/arv/x8lUAfOyuP8edHg+nr114d07Ujh7zez7WlbHn60rotiGoITKfrFj7qoTHxEOMp1DV06J6UBurquKociJF0lWUoJ6AMKoo/+elPRSj00H+0gzqZOtrJkD+44ir8SPnJLNsEaVzRpzU6h5nE1bHjVC1ZHsVTtkYDqFwGKTEEQqlsCV9X21T/b98+Ad/sfsLf/EN+9df/tCLfv5zd2/jde+6IPXgbU/+n8Hu/su9rGDZwrm87s3nsfK8ufgFybxV0/ESi8BoymNxMmM+o6PHGRnKcOzYMJ0dI3S2j3J4Tw89mT486yKsxgN0KkVmUg1u3xgmXyJpIacsJWlIhQKFJBC/Etb5MgEifvnGNv7RGynR0iJCjZIgRwoEjiA2pYn4oUFGdTmSzheaGXMncelrz2DWslZCY+nrKfDYY/uoVIpcf+1SFixZwNJ5Z/Pshmd46JGnOPWM+Sw6ZQoXX7mcox09FIcqTBlzGOgYXH3kwKG/uu1r93yku7Pz2D/ecZi/f9M8AP78qx/ic++9Nfjzxz7x+Geu/W5sbOexht6eoRUJHzclxgtXdVI5eTJD4QRqSr7ERdtfGB+96G5ejRRRffZxnkc0u7YT5814ATteW7hmHNv2y5tenITYOvnu/tKK9nqi0pAWTlCaTmx/X0T6VeMIYyOjv5sJSL4gFkbgGvsSG8S+xFaY8Jwfd1YFJBIjISMrHKfoF5riz0++aNUnOx/bcrDhF/jd1lr++p5R/ub1DVzzp98/p+tI9wdNTjemjUedkqi4wYoyBS051p3BSY5SW+MSV1Nonh5nyrwWhEkTVhbgl+N0HizzzS89QF97puqa5QMat7mObBxqOwcQFU0MyCrwJaT96nWpX3UbfBk0rxACKYWxLwIPRNxdN3QRwmPUkxQdhZv3adk9QION0T27nv46SNgQGcY4ti/Hvm195LSmNJZn3b/exW1/9RO+/+9P8Mz63UybXc/7PnIRSxe3seHxI9z6jW3kexXnX7yARQsdlLEUhEQUnFjfht6Ldj1z6AOLz1jd8IV/+hw/GMpPvN9ULEZSTLL18bqHkzOS1x6bV/jsluaxofXJMkOOpBaHJAIHE9kUiJBQVqioEsVYCesEVcZ49TMToCX4jqXkGvIxA1KStC5x6xCzCteqifQtrLJcQ3QkoEAABEgClA1xTXVeojXS6urm1hNYp/H/QjRB9W+GYOIREvzSf6Yafuak1/eR+DiUqw9tPYTxEMZFWBelPZRxI3Mj7eIYhYvBqbarVWRsh8VDkyAkhSaJh4db/YlACnxXEjogpCEpDI4K2Jwa4emG/rGRpeoLNfMa3vml773/YNvsGb+00d73H49SH+tT137qp1ce3tT7yfhub/rUkXqSocOe9kOsu/8oY92CuAlp372Hz/zp/Xz2/27hrlv3ki0cx6ocmRGP7JCmqAy7+9o51r6ZdJBBY8g7tQxMamJwRQONHSPUDRdIIgmFiwoUdYGHZ120FScIUtiqE1eVC/VyhKlfNXM/uaMynnZLK8gPjZJorKO2uYny2Bgmk8MiOXZ8iAfvfILFp7QyeUY9ffGAPjFGsSfPkz8/zKrFazjjjAVccOEqvn/kKA8/+gxzZs4jnizT25+l4mjC0CJMHDVGunQ09/6Rdb1H//LjV/9g8/cfnuhN/cnXrwXgL299U/j5a7/UNXvNhf/c8dx+r/dw7/uk8JtKyoq045AIHLwgJGEVxijKQkfFqlKUzUlssSp0wjXRjMNWW4HFqpLJyfCTkz+lXyeJ+mpVQq+MvffiziMnnVYvxv0KylKeeG8WhNUIq1GE0ckooruuspAwkLYRmqBkoeg4DDqWYafEEVUuepPqb66b0fLVEDMkEPD0L7+/np05RGmopnf76FszPdmzEpWysEpTUEXyxRIP/nwdi5dP5vJrV7JkxXyS92zmyacfItV4IdbMIj9oeeqe3fSO5altnczTj2+gs2cIhSRlJLmYJpzeiGMleiSL0IbQ2irUR/xyivBLQIKXPkFedNhMuuwDCNc5t7yr/QK3e0ghI1BclAOoquPT+P9KSmGAlpKWqVMioONIBkd6VLSmMNTL9NoES09djDNvCp3HcvTu76Snd5CYa1l1+iymT5tEb2eOfbt72LvnCBte2EqhXGbW4vmk0glyuRzCV5TH/GR2dHRqecDuvOkr7+xuP7qUHTvveNGFvP71b+PDX7gxePj+5zarZO2unF9qHq7k0nkbxBzryCQuygpi1kOgMEZirKimItFOEhiUBccaPGvwjCEUgoqUE/wBe5JDtfzFI/j3ZomX/JeTU7ZARoLe48V91IKoIhJEgBAhJRlN8RPWkgJcKykJwXGlOeyWdV+M/c70pi9OPXvZVz9/818Nv7B/3Uu+m4985mGam+LNezfu/9CRLV1vNf2FdGMSvBofXacJPEt2uEzFz7Dy1PnMnDuF+vo6DHDBBacyf+F0Hr1nC9/6l5/wyHNb2bZhD4d2HaVcEcRtHEcLSi1p7LxWwsExwu4h0hVLTCgCCX41F3bMeMPE4FhLKBTFtqbM/NXz78LazljMZfPPvvKbB8j4XFpaUe3eCISMhBNKQYV0TQ2JmiSDQ8MkSyKKYr+CHh1mytyptJ45j4If0rNxPwN9Y4wM9zJn+ixMxWPj84fpas8yODqG8gRXXnMeN3zgIlqmpTl6+CD+cEit3wRjsjVwgznr+g4euemrdx6D/S+6kAfX380//uM/8ty2JypXveX8A7u2tN+jZjcfPF7JLO/Pj7UYJEokkMbDwcXDrSJZDdJGbVr1C9QncYJEhlM9WTx74hEjeoxP0cXvSXhMSIT+wkOe9KdrwDMCx4AyBis1Rmq00gTVByhcC56NbM8KwtKpKuxy8mRmNbzQeuaKd0zN6/vD4VLx6a4nf+l93DuSx2k8hZWvmRdff8+u93Zt7v8b1VtomtmouPx1C7ni7eey9MIl1Da1MNhVoLPrKHPmtrFw0UwmT61h8dLpLF42gyOHM/zwG+s4tG2AYsEhHLXEdQqII4xEuxK1bAbFOhe7t5t4tkzcgJQKvxogEnD1bx4gziu9I0VpxAm+mtEaR4JfCRjr7qVuzlSCOa2Ee0epq0BJJth0sIvEHQ/yroVTeO2lKwn29/DT799N37F+vvmV+3Bj9Rw83I02PrPm1vGGN53H1dedw4wFrSxdOpVifpA7v/00leM53GCSM3SkdOHAz/udCz7w+s+dtfrtT/QN+cH3//atL36niah99Ll3fTtT76Qf7HeO9geN3gW7gvw7D45mZs1168UcUU9D6KB0SByHE83ZKBhCZLVlaqvyOnaCWlvFD76IDqV/j4LjV50n4heaAif35ywCYVQ0dRfROBQhcG2MAEuvGzLilekTJQZiQZ9bX/+9dDJ155RTFu/v09p88ad//JKve/cPDpGuWzLpu//U/6GBXWPvpnegfuFkj7e/60IueOOppFrq0Epyydk5Hp00lVt+9FN+ctuDTJ3RzLkXLWVeXYyujlFuuel+nt+8GwePBisQUqFDjWsNJc+hMquB+tZ64j0DmLEycSuxxlARIb4UJ+jQ4sUNmN+4zRul4fbkNvyLslphbVW4eFx0C+KuQ2UsRzFfwJvegt9VhEqIEB4Z7fDM89s55cldXPfOS3nNdWdxcPMO1q/bz64dxxFkKJhRps9I8cY3n8cNN15K26xagoqmuaWGq64/n9HeIk/8aC/lYgHyMTlwNHueV+eIrli897EXNu/8408+yL9/6spfurC/+cH7AXJ//Of/+rSs8TZU9gw+ZdrHPtjRMXj1yOhYar5opMVJErNuVPhaUX3Iiek3VVkga81EahVWIeonf0KRc91vrx313xkq49elCZGCiKsSOe9FQhITwh0SIx1y0ueQLdIpC1ZMrdnUvGDeF2tPn3m/CXXpLz524a98pb/46vNMmiTVcxu6XtOz//iH811DTbO8Mq9//Vre8JbzSLWlOHJsgMa6RhYvaKH2+rX09PRyzz0P8vgjGzj97AUkUorhwUG2bNxIIV+kVjXg+lHBp4gCOlPjEM6bTFGHmI4BEhWDayNxvmj29HJVBr+W2v+iFKvlkveDoy7093Sc73QPyYkapIqRVScVo+MqgZFVF1SEIZzWhPYtaqSEYwSVuCBXyeMMZ1kwYzpzV88k11dk59Y+SqU0yWSKJSuaue7dK3j9W85i0rQGjh3sZ92dm2jv7Wbq4jZmzp/KcP8wg10j+L6B0BPFXKVlaKy3ceWiGb2LF6/sP/OCG826R//zJS9w4/MPs+H++/XVb7ug64ldO7bs7z5yKG/9TtGUqB0Nik0lrMijCZSLccZ7OhEMRqGwjiBQllBE0PfQFVQcge8Iyq6g4kYyQI79fTszXkzGHa+bxiEyoacJpSFEYK1C4CLxkMRxSGJw6VJFOuNBONQa37QrPvZds7TlO1e/5/WPbdy1t/K1L/7fX/nqb/rQD5kzuSl2z30P3XBoS8dflA8VZs1t9HnDNbO44f0XotJxHnxwE3fe8gQjR4eYO30qjdMSlPKCpx7fzdhonuXL59DaUoNyJf3HxjjW3odfqVT5PoaEFQSOZGRhCyyajn/oOA2Hh/FMFfYjBFpGXJtx+rgy4/OsVz3FqvJ2qqhWbBXhKiKuswKC4Ryiaxg1u4VMrkxD1yhu4BK6aTZvP8rDd6zHS0xibDiNrx1UvMjaixZw3Y2rOOuSWSRr6zjWkeEnP3yBp2/djmgLeJtIcslVp3H9Ry5nNPsjtq3rpFbXU8iIZIXYW/q8Yu2+5oOfv/ZvL9v4iZYX9KffdcZLb5f0hO5Oe+axse+4Vnrf/revLz/e139pVy58YyGbX62yGdUQejRKl2YnRVorZAiOjrjrUbliQahqQnbivLDGoE+eSQjxW4s9v3o9LVGdIUY3MYvFN9EMRQFpY5BGEFhJUQoy0lJ0NTlpyIZF8rqCnaSO1rU23bR2weLbvnXrWw8+/+9b7do3rPm1r/znX3iCRDKW2PTs4auHDoafKPUML1xQX+Hq1y/hHR+5kkRzPT+7bRs3fetZjh08TOe8ds47fTH1s2aQTsZQKs6R/WPc9aMtTJ3aQtvsqVxwzjlseHgPHYN9jKXS1JQsjg+F5jrEgmnYbAmvawhPR7ZuWpxk92ZOzJ6MOAHfeXUn6YAdB+hVRX+lqOpiV/kirm8Iu0dwJjfjzmmlMDyGqig8m6YSGJ5+ahvtvQX2HsyAa7n0kpW8/X0Xc+r507GihPYhl82z9+hBejJDFEay3H3zo7Q2p1i+ciZXv+08jnT8kNzRArW2jrHRiura23F10c9Na9/f9YWzz1/70N/+y5bsZz7667/AukvqAfzP/s2tW5pWz90THOp7YXTHrisyYyNzqa1fVgn0gkyhJGqNS60TJwkkUbg4VQCkifQ+BBN1mU/UDRuPmP/Z4PiFMr1KezXYSO6m+u+uTmGBkgwZkSHDsYBhzzAqzXApYK+yXtfcJfPua14z/ecjflgQL7OzvnhTB4tPmykfufX5SY/d9+z1IwNDfz3cU5ic1JoLz5vH2975GtoWTefwkT6eX7+NniO9xEScxtYWVMrFL/oM92cwgaKSFzz79HYuu3I56ViafbuOoEuamHUoCknJczDxBM7C6dSk0/Rv2E59royVBi0i2dXxlNg5aQY4IdLwG3DFnFf6gduqYJsaRzfIcYh39OoxC2KoSPFIN+7cKehZTdjDQ8QCCdTRfjzHoZ7tuKlpXHzFaXzko5czf0ULpXKFvbv7sMZhwaLpvPXG1xKMPMjWjTvY/Nh2Zk9rZtmyGaw5dwkLls9g45EukkCjFORKyIH9g6dUyubL27dtnTVn9szvJqdfM/wvn/02H3pH66+9oo9/7i0AZeDJL/7515/00nF3oL379OyBvitymXBR4MtpI5VwfnLMNNUECmErJHFISYeYjYaLrojk3yLH1l+tzvffvWR1pm6qJ50GrBQIFQHiK8bQqzUVLKNUyCelHq2jO9MgdvqTk/fWL572YO0O53i+VttPfe6NL/t6w9bSCOK9n3xw3qEd7R/rae97nT9QaK4RcWpcQcJ18DUYEqTrJrN6+TL6tg2TTMa4+A0X0jhvOru3Huaxh18gyGoSMk1vzyjPPrKbjj2D/OSmh+nvGqHeracYOAwBdQtnUr9sNn5XN3VHB0n6IaEDoVWMay9IC44+CU9YPVmUeeVDKuflRk4nR97EMQUnzEbGUwsrSFlJvGOYYp2Lv6gFU6jQ1FHCkQn6PEU+LNFWaznz4rlMX5KkovNs2zTE97+5gUI5ywf+9EJOvWA6BXEKfG2QsWMV5jfMIiViFD0Pt6aZUJYJAgfHDFKr0qhynHJHue1QvvvPMgOltrMuvPgHByrb9s1697+V27/3J4hXcKb+5Zc/hLU2eK753mcX/+j9G/ev25U62tlVv3ms/dw9+3teVxrIzE06Xk2jm2yNlyu1DcKl1kR01hiSWl8TDw2CSEndEplgvvxA77+m+nBOqj60iQpVbTV+qAmspigse5prwwFd7ikWs8PTprbumj190o+Xzpi25ey3nj/2o7+6U//z5j9/2dcqVnwSnst1n/9208ABc9Hggex7skdGL4xnRaxB1GB0ERP6PPhoD5WWPVw/qZk5Mxq4/o2rmRHLE6tLs+CKpRzJjHD3Lc/x/NN70JUkrpAQKh57cBOOchkbEMTcaehQ0KIllXmTGFm7gGyhQMPOLlpKGivLhI5DONGVBC+s1s02IksZWQ2Q3zbFElIghHzJb1ZUiTbjua39BcVfIyxaaWxoCI+NUlPXSHz2dArZdkymQEx7eNKjPJjhsXueZeWKufT2D/LNr97D9hf6sLpCnfD500++hQsuOZUlU1ZQHqwwa1GMVMph1w6frn1FjFsi2ZQk5qUp+Fm8vENYqafcpyd35Ts/3JKXlw957lc/fOq5N/31++/If+Lrz/HpD619BdDt6qa6igAYS3d9dwx/Rmf+jw7feumcJe65s5ZM7z905NyBY12XF0r+1Lh1G6RwZqFNcnIIjaHAhpHgt4eDDCXKyMiHwgqMCBHSTDQ1pDVVb4rqF2ZtNY21nKTp8AshVbWhq7ZdjLCEVWFqKwXWGrS1hI6LD/g2pOIYAs/ixwwVJyhaE3RZxxlSrXWbFy0+++aNR7ftfaEx50/70Kn63mf28oGL5rzizfP3n9iJkLYtPOZ9qmvb9tcX+yuNiXICR0cpufACrBWMZV3uu2MjBSp88I8vZd7sJq5539WgFAeGxrjluz/nmXs3ERQdYk4s0jjWiv7uDI5QKBvDmAq+FJSnTaP29DWYuCL7wlYS/SMkjaIoFRYdEdzGlV+J6pFx9XZ5Er/mZGiE+DUI5xeLVwuBkMLYXwIsCsRJmkG/3EuOSDuBE2CNS2woJH5wBDuvmeL8Osz+Ik1jEkc4FG2Jw5tH+MFXnqZ3aIjdm7uxZYujFQeeGuHBmRt509+uZsbiNoK5JaST5diRTp762SEGj2hWrpnBqjNnkUg3U8gdoX1PL3s2akZHk5icr0aP9i7cmS//TdfxsZnTlsy7c86h7DbAHxiztNa/8gotP+O945caPgrhVd+74+DcSxcfTrVPuXu4q1DrD8smFcZOrxT1wrHhgbm54aG5+ZFCoy740hNSpaTrJBwvHsN1HSPARJNqBXgIYsLiish624vs7DEieFGreJzu+yKlGRvxyTWawFqCqspjKJlAcg24mJzRJW1C38ZUoJrjQ/GptQeclvjGvBM85TQl+hcvn97/Zx+6oahtO0rM5DMP/PsrbNZE7+/j//xUur3v4FlH1/dfnxkYuIGRUrI+AKUDpFBoGRKoChKHuK7HH82w4b7nWDjFpfFd59I0rQFrFSM7Rtn7zCFKIzFc6WFNVZXMxnBFDKEDHKFxpSFbE6P3tHkkWuph7y6Sx/qoC0yVLBcgbeWXvM71SVCHiS7W+Aa3YoJH/6tU7J1XL++FuI4KFW1CxvoGcRscWttaGckF9JUHqTUQt4qx0SEeve9hKmGIsYqYl8AQ0l3pYN/xJEF5JSIJ6x7bzbZNOzm0+zh7dgxyyhnLef+fXcKCxVOx1kWHa8kMFnj4np387KfP0tGVhXINg+2Jadne3J9lDmy7emhu008/8Ilbb2qp46i11grx2430/uw9bxqfJg4Dw7bDtoearT+786Db/sRTsZHh4ZgOAuWHFdFwzswWJx1rLXvqvNFK+fxyoRQ3IzUJnbNJHQZxaaxn/SBuAz8ljJUx6eAqh6SO4xiBticsz8QvpLqZWATd9gONEaboxGNFGXMD6bklN+bk3LhXijc4B9KeuF8MlnaP7O0ZdaUKWxubKqsvXFO68iPnhyefmErMfMWfwedufpZbth5Rj9+0aUnX1oH39Hb2vzGTG54qAl+5IbjWw0OBdtFaRdpbIiQwx3AcyUh/jh99/wGMsNzwritoaE0zd24rl166lEeObaJ/YADhxAmFi5EuIREnP9CGsoLSgmaaZ03FOTRIfvMhVKFCScQoS4EvxQQN4dVAs73qASKqfWZlIt3ZQBuyvQOomjjpmZPJVYpkBnKIcogNQzwjiIsYBoUfaCpOgRlLJ3HJtRfR2txKULTs2trJPT/dTj5jSKViXHjpClaeMY2wUmbv1uMk03HmzpvCNW87Cxsv86Pv30/vMYibGlRBuKVKdklHoe8vB0f8NRcd+OHPaqfX3gt7ht/zyD6+d9l1v9v1zhLjAVNhwp+1up6h97Yfrwd4Kt87nC5lSyk1XFdbGvbri/l8qpLPJwrZbJ3R5TYhbLPjqJgjcaVvHautsNZIY62UUkjlOupk2kHKtcWYFEUdmiJGHI2n0oNuMlGqaajLNrY2DdU2NWTTU7ycmCNLhNg3XLYMDhE97gH++De7zqfsbs5nKW/d8xXx/Df7Zz58+/7LRjv6ri/1ZM7ShVLSyGE8KZFG4UiFonqbRmHDOFb6KDePNhJBnMGeCvfc/jytU6Zw1bVn0NCQ5prrLkYPKO6640GCYiVSgrdQxhDGQCtBuq3ezDh3se22Zan3HxYtQ1l8ZSgri3aigI/rV0fq6b8kQEAgrUQZgyEkZhzIlunv7WfGmoU0LJvG4Ja9VAzEnQQqBBVGlCMpfJon1XPdu1/LBVeuIRl36erMcOTwID1dAZIUc+e0sWz1dJxYieeeforv/vvTlHzJa15/Ca970zlce+OZHD/ew10/2oMtiEjQzLiUxkgcrwxd1Tc6ck66y33b1e/uu3vWoaU/A3p39lhWtP3XgETe/NZzxhHxY9VHz0ulKkd1r9p57KAaOjSsjhV9kQuNsL4WNjToSiAqhYocZx8IIZjeWhuuXjsnWDpzgZ5Fi35R/fRqN4urr/vX//z0wv6t6m3H2ndcVOgvLTUjfn28oJnUmGT2qmWkkykO7TjKWG8RU/VQF9ZFESO0IVrlULIGHcRwRJqOgzl+9J37qEl7nHPJcuYtmML5V5/Bzp172L/pCDESYC2BKxmhSGxybbF51bxvt5w+94X2e/d/0uk+tmRyEDKMYdS1+BJiVb7N722AGCJosVOV+HespDZQ9GYKFFxdWrpq0bNebiTWs7v3tGI+jNfjkbAuHg4VEzJ72nTWnrmUhnqXoe4c9/x0Hbu2tROPxTFhSCY3ylB/AUErtbUtFDMez23pYGj0KRqmprjytadz1jnLWP/gXkZyRwkdyEpw/CQ1flLInKgzg6WL28c6F3UdPLZm/sV/9fxH/+Vru//0uw/s/cp7rxz7wL88xDc/euV/36z7xKYeVzr9vVlv/8x9LFwxueHi9/1waf+hviVu3l4VDvmXMVhKxPwS0i3TMCvGa964irXnzKI23sDWdYd54sGN7Nt+GGErIBJYm0I5LgaXIBRIkQDjISwc2TvAbT98EFdJZi2YyzM7DtEznCVGkrhxcYVDwRaJTYrnJ62ddc/iK1d/fU8+V9Zjg/kaXcElEtDTIpp9SCuRRr7q8OqXwGIxURr+RgEiBL4CpzqUEliSocKrGJCMLjrnlH9xDg0cq4TOV47vOXppXAhc40RkHhJk+nLs3XCAOVNrWPfYJn5y8yOUC4KrXnsKmdwgu3cfYd3je1lx6myWLF7FtdeF9PQ9wP69x9i+rYPLrzqTmdMW0tLYxFB7Jy1taZYvmc3xQzmy3RV0JSDMh+Q7sm3lft4l62re3l7IHu3b2/HUJW+54/mkP+/pu7bnOg7u7LMfu3E+/39bP94yiBLCfe6hPfN37jp09o6nDl5YGfDPKg2NTiVb8uIVhRc6uEiCsMj0GY28/k3nsvyUKYhQsmDBPGbPn8/dP32AbVt2MDI8DARI6+LYdBQcKDQa15HoQPDCur2ERYfpM2fz1IYt9HVlSYsajOdR0D40yrG586Z9Y8WZZ379a9e/vfv8r31pmiIslWVIjpCyMjhWIkOBq6s6wy97Y3qxMMbLbXXnJc7V3+rAtiLSo/KNxgiDqxUxI0haBymhIsryZ995876r/+Leb4SlUmP+yOAKUQlcpRII7XGso5f7b30UW86yZesu+o4XOHXNGdz43qsYzXXxH/86xrr1u1i+cj6vuX4Jl7z2TI73a3744zs51jHKgR1Zsv2WYjFEOJozz57PBdddxP6Ng9z3kw0M9xSjLkZooaioFAJnZGRoATW5eYW64evLx/uf3Pro+rtypcLOt/7JncNveMvFw2866+ISbP5/MiB6rGUqiG/fdyT9yN0b6r/10e+1JFOJM7LF8rv7BzJLM5lSQgyXhBv4OFrjiASOcKpaZ2D8EoRljA0YHMoTd9Ocf+UCWqbXcO/dNTz+6HMc78lQLrkkqMWVschhV/gEuhJx+YM4u7f0sn/nKLlCDo9aSq5LRgWYOsoz5039wUWXn/alx3741PBln/ssdel40KMoFqUmLy2+iETHXRvB91+pUKA4CdcsfpMT5HdduoqgDByNtAYPiyckVhgCSuK8T91t3/aGK+5LmbHBvSr85Ojh/AUjmYKXFi6OTnJw81Gyfb1kjSUME0yZ0srshTUsSM/k+fVz+OH3tvCf33wIFctwyRtXcuOHT8fGhnng5+v5t8/eS9qZzOiwYcHiNVx/w+tZc9EiWuPd7NzZybKzppDP5Ti0ay+FvgKUQec9/KKS4UC+/ljn2BtM0l7pNrsD27Zt7dh5dNu+eVeff3BK29vaZ0yb0ztr1pRjpyyb3rdlT6/+7NtP+V8ZFG94842cdtG7U8d6ema988P/OXOof3iB8u0qna3MLfRmpgcj/mSbI+b4Hq3SIa2yNEz2aJjWxqHuQQYGMzgyjfCTlPoEpe4yenWFnXv3MNBT4czTV7PizClMmfsmTjl7CQ8+sI5Nzx4me0xQDisoESClQcgQKRykTlAppNHWoQlJxrUMJkL8SU5x5qqp99e2Nvzn0wcODa979qO85nM/I24tCGvKDhSdiAwVD0HpSB7vv2IM+6p2sWIhkUGnE0FTxtUGtStl6KHynmTX04+H02e2bdD5yqf22cNu79HsBUHOEw3SwQ3iDHSXyKNwTQ1joyOMjeWYXCdIpEOsM8KBA0Vu/lGGhtlJzj53BW++8Ry6jrTz5P2bCAOPREqz9orLWHDqYjAu7Ud7SKTTvPWdl+DF4fEH02xbv4Oeg2MUhsuYUEfGoL4itE68FJRnjA4EM0iI82Rc6nBYZzLH9Wj3oczuF9YXbsfz9536wVt6vdrAb5vdEK66cIm/fME834C9Rvx+sEIetRY/COStP7w/sWvTgdhwf9ZpqZtSX6htnnf/uiOn50bHXu8PF6eMDY00BIWiJysat6xJ6hhxG8NBIqxP25xGLnzNGpacuoIf3X4fjzy8D0wSlySloktmNEQRp5w33H3noxzvHOOtN17B5CkpLnvNGUyfOZVpk5/l0fs20t0xhNFxpI1hbbQ3pFBYabHGkJchwzaDqo+V5y6dce8Z557xN9/60Dkdo9V67bLP/gTfGmGwSmpwQkDKyNBVnDy8/j0NEAnEQoFnoVTFJUkiPrCMOaiUg0h4/Mf/vZI/+Zfbw59+533PvvYD3/wHLfs+MXJ47OxS1iRjwkHYBI6No7Vl3/69rHuymevecR4XX3o2+3cNsfm5w2x44SB1Nz3B3PmTmTGviTe+6TLad/6cPfsOs2j1TM67YiWJ+gRH9o/y9FM7yY1pKtkR5sxu4P0fuYK+N57PE4/uZv/GI/Qf6WFgOMvIWImKNkjfISZi4Ev8kUAVh4435t3RxuMimGNVeGmsxinWNaZ6ddob6zuYGdy2Nb97U3HrOr/C4PXveyBI1CWCmoYa3017Bk/YZE08qGuqq9BcAzGHZMLR6RRhcwp9Zi3BZ8F+6aTPMQC5JWrIICx0F1H5AjJfQAUVq1J+GJjhnBgeGY0VMgWvUvCdYs53c2P5WDaTjRWzReer132/zomJVZly/hQnZ+bV5r2mgQOd9e1ju+OExCTK9fwQ/IAEke5y3PWIOS7G1xM6wdNXLueqd72GqbNqOT5ynL1bexno8QGPgh8yXCyilMfi+Ysp5e/l9tvvZNqMOl537Vmka1MsXT6DWTNbWbNqGQ/fv4EXnj3A6EAARmF0iDAh2DKBEuSTZWpa645PXTLtP5aft/Qn17z/tM7P/nwrf/vaCHxqpCBUAiuEcC3EjaASaRoxbu2izO/9CSKIY8nZE/mgkJJQoXwZxAIZNWu++tEbmL10hf3wx9+6/q6fbP7Y5gd2fmJoe9eVYWgSDgmkSeA6JYZHBnn4gQ2sXDOfZSvn8ycfvZ6ffP8ZHn7iKIVcG6VSiBBlJk+up7k5Tm2D5vLXrWTRmhYKGh5/7ijPbzqMzAR87wuDnH7BZC544xpmrFrBZfPP5aIbzmBo7yDbNh1gw1Pbad/Xi847mAoo7eCRRpczBAyhhRChkkl/jGTYN9qcjcUYlYLeeNdloeu+TSbivpfwKirp+rGUVxKe0CIubaou6dfU1ZRMQxIbc4i5bhBzndBzVHCXlL4U1nxISi0k1sQSKkA6Ogwn4EJaGycMA1WuVJzQD1SyUPJ1tigzmWwiN5aPh2XjmlB6filIVEqVRKVQ9kSmmHZDWtBCiUAifEuqIkgHNQij8KwkYTM4QhCLx6lprWPK7DbcVIJjA310dffSOzzE+p5jXNQ7xMyFzZyzejUb5uxlXc8RytInJ0IGgxxYqE+mWTZ/FbOnzWPFsmXEXUVuZAipU9TVpLjwqiU0ttSSy2nWP7YPo6O5iZQh1pYJEgp/bmp00cq53778rNVfyRZLxUvc+IvTd+UQug5COCSspAaJtYYykYA22Jc04XxVA0RKiVBK/3bJnKHi+Pg2RbJiKDsVBuJ5AlNDS8bz04V4rimbPDGZvnIxn/zhXjNj9rydgzMG/9wxQXtnZ+a9Yjiob8tX8IxDUG5g34YR/vNLT/GuD9ewcNVMPviJa7nyxg4cqZjc2Iwtx+jp7KRvrIczLljApa85k9raFId2DrLp509T6BtBmqls2u6wp3MnuXiGDy9eyIxEE4WUpGXFZJaubOPci07hkQd2kxkdoKN9B8cODpPtn4ryG9DWB0dHiuk2jqgkkGWBtHmk6ksrEU+HJkUoHKz0MDIEWQYVUHYdxtwY1qunYjXC0Sjl4rmpqupDAMIiZRwpEhgTYGwRawNEKCJ/Qi0J/DLW+igNNvQxuowNQtAewsYIzLidnI81ilArXBIoU1UskSGoaKOVsPipAqedsZyLLjqblafMYNK0GMqDscESG9e1c8uPHuPA1k423/0CF6+eRduSSVzytnPZfKib8lAFVfTx+8fIlHMkpjrc+BcXkvASNCSTbNtwjAduf4zm+GSuuvY8/Mk+jzyznj079yDLAtcmCa2lJMuUY5q66akDLXPqPjVt1sJ7PvZHa4tfvPnAL+2uWNBM0rRoVTpQqhjXjjlFUXAcEgHEdJGyo6moBOKVDEKq9CCLwVgzoWf2UoxQ5xd780L89rLGkaizIqYlUMEXIdoYnFAar+KFbvhiHOWn3rmEUWv1+57e33nOVbP/2dm0P350697/M2TLsXjo4WmFLHlsfmInQSnPa99yIWddvow1py1BhIa4TNB7sMwjD26hb/AYb37PxcyaM4XQGvbuOszh3UcRWiGlR9GXJFWCmTPnEo/FOd6R5/6frkOEBc67aC3pVDNuLMmp5yznhnefxXOP7eaWb24n01dBSAeryhhRATQmsLgkUdLFEQm01sRECEZi/ArWhrhuZBQWaoOWmqrnEdIxlANLweYQSiEdjbYBxiggHg3nZQlpQxxchI1hw6qEqIgMg4QIUCKoIlUVwhqUFFgFgQkJZYijYlhdQEiJspHSpMagdZlkfZyzrlzKje9+Iwvnz8JzQLkaKTWtLU00N7RSLir+7V9/zIF9nfR3jzFn6WTWnLuIeUsns+GpvVhfkhkIKGUrNE2JM39mG9nhkAfvfYGH7nqKHS/soz7ewp7Dg+i6MXZv3s9YT0jMNqHRlFVAMeXTvGBq72nnnvLpC19Xf1tv95gG+Mu3L/ylvaWI4YikFcbRFkEgIvXKiC2oJ5J69YpGhfYl/voKoCavjufQSS9m+RVxeWI1CMFXbtnOvHkLBzva1//z4BSx2zRN+Yuh9r65NVlEAxJZgD3P7mVwoI/1G+YwZ/EU6muT+AXDri0dPPPM86w5fRlrz1+J40n2H+rkwQefZnTURxDDmAClQladsogzzzwHz0uzZ9dO7rz9cfIjgzy7bi9NLTM4erSf65rPYsnKFcRUjEfu28VAX5aYFDhxyxlnraB50mT6ekoc3tPPcJ8PugYrM0hZABNixx2jhCDULkZ4WBFDqSD6Iq3FFRIpXaxVoFWkoqLANxEFVgoHJSQKBxtGIgWOiCyfwQdhJgQ0hFUIHSkcaqsRyhKLa1JpD8dK8tkCYUniyjQGiyJk8ZKpvO1d57B0ZTO7tx7mhfW76e7qor4+xmmnL0dKRVf3XoR0aW8f4LlntzF13sVMmpbm9LPnsWf7QTKDMNSvKQ0FuK0OR3YNcOuPHubxRzfR15unWPQYyZYYfG4vNaJAJasjJRIhCNwybmus0Dq3/u7Ywro73LOa13/yaw/rrp/806/cJ0pJHFchpTTiv7EZ4vxXPrmtdpqliDoNQrz0mPNP37YKwH70uzu7Tr288Qfbt23rP7h518cG9xw/fXggEClf4ZYTtO/K0HloGw1Tj2ATIaFvGR0dorbW4TWvuYC5s9soFiqse3wbm9YfJCilEMoS2AKxpGHVKTNomdRCWIajewfoPFDCliWjA+248X5Kgc/BlVPIjqyhsS3BzMUxdu/KEirF2Rcs5/0ffhO1DWn2buvlh998iMHeMWKiDm0EockjHYVRPtpqrIhYhulUPW5MEAZF/GIeaxyUcFHCR4o0xjhoXYQwH500QoKJ7ojagtXVQBEejvJg3B1KEP1pwQiNsdH8Z+GiWZx+0WKWrJhJ/7FufnLLPXQdzuKIFDqIUrrlS6Zzyqo1dHYNcssPHuapR3eSHS1QW5vkhfW9WBsyPJghly8yPJrhsUc3ceYFy5m3eBoXXLaY557ZxPNPDjKahZFslllyEr2dI6x/aCudB/uJu80khUtFWsKCJR7U4AqP406Z4Zoyqbm1hYUrZv34tFVLPvXFP7nw2KZvWcQbz/71G1U5uK5rlZRmQnpC/Nfza15KWfFVhFNERbqQwkohjZS//hX+5b0r+Pide8pL1y5+INc/NJDrHbneJO31o0OVyU4WanSSeNky2F6g7GgMARVd5MxTz2LZ4oW4rqKnfYQNj++mOCJwZQIjS1iTo21mA6eePZ9kTZye9gy7tndhApeU00yg81QKBm0Fne19jI5lmTKzgTmLpqJqNrB40WJueOdrWbJ6BpVymZ7jxxgc6ceKEI1GiHqUTaBNHp8iiVrBjNlTWLJkEYuXziaeiFPIFji0r5sD+9rp7uollx3FNRJr4qTSCVqnxLFJn1CCiki9OFISky6OiFMuhvR0D5HL6uqNRkxIZoIhMGVq0y4XXnYWb7jxbCZNSzE6NJ+evk6OH38Wv6Cr4gwWV1k8V+G6hniqQNssWLh0KjXpNC3NLdTVNpGM19Dd3ceGjS/wwrbtPL9uF7PmTmXeolmcdtZidmwZYijXz2iYwypwEy5SusSJE7cKjcFRGqMtJVJkZEC+wZiWJVP2Ns1s/tHCNUtu/eKHLzz2SrFkynFwXc9KKc2LLCP+OwMkUvz+Hc3rfoFJIoVASYlUEqVensv12WuXAlTe99WfPztvzaW7Du0b2Hp0V/eH8kdGTiscr4iEieGJBKERKBniSkVprMKh3ceIuSk2PX+YozsGoBzHWgjDgHS94LyLl7J4dRvWGHZu3s+urfsQ2kWpGNKJ3Mf9SoXe4yOMDGWZu7SNhSvmsfz0mbzhdRdwxrmLyefKPHTvc9x2y90c784Rd5uwgY/RKQwxQvK0tDVy4RVrOP/i01iyZC5TpydQKTBl6D4ScHDvcZ556lkef/RJ+rvGELaeGbNmcu1bVtM4QxFaiyuTOMpBIXCFIB5L03m4nx9+/05ymUwk1VNVsAcJUhL6PiquWLR8MtMXRA2A1poGLn/d+WzbeJwDW4s4jgtCMjo6Rj5TYOasSbzjXZfT2zdAKpWirqaB5oapNNbXYQwc7x1j5s+b+ea3fsSOLR1cdkWeSdNrOOucFTzx4AEGhvoZyGU43DnClh0HqJSDqG7SBs+BcpjHSslgMkliemNu3uKGu2acN+OHk+bWPK8DU/qNxggycv8VQhgB/20CSy8KEG0MQmvX/lbBOc7HfjE320bRbx3HsY7rvuJn+86fXM23nyplF8+t3Pqgundwj5+9xpf+uQPDpQVu3pNJW4fWZSRp9u7s4rtf/ymnrVnDgb3djHZaXB1BrbEhLZNTnHvJSuqbkoz0F9m97QjDfcN4sgFLBWvLCBSucMmMVjjeOUJY0cyfP5t3ve8a1pyyCCktTz28i1u/9wz9nQGeqMHaEGQOiwfCIV4TcNaFy3jXB69k9rzJDA2O8vzze8jlR3GTCaZOmcvZl89kxrI4JjXET296jsJIkZopMc593QpmLGikNOqTGS4SBCFhxSeM8iLSgwmESCBkoXrHlVUdLzAmGic3NCdompqkVPbp7uyloTnNklWLuPK1F9Pb9TjZ0TKucDh04DhPPLSTM85bzLzZi5g1cx65fI5yqczQ8HHGMgO0Tm5i3soUl4lVPPf0LnZtPc6+bb20TqllwdI5XHz5Sm6/7XG2PbGXg+uP8+Q9mxjpK2NUihARiYQLUE2qXJ4V7qmdKe9be+bC733pTy459rWfHeIj1/3WeLeoUfUq2Tf8ZjXIq+Sn8Sv+5Tc+mt5/QQLAf+OHbntg9fJVj6ZWeBfs2rfrr3NdubVhbyHuBz6OVORDya69XezZ24ljUiRFK1porPCxwrJ02QoWLF4AyqGvd4Q929shMHjKgg0RooIwMRw8irkK2zYf4pxLlzNz5iRmzpxEMVdk3WN7+P637mfvzh7iKg1CY0UQkWBkllKYYfXSVm54xyXMWzqZ451Z7rr9We796X2MDg3g1DmsPf9i3vH2G1h+yiSuf8dlHD44xDOP9GAdjfDKCGnpaB/h3p89y9hwgcAvYXQJv6TJDgt6e3wEbtTpsif0Eo01GBEwc84UpsxsIjOa486fPMjc+bN43esv4U1vu5h9e7p59IHnCCqGAweO8/Wv3Me2zUNMnz4N5cTo7R1gYHCA/sF2VKzE1des5Zo3n05zUx1zZszi7juf5NF7drBgznRCCS0tzSRdxVM3b6FQCLE6hZU1VJQi8Aw6rWiYPGl42pyWO+ZdfcY3MrPrdx/Ye9QAfOSNv3lwhGFIEARYa4REIKWE/4Zi3eF/wfrZ19/M3/38meCiC5Y8/q3vmb6xzUPX9D/Veb6fr6wqBmGjDR3hiBriUqJCjzAEKTVSaeIyxYzps0kkagiLliN7Bug4MoTQAiN9hAIhNEJEqW1YMRw52EV2NENDcy1BJWDT83v43jfvo/PQCHHRUHWWKsO4FBIFkjU+a86aw8IVbVhheXbddu649RGOH86hbILS2CgP3PcEqVgDM+e+ltlzp3DO+aewYV0/gQnQ1scYOHy0mzvuvI/MUBnXsyAquDZGWKrHlBtQwonm7QBWIqVCCY3rSeYvnkFjUw1DA6N0HO3hyOEeVqxYztyFbbzu+rPo6DjEnq3dECQ4fizDPfc8Qm1tAzZwGRzOEYQ+qDFqm8qsOrWNMDiFMFBUyhWCimXz8wd4cOZkynqUFzZtYnQwgzPWQhyPvDQEjoPvCRPEZV+sJXVgxhnL7lh6+qKffvk9SwZv2tHNjR++4renU2hNGATCGCvty7Rm/zcGiPhda6p/uvo8/tFac/4fX7vrO/++b/fjefPVfNy/urs9+0dj/eUzymMFzy+ViKGJOT6eLUMYoNxaDu7v45H7NtHQmOD+u7fQ21smJj2EGjcniyRbpFAQOgRlH2stQsKe7R189yv3sXn9EZywGU84WMpVLw8Ha+L4OkdDOsaS5YuobailVArYvvUQnYfGSNupOBaEiROMBGx/7iDDfaPMX9HE4kWzaaypr4I9JNKB5qm1nHL6KorZkGTCIZUSoB32bB2k60gFNBM8akRkSeBbn6apDSxaMZN4nUO5w2eoN8vho91s3XyQ2fOncuaFs+nuXUt//0MMH/domaQ5/+KVzJ8/i65jx3n4kfUUSxWmTG/k7Avnc91bL6UmPomNW7exc+tuXOtyvLOff//SLZSDHChQsoYiDtaR2BoHWSeHps5uWD9jQdu3Rvr9Jy9ce5mvdcEC3Lhy2u+0gZRSuI6DEMJaTKQaY//rC3Xnt8ybfsPYIKw+fseu2AlHi6/+6Eimri55+/r1+w4fONDzoY59R9fqnJoS5PMpHRRwjMW1DmGoeO75HRzo2khNXZrjRy2eaSCuSvhGo6VCCYkwEmElMuaweOECGhvSWCoc3tfNkT1ZHF2Pi4s1JYQsIqQBm8CaWiCBkpBOTUFKST4bMNSfwcFBmEgt3guSGAsU3ap/oCEVj5NwkjgmjrQuiAzLVrXw1393I8IqXCcy/fHLmpu+8Rhdx54mKLh40plIWiOXXUPb1Dba2iaP41OYNnkaUtZgjEclLBKvDTjvklVsf36AB+88QktTI9e84VLmLm0mlxlk7pIY2axkxcpVzFnQTG1tkiM7xnjywd0M9Q7j4SG1AO3h0kxowHdcxup9G8TLxca22uMzZk26bcXi1d9+74fP7x0eRl+85NXbvl4sRiKd0q7j+kIKa6x5NU0oX2EXS0b+uPYk2ZRx6RQjLY4ROCZqPmsp0DKSdxn3DbFYpI4cVyO/jcjIvlIsHSgXg4PaD161D+xP3jGXFwbL4YLzL9z4hc88s7tSsY0tcefage6j7xgdHpnpjxUbRcmRgYFC3idzeARrhnB1K65JgXSQUmDQkZSOEPjkqK9PcsZZq6lvbKBQGqWzs4exbAmUwhKgTIiwBoxAWgVGoK3Ek3FE6GIDkCIKCmGitM2RHqF2kGhinsWp2tYKC1IFeHGB68QBi3QN8UQcU45F+rGVPJVcmTCooJTFjpPmrKyefZGnx5QpjTQ1NYA1zJw9ib/7uw8QhBobk/jlMsqDaXNauPbGyzjc+TM6Og+xceM+Js8+l4bmyVx2+ZWYMI4SHkMDBZ58cAc/v/1Jdmzaj64YlIgkhbSU+J6HE68hVpsca5vGM/VzG2/OhAPbp55Xe+yad88r//ih+/jnq1/36t7J0w6xehcRdzRS4VTNkKx1CIWK9NqMxYgQhUQYkCeB4I044TMZGaBO+OAJKxC26lr8awMkdATCETIUUXY9riMUKii6lhpfkAqiO21RCEquJRSGWGjwMGgZ4mpNxQErDcoItNQ21H6ufDxTEL7/qn5oZ7TEx+8AhT/+wl2FRfNmfWvXvtTDhzuHz88dLd2QPzp6emF4JGUDB0e34qGISYkkJNSgHYOgTGgkVgZUnAzJhhbSLQ44gvxYif7hAXyVQ0kBoUJID+W7xK2Lg8QhD1SwfgVKRYSBdI3D5NYE0qlQqQRIm6ZsHUQsQ8v0gFg6BjpBJlMi63egVQqEwtgEO7bt5tZvb6A8lMBDgMgQ6BJdnWOIIIkSJlIGrMowhaKMUHlaJyWoa0yAMSjHkkj4jHT2sedwF8cGRllx+mpWnrmQBWe2cPG72rjpy1u47WcPcLhjgDkz5xCPJagUKwwNDNHd3UNXxzH6O8fwi9HUPxAOQdyhGFehbG0YbZw/90jb3LbbF08a/Nmpc+jpGWkwf/2+a7n1ff81qU7gGXx8WU4KL3SUiBkX6cexNkHZtYQiiNisno8TSNxQERMuxkp8aalIgVYGLaO60dNVvxQhpI4sbQhfLkCqJ4aN8C1iwmvc05ZkAKHSZGNRny2hBa0lMBjK0lKRtiraIKsRqtDG4khFzIv5NakaG4/F/8tyxX//2BsAyv9085H9U2bY9oPy6IP5hfkzR8l8cKjz+IpMe38sc3zUS5SkmzSShPFIGw8hUgTWooUlgUcwEuPuW1/g4JEBrFOme1eO2mJNJF2JxXcc/ASE0qJlgFHgBYpKocgLu/ew/NI5tEyq4YxL17BldwcHdvSQr4wijWXFyum89vVrqW+uI9NbZu/mYxRHS3iEOCJA6lpG20usf3QjhT6XlHQxjIEwaJtA0UjolvFVBWzV4EdaUvV1TFs4g1RDnOFcjm99bwsbnz9EZnCI3MgYueFBrrrUZ3rddNpmpDhnykq213fx3AtbefLQOjamtqFcl3IQkC8VqQRlrJF4ug7rxCmktBVNqlg7JT06s7XpB8ODsfvmzJ3Td9V1qwf6ejLld7yp+b+8iJWhRGnHSC20kdaWZSgCtxIp6YgijglxTQI/rMEJDLHqTq7IyG/SCo1rDNJKAqoicmK8ZxwdKC+FQnR+EbIuiDgsarzhXJVqTGooCkvZNQgBMSNwQ6oi1gKDAmtQVlV787JqsqNszPP82vpam0wk/ss/yL97+1yAyjPWdk2GY99/5sj6zk0Hl/Y1ts8Wc0qnl0eKFwwNjMwYGy24pbJGhm50N7YKa+NkM5ZnHt3Jzm2HcBMhIx1lMCmksEg00sgI1mEt0hqMtaAl5UCz7tktrDprDpdccQZrTlvOe96v2Lh+JyNDI6RSDmvPXs45V54BMs6WjYd49IktFAOBcBwC7YMFRyZwSACCwAiUjCOlRZgEWCfyWhcaYcLI7EcHNDdNYuHCeUgJA71jPP/oNrY824EKDK4AE1i2Prubn09qI50KaT98mP6OHCnTii0bBoslAgrgSLSCEAfpOniNybC1tbnHrY9tdiYnHm5bPGnvynNnbH/8tv2Fe798Ovd++b+vk1nJaoojAYRoKyCUIaHjQwgOAa4NcHWcwMRAQEUatNCRqDi26mFvqmJxVSB1FBTjgpYvWfC/GO5uQBistCfXFVHi5iJwtAXHYKShLCI6rYNCGIGDxEoiS15TtbC3oBCY0JhCvkSl4v+3faDniQnLg+M3fuzm48sWTRZOs3vf9iM9s8I+d4Vr7SmqT8yRx1mTG8vXB4VQSN+i/BB/KCQ7PIxjA6Sox4okWI0kxAktMWORkQ8VQhgKjiKLw9H9vfzn129jZHCU884/k8suPpXTVswnl8lBbUjztHq0tDz25CZuufl5dh0cQMtatBvDONHNKLSSAEEoDa7jYqWLb/zIwlmEYDSOsAgbmf4o4TB9UhsxW8fOjcd46qmnye3uZEbewRWKQGo0KQo9GX52810ENku2kMPkZ2BIEFoNbgIZs4iEtMm6hG1saezIlfM39fgD+1uXxrovOn/Nob//o7UD/3nfAd53yaL/kVa/NAplXCuMMGCxMozua0IAIcpoPCvwrUfRNZSEj8WQEBCrEqm0jJoasioRpASoaK/bcYLay6dYVd7JyYaPGkFOeEirqfU1BdcwlrBkkg4qkCQymqQ92Vk1kmBxiLw9pUDEEg6O8z9jeXnTF94+Hiy9d/i293KX52/qrSR33L191kh37wXdnT1L80P51ZWR0vRgpFJrKyoe5PEqFXAqZRJCEtoAhKRiNVIRmexUhV2lVaSJYfNJDm8Y4L6xdQzvK7Ni5QJmzZxMbSxNqazZt+k4+/bs58lHtrHthUHIJ0mpGHYsztjRgKRfINs/hqcrOFajMEh8jKngYFBSIUMHZR2qZzxCehR7ytz/w6coBEMc7TxAMTNEqCQVKxEyhhAOQUXR21sCJFrWkksZRDI0saRbcROqmKqLd8Vrvd2TJrfsWbBgwcZTV5z6QrFcKv6f65tYdyv8wwf+Z2dh1pPomBJWCeUaSAQWJQTCeBgJJRnDICmpnPWn1lT8hlqTHRhINI2Goi5wsdYh7zr40hKjcsK30WKVjRIB9UpTLFHtSCmlIj9vAVop0BqkpeJqktMbc+nm5idNwNTMkd5TwmxZxoVBhwYjqoYzEWIIKQSu6+Ioxf/0epM3cZAWPXv73grX7/2Ln293Zb+a0rWrY07PvmNthd7RFpuuzBYxZpcds6aEnFopgCkGBPkyqmyJWYVnHaQGY0OkVGgTg0CybUc3u/Z2MaWtmXnzplNblybUkq7OLjo7D5MfC3CZhCs8RGjp2zvE7d94CC9l6egYwBYtcVxkKBBC4RKLZiWhQQsVQeJREUoaw8Gj3ew+coCyyWJliCfiSMfFl4qKtfiuwG2qw0knkSmPRNLr80qFZ8PQ7E2lU91NkxoGlq1Zsi3e5vY2XOgEH5t9yu+dl5xT6xFrEAJPKgkkrINr4lSMS6AkJQmlGkl6mjvYOGXSNysNqZ5U2r62fLj38sxo4Ho6Us9RGIzwJ/zmxxV57StJscREd11YhMAIEymIj7fApKCiAryWZN/sNQu+dcE7X/Odg1s6p219+LlPDxw4elEwWpBCeAhRlWswFinBhsYUxor4Rf/36kP3xQ0IbqA6mu4Cuqy1iLP/iCcf+Tf3kRf2Nuw93H9V/3DmnNJgtrbUl60p92bSajRodQp2iiiTEKF0hNXo0BD4SbSvsSqGsAEHezIc6B7BCEiFDcRCgSWJg45MiIjqiO7OQY4f68C6ZQwSHcQjr92qb+C4E68QkoK0aCmiFMuECGERBqzjIJMNeHEH5XgYoaxwnCCerhl1UqmOeFvroDe5uRhvbSy2TG/duXoGP/2nS2Z0396z37552mIeu/v3G01hXEvoIIwTcSdcFEYLhPCoEFBwBa0zWwYmneV+ZeUpq762e/Pu3Oqly3dsEbpm8NDQufGMkDWVOBifwLGEmAm0ToTRtS+JtHJeaqw3DjQMjCF0qwrZJiDvlTRt7qGZp874+qJFM3/4yI+fzX7za9f1fsaMfWJbY+mTmS2lS8oDfgwt8KzGCcBaa02obVAJ0EHI7/saH0ZemP52YK0d+PkpwY+e3nr8tv6OPjmS7JXF2IhacPGUyQP5wqresezSQhguCAcGC7Z/LLRlZ6ouqBoTKg/leMpLTjc4rYFW5Mr1lEMDKoaV+ciX3AaEgQTtADWEpEEppPIw1kFbGSnuA54ApaCiCuDacdvqUR0GR43VFScWK8Xi3qBIx4fFnMnNsXQ8PzmW2DujpXWrLTh7R8qJQuP8GbZxZquZPEPpekP4jd3YDy1f/L8BbYTjgRfHSlcYIZU1eMKIOMZVlBNFm5hWs33mqbO+teSSxrtCW86dvuYMVs2bvykXFj5WqlMfG9k5dkmix6+JKUnBFcTCSI1RW4utFvAvZX7k/PJIUQiDFaGwGCUIFeR0GRGDhjmNHcvOW/WpK955zR07n94aPPPdN3Hn24+bW/76yhfe8pk7P97hC9O3vfeSwlApYa1BCBVBNqwwnox8VP83rWqw/JI06JOQWWftAQ9E91gltvWFPv3py2cGtzxSTnYdGknncrl4Pj8czxQHVueL5bWFkm3AJJNSaFcz5gQmm/BD39OBUForxxpiBuOgVUkIaawUSiMU0jWeGy87QoYxJcqupCJUJSeVLTuoSk0yvbOpbtIT9fX1+cbWxuLCpdNz31i/ObzwwlmJJauag04IlgHniP9dn/tLLVdIYg7WFU4YKpcxISh6IUGsGLbOrtk258xFX3r/22746RPrduiv/PUqAP7slufMfd+peeHGf7j8b/Z4W8t9Qfs1mayf8K0hqQS2ai4kpARrIwDkywaItUIIiQZCYfGtId5QYyfNa743Mdn9QqypsuP/nLI4+MzPfgrAJy6cyv+99XFSzfE9rpB/6pYTb+051PORyuDQpMAarBBGSVGqq0lbz3H4f2Wde6JLVgb4TLWuqT7oHOnHTc48dP/zh+8+dtTGBkXBKUktfT8uijmjKpWK1EbJ0EeUfV8FQShSMq0V0oZURCisdFzPxhMJ7TqOScSFTsSNbo7Hw8aUE9bXx83yxU3+eW2nh+3sZ46YMfHefl59D/8vrTBfIcyF1lS0LlprA6UxNfFgyszJj8xfXvOpRecmd7xmLbpzuHbid/71bWv5+I+eIp4Uh7tazV84p89+oa9z5GOVzr4pvu9Hc3YlIwKaeGnilvMrwSkiGg84iVhxxsrF65a8buWX/uODa58ff5K/feNZEz//b2+5GEDf8IF7j17+hmv+9fnHni537dj9p8WusTawgQl15zXnueGBDS7/f1kzGyeNf5S/bI/wh/UbL1WxuBWs8NGB68KkOt22es5zq9au/swP/+bMF25+sOMlN/hn33EB//rMsN53xVjvdVOW37Xn3p0z3Xu2XF852jNVaCm0NQREFOfQmpeZg1gfaTEVpWy+1kNM0aW2+tqb25onfensK9Z2vNxFvPlNr+UNF19S+LOP/t23kfmx7amev8+FtCibr/mHuwbF/sGeP3zTf1i/5Rwkh+cXsd6oFFNKZvKkSY+1zWj+0qpLztz8f7/fxVffM/tX/u6fndfEp7sCUtOd7mBP5fNyQdemI7HKx/uPB8tEiE/Z5CVg/ZeT/QnziMARRlZsbGbL8KSz2340t835fKaU73/bHMHbXuYi3nBxFMF1l34+e1HdVTeP3Xcw3tHZ9ZeBEzr7N24U2ULmD9/0H9ZvtRpiAenSiG2dVjsqa5fcsWDBlE9fc03T/sNHnrdffc/Le1B+YoYLYN72+dsGTnm7+xOz7rQBc3D0HyqVSuPe9TtCgYhqkV8XICmVQSBN6xSxo6k29bVFq+c/8Y33ru3/1EOH+PlvcDFrTzuVz33xzvLaUxf8sDFR6S6WSr6SBeqbFPv/8F3/Yf0Wq16UCMb6iiun134zGzaV98aX9d13X6f98fvW/kbPc8tfv5kv3N6rr7ms9ulH1eN/OTo2eoGlnAVeskh/UdL2th8+CEKsVUN+/OOvOeOphQtafycNorK1GGvl1x/rdDuGSn4qpuwX3rjwD9/2H9b/+PrGoyVc1xWFQiExNDTkCyHCSqXCF963+FcHyAtHHwQQSa/GjhYHOG/BtX/4JP+w/rD+sP6w/rD+sP6w/rD+sP6w/rD+sP6w/rD+m9b/BysqbtMPIUrnAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA3LTIxVDE4OjQ5OjA3KzAwOjAwYa2/TwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNy0yMVQxODo0OTowNyswMDowMBDwB/MAAAAASUVORK5CYII="
          doc.addImage(img5, "PNG", 140, 5, 20, 20)

          doc.setFont("times")
          doc.setFontSize(30)
          doc.setTextColor(0, 0, 0)
          doc.writeText(
            0,
            38,
            document.getElementById("instituteNme").innerText,
            {
              align: "center",
            }
          )

          doc.setFont("times")

          doc.setFontSize(12)
          doc.setTextColor(51, 51, 51)
          doc.writeText(0, 50, document.getElementById("byVirtue").innerText, {
            align: "center",
          })

          doc.setFont("times")
          //doc.setFontType("normal");
          doc.setFontSize(12)
          doc.setTextColor(51, 51, 51)
          doc.writeText(
            0,
            55,
            document.getElementById("theSyndicate").innerText,
            {
              align: "center",
            }
          )

          doc.setFont("times")
          doc.setFontSize(12)
          doc.setTextColor(51, 51, 51)
          doc.writeText(
            3,
            60,
            document.getElementById("hasConferred").innerText,
            {
              align: "center",
            }
          )

          /* html2canvas(document.getElementById("stdNme"),{
                         onrendered: function(canvas){
                             var img=canvas.toDataURL("image/png");
                             var doc=jsPDF;
                             doc.addImage(img,'JPEG',0,72),{
                                 align:'center'
                             }
                         }
                     });*/

          doc.setFont("times")
          doc.setFontSize(30)
          doc.setTextColor(51, 51, 51)
          doc.writeText(0, 72, document.getElementById("stdNme").innerText, {
            align: "center",
          })

          doc.setFont("times")
          doc.setFontSize(13)
          doc.setTextColor(51, 51, 51)
          doc.writeText(0, 78, document.getElementById("whoHas").innerText, {
            align: "center",
          })

          doc.setFont("times")
          doc.setFontSize(13)
          doc.setTextColor(51, 51, 51)
          var a = document.getElementById("semesterPra").innerText
          console.log(a)
          if (a.match(/Sp/g)) {
            doc.writeText(
              72,
              78,
              document.getElementById("semesterPra").innerText,
              {
                align: "center",
              }
            )
          } else {
            doc.writeText(
              70,
              78,
              document.getElementById("semesterPra").innerText,
              {
                align: "center",
              }
            )
          }

          doc.setFont("times")
          doc.setFontSize(13)
          doc.setTextColor(51, 51, 51)
          doc.writeText(0, 84, document.getElementById("forThe").innerText, {
            align: "center",
          })

          doc.setFont("times")
          doc.setFontSize(21)
          var insSub = document.getElementById("subPra").innerText
          //doc.setFontSize(13);

          doc.setTextColor(51, 51, 51)
          doc.writeText(0, 95, insSub, {
            align: "center",
            setFontSize: 10,
          })
          doc.setFont("times")
          doc.setFontSize(13)
          var withHoners = " with Honorsers"
          doc.writeText(87, 95, withHoners, {
            align: "center",
          })

          doc.setFont("times")
          doc.setFontSize(13)
          doc.setTextColor(51, 51, 51)
          doc.writeText(0, 105, document.getElementById("withAll").innerText, {
            align: "center",
          })

          doc.setFont("times")
          doc.setFontSize(13)
          doc.setTextColor(51, 51, 51)
          doc.writeText(0, 110, document.getElementById("givenAt").innerText, {
            align: "center",
          })
          doc.setFont("times")
          doc.setFontSize(13)
          doc.setTextColor(51, 51, 51)
          doc.writeText(0, 115, document.getElementById("onThe").innerText, {
            align: "center",
          })

          doc.setFont("times")
          doc.setFontSize(17)
          doc.setTextColor(51, 51, 51)
          doc.text(30, 150, document.getElementById("f").innerText)

          doc.setFont("times")
          doc.setFontSize(17)
          doc.setTextColor(51, 51, 51)
          doc.text(15, 185, document.getElementById("y").innerText)

          doc.setFont("times")
          doc.setFontSize(17)
          doc.setTextColor(51, 51, 51)

          doc.text(222, 150, document.getElementById("h").innerText)

          doc.setFont("times")
          doc.setFontSize(17)
          doc.setTextColor(51, 51, 51)

          doc.text(230, 185, document.getElementById("x").innerText)

          doc.setFontSize(13)
          doc.setFont("times")
          doc.setTextColor(51, 51, 51)
          var tx = document.getElementById("txSpan").innerHTML
          var addr = "http://115.127.24.188:8000/#/transaction/" + tx

          var textX = 70,
            textY = 200
          doc.textWithLink(tx, textX, textY, {
            url: addr,
          })
          /*doc.setFontSize(8);
                    doc.setFont("times");
                    doc.setTextColor(222, 118, 103);
                    doc.text(170, 205),
                        "https://ropsten.etherscan.io/tx/0x35fc8d4438b433714b3ea7290275f4936bb25afd1bb2cbac3dce4b081f82716b"
                    );*/

          doc.setFont("times")
          doc.setFontSize(25)
          doc.setTextColor(255, 255, 255)

          //doc.text(15, 180, document.getElementById("i").innerText);
          doc.setFontSize(25)
          //doc.text(15, 190, document.getElementById("j").innerText);
          doc.setFontSize(17)
          doc.setTextColor(0, 0, 0)
          var hf = document.getElementById("k").getAttribute("href")

          var textX = 133,
            textY = 180
          doc.textWithLink("Verify Here!", textX, textY, {
            url: hf,
          })

          doc.setFontSize(12)
          doc.setTextColor(255, 255, 255)
          //doc.text(15, 200, document.getElementById("l").innerText);

          doc.setFontSize(15)
          doc.setFont("times")
          doc.setTextColor(255, 255, 237)
          //doc.save('InstituteCertificate.pdf'); // Save the PDF .

          var binary = doc.output()
          doc.save("InstituteCertificate.pdf")
          bPdf = binary ? btoa(binary) : ""
        },
      })
    }

    function qrCode() {
      var tx = document.getElementById("txSpan").innerHTML
      var name = document.getElementById("name")
      var issueDate = document.getElementById("datepicker-autoclose")
      var verify = document.getElementById("k")
      var baddress = tx
      var n = name.value
      var d = issueDate.value
      var val3 =
        "Institute: " +
        insName +
        "\nSubject: " +
        subName +
        "\nStudent: " +
        n +
        "\nSemester: " +
        semesterName +
        "\nIssue Date: " +
        d +
        "\nBlockchain Address: http://115.127.24.188:8000/#/transaction/" +
        baddress
      var qrcode = new QRCode(document.getElementById("qrCode"), {
        text: val3,
        width: 160,
        height: 160,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      })

      /*var qrcode = new QRCode("qrCode");                    
            function makeCode() {
                var name = document.getElementById("name");
                var cgpa = document.getElementById("cgpa");
                var issueDate = document.getElementById("datepicker-autoclose");
                var issuarName = document.getElementById("issuerName");
                var issuerDesignation = document.getElementById("issuerDesignation");
                var verify = document.getElementById("k");
                var baddress = document.getElementById("m").getAttribute("href");
                var n = name.value;
                var c = cgpa.value;
                var d = issueDate.value;
                var isn = issuarName.value;
                var isd = issuerDesignation.value;
                var val = "Institute Name: "+insName+"\nSubject Name: "+subName+"\nStudent Name: "+n+
                "\nCGPA: "+c+"\nIssue Date: "+d+"\nIssuer Name: "+isn+"\nIssuer Designation: "+isd+"\nVerify Here: "
                +verify+"\nBlockchain Address: "+baddress;
                var val2 = insName+"\n"+subName+"\n"+n+"\n"+c+"\n"+d+"\n"+isn+"\n"+isd+"\n"+verify+"\n"+baddress;
                
                qrcode.makeCode(val);
            }
            makeCode();*/
    }
    $("#logoutBtn").click(function () {
      sessionStorage.removeItem("accessToken")
      window.location.href = "login.html"
    })
  }
})
